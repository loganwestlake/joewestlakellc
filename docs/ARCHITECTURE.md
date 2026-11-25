# Books: architecture, schema and plan

The new accounting app (`app/` → built to `books/`) replaces the single-entry dashboard with a real
double-entry ledger. It's built next to the current dashboard, which keeps running unchanged until the
new app can do everything it does and the records have been brought over.

## 1. Audit of the current setup (Milestone 0)

| Area | Before | After Milestone 1 |
|---|---|---|
| App | One 5,900-line `index.html`, plain JS, Tailwind + Firebase from CDNs, no build | `app/`: Vite + React 18 + TypeScript + Tailwind, built to `books/` |
| Config | No `firebase.json` / `firestore.indexes.json` | Both added; rules deployable with `firebase deploy --only firestore` |
| Data | Flat collections: `jobs, expenses, invoices, income, recurring, vehicles, team, files, fileChunks, settings` | Organization-scoped schema below; the old collections are untouched |
| Accounting | Single-entry lists of money in / out | Double-entry ledger, chart of accounts, journal, trial balance, P&L, balance sheet |
| Access | `members/{uid}` exists = full access | Per-company roles + 123 activity permissions, enforced in rules by area |
| Server | Cloudflare Worker (AI + Plaid). No Cloud Functions, no Storage | Same for now; see decision 1 |
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
  only look at one document at a time. With the lines inside, the rules check the totals, the entry is
  written in one atomic step, and nobody can alter it afterwards. With a subcollection, a half-written
  or edited entry could slip through. (Max 500 lines per entry.)
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
3. **Security rules** (`firestore.rules`, 41 emulator tests): balanced whole-cent totals, 2–500 lines,
   `createdBy` = you, open period only, entries never edited or deleted, documents never deleted,
   audit log append-only, writes only in your areas.

**Known gap:** rules can check the totals but can't add up the lines themselves (the rules language
has no loops). A tampered client could write lines that don't sum to the stated totals. Closing that
gap needs a trusted server to do the posting (decision 1). Until then the risk is limited to people
you've approved.

## 4. Roles and permissions

`app/src/data/permissions.ts`: five roles (Company admin, Standard user, Accountant, Reports only,
Time tracking only) over **123 activity permissions** in 11 areas (sales, purchases, banking, ledger,
inventory, projects, time, payroll, taxes, reports, settings). The app checks activities; the rules
check areas.

## 5. Decisions only you can make

1. **Server for posting and scheduled jobs** (recurring invoices, depreciation, PDF generation, the
   "known gap" above).
   - *Firebase Cloud Functions* (what you asked for) requires the **Blaze (pay-as-you-go) plan**. A
     small business usually stays inside the free allowance, but a card is required.
   - *Alternative:* reuse your **Cloudflare Worker** with a Firebase service-account key as a secret.
     It's free and already deployed, but it's one more thing living outside Firebase.
2. **File storage.** Firebase Storage on new projects also requires Blaze. Without it, receipts and
   attachments keep using the Firestore pieces the dashboard uses today (10 MB per file).
3. **Payroll.** The pay-run calculator can compute gross-to-net and post balanced entries, but real
   withholding tables, filings and deposits should go through a payroll provider. The plan is to
   calculate and record, and leave filing and paying the government to the provider.

## 6. Milestones

| # | Scope | Status |
|---|---|---|
| 1 | Audit, branch, schema, rules, ledger engine, demo seed, app shell, + New, command palette, journal entries, core reports, audit log, closing the books | **Done** |
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
