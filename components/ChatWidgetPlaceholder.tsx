"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowLeft, Send, Mail } from "lucide-react";
import { site } from "@/data/site";
import { MAX_MESSAGE_LENGTH, type ChatHistoryMessage } from "@/types/chat";

const suggestedPrompts = [
  "What eats the most manual time in my business?",
  "Can you show me how the Idol Fairies system works?",
  "Do you build automations for accounting-heavy businesses?",
];

type Pose = "idle" | "open" | "thinking" | "answered";

const poseImages: Record<Pose, string> = {
  idle: "/brand/chat/idol-ai-idle.png",
  open: "/brand/chat/idol-ai-open.png",
  thinking: "/brand/chat/idol-ai-thinking.png",
  answered: "/brand/chat/idol-ai-answered.png",
};

type Area = "Finance / Accounting" | "Sales / Orders" | "Inventory / Operations" | "Customer Support" | "Marketing / Content" | "Other";
type Process = "Mostly manual" | "Spreadsheets" | "Email/messages" | "Multiple apps that don't connect" | "Already partially automated" | "Other";
type Goal = "Reduce repetitive work" | "Reduce errors" | "Faster processing" | "Better tracking/reporting" | "Connect systems" | "Use AI in the workflow" | "Other";

const areaOptions: Area[] = [
  "Finance / Accounting",
  "Sales / Orders",
  "Inventory / Operations",
  "Customer Support",
  "Marketing / Content",
  "Other",
];

const processOptions: Process[] = [
  "Mostly manual",
  "Spreadsheets",
  "Email/messages",
  "Multiple apps that don't connect",
  "Already partially automated",
  "Other",
];

const goalOptions: Goal[] = [
  "Reduce repetitive work",
  "Reduce errors",
  "Faster processing",
  "Better tracking/reporting",
  "Connect systems",
  "Use AI in the workflow",
  "Other",
];

const areaCopy: Record<Area, { process: string; example: string; relatedLabel: string | null }> = {
  "Finance / Accounting": {
    process: "accounts payable/receivable and expense tracking",
    example:
      "In the Idol Fairies project, AR balances age automatically with reminders sent for overdue accounts, and supplier purchases are staged for a manual confirm-before-posting checkpoint rather than auto-posted.",
    relatedLabel: "Finance Automation",
  },
  "Sales / Orders": {
    process: "order intake and processing",
    example:
      "In the Idol Fairies project, retail and wholesale orders are normalized into one pipeline, with duplicate protection and unmatched-item flagging instead of silent data loss.",
    relatedLabel: "Sales & Order Processing",
  },
  "Inventory / Operations": {
    process: "inventory and fulfillment tracking",
    example:
      "In the Idol Fairies project, storefront stock and the admin inventory view read from the same data, and refunds are handled as one tracked action instead of a manual multi-step correction.",
    relatedLabel: "Storefront & Ordering",
  },
  "Customer Support": {
    process: "answering repetitive customer questions",
    example:
      "In the Idol Fairies project, a RAG-based assistant answers product and policy questions from live catalog data, with an explicit fallback instead of guessing.",
    relatedLabel: "AI Customer Assistant",
  },
  "Marketing / Content": {
    process: "content and campaign tracking",
    example:
      "This isn't the focus of the Idol Fairies build, but the same approach applies — define the rules for what gets tracked, then automate around them.",
    relatedLabel: null,
  },
  Other: {
    process: "that process",
    example: "The Idol Fairies project shows the general pattern: define the business rules first, then automate around them.",
    relatedLabel: null,
  },
};

const processCopy: Record<Process, string> = {
  "Mostly manual": "manual, ad-hoc work",
  Spreadsheets: "spreadsheets",
  "Email/messages": "email and chat messages",
  "Multiple apps that don't connect": "several disconnected apps",
  "Already partially automated": "a partially automated process",
  Other: "your current process",
};

const goalCopy: Record<Goal, string> = {
  "Reduce repetitive work": "the repetitive manual work",
  "Reduce errors": "manual errors",
  "Faster processing": "slow turnaround",
  "Better tracking/reporting": "poor visibility into what's happening",
  "Connect systems": "disconnected tools",
  "Use AI in the workflow": "the lack of AI assistance in the workflow",
  Other: "the current bottleneck",
};

type Mode = "chat" | "q1" | "q2" | "q3" | "result";
type Message = { role: "user" | "assistant"; text: string };

function OptionList<T extends string>({ options, onSelect }: { options: T[]; onSelect: (value: T) => void }) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className="block w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-left text-sm text-[var(--color-body)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function ChatWidgetPlaceholder() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("chat");
  const [area, setArea] = useState<Area | null>(null);
  const [process, setProcess] = useState<Process | null>(null);
  const [goal, setGoal] = useState<Goal | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [justAnswered, setJustAnswered] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const answeredTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "nearest" });
  }, [messages, loading]);

  useEffect(() => {
    return () => {
      if (answeredTimeout.current) clearTimeout(answeredTimeout.current);
    };
  }, []);

  const resetDiagnostic = () => {
    setMode("chat");
    setArea(null);
    setProcess(null);
    setGoal(null);
  };

  const toggle = () => {
    setOpen((v) => !v);
  };

  const pose: Pose = loading ? "thinking" : justAnswered ? "answered" : "open";

  async function sendMessage(text: string) {
    const trimmed = text.trim().slice(0, MAX_MESSAGE_LENGTH);
    if (!trimmed || loading) return;

    const history: ChatHistoryMessage[] = messages.map((m) => ({ role: m.role, text: m.text }));
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);
    setJustAnswered(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data: { text?: string } = await res.json();
      const replyText = data.text || "Sorry, something went wrong. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", text: replyText }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Sorry, something went wrong reaching Idol AI. Please try again in a moment." },
      ]);
    } finally {
      setLoading(false);
      setJustAnswered(true);
      // Matches the real Idol Fairies chatbot's success-pose duration (components/chat/ChatWidget.tsx).
      answeredTimeout.current = setTimeout(() => setJustAnswered(false), 1600);
    }
  }

  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      {open && (
        <div className="idol-panel-in flex w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-xl">
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-primary-light)] px-3 py-2.5">
            {mode !== "chat" && (
              <button
                type="button"
                onClick={resetDiagnostic}
                aria-label="Back to chat"
                className="rounded-full p-1 text-[var(--color-primary)] hover:bg-white/60"
              >
                <ArrowLeft size={16} />
              </button>
            )}
            <div key={pose} className="pose-pop flex h-12 w-12 shrink-0 items-center justify-center">
              <Image src={poseImages[pose]} alt="" width={56} height={56} className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-ink)]">Idol AI</p>
              <p className="text-xs text-[var(--color-muted)]">
                {loading ? "Thinking…" : "Portfolio assistant"}
              </p>
            </div>
          </div>

          {mode === "chat" && (
            <>
              <div className="max-h-[22rem] min-h-[10rem] space-y-3 overflow-y-auto px-4 py-4">
                {messages.length === 0 && (
                  <>
                    <p className="text-sm text-[var(--color-body)]">
                      Ask me about Mary Joyce&rsquo;s background, skills, or the Idol Fairies project —
                      or try one of these:
                    </p>
                    <div className="space-y-2">
                      {suggestedPrompts.map((prompt) => (
                        <button
                          key={prompt}
                          type="button"
                          onClick={() => sendMessage(prompt)}
                          className="block w-full rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)] px-3 py-2 text-left text-sm text-[var(--color-body)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setMode("q1")}
                      className="block w-full rounded-lg border border-[var(--color-primary)] bg-[var(--color-primary-light)] px-3 py-2.5 text-left text-sm font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
                    >
                      Not sure what to automate? Find an automation opportunity →
                    </button>
                  </>
                )}

                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <p
                      className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-6 ${
                        m.role === "user"
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-[var(--color-surface-alt)] text-[var(--color-ink)]"
                      }`}
                    >
                      {m.text}
                    </p>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <p className="rounded-2xl bg-[var(--color-surface-alt)] px-3.5 py-2 text-sm text-[var(--color-muted)]">
                      <span className="inline-flex gap-1">
                        <span className="typing-dot" />
                        <span className="typing-dot" />
                        <span className="typing-dot" />
                      </span>
                    </p>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-2 border-t border-[var(--color-border)] px-3 py-3"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value.slice(0, MAX_MESSAGE_LENGTH))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage(input);
                    }
                  }}
                  placeholder="Ask a question…"
                  disabled={loading}
                  className="min-w-0 flex-1 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-primary)] disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition-colors hover:bg-[var(--color-primary-dark)] disabled:opacity-40"
                >
                  <Send size={15} />
                </button>
              </form>

              <div className="border-t border-[var(--color-border)] px-4 py-2.5">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                >
                  <Mail size={13} /> Talk to me about your process
                </Link>
              </div>
            </>
          )}

          {mode !== "chat" && (
            <div className="max-h-[26rem] space-y-3 overflow-y-auto px-4 py-4">
              {mode === "q1" && (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                    Question 1 of 3
                  </p>
                  <p className="text-sm font-medium text-[var(--color-ink)]">
                    Which part of your work takes the most repetitive manual effort?
                  </p>
                  <OptionList
                    options={areaOptions}
                    onSelect={(value) => {
                      setArea(value);
                      setMode("q2");
                    }}
                  />
                </>
              )}

              {mode === "q2" && (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                    Question 2 of 3
                  </p>
                  <p className="text-sm font-medium text-[var(--color-ink)]">How is that process handled today?</p>
                  <OptionList
                    options={processOptions}
                    onSelect={(value) => {
                      setProcess(value);
                      setMode("q3");
                    }}
                  />
                </>
              )}

              {mode === "q3" && (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                    Question 3 of 3
                  </p>
                  <p className="text-sm font-medium text-[var(--color-ink)]">
                    What would you most like to improve?
                  </p>
                  <OptionList
                    options={goalOptions}
                    onSelect={(value) => {
                      setGoal(value);
                      setMode("result");
                    }}
                  />
                </>
              )}

              {mode === "result" && area && process && goal && (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                    Potential automation opportunity
                  </p>
                  <p className="text-sm leading-6 text-[var(--color-body)]">
                    Based on your answers, a useful starting point may be automating{" "}
                    <strong className="text-[var(--color-ink)]">{areaCopy[area].process}</strong> by
                    connecting <strong className="text-[var(--color-ink)]">{processCopy[process]}</strong>{" "}
                    to a workflow tool to reduce{" "}
                    <strong className="text-[var(--color-ink)]">{goalCopy[goal]}</strong>.
                  </p>
                  <p className="text-sm leading-6 text-[var(--color-body)]">{areaCopy[area].example}</p>
                  <div className="flex flex-col gap-2 pt-1">
                    <Link
                      href="/idol-fairies"
                      onClick={() => setOpen(false)}
                      className="block w-full rounded-full bg-[var(--color-primary)] px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                    >
                      {areaCopy[area].relatedLabel
                        ? `View the ${areaCopy[area].relatedLabel} example`
                        : "View a related project"}
                    </Link>
                    <a
                      href={`mailto:${site.email}?subject=${encodeURIComponent("Automation opportunity from your portfolio")}`}
                      className="block w-full rounded-full border border-[var(--color-border)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                      Contact me to discuss the workflow
                    </a>
                    <button
                      type="button"
                      onClick={resetDiagnostic}
                      className="text-center text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                    >
                      Back to chat
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {open ? (
        <button
          type="button"
          onClick={toggle}
          aria-label="Close portfolio assistant"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary)] shadow-lg transition-transform hover:scale-105"
        >
          <X size={20} />
        </button>
      ) : (
        <button
          type="button"
          onClick={toggle}
          aria-label="Open portfolio assistant"
          className="idol-launcher h-16 w-16 sm:h-24 sm:w-24"
        >
          <Image
            src={poseImages.idle}
            alt="Idol Fairies AI assistant"
            width={224}
            height={224}
            className="h-full w-full object-contain drop-shadow-[0_10px_18px_rgba(15,23,42,0.28)]"
            priority
          />
        </button>
      )}
    </div>
  );
}
