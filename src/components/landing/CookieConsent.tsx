"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "haddondigital-cookie-consent";

export default function CookieConsent() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setAccepted(stored === "accepted");
    } catch {
      setAccepted(false);
    }
  }, []);

  function handleAccept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore
    }
    setAccepted(true);
  }

  if (accepted !== false) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-white/10 p-4 sm:p-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-white/90 text-sm">
          We use cookies to run the site. By continuing you agree.{" "}
          <Link href="/privacy" className="text-white underline hover:no-underline">
            Privacy
          </Link>
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="shrink-0 rounded-lg bg-white text-black font-semibold px-5 py-2.5 text-sm hover:bg-white/90 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
