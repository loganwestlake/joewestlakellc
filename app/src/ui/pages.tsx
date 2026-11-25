import { useEffect, useMemo, useRef, useState } from "react";
import { accountRegister, ACCOUNT_TYPE_LABEL, balanceSheet, docTotal, profitAndLoss, SYSTEM, trialBalance, type Account, type AccountType } from "../ledger";
import { Icon } from "./icons";
import { fmtDate, money, todayISO, useBooks, type Page } from "./books";

const PageHead = ({ title, sub, actions }: { title: string; sub?: string; actions?: React.ReactNode }) => (
  <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
    <div><h1 className="text-xl font-semibold text-ink">{title}</h1>{sub && <p className="text-sm text-ink-2 mt-0.5">{sub}</p>}</div>
    {actions && <div className="flex gap-2">{actions}</div>}
  </div>
);

// ── Home ──
const fmtShort = (cents: number) => Math.abs(cents) >= 100000 ? `$${(cents / 100).toLocaleString("en-US", { maximumFractionDigits: 0 })}` : money(cents);
const SHORTCUTS: { label: string; page: Page; icon: string; color: string }[] = [
  { label: "Accounting", page: "accounts", icon: "accounting", color: "#1F2937" },
  { label: "Expenses & bills", page: "expenses", icon: "expenses", color: "#0E7490" },
  { label: "Sales & get paid", page: "sales", icon: "sales", color: "#047857" },
  { label: "Customers", page: "customers", icon: "people", color: "#4338CA" },
  { label: "Reports", page: "reports", icon: "reports", color: "#B45309" },
  { label: "Projects", page: "projects", icon: "projects", color: "#7C3AED" },
  { label: "Payroll", page: "payroll", icon: "payroll", color: "#BE123C" },
  { label: "Taxes", page: "taxes", icon: "taxes", color: "#475569" },
  { label: "Banking", page: "banking", icon: "bank", color: "#0369A1" }
];
const WIDGETS = { funnel: "Sales & get paid funnel", bank: "Bank accounts", pnl: "Profit & loss", expenses: "Expenses", cashflow: "Cash flow" } as const;
type WidgetKey = keyof typeof WIDGETS;
const loadPref = <T,>(k: string, d: T): T => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const savePref = (k: string, v: unknown) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } };
const PIE = ["#1F2937", "#0E7490", "#047857", "#B45309", "#7C3AED", "#94A3B8"];

function Card({ title, right, children, className = "" }: { title: string; right?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <section className={`bg-white border border-line rounded-xl p-5 min-w-0 ${className}`}>
      <div className="flex items-start justify-between gap-3 mb-4"><h3 className="text-[13px] font-semibold tracking-wide text-ink uppercase">{title}</h3>{right}</div>
      {children}
    </section>
  );
}
function RangeSelect({ value, onChange, options }: { value: number; onChange: (v: number) => void; options: [number, string][] }) {
  return <select aria-label="Period" className="text-[13px] text-ink-2 bg-transparent border-0 shrink-0 focus:ring-0 cursor-pointer pr-6 -mr-1" value={value} onChange={(e) => onChange(Number(e.target.value))}>{options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>;
}

export function Dashboard() {
  const { snap, balances, go, openDrawer, store } = useBooks();
  const today = todayISO();
  const [privacy, setPrivacy] = useState(() => loadPref("books.privacy", false));
  const [shown, setShown] = useState<WidgetKey[]>(() => loadPref("books.widgets", Object.keys(WIDGETS) as WidgetKey[]));
  const [customize, setCustomize] = useState(false);
  const [funnelDays, setFunnelDays] = useState(30), [expDays, setExpDays] = useState(30);
  const strip = useRef<HTMLDivElement>(null);
  useEffect(() => savePref("books.privacy", privacy), [privacy]);
  useEffect(() => savePref("books.widgets", shown), [shown]);
  const amt = (c: number, short = false) => <span className={privacy ? "blur-[6px] select-none" : ""}>{short ? fmtShort(c) : money(c)}</span>;
  const since = (days: number) => { const d = new Date(); d.setDate(d.getDate() - days); return d.toISOString().slice(0, 10); };
  const name = (store.email.match(/^[a-z]+/i)?.[0] || "").replace(/^./, (c) => c.toUpperCase());
  const hour = new Date().getHours();

  // Funnel: what's billed and not paid, paid but not in the bank yet, and deposited.
  const funnel = useMemo(() => {
    const from = since(funnelDays);
    const applied = new Map<string, number>();
    snap.transactions.filter((t) => t.type === "payment").forEach((p) => (p.applied || []).forEach((a) => applied.set(a.txId, (applied.get(a.txId) || 0) + a.amount)));
    const invoices = snap.transactions.filter((t) => t.type === "invoice" && t.date >= from);
    const open = invoices.map((i) => docTotal(i) - (applied.get(i.id) || 0)).filter((x) => x > 0);
    const overdue = snap.transactions.filter((t) => t.type === "invoice" && t.dueDate && t.dueDate < today && docTotal(t) - (applied.get(t.id) || 0) > 0);
    const payments = snap.transactions.filter((t) => t.type === "payment" && t.date >= from);
    const deposits = snap.transactions.filter((t) => t.type === "deposit" && t.date >= from);
    return { notPaid: open.reduce((a, b) => a + b, 0), notPaidCount: open.length, overdueCount: overdue.length, paid: payments.reduce((a, t) => a + (t.amount || 0), 0), paidCount: payments.length, undeposited: balances.get(SYSTEM.undeposited) || 0, deposited: deposits.reduce((a, t) => a + docTotal(t), 0), depositedCount: deposits.length };
  }, [snap.transactions, funnelDays, balances, today]);

  const banks = snap.accounts.filter((a) => a.type === "Bank" || a.type === "CreditCard");
  const bankTotal = snap.accounts.filter((a) => a.type === "Bank").reduce((s, a) => s + (balances.get(a.id) || 0), 0);
  const month = useMemo(() => profitAndLoss(snap.journalEntries, snap.accounts, `${today.slice(0, 7)}-01`, today), [snap, today]);
  const exp = useMemo(() => {
    const p = profitAndLoss(snap.journalEntries, snap.accounts, since(expDays), today);
    const rows = [...p.cogs, ...p.expenses].sort((a, b) => b.amount - a.amount);
    const top = rows.slice(0, 5), rest = rows.slice(5).reduce((s, r) => s + r.amount, 0);
    const items = top.map((r) => ({ label: r.account.name, amount: r.amount }));
    if (rest > 0) items.push({ label: "Everything else", amount: rest });
    return { items, total: rows.reduce((s, r) => s + r.amount, 0) };
  }, [snap, expDays, today]);
  const cash = useMemo(() => {
    const bankIds = new Set(snap.accounts.filter((a) => a.type === "Bank").map((a) => a.id));
    const out: { label: string; bal: number }[] = [];
    for (let i = 11; i >= 0; i--) {
      const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() - i + 1); d.setDate(0);
      const end = d.toISOString().slice(0, 10) > today ? today : d.toISOString().slice(0, 10);
      let bal = 0;
      for (const e of snap.journalEntries) if (e.date <= end) for (const l of e.lines) if (bankIds.has(l.accountId)) bal += l.debit - l.credit;
      out.push({ label: d.toLocaleDateString("en-US", { month: "short" }), bal });
    }
    return out;
  }, [snap, today]);

  const toggle = (k: WidgetKey) => setShown((w) => (w.includes(k) ? w.filter((x) => x !== k) : [...w, k]));
  const create = (label: string, milestone?: number) => (milestone ? openDrawer({ kind: "planned", title: label, milestone }) : openDrawer({ kind: "journal" }));
  const donut = (() => {
    let acc = 0; const C = 2 * Math.PI * 42;
    return exp.items.map((it, i) => { const frac = exp.total ? it.amount / exp.total : 0; const seg = <circle key={i} cx="60" cy="60" r="42" fill="none" stroke={PIE[i % PIE.length]} strokeWidth="18" strokeDasharray={`${frac * C} ${C}`} strokeDashoffset={-acc * C} transform="rotate(-90 60 60)" />; acc += frac; return seg; });
  })();
  const maxBal = Math.max(1, ...cash.map((c) => Math.abs(c.bal))), minBal = Math.min(0, ...cash.map((c) => c.bal));
  const y = (v: number) => 110 - ((v - minBal) / (maxBal - minBal || 1)) * 100;
  const path = cash.map((c, i) => `${i ? "L" : "M"}${10 + i * (380 / 11)},${y(c.bal)}`).join(" ");
  const maxPnl = Math.max(1, month.totalIncome, month.totalCogs + month.totalExpenses);

  return (
    <div className="max-w-[1480px] mx-auto">
      <div className="relative flex items-center justify-center mb-6 min-h-[56px]">
        <h1 className="text-3xl sm:text-[40px] font-normal text-ink tracking-tight text-center">Good {hour < 12 ? "morning" : hour < 17 ? "afternoon" : "evening"}{name ? `, ${name}` : ""}!</h1>
        <div className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-5 text-ink-2">
          <button type="button" className="flex items-center gap-1.5 text-[15px] hover:text-ink" onClick={() => setCustomize((c) => !c)} aria-expanded={customize}><Icon name="sliders" className="w-5 h-5" />Customize</button>
          <button type="button" className="flex items-center gap-1.5 text-[15px] hover:text-ink" onClick={() => setPrivacy((p) => !p)} aria-pressed={privacy}><Icon name={privacy ? "eye" : "eyeOff"} className="w-5 h-5" />Privacy</button>
        </div>
      </div>
      <div className="xl:hidden flex justify-end gap-4 text-sm text-ink-2 -mt-3 mb-4">
        <button type="button" className="flex items-center gap-1" onClick={() => setCustomize((c) => !c)}><Icon name="sliders" />Customize</button>
        <button type="button" className="flex items-center gap-1" onClick={() => setPrivacy((p) => !p)} aria-pressed={privacy}><Icon name={privacy ? "eye" : "eyeOff"} />Privacy</button>
      </div>
      {customize && (
        <div className="bg-white border border-line rounded-xl p-4 mb-6 flex flex-wrap gap-x-6 gap-y-2" role="group" aria-label="Choose what's on your home page">
          <span className="text-sm font-medium mr-2">Show on home:</span>
          {(Object.keys(WIDGETS) as WidgetKey[]).map((k) => <label key={k} className="flex items-center gap-2 text-sm text-ink-2"><input type="checkbox" checked={shown.includes(k)} onChange={() => toggle(k)} className="accent-slate-800" />{WIDGETS[k]}</label>)}
        </div>)}

      {/* App shortcuts */}
      <div className="relative mb-6">
        <div ref={strip} className="flex gap-3 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:none] justify-start">
          {SHORTCUTS.map((sc) => (
            <button key={sc.label} type="button" onClick={() => go(sc.page)} className="shrink-0 flex items-center gap-3 pl-2 pr-5 h-14 rounded-full border border-line bg-white hover:border-line-strong hover:shadow-card">
              <span className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: sc.color }}><Icon name={sc.icon} className="w-5 h-5" strokeWidth={2} /></span>
              <span className="text-[15px] font-medium text-ink whitespace-nowrap">{sc.label}</span>
            </button>))}
        </div>
        <button type="button" aria-label="More shortcuts" onClick={() => strip.current?.scrollBy({ left: 320 })} className="hidden md:flex absolute right-0 top-0 h-14 w-12 items-center justify-end bg-gradient-to-l from-white via-white to-transparent"><Icon name="chevron" className="w-5 h-5" /></button>
      </div>

      {/* Create actions */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <h2 className="text-lg font-medium text-ink mr-2">Create actions</h2>
        {([["Create invoice", 3], ["Record expense", 4], ["Add bank deposit", 3], ["Create check", 4], ["Journal entry", 0]] as const).map(([l, m]) => (
          <button key={l} type="button" onClick={() => create(l, m || undefined)} className="h-10 px-4 rounded-full border border-line-strong bg-white text-[15px] font-medium text-ink hover:bg-gray-50">{l}</button>))}
        <button type="button" onClick={() => window.dispatchEvent(new Event("books:new"))} className="text-[15px] font-medium text-ink underline-offset-4 hover:underline px-1">Show all</button>
      </div>

      <h2 className="text-lg font-medium text-ink mb-3">Business at a glance</h2>
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)] gap-5 mb-5">
        {shown.includes("funnel") && (
          <Card title="Sales & get paid funnel" right={<RangeSelect value={funnelDays} onChange={setFunnelDays} options={[[30, "Last 30 days"], [90, "Last 90 days"], [365, "Last 12 months"]]} />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="border border-line rounded-lg p-5 flex flex-col">
                <div className="text-[15px] font-semibold text-ink mb-5">Create a new invoice</div>
                <div className="text-sm text-ink-2 flex-1">Bill a customer, then follow it here until it's in the bank.</div>
                <button type="button" onClick={() => create("Invoice", 3)} className="btn-secondary mt-4 self-start">New invoice</button>
              </div>
              {([
                ["Not paid", funnel.notPaid, `${funnel.notPaidCount} open invoice${funnel.notPaidCount === 1 ? "" : "s"}`, funnel.overdueCount ? `${funnel.overdueCount} overdue` : "", "#A7F3D0"],
                ["Paid", funnel.paid, `${funnel.paidCount} payment${funnel.paidCount === 1 ? "" : "s"}`, funnel.undeposited ? `${fmtShort(funnel.undeposited)} not deposited yet` : "", "#34D399"],
                ["Deposited", funnel.deposited, `${funnel.depositedCount} deposited`, "", "#059669"]
              ] as const).map(([label, value, sub, warn, bar]) => (
                <div key={label} className="border border-line rounded-lg overflow-hidden flex flex-col">
                  <div className="h-2" style={{ background: bar }} />
                  <div className="p-5 flex-1">
                    <div className="text-[15px] text-ink-2 mb-6">{label}</div>
                    <div className="text-2xl font-semibold text-ink tabular-nums">{amt(value)}</div>
                    <div className="mt-3 flex flex-wrap gap-2 items-center">
                      <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[13px] ${label === "Deposited" ? "bg-[#ECFDF5] text-[#047857]" : "text-ink-2"}`}>{label === "Deposited" && <Icon name="check" className="w-3.5 h-3.5" />}{sub}</span>
                      {warn && <span className="badge-due whitespace-nowrap">{warn}</span>}
                    </div>
                  </div>
                </div>))}
            </div>
          </Card>)}
        {shown.includes("bank") && (
          <Card title="Bank accounts" right={<span className="text-[13px] text-ink-2">As of today</span>}>
            <div className="text-[15px] text-ink-2">Total in the bank</div>
            <div className="text-3xl font-normal text-ink tabular-nums mb-4">{amt(bankTotal, true)}</div>
            <div className="divide-y divide-line">
              {banks.map((a) => (
                <div key={a.id} className="py-3 flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-gray-100 text-ink-2 flex items-center justify-center shrink-0"><Icon name={a.type === "CreditCard" ? "payroll" : "bank"} className="w-[18px] h-[18px]" /></span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-semibold text-ink truncate">{a.name}</div>
                    <div className="flex justify-between text-sm text-ink-2"><span>{a.type === "CreditCard" ? "Balance owed" : "In the books"}</span><span className="tabular-nums text-ink">{amt(balances.get(a.id) || 0)}</span></div>
                    <div className="text-[12px] text-ink-3">Bank-side balance arrives with bank feeds</div>
                  </div>
                </div>))}
            </div>
            <button type="button" onClick={() => go("accounts")} className="text-[15px] font-medium text-ink hover:underline underline-offset-4 mt-2 inline-flex items-center gap-1">Go to registers<Icon name="arrowRight" className="w-4 h-4" /></button>
          </Card>)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {shown.includes("pnl") && (
          <Card title="Profit & loss" right={<span className="text-[13px] text-ink-2">This month</span>}>
            <div className="text-[13px] text-ink-2">Net profit for {new Date().toLocaleDateString("en-US", { month: "long" })}</div>
            <div className="text-3xl text-ink tabular-nums mb-5">{amt(month.netIncome)}</div>
            {([["Income", month.totalIncome, "#059669"], ["Expenses", month.totalCogs + month.totalExpenses, "#94A3B8"]] as const).map(([l, v, c]) => (
              <div key={l} className="mb-4">
                <div className="flex justify-between text-sm mb-1.5"><span className="text-ink-2">{l}</span><span className="tabular-nums font-medium">{amt(v)}</span></div>
                <div className="h-3 rounded bg-gray-100 overflow-hidden"><div className="h-full rounded" style={{ width: `${(v / maxPnl) * 100}%`, background: c }} /></div>
              </div>))}
            <button type="button" onClick={() => go("reports")} className="text-sm font-medium text-ink hover:underline underline-offset-4">See profit and loss report</button>
          </Card>)}
        {shown.includes("expenses") && (
          <Card title="Expenses" right={<RangeSelect value={expDays} onChange={setExpDays} options={[[30, "Last 30 days"], [90, "Last 90 days"], [365, "Last 12 months"]]} />}>
            <div className="text-[13px] text-ink-2">Spending</div>
            <div className="text-3xl text-ink tabular-nums mb-3">{amt(exp.total)}</div>
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 120 120" className="w-32 h-32 shrink-0" role="img" aria-label="Spending by category">{exp.total ? donut : <circle cx="60" cy="60" r="42" fill="none" stroke="#E5E7EB" strokeWidth="18" />}</svg>
              <ul className="space-y-1.5 min-w-0 flex-1">{exp.items.map((it, i) => (
                <li key={it.label} className="flex items-center gap-2 text-[13px]"><span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: PIE[i % PIE.length] }} /><span className="truncate flex-1 text-ink-2">{it.label}</span><span className="tabular-nums">{amt(it.amount, true)}</span></li>))}</ul>
            </div>
          </Card>)}
        {shown.includes("cashflow") && (
          <Card title="Cash flow" right={<span className="text-[13px] text-ink-2">Last 12 months</span>}>
            <div className="text-[13px] text-ink-2">Cash in the bank today</div>
            <div className="text-3xl text-ink tabular-nums mb-3">{amt(bankTotal)}</div>
            <svg viewBox="0 0 400 130" className="w-full h-32" role="img" aria-label="Bank balance at the end of each month">
              <line x1="10" x2="390" y1={y(0)} y2={y(0)} stroke="#E5E7EB" />
              <path d={path} fill="none" stroke="#1F2937" strokeWidth="2.5" strokeLinejoin="round" />
              {cash.map((c, i) => <circle key={i} cx={10 + i * (380 / 11)} cy={y(c.bal)} r="3" fill="#1F2937"><title>{`${c.label}: ${money(c.bal)}`}</title></circle>)}
            </svg>
            <div className="flex justify-between text-[11px] text-ink-3 px-1">{cash.filter((_, i) => i % 2 === 1).map((c) => <span key={c.label}>{c.label}</span>)}</div>
          </Card>)}
      </div>
    </div>
  );
}

// ── Chart of accounts + register ──
export function ChartOfAccounts() {
  const { snap, balances } = useBooks();
  const [open, setOpen] = useState<Account | null>(null);
  const [q, setQ] = useState("");
  if (open) return <Register account={open} back={() => setOpen(null)} />;
  const order: AccountType[] = ["Bank", "AccountsReceivable", "OtherCurrentAsset", "FixedAsset", "OtherAsset", "AccountsPayable", "CreditCard", "OtherCurrentLiability", "LongTermLiability", "Equity", "Income", "OtherIncome", "CostOfGoodsSold", "Expense", "OtherExpense"];
  const rows = [...snap.accounts].filter((a) => !q || `${a.code} ${a.name}`.toLowerCase().includes(q.toLowerCase())).sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type) || a.code.localeCompare(b.code));
  return (
    <>
      <PageHead title="Chart of accounts" sub="Every account in the books, with its balance from the ledger" actions={<button type="button" className="btn-secondary" disabled title="Milestone 2">New account</button>} />
      <div className="card overflow-hidden">
        <div className="p-3 border-b border-line"><input className="input max-w-xs" placeholder="Filter by name or number" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <div className="overflow-x-auto"><table className="w-full">
          <thead><tr><th className="th w-20">Number</th><th className="th">Name</th><th className="th hidden md:table-cell">Type</th><th className="th hidden lg:table-cell">Detail type</th><th className="th text-right">Balance</th></tr></thead>
          <tbody>{rows.map((a) => (
            <tr key={a.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setOpen(a)}>
              <td className="td text-ink-2 tabular-nums">{a.code}</td>
              <td className="td">{a.name}{a.isSystem && <span className="badge-neutral ml-2">System</span>}</td>
              <td className="td text-ink-2 hidden md:table-cell">{ACCOUNT_TYPE_LABEL[a.type]}</td>
              <td className="td text-ink-3 hidden lg:table-cell">{a.subType?.replace(/([a-z])([A-Z])/g, "$1 $2")}</td>
              <td className="td text-right tabular-nums">{money(balances.get(a.id) || 0)}</td>
            </tr>))}</tbody>
        </table></div>
      </div>
    </>
  );
}
function Register({ account, back }: { account: Account; back: () => void }) {
  const { snap } = useBooks();
  const rows = useMemo(() => accountRegister(snap.journalEntries, account).reverse(), [snap.journalEntries, account]);
  return (
    <>
      <button type="button" className="btn-ghost -ml-2 mb-2" onClick={back}><Icon name="chevronLeft" />Chart of accounts</button>
      <PageHead title={`${account.code} ${account.name}`} sub={`${ACCOUNT_TYPE_LABEL[account.type]} · register`} />
      <div className="card overflow-x-auto"><table className="w-full">
        <thead><tr><th className="th">Date</th><th className="th">Type</th><th className="th hidden md:table-cell">Memo</th><th className="th text-right">Increase</th><th className="th text-right">Decrease</th><th className="th text-right">Balance</th></tr></thead>
        <tbody>{rows.map((r, i) => {
          const inc = account.type === "Bank" || ["AccountsReceivable", "OtherCurrentAsset", "FixedAsset", "OtherAsset", "CostOfGoodsSold", "Expense", "OtherExpense"].includes(account.type) ? r.debit : r.credit;
          const dec = r.debit + r.credit - inc;
          return (<tr key={i}><td className="td whitespace-nowrap text-ink-2">{fmtDate(r.entry.date)}</td><td className="td capitalize">{r.entry.sourceType.replace(/([A-Z])/g, " $1")}</td>
            <td className="td text-ink-2 hidden md:table-cell">{r.entry.memo}</td><td className="td text-right tabular-nums">{inc ? money(inc) : ""}</td><td className="td text-right tabular-nums">{dec ? money(dec) : ""}</td><td className="td text-right tabular-nums font-medium">{money(r.balance)}</td></tr>);
        })}
        {!rows.length && <tr><td className="td text-ink-3" colSpan={6}>No activity in this account yet.</td></tr>}</tbody>
      </table></div>
    </>
  );
}

// ── Journal ──
export function Journal() {
  const { snap, store, orgId, openDrawer, toast, accountById } = useBooks();
  const [q, setQ] = useState("");
  const reversed = new Set(snap.journalEntries.map((e) => e.reversalOf).filter(Boolean));
  const rows = [...snap.journalEntries].filter((e) => !q || `${e.memo} ${e.sourceType}`.toLowerCase().includes(q.toLowerCase())).sort((a, b) => (b.date + b.id).localeCompare(a.date + a.id)).slice(0, 300);
  return (
    <>
      <PageHead title="Journal" sub="Every posted entry. Entries are never edited: corrections are reversing entries." actions={<button type="button" className="btn-primary" onClick={() => openDrawer({ kind: "journal" })}><Icon name="plus" />Journal entry</button>} />
      <div className="card overflow-hidden">
        <div className="p-3 border-b border-line"><input className="input max-w-xs" placeholder="Filter by memo or type" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <div className="divide-y divide-line">{rows.map((e) => (
          <details key={e.id} className="group">
            <summary className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-gray-50 list-none">
              <span className="text-sm text-ink-2 w-28 shrink-0">{fmtDate(e.date)}</span>
              <span className="text-sm capitalize w-32 shrink-0 hidden sm:block">{e.sourceType.replace(/([A-Z])/g, " $1")}</span>
              <span className="text-sm text-ink truncate flex-1">{e.memo}</span>
              {e.reversalOf && <span className="badge-neutral">Reversal</span>}{reversed.has(e.id) && <span className="badge-void">Reversed</span>}
              <span className="text-sm tabular-nums w-28 text-right">{money(e.totalDebit)}</span>
            </summary>
            <div className="px-4 pb-3 bg-gray-50">
              <table className="w-full text-sm"><thead><tr><th className="th !bg-transparent">Account</th><th className="th !bg-transparent text-right">Debit</th><th className="th !bg-transparent text-right">Credit</th></tr></thead>
                <tbody>{e.lines.map((l, i) => <tr key={i}><td className="px-4 py-1.5">{accountById(l.accountId)?.code} {accountById(l.accountId)?.name || l.accountId}{l.memo ? <span className="text-ink-3"> · {l.memo}</span> : null}</td><td className="px-4 py-1.5 text-right tabular-nums">{l.debit ? money(l.debit) : ""}</td><td className="px-4 py-1.5 text-right tabular-nums">{l.credit ? money(l.credit) : ""}</td></tr>)}</tbody></table>
              {!e.reversalOf && !reversed.has(e.id) && <button type="button" className="btn-secondary mt-2 h-8" onClick={async () => { try { await store.reverseEntry(orgId, e.id, todayISO()); toast("Reversing entry posted"); } catch (err) { toast((err as Error).message, "error"); } }}><Icon name="undo" />Reverse</button>}
            </div>
          </details>))}
          {!rows.length && <div className="px-4 py-8 text-sm text-ink-3 text-center">No entries yet.</div>}
        </div>
      </div>
    </>
  );
}

// ── Reports (core three; the full report center is Milestone 6) ──
export function Reports() {
  const { snap } = useBooks();
  const today = todayISO();
  const [tab, setTab] = useState<"pnl" | "bs" | "tb">("pnl");
  const [from, setFrom] = useState(`${today.slice(0, 4)}-01-01`), [to, setTo] = useState(today);
  const pnl = useMemo(() => profitAndLoss(snap.journalEntries, snap.accounts, from, to), [snap, from, to]);
  const bs = useMemo(() => balanceSheet(snap.journalEntries, snap.accounts, to), [snap, to]);
  const tb = useMemo(() => trialBalance(snap.journalEntries, snap.accounts, to), [snap, to]);
  const Line = ({ label, v, bold, indent }: { label: string; v: number; bold?: boolean; indent?: boolean }) => (
    <div className={`flex justify-between px-5 py-1.5 text-sm ${bold ? "font-semibold border-t border-line" : ""}`}><span className={indent ? "pl-4 text-ink-2" : ""}>{label}</span><span className="tabular-nums">{money(v)}</span></div>
  );
  return (
    <>
      <PageHead title="Reports" sub="Straight from the ledger. The full report center (200+ reports, cash/accrual, comparisons, exports) is Milestone 6." />
      <div className="card p-3 mb-3 flex flex-wrap items-end gap-3">
        <div className="flex rounded-md border border-line-strong overflow-hidden">{([["pnl", "Profit & loss"], ["bs", "Balance sheet"], ["tb", "Trial balance"]] as const).map(([k, l]) => <button key={k} type="button" onClick={() => setTab(k)} className={`px-3 h-9 text-sm ${tab === k ? "bg-slatebtn text-white" : "bg-white text-ink-2 hover:bg-gray-50"}`}>{l}</button>)}</div>
        {tab === "pnl" && <div><label className="label" htmlFor="rf">From</label><input id="rf" type="date" className="input" value={from} onChange={(e) => setFrom(e.target.value)} /></div>}
        <div><label className="label" htmlFor="rt">{tab === "pnl" ? "To" : "As of"}</label><input id="rt" type="date" className="input" value={to} onChange={(e) => setTo(e.target.value)} /></div>
      </div>
      <div className="card max-w-3xl">
        <div className="text-center py-4 border-b border-line"><div className="font-semibold">{snap.org?.name}</div><div className="text-sm">{tab === "pnl" ? "Profit and Loss" : tab === "bs" ? "Balance Sheet" : "Trial Balance"}</div><div className="text-xs text-ink-3">{tab === "pnl" ? `${fmtDate(from)} – ${fmtDate(to)}` : `As of ${fmtDate(to)}`} · Accrual basis</div></div>
        {tab === "pnl" && <div className="py-2">
          <div className="px-5 pt-2 text-xs font-semibold text-ink-2 uppercase">Income</div>{pnl.income.map((r) => <Line key={r.account.id} label={r.account.name} v={r.amount} indent />)}<Line label="Total income" v={pnl.totalIncome} bold />
          <div className="px-5 pt-3 text-xs font-semibold text-ink-2 uppercase">Cost of goods sold</div>{pnl.cogs.map((r) => <Line key={r.account.id} label={r.account.name} v={r.amount} indent />)}<Line label="Gross profit" v={pnl.grossProfit} bold />
          <div className="px-5 pt-3 text-xs font-semibold text-ink-2 uppercase">Expenses</div>{pnl.expenses.map((r) => <Line key={r.account.id} label={r.account.name} v={r.amount} indent />)}<Line label="Total expenses" v={pnl.totalExpenses} bold />
          <Line label="Net operating income" v={pnl.netOperatingIncome} bold />{pnl.netOther !== 0 && <Line label="Net other income" v={pnl.netOther} bold />}<Line label="Net income" v={pnl.netIncome} bold />
        </div>}
        {tab === "bs" && <div className="py-2">
          <div className="px-5 pt-2 text-xs font-semibold text-ink-2 uppercase">Assets</div>{bs.assets.map((r) => <Line key={r.account.id} label={r.account.name} v={r.amount} indent />)}<Line label="Total assets" v={bs.totalAssets} bold />
          <div className="px-5 pt-3 text-xs font-semibold text-ink-2 uppercase">Liabilities</div>{bs.liabilities.map((r) => <Line key={r.account.id} label={r.account.name} v={r.amount} indent />)}<Line label="Total liabilities" v={bs.totalLiabilities} bold />
          <div className="px-5 pt-3 text-xs font-semibold text-ink-2 uppercase">Equity</div>{bs.equity.map((r) => <Line key={r.account.id} label={r.account.name} v={r.amount} indent />)}<Line label="Net income" v={bs.netIncome} indent /><Line label="Total equity" v={bs.totalEquity} bold />
          <Line label="Total liabilities and equity" v={bs.totalLiabilities + bs.totalEquity} bold />
          <div className={`px-5 py-2 text-xs ${bs.balanced ? "text-[#059669]" : "text-[#DC2626]"}`}>{bs.balanced ? "✓ Balanced" : "Out of balance"}</div>
        </div>}
        {tab === "tb" && <table className="w-full"><thead><tr><th className="th">Account</th><th className="th text-right">Debit</th><th className="th text-right">Credit</th></tr></thead>
          <tbody>{tb.rows.map((r) => <tr key={r.account.id}><td className="td">{r.account.code} {r.account.name}</td><td className="td text-right tabular-nums">{r.debit ? money(r.debit) : ""}</td><td className="td text-right tabular-nums">{r.credit ? money(r.credit) : ""}</td></tr>)}
            <tr className="font-semibold"><td className="td">Total {tb.balanced ? <span className="badge-paid ml-2">Balanced</span> : <span className="badge-void ml-2">Out of balance</span>}</td><td className="td text-right tabular-nums">{money(tb.totalDebit)}</td><td className="td text-right tabular-nums">{money(tb.totalCredit)}</td></tr></tbody></table>}
      </div>
    </>
  );
}

// ── Audit log ──
export function AuditLog() {
  const { snap } = useBooks();
  return (
    <>
      <PageHead title="Audit log" sub="Who did what and when. Lines can't be edited or deleted." />
      <div className="card overflow-x-auto"><table className="w-full">
        <thead><tr><th className="th">When</th><th className="th hidden md:table-cell">Who</th><th className="th">What</th><th className="th hidden lg:table-cell">Changes</th></tr></thead>
        <tbody>{[...snap.auditLogs].sort((a, b) => b.at.localeCompare(a.at)).slice(0, 300).map((l) => (
          <tr key={l.id}><td className="td whitespace-nowrap text-ink-2">{new Date(l.at).toLocaleString()}</td><td className="td hidden md:table-cell text-ink-2">{l.email || l.uid}</td>
            <td className="td">{l.summary}</td>
            <td className="td hidden lg:table-cell text-xs text-ink-2">{l.diff ? Object.entries(l.diff).map(([k, v]) => `${k}: ${String(v.from ?? "—")} → ${String(v.to ?? "—")}`).join("; ") : ""}</td></tr>))}</tbody>
      </table></div>
    </>
  );
}

// ── Screens that later milestones build ──
const PLANNED: Partial<Record<Page, { title: string; milestone: number; items: string[] }>> = {
  banking: { title: "Banking", milestone: 2, items: ["Bank & card feeds (For review / Categorized / Excluded)", "CSV, OFX and QFX import, plus the Truist (Plaid) connection", "If/then bank rules with splits and auto-add", "Reconciliation with a live $0.00 difference target and saved reports", "Transfers and credit card payments"] },
  sales: { title: "Sales & invoices", milestone: 3, items: ["Invoices, estimates with e-signature, sales orders, sales receipts", "Progress invoicing, batch and recurring invoices", "Receive payments → undeposited funds → deposits", "Payment links and status tracking (Sent → Viewed → Paid → Deposited)", "Collections center and customer statements"] },
  customers: { title: "Customers", milestone: 3, items: ["Customer profiles with balances, notes and tasks", "Lead pipeline", "Price levels"] },
  expenses: { title: "Expenses & bills", milestone: 4, items: ["Expenses, checks, card credits with receipt capture", "Bills, batch Pay bills, vendor credits", "Purchase orders with approvals", "Print checks, batch reclassify"] },
  vendors: { title: "Vendors", milestone: 4, items: ["Vendor center", "1099 tracking, W-9 status, 1099-NEC summaries"] },
  projects: { title: "Projects", milestone: 5, items: ["Job costing with budgets and change orders", "Profit margin per job"] },
  time: { title: "Time", milestone: 5, items: ["Weekly timesheets, approvals", "Billable time to invoices"] },
  payroll: { title: "Payroll", milestone: 5, items: ["Pay-run calculator with balanced payroll entries", "Employee portal, contractor payments"] },
  inventory: { title: "Products & services", milestone: 5, items: ["Inventory, non-inventory, service, bundles, assemblies", "Locations, lots/serials, FIFO, landed cost, price rules"] },
  taxes: { title: "Taxes", milestone: 5, items: ["Sales tax agencies and rates", "Schedule C view and quarterly estimates"] },
  mileage: { title: "Mileage", milestone: 5, items: ["Trip log with IRS rate deduction"] }
};
export function Planned({ page }: { page: Page }) {
  const p = PLANNED[page];
  if (!p) return null;
  return (
    <>
      <PageHead title={p.title} sub={`Arrives in Milestone ${p.milestone}`} />
      <div className="card p-5 max-w-2xl">
        <div className="text-sm text-ink-2 mb-3">Planned for this screen:</div>
        <ul className="space-y-2">{p.items.map((i) => <li key={i} className="flex gap-2 text-sm"><Icon name="check" className="w-4 h-4 text-ink-3 mt-0.5" />{i}</li>)}</ul>
        <p className="text-xs text-ink-3 mt-4">Everything here will post through the same double-entry ledger that's already running.</p>
      </div>
    </>
  );
}
