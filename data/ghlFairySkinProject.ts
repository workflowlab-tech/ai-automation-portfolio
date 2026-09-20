import type { Project } from "./projects";

const img = (file: string) => `/projects/ghl-fairy-skin/${file}`;

export const ghlFairySkinProject: Project = {
  slug: "ghl-fairy-skin-consultation-to-treatment",
  category: "UK Aesthetics Clinic | GoHighLevel CRM & Automation",
  title: "Fairy Skin Studio — GHL Consultation-to-Treatment Automation",
  workflowCountLabel: "7 Workflows: WF01–WF07",
  tools: [
    "GoHighLevel",
    "CRM Automation",
    "Workflow Automation",
    "Pipeline Management",
    "Appointment Automation",
    "Funnel / Form Integration",
    "Email Workflow Design",
    "Social Planner",
    "Facebook Comment Auto-Reply",
    "QA / Regression Testing",
  ],
  overview:
    "A UK aesthetics-clinic consultation-to-treatment system for Fairy Skin Studio, built end-to-end in GoHighLevel — from a branded landing page and booking form through consultation attendance, treatment conversion, and social engagement.",
  headerOverview:
    "A GHL consultation-to-treatment system for a fictional Manchester aesthetics studio: a branded landing page feeds native lead capture and the booking calendar, one opportunity tracks each client journey from New Lead to Treatment Converted, and single-purpose workflows handle booking, cancellations, no-shows, attendance, and post-conversion — plus a Facebook comment auto-reply and scheduled social posts.",
  problem:
    "A skin clinic needs to turn enquiries into booked consultations and, later, treatments — without losing leads who never book, chasing cancellations by hand, or counting a consultation attendance as a sale.",
  solution:
    "Seven single-purpose GoHighLevel workflows (WF01–WF07) connect the landing page, form, and calendar to one opportunity per client journey. Booking, cancellation, no-show, and attendance each have their own rules, and only an explicit treatment conversion moves an opportunity to Won.",
  result:
    "A lead can move from a landing-page enquiry through booking, attendance, and treatment conversion on a single opportunity, with recovery sequences for cancellations and no-shows — verified in a 12-case regression: 10 passed, 0 failed, 1 blocked, 1 not tested.",
  role: "GoHighLevel automation builder & QA tester",
  contributions: [
    "Built the Fairy Skin Studio landing page and connected the native consultation form and booking calendar.",
    "Configured the Consultation to Treatment pipeline: New Lead, Consultation Booked, Consultation Completed, Considering Treatment, Treatment Converted.",
    "Built WF01 (Lead Intake & Unbooked Follow-Up) and WF02 (Consultation Booked & Reminders).",
    "Built WF03 (Cancellation Recovery), WF04 (No-Show Recovery), WF05 (Showed / Post-Consultation), and WF06 (Treatment Converted & Post-Conversion).",
    "Built WF07 (Facebook Comment Auto-Reply) and scheduled brand posts in Social Planner.",
    "Ran a 12-case regression on 20 September 2026 using fictional UK test contacts, verifying each result inside GHL.",
  ],
  bestFor: [
    "Aesthetics clinics, med spas, and salons",
    "Consultation-led businesses that book before they sell",
    "Teams who need cancellation and no-show recovery",
    "Owners who want one clear opportunity per client journey",
    "GoHighLevel CRM & automation evaluation",
  ],
  workflowFlow: [
    "Landing Page",
    "Native Lead Form",
    "Contact / CRM",
    "Opportunity Pipeline",
    "Consultation Booking",
    "Reminders",
    "Showed / Cancelled / No-Show",
    "Treatment Conversion",
    "Review Request",
  ],
  previewVisual: {
    type: "image",
    src: img("fairy-skin-landing-page.jpg"),
    label: "Fairy Skin Studio — consultation landing page",
    aspect: "wide",
  },
  previewVisualNote: "Preview shown: the Fairy Skin Studio landing page that feeds GHL lead capture and consultation booking.",
  demo: {
    available: false,
    note: "Demo recording coming soon.",
  },
  liveSiteHref: "https://fairyskin.workflowlab.site/",
  viewProjectHref: "/projects/ghl-fairy-skin-consultation-to-treatment",
  howItWorks: {
    shared: [
      "Capture — A visitor completes the consultation form on the landing page. GHL creates the contact, WF01 tags the lead as unbooked, opens one opportunity at New Lead (or reuses the open one), and starts a three-email follow-up.",
      "Book — Booking on the consultation calendar fires WF02: it removes the unbooked tag, takes the contact out of WF01, WF03, and WF04, moves the opportunity to Consultation Booked, and queues a confirmation plus 24-hour and 1-hour reminders.",
      "Cancelled or no-show — WF03 and WF04 each send a three-step rebooking sequence and leave the opportunity where it is. Rebooking creates a new appointment on the same contact and opportunity, and WF02 takes the contact out of recovery.",
      "Showed — WF05 removes the contact from the booking and recovery workflows and moves the opportunity to Consultation Completed, still Open. Attending a consultation is never treated as a sale.",
      "Convert — Moving the opportunity to Treatment Converted with status Won fires WF06: it tags the contact, sends a thank-you, waits two days, and sends a review request.",
      "Protect against duplicates — Resubmitting the form for an active lead creates no second opportunity and does not restart WF01.",
      "Engage on social — WF07 auto-replies to comments on the Fairy Skin Studio Facebook page, and Social Planner schedules brand posts.",
    ],
  },
  screenshots: [
    {
      type: "image",
      src: img("fairy-skin-landing-page.jpg"),
      label: "Fairy Skin Studio landing page — complimentary 30-minute consultation offer",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("fairy-skin-lead-form.jpg"),
      label: "Lead form — the entry point that creates the contact and opportunity",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("workflow-list.jpg"),
      label: "Workflow list — WF01–WF07 published",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf01-lead-intake.jpg"),
      label: "WF01 — Lead Intake & Unbooked Follow-Up (Find Opportunity branch, three-email follow-up)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf02-booked-reminders.jpg"),
      label: "WF02 — Consultation Booked & Reminders (removes unbooked tag and stale workflows, moves stage)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf03-cancellation-recovery.jpg"),
      label: "WF03 — Cancellation Recovery (three-step rebooking sequence)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf04-no-show-recovery.jpg"),
      label: "WF04 — No-Show Recovery (three-step rebooking sequence)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf05-showed-post-consultation.jpg"),
      label: "WF05 — Showed / Post-Consultation (clears other workflows, moves to Consultation Completed)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf06-treatment-converted.jpg"),
      label: "WF06 — Treatment Converted & Post-Conversion (tag, thank-you, review request)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("opportunity-pipeline-final.jpg"),
      label: "Opportunity pipeline after regression — one opportunity per test contact, no duplicates",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf07-facebook-comment-auto-reply.jpg"),
      label: "WF07 — Facebook Comment Auto-Reply (Fairy Skin Studio page trigger, Respond On Comment)",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("social-planner.jpg"),
      label: "Social Planner — scheduled and published Fairy Skin Studio posts",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("facebook-page-auto-reply.jpg"),
      label: "Fairy Skin Studio Facebook page — WF07 reply posted on a comment",
      aspect: "portrait",
    },
  ],
  testing: [
    {
      area: "FSS-REG-001 — New lead intake",
      whatWeVerify: "Form submission creates the contact, applies the lead and unbooked tags, opens one New Lead opportunity, and enrols WF01",
      result: "PASS — contact, tags, opportunity, and WF01 enrolment all confirmed inside GHL",
    },
    {
      area: "FSS-REG-002 — Happy-path booking",
      whatWeVerify: "Booking moves the same opportunity to Consultation Booked, removes the unbooked tag, takes the contact out of WF01, and enrols WF02",
      result: "PASS — no duplicate contact or opportunity; appointment Confirmed",
    },
    {
      area: "FSS-REG-003 — Showed",
      whatWeVerify: "Marking the appointment Showed moves the opportunity to Consultation Completed and keeps it Open",
      result: "PASS — stayed Open (not Won), no duplicate opportunity, WF02 removed, WF05 ran",
    },
    {
      area: "FSS-REG-004 — Treatment conversion",
      whatWeVerify: "Manual move to Considering Treatment, then Treatment Converted / Won on the same opportunity, fires WF06",
      result: "PASS — same opportunity marked Won, converted tag added, WF06 enrolled",
    },
    {
      area: "FSS-REG-005 — Cancelled",
      whatWeVerify: "A cancelled appointment starts the WF03 rebooking sequence without moving the opportunity to Won",
      result: "PASS — WF03 enrolled; the opportunity stays Consultation Booked / Open by design",
    },
    {
      area: "FSS-REG-006 — No-show",
      whatWeVerify: "A no-show starts WF04 (not WF03) without moving the opportunity to Won",
      result: "PASS — WF04 enrolled, WF03 untouched, opportunity not Won",
    },
    {
      area: "FSS-REG-007 — Rebook",
      whatWeVerify: "A cancelled contact who rebooks keeps one contact and one opportunity, exits WF03, and re-enters WF02",
      result: "PASS — new appointment on the same contact; WF03 removed; still one opportunity",
    },
    {
      area: "FSS-REG-008 — Duplicate / re-entry protection",
      whatWeVerify: "Resubmitting the form for an active lead creates no second opportunity and does not restart WF01",
      result: "PASS — no second opportunity, WF01 enrolment count unchanged. Tested for one open lead only",
    },
    {
      area: "FSS-REG-009 — Unbooked lead",
      whatWeVerify: "A lead who submits the form but never books keeps the unbooked tag with a New Lead opportunity",
      result: "PASS — tags, opportunity, and WF01 follow-up confirmed; no appointment created",
    },
    {
      area: "FSS-REG-010 — Attribution (Facebook UTM link)",
      whatWeVerify: "GHL captures utm_source, utm_medium, and utm_campaign from the campaign link",
      result:
        "BLOCKED — GHL recorded Campaign: Consultation and grouped the source as Paid Social; the raw source and medium values are not visible in the GHL interface, so an exact match could not be verified",
    },
    {
      area: "FSS-REG-011 — Reactivation guardrails",
      whatWeVerify: "Dormant-lead reactivation rules",
      result: "NOT TESTED — dormant reactivation was intentionally not built in this project",
    },
    {
      area: "FSS-REG-012 — Final regression",
      whatWeVerify: "Final state has no unintended Won records, no duplicate contacts or opportunities, and workflow counts that reconcile with the scenarios",
      result: "PASS — 7 opportunities (3 Won: 1 test conversion plus 2 pre-existing), 12 contacts, 9 appointments, all six regression workflows still published and unmodified",
    },
    {
      area: "WF07 — Facebook Comment Auto-Reply",
      whatWeVerify: "A comment on the Fairy Skin Studio Facebook page receives an automatic reply",
      result:
        "Verified live with one test comment (reply visible on the page). Built after the regression run, so it is not part of FSS-REG-001 to 012",
    },
  ],
  testingSummary:
    "A full regression pass (20 September 2026) ran 12 test cases against the live GHL sub-account using fictional UK test contacts, checking each result inside GHL rather than trusting workflow status alone. Ten cases passed, none failed, one was blocked (UTM attribution: the campaign was captured but the raw source and medium values could not be confirmed), and one was not tested (reactivation was intentionally not built). No workflows were changed during testing. Test emails used non-deliverable example addresses, so real email delivery is not claimed. WF07 was built after the regression run and is verified by one live comment reply only.",
  regressionReportHref: "/documents/Fairy_Skin_Studio_GHL_Regression_QA_Report.docx",
  regressionReportLabel: "Download regression QA report",
  screenshotsHeading: "Selected CRM & Automation Evidence",
  screenshotsDescription:
    "Screenshots from the Fairy Skin Studio GHL sub-account: the landing page and lead form, the seven published workflows and their builders, the opportunity pipeline after regression, and the Facebook comment auto-reply.",
  ctaTitle: "Need Consultations Booked Without the Manual Chasing?",
  ctaDescription:
    "Share how your clinic handles enquiries today and I'll map where a GHL pipeline and workflows like these can take over the repetitive follow-up.",
  disclosure: {
    label: "Simulated client engagement",
    detail:
      "A fictional Manchester aesthetics studio built to demonstrate a full GHL consultation-to-treatment system end-to-end — not a paid client deployment.",
  },
  safeguards: {
    boundaries:
      "Covers the consultation-to-treatment journey from enquiry to treatment conversion and review request, plus a Facebook comment auto-reply. It does not include reactivation of dormant leads, and real email delivery is not claimed because test contacts used non-deliverable example addresses.",
    exceptions:
      "Cancelled appointments and no-shows each start their own rebooking sequence, and a rebook exits recovery. Attending a consultation never moves an opportunity to Won — only an explicit treatment conversion does.",
    security:
      "Contact and appointment data stay inside the GHL CRM; no payment or card data passes through any of the seven workflows.",
  },
};
