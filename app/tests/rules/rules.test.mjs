// Security-rules tests against the Firestore emulator.
// Run from app/:  npm run test:rules   (needs Java; downloads the emulator the first time)
import { assertFails, assertSucceeds, initializeTestEnvironment } from "@firebase/rules-unit-testing";
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const rules = readFileSync(fileURLToPath(new URL("../../../firestore.rules", import.meta.url)), "utf8");
const env = await initializeTestEnvironment({ projectId: "demo-jw-rules", firestore: { rules, host: "127.0.0.1", port: 8080 } });

let pass = 0, fail = 0;
async function t(name, fn) {
  try { await fn(); pass++; console.log("PASS", name); }
  catch (e) { fail++; console.log("FAIL", name, "—", e.message.split("\n")[0]); }
}

// Fixtures: owner (approved on the current dashboard), a standard sales user, a reports-only user, a time-only user, a stranger.
await env.withSecurityRulesDisabled(async (ctx) => {
  const db = ctx.firestore();
  await setDoc(doc(db, "members/owner"), { name: "Owner" });
  await setDoc(doc(db, "organizations/org1"), { name: "JW", ownerUid: "owner", closingDate: "2026-06-30", baseCurrency: "USD" });
  await setDoc(doc(db, "organizations/org1/members/owner"), { role: "admin", areas: [] });
  await setDoc(doc(db, "organizations/org1/members/sales"), { role: "standard", areas: ["sales", "purchases"] });
  await setDoc(doc(db, "organizations/org1/members/reader"), { role: "reportsOnly", areas: [] });
  await setDoc(doc(db, "organizations/org1/members/timer"), { role: "timeOnly", areas: [] });
  await setDoc(doc(db, "organizations/org1/members/acct"), { role: "accountant", areas: ["ledger", "sales", "purchases", "banking"] });
  await setDoc(doc(db, "organizations/org1/transactions/locked"), { type: "expense", date: "2026-05-01" });
  await setDoc(doc(db, "organizations/org1/transactions/open"), { type: "expense", date: "2026-09-01" });
  await setDoc(doc(db, "organizations/org1/journalEntries/je0"), { date: "2026-09-01", totalDebit: 100, totalCredit: 100, lines: [], createdBy: "owner" });
  await setDoc(doc(db, "organizations/org1/auditLogs/log0"), { uid: "owner", action: "create" });
});
const as = (uid) => env.authenticatedContext(uid).firestore();
const je = (over = {}) => ({ date: "2026-09-15", totalDebit: 500, totalCredit: 500, createdBy: "owner",
  lines: [{ accountId: "acct_1000", debit: 500, credit: 0 }, { accountId: "acct_3000", debit: 0, credit: 500 }], ...over });

await t("approved dashboard member can create a company they own", () => assertSucceeds(setDoc(doc(as("owner"), "organizations/org2"), { name: "X", ownerUid: "owner" })));
await t("…and add themselves as its admin", () => assertSucceeds(setDoc(doc(as("owner"), "organizations/org2/members/owner"), { role: "admin", areas: [] })));
await t("a stranger can't create a company", () => assertFails(setDoc(doc(as("stranger"), "organizations/org3"), { name: "X", ownerUid: "stranger" })));
await t("a stranger can't read a company", () => assertFails(getDoc(doc(as("stranger"), "organizations/org1"))));
await t("a stranger can't make themselves admin of someone else's company", () => assertFails(setDoc(doc(as("stranger"), "organizations/org1/members/stranger"), { role: "admin", areas: [] })));
await t("a standard user can't promote themselves", () => assertFails(updateDoc(doc(as("sales"), "organizations/org1/members/sales"), { role: "admin" })));
await t("only admins change company settings (closing date)", () => assertFails(updateDoc(doc(as("acct"), "organizations/org1"), { closingDate: "2026-12-31" })));
await t("admin can move the closing date", () => assertSucceeds(updateDoc(doc(as("owner"), "organizations/org1"), { closingDate: "2026-06-30" })));
await t("ownership can't be handed off from the app", () => assertFails(updateDoc(doc(as("owner"), "organizations/org1"), { ownerUid: "sales" })));

await t("balanced journal entry posts", () => assertSucceeds(setDoc(doc(as("owner"), "organizations/org1/journalEntries/je1"), je())));
await t("unbalanced entry is refused", () => assertFails(setDoc(doc(as("owner"), "organizations/org1/journalEntries/je2"), je({ totalCredit: 499 }))));
await t("$0 entry is refused", () => assertFails(setDoc(doc(as("owner"), "organizations/org1/journalEntries/je3"), je({ totalDebit: 0, totalCredit: 0 }))));
await t("fractional totals are refused", () => assertFails(setDoc(doc(as("owner"), "organizations/org1/journalEntries/je4"), je({ totalDebit: 5.5, totalCredit: 5.5 }))));
await t("one-line entry is refused", () => assertFails(setDoc(doc(as("owner"), "organizations/org1/journalEntries/je5"), je({ lines: [{ accountId: "a", debit: 500, credit: 0 }] }))));
await t("entry in a closed period is refused", () => assertFails(setDoc(doc(as("owner"), "organizations/org1/journalEntries/je6"), je({ date: "2026-06-30" }))));
await t("entry posted under someone else's name is refused", () => assertFails(setDoc(doc(as("owner"), "organizations/org1/journalEntries/je7"), je({ createdBy: "sales" }))));
await t("posted entries can't be edited", () => assertFails(updateDoc(doc(as("owner"), "organizations/org1/journalEntries/je0"), { totalDebit: 1, totalCredit: 1 })));
await t("posted entries can't be deleted", () => assertFails(deleteDoc(doc(as("owner"), "organizations/org1/journalEntries/je0"))));
await t("sales user can post (sales area)", () => assertSucceeds(setDoc(doc(as("sales"), "organizations/org1/journalEntries/je8"), je({ createdBy: "sales" }))));
await t("reports-only user can't post", () => assertFails(setDoc(doc(as("reader"), "organizations/org1/journalEntries/je9"), je({ createdBy: "reader" }))));
await t("reports-only user can read the ledger", () => assertSucceeds(getDoc(doc(as("reader"), "organizations/org1/journalEntries/je0"))));

await t("new document in an open period", () => assertSucceeds(setDoc(doc(as("sales"), "organizations/org1/transactions/t1"), { type: "invoice", date: "2026-09-02" })));
await t("new document in a closed period is refused", () => assertFails(setDoc(doc(as("sales"), "organizations/org1/transactions/t2"), { type: "invoice", date: "2026-06-01" })));
await t("a locked document can't be edited", () => assertFails(updateDoc(doc(as("owner"), "organizations/org1/transactions/locked"), { memo: "x" })));
await t("an open document can't be moved into a closed period", () => assertFails(updateDoc(doc(as("owner"), "organizations/org1/transactions/open"), { date: "2026-01-01" })));
await t("documents are never deleted (void instead)", () => assertFails(deleteDoc(doc(as("owner"), "organizations/org1/transactions/open"))));

await t("audit log: admin reads", () => assertSucceeds(getDoc(doc(as("owner"), "organizations/org1/auditLogs/log0"))));
await t("audit log: standard user can't read", () => assertFails(getDoc(doc(as("sales"), "organizations/org1/auditLogs/log0"))));
await t("audit log: can't be edited", () => assertFails(updateDoc(doc(as("owner"), "organizations/org1/auditLogs/log0"), { action: "x" })));
await t("audit log: can't be deleted", () => assertFails(deleteDoc(doc(as("owner"), "organizations/org1/auditLogs/log0"))));
await t("audit log: can't be written as someone else", () => assertFails(setDoc(doc(as("sales"), "organizations/org1/auditLogs/l2"), { uid: "owner" })));

await t("sales user can't edit the chart of accounts", () => assertFails(setDoc(doc(as("sales"), "organizations/org1/accounts/a1"), { name: "x" })));
await t("accountant can edit the chart of accounts", () => assertSucceeds(setDoc(doc(as("acct"), "organizations/org1/accounts/a1"), { name: "x" })));
await t("accounts can't be deleted (merge or deactivate instead)", () => assertFails(deleteDoc(doc(as("owner"), "organizations/org1/accounts/a1"))));
await t("sales user can add a customer", () => assertSucceeds(setDoc(doc(as("sales"), "organizations/org1/contacts/c1"), { displayName: "Smith" })));
await t("time-only user logs their own time", () => assertSucceeds(setDoc(doc(as("timer"), "organizations/org1/timeActivities/ta1"), { uid: "timer", hours: 3 })));
await t("time-only user can't log time for someone else", () => assertFails(setDoc(doc(as("timer"), "organizations/org1/timeActivities/ta2"), { uid: "owner", hours: 3 })));
await t("time-only user can't add customers", () => assertFails(setDoc(doc(as("timer"), "organizations/org1/contacts/c2"), { displayName: "x" })));
await t("unknown collections stay closed", () => assertFails(setDoc(doc(as("owner"), "organizations/org1/secrets/s1"), { a: 1 })));

await t("current dashboard still works for approved members", () => assertSucceeds(setDoc(doc(as("owner"), "expenses/e1"), { vendor: "Shell" })));
await t("current dashboard still closed to strangers", () => assertFails(getDoc(doc(as("stranger"), "expenses/e1"))));

console.log(`\n${pass}/${pass + fail} passed`);
await env.cleanup();
process.exit(fail ? 1 : 0);
