export type SolutionArea = {
  id: string;
  tabLabel: string;
  title: string;
  problem: string;
  whatItDoes: string;
  whatChanges: string;
  evidence: string;
  technical: { heading?: string; points: string[] }[];
};

export const proofBanner = {
  headline: "70 / 70 regression tests passed across all 8 automation workflows",
  date: "August 16, 2026",
  detail:
    "Verified via live webhooks, real Gmail/Telegram triggers, and direct Supabase state checks — not just workflow execution status.",
};

export const systemOverview = {
  paragraph1:
    "Idol Fairies is a working K-pop merch e-commerce system, built end-to-end as a portfolio demonstration: a real storefront, real backend automation, and real reporting — running on synthetic order data so the mechanics can be shown safely without exposing a live business.",
  paragraph2:
    "Two kinds of orders enter the same system: a shopper checking out on the storefront, and a reseller placing a wholesale order. From that point on, both flows share the same pipeline — sales records, inventory, receivables, dashboards, and the AI assistant all work off the same data, not separate systems bolted together.",
};

export const solutionAreas: SolutionArea[] = [
  {
    id: "storefront",
    tabLabel: "Storefront & Ordering",
    title: "Storefront & Ordering",
    problem:
      "A K-pop merch store needs an online storefront where customers can browse, check stock accurately, and check out — without the owner manually tracking what's sold out.",
    whatItDoes:
      "A public storefront (shop, category pages, product pages, cart, checkout) shows only two real states — Available or Sold Out — pulled from the same inventory data the rest of the system uses, so there's no separate 'website copy' of stock that can drift out of sync.",
    whatChanges:
      "No manual product/stock updates on a second system; what's shown to shoppers is always the same number used internally.",
    evidence:
      "Built on Next.js 16 / React 19. Checkout hands off directly into the same order pipeline verified in the regression suite.",
    technical: [
      {
        points: [
          "Next.js 16 App Router, TypeScript, Tailwind CSS 4",
          "Routes: /shop, /albums, /light-sticks, /photobooks, /new-releases, /products/[slug], /cart, /checkout, /checkout/confirmation, /search, /sold-out",
          "Stock/availability derived from the same products / inventory tables used by the admin dashboard and Metabase reporting — single source of truth, no duplicate catalog",
          "Checkout submits to /api/checkout, which hands off into 01_SALES_B2C_V1",
        ],
      },
    ],
  },
  {
    id: "sales",
    tabLabel: "Sales & Order Processing",
    title: "Sales & Order Processing",
    problem:
      "Orders arriving through different channels (storefront, wholesale) need to become consistent sales records without manual re-entry.",
    whatItDoes:
      "Two n8n workflows normalize both order types into the same sales_orders / sales_order_items tables, matching SKUs against the product catalog, and flagging anything that can't be matched instead of guessing or silently dropping it.",
    whatChanges:
      "An order becomes a verified, queryable sales record automatically — with duplicate protection (resending the same order number is rejected, not double-counted) and a 'needs review' state for unmatched items instead of silent data loss.",
    evidence:
      "01_SALES_B2C_V1 and 02_SALES_WHOLESALE_AR_V1 each passed their full regression suite (5/5) against a live webhook and real Supabase state, including duplicate and unmatched-SKU cases.",
    technical: [
      {
        points: [
          "Workflows: 01_SALES_B2C_V1.json, 02_SALES_WHOLESALE_AR_V1.json",
          "Webhook-triggered; validates payload, matches SKUs against products, upserts customers, writes sales_orders / sales_order_items",
          "Unique constraint on order number enforces idempotency at the database level, not just app logic",
          "Unmatched SKUs set status='needs_review' with the reason recorded in notes — visible in the admin Needs Review screen",
          "Regression coverage: happy path, duplicate/idempotency, unmatched SKU (partial and total), multi-item, customer dedup",
        ],
      },
    ],
  },
  {
    id: "wholesale",
    tabLabel: "Wholesale / Reseller & AR",
    title: "Wholesale, Resellers & Receivables (AR)",
    problem:
      "Reseller orders are B2B — invoiced, not paid on the spot — so the business needs to track who owes what, and for how long.",
    whatItDoes:
      "Wholesale orders automatically create an Accounts Receivable record; reseller payments (recorded through Gmail-triggered intake) reduce the balance; a scheduled reminder checks for overdue balances and emails resellers automatically, with duplicate-reminder protection.",
    whatChanges:
      "The owner doesn't have to manually track reseller balances in a spreadsheet or remember to chase overdue payments — the system surfaces aging automatically and sends the first-line reminder itself.",
    evidence:
      "02_SALES_WHOLESALE_AR_V1 (5/5) and 03_AR_PAYMENT_REMINDER_V1 (5/5) passed regression, including a real duplicate-reminder suppression test.",
    technical: [
      {
        points: [
          "Workflows: 02_SALES_WHOLESALE_AR_V1.json, 03_AR_PAYMENT_REMINDER_V1.json",
          "accounts_receivable balance is derived from the actual sum of completed customer_payments each time, not incremented in place — self-correcting if a payment is later adjusted",
          "Aging buckets (current / 1–30 / 31–60 / 61–90 / 90+ days) computed in the reporting layer",
        ],
      },
      {
        heading: "Defect found during testing",
        points: [
          "The ported payment logic referenced a payments table that didn't exist on the live schema (actual table is customer_payments) — caught in regression testing, fixed across 4 nodes, re-verified before sign-off",
        ],
      },
    ],
  },
  {
    id: "refunds",
    tabLabel: "Refunds",
    title: "Refunds & Returns",
    problem:
      "Refunds affect more than a bank transaction — they can involve restocking inventory and adjusting what a reseller owes, and need a tracked reason for later analysis.",
    whatItDoes:
      "A refund webhook records the refund, updates inventory when items are restocked (vs. written off as damaged), and keeps refunds fully separate and auditable against gross sales for a refund-rate view.",
    whatChanges:
      "A refund is a single tracked action instead of a manual multi-step correction across inventory, sales, and reseller balance.",
    evidence:
      "07_REFUND_V1 passed 5/5 regression, tested through the live Admin Dashboard refund submission flow, not just the raw webhook.",
    technical: [
      {
        points: [
          "Workflow: 07_REFUND_V1.json",
          "Restock decision recorded per line item (refund_items.restock) — never inferred or assumed",
          "Refund amount vs. gross sales calculated as a refund-rate KPI on the Business Dashboard",
        ],
      },
    ],
  },
  {
    id: "assistant",
    tabLabel: "AI Customer Assistant",
    title: "AI Customer Assistant (Idol AI)",
    problem:
      "Customers ask product and policy questions (stock, price, shipping, returns) that would otherwise need a person answering the same questions repeatedly.",
    whatItDoes:
      "A RAG-based chatbot answers using two tools — one that searches the live product catalog, one that searches store policy — explicitly instructed to never answer from memory or guess. If it doesn't have a real answer, it says so instead of inventing one.",
    whatChanges:
      "Customers get accurate, real-time answers (stock status, pricing) instead of static FAQ text that can go stale, with no risk of the bot promising something that isn't true.",
    evidence:
      "Every product/policy fact the assistant states is traceable to a tool call result — verifiable directly by asking it something outside the catalog and confirming it declines rather than fabricates.",
    technical: [
      {
        points: [
          "Powered by Google Gemini (@google/genai) with function calling — two tools: search_products, search_policy",
          "Custom RAG pipeline (lib/rag/chunk.ts, embed.ts, retrieve.ts) over store policy/FAQ content",
          "Explicit routing rules in the system prompt prevent hallucination: mixed questions call both tools; a failed policy lookup is reported as unavailable rather than retried indefinitely or guessed",
        ],
      },
    ],
  },
  {
    id: "admin",
    tabLabel: "Admin Operations",
    title: "Admin Operations Dashboard",
    problem:
      "Staff running the store day-to-day need a working view of orders, customers, resellers, inventory, and refunds — without being shown owner-level financial KPIs they don't need to do their job.",
    whatItDoes:
      "A password-protected dashboard scoped specifically to operational tasks: Overview, Orders (list + detail), Customers, Resellers, Wholesale Inquiries, Inventory, Refunds, and a Needs Review queue for anything the automation couldn't resolve automatically.",
    whatChanges:
      "Staff have one place to work from, deliberately kept separate from the finance/owner reporting layer — an intentional design decision, not a missing feature.",
    evidence:
      "Session-based auth with middleware route protection; verified end-to-end through the full demo flow including auth gating.",
    technical: [
      {
        points: [
          "Next.js middleware (middleware.ts) gates all /admin/* and /api/admin/* routes, redirecting unauthenticated requests to /admin/login (API routes return 401 instead of a redirect)",
          "Data layer in lib/admin/queries.ts — one purpose-built query per screen (listOrders, getOrderDetail, listCustomers, listResellers, listInventory, listRefunds, getNeedsReview, getOverviewStats), not a generic table browser",
          "Needs Review surfaces sales_orders.status = 'needs_review' rows with the specific unmatched-SKU reason attached",
        ],
      },
    ],
  },
  {
    id: "reporting",
    tabLabel: "Management Reporting",
    title: "Owner / Management Reporting (Metabase)",
    problem:
      "An owner needs to see business performance — revenue, margin, receivables/payables aging, inventory value — separately from day-to-day operations, without digging through raw tables.",
    whatItDoes:
      "Two Metabase dashboards: a Business Dashboard (Gross Revenue, Net Sales, Gross Profit, Net Profit, Gross Margin %, AR/AP Aging, Sales trend, Expenses by category, Inventory valuation) and a Sales/Wholesale/Refunds dashboard with a working date-range filter for period-specific analysis.",
    whatChanges:
      "The owner gets a management view built for decisions (aging, margin, valuation) — deliberately separate from the admin dashboard, so the demo shows the difference between running the store and reviewing the business.",
    evidence:
      "All report SQL independently verified against live Supabase data before being wired into Metabase; the date-range filter was tested to confirm it actually changes results, not just cosmetically present.",
    technical: [
      {
        points: [
          "AR/AP Aging use standard bucket logic (current, 1–30, 31–60, 61–90, 90+ days overdue), computed with GREATEST(CURRENT_DATE - due_date, 0)",
          "Inventory Valuation uses weighted-average cost, maintained by a database trigger (011_weighted_avg_cost_trigger.sql) — the number shown always reflects real historical purchase cost, not a placeholder",
          "Native SQL questions, presentation-only column cleanup (technical IDs hidden, human-friendly labels), Field Filter variables wired to sales_orders.created_at / refunds.created_at for the date filter",
        ],
      },
    ],
  },
  {
    id: "finance",
    tabLabel: "Finance Automation",
    title: "Finance Automation — Purchases, Payables & Expenses",
    problem:
      "Supplier invoices and day-to-day expenses arrive through different channels — supplier emails, receipts, Telegram messages — and need to become tracked records without manual bookkeeping, but shouldn't be trusted blindly since email content can be wrong or incomplete.",
    whatItDoes:
      "A Gmail-triggered workflow reads supplier emails and stages the purchase as a pending_review draft that only becomes an actual purchase + payable record after the owner confirms it. A separate combined Gmail + Telegram intake classifies and records operating expenses automatically (for example, a Canva subscription receipt is recognized and categorized without manual tagging).",
    whatChanges:
      "Supplier purchases are captured from the inbox automatically, but the business keeps a human checkpoint before anything hits the books. Expense capture doesn't depend on remembering to log something — it happens from wherever the receipt or note originally landed.",
    evidence:
      "04_INVENTORY_PURCHASE_AP_V1 (5/5) and 05_AP_PAYMENT_REMINDER_V1 (6/6) passed regression. 06_EXPENSE_V1 passed 13/13 regression tests across both intake paths, including the Gmail auto-classification logic shared with 00_GMAIL_AUTO_LABELER_V1.",
    technical: [
      {
        heading: "Purchases & Payables (AP)",
        points: [
          "Workflows: 04_INVENTORY_PURCHASE_AP_V1.json, 05_AP_PAYMENT_REMINDER_V1.json",
          "Merchandise purchases (purchases table, restricted to the 4 approved inventory suppliers by a database trigger) are kept structurally separate from operating expenses (expenses table) — can't be confused with each other by design, not just convention",
          "accounts_payable aging mirrors the AR aging logic",
          "Draft/confirm pattern avoids acting on unverified email content",
        ],
      },
      {
        heading: "Operating Expenses",
        points: [
          "Workflows: 06_EXPENSE_V1.json, 00_GMAIL_AUTO_LABELER_V1.json",
          "Gmail classification (expense / supplier / ignore) applies labels and routes messages so downstream workflows only see relevant emails",
          "Expenses reported by account code / account name for the owner-reporting layer",
        ],
      },
    ],
  },
];
