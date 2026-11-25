// Core reports straight from the ledger: account balances, trial balance, profit & loss, balance sheet.
import { Account, ACCOUNT_CLASS, AccountClass, normalSide, SYSTEM } from "./accounts";
import type { JournalEntry } from "./journal";
import type { Cents } from "./money";

export interface Balance { debit: Cents; credit: Cents; }

const inRange = (d: string, from?: string, to?: string) => (!from || d >= from) && (!to || d <= to);

/** Debits and credits per account for entries dated in [from, to]. */
export function accountTotals(entries: JournalEntry[], from?: string, to?: string): Map<string, Balance> {
  const out = new Map<string, Balance>();
  for (const e of entries) {
    if (!inRange(e.date, from, to)) continue;
    for (const l of e.lines) {
      const b = out.get(l.accountId) || { debit: 0, credit: 0 };
      b.debit += l.debit; b.credit += l.credit;
      out.set(l.accountId, b);
    }
  }
  return out;
}

/** Balance on the account's normal side (positive = normal, e.g. money in the bank, income earned). */
export const signedBalance = (a: Account, b?: Balance): Cents => (!b ? 0 : normalSide(a.type) === "debit" ? b.debit - b.credit : b.credit - b.debit);

export interface TrialBalanceRow { account: Account; debit: Cents; credit: Cents; }
export function trialBalance(entries: JournalEntry[], accounts: Account[], asOf?: string) {
  const totals = accountTotals(entries, undefined, asOf);
  const rows: TrialBalanceRow[] = [];
  for (const a of accounts) {
    const b = totals.get(a.id);
    if (!b) continue;
    const net = b.debit - b.credit;
    if (net) rows.push({ account: a, debit: Math.max(net, 0), credit: Math.max(-net, 0) });
  }
  const totalDebit = rows.reduce((s, r) => s + r.debit, 0), totalCredit = rows.reduce((s, r) => s + r.credit, 0);
  return { rows, totalDebit, totalCredit, balanced: totalDebit === totalCredit };
}

export interface PnL { income: Row[]; cogs: Row[]; expenses: Row[]; otherIncome: Row[]; otherExpense: Row[]; totalIncome: Cents; totalCogs: Cents; grossProfit: Cents; totalExpenses: Cents; netOperatingIncome: Cents; netOther: Cents; netIncome: Cents; }
export interface Row { account: Account; amount: Cents; }

export function profitAndLoss(entries: JournalEntry[], accounts: Account[], from?: string, to?: string): PnL {
  const totals = accountTotals(entries, from, to);
  const pick = (types: Account["type"][]) => accounts.filter((a) => types.includes(a.type)).map((a) => ({ account: a, amount: signedBalance(a, totals.get(a.id)) })).filter((r) => r.amount);
  const income = pick(["Income"]), cogs = pick(["CostOfGoodsSold"]), expenses = pick(["Expense"]), otherIncome = pick(["OtherIncome"]), otherExpense = pick(["OtherExpense"]);
  const s = (rows: Row[]) => rows.reduce((t, r) => t + r.amount, 0);
  const totalIncome = s(income), totalCogs = s(cogs), grossProfit = totalIncome - totalCogs, totalExpenses = s(expenses);
  const netOperatingIncome = grossProfit - totalExpenses, netOther = s(otherIncome) - s(otherExpense);
  return { income, cogs, expenses, otherIncome, otherExpense, totalIncome, totalCogs, grossProfit, totalExpenses, netOperatingIncome, netOther, netIncome: netOperatingIncome + netOther };
}

/** Balance sheet as of a date. Income and expense to date roll into Retained Earnings (prior years) and Net Income (this year). */
export function balanceSheet(entries: JournalEntry[], accounts: Account[], asOf: string, fiscalYearStart = "01-01") {
  const yearStart = `${asOf.slice(0, 4)}-${fiscalYearStart}`;
  const totals = accountTotals(entries, undefined, asOf);
  const byClass = (cls: AccountClass) => accounts.filter((a) => ACCOUNT_CLASS[a.type] === cls).map((a) => ({ account: a, amount: signedBalance(a, totals.get(a.id)) })).filter((r) => r.amount);
  const priorEntries = entries.filter((e) => e.date < yearStart);
  const prior = profitAndLoss(priorEntries, accounts).netIncome;
  const current = profitAndLoss(entries, accounts, yearStart, asOf).netIncome;
  const assets = byClass("asset"), liabilities = byClass("liability");
  const equity = byClass("equity").map((r) => (r.account.id === SYSTEM.retained ? { ...r, amount: r.amount + prior } : r));
  if (prior && !equity.some((r) => r.account.id === SYSTEM.retained)) {
    const re = accounts.find((a) => a.id === SYSTEM.retained);
    if (re) equity.push({ account: re, amount: prior });
  }
  const s = (rows: Row[]) => rows.reduce((t, r) => t + r.amount, 0);
  const totalAssets = s(assets), totalLiabilities = s(liabilities), totalEquity = s(equity) + current;
  return { assets, liabilities, equity, netIncome: current, totalAssets, totalLiabilities, totalEquity, balanced: totalAssets === totalLiabilities + totalEquity };
}

/** Running register for one account: every line that touched it, oldest first, with the balance after each. */
export function accountRegister(entries: JournalEntry[], account: Account) {
  const rows: { entry: JournalEntry; debit: Cents; credit: Cents; balance: Cents }[] = [];
  let bal = 0;
  const sorted = [...entries].sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));
  for (const e of sorted) for (const l of e.lines) {
    if (l.accountId !== account.id) continue;
    bal += normalSide(account.type) === "debit" ? l.debit - l.credit : l.credit - l.debit;
    rows.push({ entry: e, debit: l.debit, credit: l.credit, balance: bal });
  }
  return rows;
}
