import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <FadeIn>
        <div className="rounded-3xl bg-[var(--color-ink)] px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Have a manual process that&rsquo;s costing you time?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Tell me what it looks like today. I&rsquo;ll tell you honestly whether automation is a
            good fit — and what that would take to build.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              Talk to me about your process
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/idol-fairies"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white"
            >
              See the proof first
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
