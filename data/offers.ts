// GoHighLevel implementation offers. Prices in USD.
// Source of truth: GHL Sales Kit (Oct 2026). Founding prices apply to the
// first 3 paying clients per industry, then rise ~25%.

export type Tier = {
  name: "Starter" | "Growth" | "Premium";
  label: string;
  price: string;
  from?: boolean;
  priceNote: string;
  delivery: string;
  outcome: string;
  items: string[];
  featured?: boolean;
};

export type IndustryOffer = {
  id: string;
  industry: string;
  who: string;
  promise: string;
  leaks: string[];
  demoName: string;
  caseStudyHref: string;
  qaReportHref: string;
  ctaLabel: string;
  tiers: Tier[];
};

export const offers: IndustryOffer[] = [
  {
    id: "home-services",
    industry: "Home services",
    who: "HVAC, electrical and plumbing businesses with 1–10 techs",
    promise: "Never lose a job to a missed call again.",
    leaks: [
      "Calls missed while you're on the tools",
      "Quotes sent and never chased",
      "Happy customers never asked for a review",
    ],
    demoName: "Idol Air & Electrical",
    caseStudyHref: "/projects/ghl-idol-air-lead-to-job",
    qaReportHref: "/documents/Idol_Air_GHL_Regression_QA_Report.docx",
    ctaLabel: "Find where your leads are leaking",
    tiers: [
      {
        name: "Starter",
        label: "Never Miss a Job",
        price: "$900",
        priceNote: "one-time setup",
        delivery: "Live in 7 business days",
        outcome: "Every enquiry gets a reply in seconds, day or night.",
        items: [
          "Quote form with service, urgency and SMS consent",
          "Instant text to the customer + alert to your team",
          "Missed-call text-back",
          "Emergency jobs routed to the owner's phone; after-hours and weekend auto-reply",
          "Quote-visit calendar with email + SMS reminders",
          "Cancel and no-show recovery",
        ],
      },
      {
        name: "Growth",
        label: "Quote-to-Job",
        price: "$1,800",
        priceNote: "one-time setup",
        delivery: "Live in 14 business days",
        outcome: "More quotes turn into paid jobs, and jobs into repeat work.",
        featured: true,
        items: [
          "Everything in Starter",
          "Quote follow-up on day 1, 3 and 6, then a call task",
          "“Rate us 1–5”: 4–5 get your Google review link, lower scores go privately to you",
          "6-month maintenance reminder + seasonal tune-up campaign",
          "Lead-source tracking and an owner dashboard of won jobs",
        ],
      },
      {
        name: "Premium",
        from: true,
        label: "Repeat Revenue",
        price: "$3,500",
        priceNote: "quoted after a call",
        delivery: "Scoped per business",
        outcome: "Your customer list becomes recurring revenue.",
        items: [
          "Everything in Growth",
          "Service-plan renewals and 12-month reactivation",
          "Multi-tech job assignment",
          "ServiceM8 / simPRO / Jobber sync or an AI FAQ chat",
          "30 days of hands-on support after launch",
        ],
      },
    ],
  },
  {
    id: "clinics",
    industry: "Skin clinics & med spas",
    who: "skin, aesthetics and med spa clinics that sell through consultations",
    promise: "Consults booked and kept, without the chasing.",
    leaks: [
      "DMs and form enquiries left unanswered",
      "Booked consults that never show",
      "“I’ll think about it” with no follow-up",
    ],
    demoName: "Fairy Skin Studio",
    caseStudyHref: "/projects/ghl-fairy-skin-consultation-to-treatment",
    qaReportHref: "/documents/Fairy_Skin_Studio_GHL_Regression_QA_Report.docx",
    ctaLabel: "Get consults booked without the chasing",
    tiers: [
      {
        name: "Starter",
        label: "Consult Booking System",
        price: "$1,000",
        priceNote: "one-time setup",
        delivery: "Live in 7 business days",
        outcome: "Enquiries become booked consults that actually show up.",
        items: [
          "Consult form with skin concern, SMS consent and marketing consent",
          "Instant booking email + staff alert with the client's concern",
          "Follow-ups for unbooked leads, sent only with marketing consent",
          "Reminders at booking, 24 h and 1 h before",
          "“Reply YES to confirm” marks the appointment confirmed",
          "Cancel and no-show recovery with a rebooking link",
        ],
      },
      {
        name: "Growth",
        label: "Consult-to-Treatment",
        price: "$2,200",
        priceNote: "one-time setup",
        delivery: "Live in 14 business days",
        outcome: "More consults convert, and clients come back on schedule.",
        featured: true,
        items: [
          "Everything in Starter",
          "“Still considering?” closing sequence + day-2 staff call reminder",
          "Day-2 aftercare check-in after treatment",
          "Filtered review request: happy clients to your review page, others to you",
          "Rebooking reminder at 4 weeks + 90-day reactivation",
          "Facebook comment auto-reply and a conversion dashboard",
        ],
      },
      {
        name: "Premium",
        from: true,
        label: "Client-for-Life",
        price: "$3,800",
        priceNote: "quoted after a call",
        delivery: "Scoped per clinic",
        outcome: "Memberships, packages and referrals run themselves.",
        items: [
          "Everything in Growth",
          "Consult deposits through your Stripe",
          "Membership and package tracking with renewals",
          "Referral flow",
          "30 days of hands-on support after launch",
        ],
      },
    ],
  },
  {
    id: "real-estate",
    industry: "Real estate",
    who: "independent agencies and agent teams",
    promise: "Reply to every enquiry first.",
    leaks: [
      "Portal and ad enquiries waiting hours for a call",
      "Appraisals with no follow-up until they list elsewhere",
      "Open-home sign-ins that end up in a drawer",
    ],
    demoName: "Fairy Property Group",
    caseStudyHref: "/projects/ghl-fairy-property-lead-activation",
    qaReportHref: "/documents/Fairy_Property_Group_GHL_Regression_QA_Report.docx",
    ctaLabel: "Reply to every enquiry first",
    tiers: [
      {
        name: "Starter",
        label: "Speed-to-Lead",
        price: "$900",
        priceNote: "one-time setup",
        delivery: "Live in 7 business days",
        outcome: "You're the first agent every buyer hears from.",
        items: [
          "Buyer/investor enquiry funnel with intent, suburb, timeline and consent",
          "Instant email + text, and an agent alert to call within 5 minutes",
          "Automatic Hot / Warm / Cold / Missing-info qualification",
          "Warm-lead call reminders and a monthly check-in for cold leads",
          "Consult calendar with reminders and no-show handling",
        ],
      },
      {
        name: "Growth",
        label: "Listing Pipeline",
        price: "$2,000",
        priceNote: "one-time setup",
        delivery: "Live in 14 business days",
        outcome: "Appraisals turn into listings instead of going cold.",
        featured: true,
        items: [
          "Everything in Starter",
          "Seller appraisal form + Appraisal pipeline (Requested → Listed)",
          "Post-appraisal nurture on day 2, 7 and 21, then monthly",
          "Open-home QR check-in with same-day thank-you and day-2 call alert",
          "Purchased / Lost stages and a lead-source dashboard",
        ],
      },
      {
        name: "Premium",
        from: true,
        label: "Agency Database Engine",
        price: "$3,800",
        priceNote: "quoted after a call",
        delivery: "Scoped per agency",
        outcome: "Your database keeps sending you listings.",
        items: [
          "Everything in Growth",
          "Round-robin lead routing with 10-minute escalation",
          "Portal enquiry capture into the CRM",
          "Past-client anniversary and referral program",
          "30 days of hands-on support after launch",
        ],
      },
    ],
  },
];

export const guarantees = [
  {
    title: "Pay the second half only when it works",
    body: "50% to start. The other 50% is due after every workflow in your package passes a live test on your own phone number and inbox, with you watching.",
  },
  {
    title: "30-day fix window",
    body: "If anything I built breaks in the first 30 days after launch, I fix it at no charge.",
  },
  {
    title: "You own everything",
    body: "The GoHighLevel account, contacts and automations are yours. No lock-in, no monthly fee to me unless you choose a care plan.",
  },
];

export const included = [
  "A free 15-minute missed-lead audit before you decide",
  "Every message written in your voice and approved by you before launch",
  "A recorded handover video and a one-page guide for your team",
  "Live go-live test on your phone number, not a demo number",
];

export const steps = [
  { day: "Day 0", title: "Audit call", body: "15 minutes. I show you where enquiries are slipping through today." },
  { day: "Day 1", title: "Setup checklist", body: "About 30 minutes of your time: business details, links, staff and message approval." },
  { day: "Day 2–6", title: "Build + QA", body: "I install the tested system in your account and run the full test suite." },
  { day: "Day 7", title: "Go-live test", body: "We test it together on your number. You pay the second half only when it passes." },
];

export const carePlans = [
  { name: "Care", price: "$150/mo", body: "Monthly health check, small edits, fixes. 2 hours included." },
  { name: "Growth Care", price: "$350/mo", body: "Fortnightly checks, one new small workflow a month. 5 hours included." },
  { name: "Automation Partner", price: "$650/mo", body: "Weekly checks, integration fixes, monthly report. 10 hours included." },
];

export const faqs = [
  {
    q: "Do I need GoHighLevel already?",
    a: "No. If you don't have it, you open your own account and pay GoHighLevel directly, so you always own it. If you already have it, I build inside your existing account.",
  },
  {
    q: "What else will I pay for?",
    a: "Your GoHighLevel subscription, phone number, and SMS/email usage are billed to you by GoHighLevel. My setup fee is one-time. Care plans are optional.",
  },
  {
    q: "Do you have client results yet?",
    a: "Not yet, and I won't pretend otherwise. Each system is a fully built and regression-tested demo, with the QA reports published. That's why the first three clients in each industry get founding prices.",
  },
  {
    q: "Will the messages sound automated?",
    a: "You approve every message before launch, and every message uses your business name, phone and booking link.",
  },
  {
    q: "Is it compliant?",
    a: "Consent checkboxes on every form, STOP opt-out on every text, and marketing messages only go to people who agreed. You confirm the wording for your country.",
  },
  {
    q: "Can I start with Starter and upgrade later?",
    a: "Yes. Growth is built on top of Starter, so you pay the difference and nothing is rebuilt.",
  },
];
