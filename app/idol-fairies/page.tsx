import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Info, CheckCircle2 } from "lucide-react";
import { proofBanner, systemOverview } from "@/data/caseStudy";
import FadeIn from "@/components/FadeIn";
import SystemDiagram from "@/components/SystemDiagram";
import SolutionAreaTabs from "@/components/SolutionAreaTabs";
import DemoVideo from "@/components/DemoVideo";
import GithubIcon from "@/components/icons/GithubIcon";

export const metadata: Metadata = {
  title: "Idol Fairies — Finance & E-Commerce Automation Demo | MJ Ablanque",
  description:
    "A self-directed finance + e-commerce automation portfolio project, built with AI-assisted development: storefront, order processing, wholesale & receivables, refunds, an AI assistant, an admin dashboard, and owner reporting.",
};

export default function IdolFairiesPage() {
  return (
    <div>
      <section className="overflow-hidden bg-[var(--color-surface-alt)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/idol-fairies-logo.jpg"
                  alt="Idol Fairies logo"
                  width={44}
                  height={44}
                  className="rounded-xl"
                />
                <span className="inline-flex items-center rounded-full bg-[var(--color-primary-light)] px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                  Flagship Project
                </span>
              </div>
              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-6xl">
                Idol Fairies
              </h1>
              <p className="mt-5 text-xl leading-8 text-[var(--color-body)]">
                A connected e-commerce and finance system spanning storefront, orders, sales
                processing, inventory, finance operations, AI support, and owner reporting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://idolfairies.workflowlab.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                >
                  Visit Live Website <ExternalLink size={16} />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  Watch Demo <ArrowRight size={16} />
                </a>
              </div>
              <a
                href="https://github.com/workflowlab-tech/idol-fairies-storefront"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                <GithubIcon size={16} /> View project code on GitHub
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <a
              href="https://idolfairies.workflowlab.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-3 shadow-xl shadow-blue-950/10"
              aria-label="Open the live Idol Fairies storefront"
            >
              <Image
                src="/screenshots/storefront/home.png"
                alt="Live Idol Fairies storefront homepage"
                width={1920}
                height={1080}
                priority
                className="h-auto w-full rounded-2xl border border-[var(--color-border)] transition-transform duration-300 group-hover:scale-[1.01]"
              />
              <span className="flex items-center justify-between px-2 pb-1 pt-3 text-sm font-semibold text-[var(--color-ink)]">
                Actual live storefront <ExternalLink size={15} className="text-[var(--color-primary)]" />
              </span>
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-14">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <FadeIn>
            <div className="flex h-full items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-white px-5 py-4">
              <Info size={18} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
              <p className="text-sm leading-6 text-[var(--color-body)]">
                <strong className="font-semibold text-[var(--color-ink)]">Self-directed portfolio/demo project.</strong>{" "}
                It uses realistic simulated business data and is not presented as a live client deployment.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="flex h-full items-start gap-3 rounded-2xl bg-[var(--color-accent-green-light)] px-5 py-4">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-green)]" />
              <p className="text-sm leading-6 text-[var(--color-ink)]">
                <strong className="font-semibold">{proofBanner.headline}</strong>{" "}
                <span className="text-[var(--color-body)]">({proofBanner.date})</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              See the automation in action
            </h2>
            <p className="mt-3 text-[var(--color-body)]">
              A walkthrough of the customer journey, checkout flow, and n8n automation from trigger
              to completion.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100} className="mt-8">
          <DemoVideo />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              One connected system, not a pile of separate automations
            </h2>
            <p className="mt-4 text-[var(--color-body)]">{systemOverview.paragraph1}</p>
            <p className="mt-3 text-[var(--color-body)]">{systemOverview.paragraph2}</p>
          </div>
        </FadeIn>

        <FadeIn delay={120} className="mt-10">
          <SystemDiagram />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-3xl">
              Explore each part of the system
            </h2>
            <p className="mt-3 text-[var(--color-body)]">
              Every area below follows the same pattern: the business problem, what it does, what
              changes, and the proof — with the technical detail one click away for anyone who
              wants it.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100} className="mt-10">
          <SolutionAreaTabs />
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[var(--color-ink)] px-8 py-14 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-white">Want something like this for your business?</h2>
              <p className="mt-2 max-w-xl text-slate-300">
                This is what a manual process looks like once it&rsquo;s automated properly — tell
                me about yours.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              Talk to me about your process
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
