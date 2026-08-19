import type { Metadata } from "next";
import { Mail, FileText, Clock } from "lucide-react";
import { site } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import GithubIcon from "@/components/icons/GithubIcon";

export const metadata: Metadata = {
  title: "Contact — Mary Joyce Ablanque",
  description: "Talk to me about your finance or e-commerce process — see if automation is a good fit.",
};

const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Project inquiry from your portfolio"
)}&body=${encodeURIComponent(
  "Hi Mary Joyce,\n\nHere's what my process looks like today:\n\n\nHere's what I'm hoping to automate:\n\n"
)}`;

const promptQuestions = [
  "What does the process look like today, step by step?",
  "Roughly how much time does it eat per week?",
  "What tools are already in the mix (spreadsheets, email, a specific platform)?",
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <FadeIn>
        <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          Contact
        </span>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)]">
          Talk to me about your process
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-body)]">
          Whether it&rsquo;s a freelance project, a finance/e-commerce automation build, or an AI
          Automation Specialist / n8n role — tell me what&rsquo;s manual today, and I&rsquo;ll give
          you a straight answer on whether automation is a good fit.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <a
            href={mailtoHref}
            className="flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                <Mail size={22} strokeWidth={1.75} />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-[var(--color-ink)]">Email me directly</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">
                Opens your email app with a starter template — three quick questions to get to a
                useful answer faster.
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold text-[var(--color-primary)]">{site.email} →</p>
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                <GithubIcon size={22} />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-[var(--color-ink)]">See the code</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">
                The Idol Fairies storefront, the n8n workflows, and this portfolio site are all on
                GitHub if you want to look under the hood first.
              </p>
            </div>
            <p className="mt-6 text-sm font-semibold text-[var(--color-primary)]">
              github.com/{site.githubHandle} →
            </p>
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={180}>
        <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-7">
          <p className="text-sm font-semibold text-[var(--color-ink)]">
            Before you write in, it helps to know:
          </p>
          <ul className="mt-3 space-y-2">
            {promptQuestions.map((q) => (
              <li key={q} className="text-sm text-[var(--color-body)]">
                • {q}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>

      <FadeIn delay={240}>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-[var(--color-body)]">
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-[var(--color-muted)]" />
            Usually replies within 1–2 business days
          </span>
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-medium text-[var(--color-primary)] hover:underline"
          >
            <FileText size={16} />
            Download resume
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
