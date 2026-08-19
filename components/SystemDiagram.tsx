type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  variant?: "primary" | "neutral" | "accent" | "dark";
};

const boxes: Box[] = [
  // Inputs
  { x: 20, y: 16, w: 190, h: 56, label: "Storefront Checkout", sub: "retail", variant: "primary" },
  { x: 20, y: 96, w: 190, h: 56, label: "Wholesale Order", sub: "reseller", variant: "primary" },
  { x: 20, y: 246, w: 190, h: 56, label: "Supplier Purchase", sub: "Gmail intake", variant: "neutral" },
  { x: 20, y: 322, w: 190, h: 56, label: "Operating Expense", sub: "Gmail + Telegram", variant: "neutral" },
  { x: 20, y: 452, w: 190, h: 56, label: "Refund Request", sub: "storefront / admin", variant: "neutral" },

  // Core processing
  { x: 300, y: 56, w: 210, h: 56, label: "Sales & Order Processing", variant: "primary" },
  { x: 300, y: 246, w: 210, h: 56, label: "Accounts Payable", variant: "neutral" },
  { x: 300, y: 322, w: 210, h: 56, label: "Expense Ledger", variant: "neutral" },
  { x: 300, y: 452, w: 210, h: 56, label: "Refunds & Returns", variant: "neutral" },

  // Shared data
  { x: 590, y: 16, w: 190, h: 56, label: "Inventory", variant: "accent" },
  { x: 590, y: 140, w: 190, h: 56, label: "Accounts Receivable", sub: "resellers", variant: "accent" },

  // Reporting
  { x: 870, y: 180, w: 200, h: 80, label: "Owner Reporting", sub: "Metabase", variant: "dark" },

  // AI assistant
  { x: 870, y: 16, w: 200, h: 68, label: "Idol AI", sub: "RAG chatbot", variant: "neutral" },
];

const variantFill: Record<NonNullable<Box["variant"]>, string> = {
  primary: "#eff6ff",
  neutral: "#f8fafc",
  accent: "#f0fdf4",
  dark: "#0f172a",
};
const variantStroke: Record<NonNullable<Box["variant"]>, string> = {
  primary: "#2563eb",
  neutral: "#cbd5e1",
  accent: "#16a34a",
  dark: "#0f172a",
};
const variantText: Record<NonNullable<Box["variant"]>, string> = {
  primary: "#1d4ed8",
  neutral: "#334155",
  accent: "#15803d",
  dark: "#ffffff",
};

function Node({ box }: { box: Box }) {
  const variant = box.variant ?? "neutral";
  return (
    <g>
      <rect
        x={box.x}
        y={box.y}
        width={box.w}
        height={box.h}
        rx={12}
        fill={variantFill[variant]}
        stroke={variantStroke[variant]}
        strokeWidth={1.5}
      />
      <text
        x={box.x + box.w / 2}
        y={box.sub ? box.y + box.h / 2 - 6 : box.y + box.h / 2 + 5}
        textAnchor="middle"
        fontSize={13.5}
        fontWeight={600}
        fill={variantText[variant]}
      >
        {box.label}
      </text>
      {box.sub && (
        <text
          x={box.x + box.w / 2}
          y={box.y + box.h / 2 + 13}
          textAnchor="middle"
          fontSize={11}
          fill={variant === "dark" ? "#cbd5e1" : "#64748b"}
        >
          {box.sub}
        </text>
      )}
    </g>
  );
}

function Arrow({ d, color = "#94a3b8", dashed = false }: { d: string; color?: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={1.75}
      strokeDasharray={dashed ? "5 4" : undefined}
      markerEnd="url(#arrowhead)"
    />
  );
}

export default function SystemDiagram() {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-white p-4 sm:p-6">
      <svg
        viewBox="0 0 1090 620"
        className="mx-auto h-auto w-full min-w-[720px]"
        role="img"
        aria-label="Idol Fairies system diagram: storefront checkout and wholesale orders both flow into sales and order processing, which updates inventory and accounts receivable, feeding owner reporting in Metabase. Supplier purchases, operating expenses, and refunds feed the same reporting layer. Idol AI reads live product and policy data, and the admin dashboard gives staff a working view across the whole system."
      >
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
          </marker>
        </defs>

        {/* primary spine: retail + wholesale -> sales processing */}
        <Arrow color="#2563eb" d="M210,44 H255 V84 H300" />
        <Arrow color="#2563eb" d="M210,124 H255 V84 H300" />
        {/* sales processing -> inventory + AR */}
        <Arrow color="#2563eb" d="M510,84 H550 V44 H590" />
        <Arrow color="#2563eb" d="M510,84 H560 V168 H590" />

        {/* finance intake lanes */}
        <Arrow d="M210,274 H300" />
        <Arrow d="M210,350 H300" />
        <Arrow d="M210,480 H300" />

        {/* processing -> reporting */}
        <Arrow d="M510,274 H700 V220 H870" />
        <Arrow d="M510,350 H730 V230 H870" />
        <Arrow d="M510,480 H760 V250 H870" />

        {/* shared data -> reporting */}
        <Arrow color="#16a34a" d="M780,44 H830 V210 H870" />
        <Arrow color="#16a34a" d="M780,168 H840 V220 H870" />

        {/* idol AI reads product/policy data */}
        <Arrow color="#2563eb" dashed d="M870,50 H830 V44 H780" />

        {boxes.map((box) => (
          <Node key={box.label} box={box} />
        ))}

        {/* annotation */}
        <text x={405} y={530} fontSize={11.5} fill="#64748b" fontStyle="italic">
          Refunds also restock Inventory and adjust Accounts Receivable when applicable.
        </text>

        {/* admin dashboard band */}
        <rect x={20} y={556} width={1050} height={48} rx={12} fill="#f8fafc" stroke="#cbd5e1" strokeWidth={1.5} />
        <text x={545} y={585} textAnchor="middle" fontSize={13} fontWeight={600} fill="#334155">
          Admin Operations Dashboard — staff view across orders, customers, resellers, inventory, and refunds
        </text>
      </svg>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--color-muted)]">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2563eb]" /> Retail + wholesale order flow
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#16a34a]" /> Shared data feeding owner reporting
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#94a3b8]" /> Finance intake &amp; supporting automation
        </span>
      </div>
    </div>
  );
}
