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
  regressionReportHref?: string;
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
      "Turns receipts, emails, and messages into clean income and expense records—without repetitive encoding or duplicate entries.",
    headerOverview:
      "Receipts, income notices, and statements arrive through email or Telegram. The system captures each transaction, checks it, prevents duplicates, updates the right sheet, stores the source file, and confirms what happened.",
    problem:
      "Financial records arrive in different places, so tracking takes time and the same transaction can be entered twice.",
    solution:
      "Two automated workflows capture each record, check the details, block duplicates, and file everything in the right place.",
    result:
      "Income and expenses stay organized, supporting files are easy to find, and review takes less manual effort.",
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
      posterSrc: "/projects/personal-income-expense/personal-income-expense-thumbnail.png",
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
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/personal-income-expense/expense-workflow.png",
        label: "Expense workflow — real n8n canvas",
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/personal-income-expense/gmail-processed.png",
        label: "Gmail intake with processed labels",
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/personal-income-expense/expense-telegram.png",
        label: "Telegram receipt intake, duplicate warning, and confirmation",
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/personal-income-expense/income-sheet.png",
        label: "Structured income records in Google Sheets",
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/personal-income-expense/expense-sheet.png",
        label: "Structured expense records in Google Sheets",
        aspect: "standard",
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
    screenshotsHeading: "Project screenshots and outputs",
    screenshotsDescription:
      "A balanced view of both workflows, their intake channels, and the organized records they produce.",
  },
  {
    slug: "daily-task-reminder",
    category: "Productivity Automation",
    title: "Daily Task Reminder",
    workflowCountLabel: "1 scheduled daily workflow",
    tools: ["n8n", "Notion", "Google Calendar", "Gmail", "Telegram", "Open-Meteo"],
    overview:
      "Combines the day’s schedule, important emails, weather, and inspiration into one organized Telegram message every morning.",
    headerOverview:
      "A scheduled n8n workflow gathers tasks from Notion and Google Calendar, checks relevant Gmail messages, pulls the day’s weather, and selects a daily devotional and quote. It formats everything into one personal morning briefing and delivers it through Telegram.",
    problem:
      "Daily plans are spread across calendars, Notion, email, and weather apps, so important tasks or invitations are easy to miss.",
    solution:
      "One scheduled workflow gathers the day’s information, organizes it into a readable briefing, and sends a personalized Telegram message.",
    result:
      "The day starts with one clear view of tasks, events, weather, and reminders—without opening several apps.",
    bestFor: [
      "Professionals managing tasks across several tools",
      "Students balancing classes, events, and webinars",
      "Notion and Google Workspace users",
      "People who prefer one daily mobile briefing",
      "Anyone who wants a more consistent morning routine",
    ],
    workflowFlow: [
      "Scheduled Trigger",
      "Weather",
      "Notion Schedule",
      "Google Calendar",
      "Gmail Invitations",
      "Daily Inspiration",
      "Merge & Format",
      "Telegram Briefing",
    ],
    previewVisual: {
      type: "image",
      src: "/projects/daily-task-reminder/workflow.png",
      label: "Daily Task Reminder — n8n workflow",
      aspect: "wide",
    },
    previewVisualNote:
      "A scheduled workflow combines five daily information sources into one Telegram message.",
    demo: {
      available: true,
      posterSrc: "/projects/daily-task-reminder/daily-task-reminder-thumbnail.png",
      videoSrc: "/videos/daily-task-reminder.m4v",
    },
    viewProjectHref: "/projects/daily-task-reminder",
    howItWorks: {
      shared: [
        "Trigger — the workflow starts automatically at the scheduled morning time.",
        "Gather — it pulls the weather, today’s calendar events, Notion tasks and inspiration, and relevant email invitations.",
        "Combine — the separate results are brought together into one daily information set.",
        "Format — the workflow arranges the details into a concise, personalized morning briefing.",
        "Deliver — Telegram receives one message with the day’s schedule, weather, devotional, quote, and reminders.",
      ],
    },
    screenshots: [
      {
        type: "image",
        src: "/projects/daily-task-reminder/workflow.png",
        label: "Scheduled n8n workflow and connected information sources",
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/daily-task-reminder/notion-sources.png",
        label: "Notion master schedule and daily inspiration sources",
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/daily-task-reminder/telegram-briefing.png",
        label: "Personalized daily briefing delivered in Telegram",
        aspect: "standard",
      },
    ],
    testing: [],
    testingSummary: "",
    screenshotsHeading: "Project screenshots and outputs",
    screenshotsDescription:
      "The workflow, source information, and final Telegram briefing shown in the same order the automation uses them.",
  },
];

export const idolFairiesProject: Project = {
  slug: "idol-fairies",
  category: "Flagship project",
  title: "Idol Fairies",
  workflowCountLabel: "Connected e-commerce + finance system",
  tools: ["Next.js", "n8n", "Supabase", "Gemini", "Metabase", "Gmail"],
  overview:
    "Connects a live storefront to orders, inventory, finance, customer support, and owner reporting through one shared system.",
  headerOverview:
    "A live K-pop merchandise storefront feeds the same system used for orders, inventory, finance, customer support, and reporting. Staff and owners get different views of the same reliable business data instead of maintaining disconnected records.",
  problem:
    "When sales, stock, finance, support, and reporting sit in separate places, teams repeat work and make decisions from inconsistent information.",
  solution:
    "One shared system connects every shopper action to the operational work that follows, from support and order handling to finance and reporting.",
  result:
    "Staff work from one operational view, while owners see clear performance without rebuilding the same records in multiple tools.",
  bestFor: [
    "Online retailers managing storefront and back-office operations",
    "Wholesale or reseller businesses tracking receivables",
    "Teams connecting orders, inventory, finance, and reporting",
    "Owners who need separate operational and management views",
    "Businesses adding AI support grounded in live catalog data",
  ],
  workflowFlow: [
    "Storefront / Wholesale",
    "AI Support",
    "Order Validation",
    "Sales Processing",
    "Inventory & Finance",
    "Admin Operations",
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
    posterSrc: "/videos/idol-fairies-demo-poster.png",
    videoSrc: "/videos/idol-fairies-demo.m4v",
  },
  viewProjectHref: "/idol-fairies",
  howItWorks: {
    shared: [
      "Capture — a storefront checkout or wholesale order enters one shared order pipeline.",
      "Support — Idol AI answers shopper questions using current catalog and policy information.",
      "Validate — customer, order, and SKU data are checked before records are created; anything unresolved is sent to review.",
      "Process — approved orders create consistent sales records and update the operational view.",
      "Coordinate — inventory, receivables, payables, expenses, and refunds use the same underlying business data.",
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
  testing: [
    {
      area: "B2C Sales Webhook",
      whatWeVerify:
        "Order creation, duplicate protection, stock rules, multi-item orders, and invalid input",
      result: "PASS — 5/5",
    },
    {
      area: "Wholesale Sales & AR",
      whatWeVerify:
        "Existing and new resellers, negotiated prices, stock handling, and invalid input",
      result: "PASS — 5/5",
    },
    {
      area: "AR Payment Reminder",
      whatWeVerify:
        "Partial payments, duplicates, unmatched payments, invalid input, and overpayments",
      result: "PASS — 5/5",
    },
    {
      area: "Inventory Purchase & AP",
      whatWeVerify:
        "Supplier draft intake, item extraction, owner confirmation, and invalid or duplicate invoices",
      result: "PASS — 5/5",
    },
    {
      area: "AP Payment Reminder",
      whatWeVerify:
        "Full, partial, and credit payments; unmatched and invalid payments; duplicate protection",
      result: "PASS — 6/6",
    },
    {
      area: "Expense Automation",
      whatWeVerify:
        "Expense capture, file archival, duplicate prevention, supplier routing, and categorization",
      result: "PASS — 10/10",
    },
    {
      area: "Refund Automation",
      whatWeVerify:
        "Resellable and damaged refunds, quantity limits, and product or order validation",
      result: "PASS — 5/5",
    },
  ],
  testingSummary:
    "41 of 41 tests passed across seven business workflows, with no blocking defects in the final tested implementations.",
  logoSrc: "/brand/idol-fairies-logo.jpg",
  liveSiteHref: "https://idolfairies.workflowlab.site/",
  regressionReportHref: "/documents/Idol_Fairies_Regression_Report.docx",
  screenshotsHeading: "Project screenshots and outputs",
  screenshotsDescription:
    "Explore the current storefront, operations, AI support, finance workflows, and management reporting behind the connected system.",
  ctaTitle: "Turn disconnected operations into one dependable system.",
  ctaDescription:
    "Share where orders, support, inventory, or finance break apart today. I’ll map the clearest practical next step.",
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
