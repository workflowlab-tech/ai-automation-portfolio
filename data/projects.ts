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
  role?: string;
  contributions?: string[];
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
    workflowCountLabel: "2 Workflows: Income + Expense",
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
        area: "Income Intake",
        whatWeVerify:
          "Supported income input types (text, PNG, PDF, CSV; single & multi-transaction) across Gmail and Telegram",
        result: "PASS — 32 verified",
      },
      {
        area: "Expense Intake",
        whatWeVerify:
          "Supported expense input types (text, PNG, PDF, CSV; single & multi-transaction) across Gmail and Telegram",
        result: "PASS — 31 verified",
      },
      {
        area: "AI Extraction & Validation",
        whatWeVerify:
          "Required transaction fields extracted correctly; missing or ambiguous input routed to review instead of guessed",
        result: "PASS — verified across 3 rounds",
      },
      {
        area: "Duplicate Prevention",
        whatWeVerify:
          "Repeated transactions and repeated attachments (byte-identical file, and reference-number match) do not create duplicate records",
        result: "PASS — both duplicate checks verified",
      },
      {
        area: "Transaction Rules & Categorization",
        whatWeVerify:
          "Income vs. expense rules (refund, transfer, reversal, pending, credit-card payment) and category assignment behave as designed",
        result: "PASS — verified across 3 rounds",
      },
      {
        area: "Output, Archive & Confirmation",
        whatWeVerify:
          "Correct Google Sheets record, source-file archive to Drive, and confirmation complete for both workflows",
        result: "PASS — both workflows verified",
      },
    ],
    testingSummary:
      "63 conclusive test executions passed across 3 independent regression rounds in August 2026, covering both workflows and both Gmail and Telegram intake paths.",
    screenshotsHeading: "Project Screenshots and Outputs",
    screenshotsDescription:
      "A balanced view of both workflows, their intake channels, and the organized records they produce.",
  },
  {
    slug: "portfolio-ai-agent",
    category: "AI Assistant Automation",
    title: "Portfolio AI Agent",
    workflowCountLabel: "2 Workflows: Chat + Lead Capture",
    tools: ["n8n", "Gemini", "Google Sheets", "Telegram"],
    overview:
      "Answers grounded questions about MJ’s work, recommends relevant projects, and captures genuine hiring or project inquiries.",
    headerOverview:
      "A live n8n AI agent works behind the existing portfolio chatbot to answer questions using approved information instead of guessing. It also recognizes genuine contact intent, collects the required details, logs conversations and leads, and notifies MJ after a lead is saved.",
    problem:
      "Visitors may leave a portfolio without finding the right project or knowing how to turn their interest into a clear inquiry.",
    solution:
      "A grounded AI agent answers portfolio questions, finds approved project links, and guides interested visitors through a conversational lead-capture flow.",
    result:
      "Visitors get useful answers immediately, while genuine opportunities are organized in Google Sheets and sent to MJ through Telegram.",
    bestFor: [
      "Portfolio websites with several projects or services",
      "Freelancers who want conversational lead capture",
      "Recruiters looking for relevant skills and project proof",
      "Service businesses that need grounded website answers",
      "Teams that want inquiry logging without a full CRM",
    ],
    workflowFlow: [
      "Visitor Message",
      "n8n Webhook",
      "Validate & Rate Limit",
      "AI Agent",
      "Portfolio Knowledge & Links",
      "Conversation Log",
      "Lead Capture",
      "Google Sheets",
      "Telegram Alert",
      "Chat Response",
    ],
    previewVisual: {
      type: "image",
      src: "/projects/portfolio-ai-agent/main-workflow.png",
      label: "Portfolio AI Agent — main n8n workflow",
      aspect: "wide",
    },
    previewVisualNote:
      "The main agent answers portfolio questions, finds approved links, logs conversations, and calls a separate lead-capture workflow when needed.",
    demo: {
      available: true,
      posterSrc: "/projects/portfolio-ai-agent/portfolio-ai-agent-thumbnail.png",
      videoSrc: "/videos/portfolio-ai-agent.m4v",
    },
    viewProjectHref: "/projects/portfolio-ai-agent",
    howItWorks: {
      shared: [
        "Receive — the existing portfolio chat sends the visitor’s message and short conversation context to an n8n webhook.",
        "Validate — the workflow checks message length, input quality, session data, and basic request limits before the agent runs.",
        "Answer — Gemini uses approved portfolio knowledge and controlled project links to give a concise, grounded response.",
        "Recognize — genuine hiring or project intent activates lead capture, while ordinary questions remain normal conversations.",
        "Capture — the agent collects name, email, and project message, validates the details, and prevents duplicate submissions where possible.",
        "Record — every exchange is logged in All Conversations; confirmed inquiries are added to Leads and trigger one Telegram notification.",
        "Confirm — the visitor receives a clear success message only after the lead has been saved.",
      ],
    },
    screenshots: [
      {
        type: "image",
        src: "/projects/portfolio-ai-agent/main-workflow.png",
        label: "Main n8n workflow with AI Agent, portfolio tools, validation, and conversation logging",
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/portfolio-ai-agent/lead-capture-workflow.png",
        label: "Lead-capture subworkflow with validation, deduplication, Google Sheets, and Telegram",
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/portfolio-ai-agent/chat-start.png",
        label: "MJ AI portfolio assistant and suggested questions",
        aspect: "portrait",
      },
      {
        type: "image",
        src: "/projects/portfolio-ai-agent/chat-answer.png",
        label: "Grounded automation recommendation in the portfolio chat",
        aspect: "portrait",
      },
      {
        type: "image",
        src: "/projects/portfolio-ai-agent/chat-contact.png",
        label: "Contact intent recognized and conversational lead capture offered",
        aspect: "portrait",
      },
      {
        type: "image",
        src: "/projects/portfolio-ai-agent/leads-sheet.png",
        label: "Confirmed inquiries organized in the Leads sheet",
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/portfolio-ai-agent/conversations-sheet.png",
        label: "Portfolio conversations logged separately from confirmed leads",
        aspect: "standard",
      },
      {
        type: "image",
        src: "/projects/portfolio-ai-agent/telegram-leads.png",
        label: "Telegram notifications sent only for saved portfolio leads",
        aspect: "standard",
      },
    ],
    testing: [
      {
        area: "Grounded Portfolio Answer",
        whatWeVerify: "A known portfolio question returns the correct approved information",
        result: "PASS",
      },
      {
        area: "Unknown Claim Handling",
        whatWeVerify: "An unknown or unapproved claim is declined without inventing information",
        result: "PASS",
      },
      {
        area: "Approved Project Link",
        whatWeVerify: "A request for a project demo returns the correct controlled link",
        result: "PASS",
      },
      {
        area: "Complete Lead Capture",
        whatWeVerify: "Clear contact intent with complete details creates one lead and one Telegram alert",
        result: "PASS",
      },
      {
        area: "Missing Email Handling",
        whatWeVerify: "The agent asks for a missing email and does not save an incomplete lead",
        result: "PASS",
      },
      {
        area: "Invalid Email Handling",
        whatWeVerify: "An invalid email is rejected and the visitor is asked to correct it",
        result: "PASS",
      },
      {
        area: "Ordinary Question Routing",
        whatWeVerify: "A normal portfolio question is logged without creating a lead or Telegram alert",
        result: "PASS",
      },
      {
        area: "Duplicate Prevention",
        whatWeVerify: "A repeated submission does not create a duplicate lead notification or write",
        result: "PASS",
      },
      {
        area: "Credential Protection",
        whatWeVerify: "Prompt and credential extraction requests expose no secrets or hidden instructions",
        result: "PASS",
      },
      {
        area: "Concurrent Sessions",
        whatWeVerify: "Two simultaneous requests from different sessions are handled independently",
        result: "PASS",
      },
    ],
    testingSummary:
      "10 of 10 acceptance tests passed, covering grounded answers, approved links, lead validation, duplicate protection, credential safety, and concurrent sessions.",
    logoSrc: "/projects/portfolio-ai-agent/avatar.png",
    screenshotsHeading: "Project Screenshots and Outputs",
    screenshotsDescription:
      "See the main agent, lead-capture workflow, live chat experience, conversation and lead records, and confirmed-lead notifications.",
    ctaTitle: "Turn Website Interest into Qualified Conversations.",
    ctaDescription:
      "Share what visitors need to learn or do on your website. I’ll map the clearest assistant, knowledge, and lead-capture flow.",
  },
  {
    slug: "daily-task-reminder",
    category: "Productivity Automation",
    title: "Daily Task Reminder",
    workflowCountLabel: "1 Scheduled Daily Workflow",
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
    testing: [
      {
        area: "Data Source Integration",
        whatWeVerify:
          "All five sources (Notion tasks, Google Calendar, Gmail invites, Open-Meteo weather, and daily inspiration) return and merge correctly in one execution",
        result: "PASS",
      },
      {
        area: "Multi-Item Handling",
        whatWeVerify: "Multiple same-day Notion tasks all appear in the briefing, not just the first",
        result: "PASS — 2/2 shown",
      },
      {
        area: "Empty-Source Handling",
        whatWeVerify:
          "A source with zero results for the day, such as no calendar events, is omitted cleanly instead of breaking the message",
        result: "PASS",
      },
      {
        area: "Weather Data Integrity",
        whatWeVerify:
          "Formatted temperature and rain-chance figures match the raw Open-Meteo API response exactly",
        result: "PASS — verified field-for-field",
      },
      {
        area: "Invite Detection Accuracy",
        whatWeVerify: "Matching webinar and invitation emails are correctly included in the briefing",
        result: "PASS — field-name issue fixed and reverified live",
      },
      {
        area: "Delivery Confirmation",
        whatWeVerify: "The Telegram message sent matches the formatted workflow output",
        result: "PASS — confirmed by Telegram delivery response",
      },
    ],
    testingSummary:
      "All six test areas passed, covering data-source integration, edge-case handling, weather accuracy, invite detection, and Telegram delivery.",
    screenshotsHeading: "Project Screenshots and Outputs",
    screenshotsDescription:
      "The workflow, source information, and final Telegram briefing shown in the same order the automation uses them.",
  },
];

export const idolFairiesProject: Project = {
  slug: "idol-fairies",
  category: "Full-stack E-commerce",
  title: "Idol Fairies Beauty",
  workflowCountLabel: "Storefront + Operations + Automation",
  tools: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "Resend", "Gemini", "n8n"],
  overview:
    "A full-stack Korean beauty store connecting shopping, payments, delivery, referrals, customer support, and daily operations.",
  headerOverview:
    "A responsive Korean beauty shopping platform built around the full order journey—from live product availability and guest checkout to payment verification, delivery tracking, referral rewards, and back-office control.",
  problem:
    "A growing online beauty store needs accurate stock, low-friction checkout, local payment and shipping support, and a practical way to manage every order without stitching together disconnected tools.",
  solution:
    "A single full-stack platform keeps the catalog, checkout, payment proof, shipping, order status, referrals, Messenger support, and admin workflows connected to the same operational data.",
  result:
    "Customers can complete and track an order without creating an account, while the store manages products, inventory, payments, shipping, referrals, and fulfillment from one system.",
  role: "Full-stack developer and automation builder",
  contributions: [
    "Designed and implemented the responsive storefront, product catalog, cart, guest checkout, and order-tracking experience.",
    "Built the PostgreSQL and Supabase-backed product, inventory, order, shipping, payment-proof, and referral workflows.",
    "Created the administrative product and order tools, transactional email flow, Messenger service integration, and store-owned social publishing workflows.",
    "Added guarded Gemini-assisted payment-proof checks and operational review paths instead of treating automated extraction as final approval.",
  ],
  bestFor: [
    "Online beauty and specialty retailers",
    "Stores using Philippine payment methods",
    "Teams managing catalog, stock, orders, and delivery together",
    "Businesses running a first-party customer referral program",
    "Stores automating service and owned-channel publishing",
  ],
  workflowFlow: [
    "Browse Live Catalog",
    "Guest Checkout",
    "Calculate Shipping",
    "Pay via GCash / GoTyme",
    "Upload Payment Proof",
    "Review & Fulfill",
    "Track Order",
    "Attribute Referral Rewards",
  ],
  previewVisual: {
    type: "image",
    src: "/projects/idol-fairies-beauty/skincare-collection.jpg",
    label: "Idol Fairies Beauty Korean skincare collection",
    aspect: "wide",
  },
  previewVisualNote: "Store imagery used by the verified Idol Fairies Beauty storefront project.",
  demo: {
    available: false,
    note: "The current Beauty build does not yet have a verified public demo link.",
  },
  viewProjectHref: "/idol-fairies",
  howItWorks: {
    shared: [
      "Browse — shoppers explore a responsive skincare and makeup catalog backed by current product and inventory records.",
      "Checkout — guest checkout validates stock, accepts an optional customer referral code, and calculates nationwide shipping from the destination and order weight.",
      "Pay — the order page presents GCash and GoTyme instructions and accepts a payment-proof image in private storage.",
      "Review — Gemini extracts limited receipt signals and flags mismatches or duplicates for administrative review; staff retain the final payment decision.",
      "Fulfill — the admin workspace manages products, live inventory, orders, payment status, tracking details, and referral operations.",
      "Update — customers follow order progress through a verified tracking flow and transactional emails delivered through Resend.",
      "Reward — first-party referral links and codes attribute qualifying orders, progress rewards through clearing, and surface balances and history in a private referral dashboard.",
      "Support — n8n-powered Messenger automation reads live product, shipping, and order data, while separate store-owned workflows prepare and publish Idol Fairies Beauty content and in-stock product posts.",
    ],
  },
  screenshots: [
    {
      type: "image",
      src: "/projects/idol-fairies-beauty/skincare-collection.jpg",
      label: "Korean skincare collection storefront artwork",
      aspect: "wide",
    },
    {
      type: "image",
      src: "/projects/idol-fairies-beauty/makeup-collection.jpg",
      label: "Korean makeup collection storefront artwork",
      aspect: "wide",
    },
    {
      type: "image",
      src: "/projects/idol-fairies-beauty/treatment-mask-collection.jpg",
      label: "Treatment mask collection storefront artwork",
      aspect: "wide",
    },
  ],
  testing: [],
  testingSummary: "",
  logoSrc: "/projects/idol-fairies-beauty/idol-fairies-logo.jpg",
  screenshotsHeading: "Selected Storefront Imagery",
  screenshotsDescription:
    "Public-safe visual assets from the Beauty storefront. Operational screens are intentionally excluded to protect customer and payment information.",
  ctaTitle: "Build a Storefront That Runs Beyond Checkout.",
  ctaDescription:
    "Connect the customer journey to the inventory, payment, fulfillment, referral, and support workflows behind it.",
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
