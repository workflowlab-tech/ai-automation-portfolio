export type ProjectVisual =
  | { type: "image"; src: string; label: string }
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
  /** Ordered step labels for the collapsed "Workflow Details" flow */
  workflowFlow: string[];
  previewVisual: ProjectVisual;
  previewVisualNote: string;
  demo:
    | { available: true; posterSrc?: string; videoSrc: string }
    | { available: false; note: string };
  viewProjectHref: string;
  howItWorks: {
    shared: string[];
    branches: { label: string; steps: string[] }[];
  };
  screenshots: ProjectVisual[];
  testing: ProjectTestRow[];
  testingSummary: string;
};

export const projects: Project[] = [
  {
    slug: "personal-income-expense",
    category: "Finance Automation",
    title: "Personal Income & Expense Automation",
    workflowCountLabel: "2 workflows: Income + Expense",
    tools: ["n8n", "Gemini", "Gmail", "Telegram", "Google Sheets", "Google Drive"],
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
      type: "placeholder",
      label: "Expense workflow — n8n canvas",
    },
    previewVisualNote: "Preview shown: Expense workflow. 2 workflows: Income + Expense.",
    demo: {
      available: false,
      note: "Demo recording not yet available for this project.",
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
      branches: [
        {
          label: "Income-specific rules",
          steps: [
            "A refund (e.g. a courier or platform-fee refund) is treated as normal income and auto-posted under its own Refund category.",
            "A self-transfer, reversal, or a payment still shown as pending is rejected — never recorded as income.",
            "An expense mistakenly sent to the income channel is rejected, not recorded.",
          ],
        },
        {
          label: "Expense-specific rules",
          steps: [
            "A refund or credit is never auto-posted — it always routes to a review queue for manual confirmation.",
            "A credit-card bill payment that settles purchases already recorded from an earlier statement is rejected as a transfer, so it isn't double-counted.",
            "Income mistakenly sent to the expense channel is rejected, not recorded.",
            "A multi-page statement is read as one document, with each real purchase posted as its own line — not one row per statement.",
          ],
        },
      ],
    },
    screenshots: [
      { type: "placeholder", label: "Income workflow — n8n canvas" },
      { type: "placeholder", label: "Expense workflow — n8n canvas" },
      { type: "placeholder", label: "Sample input — receipt / statement" },
      { type: "placeholder", label: "Google Sheets — Income & Expense records" },
      { type: "placeholder", label: "Drive archive of source files" },
    ],
    testing: [
      {
        area: "Income intake",
        whatWeVerify:
          "Supported income input types (text, PNG, PDF, CSV; single & multi-transaction) across Gmail and Telegram",
        result: "32/32 verified",
      },
      {
        area: "Expense intake",
        whatWeVerify:
          "Supported expense input types (text, PNG, PDF, CSV; single & multi-transaction) across Gmail and Telegram",
        result: "31/32 verified — 1 inconclusive (third-party AI rate limit, not a workflow defect)",
      },
      {
        area: "AI extraction & validation",
        whatWeVerify:
          "Required transaction fields extracted correctly; missing or ambiguous input routed to review instead of guessed",
        result: "Verified across all 3 regression rounds",
      },
      {
        area: "Duplicate prevention",
        whatWeVerify:
          "Repeated transactions and repeated attachments (byte-identical file, and reference-number match) do not create duplicate records",
        result: "Verified — transaction-level and attachment-level, both channels",
      },
      {
        area: "Transaction rules & categorization",
        whatWeVerify:
          "Income vs. expense rules (refund, transfer, reversal, pending, credit-card payment) and category assignment behave as designed",
        result: "Verified across all 3 regression rounds",
      },
      {
        area: "Output, archive & confirmation",
        whatWeVerify:
          "Correct Google Sheets record, source-file archive to Drive, and confirmation complete for both workflows",
        result: "Verified — confirmations fire only after the database write succeeds",
      },
    ],
    testingSummary:
      "63 of 64 test executions passed across 3 independent regression rounds (Report 1–3, August 2026), spanning both Gmail and Telegram. The single inconclusive result was a transient third-party AI rate limit, not a workflow defect — the workflow's own error handling caught it safely, routing it to review with no bad write.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
