import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Landmark, ShoppingCart } from "lucide-react";
import { site } from "@/data/site";
import FadeIn from "./FadeIn";

const pillars = [
  { icon: Landmark, title: "Finance & Accounting", accent: "text-blue-700" },
  { icon: ShoppingCart, title: "E-commerce Operations", accent: "text-cyan-600" },
  { icon: Bot, title: "AI & Automation", accent: "text-indigo-700" },
];

export default function AboutTeaser() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-[var(--color-border)] bg-slate-50/70 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
            <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md sm:mx-0">
              <Image
                src="/about/mj-ablanque-profile.jpeg"
                alt={`${site.fullName} — portrait`}
                fill
                sizes="112px"
                className="object-cover object-[center_18%]"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">About Me</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                Business Experience Behind the Automation
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-body)]">
                MJ combines finance and accounting experience, e-commerce operations experience, and AI
                automation skills to build practical business systems — she understands{" "}
                <strong className="font-semibold">real business processes</strong> before automating them.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {pillars.map((pillar) => (
              <span
                key={pillar.title}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
              >
                <pillar.icon size={16} className={pillar.accent} />
                {pillar.title}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
            >
              Read full bio & credentials
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
