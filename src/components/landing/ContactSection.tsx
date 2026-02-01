"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!privacyAgreed) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setPrivacyAgreed(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="min-h-[60vh] flex flex-col sm:flex-row"
      aria-labelledby="contact-heading"
    >
      {/* Left: dark column – Start Your Transformation */}
      <div className="flex-1 bg-[#0d0d14] px-6 sm:px-10 lg:px-16 py-12 sm:py-16 flex flex-col justify-center">
        <h2
          id="contact-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
        >
          Start Your Transformation.
        </h2>
        <p className="text-white/80 text-sm sm:text-base max-w-md mb-8">
          Ready to upgrade your digital presence? Let&apos;s discuss how we can bring
          enterprise-grade solutions to your business.
        </p>
        <p className="text-white/70 text-sm">Based in the UK.</p>
        <p className="text-white/70 text-sm">Serving clients globally.</p>
        <p className="mt-auto pt-12 text-white/50 text-xs">
          © {new Date().getFullYear()} HaddonDigitalGroup.
        </p>
      </div>

      {/* Right: lighter column – contact form */}
      <div className="flex-1 bg-white px-6 sm:px-10 lg:px-16 py-12 sm:py-16 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full mx-auto sm:mx-0"
          noValidate
        >
          <div className="mb-6">
            <label
              htmlFor="contact-name"
              className="block text-neutral-600 text-xs font-medium uppercase tracking-wider mb-2"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your Name"
              className="w-full border-0 border-b border-neutral-200 bg-transparent py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-0"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="contact-email"
              className="block text-neutral-600 text-xs font-medium uppercase tracking-wider mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="name@company.com"
              className="w-full border-0 border-b border-neutral-200 bg-transparent py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-0"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="contact-message"
              className="block text-neutral-600 text-xs font-medium uppercase tracking-wider mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              placeholder="How can we help?"
              className="w-full border-0 border-b border-neutral-200 bg-transparent py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 focus:ring-0 resize-none"
            />
          </div>
          <div className="mb-6 flex items-start gap-3">
            <input
              id="contact-privacy"
              type="checkbox"
              checked={privacyAgreed}
              onChange={(e) => setPrivacyAgreed(e.target.checked)}
              required
              className="mt-1 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
              aria-describedby="contact-privacy-desc"
            />
            <label id="contact-privacy-desc" htmlFor="contact-privacy" className="text-sm text-neutral-600">
              I agree to the{" "}
              <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900">
                Privacy Policy
              </Link>{" "}
              and how my data is handled.
            </label>
          </div>
          {status === "sent" && (
            <p className="mb-4 text-emerald-600 text-sm">Message sent. We&apos;ll be in touch.</p>
          )}
          {status === "error" && (
            <p className="mb-4 text-red-600 text-sm">Something went wrong. Please try again.</p>
          )}
          <button
            type="submit"
            disabled={status === "sending" || !privacyAgreed}
            className="w-full sm:w-auto bg-neutral-900 text-white font-medium uppercase tracking-wider px-8 py-3 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
