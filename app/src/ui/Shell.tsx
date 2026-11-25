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
      <div className="absolute left-2 md:left-[100px] top-16 md:top-3 right-2 md:right-auto md:w-[760px] card shadow-pop p-5 max-h-[85vh] overflow-y-auto">
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

// Rail entries (icon above label). "All apps" opens the full menu.
function RailButton({ icon, label, active, onClick, expanded }: { icon: string; label: string; active?: boolean; onClick: () => void; expanded?: boolean }) {
  return (
    <button type="button" onClick={onClick} aria-label={label} aria-expanded={expanded} aria-current={active ? "page" : undefined}
      className="w-full flex flex-col items-center gap-1 py-2 group">
      <span className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${active ? "bg-slatebtn text-white" : "text-ink-2 group-hover:bg-white group-hover:text-ink"}`}>
        <Icon name={icon} className="w-[22px] h-[22px]" strokeWidth={1.6} />
      </span>
      <span className={`text-[12px] leading-tight ${active ? "text-ink font-semibold" : "text-ink-2"}`}>{label}</span>
    </button>
  );
}

export function Shell({ children, onSignOut, email }: { children: ReactNode; onSignOut: () => void; email: string }) {
  const { page, go, snap, openDrawer, isDemo } = useBooks();
  const [flyout, setFlyout] = useState<null | "apps" | "bookmarks">(null);
  const [newOpen, setNewOpen] = useState(false);
  const [palette, setPalette] = useState(false);
  const [panel, setPanel] = useState<null | "assistant" | "settings">(null);
  const [bookmarks, setBookmarks] = useState<Page[]>(() => { try { return JSON.parse(localStorage.getItem("books.bookmarks") || '["accounts","journal"]'); } catch { return ["accounts"]; } });
  useEffect(() => { try { localStorage.setItem("books.bookmarks", JSON.stringify(bookmarks)); } catch { /* ignore */ } }, [bookmarks]);
  // The dashboard's "Show all" opens the create menu.
  useEffect(() => { const h = () => setNewOpen(true); window.addEventListener("books:new", h); return () => window.removeEventListener("books:new", h); }, []);

  // Global shortcuts
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && !e.altKey && k === "k") { e.preventDefault(); setPalette((p) => !p); return; }
      if (e.ctrlKey && e.altKey) {
        const map: Record<string, [string, number]> = { i: ["Invoice", 3], x: ["Expense", 4], w: ["Check", 4], c: ["Customer", 3] };
        if (map[k]) { e.preventDefault(); openDrawer({ kind: "planned", title: map[k][0], milestone: map[k][1] }); }
      }
      if (k === "escape") { setNewOpen(false); setPanel(null); setFlyout(null); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [openDrawer]);

  const today = todayISO();
  const alerts = useMemo(() => {
    const out: { label: string; page: Page }[] = [];
    const paidIds = new Set(snap.transactions.filter((t) => t.type === "payment").flatMap((t) => (t.applied || []).map((a) => a.txId)));
    const overdue = snap.transactions.filter((t) => t.type === "invoice" && t.dueDate && t.dueDate < today && t.status !== "paid" && !paidIds.has(t.id));
    if (overdue.length) out.push({ label: `${overdue.length} overdue invoice${overdue.length === 1 ? "" : "s"}`, page: "sales" });
    const uncategorized = snap.journalEntries.filter((e) => e.lines.some((l) => l.accountId === "acct_6990" || l.accountId === "acct_4990")).length;
    if (uncategorized) out.push({ label: `${uncategorized} uncategorized transaction${uncategorized === 1 ? "" : "s"}`, page: "journal" });
    if (!snap.org?.closingDate) out.push({ label: "Books have never been closed", page: "settings" });
    return out;
  }, [snap, today]);
  const recent = useMemo(() => [...snap.transactions].sort((a, b) => (b.date + b.id).localeCompare(a.date + a.id)).slice(0, 8), [snap.transactions]);
  const allItems = NAV.flatMap((g) => g.items);
  const pick = (p: Page) => { go(p); setFlyout(null); };
  const initial = (email.match(/[a-z]/i)?.[0] || "U").toUpperCase();

  const rail = (
    <nav className="w-[92px] shrink-0 flex flex-col items-stretch py-3 h-full" aria-label="Main">
      <div className="flex justify-center mb-3"><div className="w-10 h-10 rounded-full bg-slatebtn text-white text-xs font-bold flex items-center justify-center" title={snap.org?.name}>JW</div></div>
      <RailButton icon="plus" label="Create" onClick={() => { setNewOpen((o) => !o); setFlyout(null); }} expanded={newOpen} />
      <RailButton icon="star" label="Bookmarks" onClick={() => setFlyout((f) => (f === "bookmarks" ? null : "bookmarks"))} expanded={flyout === "bookmarks"} />
      <RailButton icon="home" label="Home" active={page === "dashboard"} onClick={() => pick("dashboard")} />
      <RailButton icon="reports" label="Reports" active={page === "reports"} onClick={() => pick("reports")} />
      <RailButton icon="grid" label="All apps" onClick={() => setFlyout((f) => (f === "apps" ? null : "apps"))} expanded={flyout === "apps"} />
      <div className="mx-4 my-2 border-t border-line-strong/70" />
      <div className="text-[10px] font-semibold tracking-wide text-ink-2 text-center mb-1">PINNED</div>
      {bookmarks.slice(0, 3).map((b) => { const it = allItems.find((x) => x.page === b); return it ? <RailButton key={b} icon={it.icon} label={it.label.split(" ")[0]} active={page === b} onClick={() => pick(b)} /> : null; })}
      <RailButton icon="more" label="More" onClick={() => setFlyout("apps")} />
      <div className="flex-1" />
      <div className="mx-4 mb-1 border-t border-line-strong/70" />
      <RailButton icon="sliders" label="Customize" onClick={() => setPanel("settings")} />
    </nav>
  );

  const flyoutPanel = flyout && (
    <div className="fixed inset-0 z-40" onClick={() => setFlyout(null)}>
      <div className="absolute left-0 md:left-[92px] top-0 md:top-2 bottom-0 md:bottom-2 w-[300px] max-w-[85vw] bg-white md:rounded-xl border border-line shadow-pop overflow-y-auto" onClick={(e) => e.stopPropagation()} role="dialog" aria-label={flyout === "apps" ? "All apps" : "Bookmarks"}>
        <div className="px-4 h-12 flex items-center justify-between border-b border-line">
          <div className="text-sm font-semibold">{flyout === "apps" ? "All apps" : "Bookmarks"}</div>
          <button type="button" className="btn-ghost h-8 px-2" aria-label="Close menu" onClick={() => setFlyout(null)}><Icon name="x" /></button>
        </div>
        {flyout === "bookmarks" && (
          <div className="p-2">
            {bookmarks.length ? bookmarks.map((b) => { const it = allItems.find((x) => x.page === b); return it ? <button key={b} type="button" onClick={() => pick(b)} className="w-full text-left text-sm px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2.5"><Icon name={it.icon} className="w-4 h-4 text-ink-2" />{it.label}</button> : null; })
              : <div className="px-3 py-4 text-sm text-ink-3">No bookmarks yet. Star pages in All apps.</div>}
          </div>)}
        {flyout === "apps" && (
          <div className="p-2">
            <div className="md:hidden mb-2"><button type="button" className="btn-primary w-full" onClick={() => { setFlyout(null); setNewOpen(true); }}><Icon name="plus" />Create</button></div>
            {NAV.map((g) => (
              <div key={g.group || "home"} className="mb-1">
                {g.group && <div className="px-3 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wide text-ink-3">{g.group}</div>}
                {g.items.map((it) => (
                  <div key={it.page} className="flex items-center group">
                    <button type="button" onClick={() => pick(it.page)} className={`flex-1 text-left text-sm px-3 py-2 rounded flex items-center gap-2.5 ${page === it.page ? "bg-gray-100 font-medium" : "hover:bg-gray-50"}`}>
                      <Icon name={it.icon} className="w-4 h-4 text-ink-2" /><span className="flex-1">{it.label}</span>
                      {it.milestone && <span className="text-[9px] text-ink-3 border border-line rounded px-1">M{it.milestone}</span>}
                    </button>
                    <button type="button" aria-label={`${bookmarks.includes(it.page) ? "Remove bookmark" : "Bookmark"} ${it.label}`} onClick={() => setBookmarks((b) => (b.includes(it.page) ? b.filter((x) => x !== it.page) : [...b, it.page]))}
                      className={`p-1.5 rounded ${bookmarks.includes(it.page) ? "text-ink" : "text-ink-3 opacity-60 group-hover:opacity-100"}`}><Icon name="star" className="w-3.5 h-3.5" /></button>
                  </div>))}
              </div>))}
          </div>)}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-canvas">
      <div className="hidden md:block sticky top-0 h-screen">{rail}</div>
      <div className="flex-1 min-w-0 flex flex-col md:py-2 md:pr-2">
        <div className="flex-1 min-w-0 flex flex-col bg-white md:rounded-xl md:border md:border-line">
          <header className="sticky top-0 z-30 h-16 bg-white md:rounded-t-xl border-b border-line flex items-center gap-2 px-3 sm:px-6">
            <button type="button" className="md:hidden btn-ghost h-9 px-2" aria-label="Open menu" onClick={() => setFlyout("apps")}><Icon name="menu" /></button>
            <div className="hidden lg:block text-[15px] font-semibold text-ink truncate w-52 shrink-0" title={snap.org?.name}>{snap.org?.name}{isDemo && <span className="block text-[10px] font-normal text-ink-3">Demo company</span>}</div>
            <button type="button" onClick={() => setPalette(true)} className="flex-1 min-w-0 max-w-3xl h-10 rounded-lg bg-gray-100 hover:bg-gray-200/70 text-left px-3.5 text-sm text-ink-2 flex items-center gap-2.5 mx-auto">
              <Icon name="search" className="w-[18px] h-[18px]" /><span className="truncate flex-1">Navigate. Find transactions, contacts, reports, and more.</span><span className="kbd hidden sm:inline-flex">Ctrl K</span>
            </button>
            <div className="flex items-center gap-0.5 sm:gap-1">
              <Stopwatch />
              <Popover label="Recent transactions" button={<Icon name="clipboard" className="w-5 h-5" />}>
                <div className="px-4 py-2.5 text-xs font-semibold text-ink-2 border-b border-line">Recent transactions</div>
                {recent.length ? recent.map((t) => (
                  <button key={t.id} type="button" onClick={() => go("journal")} className="w-full text-left px-4 py-2 hover:bg-gray-50 flex justify-between gap-3 text-sm">
                    <span className="truncate capitalize">{t.type.replace(/([A-Z])/g, " $1")}{t.number ? ` #${t.number}` : ""} <span className="text-ink-3 normal-case">· {snap.contacts.find((c) => c.id === t.contactId)?.displayName || ""}</span></span>
                    <span className="text-ink-2 tabular-nums shrink-0">{money(t.amount ?? docTotal(t))}</span>
                  </button>)) : <div className="px-4 py-6 text-sm text-ink-3">Nothing yet</div>}
              </Popover>
              <Popover label="Notifications" button={<><Icon name="bell" className="w-5 h-5" />{alerts.length > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D97706]" />}</>}>
                <div className="px-4 py-2.5 text-xs font-semibold text-ink-2 border-b border-line">Notifications</div>
                {alerts.length ? alerts.map((a) => <button key={a.label} type="button" onClick={() => go(a.page)} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm border-b border-line last:border-0">{a.label}</button>) : <div className="px-4 py-6 text-sm text-ink-3">All caught up</div>}
              </Popover>
              <button type="button" className={`hidden sm:inline-flex p-2 rounded-md hover:bg-gray-100 ${panel === "settings" ? "bg-gray-100 text-ink" : "text-ink-2"}`} aria-label="Settings" onClick={() => setPanel((p) => (p === "settings" ? null : "settings"))}><Icon name="settings" className="w-5 h-5" /></button>
              <Popover label="Account" button={<span className="w-7 h-7 rounded-full bg-slatebtn text-white text-xs font-semibold flex items-center justify-center">{initial}</span>}>
                <div className="px-4 py-3 border-b border-line"><div className="text-sm font-medium truncate">{email}</div><div className="text-xs text-ink-3">{EDITIONS[snap.org?.edition || "general"]} edition</div></div>
                <button type="button" onClick={onSignOut} className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm flex items-center gap-2"><Icon name="logout" />Sign out</button>
              </Popover>
              <button type="button" className={`ml-1 w-9 h-9 rounded-lg border flex items-center justify-center ${panel === "assistant" ? "border-slatebtn bg-gray-100 text-ink" : "border-line-strong text-ink-2 hover:text-ink"}`} aria-label="Assistant" onClick={() => setPanel((p) => (p === "assistant" ? null : "assistant"))}><Icon name="sparkle" className="w-[18px] h-[18px]" /></button>
            </div>
          </header>
          <main className="flex-1 min-w-0 p-4 sm:p-8">{children}</main>
        </div>
      </div>
      {flyoutPanel}
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
    <aside className="fixed right-0 top-0 bottom-0 w-full sm:w-[380px] bg-white border-l border-line shadow-pop z-30 flex flex-col" aria-label={kind === "assistant" ? "Assistant" : "Settings"}>
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
