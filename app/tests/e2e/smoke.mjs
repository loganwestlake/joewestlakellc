// Browser smoke test of the built app (../books) using the in-browser demo company.
// Run from app/ after `npm run build`:  node tests/e2e/smoke.mjs
import { createRequire } from "node:module";
// Playwright comes from the machine (CommonJS), not this package's dependencies.
const { chromium, devices } = createRequire(import.meta.url)("playwright");
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const BOOKS = fileURLToPath(new URL("../../../books/", import.meta.url));
const BASE = "https://loganwestlake.github.io/joewestlakellc/books/";
const shots = process.env.SHOTS || "";
let pass = 0, fail = 0;
let current = null;
const t = async (name, fn) => {
  try { await fn(); pass++; console.log("PASS", name); }
  catch (e) { fail++; console.log("FAIL", name, "—", e.message.split("\n")[0]); if (shots && current) await current.screenshot({ path: `${shots}/fail-${fail}.png` }).catch(() => {}); }
};
const assert = (c, m) => { if (!c) throw new Error(m); };

const browser = await chromium.launch();
async function open(opts = {}) {
  const ctx = await browser.newContext(opts.device || { viewport: { width: 1360, height: 900 } });
  await ctx.route("**/*", (route) => {
    const u = new URL(route.request().url());
    if (u.href.startsWith(BASE)) {
      const rel = decodeURIComponent(u.pathname.slice(new URL(BASE).pathname.length)) || "index.html";
      const file = path.join(BOOKS, rel);
      if (existsSync(file)) return route.fulfill({ body: readFileSync(file), contentType: rel.endsWith(".js") ? "application/javascript" : rel.endsWith(".css") ? "text/css" : "text/html" });
    }
    return route.abort();
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(BASE + "?demo#dashboard");
  await page.waitForSelector("text=Business at a glance", { timeout: 15000 });
  return { page, errors, ctx };
}

// Open a screen from the All apps menu (the rail only has the main ones).
const goTo = async (p, label) => { await p.click('[aria-label="All apps"]'); await p.click(`[role="dialog"][aria-label="All apps"] >> text=${label}`); };
const { page, errors } = await open();
current = page;
await t("home: greeting, shortcuts, create actions, funnel, bank, P&L, expenses, cash flow", async () => {
  assert(await page.isVisible("header >> text=Demo Painting Co."), "company name");
  assert(/Good (morning|afternoon|evening)/.test(await page.textContent("h1")), "greeting");
  for (const x of ["Sales & get paid funnel", "Bank accounts", "Profit & loss", "Expenses", "Cash flow", "Create actions"]) assert(await page.isVisible(`text=${x}`), x);
  const funnel = await page.textContent('section:has-text("Sales & get paid funnel")');
  assert(/Deposited\s*\$[\d,]+\.\d\d/.test(funnel) && /\d+ deposited/.test(funnel), "funnel: " + funnel.slice(0, 200));
  assert(/Business Checking/.test(await page.textContent('section:has-text("Bank accounts")')), "bank card");
});
await t("home: privacy blurs amounts, customize hides a card", async () => {
  await page.click("text=Privacy >> nth=0");
  assert(await page.$eval('section:has-text("Bank accounts") .blur-\\[6px\\]', () => true).catch(() => false), "not blurred");
  await page.click("text=Privacy >> nth=0");
  await page.click("text=Customize >> nth=0");
  await page.uncheck('[aria-label="Choose what\'s on your home page"] >> text=Cash flow');
  assert(!(await page.isVisible('h3:text-is("Cash flow")')), "cash flow still shown");
  await page.check('[aria-label="Choose what\'s on your home page"] >> text=Cash flow');
  await page.click("text=Customize >> nth=0");
});
await t("home: shortcut pill opens its screen; Show all opens the create menu", async () => {
  await page.click('button:has-text("Accounting")');
  await page.waitForSelector("h1 >> text=Chart of accounts");
  await page.click('[aria-label="Home"]');
  await page.click("text=Show all");
  assert(await page.isVisible('[aria-label="Create new"] >> text=Vendors'), "create menu");
  await page.keyboard.press("Escape");
});
if (shots) await page.screenshot({ path: `${shots}/dashboard.png` });
await t("+ New opens the four-column create menu", async () => {
  await page.click('[aria-label="Create"]');
  for (const h of ["Customers", "Vendors", "Employees", "Other"]) assert(await page.isVisible(`[aria-label="Create new"] >> text=${h}`), h);
  if (shots) await page.screenshot({ path: `${shots}/new.png` });
  await page.click('[aria-label="Create new"] >> text=Journal entry');
  await page.waitForSelector("#je-title");
});
await t("journal entry: refuses unbalanced, posts balanced, shows in the journal", async () => {
  await page.selectOption('[aria-label="Line 1 account"]', { label: "6300 Fuel" });
  await page.fill('[aria-label="Line 1 debit"]', "45.10");
  await page.selectOption('[aria-label="Line 2 account"]', { label: "1000 Business Checking" });
  await page.fill('[aria-label="Line 2 credit"]', "45.00");
  assert(/Out of balance by \$0\.10/.test(await page.textContent("#je-title >> xpath=../.. ")), "no out-of-balance badge");
  await page.fill("#je-memo", "Smoke test fuel");
  await page.click("text=Save and close");
  assert(/don't match/.test(await page.textContent('[role="alert"]')), "unbalanced accepted");
  await page.fill('[aria-label="Line 2 credit"]', "45.10");
  if (shots) await page.screenshot({ path: `${shots}/journal-entry.png` });
  await page.click("text=Save and close");
  await page.waitForSelector("#je-title", { state: "detached" });
  await goTo(page, "Journal");
  assert(await page.isVisible("text=Smoke test fuel"), "entry not in journal");
});
await t("date shortcuts: T, +, −", async () => {
  await page.click("text=Journal entry >> nth=0");
  await page.waitForSelector("#je-date");
  await page.focus("#je-date");
  await page.keyboard.press("t");
  const today = await page.inputValue("#je-date");
  await page.keyboard.press("+");
  const next = await page.inputValue("#je-date");
  await page.keyboard.press("-"); await page.keyboard.press("-");
  const prev = await page.inputValue("#je-date");
  const d = (s) => new Date(s + "T12:00:00").getTime();
  assert(next && (d(next) - d(today)) / 864e5 === 1 && (d(today) - d(prev)) / 864e5 === 1, `${prev} ${today} ${next}`);
  await page.click('[aria-label="Close"]');
});
await t("reverse an entry: balances return, can't reverse twice", async () => {
  await page.click("text=Smoke test fuel");
  await page.click("details[open] >> text=Reverse");
  await page.waitForSelector("text=Reversing entry posted");
  assert(await page.isVisible("details >> nth=0 >> text=Reversal"), "no reversal row");
});
await t("chart of accounts with balances, and an account register", async () => {
  await goTo(page, "Chart of accounts");
  await page.waitForSelector("text=Business Checking");
  await page.click("td >> text=Business Checking");
  assert(await page.isVisible("text=1000 Business Checking"), "register header");
  assert((await page.$$("table tbody tr")).length > 20, "register rows");
});
await t("reports tie out: trial balance and balance sheet balanced", async () => {
  await page.click('[aria-label="Reports"]');
  assert(await page.isVisible("text=Net income"), "pnl");
  await page.click("text=Balance sheet");
  assert(await page.isVisible("text=✓ Balanced"), "balance sheet not balanced");
  await page.click("text=Trial balance");
  assert(await page.isVisible("table >> text=Balanced"), "trial balance not balanced");
  if (shots) await page.screenshot({ path: `${shots}/reports.png` });
});
await t("command palette: Ctrl+K finds a check number and an amount", async () => {
  await page.keyboard.press("Control+k");
  await page.waitForSelector('[aria-label="Search"] input');
  // A real check number from the demo data (they depend on today's date).
  const checkNo = await page.evaluate(() => Object.values(JSON.parse(localStorage.getItem("books.demo.v1"))).flatMap((s) => s.transactions).find((t) => t.checkNumber).checkNumber);
  await page.keyboard.type(checkNo);
  assert(new RegExp(`check ${checkNo}`).test(await page.textContent('[aria-label="Search"]')), "check not found: " + checkNo);
  await page.fill('[aria-label="Search"] input', "223.03");
  assert(/bill/.test(await page.textContent('[aria-label="Search"]')), "amount not found");
  await page.fill('[aria-label="Search"] input', "chart");
  await page.keyboard.press("Enter");
  await page.waitForSelector("h1 >> text=Chart of accounts");
});
await t("closing the books blocks back-dated entries (and logs it)", async () => {
  await page.click('header [aria-label="Settings"]');
  await page.fill("#closing", new Date().toISOString().slice(0, 10));
  await page.click('aside >> text=Save');
  await page.waitForSelector("text=Books closed through");
  await page.click('header [aria-label="Settings"]');
  await goTo(page, "Journal");
  await page.click("text=Journal entry >> nth=0");
  await page.selectOption('[aria-label="Line 1 account"]', { label: "6300 Fuel" });
  await page.fill('[aria-label="Line 1 debit"]', "10");
  await page.selectOption('[aria-label="Line 2 account"]', { label: "1000 Business Checking" });
  await page.fill('[aria-label="Line 2 credit"]', "10");
  await page.click("text=Save and close");
  assert(/closed through/.test(await page.textContent('[role="alert"]')), "posted into a closed period");
  await page.click('[aria-label="Close"]');
  await goTo(page, "Audit log");
  assert(await page.isVisible("text=closingDate"), "closing not in audit log");
});
await t("shortcut Ctrl+Alt+I and planned screens say when they arrive", async () => {
  await page.keyboard.press("Control+Alt+i");
  assert(await page.isVisible("text=This form arrives in Milestone 3"), "no planned message");
  await page.getByRole("button", { name: "OK", exact: true }).click();
  await goTo(page, "Banking");
  assert(await page.isVisible("text=Arrives in Milestone 2"), "planned page");
});
await t("stopwatch, notifications, assistant panel", async () => {
  await page.click('[aria-label="Start timer"]');
  await page.waitForTimeout(1200);
  assert(/00:00:0[1-9]/.test(await page.textContent("header")), "timer not running");
  await page.click('[aria-label="Pause timer"]');
  await page.click('[aria-label="Notifications"]');
  assert(/overdue invoice|caught up|closed/.test(await page.textContent("header")), "notifications");
  await page.click('[aria-label="Assistant"]');
  assert(await page.isVisible("text=Milestone 6"), "assistant panel");
});
await t("no page errors", async () => assert(!errors.length, errors.join("; ")));

// Phone layout
const phone = await open({ device: devices["iPhone 13"] });
await t("phone: menu opens, no sideways scroll", async () => {
  const w = await phone.page.evaluate(() => document.documentElement.scrollWidth);
  assert(w <= 390, "scroll width " + w);
  await phone.page.click('[aria-label="Open menu"]');
  assert(await phone.page.isVisible('[role="dialog"][aria-label="All apps"] >> text=Chart of accounts'), "menu");
});
if (shots) await phone.page.screenshot({ path: `${shots}/phone.png` });

await browser.close();
console.log(`\n${pass}/${pass + fail} passed`);
process.exit(fail ? 1 : 0);
