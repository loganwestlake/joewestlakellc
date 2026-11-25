import { describe, expect, it } from "vitest";
import {
  balanceSheet, defaultChartOfAccounts, docTotal, LedgerError, postingFor, profitAndLoss, reverseEntry, SYSTEM,
  toCents, trialBalance, validateEntry, type JournalEntry, type Transaction
} from "../src/ledger";

const accounts = defaultChartOfAccounts();
const byId = Object.fromEntries(accounts.map((a) => [a.id, a]));
let n = 0;
const post = (t: Transaction, closingDate?: string): JournalEntry =>
  validateEntry({ id: `je${++n}`, date: t.date, sourceType: t.type, sourceId: t.id, lines: postingFor(t)!, currency: "USD", exchangeRate: 1 }, { accounts: byId, closingDate });

describe("money", () => {
  it("stores whole cents and reads $ strings", () => {
    expect(toCents("$1,250.10")).toBe(125010);
    expect(toCents(0.1 + 0.2)).toBe(30);
  });
});

describe("validateEntry", () => {
  const base = { id: "x", date: "2026-11-01", sourceType: "journal", currency: "USD", exchangeRate: 1 };
  it("accepts a balanced entry and computes totals", () => {
    const e = validateEntry({ ...base, lines: [{ accountId: SYSTEM.checking, debit: 500, credit: 0 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: 500 }] }, { accounts: byId });
    expect(e.totalDebit).toBe(500);
    expect(e.totalCredit).toBe(500);
  });
  const bad: [string, object, string][] = [
    ["unbalanced", { lines: [{ accountId: SYSTEM.checking, debit: 500, credit: 0 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: 499 }] }, "UNBALANCED"],
    ["one line", { lines: [{ accountId: SYSTEM.checking, debit: 500, credit: 0 }] }, "TOO_FEW_LINES"],
    ["both sides on a line", { lines: [{ accountId: SYSTEM.checking, debit: 5, credit: 5 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: 0 }] }, "ONE_SIDE"],
    ["fractional cents", { lines: [{ accountId: SYSTEM.checking, debit: 1.5, credit: 0 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: 1.5 }] }, "BAD_AMOUNT"],
    ["negative", { lines: [{ accountId: SYSTEM.checking, debit: -5, credit: 0 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: -5 }] }, "NEGATIVE"],
    ["unknown account", { lines: [{ accountId: "acct_nope", debit: 5, credit: 0 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: 5 }] }, "UNKNOWN_ACCOUNT"],
    ["zero", { lines: [{ accountId: SYSTEM.checking, debit: 0, credit: 0 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: 0 }] }, "ONE_SIDE"],
    ["stated totals lie", { totalDebit: 999, lines: [{ accountId: SYSTEM.checking, debit: 5, credit: 0 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: 5 }] }, "TOTAL_MISMATCH"],
    ["bad date", { date: "11/01/2026", lines: [{ accountId: SYSTEM.checking, debit: 5, credit: 0 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: 5 }] }, "BAD_DATE"]
  ];
  for (const [name, patch, code] of bad) {
    it(`rejects: ${name}`, () => {
      try { validateEntry({ ...base, ...patch } as never, { accounts: byId }); throw new Error("accepted"); }
      catch (err) { expect((err as LedgerError).code).toBe(code); }
    });
  }
  it("refuses to post into a closed period", () => {
    expect(() => validateEntry({ ...base, date: "2026-03-31", lines: [{ accountId: SYSTEM.checking, debit: 5, credit: 0 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: 5 }] }, { closingDate: "2026-03-31" })).toThrow(/closed through 2026-03-31/);
  });
});

describe("posting rules", () => {
  const inv: Transaction = { id: "inv1", type: "invoice", date: "2026-10-01", contactId: "c1", lines: [{ amount: 300000, accountId: SYSTEM.serviceIncome }, { amount: 40000, accountId: "acct_4100" }], taxCents: 2800, discountCents: 10000 };
  it("invoice: Dr A/R total, Cr income and tax, Dr discount", () => {
    expect(docTotal(inv)).toBe(332800);
    const lines = postingFor(inv)!;
    const get = (id: string) => lines.find((l) => l.accountId === id)!;
    expect(get(SYSTEM.ar).debit).toBe(332800);
    expect(get(SYSTEM.serviceIncome).credit).toBe(300000);
    expect(get(SYSTEM.salesTax).credit).toBe(2800);
    expect(get(SYSTEM.discounts).debit).toBe(10000);
    expect(get(SYSTEM.ar).entityId).toBe("c1");
  });
  it("every posting type balances", () => {
    const docs: Transaction[] = [
      inv,
      { id: "p", type: "payment", date: "2026-10-05", contactId: "c1", amount: 332800, lines: [] },
      { id: "d", type: "deposit", date: "2026-10-06", accountId: SYSTEM.checking, lines: [{ amount: 332800, accountId: SYSTEM.undeposited }] },
      { id: "sr", type: "salesReceipt", date: "2026-10-07", lines: [{ amount: 50000 }], accountId: SYSTEM.checking },
      { id: "cm", type: "creditMemo", date: "2026-10-08", contactId: "c1", lines: [{ amount: 2500 }] },
      { id: "rr", type: "refundReceipt", date: "2026-10-08", lines: [{ amount: 2500 }] },
      { id: "e", type: "expense", date: "2026-10-09", accountId: SYSTEM.card, contactId: "v1", lines: [{ amount: 6171, accountId: SYSTEM.materials }, { amount: 2112, accountId: "acct_6300" }] },
      { id: "ck", type: "check", date: "2026-10-10", checkNumber: "2179", accountId: SYSTEM.checking, contactId: "v2", lines: [{ amount: 60000, accountId: SYSTEM.contractLabor }] },
      { id: "b", type: "bill", date: "2026-10-11", contactId: "v3", lines: [{ amount: 22303, accountId: "acct_6200" }] },
      { id: "bp", type: "billPayment", date: "2026-10-20", contactId: "v3", amount: 22303, lines: [] },
      { id: "vc", type: "vendorCredit", date: "2026-10-21", contactId: "v3", lines: [{ amount: 1000, accountId: "acct_6200" }] },
      { id: "ccc", type: "creditCardCredit", date: "2026-10-22", lines: [{ amount: 1061, accountId: SYSTEM.materials }] },
      { id: "t", type: "transfer", date: "2026-10-23", fromAccountId: SYSTEM.checking, toAccountId: SYSTEM.card, amount: 20000, lines: [] }
    ];
    for (const d of docs) expect(() => post(d), d.type).not.toThrow();
  });
  it("a 60-item invoice still posts within the 30-line limit", () => {
    const big: Transaction = { id: "big", type: "invoice", date: "2026-10-01", contactId: "c1", lines: Array.from({ length: 60 }, (_, i) => ({ amount: 1000 + i, description: `Room ${i + 1}`, accountId: i % 2 ? SYSTEM.serviceIncome : "acct_4100" })) };
    const e = post(big);
    expect(e.lines.length).toBeLessThanOrEqual(30);
    expect(e.totalDebit).toBe(docTotal(big));
  });
  it("estimates, sales orders and POs don't post", () => {
    for (const type of ["estimate", "salesOrder", "purchaseOrder"] as const) expect(postingFor({ id: type, type, date: "2026-10-01", lines: [{ amount: 100 }] })).toBeNull();
  });
  it("a transfer between the same account is refused", () => {
    expect(() => postingFor({ id: "t", type: "transfer", date: "2026-10-01", fromAccountId: SYSTEM.checking, toAccountId: SYSTEM.checking, amount: 5, lines: [] })).toThrow();
  });
});

describe("reports", () => {
  const entries = [
    post({ id: "own", type: "journal", date: "2025-12-31", lines: [], journalLines: [{ accountId: SYSTEM.checking, debit: 1000000, credit: 0 }, { accountId: SYSTEM.ownerEquity, debit: 0, credit: 1000000 }] }),
    post({ id: "ly", type: "salesReceipt", date: "2025-12-15", accountId: SYSTEM.checking, lines: [{ amount: 200000 }] }),
    post({ id: "inv", type: "invoice", date: "2026-10-01", contactId: "c1", lines: [{ amount: 500000 }] }),
    post({ id: "pay", type: "payment", date: "2026-10-05", contactId: "c1", amount: 300000, accountId: SYSTEM.checking, lines: [] }),
    post({ id: "exp", type: "expense", date: "2026-10-09", accountId: SYSTEM.checking, lines: [{ amount: 120000, accountId: SYSTEM.materials }, { amount: 30000, accountId: "acct_6300" }] }),
    post({ id: "draw", type: "check", date: "2026-10-10", accountId: SYSTEM.checking, lines: [{ amount: 50000, accountId: SYSTEM.ownerDraw }] })
  ];
  it("trial balance balances", () => {
    const tb = trialBalance(entries, accounts);
    expect(tb.balanced).toBe(true);
    expect(tb.totalDebit).toBeGreaterThan(0);
  });
  it("profit & loss for 2026", () => {
    const p = profitAndLoss(entries, accounts, "2026-01-01", "2026-12-31");
    expect(p.totalIncome).toBe(500000);
    expect(p.totalCogs).toBe(120000);
    expect(p.grossProfit).toBe(380000);
    expect(p.totalExpenses).toBe(30000);
    expect(p.netIncome).toBe(350000);
  });
  it("balance sheet balances, with last year's profit in retained earnings", () => {
    const bs = balanceSheet(entries, accounts, "2026-11-25");
    expect(bs.balanced).toBe(true);
    expect(bs.netIncome).toBe(350000);
    expect(bs.equity.find((r) => r.account.id === SYSTEM.retained)!.amount).toBe(200000);
    expect(bs.assets.find((r) => r.account.id === SYSTEM.ar)!.amount).toBe(200000);
    // Checking: 10,000 + 2,000 + 3,000 − 1,500 − 500 = 13,000
    expect(bs.assets.find((r) => r.account.id === SYSTEM.checking)!.amount).toBe(1300000);
  });
  it("a reversal cancels the original exactly", () => {
    const orig = entries[4];
    const rev = validateEntry(reverseEntry(orig, "rev1", "2026-10-31"), { accounts: byId });
    const p = profitAndLoss([orig, rev], accounts);
    expect(p.netIncome).toBe(0);
    expect(rev.reversalOf).toBe(orig.id);
  });
});
