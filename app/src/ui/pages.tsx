import { useMemo, useState } from "react";
import { accountRegister, ACCOUNT_TYPE_LABEL, balanceSheet, docTotal, profitAndLoss, SYSTEM, trialBalance, type Account, type AccountType } from "../ledger";
import { Icon } from "./icons";
import { fmtDate, money, todayISO, useBooks, type Page } from "./books";

const PageHead = ({ title, sub, actions }: { title: string; sub?: string; actions?: React.ReactNode }) => (
  <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
    <div><h1 className="text-xl font-semibold text-ink">{title}</h1>{sub && <p className="text-sm text-ink-2 mt-0.5">{sub}</p>}</div>
    {actions && <div className="flex gap-2">{actions}</div>}
  </div>
);
const Stat = ({ label, value, sub, onClick }: { label: string; value: string; sub?: string; onClick?: () => void }) => (
  <button type="button" onClick={onClick} disabled={!onClick} className="card p-4 text-left disabled:cursor-default hover:enabled:border-line-strong">
    <div className="text-xs font-medium text-ink-2">{label}</div>
    <div className="text-2xl font-semibold text-ink mt-1 tabular-nums">{value}</div>
    {sub && <div className="text-xs text-ink-3 mt-0.5">{sub}</div>}
  </button>
);

// ── Home ──
export function Dashboard() {
  const { snap, balances, go } = useBooks();
  const today = todayISO(), y = today.slice(0, 4), m = today.slice(0, 7);
  const ytd = useMemo(() => profitAndLoss(snap.journalEntries, snap.accounts, `${y}-01-01`, today), [snap, y, today]);
  const month = useMemo(() => profitAndLoss(snap.journalEntries, snap.accounts, `${m}-01`, today), [snap, m, today]);
  const banks = snap.accounts.filter((a) => a.type === "Bank" || a.type === "CreditCard");
  const months = useMemo(() => {
    const out: { label: string; income: number; expense: number }[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(Number(y), Number(today.slice(5, 7)) - 1 - i, 1);
      const from = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-01`, to = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-31`;
      const p = profitAndLoss(snap.journalEntries, snap.accounts, from, to);
      out.push({ label: d.toLocaleDateString("en-US", { month: "short" }), income: p.totalIncome, expense: p.totalCogs + p.totalExpenses });
    }
    return out;
  }, [snap, y, today]);
  const max = Math.max(1, ...months.flatMap((x) => [x.income, x.expense]));
  const recent = [...snap.transactions].sort((a, b) => (b.date + b.id).localeCompare(a.date + a.id)).slice(0, 8);
  return (
    <>
      <PageHead title={`Good ${new Date().getHours() < 12 ? "morning" : new Date().getHours() < 17 ? "afternoon" : "evening"}`} sub={new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <Stat label="Net income this month" value={money(month.netIncome)} sub={`Income ${money(month.totalIncome)}`} onClick={() => go("reports")} />
        <Stat label="Net income year to date" value={money(ytd.netIncome)} sub={`Gross profit ${money(ytd.grossProfit)}`} onClick={() => go("reports")} />
        <Stat label="Owed to you (A/R)" value={money(balances.get(SYSTEM.ar) || 0)} sub="Open invoices" />
        <Stat label="You owe (A/P)" value={money(balances.get(SYSTEM.ap) || 0)} sub="Unpaid bills" />
      </div>
      <div className="grid lg:grid-cols-3 gap-3">
        <div className="card p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4"><div className="text-sm font-semibold">Income vs. spending, last 6 months</div>
            <div className="flex gap-3 text-[11px] text-ink-2"><span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-slatebtn" />Income</span><span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-gray-300" />Spending</span></div></div>
          <div className="flex items-end gap-3 h-44" role="img" aria-label="Income and spending by month">
            {months.map((x) => (
              <div key={x.label} className="flex-1 flex flex-col items-center gap-1.5">
                <div className="w-full flex items-end gap-1 h-36">
                  <div className="flex-1 bg-slatebtn rounded-t" style={{ height: `${(x.income / max) * 100}%` }} title={`Income ${money(x.income)}`} />
                  <div className="flex-1 bg-gray-300 rounded-t" style={{ height: `${(x.expense / max) * 100}%` }} title={`Spending ${money(x.expense)}`} />
                </div>
                <div className="text-[11px] text-ink-3">{x.label}</div>
              </div>))}
          </div>
        </div>
        <div className="card">
          <div className="px-5 py-3.5 border-b border-line text-sm font-semibold">Bank & credit card accounts</div>
          {banks.map((a) => (
            <div key={a.id} className="px-5 py-3 border-b border-line last:border-0 flex justify-between text-sm">
              <span>{a.name}<span className="block text-[11px] text-ink-3">{a.type === "CreditCard" ? "Balance owed" : "In the books"}</span></span>
              <span className="tabular-nums font-medium">{money(balances.get(a.id) || 0)}</span>
            </div>))}
          <div className="px-5 py-3 text-[11px] text-ink-3">Bank-side balances and feeds arrive in Milestone 2.</div>
        </div>
      </div>
      <div className="card mt-3">
        <div className="px-5 py-3.5 border-b border-line text-sm font-semibold">Recent activity</div>
        <table className="w-full"><tbody>
          {recent.map((t) => (
            <tr key={t.id}><td className="td text-ink-2 whitespace-nowrap">{fmtDate(t.date)}</td>
              <td className="td capitalize">{t.type.replace(/([A-Z])/g, " $1")}{t.number ? ` #${t.number}` : t.checkNumber ? ` #${t.checkNumber}` : ""}</td>
              <td className="td text-ink-2 hidden sm:table-cell">{snap.contacts.find((c) => c.id === t.contactId)?.displayName || t.memo || ""}</td>
              <td className="td text-right tabular-nums">{money(t.amount ?? docTotal(t))}</td></tr>))}
          {!recent.length && <tr><td className="td text-ink-3">Nothing yet. Use + New to record something.</td></tr>}
        </tbody></table>
      </div>
    </>
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
