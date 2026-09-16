const steps = [
  ["Responsive Catalog", "Live products & inventory"],
  ["Guest Checkout", "Referral + shipping estimate"],
  ["GCash / GoTyme", "Private payment-proof upload"],
  ["Admin Operations", "Review, fulfillment & tracking"],
  ["Customer Updates", "Tracking page + Resend email"],
];

export default function BeautySystemDiagram() {
  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {steps.map(([title, detail], index) => (
          <div key={title} className="contents">
            <div className="flex-1 rounded-2xl border border-blue-100 bg-[var(--color-primary-light)]/60 p-4">
              <span className="text-xs font-bold text-[var(--color-primary)]">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-sm font-semibold text-[var(--color-ink)]">{title}</p>
              <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">{detail}</p>
            </div>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="self-center text-xl text-[var(--color-primary)] max-lg:rotate-90">→</span>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-cyan-100 bg-[var(--color-accent-cyan-light)] p-4">
          <p className="text-sm font-semibold text-[var(--color-accent-cyan)]">Customer referral loop</p>
          <p className="mt-1 text-xs leading-5 text-[var(--color-body)]">Personal links and codes → qualifying orders → clearing → payable rewards → referral dashboard.</p>
        </div>
        <div className="rounded-2xl border border-green-100 bg-[var(--color-accent-green-light)] p-4">
          <p className="text-sm font-semibold text-[var(--color-accent-green)]">Automation layer</p>
          <p className="mt-1 text-xs leading-5 text-[var(--color-body)]">Messenger → GoHighLevel CRM/AI inquiry layer → n8n Gemini agent stays connected to current product, shipping, and order data.</p>
        </div>
      </div>
    </div>
  );
}
