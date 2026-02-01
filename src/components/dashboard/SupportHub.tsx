"use client";

import { useState } from "react";
import Link from "next/link";
import { submitTicket } from "@/app/dashboard/actions";
import { Loader2, Ticket, AlertCircle } from "lucide-react";

type TicketRow = {
  id: string;
  subject: string;
  priority: string;
  status: string;
  created_at: string;
};

function formatDateDDMMYYYY(iso: string) {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function SupportHub({
  initialTickets,
}: {
  initialTickets: TicketRow[];
}) {
  const [tickets, setTickets] = useState<TicketRow[]>(initialTickets);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const subject = formData.get("subject") as string;
    const priority = formData.get("priority") as string;
    const message = formData.get("message") as string;

    const result = await submitTicket({ subject, priority, message });

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    if (result.ticket) {
      setTickets((prev) => [
        {
          id: result.ticket!.id,
          subject: result.ticket!.subject,
          priority: result.ticket!.priority,
          status: result.ticket!.status,
          created_at: result.ticket!.created_at,
        },
        ...prev,
      ]);
    }

    form.reset();
    setPrivacyAgreed(false);
    setLoading(false);
  }

  return (
    <section
      className="glass rounded-2xl p-6 border border-white/10 space-y-8"
      aria-labelledby="support-heading"
    >
      <h2 id="support-heading" className="text-lg font-semibold text-white flex items-center gap-2">
        <Ticket className="w-5 h-5" aria-hidden />
        Support hub
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-1">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Brief description of your request"
          />
        </div>
        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-white/90 mb-1">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            required
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <option value="Low">Low</option>
            <option value="Med">Med</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
            placeholder="Describe your issue or question..."
          />
        </div>
        <div className="flex items-start gap-3">
          <input
            id="support-privacy"
            type="checkbox"
            checked={privacyAgreed}
            onChange={(e) => setPrivacyAgreed(e.target.checked)}
            required
            className="mt-1 rounded border-white/20 bg-white/5 text-white focus:ring-white/20"
            aria-describedby="support-privacy-desc"
          />
          <label id="support-privacy-desc" htmlFor="support-privacy" className="text-sm text-white/80">
            I agree to the{" "}
            <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              Privacy Policy
            </Link>{" "}
            and how my data is handled.
          </label>
        </div>
        {error && (
          <p className="flex items-center gap-2 text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" aria-hidden />
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading || !privacyAgreed}
          className="rounded-lg bg-white text-black font-semibold px-6 py-3 flex items-center gap-2 hover:bg-white/90 disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
          ) : null}
          Submit ticket
        </button>
      </form>

      <div>
        <h3 className="text-base font-medium text-white mb-4">Ticket history</h3>
        {tickets.length === 0 ? (
          <p className="text-white/60 text-sm">No tickets yet.</p>
        ) : (
          <ul className="space-y-3" role="list">
            {tickets.map((t) => (
              <li
                key={t.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3"
              >
                <div>
                  <p className="font-medium text-white">{t.subject}</p>
                  <p className="text-sm text-white/60">
                    {t.priority} · {t.status} · {formatDateDDMMYYYY(t.created_at)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
