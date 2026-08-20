"use client";

import { useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { solutionAreas } from "@/data/caseStudy";
import ScreenshotGallery, { type Shot } from "./ScreenshotGallery";
import Placeholder from "./Placeholder";

const visuals: Record<string, { type: "gallery" | "single" | "placeholder"; shots?: Shot[]; label?: string }> = {
  storefront: {
    type: "gallery",
    shots: [
      { src: "/screenshots/storefront/home.png", label: "Storefront — home" },
      { src: "/screenshots/storefront/shop-all.png", label: "Shop — all products" },
      { src: "/screenshots/storefront/albums.png", label: "Albums category" },
      { src: "/screenshots/storefront/cart.png", label: "Cart" },
      { src: "/screenshots/storefront/checkout.png", label: "Demo checkout" },
      { src: "/screenshots/storefront/order-confirmation.png", label: "Order confirmation" },
      { src: "/screenshots/storefront/about.png", label: "About / Why Idol Fairies" },
    ],
  },
  sales: {
    type: "single",
    shots: [{ src: "/screenshots/admin/orders.png", label: "Admin — Orders (website + wholesale, in one list)" }],
  },
  wholesale: {
    type: "single",
    shots: [{ src: "/screenshots/admin/resellers.png", label: "Admin — Resellers & outstanding balances" }],
  },
  refunds: {
    type: "single",
    shots: [{ src: "/screenshots/admin/refunds.png", label: "Admin — Refund history" }],
  },
  assistant: {
    type: "gallery",
    shots: [
      { src: "/screenshots/chatbot/idol-ai-suggested-prompts.png", label: "Idol AI — suggested prompts" },
      { src: "/screenshots/chatbot/idol-ai-live-answer.png", label: "Idol AI — live catalog answer" },
    ],
  },
  admin: {
    type: "gallery",
    shots: [
      { src: "/screenshots/admin/overview.png", label: "Overview" },
      { src: "/screenshots/admin/orders.png", label: "Orders" },
      { src: "/screenshots/admin/customers.png", label: "Customers" },
      { src: "/screenshots/admin/resellers.png", label: "Resellers" },
      { src: "/screenshots/admin/inventory.png", label: "Inventory" },
      { src: "/screenshots/admin/products.png", label: "Products" },
      { src: "/screenshots/admin/refunds.png", label: "Refunds" },
      { src: "/screenshots/admin/needs-review.png", label: "Needs Review" },
    ],
  },
  reporting: {
    type: "gallery",
    shots: [
      { src: "/screenshots/metabase/business-dashboard.png", label: "Metabase — Business Dashboard" },
      { src: "/screenshots/metabase/sales-wholesale-refunds.png", label: "Metabase — Sales, Wholesale & Refunds" },
    ],
  },
  finance: { type: "placeholder", label: "Supplier purchase drafts & expense capture" },
};

function TechnicalLayer({ groups }: { groups: { heading?: string; points: string[] }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-[var(--color-border)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-[var(--color-ink)]">
          Technical details <span className="font-normal text-[var(--color-muted)]">— architecture, data model, testing</span>
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[var(--color-muted)] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="space-y-4 border-t border-[var(--color-border)] bg-[var(--color-surface-alt)] px-5 py-4">
          {groups.map((group, i) => (
            <div key={i}>
              {group.heading && (
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  {group.heading}
                </p>
              )}
              <ul className="space-y-1.5">
                {group.points.map((point) => (
                  <li key={point} className="flex gap-2 font-mono text-[13px] leading-6 text-[var(--color-body)]">
                    <span className="text-[var(--color-primary)]">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SolutionAreaTabs() {
  const [activeId, setActiveId] = useState(solutionAreas[0].id);
  const active = solutionAreas.find((a) => a.id === activeId) ?? solutionAreas[0];
  const visual = visuals[active.id];

  return (
    <div>
      <div className="scrollbar-none -mx-6 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {solutionAreas.map((area) => (
          <button
            key={area.id}
            type="button"
            onClick={() => setActiveId(area.id)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              area.id === activeId
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                : "border-[var(--color-border)] bg-white text-[var(--color-body)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            }`}
          >
            {area.tabLabel}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">{active.title}</h3>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                Business problem
              </p>
              <p className="mt-1.5 text-[15px] leading-7 text-[var(--color-body)]">{active.problem}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                What it does
              </p>
              <p className="mt-1.5 text-[15px] leading-7 text-[var(--color-body)]">{active.whatItDoes}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                What changes
              </p>
              <p className="mt-1.5 text-[15px] leading-7 text-[var(--color-body)]">{active.whatChanges}</p>
            </div>
            <div className="flex items-start gap-2 rounded-xl bg-[var(--color-accent-green-light)] px-4 py-3">
              <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[var(--color-accent-green)]" />
              <p className="text-sm text-[var(--color-ink)]">{active.evidence}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            {(visual?.type === "gallery" || visual?.type === "single") && visual.shots && (
              <ScreenshotGallery shots={visual.shots} />
            )}
            {visual?.type === "placeholder" && <Placeholder label={visual.label ?? "Screenshot"} />}
          </div>
        </div>

        <div className="mt-8">
          <TechnicalLayer groups={active.technical} />
        </div>
      </div>
    </div>
  );
}
