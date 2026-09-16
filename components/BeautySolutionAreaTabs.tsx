"use client";

import { useState } from "react";
import { beautySolutionAreas as solutionAreas } from "@/data/beautyCaseStudy";
import ScreenshotGallery, { type Shot } from "./ScreenshotGallery";

const visuals: Record<string, Shot[]> = {
  storefront: [
    { src: "/projects/idol-fairies-beauty/homepage.jpg", label: "Live storefront homepage" },
    { src: "/projects/idol-fairies-beauty/shop-skincare.jpg", label: "Skincare catalog with live stock counts" },
    { src: "/projects/idol-fairies-beauty/shop-makeup.jpg", label: "Makeup catalog with live stock counts" },
    { src: "/projects/idol-fairies-beauty/skincare-collection.jpg", label: "Korean skincare collection" },
    { src: "/projects/idol-fairies-beauty/makeup-collection.jpg", label: "Korean makeup collection" },
    { src: "/projects/idol-fairies-beauty/treatment-mask-collection.jpg", label: "Treatment mask collection" },
  ],
  payments: [
    { src: "/projects/idol-fairies-beauty/payment-proof-upload.jpg", label: "GCash / GoTyme payment instructions and proof upload" },
    { src: "/projects/idol-fairies-beauty/order-confirmation.jpg", label: "Order confirmation after payment proof is submitted" },
  ],
  orders: [
    { src: "/projects/idol-fairies-beauty/track-order.jpg", label: "Guest order tracking by order number and mobile" },
    { src: "/projects/idol-fairies-beauty/admin-dashboard.jpg", label: "Admin dashboard: orders, payment verification, low-stock alerts" },
  ],
  referrals: [{ src: "/projects/idol-fairies-beauty/join-referral.jpg", label: "Referral program signup page" }],
  messenger: [
    { src: "/projects/idol-fairies-beauty/n8n-messenger-workflow.jpg", label: "Live n8n Messenger AI workflow: GHL trigger, Gemini agent, tool nodes, reply back to GHL" },
    { src: "/projects/idol-fairies-beauty/ghl-messenger-workflow.jpg", label: "GoHighLevel Messenger AI workflow builder" },
  ],
};

export default function BeautySolutionAreaTabs() {
  const [activeId, setActiveId] = useState(solutionAreas[0].id);
  const active = solutionAreas.find((area) => area.id === activeId) ?? solutionAreas[0];
  const shots = visuals[active.id] ?? [];

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

      <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-ink)]">{active.title}</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-[var(--color-accent-red-light)] p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-red)]">Problem</p>
            <p className="mt-2 text-[15px] leading-7 text-[var(--color-body)]">{active.problem}</p>
          </div>
          <div className="rounded-2xl bg-[var(--color-accent-blue-light)] p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">Solution</p>
            <p className="mt-2 text-[15px] leading-7 text-[var(--color-body)]">{active.whatItDoes}</p>
          </div>
          <div className="rounded-2xl bg-[var(--color-accent-cyan-light)] p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-cyan)]">Result</p>
            <p className="mt-2 text-[15px] leading-7 text-[var(--color-body)]">{active.whatChanges}</p>
          </div>
        </div>
        {shots.length > 0 ? (
          <div className="mt-8 border-t border-[var(--color-border)] pt-8">
            <ScreenshotGallery shots={shots} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
