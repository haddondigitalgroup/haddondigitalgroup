import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | HaddonDigitalGroup",
  description:
    "Terms of service for HaddonDigitalGroup website and client portal. UK-based digital agency terms.",
};

export default function TermsPage() {
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
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white/70 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })}
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/90">
          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">1. Agreement</h2>
            <p>
              By using the HaddonDigitalGroup website and client portal (&quot;Services&quot;), you agree to these terms. If you are using the Services on behalf of a business, you confirm you have authority to bind that business.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">2. Services</h2>
            <p>
              We provide web design, development, hosting, support, and related digital services as described in your package (Essential, Advanced, Professional, or Additional Services). Specific deliverables and timelines are set out in your project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">3. Your obligations</h2>
            <p>
              You agree to provide accurate information, keep your client portal login secure, and use the Services lawfully. You must not misuse our systems or attempt to access other users&apos; data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">4. Payment</h2>
            <p>
              Fees are in GBP (£). Payment terms are as agreed for your package. Support plan fees are recurring (monthly or annually) until cancelled in line with our cancellation policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">5. Limitation of liability</h2>
            <p>
              We provide the Services with reasonable skill and care. Our liability is limited to the amount you have paid us in the 12 months before the claim, except where law does not allow limitation (e.g. death or personal injury caused by our negligence, or fraud).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mt-8 mb-2">6. Contact</h2>
            <p>
              For questions about these terms, contact us via the details on our website or client portal.
            </p>
          </section>
        </div>

        <p className="mt-12 text-white/60 text-sm">
          <Link href="/" className="underline hover:text-white">Return to home</Link>
          {" · "}
          <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>
        </p>
      </main>
    </div>
  );
}
