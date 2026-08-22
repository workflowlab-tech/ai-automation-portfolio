import type { Metadata } from "next";
import Image from "next/image";
import { Landmark, ShoppingBag, Sparkles, FileText } from "lucide-react";
import { site } from "@/data/site";
import FadeIn from "@/components/FadeIn";
import CredentialsRow from "@/components/CredentialsRow";

export const metadata: Metadata = {
  title: "About — MJ Ablanque",
  description:
    "Finance & accounting background, hands-on e-commerce experience, and AI automation — the business experience behind the automation.",
};

const pillars = [
  {
    icon: Landmark,
    title: "Finance & Accounting",
    body: "Order-to-Cash, Accounts Payable, payroll support, reconciliation.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Operations",
    body: "Shopify, Shopee, Lazada, orders, inventory, customer service.",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    body: "n8n, APIs, webhooks, AI workflows, reporting, process improvement.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:items-start">
        <FadeIn>
          <div className="mx-auto w-56 overflow-hidden rounded-3xl border border-[var(--color-border)] shadow-sm lg:w-full">
            <Image
              src="/about/mj-ablanque.png"
              alt={`${site.name} — portrait`}
              width={560}
              height={628}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={80}>
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              About
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Business Experience Behind the Automation
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-body)]">
              I&rsquo;m {site.name} — an AI Automation Specialist with a finance and accounting
              background and hands-on e-commerce experience. I understand the business process
              first, then use automation to solve it.
            </p>
          </FadeIn>

          <FadeIn delay={140} className="mt-10">
            <div className="rounded-2xl bg-[var(--color-accent-blue-light)] px-6 py-6 sm:px-8">
              <p className="text-lg font-medium leading-8 text-[var(--color-ink)]">
                &ldquo;I build solutions that solve real business problems — not automations for the
                sake of automation.&rdquo;
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={180 + i * 80}>
                <div className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
                  <pillar.icon size={22} strokeWidth={1.75} className="text-[var(--color-primary)]" />
                  <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">{pillar.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={420} className="mt-10">
            <CredentialsRow />
          </FadeIn>

          <FadeIn delay={460} className="mt-6">
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              <FileText size={16} />
              Download resume
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
