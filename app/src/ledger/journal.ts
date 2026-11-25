// Journal entries: the double-entry ledger. Every entry's debits equal its credits, entries are never edited
// after posting (corrections are new reversing entries), and nothing posts into a closed period.
import { Cents, formatMoney, isCents, sumCents } from "./money";
import type { Account } from "./accounts";

export type EntityType = "customer" | "vendor" | "employee" | "contractor" | "donor";

export interface JournalLine {
  accountId: string;
  debit: Cents;
  credit: Cents;
  memo?: string;
  entityId?: string;
  entityType?: EntityType;
  classId?: string;
  locationId?: string;
  fundId?: string;
}

export interface JournalEntry {
  id: string;
  date: string;              // YYYY-MM-DD
  memo?: string;
  sourceType: string;        // "invoice", "expense", "journal", "reversal", …
  sourceId?: string;
  lines: JournalLine[];
  totalDebit: Cents;
  totalCredit: Cents;
  currency: string;
  exchangeRate: number;      // home currency per 1 unit of `currency`
  reversalOf?: string;
  createdBy?: string;
  createdAt?: string;
}

export class LedgerError extends Error {
  constructor(message: string, public readonly code: string) { super(message); }
}

const ISO = /^\d{4}-\d{2}-\d{2}$/;

/** True when `date` is on or before the closing date: the books for that period are locked. */
export const isLocked = (date: string, closingDate?: string | null) => !!closingDate && date <= closingDate;

/** Throws a LedgerError describing the first problem, or returns the entry with totals recomputed. */
export function validateEntry(
  e: Omit<JournalEntry, "totalDebit" | "totalCredit"> & Partial<Pick<JournalEntry, "totalDebit" | "totalCredit">>,
  opts: { accounts?: Map<string, Account> | Record<string, Account>; closingDate?: string | null } = {}
): JournalEntry {
  if (!ISO.test(e.date)) throw new LedgerError(`Date must be YYYY-MM-DD (got "${e.date}")`, "BAD_DATE");
  if (isLocked(e.date, opts.closingDate)) throw new LedgerError(`The books are closed through ${opts.closingDate}. Post this in an open period.`, "PERIOD_LOCKED");
  if (!Array.isArray(e.lines) || e.lines.length < 2) throw new LedgerError("A journal entry needs at least two lines.", "TOO_FEW_LINES");
  const lookup = opts.accounts instanceof Map ? (id: string) => (opts.accounts as Map<string, Account>).get(id) : (id: string) => (opts.accounts as Record<string, Account> | undefined)?.[id];
  e.lines.forEach((l, i) => {
    const n = i + 1;
    if (!l.accountId) throw new LedgerError(`Line ${n} has no account.`, "NO_ACCOUNT");
    if (opts.accounts && !lookup(l.accountId)) throw new LedgerError(`Line ${n} uses an account that doesn't exist (${l.accountId}).`, "UNKNOWN_ACCOUNT");
    if (!isCents(l.debit) || !isCents(l.credit)) throw new LedgerError(`Line ${n} amounts must be whole cents.`, "BAD_AMOUNT");
    if (l.debit < 0 || l.credit < 0) throw new LedgerError(`Line ${n} has a negative amount.`, "NEGATIVE");
    if ((l.debit > 0) === (l.credit > 0)) throw new LedgerError(`Line ${n} must have either a debit or a credit, not both or neither.`, "ONE_SIDE");
  });
  const totalDebit = sumCents(e.lines.map((l) => l.debit));
  const totalCredit = sumCents(e.lines.map((l) => l.credit));
  if (totalDebit !== totalCredit) throw new LedgerError(`Debits (${formatMoney(totalDebit)}) and credits (${formatMoney(totalCredit)}) don't match. They're off by ${formatMoney(Math.abs(totalDebit - totalCredit))}.`, "UNBALANCED");
  if (totalDebit === 0) throw new LedgerError("A journal entry can't be for $0.", "ZERO");
  if (e.totalDebit !== undefined && e.totalDebit !== totalDebit) throw new LedgerError("Stated debit total doesn't match the lines.", "TOTAL_MISMATCH");
  if (e.totalCredit !== undefined && e.totalCredit !== totalCredit) throw new LedgerError("Stated credit total doesn't match the lines.", "TOTAL_MISMATCH");
  if (!(e.exchangeRate > 0)) throw new LedgerError("Exchange rate must be positive.", "BAD_RATE");
  return { ...e, totalDebit, totalCredit } as JournalEntry;
}

/** A new entry that exactly undoes `e` (debits and credits swapped), dated `date`. */
export function reverseEntry(e: JournalEntry, id: string, date: string, memo?: string): JournalEntry {
  return {
    ...e, id, date, memo: memo ?? `Reversal of ${e.memo || e.id}`, sourceType: "reversal", sourceId: e.id, reversalOf: e.id,
    lines: e.lines.map((l) => ({ ...l, debit: l.credit, credit: l.debit })), createdAt: undefined
  };
}

/** Merge lines that hit the same account/entity/class/location so entries stay readable. */
export function compactLines(lines: JournalLine[]): JournalLine[] {
  const map = new Map<string, JournalLine>();
  for (const l of lines) {
    const k = [l.accountId, l.entityId, l.classId, l.locationId, l.fundId, l.memo].join("|");
    const cur = map.get(k);
    if (cur) { cur.debit += l.debit; cur.credit += l.credit; } else map.set(k, { ...l });
  }
  return [...map.values()].map((l) => {
    const net = l.debit - l.credit;
    return { ...l, debit: Math.max(net, 0), credit: Math.max(-net, 0) };
  }).filter((l) => l.debit || l.credit);
}
