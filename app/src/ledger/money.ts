// Money is stored as integer cents everywhere in the ledger, so totals never drift by a fraction of a cent.
export type Cents = number;

export const toCents = (value: number | string): Cents => {
  const n = typeof value === "string" ? Number(value.replace(/[$,\s]/g, "")) : value;
  if (!Number.isFinite(n)) throw new Error(`Not an amount: ${value}`);
  return Math.round(n * 100);
};

export const fromCents = (c: Cents): number => c / 100;

export const isCents = (c: unknown): c is Cents => typeof c === "number" && Number.isInteger(c) && Number.isFinite(c);

export function formatMoney(c: Cents, currency = "USD"): string {
  return (c / 100).toLocaleString("en-US", { style: "currency", currency });
}

export const sumCents = (values: Cents[]): Cents => values.reduce((s, v) => s + v, 0);
