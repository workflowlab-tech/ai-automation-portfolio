import type { MapNode, SystemMapConfig } from "@/components/projects/InteractiveSystemMap";

const node = (id: string, label: string, children?: MapNode[], detail?: string): MapNode => ({ id, label, children, detail });

export const systemMaps: Record<string, SystemMapConfig> = {
  "portfolio-ai-agent": {
    rootLabel: "Portfolio AI Agent",
    branches: [
      node("question", "Visitor Question", [node("message", "Message + context")]),
      node("grounding", "Grounded Answer", [
        node("validation", "Validate & Rate Limit", undefined, "Input quality, session data, and basic request limits are checked before the agent runs."),
        node("knowledge", "Approved Knowledge & Links", [node("known", "Known → answer"), node("unknown", "Unknown → fallback")], "The agent answers from approved portfolio content and controlled project links; unknown or unapproved claims are declined rather than invented."),
      ]),
      node("lead-output", "Lead Capture & Output", [
        node("intent", "Qualification / Context", undefined, "Genuine hiring or project intent activates lead capture; ordinary questions remain normal conversations."),
        node("capture", "Lead Capture", undefined, "Name, email, and project message are validated before a lead is saved."),
        node("sheets", "Google Sheets", [node("conversations", "Conversation Log"), node("leads", "Leads")], "Conversations and confirmed leads are kept in separate sheets."),
        node("telegram", "Telegram Alert", undefined, "A notification is sent only after a confirmed lead is saved."),
      ]),
    ],
    flowPath: ["question", "message", "validation", "knowledge", "intent", "capture", "leads", "telegram"],
  },
  "idol-fairies": {
    rootLabel: "Idol Fairies Connected Commerce System",
    branches: [
      node("discovery", "Discovery & Support", [node("catalog", "Live Catalog"), node("ai-support", "Idol AI Support", undefined, "Shopper answers use current catalog and policy information."), node("fallback", "Needs Review / Fallback")]),
      node("sales", "Sales & Order Processing", [node("checkout", "Storefront Checkout"), node("wholesale", "Wholesale / Reseller Orders"), node("validation", "Order Validation", undefined, "Customer, order, and SKU data are checked before records are created; unresolved items go to review.")]),
      node("operations", "Operations & Finance", [node("inventory", "Inventory"), node("ar", "Receivables"), node("ap", "Payables & Expenses"), node("refunds", "Refunds", undefined, "Refunds are validated for order, product, quantity, and resellable/damaged handling.")]),
      node("reporting", "Admin & Reporting", [node("admin", "Admin Operations"), node("metabase", "Management Reporting")], "Admin routes are authenticated; the system uses synthetic order data and does not process live payments."),
    ],
    flowPath: ["discovery", "catalog", "sales", "checkout", "validation", "operations", "inventory", "admin", "metabase"],
  },
  "idol-fairies-beauty": {
    rootLabel: "Idol Fairies Beauty Platform",
    branches: [
      node("storefront", "Storefront & Customer Experience", [node("catalog", "Live Catalog"), node("checkout", "Guest Checkout"), node("shipping", "Shipping Calculation")]),
      node("payment", "Order & Payment Operations", [node("proof", "Payment Proof", undefined, "Gemini extracts limited receipt signals and flags mismatches or duplicates; staff retain the final payment decision."), node("review", "Manual Review", undefined, "Payment proof is never treated as final approval by automation."), node("order", "Order Status")]),
      node("fulfillment", "Inventory & Fulfillment", [node("inventory", "Inventory"), node("tracking", "Delivery Tracking"), node("email", "Transactional Email")]),
      node("engagement", "Referral & AI Support", [node("referral", "Referral Rewards", undefined, "Qualifying orders progress through the referral clearing lifecycle."), node("messenger", "Messenger AI", undefined, "The agent reads live product, shipping, and order data; uncertain replies can hand off to a human.")]),
    ],
    flowPath: ["storefront", "checkout", "payment", "proof", "review", "fulfillment", "tracking", "engagement", "messenger"],
  },
  "ghl-idol-air-lead-to-job": {
    rootLabel: "Idol Air & Electrical Lead-to-Job System",
    branches: [
      node("lead", "Lead Intake", [node("quote", "Website Quote Request"), node("speed", "Speed-to-Lead Response")]),
      node("appointment", "Quote Visit & Appointment", [node("booking", "Quote Visit Booking"), node("status", "Appointment Status", [node("cancelled", "Cancelled → recovery"), node("no-show", "No-Show → rebooking"), node("showed", "Showed → estimate")])]),
      node("estimate", "Quote & Job Progression", [node("estimate-sent", "Estimate"), node("accepted", "Accepted"), node("declined", "Declined → stop follow-up"), node("won", "Job Won"), node("completed", "Job Completed")]),
      node("review-request", "Review-Request Stage", undefined, "Job completion triggers the automated review-request stage; this does not claim that a public review was received."),
    ],
    flowPath: ["lead", "quote", "speed", "appointment", "booking", "showed", "estimate", "accepted", "won", "completed", "review-request"],
  },
  "ghl-fairy-skin-consultation-to-treatment": {
    rootLabel: "Fairy Skin Studio Consultation-to-Treatment System",
    branches: [
      node("lead", "Lead Intake", [node("landing", "Landing Page & Consultation Form"), node("unbooked", "Unbooked Follow-Up")], "One opportunity per client journey; resubmitting the form does not create a second one or restart follow-up."),
      node("consultation", "Consultation Booking", [node("booking", "Booking & Reminders"), node("status", "Appointment Status", [node("cancelled", "Cancelled → rebooking sequence"), node("no-show", "No-Show → rebooking sequence"), node("showed", "Showed → Consultation Completed (Open)")])]),
      node("treatment", "Treatment Conversion", [node("considering", "Considering Treatment"), node("converted", "Treatment Converted / Won")], "Only an explicit conversion moves the opportunity to Won; attending a consultation never does."),
      node("post", "Post-Conversion", undefined, "Conversion triggers a thank-you email and, two days later, a review request; this does not claim that a public review was received."),
      node("social", "Social Engagement", [node("planner", "Scheduled Social Posts"), node("comment", "Facebook Comment Auto-Reply")]),
    ],
    flowPath: ["lead", "landing", "unbooked", "consultation", "booking", "showed", "treatment", "considering", "converted", "post", "social"],
  },
  "ghl-fairy-property-lead-activation": {
    rootLabel: "Fairy Property Group Lead Activation System",
    branches: [
      node("capture", "Lead Capture", [node("funnel", "3-Step Enquiry Funnel"), node("intake", "New Lead Intake")], "The funnel saves intent, suburb, and purchase timeline; WF01 sets Lifecycle New Lead and opens one opportunity."),
      node("qualify", "Qualification", [node("hot", "Hot 0–3 months → booking + handoff"), node("warm", "Warm 3–12 months → nurture"), node("cold", "Cold 12+ months"), node("missing", "Missing info → ask")], "Contacts on DND or already handed off are stopped before any email."),
      node("reactivate", "Database Reactivation", [node("gate", "Eligibility Gate (existing lead, no DND)"), node("replies", "Reply Routing", [node("yes", "YES → re-qualify"), node("notyet", "NOT YET → Warm"), node("stop", "STOP → DND")])]),
      node("handoff", "Agent Handoff", undefined, "Stops WF02/WF03, assigns the owner, alerts the agent, and creates a call task."),
      node("booking", "Consultation Booking", [node("reminders", "Confirmation & Reminders"), node("outcomes", "Showed / Cancelled / No-Show")], "Attending a consultation keeps the opportunity Open; it is never marked Won automatically."),
    ],
    flowPath: ["capture", "funnel", "intake", "qualify", "hot", "handoff", "booking", "reminders", "outcomes"],
  },
};
