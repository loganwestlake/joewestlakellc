// Roles and permissions. The app checks fine-grained activities; the Firestore rules check the coarser "areas"
// (rules can't evaluate 100+ strings cheaply), so every activity belongs to exactly one area.
import type { Role } from "./types";

export const AREAS = {
  sales: "Customers, estimates, invoices, payments",
  purchases: "Vendors, bills, expenses, checks, purchase orders",
  banking: "Bank feeds, rules, reconciliation, transfers",
  ledger: "Chart of accounts, journal entries",
  inventory: "Products, services, stock",
  projects: "Projects and job costing",
  time: "Time tracking",
  payroll: "Payroll and employees",
  taxes: "Sales tax, mileage",
  reports: "Reports",
  settings: "Company settings, users, closing the books"
} as const;
export type Area = keyof typeof AREAS;

const ACT = (area: Area, ...acts: string[]) => acts.map((a) => `${area}.${a}`);

/** Every activity the app can allow or deny. */
export const ACTIVITIES: string[] = [
  ...ACT("sales", "customers.view", "customers.edit", "customers.delete", "leads.edit", "estimates.view", "estimates.edit", "estimates.convert",
    "salesOrders.view", "salesOrders.edit", "salesOrders.fulfill", "invoices.view", "invoices.edit", "invoices.send", "invoices.void", "invoices.batch",
    "recurring.edit", "salesReceipts.edit", "creditMemos.edit", "refunds.edit", "payments.receive", "deposits.edit", "statements.send", "collections.view", "priceLevels.edit"),
  ...ACT("purchases", "vendors.view", "vendors.edit", "vendors.delete", "expenses.view", "expenses.edit", "expenses.void", "checks.edit", "checks.print",
    "bills.view", "bills.edit", "bills.pay", "bills.approve", "vendorCredits.edit", "purchaseOrders.edit", "purchaseOrders.approve", "receipts.upload", "reclassify", "contractors.1099"),
  ...ACT("banking", "feeds.view", "feeds.categorize", "feeds.exclude", "rules.edit", "connections.manage", "reconcile", "reconcile.undo", "transfers.edit"),
  ...ACT("ledger", "accounts.view", "accounts.edit", "accounts.merge", "journal.view", "journal.edit", "journal.reverse", "classes.edit", "locations.edit",
    "currencies.edit", "fixedAssets.edit", "depreciation.run", "revenueRecognition.edit", "budgets.edit", "import", "export"),
  ...ACT("inventory", "items.view", "items.edit", "items.delete", "adjust", "assemblies.build", "transfers.edit", "landedCost.edit", "priceRules.edit"),
  ...ACT("projects", "view", "edit", "changeOrders.edit", "budgets.edit"),
  ...ACT("time", "own.edit", "all.view", "all.edit", "approve", "billable.invoice"),
  ...ACT("payroll", "employees.view", "employees.edit", "run", "approve", "taxes.file", "stubs.view.own", "stubs.view.all"),
  ...ACT("taxes", "rates.edit", "returns.file", "mileage.edit", "estimates.view"),
  ...ACT("reports", "view.all", "view.financial", "view.sales", "view.payroll", "customize", "schedule", "export", "auditLog.view"),
  ...ACT("settings", "company.edit", "users.manage", "closeBooks", "closeBooks.override", "edition.switch", "integrations.manage", "backup", "restore", "workflows.edit")
];

const all = (area: Area) => ACTIVITIES.filter((a) => a.startsWith(`${area}.`));
const viewsOnly = (area: Area) => all(area).filter((a) => /view/.test(a));

export const ROLE_LABEL: Record<Role, string> = {
  admin: "Company admin", standard: "Standard user", accountant: "Accountant", reportsOnly: "Reports only", timeOnly: "Time tracking only"
};

export const ROLE_PERMISSIONS: Record<Role, string[]> = {
  admin: [...ACTIVITIES],
  standard: [...all("sales"), ...all("purchases"), ...all("banking"), ...viewsOnly("ledger"), ...all("inventory"), ...all("projects"), ...all("time"), ...all("taxes"),
    "reports.view.sales", "reports.export"].filter((a) => !["banking.reconcile.undo", "purchases.bills.approve", "purchases.purchaseOrders.approve"].includes(a)),
  accountant: ACTIVITIES.filter((a) => !["settings.users.manage", "settings.edition.switch", "settings.restore", "payroll.run"].includes(a)),
  reportsOnly: [...all("reports").filter((a) => a !== "reports.auditLog.view"), ...ACTIVITIES.filter((a) => a.endsWith(".view"))],
  timeOnly: ["time.own.edit"]
};

/** Areas a set of permissions can write to (what the security rules enforce). */
export function areasFor(permissions: string[]): string[] {
  const writes = permissions.filter((p) => !/\.view|view\./.test(p));
  return [...new Set(writes.map((p) => p.split(".")[0]))];
}

export const can = (permissions: string[] | undefined, activity: string) => !!permissions?.includes(activity);
