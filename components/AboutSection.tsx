import { GraduationCap, ShoppingBag, Landmark, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import CredentialsRow from "./CredentialsRow";

const pillars = [
  {
    icon: Landmark,
    title: "Finance & accounting background",
    body:
      "BS Accountancy (Polytechnic University of the Philippines, 2017). Worked Order-to-Cash / Cash Application at Accenture, then accounts payable, payroll, and statutory remittances as Accounting Staff at Red Scentennial Corporation.",
  },
  {
    icon: ShoppingBag,
    title: "Hands-on e-commerce experience",
    body:
      "Ran an online business for over 3 years — procurement, inventory, supplier coordination with Korean suppliers, and order fulfillment across Shopee, Lazada, and Shopify. Currently active in affiliate marketing and livestream selling.",
  },
  {
    icon: GraduationCap,
    title: "Automation, built and tested",
    body:
      "Learned automation by building it: n8n workflows, Supabase/Postgres, RAG chatbots, and Metabase reporting — designed around real accounting and order-processing logic, then regression-tested before calling it done.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted development",
    body:
      "I use tools like Claude and ChatGPT throughout development to accelerate implementation and troubleshoot issues. My focus stays on the business process — defining workflow requirements, business rules, and expected outcomes — then reviewing, testing, and refining what the AI helps build.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Why finance + e-commerce, not just automation
          </h2>
          <p className="mt-4 text-[var(--color-body)]">
            I understand the business process first, then use automation to solve it — not the
            other way around. That combination is what the Idol Fairies system is built to prove.
          </p>
        </div>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => (
          <FadeIn key={pillar.title} delay={i * 100}>
            <div className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm">
              <pillar.icon size={24} strokeWidth={1.75} className="text-[var(--color-primary)]" />
              <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">{pillar.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={200}>
        <CredentialsRow />
      </FadeIn>
    </section>
  );
}
