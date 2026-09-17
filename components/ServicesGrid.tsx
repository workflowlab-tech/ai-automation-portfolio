import { ShoppingCart, Calculator, Bot, BarChart3, Users, Check } from "lucide-react";
import { services, type Service } from "@/data/services";
import FadeIn from "./FadeIn";

const icons: Record<Service["icon"], typeof ShoppingCart> = {
  cart: ShoppingCart,
  calculator: Calculator,
  bot: Bot,
  chart: BarChart3,
  users: Users,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="grid gap-6 border-b border-[var(--color-border)] pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                Where I Work
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                Business Systems, Not Isolated Tasks
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-body)] lg:justify-self-end">
              I connect the steps around a process so the information moves cleanly from intake to action, recordkeeping, and reporting.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <FadeIn key={service.title} delay={index * 70}>
                <article className={`grid h-full gap-5 border-b border-[var(--color-border)] py-9 lg:grid-cols-[auto_1fr] ${index % 2 === 0 ? "lg:border-r lg:pr-10" : "lg:pl-10"}`}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-ink)]">{service.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-[var(--color-body)]">{service.description}</p>
                    <ul className="mt-4 space-y-2">
                      {service.points.slice(0, 2).map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm leading-6 text-[var(--color-body)]">
                          <Check size={16} className="mt-1 shrink-0 text-[var(--color-primary)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
