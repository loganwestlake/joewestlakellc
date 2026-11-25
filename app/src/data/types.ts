// Firestore document shapes for the organization-scoped schema (see docs/ARCHITECTURE.md).
import type { Cents } from "../ledger";

export type Edition = "general" | "contractor" | "manufacturing" | "nonprofit" | "services" | "retail" | "accountant";

export interface Organization {
  id: string;
  name: string;
  legalName?: string;
  edition: Edition;
  baseCurrency: string;
  fiscalYearStartMonth: number;    // 1 = January
  closingDate?: string | null;     // books locked on and before this date
  taxIds?: { ein?: string; stateId?: string };
  address?: string;
  logoFileId?: string | null;
  ownerUid: string;
  isDemo?: boolean;
  customFields?: { key: string; label: string; appliesTo: string[] }[];
  exchangeRates?: Record<string, number>;
  createdAt?: string;
}

export type Role = "admin" | "standard" | "accountant" | "reportsOnly" | "timeOnly";

export interface Member {
  uid: string;
  email: string;
  role: Role;
  /** Coarse areas the security rules check (derived from role + any custom permissions). */
  areas: string[];
  /** Fine-grained activity permissions the app checks. */
  permissions: string[];
}

export type ContactRole = "customer" | "vendor" | "employee" | "contractor" | "donor" | "lead";

export interface Contact {
  id: string;
  displayName: string;
  roles: ContactRole[];
  company?: string;
  email?: string;
  phone?: string;
  address?: string;
  terms?: "due_on_receipt" | "net15" | "net30" | "net60";
  is1099?: boolean;
  w9OnFile?: boolean;
  tinLast4?: string;
  currency?: string;
  priceLevelId?: string;
  pipelineStage?: "new" | "contacted" | "estimate_sent" | "won" | "lost";
  notes?: string;
  active: boolean;
}

export type ItemType = "service" | "inventory" | "nonInventory" | "bundle" | "assembly";

export interface Item {
  id: string;
  name: string;
  type: ItemType;
  sku?: string;
  description?: string;
  salesPrice?: Cents;
  cost?: Cents;
  incomeAccountId?: string;
  expenseAccountId?: string;
  taxable?: boolean;
  qtyOnHand?: number;
  reorderPoint?: number;
  active: boolean;
}

export interface AuditLog {
  id: string;
  at: string;
  uid: string;
  email?: string;
  action: "create" | "update" | "void" | "reverse" | "delete" | "close_books" | "settings";
  collection: string;
  docId: string;
  summary: string;
  diff?: Record<string, { from: unknown; to: unknown }>;
}
