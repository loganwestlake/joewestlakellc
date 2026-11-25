import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { docTotal } from "../ledger";
import { Icon } from "./icons";
import { fmtDate, money, todayISO, useBooks, type Page } from "./books";
import type { Edition } from "../data/types";

// ── Navigation: what exists now, and what each later milestone adds ──
export const NAV: { group: string; items: { page: Page; label: string; icon: string; milestone?: number }[] }[] = [
  { group: "", items: [{ page: "dashboard", label: "Home", icon: "home" }] },
  { group: "Money", items: [
    { page: "banking", label: "Banking", icon: "bank", milestone: 2 },
    { page: "sales", label: "Sales & invoices", icon: "sales", milestone: 3 },
    { page: "customers", label: "Customers", icon: "people", milestone: 3 },
    { page: "expenses", label: "Expenses & bills", icon: "expenses", milestone: 4 },
    { page: "vendors", label: "Vendors", icon: "people", milestone: 4 }
  ] },
  { group: "Operations", items: [
    { page: "projects", label: "Projects", icon: "projects", milestone: 5 },
    { page: "time", label: "Time", icon: "clock", milestone: 5 },
    { page: "payroll", label: "Payroll", icon: "payroll", milestone: 5 },
    { page: "inventory", label: "Products & services", icon: "inventory", milestone: 5 },
    { page: "taxes", label: "Taxes", icon: "taxes", milestone: 5 },
    { page: "mileage", label: "Mileage", icon: "timer", milestone: 5 }
  ] },
  { group: "Accounting", items: [
    { page: "accounts", label: "Chart of accounts", icon: "accounting" },
    { page: "journal", label: "Journal", icon: "accounting" },
    { page: "reports", label: "Reports", icon: "reports" },
    { page: "auditLog", label: "Audit log", icon: "lock" }
  ] }
];

export const EDITIONS: Record<Edition, string> = {
  general: "General", contractor: "Contractor", manufacturing: "Manufacturing & Wholesale", nonprofit: "Nonprofit",
  services: "Professional Services", retail: "Retail", accountant: "Accountant"
};

// ── + New overlay: everything you can create, grouped like the classic four columns ──
type QC = { label: string; shortcut?: string; action: "journal" | { planned: number } };
const QUICK_CREATE: { title: string; items: QC[] }[] = [
  { title: "Customers", items: [
    { label: "Invoice", shortcut: "Ctrl+Alt+I", action: { planned: 3 } }, { label: "Receive payment", action: { planned: 3 } }, { label: "Estimate", action: { planned: 3 } },
    { label: "Sales order", action: { planned: 3 } }, { label: "Sales receipt", action: { planned: 3 } }, { label: "Credit memo", action: { planned: 3 } },
    { label: "Refund receipt", action: { planned: 3 } }, { label: "Statement", action: { planned: 3 } }, { label: "Add customer", shortcut: "Ctrl+Alt+C", action: { planned: 3 } }] },
  { title: "Vendors", items: [
    { label: "Expense", shortcut: "Ctrl+Alt+X", action: { planned: 4 } }, { label: "Check", shortcut: "Ctrl+Alt+W", action: { planned: 4 } }, { label: "Bill", action: { planned: 4 } },
    { label: "Pay bills", action: { planned: 4 } }, { label: "Purchase order", action: { planned: 4 } }, { label: "Vendor credit", action: { planned: 4 } },
    { label: "Credit card credit", action: { planned: 4 } }, { label: "Print checks", action: { planned: 4 } }] },
  { title: "Employees", items: [
    { label: "Run payroll", action: { planned: 5 } }, { label: "Single time activity", action: { planned: 5 } }, { label: "Weekly timesheet", action: { planned: 5 } }, { label: "Contractor payment", action: { planned: 5 } }] },
  { title: "Other", items: [
    { label: "Journal entry", action: "journal" }, { label: "Bank deposit", action: { planned: 3 } }, { label: "Transfer", action: { planned: 2 } },
    { label: "Inventory qty adjustment", action: { planned: 5 } }, { label: "Pay down credit card", action: { planned: 2 } }, { label: "Product or service", action: { planned: 5 } }, { label: "Mileage trip", action: { planned: 5 } }] }
];

function QuickCreate({ onClose }: { onClose: () => void }) {
  const { openDrawer } = useBooks();
  const run = (q: QC) => { onClose(); openDrawer(q.action === "journal" ? { kind: "journal" } : { kind: "planned", title: q.label, milestone: q.action.planned }); };
  return (
    <div className="fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Create new">
      <div className="absolute inset-0 bg-black/10" onClick={onClose} />
      <div className="absolute left-2 sm:left-[248px] top-14 right-2 sm:right-auto sm:w-[760px] card shadow-pop p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {QUICK_CREATE.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-ink-3 mb-2">{col.title}</div>
              <ul className="space-y-0.5">{col.items.map((q) => (
                <li key={q.label}><button type="button" onClick={() => run(q)} className="w-full text-left text-sm px-2 py-1.5 rounded hover:bg-gray-100 flex items-center justify-between gap-2">
                  <span className={q.action === "journal" ? "text-ink" : "text-ink-2"}>{q.label}</span>
                  {q.action !== "journal" && <span className="text-[10px] text-ink-3">M{q.action.planned}</span>}
                </button></li>))}</ul>
            </div>))}
        </div>
      </div>
    </div>
  );
}

// ── Stopwatch timer in the top bar (keeps running across reloads) ──
function Stopwatch() {
  const key = "books.timer";
  const [state, setState] = useState<{ start: number | null; acc: number }>(() => { try { return JSON.parse(localStorage.getItem(key) || "") || { start: null, acc: 0 }; } catch { return { start: null, acc: 0 }; } });
  const [, tick] = useState(0);
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(state)); } catch { /* ignore */ } }, [state]);
  useEffect(() => { if (!state.start) return; const t = setInterval(() => tick((n) => n + 1), 1000); return () => clearInterval(t); }, [state.start]);
  const ms = state.acc + (state.start ? Date.now() - state.start : 0);
  const s = Math.floor(ms / 1000), hms = [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60].map((n) => String(n).padStart(2, "0")).join(":");
  return (
    <div className="hidden md:flex items-center gap-1 rounded-md border border-line px-1.5 h-8">
      <button type="button" className="p-1 rounded hover:bg-gray-100" aria-label={state.start ? "Pause timer" : "Start timer"}
        onClick={() => setState((x) => (x.start ? { start: null, acc: x.acc + Date.now() - x.start } : { ...x, start: Date.now() }))}>
        <Icon name={state.start ? "pause" : "play"} className="w-3.5 h-3.5" />
      </button>
      <span className={`font-mono text-xs tabular-nums ${state.start ? "text-ink" : "text-ink-3"}`}>{hms}</span>
      {ms > 0 && !state.start && <button type="button" className="text-[10px] text-ink-3 hover:text-ink px-1" onClick={() => setState({ start: null, acc: 0 })}>Reset</button>}
    </div>
  );
}

function Popover({ button, children, label }: { button: ReactNode; children: ReactNode; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const h = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); }; document.addEventListener("mousedown", h); return () => document.removeEventListener("mousedown", h); }, []);
  return (
    <div className="relative" ref={ref}>
      <button type="button" className="p-2 rounded-md text-ink-2 hover:bg-gray-100 hover:text-ink relative" aria-label={label} aria-expanded={open} onClick={() => setOpen((o) => !o)}>{button}</button>
      {open && <div className="absolute right-0 top-11 w-80 card shadow-pop z-40 max-h-[70vh] overflow-y-auto">{children}</div>}
    </div>
  );
}

// ── Command palette (Ctrl/Cmd + K): pages, actions, accounts, contacts, transactions, amounts, check numbers ──
function CommandPalette({ onClose }: { onClose: () => void }) {
  const { snap, go, openDrawer, accountById } = useBooks();
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  // Focus explicitly: Preact doesn't do React's autoFocus-on-mount.
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    const out: { group: string; label: string; sub?: string; run: () => void }[] = [];
    const pages = NAV.flatMap((g) => g.items);
    const amount = Number(term.replace(/[$,]/g, ""));
    const isAmount = /^\$?[\d,]+(\.\d{1,2})?$/.test(term) && Number.isFinite(amount);
    for (const p of pages) if (!term || p.label.toLowerCase().includes(term)) out.push({ group: "Go to", label: p.label, run: () => go(p.page) });
    if (!term || "journal entry".includes(term) || "new journal".includes(term)) out.push({ group: "Create", label: "New journal entry", run: () => openDrawer({ kind: "journal" }) });
    if (term.length >= 2) {
      for (const a of snap.accounts) if (a.name.toLowerCase().includes(term) || a.code.startsWith(term)) out.push({ group: "Accounts", label: `${a.code} ${a.name}`, run: () => go("accounts") });
      for (const c of snap.contacts) if (c.displayName.toLowerCase().includes(term)) out.push({ group: "Contacts", label: c.displayName, sub: c.roles.join(", "), run: () => go(c.roles.includes("customer") ? "customers" : "vendors") });
      for (const t of snap.transactions) {
        const total = t.amount ?? docTotal(t);
        const who = snap.contacts.find((c) => c.id === t.contactId)?.displayName || "";
        // "2170" could be a check number or $2,170: match either.
        const hit = (isAmount && total === Math.round(amount * 100)) || [t.number, t.checkNumber, t.memo, who, t.type].some((x) => x && String(x).toLowerCase().includes(term));
        if (hit) out.push({ group: "Transactions", label: `${t.type}${t.number ? ` #${t.number}` : ""}${t.checkNumber ? ` · check ${t.checkNumber}` : ""}${who ? ` · ${who}` : ""}`, sub: `${fmtDate(t.date)} · ${money(total)}${t.accountId ? ` · ${accountById(t.accountId)?.name || ""}` : ""}`, run: () => go("journal") });
        if (out.length > 60) break;
      }
    }
    return out.slice(0, 40);
  }, [q, snap, go, openDrawer, accountById]);
  useEffect(() => setSel(0), [q]);
  const pick = (i: number) => { results[i]?.run(); onClose(); };
  let lastGroup = "";
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Search">
      <div className="absolute inset-0 bg-ink/20" onClick={onClose} />
      <div className="relative mx-auto mt-[10vh] w-[min(640px,calc(100%-24px))] card shadow-pop overflow-hidden">
        <div className="flex items-center gap-2 px-4 border-b border-line">
          <Icon name="search" className="w-4 h-4 text-ink-3" />
          <input ref={inputRef} className="flex-1 h-12 outline-none text-sm placeholder:text-ink-3" placeholder="Search transactions, amounts, check numbers, customers, vendors, accounts, pages…" value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, results.length - 1)); }
              else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
              else if (e.key === "Enter") { e.preventDefault(); pick(sel); }
              else if (e.key === "Escape") onClose();
            }} />
          <span className="kbd">Esc</span>
        </div>
        <div className="max-h-[60vh] overflow-y-auto py-1">
          {results.length === 0 && <div className="px-4 py-8 text-sm text-ink-3 text-center">No matches</div>}
          {results.map((r, i) => {
            const head = r.group !== lastGroup ? (lastGroup = r.group) : null;
            return (
              <div key={i}>
                {head && <div className="px-4 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-wide text-ink-3">{head}</div>}
                <button type="button" onMouseEnter={() => setSel(i)} onClick={() => pick(i)} className={`w-full text-left px-4 py-2 flex items-center justify-between gap-3 ${i === sel ? "bg-gray-100" : ""}`}>
                  <span className="text-sm text-ink truncate">{r.label}</span>{r.sub && <span className="text-xs text-ink-3 truncate">{r.sub}</span>}
                </button>
              </div>);
          })}
        </div>
      </div>
    </div>
  );
}

export function Shell({ children, onSignOut, email }: { children: ReactNode; onSignOut: () => void; email: string }) {
  const { page, go, snap, openDrawer, isDemo } = useBooks();
  const [collapsed, setCollapsed] = useState(() => { try { return localStorage.getItem("books.rail") === "1"; } catch { return false; } });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false);
  const [palette, setPalette] = useState(false);
  const [panel, setPanel] = useState<null | "assistant" | "settings">(null);
  const [bookmarks, setBookmarks] = useState<Page[]>(() => { try { return JSON.parse(localStorage.getItem("books.bookmarks") || '["dashboard","reports"]'); } catch { return ["dashboard"]; } });
  useEffect(() => { try { localStorage.setItem("books.rail", collapsed ? "1" : "0"); } catch { /* ignore */ } }, [collapsed]);
  useEffect(() => { try { localStorage.setItem("books.bookmarks", JSON.stringify(bookmarks)); } catch { /* ignore */ } }, [bookmarks]);

  // Global shortcuts
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && !e.altKey && k === "k") { e.preventDefault(); setPalette((p) => !p); return; }
      if (e.ctrlKey && e.altKey) {
        const map: Record<string, [string, number]> = { i: ["Invoice", 3], x: ["Expense", 4], w: ["Check", 4], c: ["Customer", 3] };
        if (map[k]) { e.preventDefault(); openDrawer({ kind: "planned", title: map[k][0], milestone: map[k][1] }); }
      }
      if (k === "escape") { setNewOpen(false); setPanel(null); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [openDrawer]);

  const today = todayISO();
  const alerts = useMemo(() => {
    const out: { label: string; page: Page }[] = [];
    const overdue = snap.transactions.filter((t) => t.type === "invoice" && t.dueDate && t.dueDate < today && t.status !== "paid");
    const paidIds = new Set(snap.transactions.filter((t) => t.type === "payment").flatMap((t) => (t.applied || []).map((a) => a.txId)));
    const reallyOverdue = overdue.filter((t) => !paidIds.has(t.id));
    if (reallyOverdue.length) out.push({ label: `${reallyOverdue.length} overdue invoice${reallyOverdue.length === 1 ? "" : "s"}`, page: "sales" });
    const uncategorized = snap.journalEntries.filter((e) => e.lines.some((l) => l.accountId === "acct_6990" || l.accountId === "acct_4990")).length;
    if (uncategorized) out.push({ label: `${uncategorized} uncategorized transaction${uncategorized === 1 ? "" : "s"}`, page: "journal" });
    if (!snap.org?.closingDate) out.push({ label: "Books have never been closed", page: "settings" });
    return out;
  }, [snap, today]);
  const recent = useMemo(() => [...snap.transactions].sort((a, b) => (b.date + b.id).localeCompare(a.date + a.id)).slice(0, 8), [snap.transactions]);

  const rail = (
    <nav className={`flex flex-col h-full bg-white border-r border-line ${collapsed ? "w-[64px]" : "w-[240px]"} transition-[width] duration-150`} aria-label="Main">
      <div className="h-14 flex items-center gap-2 px-3 border-b border-line">
        <div className="w-8 h-8 rounded-md bg-slatebtn text-white text-xs font-bold flex items-center justify-center shrink-0">JW</div>
        {!collapsed && <div className="min-w-0"><div className="text-sm font-semibold truncate">{snap.org?.name || "Books"}</div>
          <div className="text-[10px] text-ink-3 truncate">{EDITIONS[snap.org?.edition || "general"]} edition{isDemo ? " · demo" : ""}</div></div>}
      </div>
      <div className="p-3">
        <button type="button" onClick={() => setNewOpen((o) => !o)} className={`btn-primary w-full ${collapsed ? "px-0" : ""}`} aria-expanded={newOpen}><Icon name="plus" className="w-4 h-4" strokeWidth={2.25} />{!collapsed && "New"}</button>
      </div>
      <div className="flex-1 overflow-y-auto px-2 pb-3">
        {!collapsed && bookmarks.length > 0 && (
          <div className="mb-3">
            <div className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wide text-ink-3">Bookmarks</div>
            {bookmarks.map((b) => { const it = NAV.flatMap((g) => g.items).find((x) => x.page === b); return it ? <button key={b} type="button" onClick={() => { go(b); setMobileOpen(false); }} className="w-full text-left text-sm px-2 py-1.5 rounded text-ink-2 hover:bg-gray-100 flex items-center gap-2"><Icon name="star" className="w-3.5 h-3.5 text-ink-3" />{it.label}</button> : null; })}
          </div>)}
        {NAV.map((g) => (
          <div key={g.group || "home"} className="mb-2">
            {g.group && !collapsed && <div className="px-2 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-wide text-ink-3">{g.group}</div>}
            {g.items.map((it) => {
              const on = page === it.page;
              return (
                <div key={it.page} className="group relative">
                  <button type="button" title={it.label} onClick={() => { go(it.page); setMobileOpen(false); }}
                    className={`w-full flex items-center gap-2.5 rounded-md px-2 h-9 text-sm relative ${on ? "bg-gray-100 text-ink font-medium" : "text-ink-2 hover:bg-gray-50 hover:text-ink"}`} aria-current={on ? "page" : undefined}>
                    {on && <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r bg-ink" />}
                    <Icon name={it.icon} className="w-[18px] h-[18px]" />
                    {!collapsed && <span className="truncate flex-1 text-left">{it.label}</span>}
                    {!collapsed && it.milestone && <span className="text-[9px] text-ink-3 border border-line rounded px-1">M{it.milestone}</span>}
                  </button>
                  {!collapsed && <button type="button" aria-label={`Bookmark ${it.label}`} onClick={() => setBookmarks((b) => (b.includes(it.page) ? b.filter((x) => x !== it.page) : [...b, it.page]))}
                    className={`absolute right-8 top-2 p-0.5 rounded opacity-0 group-hover:opacity-100 ${bookmarks.includes(it.page) ? "text-ink" : "text-ink-3"}`}><Icon name="star" className="w-3 h-3" /></button>}
                </div>);
            })}
          </div>))}
      </div>
      <div className="border-t border-line p-2 flex items-center gap-1">
        <button type="button" onClick={() => setCollapsed((c) => !c)} className="btn-ghost h-8 px-2 hidden lg:inline-flex" aria-label={collapsed ? "Expand menu" : "Collapse menu"}><Icon name={collapsed ? "chevron" : "chevronLeft"} /></button>
        {!collapsed && <span className="text-[11px] text-ink-3 truncate flex-1">{email}</span>}
        <button type="button" onClick={onSignOut} className="btn-ghost h-8 px-2" aria-label="Sign out" title="Sign out"><Icon name="logout" /></button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block sticky top-0 h-screen shrink-0">{rail}</div>
      {mobileOpen && <div className="lg:hidden fixed inset-0 z-40"><div className="absolute inset-0 bg-ink/20" onClick={() => setMobileOpen(false)} /><div className="absolute inset-y-0 left-0">{rail}</div></div>}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-30 h-14 bg-white border-b border-line flex items-center gap-1 sm:gap-2 px-2 sm:px-4">
          <button type="button" className="lg:hidden btn-ghost h-9 px-2" aria-label="Open menu" onClick={() => setMobileOpen(true)}><Icon name="menu" /></button>
          <button type="button" onClick={() => setPalette(true)} className="flex-1 min-w-0 max-w-xl h-9 rounded-md border border-line bg-gray-50 hover:bg-white text-left px-3 text-sm text-ink-3 flex items-center gap-2">
            <Icon name="search" /><span className="truncate flex-1">Search or jump to…</span><span className="kbd hidden sm:inline-flex">Ctrl K</span>
          </button>
          <div className="flex-1" />
          <Stopwatch />
          <Popover label="Recent transactions" button={<Icon name="clock" className="w-[18px] h-[18px]" />}>
            <div className="px-4 py-2.5 text-xs font-semibold text-ink-2 border-b border-line">Recent transactions</div>
            {recent.length ? recent.map((t) => (
              <button key={t.id} type="button" onClick={() => go("journal")} className="w-full text-left px-4 py-2 hover:bg-gray-50 flex justify-between gap-3 text-sm">
                <span className="truncate">{t.type}{t.number ? ` #${t.number}` : ""} <span className="text-ink-3">· {snap.contacts.find((c) => c.id === t.contactId)?.displayName || ""}</span></span>
                <span className="text-ink-2 tabular-nums shrink-0">{money(t.amount ?? docTotal(t))}</span>
              </button>)) : <div className="px-4 py-6 text-sm text-ink-3">Nothing yet</div>}
          </Popover>
          <Popover label="Notifications" button={<><Icon name="bell" className="w-[18px] h-[18px]" />{alerts.length > 0 && <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D97706]" />}</>}>
            <div className="px-4 py-2.5 text-xs font-semibold text-ink-2 border-b border-line">Notifications</div>
            {alerts.length ? alerts.map((a) => <button key={a.label} type="button" onClick={() => go(a.page)} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm border-b border-line last:border-0">{a.label}</button>) : <div className="px-4 py-6 text-sm text-ink-3">All caught up</div>}
          </Popover>
          <button type="button" className={`p-2 rounded-md hover:bg-gray-100 ${panel === "assistant" ? "bg-gray-100 text-ink" : "text-ink-2"}`} aria-label="Assistant" onClick={() => setPanel((p) => (p === "assistant" ? null : "assistant"))}><Icon name="sparkle" className="w-[18px] h-[18px]" /></button>
          <button type="button" className={`p-2 rounded-md hover:bg-gray-100 ${panel === "settings" ? "bg-gray-100 text-ink" : "text-ink-2"}`} aria-label="Settings" onClick={() => setPanel((p) => (p === "settings" ? null : "settings"))}><Icon name="settings" className="w-[18px] h-[18px]" /></button>
        </header>
        <main className="flex-1 min-w-0 p-4 sm:p-6">{children}</main>
      </div>
      {newOpen && <QuickCreate onClose={() => setNewOpen(false)} />}
      {palette && <CommandPalette onClose={() => setPalette(false)} />}
      {panel && <SidePanel kind={panel} onClose={() => setPanel(null)} />}
    </div>
  );
}

function SidePanel({ kind, onClose }: { kind: "assistant" | "settings"; onClose: () => void }) {
  const { snap, store, orgId, toast, go } = useBooks();
  const [closing, setClosing] = useState(snap.org?.closingDate || "");
  return (
    <aside className="fixed right-0 top-14 bottom-0 w-full sm:w-[380px] bg-white border-l border-line shadow-pop z-30 flex flex-col" aria-label={kind === "assistant" ? "Assistant" : "Settings"}>
      <div className="h-12 px-4 border-b border-line flex items-center justify-between">
        <div className="text-sm font-semibold">{kind === "assistant" ? "Assistant" : "Company settings"}</div>
        <button type="button" className="btn-ghost h-8 px-2" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
      </div>
      {kind === "assistant" ? (
        <div className="p-4 text-sm text-ink-2 space-y-3">
          <p>The assistant will answer questions from your live books (“Who owes me over 30 days?”, “Compare Q1 vs Q2 margin”), draft reminders and flag anything unusual.</p>
          <p className="text-ink-3">Coming in Milestone 6. The Company AI on your current dashboard keeps working until then.</p>
        </div>
      ) : (
        <div className="p-4 space-y-5 overflow-y-auto">
          <div>
            <label className="label" htmlFor="edition">Industry edition</label>
            <select id="edition" className="input" value={snap.org?.edition || "general"} onChange={async (e) => { await store.updateOrg(orgId, { edition: e.target.value as Edition }); toast("Edition updated"); }}>
              {Object.entries(EDITIONS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
            <p className="text-[11px] text-ink-3 mt-1">Turns on the extra screens for that kind of business as they're built (Milestone 6 completes this).</p>
          </div>
          <div>
            <label className="label" htmlFor="closing">Close the books through</label>
            <div className="flex gap-2">
              <input id="closing" type="date" className="input" value={closing} onChange={(e) => setClosing(e.target.value)} />
              <button type="button" className="btn-primary" onClick={async () => { await store.updateOrg(orgId, { closingDate: closing || null }); toast(closing ? `Books closed through ${fmtDate(closing)}` : "Books reopened"); }}>Save</button>
            </div>
            <p className="text-[11px] text-ink-3 mt-1">Nothing dated on or before this can be added or changed. It's enforced by the database rules, not just the screen.</p>
          </div>
          <button type="button" className="btn-secondary w-full" onClick={() => { onClose(); go("auditLog"); }}>View audit log</button>
        </div>
      )}
    </aside>
  );
}
