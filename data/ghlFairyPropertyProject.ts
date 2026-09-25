import type { Project } from "./projects";

const img = (file: string) => `/projects/ghl-fairy-property/${file}`;

export const ghlFairyPropertyProject: Project = {
  slug: "ghl-fairy-property-lead-activation",
  category: "Australian Real Estate | GoHighLevel CRM & Automation",
  title: "Fairy Property Group — GHL Lead Activation & Qualification System",
  workflowCountLabel: "8 Workflows: WF01–WF06 (WF05 a/b/c)",
  tools: [
    "GoHighLevel",
    "CRM Automation",
    "Workflow Automation",
    "Pipeline Management",
    "Lead Qualification",
    "Database Reactivation",
    "Appointment Automation",
    "AI Studio Funnel",
    "Custom Domain (Cloudflare)",
    "Email Workflow Design",
    "QA / Regression Testing",
  ],
  overview:
    "A Sydney real-estate lead activation system for Fairy Property Group, built in GoHighLevel — a branded 3-step enquiry funnel, buyer qualification by purchase timeline, old-database reactivation, consultation booking, and agent handoff.",
  headerOverview:
    "A GHL buyer and investor system for a fictional Sydney agency: a 3-step funnel on a custom domain captures the enquiry and books a consultation, new leads are qualified as Hot, Warm, or Cold by purchase timeline, an existing database is reactivated with reply-based routing, and hot leads or anyone asking for a person are handed to an agent with the automations stopped.",
  problem:
    "Real-estate agencies sit on old buyer databases that are never followed up, and new enquiries get the same generic reply whether the buyer is ready now or in a year — so hot buyers wait and cold ones get chased.",
  solution:
    "Eight single-purpose GoHighLevel workflows connect a 3-step funnel to one Buyer/Investor pipeline. New leads are classified by timeline, old contacts are reactivated with reply routing and DND guardrails, bookings get confirmations and reminders, and appointment outcomes and agent handoffs each have their own rules.",
  result:
    "A buyer can move from a funnel enquiry through qualification, agent handoff, and a booked consultation on one contact and one opportunity — verified end to end on the live domain in a 12-case regression: 9 passed, 0 failed, 3 not executed live (time-based or reply-based paths).",
  role: "GoHighLevel automation builder & QA tester",
  contributions: [
    "Set up the CRM foundation: 8 custom fields, the Buyer/Investor pipeline, tags, 6 Smart Lists, and 15 realistic historical contacts (two on DND to prove the guardrails).",
    "Configured the Buyer Consultation calendar (30 min, Sydney time, Mon–Fri) used by the funnel and the workflows.",
    "Built WF01 (New Lead Intake), WF02 (Qualification & Classification), WF03 (Existing Database Reactivation), and WF06 (Agent Handoff & Follow-Up).",
    "Built WF04 (Booking & Reminders) and split appointment outcomes into WF05a Showed, WF05b Cancelled, and WF05c No-Show.",
    "Generated the 3-step funnel in GHL AI Studio, then fixed its build, branding, and copy by hand in the code editor and connected it to property.workflowlab.site via Cloudflare.",
    "Configured a Conversation AI qualification assistant (booking and human-handoff actions), kept switched off to avoid per-reply charges.",
    "Ran a 12-case end-to-end regression on 25 September 2026 on the live domain, verifying each result inside GHL, then fixed four minor issues it found.",
  ],
  bestFor: [
    "Real-estate agencies and buyer's agents",
    "Businesses with an old database that is never followed up",
    "Teams that need to separate hot, warm, and cold leads",
    "Owners who want a clean handoff from automation to a person",
    "GoHighLevel CRM & automation evaluation",
  ],
  workflowFlow: [
    "3-Step Funnel",
    "Contact / CRM",
    "Opportunity Pipeline",
    "Qualification (Hot / Warm / Cold)",
    "Database Reactivation",
    "Agent Handoff",
    "Consultation Booking",
    "Reminders",
    "Showed / Cancelled / No-Show",
  ],
  previewVisual: {
    type: "image",
    src: img("fairy-property-landing-page.jpg"),
    label: "Fairy Property Group — buyer & investor enquiry funnel",
    aspect: "wide",
  },
  previewVisualNote:
    "Preview shown: the Fairy Property Group enquiry funnel on property.workflowlab.site that feeds GHL lead capture and consultation booking.",
  demo: {
    available: false,
    note: "Demo video coming soon. The live funnel and the screenshots below show the full system.",
  },
  liveSiteHref: "https://property.workflowlab.site/",
  viewProjectHref: "/projects/ghl-fairy-property-lead-activation",
  howItWorks: {
    shared: [
      "Capture — A buyer or investor completes step 1 of the funnel (intent, preferred suburb, purchase timeline, consent). GHL creates the contact and WF01 sets Lifecycle to New Lead, opens one opportunity, sends an instant acknowledgement, moves it to Contacted, and passes the lead to qualification.",
      "Qualify — WF02 reads the purchase timeline: 0–3 months is Hot (booking email and agent handoff), 3–12 months is Warm (nurture email three days later), 12+ months is Cold, and missing details trigger one email asking only for what is missing. Contacts on DND or already handed off are stopped first.",
      "Reactivate — Tagging past leads reactivation-started runs WF03. Only existing leads without DND pass the gate. Replies are routed by content: YES creates an opportunity and re-qualifies, NOT YET marks the lead Warm, NO closes it, STOP switches on DND, and anything unclear goes to an agent. No reply gets one last check-in.",
      "Hand off — The human-handoff tag fires WF06: it stops WF02 and WF03, assigns the owner, sends an in-app alert with the qualification fields, and creates a call task that skips weekends.",
      "Book — Booking the Buyer Consultation calendar fires WF04: it stops the other follow-ups, moves the opportunity to Appointment Booked, and sends a confirmation plus 24-hour and 1-hour reminders.",
      "Outcomes — WF05a (Showed) moves the opportunity to Appointment Completed and keeps it Open, WF05b (Cancelled) stops the reminders and sends a rebooking link, and WF05c (No-Show) stops the reminders, sends a 'sorry we missed you' email, and creates a call task.",
    ],
  },
  screenshots: [
    {
      type: "image",
      src: img("fairy-property-landing-page.jpg"),
      label: "Fairy Property Group enquiry funnel on property.workflowlab.site",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("workflow-list.jpg"),
      label: "Workflow list — all eight workflows published",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf01-new-lead-intake.jpg"),
      label: "WF01 — New Lead Intake (funnel and contact-created triggers, Lifecycle, opportunity, acknowledgement)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf02-qualification.jpg"),
      label: "WF02 — Qualification & Classification (Stop / Hot / Warm / Cold / Missing-info branches)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf03-database-reactivation.jpg"),
      label: "WF03 — Existing Database Reactivation (eligibility gate, wait for reply, reply routing)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf04-booking-reminders.jpg"),
      label: "WF04 — Booking & Reminders (stop follow-ups, confirmation, 24h and 1h reminders)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf05a-appointment-showed.jpg"),
      label: "WF05a — Appointment Showed (Appointment Completed, kept Open, follow-up task)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf05b-appointment-cancelled.jpg"),
      label: "WF05b — Appointment Cancelled (stop reminders, rebooking email)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf05c-appointment-no-show.jpg"),
      label: "WF05c — Appointment No-Show (stop reminders, missed-you email, call task)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf06-agent-handoff.jpg"),
      label: "WF06 — Agent Handoff & Follow-Up (stop automations, assign, alert, call task)",
      aspect: "wide",
    },
  ],
  testing: [
    {
      area: "FPG-REG-001 — Funnel & form validation",
      whatWeVerify: "The funnel loads over https on the custom domain; an empty form and an unticked consent box are both blocked; submit moves to the booking page with details pre-filled",
      result: "PASS — all checks confirmed on property.workflowlab.site",
    },
    {
      area: "FPG-REG-002 — New lead intake (WF01)",
      whatWeVerify: "A funnel submission creates one contact with Lifecycle New Lead, Intent, Preferred Suburb, and Timeline saved; one opportunity opens; the acknowledgement email is delivered",
      result: "PASS — enrolled once, one opportunity, New Lead → Contacted, email received in the test inbox",
    },
    {
      area: "FPG-REG-003 — Hot qualification (WF02)",
      whatWeVerify: "A 0–3 month timeline sets Lead Temperature Hot, moves the opportunity to Qualified, sends the booking email, and hands off to WF06",
      result: "PASS — all four outcomes confirmed on the contact record",
    },
    {
      area: "FPG-REG-004 — Agent handoff (WF06)",
      whatWeVerify: "Handoff tags the contact, stops WF02 and WF03, assigns the owner, alerts the agent, and creates a call task",
      result: "PASS — every step executed; the task was due the next business day (weekend skipped)",
    },
    {
      area: "FPG-REG-005 — Consultation booking (WF04)",
      whatWeVerify: "Booking on the funnel's calendar moves the same opportunity to Appointment Booked and sends a confirmation",
      result: "PASS — appointment confirmed at the correct Sydney time, still one opportunity, confirmation delivered",
    },
    {
      area: "FPG-REG-006 — Showed (WF05a)",
      whatWeVerify: "Marking the appointment Showed moves the opportunity to Appointment Completed and keeps it Open",
      result: "PASS — stayed Open (not Won); post-consultation task created",
    },
    {
      area: "FPG-REG-007 — No-show (WF05c)",
      whatWeVerify: "A no-show stops the reminders, sends the 'sorry we missed you' email, and creates a call task",
      result: "PASS — email and task confirmed",
    },
    {
      area: "FPG-REG-008 — Cancelled (WF05b)",
      whatWeVerify: "A cancellation stops the WF04 reminders and sends the rebooking email",
      result: "PASS — rebooking email sent; WF04 active enrolments dropped to 0",
    },
    {
      area: "FPG-REG-009 — Reactivation guardrails (WF03)",
      whatWeVerify: "Only existing leads without DND can enter the reactivation campaign",
      result: "PASS — a DND contact and a new funnel lead were both stopped at the gate; nothing was sent",
    },
    {
      area: "FPG-REG-010 — 24-hour and 1-hour reminders (WF04)",
      whatWeVerify: "Reminder emails send before the appointment",
      result: "NOT EXECUTED — time-based; configuration reviewed, and the test appointment was cancelled before the reminders were due",
    },
    {
      area: "FPG-REG-011 — Reactivation reply routing (WF03)",
      whatWeVerify: "YES / NOT YET / NO / STOP / unclear replies each take the right branch",
      result: "NOT EXECUTED — needs real inbound replies; branch logic reviewed in the builder",
    },
    {
      area: "FPG-REG-012 — Warm, Cold, and Missing-info branches (WF02)",
      whatWeVerify: "3–12 month, 12+ month, and incomplete leads take their own branch",
      result: "NOT EXECUTED — only the Hot path was run end to end; the other branches were reviewed in the builder",
    },
    {
      area: "Issues found & fixed after the regression",
      whatWeVerify: "Wording and consistency problems spotted during the run",
      result:
        "Fixed: booking-page timezone label, 'Sydney time' in reminder emails (GHL shows the contact's local time), inconsistent opportunity naming, and leftover AI Studio page metadata",
    },
  ],
  testingSummary:
    "A full end-to-end regression (25 September 2026) ran 12 test cases on the live domain with one test contact, checking each result inside GHL rather than trusting workflow status alone. Nine cases passed, none failed, and three were not executed live: the time-based reminders, reactivation reply routing (needs real replies), and the Warm/Cold/Missing-info branches. Six emails were delivered to a real test inbox; no SMS was sent, because the sub-account has no purchased phone number. Four minor issues found during the run were fixed afterwards.",
  regressionReportHref: "/documents/Fairy_Property_Group_GHL_Regression_QA_Report.docx",
  regressionReportLabel: "Download regression QA report",
  screenshotsHeading: "Selected CRM & Automation Evidence",
  screenshotsDescription:
    "Screenshots from the Fairy Property Group GHL sub-account: the live enquiry funnel, the published workflow list, and the builder for each of the eight workflows.",
  ctaTitle: "Sitting on an Old Buyer Database?",
  ctaDescription:
    "Share how your agency follows up enquiries today and I'll map where a GHL pipeline, qualification, and reactivation workflows like these can take over.",
  disclosure: {
    label: "Simulated client engagement",
    detail:
      "A fictional Sydney real-estate agency built to demonstrate a full GHL lead activation system end to end — not a paid client deployment. Historical contacts are fictional.",
  },
  safeguards: {
    boundaries:
      "Covers buyer and investor enquiries, qualification, database reactivation, agent handoff, and consultation booking. It is email-only by design: SMS needs a purchased phone number, and the Conversation AI assistant is built but switched off.",
    exceptions:
      "Contacts on DND or already handed to an agent are stopped before any outreach; replying STOP turns on DND; booking or handoff stops the other follow-ups so a buyer is never chased twice; attending a consultation never marks the opportunity Won.",
    security:
      "Contact data stays inside the GHL CRM, the funnel asks for explicit consent before contact, and no payment or card data passes through any workflow.",
  },
};
