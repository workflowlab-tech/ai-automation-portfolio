import type { Project } from "./projects";

export const ghlIdolAirProject: Project = {
  slug: "ghl-idol-air-lead-to-job",
  category: "Australia Home Services | GoHighLevel CRM & Automation",
  title: "Idol Air & Electrical — GHL Lead-to-Job Automation",
  workflowCountLabel: "6 Workflows: WF01–WF06",
  tools: [
    "GoHighLevel",
    "CRM Automation",
    "Workflow Automation",
    "Pipeline Management",
    "Lead Management",
    "Appointment Automation",
    "Funnel / Form Integration",
    "Email/SMS Workflow Design",
    "QA / Regression Testing",
    "Business Process Automation",
  ],
  overview:
    "A simulated Australian home-services client (Idol Air & Electrical) run end-to-end in GoHighLevel — from free-quote lead capture through quote visit, estimate, and job completion.",
  headerOverview:
    "A simulated Australia home-services client built to demonstrate a full GHL lead-to-job system: a public free-quote funnel feeds CRM lead capture, an opportunity pipeline, quote-visit booking and status handling, estimate follow-up, and job completion — plus an independent missed-call recovery workflow.",
  problem:
    "A home-services business needs a structured way to capture leads, manage quote visits, follow up with customers, manage opportunities, and move customers through the lead-to-job lifecycle.",
  solution:
    "Six purpose-built GoHighLevel workflows (WF01–WF06) connect the public quote funnel to CRM lead intake, appointment booking and status handling, estimate follow-up, and job completion — each scoped to one responsibility so the pipeline stays predictable and testable.",
  result:
    "A lead can move from a website quote request to a completed, reviewed job without manual re-entry — the CRM opportunity, calendar, and communication history stay in sync at every stage, and missed inbound calls are acknowledged automatically.",
  role: "GoHighLevel automation builder",
  contributions: [
    "Built the public Idol Air & Electrical free-quote funnel and connected it to GHL lead capture.",
    "Configured WF01A (Lead Intake & Speed-to-Lead) and the Idol Air & Electrical opportunity pipeline.",
    "Built WF02 (Appointment Booking & Confirmation) and WF03A–D (Appointment Status Handling) for the quote-visit lifecycle.",
    "Built WF04A–C (Quote Follow-Up, Accepted, Declined) and WF05A–B (Closed Won, Job Completed & Review Request).",
    "Built WF06 (Missed Call Text-Back) as an independent operational-alert workflow.",
    "Ran a full regression pass across the happy path plus three exception branches (Cancelled, No-Show, Declined) across five test contacts.",
    "Found and fixed a live WF02 defect during regression testing — a missing Find Opportunity step was silently skipping the booking-stage pipeline update — then re-verified the fix with a fresh contact.",
  ],
  bestFor: [
    "Home-services businesses (HVAC, electrical, trades)",
    "Teams that need a structured quote-to-job pipeline",
    "Businesses missing calls during service hours",
    "Owners who want lead follow-up without manual tracking",
    "GoHighLevel CRM & automation evaluation",
  ],
  workflowFlow: [
    "Website / Free Quote Funnel",
    "GHL Lead Capture",
    "Contact / CRM",
    "Opportunity Pipeline",
    "Quote Visit Booking",
    "Appointment Follow-Up",
    "Quote Process",
    "Quote Accepted / Declined",
    "Job Lifecycle",
    "Completed / Won",
  ],
  previewVisual: {
    type: "image",
    src: "/projects/ghl-idol-air/idol-air-website-free-quote.png",
    label: "Idol Air & Electrical — published Free Quote funnel",
    aspect: "wide",
  },
  previewVisualNote: "Preview shown: the live Idol Air & Electrical Free Quote funnel that feeds GHL lead capture.",
  demo: {
    available: false,
    note: "Walkthrough video not yet recorded — CRM screenshots and the regression QA report are available below.",
  },
  liveSiteHref: "https://idolair.workflowlab.site",
  viewProjectHref: "/projects/ghl-idol-air-lead-to-job",
  howItWorks: {
    shared: [
      "Capture — A visitor submits the Idol Air Free Quote Form. GHL creates the contact, and WF01A (Lead Intake & Speed-to-Lead) sends an immediate SMS and email, tags the lead, opens the Opportunity in the Idol Air & Electrical pipeline at New Lead, and notifies staff.",
      "Book — The customer self-books the Idol Air | Quote Visit calendar. WF02 (Appointment Booking & Confirmation) sends a booking confirmation, notifies the team, and queues 24-hour and 1-hour reminders before the visit.",
      "Track attendance — WF03A–D (Appointment Status Handling) react to Cancelled, No-Show, Showed, or Rescheduled outcomes: stale reminders stop, the outcome is logged, and staff are notified. A Showed status clears the way for the estimate.",
      "Quote — After the visit, staff create and send the estimate from GHL Payments. WF04A (Quote Follow-Up) chases outstanding estimates on a timed SMS/email sequence until it is Accepted (WF04B — confirmation sent, follow-up stopped) or Declined (WF04C — follow-up stopped, staff notified).",
      "Win the job — Moving the Opportunity to Won fires WF05A (Closed Won), which stops quote follow-up, tags the opportunity, and confirms with the customer.",
      "Complete & review — Advancing the Pipeline Stage to Job Completed fires WF05B, which tags the job, thanks the customer, waits one day, and moves the opportunity to Review Requested.",
      "Recover missed calls — Independently of the sales pipeline, WF06 (Missed Call Text-Back) waits one minute after an unanswered inbound call, sends an acknowledgement SMS, and alerts the assigned owner — without creating or moving an opportunity.",
    ],
  },
  screenshots: [
    {
      type: "image",
      src: "/projects/ghl-idol-air/idol-air-website-free-quote.png",
      label: "Published Idol Air & Electrical website — Free Quote funnel entry point",
      aspect: "wide",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/opportunity-pipeline-new-lead.png",
      label: "Idol Air & Electrical opportunity pipeline — test lead in New Lead",
      aspect: "wide",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/contact-activity-timeline.png",
      label: "Contact activity timeline — form submission through appointment booking",
      aspect: "wide",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf01a-execution-logs.png",
      label: "WF01A execution logs — Create Opportunity, Tag, and Confirmation Email steps executed",
      aspect: "wide",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf02-find-opportunity-fix.png",
      label: "WF02 post-fix — Find Opportunity step added before Update Opportunity, branching on Opportunity Found / Not Found",
      aspect: "wide",
    },
  ],
  testing: [
    {
      area: "Scenario 1 — Happy Path (Sophie Mitchell)",
      whatWeVerify: "Free Quote Form → WF01A intake → Quote Visit booked → estimate accepted → Opportunity Won → Job Completed",
      result: "PASS — full lead-to-job-completed path executed live, scene by scene",
    },
    {
      area: "Scenario 2 — Appointment Cancelled (Lucas Parker / Amelia Grant)",
      whatWeVerify: "WF03A stops WF02 reminders, tags the appointment Cancelled, alerts the assigned staff member, and sends a self-service reschedule-link acknowledgement",
      result: "PASS — all WF03A actions executed as designed",
    },
    {
      area: "Scenario 3 — Appointment No-Show (Ethan Collins)",
      whatWeVerify: "WF03B tags the no-show, alerts staff, waits 10 minutes, sends a rebooking SMS, and creates a follow-up task",
      result: "PASS — all WF03B actions executed",
    },
    {
      area: "Scenario 4 — Quote Declined (Olivia Bennett)",
      whatWeVerify: "WF04C stops quote follow-up and notifies staff on a Declined estimate",
      result:
        "PASS — follow-up stopped and staff notified; the opportunity intentionally stays at Quote Completed by design (WF04C does not move the pipeline stage)",
    },
    {
      area: "Defect found & fixed — WF02 booking-stage opportunity update",
      whatWeVerify: "Whether the opportunity pipeline stage actually advances when a customer books a Quote Visit",
      result:
        "Found: Update Opportunity was silently SKIPPED because WF02 had no opportunity in context. Fixed: added a Find Opportunity step (most recent open Opportunity in the Idol Air & Electrical pipeline) before the update. Re-verified with a fresh contact (Ethan Collins), whose opportunity auto-advanced to Quote Visit Booked.",
    },
    {
      area: "Missed Call Text-Back (WF06)",
      whatWeVerify: "Trigger filters, 1-minute wait, SMS text-back, and internal owner notification",
      result:
        "PASS on configuration audit — live call/SMS delivery NOT EXECUTED: the simulated sub-account has no provisioned phone number",
    },
  ],
  testingSummary:
    "A full regression pass (17 September 2026) covered the happy path plus three exception branches — Appointment Cancelled, Appointment No-Show, and Quote Declined — across five test contacts, in addition to the original scene-by-scene happy-path run on 16 September. All four scenarios passed. Regression testing also caught a live defect in WF02 (the opportunity wasn't advancing on booking); it was fixed and re-verified with a fresh contact. WF06 remains configuration-audited only — live telephony was not available in the simulated environment.",
  regressionReportHref: "/documents/Idol_Air_GHL_Regression_QA_Report.docx",
  regressionReportLabel: "Download regression QA report",
  screenshotsHeading: "Selected CRM & Automation Evidence",
  screenshotsDescription:
    "Public-safe screenshots from the live Idol Air & Electrical GHL sub-account: the published funnel, the opportunity pipeline, the automated contact activity timeline, workflow execution logs, and the WF02 fix applied during regression testing.",
  ctaTitle: "Need Leads Followed Up Without the Manual Chasing?",
  ctaDescription: "Share your current quote-to-job process and I'll map where a GHL pipeline and workflows like these can take over the repetitive follow-up.",
};
