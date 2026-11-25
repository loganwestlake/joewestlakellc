// Demo company: six months of realistic activity for a small painting business, posted through the real ledger
// (so the demo exercises the same validation as real books). Only ever written into a separate demo company.
import { SYSTEM, toCents, type Transaction } from "../ledger";
import type { Store } from "./store";
import type { Contact, Item } from "./types";

// Small seeded random generator so the demo is the same every time.
function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 2 ** 32; };
}
const iso = (d: Date) => d.toISOString().slice(0, 10);
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * 86400000);

const CUSTOMERS = ["Smith Family", "Live Oak Builders, LLC", "Garcia Residence", "Spring Hill Dental", "Thompson Rentals", "Weeki Wachee HOA", "Patel Home", "Brooksville Cafe", "Nguyen Family", "Coastal Realty", "Harris Remodeling", "Miller Duplex"];
const VENDORS: [string, string, boolean?][] = [
  ["Sherwin-Williams", SYSTEM.materials], ["The Home Depot", SYSTEM.materials], ["Lowe's", SYSTEM.materials], ["Shell", "acct_6300"], ["7-Eleven", "acct_6300"],
  ["Florida Blue", "acct_6200"], ["State Farm", "acct_6200"], ["Paychex", "acct_6500"], ["AutoZone", "acct_6310"], ["SunPass", "acct_6320"],
  ["Craig Westlake", SYSTEM.contractLabor, true], ["Mike Helper", SYSTEM.contractLabor, true]
];
const SERVICES: [string, number][] = [["Interior painting", 2800], ["Exterior painting", 5200], ["Cabinet refinishing", 3400], ["Drywall repair", 650], ["Pressure washing", 400], ["Trim & doors", 1200]];

export async function seedDemoCompany(store: Store, orgId: string, opts: { months?: number; endDate?: Date; seed?: number } = {}) {
  const months = opts.months ?? 6, end = opts.endDate ?? new Date(), r = rng(opts.seed ?? 42);
  const pick = <T,>(a: T[]) => a[Math.floor(r() * a.length)];
  const cents = (lo: number, hi: number) => toCents(Math.round((lo + r() * (hi - lo)) * 100) / 100);
  const start = new Date(end.getFullYear(), end.getMonth() - months + 1, 1);
  const counts: Record<string, number> = {};
  const post = async (t: Omit<Transaction, "id">) => { await store.postTransaction(orgId, t); counts[t.type] = (counts[t.type] || 0) + 1; };

  // People and products
  const customerIds: string[] = [];
  for (const name of CUSTOMERS) customerIds.push(await store.saveDoc<Partial<Contact>>(orgId, "contacts", { displayName: name, roles: ["customer"], terms: "net30", active: true, pipelineStage: "won" }));
  const vendorIds = new Map<string, string>();
  for (const [name, , is1099] of VENDORS) vendorIds.set(name, await store.saveDoc<Partial<Contact>>(orgId, "contacts", { displayName: name, roles: is1099 ? ["vendor", "contractor"] : ["vendor"], is1099: !!is1099, w9OnFile: name === "Craig Westlake", active: true }));
  for (const [name, price] of SERVICES) await store.saveDoc<Partial<Item>>(orgId, "items", { name, type: "service", salesPrice: toCents(price), incomeAccountId: SYSTEM.serviceIncome, active: true });
  await store.saveDoc<Partial<Item>>(orgId, "items", { name: "Paint (gallon)", type: "nonInventory", salesPrice: toCents(58), cost: toCents(42), incomeAccountId: "acct_4100", expenseAccountId: SYSTEM.materials, active: true });

  // Opening balances: cash in the bank and the work truck the owner put into the business
  const day0 = iso(addDays(start, -1));
  await post({ type: "journal", date: day0, memo: "Opening balances", lines: [], journalLines: [
    { accountId: SYSTEM.checking, debit: toCents(12500), credit: 0 }, { accountId: "acct_1500", debit: toCents(18000), credit: 0 },
    { accountId: SYSTEM.ownerEquity, debit: 0, credit: toCents(30500) }] });

  let invNo = 1001, checkNo = 2170;
  const openInvoices: { id: string; customerId: string; total: number; date: string }[] = [];
  for (let m = 0; m < months; m++) {
    const mStart = new Date(start.getFullYear(), start.getMonth() + m, 1);
    const daysIn = new Date(mStart.getFullYear(), mStart.getMonth() + 1, 0).getDate();
    const day = (d: number) => { const x = new Date(mStart.getFullYear(), mStart.getMonth(), Math.min(d, daysIn)); return x > end ? null : iso(x); };

    // Jobs → estimates and invoices
    const jobs = 3 + Math.floor(r() * 4);
    for (let j = 0; j < jobs; j++) {
      const d = day(1 + Math.floor(r() * (daysIn - 2)));
      if (!d) continue;
      const customerId = pick(customerIds);
      const [svc, base] = pick(SERVICES);
      const labor = toCents(Math.round(base * (0.6 + r() * 0.9)));
      const gallons = 2 + Math.floor(r() * 12);
      await post({ type: "estimate", date: d, contactId: customerId, number: `E-${invNo}`, status: "accepted", lines: [{ description: svc, amount: labor, accountId: SYSTEM.serviceIncome }] });
      const lines = [{ description: svc, amount: labor, accountId: SYSTEM.serviceIncome }, { description: `Paint (${gallons} gal)`, qty: gallons, rate: toCents(58), amount: gallons * toCents(58), accountId: "acct_4100" }];
      const number = String(invNo++);
      const id = store.newId("tx");
      await post({ id, type: "invoice", number, date: d, dueDate: iso(addDays(new Date(d), 30)), contactId: customerId, contactType: "customer", lines } as Transaction);
      openInvoices.push({ id, customerId, total: lines.reduce((s, l) => s + l.amount, 0), date: d });
      // Materials for the job, on the card
      await post({ type: "expense", date: d, accountId: SYSTEM.card, contactId: vendorIds.get(pick(["Sherwin-Williams", "The Home Depot", "Lowe's"])), lines: [{ amount: gallons * toCents(42) + cents(10, 80), accountId: SYSTEM.materials, description: "Job materials" }] });
      // Sometimes a helper on the bigger jobs, paid by check
      if (labor > toCents(2500) && r() < 0.6) {
        const helper = pick(["Craig Westlake", "Mike Helper"]);
        await post({ type: "check", date: d, checkNumber: String(checkNo++), accountId: SYSTEM.checking, contactId: vendorIds.get(helper), lines: [{ amount: toCents(Math.round(labor / 100 * 0.25)), accountId: SYSTEM.contractLabor, description: `Labor — ${svc}` }] });
      }
    }
    // Customers pay most invoices 1–5 weeks later; payments go to Undeposited Funds, then a weekly deposit
    const due = openInvoices.filter((i) => i.date < (day(daysIn) || iso(end)));
    let undeposited = 0;
    for (const inv of due.splice(0, Math.max(0, due.length - 2))) {
      const pd = iso(addDays(new Date(inv.date), 7 + Math.floor(r() * 28)));
      if (pd > iso(end)) continue;
      await post({ type: "payment", date: pd, contactId: inv.customerId, amount: inv.total, accountId: SYSTEM.undeposited, applied: [{ txId: inv.id, amount: inv.total }], lines: [] });
      openInvoices.splice(openInvoices.indexOf(inv), 1);
      undeposited += inv.total;
      if (undeposited > toCents(4000) || r() < 0.4) {
        await post({ type: "deposit", date: pd, accountId: SYSTEM.checking, lines: [{ amount: undeposited, accountId: SYSTEM.undeposited, description: "Customer payments" }] });
        undeposited = 0;
      }
    }
    if (undeposited) { const d = day(daysIn); if (d) await post({ type: "deposit", date: d, accountId: SYSTEM.checking, lines: [{ amount: undeposited, accountId: SYSTEM.undeposited }] }); }

    // Running costs
    for (let w = 0; w < 4; w++) { const d = day(3 + w * 7); if (d) await post({ type: "expense", date: d, accountId: SYSTEM.card, contactId: vendorIds.get(pick(["Shell", "7-Eleven"])), lines: [{ amount: cents(35, 85), accountId: "acct_6300", description: "Fuel" }] }); }
    const d3 = day(3), d5 = day(5), d10 = day(10), d15 = day(15), d20 = day(20), d25 = day(25);
    if (d3) await post({ type: "bill", date: d3, dueDate: d15 || undefined, contactId: vendorIds.get("Florida Blue"), lines: [{ amount: toCents(223.03), accountId: "acct_6200", description: "Health plan" }] });
    if (d15) await post({ type: "billPayment", date: d15, contactId: vendorIds.get("Florida Blue"), amount: toCents(223.03), accountId: SYSTEM.checking, lines: [] });
    if (d5) await post({ type: "expense", date: d5, accountId: SYSTEM.checking, contactId: vendorIds.get("State Farm"), lines: [{ amount: toCents(186.4), accountId: "acct_6200", description: "Truck insurance" }] });
    if (d10) await post({ type: "expense", date: d10, accountId: SYSTEM.checking, contactId: vendorIds.get("Paychex"), lines: [{ amount: toCents(89), accountId: "acct_6500" }] });
    if (d20 && r() < 0.5) await post({ type: "expense", date: d20, accountId: SYSTEM.card, contactId: vendorIds.get(pick(["AutoZone", "SunPass"])), lines: [{ amount: cents(10, 240), accountId: pick(["acct_6310", "acct_6320"]) }] });
    if (d20) await post({ type: "check", date: d20, checkNumber: String(checkNo++), accountId: SYSTEM.checking, memo: "Owner draw", lines: [{ amount: toCents(1200), accountId: SYSTEM.ownerDraw, description: "Owner draw" }] });
    if (d25) await post({ type: "transfer", date: d25, fromAccountId: SYSTEM.checking, toAccountId: SYSTEM.card, amount: toCents(600), memo: "Credit card payment", lines: [] });
    // Monthly depreciation on the truck (5 years, straight line)
    const last = day(daysIn);
    if (last) await post({ type: "journal", date: last, memo: "Depreciation: work truck", lines: [], journalLines: [{ accountId: SYSTEM.depreciation, debit: toCents(300), credit: 0 }, { accountId: SYSTEM.accumDep, debit: 0, credit: toCents(300) }] });
  }
  return counts;
}
