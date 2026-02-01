"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const INITIAL_MESSAGE = "Ask about our packages, hosting, or support.";

const KNOWLEDGE: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["price", "pricing", "cost", "fee", "£449", "£499", "£699", "how much", "packages"],
    answer:
      "We have three main packages: **Essential** at £449 setup with £14.99/month support, **Advanced** at £699 setup with £19.99/month support, and **Professional** at £999 with £19.99/month support. Additional Services are a one-off £299. All include UK-based high-speed hosting.",
  },
  {
    keywords: ["hosting", "host", "server", "uk hosting"],
    answer:
      "UK-based high-speed hosting is included in every package—Essential, Advanced, and Professional. You don't need to arrange hosting separately.",
  },
  {
    keywords: ["update", "changes", "edit", "haddon hub", "ticket", "support"],
    answer:
      "You can request changes anytime through the **Haddon Hub**—our client portal. Submit a service ticket and our team will handle updates for you.",
  },
  {
    keywords: ["social", "instagram", "tiktok", "linkedin", "facebook", "reach"],
    answer:
      "We include links to Instagram, TikTok, LinkedIn, and Facebook as standard so your site supports your social reach. We can add more or link to Google Business and Trustpilot too.",
  },
];

const LEAD_PROMPT = "What's your best email or phone?";

type Message = { role: "user" | "bot"; text: string };
type Phase = "chat" | "lead_capture" | "lead_sent" | "discovery_call";

export default function ExpertChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: INITIAL_MESSAGE }]);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<Phase>("chat");
  const [pendingEnquiry, setPendingEnquiry] = useState("");
  const [leadSent, setLeadSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [contactInput, setContactInput] = useState("");
  const [discoveryEmail, setDiscoveryEmail] = useState("");
  const [discoverySending, setDiscoverySending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function getReply(userText: string): string | null {
    const lower = userText.toLowerCase().trim();
    for (const { keywords, answer } of KNOWLEDGE) {
      if (keywords.some((k) => lower.includes(k))) return answer;
    }
    return null;
  }

  function formatBotMessage(text: string) {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  }

  async function handleSend() {
    const text = input.trim();
    if (!text) return;

    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);

    const reply = getReply(text);
    if (reply) {
      setMessages((m) => [...m, { role: "bot", text: reply }]);
      return;
    }

    const lower = text.toLowerCase().trim();
    if (lower.includes("discovery") || (lower.includes("book") && lower.includes("call"))) {
      setPhase("discovery_call");
      setMessages((m) => [...m, { role: "bot", text: "What's your email?" }]);
      return;
    }

    setPendingEnquiry(text);
    setPhase("lead_capture");
    setMessages((m) => [
      ...m,
      { role: "bot", text: LEAD_PROMPT },
    ]);
  }

  async function submitLead(contact: string) {
    if (!contact.trim()) return;
    setSending(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: contact.trim(), enquiry: pendingEnquiry }),
      });
      if (res.ok) {
        setLeadSent(true);
        setPhase("lead_sent");
        setContactInput("");
        setMessages((m) => [...m, { role: "bot", text: "Thanks. We'll be in touch." }]);
      } else {
        setMessages((m) => [...m, { role: "bot", text: "Something went wrong. Try again or email us." }]);
      }
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "Something went wrong. Try again or email us." }]);
    } finally {
      setSending(false);
    }
  }

  async function submitDiscoveryCall(email: string) {
    if (!email.trim()) return;
    setDiscoverySending(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: email.trim(), enquiry: "Discovery call request" }),
      });
      if (res.ok) {
        setPhase("lead_sent");
        setDiscoveryEmail("");
        setMessages((m) => [...m, { role: "bot", text: "Thanks. We'll be in touch." }]);
      } else {
        setMessages((m) => [...m, { role: "bot", text: "Something went wrong. Try again or email us." }]);
      }
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "Something went wrong. Try again or email us." }]);
    } finally {
      setDiscoverySending(false);
    }
  }

  return (
    <>
      {/* FAB */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.3,
        }}
      >
        <motion.button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg text-white border-2 border-emerald-400/80 bg-emerald-600/90 backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label={open ? "Close expert chat" : "Open expert chat"}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-7 h-7" aria-hidden />
        </motion.button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-end justify-end p-0 sm:p-4"
            aria-label="Expert chat window"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative flex flex-col w-full sm:w-[400px] h-[85vh] sm:h-[560px] max-h-[700px] rounded-t-2xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              style={{
                background: "rgba(10, 10, 15, 0.88)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between shrink-0 px-4 py-3 border-b border-neutral-500/50 bg-neutral-700/80 backdrop-blur-md">
                <div>
                  <h3 className="font-bold text-white text-base">Support</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 touch-manipulation"
                  aria-label="Close chat"
                >
                  <X className="w-6 h-6 sm:w-5 sm:h-5" aria-hidden />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 font-sans">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === "user"
                          ? "bg-emerald-600/90 border border-emerald-400/80 text-white"
                          : "glass border border-white/10 text-white/90"
                      }`}
                    >
                      {msg.role === "bot" ? (
                        <p
                          className="leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: formatBotMessage(msg.text) }}
                        />
                      ) : (
                        <p className="leading-relaxed">{msg.text}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input / Lead capture / Discovery call */}
              <div className="shrink-0 p-4 border-t border-white/10">
                {phase === "discovery_call" && !leadSent ? (
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="email"
                      placeholder="Your email"
                      value={discoveryEmail}
                      onChange={(e) => setDiscoveryEmail(e.target.value)}
                      className="flex-1 rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") submitDiscoveryCall(discoveryEmail);
                      }}
                      disabled={discoverySending}
                    />
                    <button
                      type="button"
                      onClick={() => submitDiscoveryCall(discoveryEmail)}
                      disabled={discoverySending}
                      className="rounded-lg px-4 py-3 text-white text-sm font-medium min-h-[48px] bg-emerald-600/90 border border-emerald-400/80 touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      {discoverySending ? "Sending…" : "Book call"}
                    </button>
                  </div>
                ) : phase === "lead_capture" && !leadSent ? (
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Phone or email"
                      value={contactInput}
                      onChange={(e) => setContactInput(e.target.value)}
                      className="flex-1 rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") submitLead(contactInput);
                      }}
                      disabled={sending}
                    />
                    <button
                      type="button"
                      onClick={() => submitLead(contactInput)}
                      disabled={sending}
                      className="rounded-lg px-4 py-3 text-white text-sm font-medium min-h-[48px] bg-emerald-600/90 border border-emerald-400/80 touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      {sending ? "Sending…" : "Send"}
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Type your question…"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      className="flex-1 rounded-lg bg-white/5 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 font-sans"
                    />
                    <button
                      type="button"
                      onClick={handleSend}
                      className="rounded-lg p-3 text-white min-h-[48px] bg-emerald-600/90 border border-emerald-400/80 touch-manipulation focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      aria-label="Send message"
                    >
                      <Send className="w-5 h-5" aria-hidden />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
