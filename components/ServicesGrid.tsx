import { ShoppingCart, Calculator, Bot, BarChart3, Check } from "lucide-react";
import { services, type Service } from "@/data/services";
import FadeIn from "./FadeIn";

const icons: Record<Service["icon"], typeof ShoppingCart> = {
  cart: ShoppingCart,
  calculator: Calculator,
  bot: Bot,
  chart: BarChart3,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Where automation actually moves the needle
          </h2>
          <p className="mt-4 text-[var(--color-body)]">
            Four areas where manual process turns into a working system — each one demonstrated
            end-to-end inside the Idol Fairies case study.
          </p>
        </div>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <FadeIn key={service.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)]">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-ink)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[var(--color-body)]">
                      <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-primary)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
