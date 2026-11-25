// Chart of accounts: types, which side increases them, and a starting chart for a painting contractor.

export type AccountType =
  | "Bank" | "AccountsReceivable" | "OtherCurrentAsset" | "FixedAsset" | "OtherAsset"
  | "AccountsPayable" | "CreditCard" | "OtherCurrentLiability" | "LongTermLiability"
  | "Equity"
  | "Income" | "OtherIncome"
  | "CostOfGoodsSold" | "Expense" | "OtherExpense";

export type AccountClass = "asset" | "liability" | "equity" | "income" | "expense";

export const ACCOUNT_CLASS: Record<AccountType, AccountClass> = {
  Bank: "asset", AccountsReceivable: "asset", OtherCurrentAsset: "asset", FixedAsset: "asset", OtherAsset: "asset",
  AccountsPayable: "liability", CreditCard: "liability", OtherCurrentLiability: "liability", LongTermLiability: "liability",
  Equity: "equity",
  Income: "income", OtherIncome: "income",
  CostOfGoodsSold: "expense", Expense: "expense", OtherExpense: "expense"
};

export const ACCOUNT_TYPE_LABEL: Record<AccountType, string> = {
  Bank: "Bank", AccountsReceivable: "Accounts receivable (A/R)", OtherCurrentAsset: "Other current assets", FixedAsset: "Fixed assets", OtherAsset: "Other assets",
  AccountsPayable: "Accounts payable (A/P)", CreditCard: "Credit card", OtherCurrentLiability: "Other current liabilities", LongTermLiability: "Long-term liabilities",
  Equity: "Equity", Income: "Income", OtherIncome: "Other income", CostOfGoodsSold: "Cost of goods sold", Expense: "Expenses", OtherExpense: "Other expense"
};

/** Assets and expenses grow with debits; liabilities, equity and income grow with credits. */
export const normalSide = (type: AccountType): "debit" | "credit" =>
  ACCOUNT_CLASS[type] === "asset" || ACCOUNT_CLASS[type] === "expense" ? "debit" : "credit";

export interface Account {
  id: string;
  code: string;
  name: string;
  type: AccountType;
  subType?: string;
  parentId?: string | null;
  currency: string;
  isSystem?: boolean;
  active: boolean;
  description?: string;
}

/** Accounts the posting engine relies on. Their ids are fixed so postings never depend on names. */
export const SYSTEM = {
  checking: "acct_1000",
  undeposited: "acct_1100",
  ar: "acct_1200",
  inventory: "acct_1300",
  accumDep: "acct_1590",
  ap: "acct_2000",
  card: "acct_2100",
  salesTax: "acct_2200",
  payrollLiab: "acct_2300",
  deferredRev: "acct_2400",
  ownerEquity: "acct_3000",
  ownerDraw: "acct_3100",
  retained: "acct_3900",
  serviceIncome: "acct_4000",
  discounts: "acct_4900",
  uncategorizedIncome: "acct_4990",
  cogs: "acct_5000",
  materials: "acct_5100",
  contractLabor: "acct_5200",
  depreciation: "acct_6950",
  uncategorizedExpense: "acct_6990"
} as const;

type Seed = [code: string, name: string, type: AccountType, subType?: string, system?: boolean];

const DEFAULT_ACCOUNTS: Seed[] = [
  ["1000", "Business Checking", "Bank", "Checking", true],
  ["1100", "Undeposited Funds", "OtherCurrentAsset", "UndepositedFunds", true],
  ["1200", "Accounts Receivable", "AccountsReceivable", "AccountsReceivable", true],
  ["1300", "Inventory Asset", "OtherCurrentAsset", "Inventory", true],
  ["1500", "Vehicles", "FixedAsset", "Vehicles"],
  ["1510", "Equipment & Ladders", "FixedAsset", "MachineryAndEquipment"],
  ["1590", "Accumulated Depreciation", "FixedAsset", "AccumulatedDepreciation", true],
  ["2000", "Accounts Payable", "AccountsPayable", "AccountsPayable", true],
  ["2100", "Business Credit Card", "CreditCard", "CreditCard", true],
  ["2200", "Sales Tax Payable", "OtherCurrentLiability", "SalesTaxPayable", true],
  ["2300", "Payroll Liabilities", "OtherCurrentLiability", "PayrollTaxPayable", true],
  ["2400", "Deferred Revenue", "OtherCurrentLiability", "DeferredRevenue", true],
  ["3000", "Owner's Equity", "Equity", "OwnersEquity", true],
  ["3100", "Owner's Draw", "Equity", "OwnerDraws", true],
  ["3900", "Retained Earnings", "Equity", "RetainedEarnings", true],
  ["4000", "Painting Services", "Income", "ServiceFeeIncome", true],
  ["4100", "Materials Billed", "Income", "SalesOfProductIncome"],
  ["4900", "Discounts Given", "Income", "DiscountsRefundsGiven", true],
  ["4990", "Uncategorized Income", "Income", "OtherPrimaryIncome", true],
  ["5000", "Cost of Goods Sold", "CostOfGoodsSold", "SuppliesMaterialsCogs", true],
  ["5100", "Job Materials (paint & supplies)", "CostOfGoodsSold", "SuppliesMaterialsCogs", true],
  ["5200", "Contract Labor", "CostOfGoodsSold", "CostOfLaborCos", true],
  ["6000", "Advertising & Marketing", "Expense", "AdvertisingPromotional"],
  ["6100", "Bank Fees", "Expense", "BankCharges"],
  ["6200", "Insurance", "Expense", "Insurance"],
  ["6300", "Fuel", "Expense", "Auto"],
  ["6310", "Vehicle Repairs & Maintenance", "Expense", "Auto"],
  ["6320", "Tolls & Parking", "Expense", "Auto"],
  ["6400", "Meals", "Expense", "EntertainmentMeals"],
  ["6500", "Software & Subscriptions", "Expense", "OfficeGeneralAdministrativeExpenses"],
  ["6510", "Small Tools & Equipment", "Expense", "SuppliesMaterials"],
  ["6600", "Rent", "Expense", "RentOrLeaseOfBuildings"],
  ["6700", "Utilities & Phone", "Expense", "Utilities"],
  ["6800", "Wages", "Expense", "PayrollExpenses"],
  ["6810", "Payroll Taxes", "Expense", "PayrollExpenses"],
  ["6900", "Taxes & Licenses", "Expense", "TaxesPaid"],
  ["6950", "Depreciation Expense", "Expense", "Depreciation", true],
  ["6990", "Uncategorized Expense", "Expense", "OtherMiscellaneousServiceCost", true],
  ["7000", "Interest Earned", "OtherIncome", "InterestEarned"],
  ["8000", "Interest Paid", "OtherExpense", "OtherMiscellaneousExpense"]
];

export function defaultChartOfAccounts(currency = "USD"): Account[] {
  return DEFAULT_ACCOUNTS.map(([code, name, type, subType, system]) => ({
    id: `acct_${code}`, code, name, type, subType, parentId: null, currency, isSystem: !!system, active: true
  }));
}

/** Where the current dashboard's spending categories land in the new chart of accounts (for the migration). */
export const LEGACY_CATEGORY_ACCOUNT: Record<string, string> = {
  paint: SYSTEM.materials, supplies: SYSTEM.materials, tools: "acct_6510", gas: "acct_6300", vehicle: "acct_6310",
  insurance: "acct_6200", credit_card: SYSTEM.card, rent: "acct_6600", utilities: "acct_6700", subscription: "acct_6500",
  labor: SYSTEM.contractLabor, owner_draw: SYSTEM.ownerDraw, other: SYSTEM.uncategorizedExpense
};
