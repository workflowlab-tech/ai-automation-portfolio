"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Sparkles } from "lucide-react";

const suggestedPrompts = [
  "What eats the most manual time in my business?",
  "Can you show me how the Idol Fairies system works?",
  "Do you build automations for accounting-heavy businesses?",
];

export default function ChatWidgetPlaceholder() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-xl">
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-primary-light)] px-4 py-3">
            <Sparkles size={16} className="text-[var(--color-primary)]" />
            <p className="text-sm font-semibold text-[var(--color-ink)]">Portfolio assistant</p>
          </div>
          <div className="space-y-3 px-4 py-4">
            <p className="text-sm text-[var(--color-body)]">
              An interactive assistant and quick automation diagnostic are coming to this spot next
              — for now, here&rsquo;s what it&rsquo;ll help with:
            </p>
            <ul className="space-y-2">
              {suggestedPrompts.map((prompt) => (
                <li
                  key={prompt}
                  className="cursor-not-allowed rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] px-3 py-2 text-sm text-[var(--color-muted)]"
                >
                  {prompt}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block w-full rounded-full bg-[var(--color-primary)] px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
              onClick={() => setOpen(false)}
            >
              Talk to me about your process
            </Link>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open portfolio assistant preview"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[var(--color-primary-dark)]"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
