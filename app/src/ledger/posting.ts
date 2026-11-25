// Posting rules: how each business document turns into balanced debits and credits.
// Documents that don't move money yet (estimates, sales orders, purchase orders) don't post.
import { SYSTEM } from "./accounts";
import { compactLines, JournalLine } from "./journal";
import { Cents, sumCents } from "./money";

export type TxType =
  | "invoice" | "salesReceipt" | "creditMemo" | "refundReceipt" | "payment" | "deposit"
  | "expense" | "check" | "creditCardCredit" | "bill" | "vendorCredit" | "billPayment"
  | "transfer" | "journal"
  | "estimate" | "salesOrder" | "purchaseOrder";

export const NON_POSTING: TxType[] = ["estimate", "salesOrder", "purchaseOrder"];

export interface TxLine {
  accountId?: string;      // income account on sales, expense account on purchases
  itemId?: string;
  description?: string;
  qty?: number;
  rate?: Cents;
  amount: Cents;           // qty × rate, already rounded
  taxable?: boolean;
  classId?: string;
  locationId?: string;
  projectId?: string;
  billable?: boolean;
}

export interface Transaction {
  id: string;
  type: TxType;
  number?: string;
  date: string;
  dueDate?: string;
  status?: string;
  contactId?: string;              // customer or vendor
  contactType?: "customer" | "vendor";
  lines: TxLine[];
  taxCents?: Cents;
  taxAccountId?: string;
  discountCents?: Cents;
  memo?: string;
  // money movement
  accountId?: string;              // bank / card used to pay, or deposit-to account
  fromAccountId?: string;          // transfers
  toAccountId?: string;
  amount?: Cents;                  // payments, transfers
  applied?: { txId: string; amount: Cents }[]; // payments / bill payments applied to invoices / bills
  checkNumber?: string;
  journalLines?: JournalLine[];    // manual journal entries
  currency?: string;
  exchangeRate?: number;
  projectId?: string;
  classId?: string;
  locationId?: string;
}

const dr = (accountId: string, cents: Cents, extra: Partial<JournalLine> = {}): JournalLine => ({ accountId, debit: cents, credit: 0, ...extra });
const cr = (accountId: string, cents: Cents, extra: Partial<JournalLine> = {}): JournalLine => ({ accountId, debit: 0, credit: cents, ...extra });

export const subtotal = (t: Transaction): Cents => sumCents(t.lines.map((l) => l.amount));
export const docTotal = (t: Transaction): Cents => subtotal(t) + (t.taxCents || 0) - (t.discountCents || 0);

function salesSide(t: Transaction, debitAccount: string, sign: 1 | -1): JournalLine[] {
  const who = t.contactId ? { entityId: t.contactId, entityType: "customer" as const } : {};
  const total = docTotal(t);
  const lines: JournalLine[] = [];
  const side = (acct: string, cents: Cents, extra: Partial<JournalLine> = {}) => (sign === 1 ? cr(acct, cents, extra) : dr(acct, cents, extra));
  const other = (acct: string, cents: Cents, extra: Partial<JournalLine> = {}) => (sign === 1 ? dr(acct, cents, extra) : cr(acct, cents, extra));
  lines.push(other(debitAccount, total, who));
  for (const l of t.lines) if (l.amount) lines.push(side(l.accountId || SYSTEM.serviceIncome, l.amount, { ...who, classId: l.classId ?? t.classId, locationId: l.locationId ?? t.locationId, memo: l.description }));
  if (t.taxCents) lines.push(side(t.taxAccountId || SYSTEM.salesTax, t.taxCents));
  if (t.discountCents) lines.push(other(SYSTEM.discounts, t.discountCents, who));
  return lines;
}

function purchaseSide(t: Transaction, creditAccount: string, sign: 1 | -1): JournalLine[] {
  const who = t.contactId ? { entityId: t.contactId, entityType: "vendor" as const } : {};
  const total = docTotal(t);
  const lines: JournalLine[] = [];
  for (const l of t.lines) if (l.amount) lines.push((sign === 1 ? dr : cr)(l.accountId || SYSTEM.uncategorizedExpense, l.amount, { ...who, classId: l.classId ?? t.classId, locationId: l.locationId ?? t.locationId, memo: l.description }));
  if (t.taxCents) lines.push((sign === 1 ? dr : cr)(SYSTEM.uncategorizedExpense, t.taxCents, { memo: "Sales tax paid" }));
  lines.push((sign === 1 ? cr : dr)(creditAccount, total, who));
  return lines;
}

/** The journal lines a document posts, or null for documents that don't post. Throws on missing accounts. */
export function postingFor(t: Transaction): JournalLine[] | null {
  if (NON_POSTING.includes(t.type)) return null;
  const amt = t.amount ?? 0;
  const who = (type: "customer" | "vendor") => (t.contactId ? { entityId: t.contactId, entityType: type } : {});
  let lines: JournalLine[];
  switch (t.type) {
    case "invoice": lines = salesSide(t, SYSTEM.ar, 1); break;                                       // Dr A/R, Cr income/tax
    case "salesReceipt": lines = salesSide(t, t.accountId || SYSTEM.undeposited, 1); break;          // Dr bank/undeposited, Cr income
    case "creditMemo": lines = salesSide(t, SYSTEM.ar, -1); break;                                    // Cr A/R, Dr income
    case "refundReceipt": lines = salesSide(t, t.accountId || SYSTEM.checking, -1); break;           // Cr bank, Dr income
    case "payment": lines = [dr(t.accountId || SYSTEM.undeposited, amt, who("customer")), cr(SYSTEM.ar, amt, who("customer"))]; break;
    case "deposit": {
      if (!t.accountId) throw new Error("A deposit needs the bank account it goes into.");
      const total = subtotal(t);
      lines = [dr(t.accountId, total), ...t.lines.map((l) => cr(l.accountId || SYSTEM.undeposited, l.amount, { memo: l.description }))];
      break;
    }
    case "expense":
    case "check": lines = purchaseSide(t, t.accountId || SYSTEM.checking, 1); break;                // Dr expense, Cr bank/card
    case "creditCardCredit": lines = purchaseSide(t, t.accountId || SYSTEM.card, -1); break;          // Dr card, Cr expense
    case "bill": lines = purchaseSide(t, SYSTEM.ap, 1); break;                                        // Dr expense, Cr A/P
    case "vendorCredit": lines = purchaseSide(t, SYSTEM.ap, -1); break;                               // Dr A/P, Cr expense
    case "billPayment": lines = [dr(SYSTEM.ap, amt, who("vendor")), cr(t.accountId || SYSTEM.checking, amt, who("vendor"))]; break;
    case "transfer":
      if (!t.fromAccountId || !t.toAccountId || t.fromAccountId === t.toAccountId) throw new Error("A transfer needs two different accounts.");
      lines = [dr(t.toAccountId, amt), cr(t.fromAccountId, amt)]; break;
    case "journal": lines = (t.journalLines || []).map((l) => ({ ...l })); break;
    default: throw new Error(`No posting rule for ${t.type}`);
  }
  return t.type === "journal" ? lines : compactLines(lines);
}
