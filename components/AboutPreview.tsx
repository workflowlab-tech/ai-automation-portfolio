import Link from "next/link";
import { ArrowRight, Landmark, ShoppingBag, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import FadeIn from "./FadeIn";

const pillars = [
  { icon: Landmark, title: "Finance & Accounting" },
  { icon: ShoppingBag, title: "E-commerce Operations" },
  { icon: Sparkles, title: "AI & Automation" },
];

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            About
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Business experience behind the automation
          </h2>
          <p className="mt-4 text-[var(--color-body)]">
            {site.name} — finance &amp; accounting background, hands-on e-commerce experience, and
            automation built to solve real business problems, not automation for its own sake.
          </p>
        </div>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {pillars.map((pillar, i) => (
          <FadeIn key={pillar.title} delay={i * 80}>
            <div className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white px-5 py-4 shadow-sm">
              <pillar.icon size={20} strokeWidth={1.75} className="shrink-0 text-[var(--color-primary)]" />
              <span className="text-sm font-medium text-[var(--color-ink)]">{pillar.title}</span>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={260}>
        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            More about my background
            <ArrowRight size={16} />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
