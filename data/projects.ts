export type ProjectVisual =
  | { type: "image"; src: string; label: string; aspect?: "wide" | "standard" | "portrait" }
  | { type: "placeholder"; label: string };

export type ProjectTestRow = {
  area: string;
  whatWeVerify: string;
  result: string;
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  /** e.g. "2 workflows: Income + Expense" — omit for single-workflow projects */
  workflowCountLabel?: string;
  tools: string[];
  /** Short overview shown on the preview card */
  overview: string;
  /** Longer overview shown in the detail page header */
  headerOverview: string;
  problem: string;
  solution: string;
  result: string;
  bestFor: string[];
  /** Ordered step labels for the collapsed workflow-details flow */
  workflowFlow: string[];
  previewVisual: ProjectVisual;
  previewVisualNote: string;
  demo:
    | { available: true; posterSrc?: string; videoSrc: string }
    | { available: false; note: string };
  viewProjectHref: string;
  howItWorks: {
    shared: string[];
  };
  screenshots: ProjectVisual[];
  testing: ProjectTestRow[];
  testingSummary: string;
  logoSrc?: string;
  liveSiteHref?: string;
  githubHref?: string;
  screenshotsHeading?: string;
  screenshotsDescription?: string;
  ctaTitle?: string;
  ctaDescription?: string;
};

export const projects: Project[] = [
  {
    slug: "personal-income-expense",
    category: "Finance Automation",
    title: "Personal Income & Expense Automation",
    workflowCountLabel: "2 workflows: Income + Expense",
    tools: ["n8n", "Gemini", "Gmail", "Google Sheets", "Google Drive"],
    overview:
      "Two sibling n8n workflows automatically capture income and expense records from emails/files, validate and de-duplicate the data, then organize everything in Google Sheets and Drive.",
    headerOverview:
      "Personal Income & Expense Automation is a two-workflow personal finance system for tracking money in and money out without repetitive manual encoding. Both workflows share the same reliable pattern — capture, AI extraction, validation, duplicate checks, structured recording, archiving, and confirmation — while applying the correct income or expense rules.",
    problem:
      "Income and expense records arrive through emails, receipts, statements, and files, making manual tracking repetitive, inconsistent, and easy to duplicate.",
    solution:
      "Two sibling n8n workflows use AI extraction, validation, duplicate checks, transaction-type rules, categorization, review routing, Google Sheets recording, Drive archiving, and confirmations.",
    result:
      "Creates one consistent record of money in and money out, reduces repetitive encoding, and keeps supporting files organized for easier review and reporting.",
    bestFor: [
      "Freelancers / self-employed",
      "Small online sellers and small business owners",
      "People with multiple income streams",
      "Anyone manually tracking receipts, statements, income, and expenses",
      "Google Workspace users",
    ],
    workflowFlow: [
      "Income / Expense Input",
      "AI Extraction",
      "Validation",
      "Duplicate Check",
      "Income or Expense Rules",
      "Categorization",
      "Google Sheets",
      "Drive Archive",
      "Confirmation / Review",
    ],
    previewVisual: {
      type: "image",
      src: "/projects/personal-income-expense/expense-workflow.png",
      label: "Expense workflow — n8n canvas",
      aspect: "wide",
    },
    previewVisualNote: "Preview shown: Expense workflow. 2 workflows: Income + Expense.",
    demo: {
      available: true,
      posterSrc: "/projects/personal-income-expense/expense-sheet.png",
      videoSrc: "/videos/personal-income-expense-demo.mp4",
    },
    viewProjectHref: "/projects/personal-income-expense",
    howItWorks: {
      shared: [
        "Capture — a record arrives by Gmail (attachment or body text) or Telegram (text or photo).",
        "AI extraction — Gemini reads the text, PDF, PNG, or CSV and pulls out amount, date, and payer/merchant.",
        "Validation — required fields are checked; missing or ambiguous input is routed to review instead of guessed.",
        "Duplicate check — attachment hashing plus reference/amount/date matching blocks repeat submissions, including near-identical resends.",
        "Categorization — the AI assigns one category from the workflow's fixed list; there's no free-text categorizing.",
        "Recording — a validated, non-duplicate record is appended to the Income or Expense sheet, the source file is archived to Drive, and a confirmation is sent once the write succeeds.",
      ],
    },
    screenshots: [
      {
        type: "image",
        src: "/projects/personal-income-expense/income-workflow.png",
        label: "Income workflow — real n8n canvas",
        aspect: "wide",
      },
      {
        type: "image",
        src: "/projects/personal-income-expense/expense-workflow.png",
        label: "Expense workflow — real n8n canvas",
        aspect: "wide",
      },
      {
        type: "image",
        src: "/projects/personal-income-expense/gmail-processed.png",
        label: "Gmail intake with processed labels",
        aspect: "wide",
      },
      {
        type: "image",
        src: "/projects/personal-income-expense/income-sheet.png",
        label: "Structured income records in Google Sheets",
        aspect: "wide",
      },
      {
        type: "image",
        src: "/projects/personal-income-expense/expense-sheet.png",
        label: "Structured expense records in Google Sheets",
        aspect: "wide",
      },
      {
        type: "image",
        src: "/projects/personal-income-expense/expense-telegram.png",
        label: "Telegram receipt intake, duplicate warning, and confirmation",
        aspect: "portrait",
      },
    ],
    testing: [
      {
        area: "Income intake",
        whatWeVerify:
          "Supported income input types (text, PNG, PDF, CSV; single & multi-transaction) across Gmail and Telegram",
        result: "PASS — 32 verified",
      },
      {
        area: "Expense intake",
        whatWeVerify:
          "Supported expense input types (text, PNG, PDF, CSV; single & multi-transaction) across Gmail and Telegram",
        result: "PASS — 31 verified",
      },
      {
        area: "AI extraction & validation",
        whatWeVerify:
          "Required transaction fields extracted correctly; missing or ambiguous input routed to review instead of guessed",
        result: "PASS — verified across 3 rounds",
      },
      {
        area: "Duplicate prevention",
        whatWeVerify:
          "Repeated transactions and repeated attachments (byte-identical file, and reference-number match) do not create duplicate records",
        result: "PASS — both duplicate checks verified",
      },
      {
        area: "Transaction rules & categorization",
        whatWeVerify:
          "Income vs. expense rules (refund, transfer, reversal, pending, credit-card payment) and category assignment behave as designed",
        result: "PASS — verified across 3 rounds",
      },
      {
        area: "Output, archive & confirmation",
        whatWeVerify:
          "Correct Google Sheets record, source-file archive to Drive, and confirmation complete for both workflows",
        result: "PASS — both workflows verified",
      },
    ],
    testingSummary:
      "63 conclusive test executions passed across 3 independent regression rounds in August 2026, covering both workflows and both Gmail and Telegram intake paths.",
  },
];

export const idolFairiesProject: Project = {
  slug: "idol-fairies",
  category: "Flagship case study",
  title: "Idol Fairies",
  workflowCountLabel: "Connected e-commerce + finance system",
  tools: ["Next.js", "n8n", "Supabase", "Gemini", "Metabase"],
  overview:
    "A connected storefront, operations, finance, AI support, and reporting system built as one end-to-end portfolio demonstration.",
  headerOverview:
    "Idol Fairies connects a live K-pop merchandise storefront with order processing, inventory, receivables, expenses, refunds, AI customer support, admin operations, and management reporting.",
  problem:
    "E-commerce, wholesale, finance, customer support, and reporting often sit in separate tools, creating duplicate entry, inconsistent records, and limited visibility.",
  solution:
    "One connected system normalizes retail and wholesale orders, updates shared operational data, automates finance workflows, supports staff, and feeds owner reporting.",
  result:
    "The project demonstrates how storefront activity can flow into operations and finance without rebuilding the same data in disconnected systems.",
  bestFor: [
    "Online retailers managing storefront and back-office operations",
    "Wholesale or reseller businesses tracking receivables",
    "Teams connecting orders, inventory, finance, and reporting",
    "Owners who need separate operational and management views",
    "Businesses adding AI support grounded in live catalog data",
  ],
  workflowFlow: [
    "Storefront / Wholesale",
    "Order Validation",
    "Sales Processing",
    "Inventory & Finance",
    "Admin Operations",
    "AI Support",
    "Management Reporting",
  ],
  previewVisual: {
    type: "image",
    src: "/screenshots/storefront/home.png",
    label: "Idol Fairies live storefront",
    aspect: "wide",
  },
  previewVisualNote: "Live storefront connected to the wider operations and finance system.",
  demo: {
    available: true,
    posterSrc: "/videos/idol-fairies-demo-poster.jpg",
    videoSrc: "/videos/idol-fairies-demo.mp4",
  },
  viewProjectHref: "/idol-fairies",
  howItWorks: {
    shared: [
      "Capture — a storefront checkout or wholesale order enters one shared order pipeline.",
      "Validate — customer, order, and SKU data are checked before records are created; anything unresolved is sent to review.",
      "Process — approved orders create consistent sales records and update the operational view.",
      "Coordinate — inventory, receivables, payables, expenses, and refunds use the same underlying business data.",
      "Support — the admin dashboard gives staff a focused workspace while Idol AI answers from live catalog and policy information.",
      "Report — Metabase turns the connected records into owner-level sales, margin, aging, expense, and inventory views.",
    ],
  },
  screenshots: [
    {
      type: "image",
      src: "/screenshots/storefront/home.png",
      label: "Idol Fairies storefront",
      aspect: "wide",
    },
    {
      type: "image",
      src: "/screenshots/admin/overview.png",
      label: "Admin operations overview",
      aspect: "wide",
    },
    {
      type: "image",
      src: "/screenshots/metabase/business-dashboard.png",
      label: "Management reporting dashboard",
      aspect: "wide",
    },
  ],
  testing: [],
  testingSummary: "",
  logoSrc: "/brand/idol-fairies-logo.jpg",
  liveSiteHref: "https://idolfairies.workflowlab.site/",
  githubHref: "https://github.com/workflowlab-tech/idol-fairies-storefront",
  screenshotsHeading: "Explore the connected system",
  screenshotsDescription:
    "Each area follows the same clear format: business problem, what the system does, what changes, supporting evidence, and optional technical details.",
  ctaTitle: "Want a connected system for your business?",
  ctaDescription:
    "Tell me where your orders, operations, and finance processes are disconnected today.",
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
