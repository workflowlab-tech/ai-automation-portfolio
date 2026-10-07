import type { Project } from "./projects";

const img = (file: string) => `/projects/ghl-fairy-skin/${file}`;

export const ghlFairySkinProject: Project = {
  slug: "ghl-fairy-skin-consultation-to-treatment",
  category: "UK Aesthetics Clinic | GoHighLevel CRM & Automation",
  title: "Fairy Skin Studio — GHL Consultation-to-Treatment Automation",
  workflowCountLabel: "11 Workflows: WF01–WF10 (incl. WF02B)",
  tools: [
    "GoHighLevel",
    "CRM Automation",
    "Workflow Automation",
    "Pipeline Management",
    "Appointment Automation",
    "Funnel / Form Integration",
    "Email/SMS Workflow Design",
    "Consent-Based Messaging",
    "Custom Values & Snapshots",
    "Social Planner",
    "Facebook Comment Auto-Reply",
    "QA / Regression Testing",
  ],
  overview:
    "A UK aesthetics-clinic consultation-to-treatment system for Fairy Skin Studio, built end-to-end in GoHighLevel — from a branded landing page and booking form through consultation attendance, treatment conversion, filtered reviews, rebooking, and social engagement.",
  headerOverview:
    "A GHL consultation-to-treatment system for a fictional Manchester aesthetics studio: a branded landing page feeds native lead capture and the booking calendar, one opportunity tracks each client journey from New Lead to Treatment Converted, and single-purpose workflows handle booking, cancellations, no-shows, attendance, and post-conversion — plus a closing sequence for clients still deciding, consent-based SMS, a filtered review request, rebooking and 90-day reactivation, a Facebook comment auto-reply, and scheduled social posts.",
  problem:
    "A skin clinic needs to turn enquiries into booked consultations and, later, treatments — without losing leads who never book, chasing cancellations by hand, or counting a consultation attendance as a sale.",
  solution:
    "Eleven single-purpose GoHighLevel workflows (WF01–WF10, plus WF02B), organised into numbered folders, connect the landing page, form, and calendar to one opportunity per client journey. Booking, cancellation, no-show, and attendance each have their own rules, and only an explicit treatment conversion moves an opportunity to Won. Text messages and marketing emails only go to clients who ticked the matching consent box, and every name, link, and address comes from Custom Values so the system can be re-branded for a new clinic.",
  result:
    "A lead can move from a landing-page enquiry through booking, attendance, and treatment conversion on a single opportunity, with recovery sequences for cancellations and no-shows — verified in a 12-case regression that now stands at 12 passed, 0 failed after the UTM and reactivation cases were re-run live on 7 October 2026. The upgraded consent, closing, conversion, and rebooking workflows were also run live with real test inboxes.",
  role: "GoHighLevel automation builder & QA tester",
  contributions: [
    "Built the Fairy Skin Studio landing page and connected the native consultation form and booking calendar.",
    "Configured the Consultation to Treatment pipeline: New Lead, Consultation Booked, Consultation Completed, Considering Treatment, Treatment Converted.",
    "Built WF01 (Lead Intake & Unbooked Follow-Up) and WF02 (Consultation Booked & Reminders).",
    "Built WF03 (Cancellation Recovery), WF04 (No-Show Recovery), WF05 (Showed / Post-Consultation), and WF06 (Treatment Converted & Post-Conversion).",
    "Built WF07 (Facebook Comment Auto-Reply) and scheduled brand posts in Social Planner.",
    "Ran a 12-case regression on 20 September 2026 using fictional UK test contacts, verifying each result inside GHL.",
    "Upgraded the build (27 September 2026): Skin Concern, SMS-consent, and marketing-consent fields plus hidden UTM fields on the form; consent checks before every text or marketing email; WF02B (Confirm by Reply); a rating filter in WF06; WF08 (Rebooking & 90-Day Reactivation); and WF09 (Considering Treatment Closing Sequence).",
    "Saved the build as a GHL snapshot and test-imported it into a blank sub-account (6 October 2026): all workflows came across intact.",
    "Closed the remaining gaps (7 October 2026): WF10 stops the rebooking and 90-day emails as soon as a client books again; WF06 now takes converted clients out of the 'still considering?' sequence; an owner dashboard shows leads by source and UTM, appointments booked versus showed, and won deals.",
    "Re-ran the upgraded build live on 7 October 2026 with three new test contacts and real test inboxes (marketing consent yes, no consent, converted client), then refreshed the snapshot to v3.",
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
    available: true,
    posterSrc: "/videos/ghl-fairy-skin-demo-thumbnail.jpg",
    videoSrc: "https://igsavpvqpxgcnntciudo.supabase.co/storage/v1/object/public/portfolio-videos/ghl-fairy-skin-demo.mp4",
  },
  liveSiteHref: "https://fairyskin.workflowlab.site/",
  viewProjectHref: "/projects/ghl-fairy-skin-consultation-to-treatment",
  howItWorks: {
    shared: [
      "Capture — A visitor completes the consultation form on the landing page. GHL creates the contact, WF01 tags the lead as unbooked, opens one opportunity at New Lead (or reuses the open one), and alerts staff. The booking email always goes out; the two unbooked follow-ups only go to leads who gave marketing consent.",
      "Book — Booking on the consultation calendar fires WF02: it removes the unbooked tag, takes the contact out of WF01, WF03, and WF04, moves the opportunity to Consultation Booked, and queues a confirmation plus 24-hour and 1-hour reminders. Clients with SMS consent also get a 'Reply YES to confirm' text, and WF02B marks the appointment confirmed and alerts staff when they reply YES.",
      "Cancelled or no-show — WF03 and WF04 each send a three-step rebooking sequence and leave the opportunity where it is. Rebooking creates a new appointment on the same contact and opportunity, and WF02 takes the contact out of recovery.",
      "Showed — WF05 removes the contact from the booking and recovery workflows and moves the opportunity to Consultation Completed, still Open. Attending a consultation is never treated as a sale.",
      "Close — Clients moved to Considering Treatment enter WF09: a treatment-plan email, a day-2 staff call alert, and (with marketing consent) two check-in emails. It stops as soon as the client replies or converts.",
      "Convert — Moving the opportunity to Treatment Converted with status Won fires WF06: a thank-you, a day-2 aftercare email, then a 1–5 rating text (with SMS consent). A 4 or 5 gets the review link; anything else alerts the owner. Clients without SMS consent get a review email instead.",
      "Rebook — WF08 sends a rebooking reminder 28 days after conversion and a reactivation email at day 90, only to clients with marketing consent. WF10 removes the client from it the moment they book a new appointment.",
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
      src: img("workflow-folders.jpg"),
      label: "Workflows organised into numbered folders — Intake, Booking, Outcomes, Conversion, Nurture, Social",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf01-lead-intake-v2.jpg"),
      label: "WF01 — Consult Lead Intake & Unbooked (staff alert, booking email, follow-ups only with marketing consent)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf02-booked-reminders-v2.jpg"),
      label: "WF02 — Consult Booked & Reminders (24h email; with SMS consent, a 'Reply YES' confirmation and 1h SMS)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf03-cancellation-recovery-v2.jpg"),
      label: "WF03 — Consult Cancelled Recovery (three-step rebooking sequence)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf04-no-show-recovery-v2.jpg"),
      label: "WF04 — Consult No-Show Recovery (three-step rebooking sequence)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf05-consult-showed-v2.jpg"),
      label: "WF05 — Consult Showed (clears booking and recovery workflows, moves to Consultation Completed)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf09-considering-treatment.jpg"),
      label: "WF09 — Considering Treatment Closing Sequence (treatment-plan email, day-2 staff call alert, check-ins)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf06-treatment-converted-v3.jpg"),
      label: "WF06 — Treatment Converted (removes the contact from WF09, aftercare email, rating SMS; 4–5 gets the review link, anything else alerts the owner)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf08-rebooking-reactivation.jpg"),
      label: "WF08 — Rebooking & 90-Day Reactivation (marketing consent only)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf10-stop-rebook.jpg"),
      label: "WF10 — Stop Rebook Reminders (an inbound reply or a new booking removes the client from WF08)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf07-facebook-comment-reply-v2.jpg"),
      label: "WF07 — Facebook Comment Reply (Fairy Skin Studio page trigger, Respond On Comment)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("opportunity-pipeline-final.jpg"),
      label: "Opportunity pipeline after regression — one opportunity per test contact, no duplicates",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("owner-view-dashboard.jpg"),
      label: "Clinic Owner View dashboard — contacts by source, appointments, no-shows, won opportunities, and leads by UTM source (test data)",
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
        "PASS (re-run 7 Oct 2026) — hidden UTM fields were added to the form; three test submissions saved utm_source, utm_medium, and utm_campaign exactly, and they appear on the owner dashboard. (First run on 20 Sep was blocked: the form had no UTM fields yet)",
    },
    {
      area: "FSS-REG-011 — Reactivation guardrails",
      whatWeVerify: "Dormant-lead reactivation rules",
      result: "PASS (re-run 7 Oct 2026) — a converted client with marketing consent entered WF08 and is waiting for the day-28 rebooking email; a converted client without consent was stopped at the consent check; booking a new appointment removed the client from WF08 (WF10)",
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
    {
      area: "Upgrade build check (27 Sep) — consent, WF02B, WF06 rating filter, WF08, WF09",
      whatWeVerify: "Each new or changed workflow is wired correctly: triggers, consent checks, branches, and Custom Value links",
      result:
        "PASS live (7 Oct 2026) — WF01: a consented lead is queued for follow-ups, a non-consented lead got the booking email only. WF09: treatment-plan email delivered, day-2 alert queued, and converted clients are removed. WF06: thank-you email delivered, day-2 aftercare queued. WF02: booking confirmation delivered for a client with no SMS consent (24-hour email due 7 Oct). SMS still needs a phone number",
    },
    {
      area: "Snapshot test-import (6 Oct)",
      whatWeVerify: "The saved snapshot loads into a blank sub-account with every workflow and folder intact",
      result: "PASS — all [MS] workflows (WF01–WF09) imported; Custom Values arrive empty and are filled during client setup",
    },
  ],
  testingSummary:
    "A full regression pass (20 September 2026) ran 12 test cases against the live GHL sub-account using fictional UK test contacts, checking each result inside GHL rather than trusting workflow status alone. Ten cases passed, none failed, one was blocked (UTM attribution) and one was not tested (reactivation was not built yet). Both were re-run live on 7 October 2026 after the upgrade and passed. No workflows were changed during testing. Test emails used non-deliverable example addresses, so real email delivery is not claimed. WF07 was built after the regression run and is verified by one live comment reply only. The 27 September upgrade (consent checks, WF02B, the review filter, WF08, and WF09) was run live on 7 October with three new test contacts and real test inboxes: every consent check took the right branch, emails were delivered, and two small gaps were fixed (WF10 and the WF09 removal). Its text messages still need a phone number to deliver. The finished build was saved as a snapshot, test-imported into a blank sub-account on 6 October, and refreshed to v3 on 7 October.",
  regressionReportHref: "/documents/Fairy_Skin_Studio_GHL_Regression_QA_Report.docx",
  regressionReportLabel: "Download regression QA report",
  screenshotsHeading: "Selected CRM & Automation Evidence",
  screenshotsDescription:
    "Screenshots from the Fairy Skin Studio GHL sub-account: the landing page and lead form, the numbered workflow folders, the builder for each workflow, the opportunity pipeline after regression, and the Facebook comment auto-reply.",
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
      "Covers the consultation-to-treatment journey from enquiry to treatment conversion and review request, plus a Facebook comment auto-reply. It includes rebooking and 90-day reactivation for converted clients, but not a campaign for old dormant leads. The 20 September regression used non-deliverable example addresses; the 7 October re-run used real test inboxes. Text messages need a phone number to deliver.",
    exceptions:
      "Cancelled appointments and no-shows each start their own rebooking sequence, and a rebook exits recovery. Attending a consultation never moves an opportunity to Won — only an explicit treatment conversion does. Clients only get texts or marketing emails they consented to, and unhappy ratings go to the owner instead of a public review link.",
    security:
      "Contact and appointment data stay inside the GHL CRM; no payment or card data passes through any workflow.",
  },
};
