// Shared state for the open company: the store, the live snapshot, and helpers every screen uses.
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Account, JournalEntry } from "../ledger";
import { accountTotals, signedBalance } from "../ledger";
import type { Snapshot, Store } from "../data/store";

export type Page =
  | "dashboard" | "banking" | "sales" | "customers" | "expenses" | "vendors" | "projects" | "time" | "payroll" | "reports"
  | "taxes" | "mileage" | "inventory" | "accounts" | "journal" | "auditLog" | "settings";

interface Ctx {
  store: Store;
  snap: Snapshot;
  orgId: string;
  page: Page;
  go: (p: Page) => void;
  balances: Map<string, number>;
  accountById: (id: string) => Account | undefined;
  openDrawer: (d: DrawerKind) => void;
  drawer: DrawerKind | null;
  closeDrawer: () => void;
  toast: (msg: string, kind?: "ok" | "error") => void;
  isDemo: boolean;
}
export type DrawerKind = { kind: "journal"; entry?: JournalEntry } | { kind: "planned"; title: string; milestone: number };

const BooksCtx = createContext<Ctx | null>(null);
export const useBooks = () => { const c = useContext(BooksCtx); if (!c) throw new Error("useBooks outside provider"); return c; };

export function BooksProvider({ children, store, snap, orgId, page, go, toast, isDemo }: { children: ReactNode; store: Store; snap: Snapshot; orgId: string; page: Page; go: (p: Page) => void; toast: Ctx["toast"]; isDemo: boolean }) {
  const [drawer, setDrawer] = useState<DrawerKind | null>(null);
  const balances = useMemo(() => {
    const totals = accountTotals(snap.journalEntries);
    return new Map(snap.accounts.map((a) => [a.id, signedBalance(a, totals.get(a.id))]));
  }, [snap.journalEntries, snap.accounts]);
  const byId = useMemo(() => new Map(snap.accounts.map((a) => [a.id, a])), [snap.accounts]);
  const value: Ctx = { store, snap, orgId, page, go, balances, accountById: (id) => byId.get(id), drawer, openDrawer: setDrawer, closeDrawer: () => setDrawer(null), toast, isDemo };
  return <BooksCtx.Provider value={value}>{children}</BooksCtx.Provider>;
}

export const todayISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
export const addDaysISO = (iso: string, n: number) => { const [y, m, d] = iso.split("-").map(Number); const x = new Date(y, m - 1, d + n); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`; };
export const fmtDate = (iso?: string) => (iso ? new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—");
export const money = (cents: number) => (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" });
