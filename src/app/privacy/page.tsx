import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | HaddonDigitalGroup",
  description:
    "How HaddonDigitalGroup handles your data under UK GDPR. Privacy policy for HaddonDigitalGroup clients and website visitors.",
};

export default function PrivacyPage() {
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
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/70 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })}
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/90">
          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">1. Who we are</h2>
            <p>
              HaddonDigitalGroup (&quot;we&quot;, &quot;us&quot;) is a UK-based digital agency. This policy explains how we collect, use, and protect your personal data in line with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">2. Data we collect</h2>
            <p>
              We may collect: name, email address, and any information you provide when signing up, contacting us, or submitting support tickets. We use cookies and similar technologies as described in our cookie notice (see banner on site).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">3. How we use your data</h2>
            <p>
              We use your data to provide our services, manage your client portal account, respond to support requests, and improve our website. We do not sell your data. We only share data where necessary (e.g. with our hosting or auth provider) under agreements that protect your rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">4. Your rights under UK GDPR</h2>
            <p>
              You have the right to access, rectify, erase, restrict processing, object, and to data portability in relation to your personal data. You may withdraw consent where we rely on it. To exercise these rights or complain, contact us using the details on our website. You may also complain to the ICO (ico.org.uk).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">5. Contact</h2>
            <p>
              For privacy enquiries or to request a copy of your data, contact us via the details provided on our main website or client portal.
            </p>
          </section>
        </div>

        <p className="mt-12 text-white/60 text-sm">
          <Link href="/" className="underline hover:text-white">Return to home</Link>
          {" · "}
          <Link href="/terms" className="underline hover:text-white">Terms of Service</Link>
        </p>
      </main>
    </div>
  );
}
