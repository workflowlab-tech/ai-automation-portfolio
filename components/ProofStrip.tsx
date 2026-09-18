import { CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const proofItems = [
  {
    icon: CheckCircle2,
    stat: "6 years",
    label: "Across corporate finance, e-commerce operations, and automation",
  },
  {
    icon: GraduationCap,
    stat: "BS Accountancy",
    label: "Order-to-Cash and Accounts Payable background behind every build",
  },
  {
    icon: ShieldCheck,
    stat: "Tested Systems",
    label: "Scenario-based QA and documented validation",
  },
];

export default function ProofStrip() {
  return (
    <section className="border-b border-[var(--color-border)] bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {proofItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.label} delay={index * 70}>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                    <Icon size={19} strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="text-lg font-bold text-[var(--color-ink)]">{item.stat}</p>
                    <p className="text-sm leading-5 text-[var(--color-body)]">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
