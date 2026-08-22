import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  ChartNoAxesCombined,
  FileText,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  Rocket,
  Settings2,
  ShoppingCart,
  Target,
} from "lucide-react";
import { site } from "@/data/site";
import FadeIn from "./FadeIn";

const pillars = [
  {
    icon: Landmark,
    title: "Finance & Accounting",
    body: "Order-to-Cash, Accounts Payable, payroll support, reconciliation.",
    accent: "text-blue-700",
    iconBackground: "bg-blue-50",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Operations",
    body: "Shopify, Shopee, Lazada, orders, inventory, customer service.",
    accent: "text-cyan-600",
    iconBackground: "bg-cyan-50",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    body: "n8n, APIs, webhooks, AI workflows, reporting, process improvement.",
    accent: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

const strengths = [
  { icon: Target, label: "Business-Driven\nThinker" },
  { icon: Settings2, label: "Process\nOptimizer" },
  { icon: ChartNoAxesCombined, label: "Automation for\nImpact" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-hidden border-y border-[var(--color-border)] bg-slate-50/70 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-4 shadow-[0_24px_70px_-35px_rgba(15,23,42,0.35)] sm:p-7 lg:p-8">
          <div className="pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full border border-blue-100" />
          <div className="pointer-events-none absolute right-7 top-7 grid grid-cols-4 gap-3 opacity-50" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} className="h-1 w-1 rounded-full bg-blue-200" />
            ))}
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[330px_minmax(0,1fr)] lg:items-stretch">
            <FadeIn>
              <aside className="h-full overflow-hidden rounded-[1.75rem] border border-slate-100 bg-gradient-to-b from-blue-50 to-white shadow-lg shadow-slate-200/70">
                <div className="flex h-full flex-col items-center px-6 pb-7 pt-8">
                  <div className="relative h-52 w-52 overflow-hidden rounded-full border-[7px] border-white bg-blue-100 shadow-[0_15px_38px_-16px_rgba(29,78,216,0.55)] sm:h-56 sm:w-56">
                    <Image
                      src="/about/mj-ablanque-profile.jpeg"
                      alt={`${site.fullName} — portrait`}
                      fill
                      sizes="(max-width: 640px) 208px, 224px"
                      className="object-cover object-[center_18%]"
                    />
                  </div>

                  <h3 className="mt-6 text-center text-3xl font-bold tracking-tight text-blue-700">
                    {site.name}
                  </h3>
                  <p className="mt-1 text-center text-base font-medium text-[var(--color-body)]">
                    {site.role}
                  </p>
                  <span className="mt-5 h-0.5 w-10 bg-blue-600" aria-hidden="true" />

                  <div className="mt-6 grid w-full grid-cols-3 divide-x divide-slate-200">
                    {strengths.map((strength) => (
                      <div key={strength.label} className="px-2 text-center">
                        <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-200">
                          <strength.icon size={19} strokeWidth={1.9} aria-hidden="true" />
                        </span>
                        <p className="mt-3 whitespace-pre-line text-[11px] font-medium leading-4 text-slate-700 sm:text-xs">
                          {strength.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto w-full pt-8">
                    <div className="rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                        Quick Profile
                      </p>
                      <div className="mt-3 space-y-3 text-sm text-slate-700">
                        <div className="flex items-center gap-3">
                          <MapPin size={17} className="shrink-0 text-blue-600" aria-hidden="true" />
                          <span>{site.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <GraduationCap size={18} className="shrink-0 text-blue-600" aria-hidden="true" />
                          <span>BS Accountancy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </FadeIn>

            <div className="flex min-w-0 flex-col py-1 lg:py-2">
              <FadeIn delay={80}>
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-blue-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden="true" />
                  About Me
                </div>
                <span className="mt-3 block h-px w-24 bg-blue-500" aria-hidden="true" />

                <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-[var(--color-ink)] sm:text-5xl">
                  Business Experience Behind the{" "}
                  <span className="text-blue-600">Automation</span>
                </h2>
                <p className="mt-5 max-w-4xl text-base leading-7 text-[var(--color-body)] sm:text-[17px]">
                  MJ combines finance and accounting experience, e-commerce operations experience,
                  and AI automation skills to build practical business systems that save time,
                  reduce errors, and support growth. I understand{" "}
                  <strong className="font-semibold text-blue-700">real business processes</strong>
                  {" "}before I automate them—so the solutions I build are relevant, reliable, and
                  easy to adopt.
                </p>
              </FadeIn>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {pillars.map((pillar, index) => (
                  <FadeIn key={pillar.title} delay={150 + index * 70}>
                    <article className="h-full rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)]">
                      <div className="flex items-center gap-3 md:block">
                        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${pillar.iconBackground} ${pillar.accent}`}>
                          <pillar.icon size={25} strokeWidth={1.9} aria-hidden="true" />
                        </span>
                        <div className="md:mt-3">
                          <h3 className={`text-base font-bold leading-5 ${pillar.accent}`}>
                            {pillar.title}
                          </h3>
                          <span className="mt-2 hidden h-0.5 w-8 bg-current md:block" aria-hidden="true" />
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-[var(--color-body)]">{pillar.body}</p>
                    </article>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={390} className="mt-auto pt-6">
                <div className="flex flex-col gap-5 rounded-2xl bg-blue-50/80 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                      <Rocket size={23} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <p className="border-l border-blue-200 pl-4 text-sm font-semibold leading-6 text-[var(--color-ink)]">
                      I build solutions that solve{" "}
                      <strong className="text-blue-700">real business problems</strong> — not just
                      automations for the sake of automation.
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2.5">
                    <a
                      href={site.resumeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-colors hover:bg-blue-700"
                    >
                      <FileText size={16} aria-hidden="true" />
                      View Resume PDF
                    </a>
                    <Link
                      href={site.contactHref}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-blue-500 bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                    >
                      <Mail size={16} aria-hidden="true" />
                      Contact Me
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
