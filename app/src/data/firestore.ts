// Firestore-backed store. Every posting runs in a Firestore transaction: it re-reads the company's closing date,
// builds and validates the journal entry, then writes the document, the entry and the audit log together.
import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  collection, doc, getDoc, getDocs, initializeFirestore, onSnapshot, persistentLocalCache, persistentMultipleTabManager,
  query, runTransaction, setDoc, updateDoc, where, type Firestore
} from "firebase/firestore";
import { defaultChartOfAccounts, reverseEntry, validateEntry, type Account, type JournalEntry, type Transaction } from "../ledger";
import { ROLE_PERMISSIONS, areasFor } from "./permissions";
import { buildEntry, emptySnapshot, type Snapshot, type Store } from "./store";
import type { AuditLog, Organization } from "./types";

export const firebaseConfig = {
  apiKey: "AIzaSyAngYDBkXD6iW_drxB-CgsFID1hevE4mlU",
  authDomain: "joe-westlake-llc.firebaseapp.com",
  projectId: "joe-westlake-llc",
  storageBucket: "joe-westlake-llc.firebasestorage.app",
  messagingSenderId: "54204985542",
  appId: "1:54204985542:web:1a3f7d157c34dff15267c7"
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
export function firebase() {
  if (!app) {
    app = initializeApp(firebaseConfig);
    db = initializeFirestore(app, { localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }) });
  }
  return { app: app!, db: db! };
}

const rid = (prefix: string) => `${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
const strip = <T extends object>(o: T): T => JSON.parse(JSON.stringify(o)); // Firestore rejects `undefined`

export class FirestoreStore implements Store {
  private accountsCache = new Map<string, Account[]>();
  constructor(public readonly uid: string, public readonly email: string) {}
  newId = rid;
  private get db() { return firebase().db; }
  private orgRef(orgId: string) { return doc(this.db, "organizations", orgId); }
  private sub(orgId: string, col: string, id: string) { return doc(this.db, "organizations", orgId, col, id); }

  async listOrgs(): Promise<Organization[]> {
    // Companies where you have a member document. (Owners always do.)
    const owned = await getDocs(query(collection(this.db, "organizations"), where("ownerUid", "==", this.uid)));
    return owned.docs.map((d) => ({ ...(d.data() as Organization), id: d.id }));
  }

  async createOrg(data: Omit<Organization, "id" | "ownerUid" | "createdAt">, opts = { seedAccounts: true }) {
    const id = rid("org");
    const org: Organization = { ...data, id, ownerUid: this.uid, createdAt: new Date().toISOString() };
    await setDoc(this.orgRef(id), strip(org));
    await setDoc(this.sub(id, "members", this.uid), { uid: this.uid, email: this.email, role: "admin", permissions: ROLE_PERMISSIONS.admin, areas: areasFor(ROLE_PERMISSIONS.admin) });
    if (opts.seedAccounts !== false) {
      for (const a of defaultChartOfAccounts(org.baseCurrency)) await setDoc(this.sub(id, "accounts", a.id), strip(a));
    }
    return org;
  }

  watch(orgId: string, onChange: (s: Snapshot) => void) {
    const snap = emptySnapshot();
    const unsubs = [onSnapshot(this.orgRef(orgId), (d) => { snap.org = d.exists() ? ({ ...(d.data() as Organization), id: d.id }) : null; onChange({ ...snap }); })];
    for (const col of ["accounts", "transactions", "journalEntries", "contacts", "items", "auditLogs"] as const) {
      unsubs.push(onSnapshot(collection(this.db, "organizations", orgId, col), (qs) => {
        (snap as unknown as Record<string, unknown[]>)[col] = qs.docs.map((d) => ({ ...d.data(), id: d.id }));
        if (col === "accounts") this.accountsCache.set(orgId, snap.accounts);
        onChange({ ...snap });
      }));
    }
    return () => unsubs.forEach((u) => u());
  }

  private auditDoc(a: Omit<AuditLog, "id" | "at" | "uid" | "email">): AuditLog {
    return { ...a, id: rid("log"), at: new Date().toISOString(), uid: this.uid, email: this.email };
  }

  async postTransaction(orgId: string, input: Omit<Transaction, "id"> & { id?: string }) {
    const tx: Transaction = { ...input, id: input.id || rid("tx") } as Transaction;
    const accounts = this.accountsCache.get(orgId) || (await getDocs(collection(this.db, "organizations", orgId, "accounts"))).docs.map((d) => d.data() as Account);
    let entry: JournalEntry | null = null;
    await runTransaction(this.db, async (t) => {
      const orgSnap = await t.get(this.orgRef(orgId));
      if (!orgSnap.exists()) throw new Error("Company not found");
      entry = buildEntry(tx, rid("je"), { ...(orgSnap.data() as Organization), id: orgId }, accounts, this.uid); // throws if unbalanced / locked
      t.set(this.sub(orgId, "transactions", tx.id), strip({ ...tx, createdBy: this.uid, createdAt: new Date().toISOString() }));
      if (entry) t.set(this.sub(orgId, "journalEntries", entry.id), strip(entry));
      const log = this.auditDoc({ action: "create", collection: "transactions", docId: tx.id, summary: `${tx.type} ${tx.number || ""}`.trim() });
      t.set(this.sub(orgId, "auditLogs", log.id), strip(log));
    });
    return { tx, entry };
  }

  async reverseEntry(orgId: string, entryId: string, date: string, memo?: string) {
    const accounts = this.accountsCache.get(orgId) || [];
    // The reversal's id is fixed, so an entry can only ever be reversed once.
    const revId = `rev_${entryId}`;
    let rev!: JournalEntry;
    await runTransaction(this.db, async (t) => {
      const [orgSnap, origSnap, existing] = await Promise.all([t.get(this.orgRef(orgId)), t.get(this.sub(orgId, "journalEntries", entryId)), t.get(this.sub(orgId, "journalEntries", revId))]);
      if (!origSnap.exists()) throw new Error("Entry not found");
      if (existing.exists()) throw new Error("This entry was already reversed.");
      const org = orgSnap.data() as Organization;
      rev = validateEntry(reverseEntry(origSnap.data() as JournalEntry, revId, date, memo), { accounts: Object.fromEntries(accounts.map((a) => [a.id, a])), closingDate: org.closingDate });
      rev = { ...rev, createdBy: this.uid, createdAt: new Date().toISOString() };
      t.set(this.sub(orgId, "journalEntries", revId), strip(rev));
      const log = this.auditDoc({ action: "reverse", collection: "journalEntries", docId: entryId, summary: `Reversed ${entryId}` });
      t.set(this.sub(orgId, "auditLogs", log.id), strip(log));
    });
    return rev;
  }

  async saveDoc<T extends { id?: string }>(orgId: string, col: "accounts" | "contacts" | "items", data: T) {
    const id = data.id || rid(col.slice(0, 4));
    const ref = this.sub(orgId, col, id);
    const before = await getDoc(ref);
    await setDoc(ref, strip({ ...data, id }), { merge: true });
    const log = this.auditDoc({ action: before.exists() ? "update" : "create", collection: col, docId: id, summary: `${before.exists() ? "Updated" : "Added"} ${col.slice(0, -1)}` });
    await setDoc(this.sub(orgId, "auditLogs", log.id), strip(log));
    return id;
  }

  async updateOrg(orgId: string, patch: Partial<Organization>) {
    const before = (await getDoc(this.orgRef(orgId))).data() as Record<string, unknown>;
    await updateDoc(this.orgRef(orgId), strip(patch));
    const diff: AuditLog["diff"] = {};
    for (const [k, v] of Object.entries(patch)) diff[k] = { from: before?.[k] ?? null, to: v };
    const log = this.auditDoc({ action: "closingDate" in patch ? "close_books" : "settings", collection: "organizations", docId: orgId, summary: "Company settings changed", diff });
    await setDoc(this.sub(orgId, "auditLogs", log.id), strip(log));
  }
}
