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
      "Connect storefront, checkout, order handling, and inventory so customers and staff work from the same information.",
    points: [
      "Order intake from storefront and wholesale channels",
      "Inventory that updates automatically as orders move",
      "Refunds handled as one visible, trackable process",
    ],
  },
  {
    icon: "calculator",
    title: "Finance & Accounting Automation",
    description:
      "Capture receivables, payables, and expenses from email and chat while keeping human review where judgment still matters.",
    points: [
      "Accounts receivable aging and automatic payment reminders",
      "Supplier purchases staged for owner confirmation, not auto-posted",
      "Expense capture and categorization from Gmail",
    ],
  },
  {
    icon: "bot",
    title: "AI Assistants / Knowledge Systems",
    description:
      "Give customers and staff useful answers from current product, policy, and business information instead of guesswork.",
    points: [
      "Product and policy answers grounded in approved information",
      "Clear fallback when the system cannot verify an answer",
      "Structured to add new tools without rewriting the routing logic",
    ],
  },
  {
    icon: "chart",
    title: "Reporting & Business Visibility",
    description:
      "Separate daily operations from owner reporting so reviewing the business does not mean digging through raw tables.",
    points: [
      "Revenue, margin, and AR/AP aging in one place",
      "Inventory valuation kept current, not a stale snapshot",
      "Reports checked against the underlying business records",
    ],
  },
];
