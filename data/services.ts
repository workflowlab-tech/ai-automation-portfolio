export type Service = {
  icon: "cart" | "calculator" | "bot" | "chart";
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "cart",
    title: "E-commerce Operations",
    description:
      "Storefront, checkout, order processing, and inventory kept in sync so what customers see always matches what's actually in stock.",
    points: [
      "Order intake from storefront and wholesale channels",
      "Inventory that updates automatically as orders move",
      "Refunds handled as a single tracked action, not a manual scramble",
    ],
  },
  {
    icon: "calculator",
    title: "Finance & Accounting Automation",
    description:
      "Receivables, payables, and expenses captured from email and chat, with human checkpoints kept where judgment still matters.",
    points: [
      "Accounts receivable aging and automatic payment reminders",
      "Supplier purchases staged for owner confirmation, not auto-posted",
      "Expense capture and categorization from Gmail and Telegram",
    ],
  },
  {
    icon: "bot",
    title: "AI Assistants / Knowledge Systems",
    description:
      "Chatbots that answer from real data instead of guessing — built on retrieval, not a prompt hoping for the best.",
    points: [
      "RAG-based product and policy lookups with tool-calling",
      "Explicit refusal to answer from memory when a tool comes back empty",
      "Structured to add new tools without rewriting the routing logic",
    ],
  },
  {
    icon: "chart",
    title: "Reporting & Business Visibility",
    description:
      "Owner-level dashboards separate from day-to-day admin screens, so reviewing the business doesn't mean digging through raw tables.",
    points: [
      "Revenue, margin, and AR/AP aging in one place",
      "Inventory valuation kept current, not a stale snapshot",
      "Built with Metabase on real report SQL, verified before wiring in",
    ],
  },
];
