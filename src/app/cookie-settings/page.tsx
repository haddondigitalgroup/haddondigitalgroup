"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "haddondigital-cookie-consent";

export default function CookieSettingsPage() {
  const router = useRouter();

  function revokeConsent() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="glass border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="text-white/80 hover:text-white text-sm">
            ← Back to home
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Cookie Settings</h1>
        <p className="text-white/70 text-sm mb-8">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>

        <div className="space-y-6 text-white/90">
          <p>
            We use cookies and similar technologies to run the site, keep you signed in, and improve
            your experience. Our use is described in our{" "}
            <Link href="/privacy" className="text-white underline hover:no-underline">
              Privacy Policy
            </Link>
            , which complies with UK GDPR.
          </p>
          <p>
            If you previously accepted cookies and want to change your choice, you can revoke consent
            below. The cookie banner will show again on the next visit.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={revokeConsent}
              className="rounded-lg bg-white text-black font-semibold px-6 py-3 hover:bg-white/90 transition-colors"
            >
              Revoke consent & show banner again
            </button>
          </div>
        </div>

        <p className="mt-12 text-white/60 text-sm">
          <Link href="/" className="underline hover:text-white">
            Return to home
          </Link>
          {" · "}
          <Link href="/privacy" className="underline hover:text-white">
            Privacy Policy
          </Link>
        </p>
      </main>
    </div>
  );
}
