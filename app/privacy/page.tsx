import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — MJ Ablanque",
  description: "How this website and MJ Ablanque's personal Job Agent tool handle personal data and Google user data.",
};

const LAST_UPDATED = "12 October 2026";
const CONTACT_EMAIL = "mjablanque97@gmail.com";

const sections = [
  {
    title: "This website",
    body: [
      "This portfolio does not use advertising trackers. If you send a message through the contact form or chat assistant, the details you provide (such as your name, email, and message) are used only to reply to your inquiry and are not sold or shared with third parties.",
    ],
  },
  {
    title: "Job Agent (personal Google Workspace integration)",
    body: [
      `Job Agent is a private tool used only by ${site.fullName} to manage her own job applications. It is not offered to the public, and the only Google account it accesses is her own.`,
      "With her permission, it reads job-alert and employer emails in her Gmail account, labels them, and sends job applications and a daily summary from her account. Email content is processed to track applications and is stored in a private database that only she can access.",
      "Job Agent's use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements. Google user data is not sold, not used for advertising, and not used to train generalized AI models.",
      "Access can be revoked at any time from the Google Account permissions page (myaccount.google.com/permissions). On request, stored data is deleted.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">Privacy</span>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[var(--color-ink)]">Privacy Policy</h1>
      <p className="mt-3 text-sm text-[var(--color-body)]">Last updated: {LAST_UPDATED}</p>
      {sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">{section.title}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-[var(--color-body)]">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Contact</h2>
        <p className="mt-4 leading-7 text-[var(--color-body)]">
          Questions or deletion requests: <a className="text-[var(--color-primary)] underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </section>
    </div>
  );
}
