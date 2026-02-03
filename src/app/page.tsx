import Link from "next/link";
import SiteHeader from "@/components/landing/SiteHeader";
import Footer from "@/components/landing/Footer";
import ProfessionalServiceSchema from "@/components/landing/ProfessionalServiceSchema";
import { PACKAGE_TIERS } from "@/lib/packages";

export default function Home() {
  return (
    <>
      <ProfessionalServiceSchema />
      <SiteHeader />
      <main className="overflow-x-hidden pt-14 sm:pt-16">
        {/* Hero */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center bg-[#0a0a0f]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Digital Transformation Agency
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Professional web design and digital packages for Leicestershire and the UK. From £449.00.
          </p>
          <Link
            href="#contact"
            className="rounded-lg bg-white text-black font-semibold px-6 py-3 text-sm hover:bg-white/90 min-h-[48px] inline-flex items-center"
            aria-label="Get a quote – contact us"
          >
            Get a Quote
          </Link>
        </section>

        {/* Who we build for – placeholder for video showcase */}
        <section id="video-showcase" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d14]" aria-labelledby="video-heading">
          <div className="max-w-6xl mx-auto text-center">
            <h2 id="video-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Who we build for
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Hospitality, trades, and businesses across the UK. We deliver websites and apps that help you grow.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]" aria-labelledby="pricing-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
              Pricing
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PACKAGE_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col"
                >
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  <p className="text-2xl font-bold text-white mt-2">{tier.price}</p>
                  <p className="text-white/70 text-sm mt-2 flex-1">{tier.description}</p>
                  <Link
                    href="/get-started"
                    className="mt-4 rounded-lg bg-white text-black font-semibold py-2.5 text-sm text-center hover:bg-white/90 min-h-[44px] flex items-center justify-center"
                  >
                    Get started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="min-h-[40vh] flex flex-col items-center justify-center bg-[#0d0d14] px-4 sm:px-6 lg:px-8 py-16 text-center"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Start your transformation
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Ready to upgrade your digital presence? Get in touch or build your package online.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/get-started"
              className="rounded-lg bg-white text-black font-semibold px-6 py-3 text-sm hover:bg-white/90 min-h-[48px] inline-flex items-center"
            >
              Build your package
            </Link>
            <a
              href="https://wa.me/447909554774"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#25D366] text-white font-semibold px-6 py-3 text-sm hover:bg-[#20bd5a] min-h-[48px] inline-flex items-center"
              aria-label="Chat on WhatsApp (opens in new tab)"
            >
              WhatsApp
            </a>
          </div>
          <address className="not-italic text-white/70 text-sm mt-8">
            Based in Leicestershire, serving clients across the UK and globally.
          </address>
        </section>
      </main>
      <Footer />
    </>
  );
}
