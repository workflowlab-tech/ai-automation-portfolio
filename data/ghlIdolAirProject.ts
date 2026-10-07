import type { Project } from "./projects";

export const ghlIdolAirProject: Project = {
  slug: "ghl-idol-air-lead-to-job",
  category: "Australia Home Services | GoHighLevel CRM & Automation",
  title: "Idol Air & Electrical — GHL Lead-to-Job Automation",
  workflowCountLabel: "14 Workflows: WF01A–WF08 in 5 folders",
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
    "Custom Values & Snapshots",
    "Business Process Automation",
  ],
  overview:
    "An Australian home-services lead-to-job system for Idol Air & Electrical, built end-to-end in GoHighLevel — from free-quote lead capture and emergency routing through quote visit, estimate, job completion, filtered reviews, and 6-month maintenance reminders.",
  headerOverview:
    "A full GHL lead-to-job system for Idol Air & Electrical: a public free-quote funnel feeds CRM lead capture, an opportunity pipeline, quote-visit booking and status handling, estimate follow-up, and job completion — plus emergency and after-hours routing, a filtered review request, a 6-month maintenance reminder, and missed-call recovery. Packaged as a reusable GHL snapshot driven by Custom Values.",
  problem:
    "A home-services business needs a structured way to capture leads, manage quote visits, follow up with customers, manage opportunities, and move customers through the lead-to-job lifecycle.",
  solution:
    "Fourteen single-purpose GoHighLevel workflows (WF01A–WF08), organised into numbered folders, connect the public quote funnel to lead intake, emergency routing, quote-visit booking and outcomes, estimate follow-up, job completion, reviews, and repeat business. Business name, phone numbers, booking and review links all come from Custom Values, so the whole system can be re-branded for a new client without editing a single message.",
  result:
    "A lead can move from a website quote request through quote visit, estimate acceptance, and job completion to a filtered review request and a 6-month maintenance reminder without duplicate manual entry. The full build was saved as a snapshot and imported cleanly into a blank sub-account.",
  role: "GoHighLevel automation builder",
  contributions: [
    "Built the public Idol Air & Electrical free-quote funnel and connected it to GHL lead capture.",
    "Configured WF01A (Lead Intake), WF01B (Lead No-Response Follow-Up), and the Idol Air & Electrical opportunity pipeline, including six Lost reasons.",
    "Built WF07 (Emergency & After-Hours Routing): emergency jobs text the owner and the customer straight away; after-hours and weekend enquiries get an auto-reply.",
    "Built WF02 (Quote Visit Booked) and WF03A–C (Cancelled, No-Show, Showed) for the quote-visit lifecycle.",
    "Built WF04A–C (Quote Follow-Up, Accepted, Declined), WF05A (Job Won), WF05B (Job Completed & filtered review request), and WF08 (6-month Maintenance Reminder).",
    "Built WF06 (Missed Call Text-Back) as an independent operational-alert workflow.",
    "Moved every customer-facing name, phone number, booking link, and review link into Custom Values; added hidden UTM fields to the quote form and a seasonal tune-up campaign template.",
    "Saved the build as a GHL snapshot and test-imported it into a blank sub-account (6 October 2026): all workflows, folders, and pipeline came across intact.",
    "Built an Owner View dashboard (6 October 2026): leads by source and by UTM source, appointments booked versus showed, no-shows and cancellations, and won and lost jobs. The snapshot was refreshed to v3 to include it.",
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
    available: true,
    posterSrc: "/videos/ghl-idol-air-demo-thumbnail.jpg",
    videoSrc: "https://igsavpvqpxgcnntciudo.supabase.co/storage/v1/object/public/portfolio-videos/ghl-idol-air-demo.mp4",
  },
  liveSiteHref: "https://idolair.workflowlab.site",
  viewProjectHref: "/projects/ghl-idol-air-lead-to-job",
  howItWorks: {
    shared: [
      "Capture — A visitor submits the Idol Air Free Quote Form. GHL creates the contact, and WF01A (Lead Intake & Speed-to-Lead) sends an immediate SMS and email, tags the lead, opens the Opportunity in the Idol Air & Electrical pipeline at New Lead, and notifies staff. WF01B follows up leads who don't respond.",
      "Route emergencies — WF07 reads the Urgency field on the same form. An emergency texts the owner with the job details and sends the customer the emergency number; enquiries after 5 PM, before 8 AM, or on weekends get an after-hours auto-reply.",
      "Book — The customer self-books the Idol Air | Quote Visit calendar. WF02 (Appointment Booking & Confirmation) sends a booking confirmation, notifies the team, and queues 24-hour and 1-hour reminders before the visit.",
      "Track attendance — WF03A–C react to Cancelled, No-Show, and Showed outcomes: stale reminders stop, the outcome is logged, and staff are notified. A Showed status clears the way for the estimate.",
      "Quote — After the visit, staff create and send the estimate from GHL Payments. WF04A (Quote Follow-Up) chases outstanding estimates on a timed SMS/email sequence until it is Accepted (WF04B — confirmation sent, follow-up stopped) or Declined (WF04C — follow-up stopped, staff notified).",
      "Win the job — Moving the Opportunity to Won fires WF05A (Closed Won), which stops quote follow-up, tags the opportunity, and confirms with the customer.",
      "Complete & review — Advancing the Pipeline Stage to Job Completed fires WF05B: it thanks the customer, waits one day, moves the opportunity to Review Requested, and asks for a 1–5 rating by SMS. A 4 or 5 gets the review link; anything else alerts the owner to call. The same stage starts WF08, which sends a maintenance reminder six months later.",
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
      src: "/projects/ghl-idol-air/workflow-folders.jpg",
      label: "Workflows organised into numbered folders — Intake, Booking, Outcomes, Conversion, Nurture & Retention",
      aspect: "wide",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf01a-lead-intake.jpg",
      label: "WF01A — Lead Intake (tag, create opportunity, staff alert, confirmation email, thank-you SMS)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf07-emergency-after-hours.jpg",
      label: "WF07 — Emergency & After-Hours Routing (emergency → owner + customer SMS; after-hours → auto-reply)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf02-quote-visit-booked.jpg",
      label: "WF02 — Quote Visit Booked (Find Opportunity → update stage, confirmation, 24h email and 1h SMS reminders)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf03b-no-show.jpg",
      label: "WF03B — Quote Visit No-Show (stop reminders, alert staff, rebooking SMS, follow-up task)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf04a-quote-follow-up.jpg",
      label: "WF04A — Quote Follow-Up (day 1 SMS, day 3 email, day 6 SMS, then a manual follow-up alert)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf05a-job-won.jpg",
      label: "WF05A — Job Won (stop quote follow-up, mark won, confirmation SMS, staff alert)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf05b-review-filter.jpg",
      label: "WF05B — Job Completed & Review (rating question; 4–5 gets the review link, anything else alerts the owner)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf08-maintenance-reminder.jpg",
      label: "WF08 — Maintenance Reminder (6 months after Job Completed)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/wf06-missed-call-text-back.jpg",
      label: "WF06 — Missed Call Text-Back (1-minute wait, text-back SMS, owner alert)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/opportunity-pipeline-new-lead.png",
      label: "Idol Air & Electrical opportunity pipeline — test lead in New Lead",
      aspect: "wide",
    },
    {
      type: "image",
      src: "/projects/ghl-idol-air/owner-view-dashboard.jpg",
      label: "Owner View dashboard — contacts by source, appointments, no-shows, won jobs, and leads by UTM source (test data)",
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
    {
      area: "Upgrade live test — form, UTM, and emergency routing (27 Sep)",
      whatWeVerify: "A Free Quote Form submission with Urgency = Emergency and UTM parameters in the link",
      result:
        "PASS — UTM source, medium, and campaign saved on the contact; WF01A and WF07 both enrolled and the emergency branch ran. Bug found and fixed: WF01A's staff alert was skipped ('No user assigned'), now sent to all users",
    },
    {
      area: "Upgrade live test — booking and reminders (27–29 Sep)",
      whatWeVerify: "Booking moves the opportunity to Quote Visit Booked and the confirmation and 24-hour reminder reach a real inbox",
      result:
        "PASS — stage moved, confirmation and 24-hour reminder emails delivered; the 1-hour reminder SMS fired on schedule but was not delivered (no phone number)",
    },
    {
      area: "Upgrade live test — job completed, review filter, maintenance (27–29 Sep)",
      whatWeVerify: "Moving the opportunity to Job Completed starts WF05B and WF08",
      result:
        "PASS — both enrolled; the thank-you and rating SMS fired. The 4–5 vs other rating split is NOT EXECUTED: it needs a real inbound text reply",
    },
    {
      area: "Snapshot test-import (6 Oct)",
      whatWeVerify: "The saved snapshot loads into a blank sub-account with every workflow, folder, and pipeline intact",
      result:
        "PASS — all [HS] workflows (WF01A–WF08) imported with triggers still linked. Custom Values arrive empty, so filling them is step one of every client setup",
    },
    {
      area: "Owner View dashboard + UTM (6 Oct)",
      whatWeVerify: "The owner can see where leads come from (including UTM source), appointments booked versus showed, and won and lost jobs in one view",
      result: "PASS — dashboard saved and shared with account admins; the 'Leads by UTM Source' chart shows the qa_test value captured by the 27 Sep form test, confirming UTM capture end to end",
    },
  ],
  testingSummary:
    "A full regression pass (17 September 2026) covered the happy path plus three exception branches — Appointment Cancelled, Appointment No-Show, and Quote Declined — across five test contacts, in addition to the original scene-by-scene happy-path run on 16 September. All four scenarios passed. Regression testing also caught a live defect in WF02 (the opportunity wasn't advancing on booking); it was fixed and re-verified with a fresh contact. WF06 remains configuration-audited only — live telephony was not available in the simulated environment. After the upgrade (27 September), a second live test confirmed UTM capture, emergency routing, booking reminders reaching a real inbox, and the job-completed review and maintenance enrolments; it also caught and fixed a skipped staff alert. Text messages fire on schedule but are not delivered because no phone number is connected. The finished build was saved as a snapshot and test-imported into a blank sub-account on 6 October; an Owner View dashboard was added the same day and the snapshot refreshed to v3.",
  regressionReportHref: "/documents/Idol_Air_GHL_Regression_QA_Report.docx",
  regressionReportLabel: "Download regression QA report",
  screenshotsHeading: "Selected CRM & Automation Evidence",
  screenshotsDescription:
    "Screenshots from the live Idol Air & Electrical GHL sub-account: the published funnel, the numbered workflow folders, the builder for each key workflow (including emergency routing and the review filter), the opportunity pipeline, the contact timeline, and execution logs.",
  ctaTitle: "Need Leads Followed Up Without the Manual Chasing?",
  ctaDescription: "Share your current quote-to-job process and I'll map where a GHL pipeline and workflows like these can take over the repetitive follow-up.",
  disclosure: {
    label: "Simulated client engagement",
    detail:
      "A simulated Australian home-services client built to demonstrate a full GHL lead-to-job system end-to-end — not a paid client deployment.",
  },
  safeguards: {
    boundaries:
      "Covers the lead-to-job lifecycle from quote request to job completion, plus emergency routing, reviews, maintenance reminders, and missed-call recovery. SMS steps are built and fire on schedule, but nothing is delivered because the simulated sub-account has no phone number — so missed-call text-back and the rating split are not live-tested.",
    exceptions:
      "Appointment Cancelled, No-Show, and Quote Declined each stop the relevant follow-up sequence and notify staff instead of continuing to message a customer who won't respond; unhappy ratings go to the owner instead of a public review link; a WF02 defect that silently skipped a pipeline update was caught in regression and fixed before re-verification.",
    security:
      "Customer contact and quote data stay inside the GHL CRM; no payment or card data passes through any workflow.",
  },
};
