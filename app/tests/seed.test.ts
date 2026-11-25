import { describe, expect, it } from "vitest";
import { balanceSheet, profitAndLoss, trialBalance } from "../src/ledger";
import { seedDemoCompany } from "../src/data/seed";
import { MemoryStore, type Snapshot } from "../src/data/store";

describe("demo company", () => {
  it("six months of activity, all balanced, books tie out", async () => {
    const store = new MemoryStore();
    const org = await store.createOrg({ name: "Demo Painting Co.", edition: "contractor", baseCurrency: "USD", fiscalYearStartMonth: 1, isDemo: true });
    const counts = await seedDemoCompany(store, org.id, { endDate: new Date(2026, 10, 25) });
    let snap!: Snapshot;
    store.watch(org.id, (s) => (snap = s));
    await new Promise((r) => setTimeout(r, 0));
    expect(counts.invoice).toBeGreaterThan(15);
    expect(counts.payment).toBeGreaterThan(10);
    expect(counts.check).toBeGreaterThan(5);
    expect(counts.estimate).toBe(counts.invoice);
    // Estimates don't post: one journal entry per posting document only.
    const posting = snap.transactions.filter((t) => t.type !== "estimate").length;
    expect(snap.journalEntries.length).toBe(posting);
    expect(trialBalance(snap.journalEntries, snap.accounts).balanced).toBe(true);
    const bs = balanceSheet(snap.journalEntries, snap.accounts, "2026-11-25");
    expect(bs.balanced).toBe(true);
    const pnl = profitAndLoss(snap.journalEntries, snap.accounts, "2026-06-01", "2026-11-30");
    expect(pnl.totalIncome).toBeGreaterThan(0);
    expect(snap.auditLogs.length).toBeGreaterThan(snap.transactions.length);
    // Same seed → same company
    const store2 = new MemoryStore();
    const org2 = await store2.createOrg({ name: "D", edition: "general", baseCurrency: "USD", fiscalYearStartMonth: 1 });
    expect(await seedDemoCompany(store2, org2.id, { endDate: new Date(2026, 10, 25) })).toEqual(counts);
  });

  it("a closed period refuses new postings, and reversals undo exactly once", async () => {
    const store = new MemoryStore();
    const org = await store.createOrg({ name: "X", edition: "general", baseCurrency: "USD", fiscalYearStartMonth: 1 });
    const { entry } = await store.postTransaction(org.id, { type: "expense", date: "2026-11-02", accountId: "acct_1000", lines: [{ amount: 5000, accountId: "acct_6300" }] });
    await store.updateOrg(org.id, { closingDate: "2026-10-31" });
    await expect(store.postTransaction(org.id, { type: "expense", date: "2026-10-15", accountId: "acct_1000", lines: [{ amount: 100, accountId: "acct_6300" }] })).rejects.toThrow(/closed through/);
    await store.reverseEntry(org.id, entry!.id, "2026-11-03");
    await expect(store.reverseEntry(org.id, entry!.id, "2026-11-04")).rejects.toThrow(/already reversed/);
  });
});

import { ACTIVITIES, ROLE_PERMISSIONS, areasFor } from "../src/data/permissions";
describe("permissions", () => {
  it("115+ distinct activities, every role's permissions are real activities", () => {
    expect(new Set(ACTIVITIES).size).toBe(ACTIVITIES.length);
    expect(ACTIVITIES.length).toBeGreaterThanOrEqual(115);
    for (const perms of Object.values(ROLE_PERMISSIONS)) for (const p of perms) expect(ACTIVITIES).toContain(p);
  });
  it("reports-only and time-only roles can't write anywhere the rules guard", () => {
    expect(areasFor(ROLE_PERMISSIONS.reportsOnly).filter((a) => a !== "reports")).toEqual([]);
    expect(areasFor(ROLE_PERMISSIONS.timeOnly)).toEqual(["time"]);
    expect(areasFor(ROLE_PERMISSIONS.admin).sort()).toContain("settings");
  });
});
