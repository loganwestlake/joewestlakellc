# Books: architecture, schema and plan

The new accounting app (`app/` → built to `books/`) replaces the single-entry dashboard with a real
double-entry ledger. It's built next to the current dashboard, which keeps running unchanged until the
new app can do everything it does and the records have been brought over.

## 1. Audit of the current setup (Milestone 0)

| Area | Before | After Milestone 1 |
|---|---|---|
| App | One 5,900-line `index.html`, plain JS, Tailwind + Firebase from CDNs, no build | `app/`: Vite + TypeScript + Tailwind, React APIs on Preact, built to `books/`. First load 37 KB gzipped; Firebase (~146 KB) loads only after sign-in |
| Config | No `firebase.json` / `firestore.indexes.json` | Both added; rules deployable with `firebase deploy --only firestore` |
| Data | Flat collections: `jobs, expenses, invoices, income, recurring, vehicles, team, files, fileChunks, settings` | Organization-scoped schema below; the old collections are untouched |
| Accounting | Single-entry lists of money in / out | Double-entry ledger, chart of accounts, journal, trial balance, P&L, balance sheet |
| Access | `members/{uid}` exists = full access | Per-company roles + 123 activity permissions, enforced in rules by area |
| Server | Cloudflare Worker (AI + Plaid). No Cloud Functions, no Storage | **No servers for the books app**: Firebase (Auth + Firestore) and GitHub Pages only |
| Tests | Browser tests kept outside the repo | `npm run check` in `app/`: unit, rules (emulator), browser tests |

## 2. Firestore schema

Everything for a company lives under `organizations/{orgId}`.

| Path | What | Notes |
|---|---|---|
| `organizations/{orgId}` | Company: name, edition, base currency, fiscal year start, **closingDate**, tax IDs, branding, custom fields, exchange rates, `ownerUid` | Only admins can change it; ownership can't be handed off from the app |
| `…/members/{uid}` | `role`, `permissions[]` (activities), `areas[]` (what rules enforce) | Owner adds themselves first; then admins manage people |
| `…/accounts/{accountId}` | Chart of accounts: code, name, type, subType, parentId, currency, isSystem, active | System accounts have fixed ids (`acct_1200` = A/R…) so postings never depend on names. Never deleted: deactivate or merge |
| `…/journalEntries/{entryId}` | **The ledger.** date, memo, sourceType, sourceId, currency, exchangeRate, `lines[]`, `totalDebit`, `totalCredit`, createdBy, reversalOf | **Immutable.** Corrections are reversing entries (fixed id `rev_{entryId}` → reversible once) |
| `…/transactions/{txId}` | Every business document: invoice, estimate, sales order, sales receipt, credit memo, refund, payment, deposit, expense, check, card credit, bill, vendor credit, bill payment, PO, transfer, journal | Never deleted (void instead); locked once its date is in a closed period |
| `…/contacts/{contactId}` | Customers, vendors, employees, contractors, donors, leads (`roles[]`), terms, 1099 flag, W-9 status, last 4 of TIN, price level, pipeline stage | |
| `…/items/{itemId}` | Service, inventory, non-inventory, bundle, assembly; SKU, prices, accounts, qty, reorder point | Lots/serials/bins/BOM/UOM in Milestone 5 |
| `…/auditLogs/{logId}` | who, when, action, collection, doc, summary, field diff | Append-only: no edits, no deletes |
| `…/fixedAssets, bankFeeds, bankRules, reconciliations, projects, timeActivities, employees, payRuns, taxRates, mileage, workflows, classes, locations, budgets, revenueSchedules, priceLevels, recurringTemplates, inventoryLots` | Later milestones | Rules already cover them by area |

### Where this differs from the original outline, and why

- **Journal lines are an array inside the entry, not a `lines` subcollection.** Security rules can
  only look at one document at a time. With the lines inside, the rules add the lines up themselves,
  the entry is written in one atomic step, and nobody can alter it afterwards. With a subcollection, a
  half-written or edited entry could slip through. **Max 30 lines per entry** (see §3).
- **Account balances are computed from the ledger, not stored on the account.** A stored running
  balance updated from the browser can drift if two people post at once. Computing from entries is
  exact. When there's a server (decision 1), it can keep cached balances for speed.
- **One `transactions` collection for all document types** (as outlined), with `type` deciding the posting.

### Mapping the current dashboard into the new books (migration, a later step)

| Current | New |
|---|---|
| `expenses` (vendor, amount, category, deductible, check fields, plaidId) | `transactions` type `expense` or `check` (if a check number) → Dr expense account from the category map in `ledger/accounts.ts`, Cr Business Checking; owner draws → Owner's Draw; `deductible` kept as a field for the tax view |
| `income` | `transactions` type `deposit` → Dr Checking, Cr Uncategorized Income (or matched invoice) |
| `invoices` | `transactions` type `invoice` (+ `payment` and `deposit` when paid) |
| `recurring` | `recurringTemplates` |
| `jobs` | `projects` |
| `team` | `contacts` (roles: contractor / employee / other), W-9 fields carried over |
| `vehicles` | `fixedAssets` |
| `files`, `fileChunks` | stay as they are (or move to Storage, decision 2) |

The migration runs from the app, previews totals first, and posts everything through the ledger, so
the result is balanced by construction. The old collections are left untouched as a backup.

## 3. Keeping the books honest

1. **Ledger engine** (`app/src/ledger`, plain TypeScript, no Firebase): integer cents; every entry
   needs ≥ 2 lines, one side per line, equal debits and credits, known accounts, and a date after the
   closing date. 20 unit tests.
2. **Atomic posting** (`app/src/data/firestore.ts`): a Firestore transaction re-reads the closing
   date, builds and validates the entry, and writes the document, the entry and the audit line
   together, or nothing.
3. **Security rules** (`firestore.rules`, 45 emulator tests): the rules **add up every line
   themselves** and require debits = credits = the stated whole-cent totals, 2–30 lines, `createdBy` =
   you, open period only, entries never edited or deleted, documents never deleted, audit log
   append-only, writes only in your areas.

So **the database itself guarantees every journal entry balances**, with no server. The rules language
has no loops, so the rules add the lines up one at a time, and Firestore allows 1,000 expressions per
request. That works out to a **30-line cap** per entry (the engine merges lines on the same account, so
real entries are far smaller). Per-line tidiness (whole cents on each line, one side per line) is
enforced by the app's ledger engine. Adding it to the rules too would cut the cap to about 9 lines.
It doesn't affect whether entries balance.

## 4. Roles and permissions

`app/src/data/permissions.ts`: five roles (Company admin, Standard user, Accountant, Reports only,
Time tracking only) over **123 activity permissions** in 11 areas (sales, purchases, banking, ledger,
inventory, projects, time, payroll, taxes, reports, settings). The app checks activities; the rules
check areas.

## 5. Decisions (made)

1. **No servers.** Firebase (Auth + Firestore) and GitHub Pages only: no Cloud Functions, no Blaze plan,
   nothing new on Cloudflare. Integrity is enforced by the security rules (§3). Things that would
   normally run on a schedule (recurring invoices, monthly depreciation) run when someone opens the app:
   "3 recurring invoices are due, post them?" PDFs are generated in the browser.
2. **Files stay in Firestore**, stored in pieces like the dashboard does today (10 MB per file), not
   Firebase Storage (which needs Blaze).
3. **Payroll** calculates gross-to-net and posts balanced entries. Tax filing and paying the government
   go through a payroll provider.
4. **Semi-lightweight.** Preact instead of React, Firebase loaded only after sign-in, no extra UI or
   chart libraries.

## 6. Milestones

| # | Scope | Status |
|---|---|---|
| 1 | Audit, branch, schema, rules, ledger engine, demo seed, app shell, + New, command palette, journal entries, core reports, audit log, closing the books | **Done**, live at /books |
| 2 | Chart of accounts editing/merging, multi-currency, fixed assets & depreciation, bank feeds + rules (CSV/OFX/QFX + the Truist connection), reconciliation | Next |
| 3 | Sales & A/R: customers/leads, estimates with e-signature, progress invoicing, sales orders, invoices, batch/recurring, payments, undeposited funds, deposits, collections | |
| 4 | Expenses & A/P: vendors, 1099s, expenses, receipt capture, bills, pay bills, POs with approvals, print checks, batch reclassify | |
| 5 | Inventory (locations, lots/serials, FIFO, assemblies, landed cost, price rules), projects & job costing, time & approvals, payroll, sales tax/Schedule C, mileage | |
| 6 | Report center, cash-flow planner, edition modules, permissions UI, backup/restore, assistant | |

Each milestone is a set of reviewed commits on `feat/quickbooks-enterprise-1to1`, with the same three
kinds of tests.

## 7. Running it

```bash
cd app
npm install
npm run dev          # local app; add ?demo to the URL for the demo company
npm run check        # typecheck + unit tests + build + browser tests
npm run test:rules   # security rules against the Firestore emulator (needs Java)
```

**To use it on the real Firebase project:** publish `firestore.rules` (Firebase console → Firestore →
Rules, or `firebase deploy --only firestore:rules`), then merge this branch. GitHub Pages serves the app
at `https://loganwestlake.github.io/joewestlakellc/books/`. The current dashboard stays at the same address
as today.
