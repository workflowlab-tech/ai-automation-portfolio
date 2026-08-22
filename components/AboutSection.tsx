import Image from "next/image";
import { Landmark, ShoppingBag, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import FadeIn from "./FadeIn";
import CredentialsRow from "./CredentialsRow";

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

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-[var(--color-border)] bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[260px_1fr] lg:items-start">
        <FadeIn>
          <div className="mx-auto w-52 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] shadow-sm lg:w-full">
            <Image
              src="/about/mj-ablanque.png"
              alt={`${site.name} — portrait`}
              width={560}
              height={628}
              className="h-auto w-full object-cover"
            />
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={80}>
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
              About
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Business Experience Behind the Automation
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-body)]">
              I&rsquo;m {site.name} — an AI Automation Specialist with a finance and accounting
              background and hands-on e-commerce experience. I understand the business process
              first, then use automation to improve it.
            </p>
          </FadeIn>

          <FadeIn delay={140} className="mt-7">
            <div className="rounded-2xl bg-[var(--color-accent-blue-light)] px-6 py-5 sm:px-8">
              <p className="text-lg font-medium leading-8 text-[var(--color-ink)]">
                I build solutions that solve real business problems — not automations for the sake
                of automation.
              </p>
            </div>
          </FadeIn>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <FadeIn key={pillar.title} delay={180 + index * 70}>
                <article className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                  <pillar.icon size={21} strokeWidth={1.75} className="text-[var(--color-primary)]" />
                  <h3 className="mt-3 text-base font-semibold text-[var(--color-ink)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">{pillar.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <CredentialsRow />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
