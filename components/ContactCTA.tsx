import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <FadeIn>
        <div className="rounded-3xl bg-[var(--color-ink)] px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to replace a manual bottleneck with a reliable system?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Send the process, tools, and outcome you need. I&rsquo;ll reply with the clearest practical next step—automation, cleanup, or a better workflow.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              Discuss a process
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/idol-fairies"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white"
            >
              View flagship case study
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
