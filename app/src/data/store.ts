// One interface for reading and writing the books. FirestoreStore talks to Firebase; MemoryStore keeps everything
// in the browser (demo company, tests). Posting goes through `postTransaction`, which builds the journal entry with
// the ledger engine, refuses unbalanced or closed-period entries, and writes the document, entry and audit log together.
import {
  defaultChartOfAccounts, postingFor, reverseEntry, validateEntry, type Account, type JournalEntry, type Transaction
} from "../ledger";
import type { AuditLog, Contact, Item, Member, Organization } from "./types";

export type CollectionName = "accounts" | "transactions" | "journalEntries" | "contacts" | "items" | "auditLogs" | "members";
export interface Snapshot { org: Organization | null; accounts: Account[]; transactions: Transaction[]; journalEntries: JournalEntry[]; contacts: Contact[]; items: Item[]; auditLogs: AuditLog[]; }
export const emptySnapshot = (): Snapshot => ({ org: null, accounts: [], transactions: [], journalEntries: [], contacts: [], items: [], auditLogs: [] });

export interface Store {
  readonly uid: string;
  readonly email: string;
  listOrgs(): Promise<Organization[]>;
  createOrg(org: Omit<Organization, "id" | "ownerUid" | "createdAt">, opts?: { seedAccounts?: boolean }): Promise<Organization>;
  /** Live updates for one company. Returns an unsubscribe function. */
  watch(orgId: string, onChange: (s: Snapshot) => void): () => void;
  /** Validate, post and audit a business document atomically. */
  postTransaction(orgId: string, tx: Omit<Transaction, "id"> & { id?: string }): Promise<{ tx: Transaction; entry: JournalEntry | null }>;
  /** Undo a posted entry with a reversing entry (the original is never edited). */
  reverseEntry(orgId: string, entryId: string, date: string, memo?: string): Promise<JournalEntry>;
  saveDoc<T extends { id?: string }>(orgId: string, col: "accounts" | "contacts" | "items", data: T): Promise<string>;
  updateOrg(orgId: string, patch: Partial<Organization>): Promise<void>;
  newId(prefix: string): string;
}

/** "billPayment" → "Bill payment" */
export const humanType = (t: string) => t.replace(/([A-Z])/g, " $1").toLowerCase().replace(/^./, (c) => c.toUpperCase());

/** Shared by both stores: turn a document into a validated journal entry (or null for non-posting documents). */
export function buildEntry(tx: Transaction, entryId: string, org: Organization, accounts: Account[], uid: string): JournalEntry | null {
  const lines = postingFor(tx);
  if (!lines) return null;
  return validateEntry(
    { id: entryId, date: tx.date, memo: tx.memo || `${humanType(tx.type)}${tx.number ? ` #${tx.number}` : tx.checkNumber ? ` #${tx.checkNumber}` : ""}`, sourceType: tx.type, sourceId: tx.id, lines,
      currency: tx.currency || org.baseCurrency, exchangeRate: tx.exchangeRate || 1, createdBy: uid, createdAt: new Date().toISOString() },
    { accounts: Object.fromEntries(accounts.map((a) => [a.id, a])), closingDate: org.closingDate }
  );
}

const rid = (prefix: string) => `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;

// ── In-memory store (demo company, tests). Optionally saved to localStorage. ──
export class MemoryStore implements Store {
  private orgs = new Map<string, { snap: Snapshot; listeners: Set<(s: Snapshot) => void> }>();
  constructor(public readonly uid = "demo-user", public readonly email = "demo@example.com", private persistKey?: string) {
    if (persistKey) {
      try {
        const saved = JSON.parse(localStorage.getItem(persistKey) || "null") as Record<string, Snapshot> | null;
        if (saved) for (const [id, snap] of Object.entries(saved)) this.orgs.set(id, { snap, listeners: new Set() });
      } catch { /* start fresh */ }
    }
  }
  newId = rid;
  private save() {
    if (!this.persistKey) return;
    try { localStorage.setItem(this.persistKey, JSON.stringify(Object.fromEntries([...this.orgs].map(([k, v]) => [k, v.snap])))); } catch { /* storage full or blocked */ }
  }
  private emit(orgId: string) {
    const o = this.orgs.get(orgId)!;
    const copy: Snapshot = { ...o.snap, accounts: [...o.snap.accounts], transactions: [...o.snap.transactions], journalEntries: [...o.snap.journalEntries], contacts: [...o.snap.contacts], items: [...o.snap.items], auditLogs: [...o.snap.auditLogs] };
    o.listeners.forEach((l) => l(copy));
    this.save();
  }
  private get(orgId: string) { const o = this.orgs.get(orgId); if (!o) throw new Error("Company not found"); return o; }
  async listOrgs() { return [...this.orgs.values()].map((o) => o.snap.org!).filter(Boolean); }
  async createOrg(data: Omit<Organization, "id" | "ownerUid" | "createdAt">, opts = { seedAccounts: true }) {
    const org: Organization = { ...data, id: rid("org"), ownerUid: this.uid, createdAt: new Date().toISOString() };
    const snap = emptySnapshot();
    snap.org = org;
    if (opts.seedAccounts !== false) snap.accounts = defaultChartOfAccounts(org.baseCurrency);
    this.orgs.set(org.id, { snap, listeners: new Set() });
    this.save();
    return org;
  }
  watch(orgId: string, onChange: (s: Snapshot) => void) {
    const o = this.get(orgId);
    o.listeners.add(onChange);
    queueMicrotask(() => this.emit(orgId));
    return () => o.listeners.delete(onChange);
  }
  private audit(snap: Snapshot, a: Omit<AuditLog, "id" | "at" | "uid" | "email">) {
    snap.auditLogs.unshift({ ...a, id: rid("log"), at: new Date().toISOString(), uid: this.uid, email: this.email });
  }
  async postTransaction(orgId: string, input: Omit<Transaction, "id"> & { id?: string }) {
    const o = this.get(orgId), s = o.snap;
    const tx: Transaction = { ...input, id: input.id || rid("tx") } as Transaction;
    const entry = buildEntry(tx, rid("je"), s.org!, s.accounts, this.uid);   // throws before anything is written
    s.transactions.push(tx);
    if (entry) s.journalEntries.push(entry);
    this.audit(s, { action: "create", collection: "transactions", docId: tx.id, summary: `${tx.type} ${tx.number || ""} for ${((entry?.totalDebit ?? 0) / 100).toFixed(2)}`.trim() });
    this.emit(orgId);
    return { tx, entry };
  }
  async reverseEntry(orgId: string, entryId: string, date: string, memo?: string) {
    const o = this.get(orgId), s = o.snap;
    const orig = s.journalEntries.find((e) => e.id === entryId);
    if (!orig) throw new Error("Entry not found");
    if (s.journalEntries.some((e) => e.reversalOf === entryId)) throw new Error("This entry was already reversed.");
    const rev = validateEntry(reverseEntry(orig, rid("je"), date, memo), { accounts: Object.fromEntries(s.accounts.map((a) => [a.id, a])), closingDate: s.org!.closingDate });
    s.journalEntries.push({ ...rev, createdBy: this.uid, createdAt: new Date().toISOString() });
    this.audit(s, { action: "reverse", collection: "journalEntries", docId: entryId, summary: `Reversed ${orig.memo || entryId}` });
    this.emit(orgId);
    return rev;
  }
  async saveDoc<T extends { id?: string }>(orgId: string, col: "accounts" | "contacts" | "items", data: T) {
    const s = this.get(orgId).snap;
    const list = s[col] as unknown as { id: string }[];
    const id = data.id || rid(col.slice(0, 4));
    const i = list.findIndex((x) => x.id === id);
    const before = i >= 0 ? list[i] : null;
    if (i >= 0) list[i] = { ...list[i], ...data, id }; else list.push({ ...data, id });
    this.audit(s, { action: before ? "update" : "create", collection: col, docId: id, summary: `${before ? "Updated" : "Added"} ${col.slice(0, -1)} ${(data as { name?: string; displayName?: string }).name || (data as { displayName?: string }).displayName || id}` });
    this.emit(orgId);
    return id;
  }
  async updateOrg(orgId: string, patch: Partial<Organization>) {
    const s = this.get(orgId).snap;
    const diff: AuditLog["diff"] = {};
    for (const [k, v] of Object.entries(patch)) diff[k] = { from: (s.org as unknown as Record<string, unknown>)[k], to: v };
    s.org = { ...s.org!, ...patch };
    this.audit(s, { action: "closingDate" in patch ? "close_books" : "settings", collection: "organizations", docId: orgId, summary: "Company settings changed", diff });
    this.emit(orgId);
  }
  /** Members of a demo company (always just you, as admin). */
  member(): Member { return { uid: this.uid, email: this.email, role: "admin", areas: [], permissions: [] }; }
}
