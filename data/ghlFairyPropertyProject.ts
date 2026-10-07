import type { Project } from "./projects";

const img = (file: string) => `/projects/ghl-fairy-property/${file}`;

export const ghlFairyPropertyProject: Project = {
  slug: "ghl-fairy-property-lead-activation",
  category: "Australian Real Estate | GoHighLevel CRM & Automation",
  title: "Fairy Property Group — GHL Lead Activation & Qualification System",
  workflowCountLabel: "12 Workflows: WF01–WF10 (WF05 A/B/C)",
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
    "Email/SMS Workflow Design",
    "Seller Appraisal & Open Home Forms",
    "Custom Values & Snapshots",
    "QA / Regression Testing",
  ],
  overview:
    "A Sydney real-estate lead activation system for Fairy Property Group, built in GoHighLevel — a branded 3-step enquiry funnel, buyer qualification by purchase timeline, old-database reactivation, seller appraisals, open-home follow-up, consultation booking, and agent handoff.",
  headerOverview:
    "A GHL buyer and investor system for a fictional Sydney agency: a 3-step funnel on a custom domain captures the enquiry and books a consultation, new leads are qualified as Hot, Warm, or Cold by purchase timeline, an existing database is reactivated with reply-based routing, and hot leads or anyone asking for a person are handed to an agent with the automations stopped. Sellers get their own appraisal form, pipeline, and nurture, and open-home visitors check in by form and are fed straight into buyer qualification.",
  problem:
    "Real-estate agencies sit on old buyer databases that are never followed up, and new enquiries get the same generic reply whether the buyer is ready now or in a year — so hot buyers wait and cold ones get chased.",
  solution:
    "Twelve single-purpose GoHighLevel workflows, organised into numbered folders, connect a 3-step funnel and two new forms (Seller Appraisal and Open Home Check-in) to a Buyer/Investor pipeline and a separate Appraisal pipeline. New leads are classified by timeline, old contacts are reactivated with reply routing and DND guardrails, bookings get confirmations and reminders, and appointment outcomes and agent handoffs each have their own rules.",
  result:
    "A buyer can move from a funnel enquiry through qualification, agent handoff, and a booked consultation on one contact and one opportunity — verified end to end on the live domain. Of the 12 regression cases, 11 have now passed and none failed; only reactivation reply routing is still untested, because it needs real inbound texts. The seller appraisal, open-home, and stop-nurture workflows passed their own live tests, and the full build is saved as a snapshot that imported cleanly into a blank sub-account.",
  role: "GoHighLevel automation builder & QA tester",
  contributions: [
    "Set up the CRM foundation: 8 custom fields, the Buyer/Investor pipeline, tags, 6 Smart Lists, and 15 realistic historical contacts (two on DND to prove the guardrails).",
    "Configured the Buyer Consultation calendar (30 min, Sydney time, Mon–Fri) used by the funnel and the workflows.",
    "Built WF01 (New Lead Intake), WF02 (Qualification & Classification), WF03 (Existing Database Reactivation), and WF06 (Agent Handoff & Follow-Up).",
    "Built WF04 (Booking & Reminders) and split appointment outcomes into WF05a Showed, WF05b Cancelled, and WF05c No-Show.",
    "Generated the 3-step funnel in GHL AI Studio, then fixed its build, branding, and copy by hand in the code editor and connected it to property.workflowlab.site via Cloudflare.",
    "Configured a Conversation AI qualification assistant (booking and human-handoff actions), kept switched off to avoid per-reply charges.",
    "Ran a 12-case end-to-end regression on 25 September 2026 on the live domain, verifying each result inside GHL, then fixed four minor issues it found.",
    "Added the seller side (3 October 2026): a Seller Appraisal Form, a 6-stage Appraisal pipeline, WF07 (Seller Appraisal Intake), and WF08 (Post-Appraisal Nurture with a monthly market check-in).",
    "Added open-home follow-up: an Open Home Check-in form and WF09, which creates the buyer opportunity, sends a thank-you, alerts the agent on day 2, and hands the buyer to WF02 qualification based on their buying status.",
    "Added Purchased and Lost stages to the Buyer/Investor pipeline, hidden UTM fields and consent checkboxes on both new forms, and moved names, phone numbers, and links into Custom Values.",
    "Saved the build as a GHL snapshot and test-imported it into a blank sub-account (6 October 2026): all 11 workflows, 3 pipelines, and both forms came across with their links intact.",
    "Closed the remaining gaps (7 October 2026): WF10 stops the seller nurture once a seller lists, signs a listing agreement, or is lost; WF02 now re-qualifies returning buyers; the seller form has its own optional SMS consent box, and WF07 only texts sellers who tick it; an owner dashboard shows leads by source and UTM, appointments, and won or lost deals.",
    "Re-ran the untested cases live on 7 October 2026 (Warm, Cold, and Missing-info qualification, the 24-hour reminder, the SMS consent gate, and the seller nurture start and stop) and refreshed the snapshot to v3.",
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
      "Outcomes — WF05A (Showed) moves the opportunity to Appointment Completed and keeps it Open, WF05B (Cancelled) stops the reminders and sends a rebooking link, and WF05C (No-Show) stops the reminders, sends a 'sorry we missed you' email, and creates a call task.",
      "Sellers — The Seller Appraisal Form fires WF07: it opens an opportunity in the Appraisal pipeline, emails the next steps and booking link, alerts agents to call within five minutes, and texts the seller only if they ticked the SMS consent box. When the appraisal is marked done, WF08 sends follow-up emails on days 2, 7, and 21, then a market check-in every month until the seller replies. WF10 stops that nurture as soon as the seller signs a listing agreement, is listed, or is marked lost.",
      "Open homes — Visitors check in on the Open Home form. WF09 opens a buyer opportunity, sends a same-day thank-you, alerts the agent on day 2, and sets the purchase timeline from their buying status, which starts WF02 qualification.",
    ],
  },
  screenshots: [
    {
      type: "image",
      src: img("fairy-property-landing-page-v2.jpg"),
      label: "Fairy Property Group enquiry funnel on property.workflowlab.site",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("workflow-folders.jpg"),
      label: "Workflows organised into numbered folders — Intake, Booking, Outcomes, Handoff, Nurture",
      aspect: "wide",
    },
    {
      type: "image",
      src: img("wf01-lead-intake-v2.jpg"),
      label: "WF01 — Lead Intake & Speed-to-Lead (Lifecycle, opportunity, instant email and SMS, agent alert)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf02-qualification-v2.jpg"),
      label: "WF02 — Lead Qualification (Stop / Hot / Warm / Cold / Missing-info branches, monthly cold check-in loop)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf07-seller-appraisal-intake.jpg"),
      label: "WF07 — Seller Appraisal Intake (appraisal opportunity, confirmation email, speed-to-lead SMS, agent alert)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf08-post-appraisal-nurture.jpg"),
      label: "WF08 — Post-Appraisal Nurture (day 2, 7, and 21 emails, then a monthly market check-in)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf09-open-home-follow-up.jpg"),
      label: "WF09 — Open Home Follow-up (buyer opportunity, thank-you email, day-2 agent call, hand-off to WF02)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf03-database-reactivation-v2.jpg"),
      label: "WF03 — Database Reactivation (eligibility gate, wait for reply, reply routing)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf04-booking-reminders-v2.jpg"),
      label: "WF04 — Consult Booked & Reminders (stop follow-ups, confirmation, 24h and 1h reminders)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf05a-consult-showed-v2.jpg"),
      label: "WF05A — Consult Showed (Appointment Completed, kept Open, follow-up task)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf05b-consult-cancelled-v2.jpg"),
      label: "WF05B — Consult Cancelled (stop reminders, rebooking email)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf05c-consult-no-show-v2.jpg"),
      label: "WF05C — Consult No-Show (stop reminders, missed-you email, call task)",
      aspect: "portrait",
    },
    {
      type: "image",
      src: img("wf06-agent-handoff-v2.jpg"),
      label: "WF06 — Agent Handoff (stop automations, assign owner, alert, call task)",
      aspect: "portrait",
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
      result: "PASS (24-hour) — re-run 7 Oct 2026: a consultation booked ~30 hours ahead received the 24-hour reminder email on time. The 1-hour reminder is due 8 Oct",
    },
    {
      area: "FPG-REG-011 — Reactivation reply routing (WF03)",
      whatWeVerify: "YES / NOT YET / NO / STOP / unclear replies each take the right branch",
      result: "NOT EXECUTED — needs real inbound replies; branch logic reviewed in the builder",
    },
    {
      area: "FPG-REG-012 — Warm, Cold, and Missing-info branches (WF02)",
      whatWeVerify: "3–12 month, 12+ month, and incomplete leads take their own branch",
      result: "PASS — re-run 7 Oct 2026: a 3–6 month lead was marked Warm, a 12+ month lead was marked Cold and got the long-term nurture email, and a lead with no timeline got the one 'quick question' email",
    },
    {
      area: "Issues found & fixed after the regression",
      whatWeVerify: "Wording and consistency problems spotted during the run",
      result:
        "Fixed: booking-page timezone label, 'Sydney time' in reminder emails (GHL shows the contact's local time), inconsistent opportunity naming, and leftover AI Studio page metadata",
    },
    {
      area: "Seller Appraisal Form → WF07 (3 Oct)",
      whatWeVerify: "A form submission opens an Appraisal opportunity, sends the confirmation email with Custom Values filled in, and alerts agents",
      result:
        "PASS — opportunity created at Appraisal Requested, email delivered with business name, phone, and booking link rendered, agent alert sent. The SMS step was skipped (no phone number in the account)",
    },
    {
      area: "Open Home Check-in → WF09 (3–5 Oct)",
      whatWeVerify: "Thank-you email, day-2 agent alert, and hand-off to WF02 by setting the purchase timeline",
      result:
        "PASS — thank-you email delivered, day-2 alert sent, timeline set to 3–6 months, and WF02's trigger fired. WF02 skipped this contact only because the same test contact had already been through WF02 (re-entry is off); a new buyer enters normally",
    },
    {
      area: "SMS consent gate on the seller form (7 Oct)",
      whatWeVerify: "Only sellers who tick the optional SMS consent box get the speed-to-lead text; everyone still gets the email and the agent alert",
      result: "PASS — consent ticked: SMS step ran (not delivered: no number in the account); not ticked: no SMS; email and agent alert sent for both",
    },
    {
      area: "Seller nurture start and stop — WF08 / WF10 (7 Oct)",
      whatWeVerify: "Marking an appraisal done starts the nurture; moving the seller to Listed stops it",
      result: "PASS — Appraisal Done enrolled the seller in WF08; moving to Listed removed them via WF10",
    },
    {
      area: "UTM capture + owner dashboard (7 Oct)",
      whatWeVerify: "UTM source, medium, and campaign from the form link are saved on the contact and shown on the dashboard",
      result: "PASS — seller-form leads show qa_test / email / campaign on the contact and in the dashboard's 'Leads by UTM Source' chart. The coded buyer funnel page does not yet pass UTMs through (per-client setup)",
    },
    {
      area: "Snapshot test-import (6 Oct)",
      whatWeVerify: "The saved snapshot loads into a blank sub-account with workflows, pipelines, and forms still linked",
      result:
        "PASS — all 11 [RE] workflows, 3 pipelines, and both new forms imported; WF07's trigger and opportunity step still point at the imported form and Appraisal pipeline. Custom Values arrive empty and are filled during client setup",
    },
  ],
  testingSummary:
    "A full end-to-end regression (25 September 2026) ran 12 test cases on the live domain with one test contact, checking each result inside GHL rather than trusting workflow status alone. Nine cases passed, none failed, and three were not executed live at first; on 7 October the Warm/Cold/Missing-info branches and the 24-hour reminder were run live and passed, leaving only reactivation reply routing (it needs real inbound texts). Six emails were delivered to a real test inbox; no SMS was sent, because the sub-account has no purchased phone number. Four minor issues found during the run were fixed afterwards. The seller appraisal and open-home workflows added on 3 October were each tested live with a form submission: emails were delivered with every Custom Value filled in, and the open-home hand-off to qualification was confirmed on day 2. On 7 October the SMS consent gate, the seller nurture start and stop, and UTM capture also passed. The finished build was saved as a snapshot, test-imported into a blank sub-account on 6 October, and refreshed to v3 on 7 October.",
  regressionReportHref: "/documents/Fairy_Property_Group_GHL_Regression_QA_Report.docx",
  regressionReportLabel: "Download regression QA report",
  screenshotsHeading: "Selected CRM & Automation Evidence",
  screenshotsDescription:
    "Screenshots from the Fairy Property Group GHL sub-account: the live enquiry funnel, the numbered workflow folders, and the builder for the main workflows, including the new seller appraisal, post-appraisal nurture, and open-home follow-up.",
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
      "Covers buyer and investor enquiries, qualification, database reactivation, agent handoff, and consultation booking. Speed-to-lead and appraisal text messages are built, but none are delivered until a phone number is connected (SMS is live-tested at client launch on the client's number), and the Conversation AI assistant is built but switched off.",
    exceptions:
      "Contacts on DND or already handed to an agent are stopped before any outreach; replying STOP turns on DND; booking or handoff stops the other follow-ups so a buyer is never chased twice; attending a consultation never marks the opportunity Won; sellers are only texted if they gave SMS consent, and the seller nurture stops once they list or are lost.",
    security:
      "Contact data stays inside the GHL CRM, the funnel and both new forms ask for consent before contact, and no payment or card data passes through any workflow.",
  },
};
