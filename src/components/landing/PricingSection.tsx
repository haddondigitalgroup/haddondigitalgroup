"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HOSTING_NOTE = "Hosting included within support plans";
const HOSTING_LINE = "UK-Based High-Speed Hosting (included within the support plan)";

type TierId = "essential" | "advanced" | "professional" | "additional-services";

type TierBase = {
  id: TierId;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  highlighted: boolean;
};

type TierWithSupport = TierBase & {
  type: "support";
  price: string;
  monthlySupport: string;
  showYearlyOption: boolean;
};

type TierOneOff = TierBase & {
  type: "one-off";
  price: string;
  priceSubtext: string;
};

type Tier = TierWithSupport | TierOneOff;

const tiers: Tier[] = [
  {
    type: "support",
    id: "essential",
    name: "Essential",
    subtitle: "",
    price: "£449",
    monthlySupport: "£14.99",
    showYearlyOption: true,
    description:
      "A high-impact, single continuous page with smooth transitions. Ideal for establishing a professional local presence with a fast, modern feel.",
    features: [
      "Single high-performance continuous page",
      "Client Portal Access: private dashboard for support tickets",
      HOSTING_LINE,
      "SEO Meta Tags",
    ],
    highlighted: false,
  },
  {
    type: "support",
    id: "advanced",
    name: "Advanced",
    subtitle: "",
    price: "£699",
    monthlySupport: "£19.99",
    showYearlyOption: true,
    description:
      "A sophisticated multi-page site with premium navigation and extra polish. Built for growing brands to showcase multiple locations and deep service menus.",
    features: [
      "Bespoke Multiple-Page Website",
      "Priority Client Portal Access",
      HOSTING_LINE,
      "All Essential features included",
    ],
    highlighted: true,
  },
  {
    type: "support",
    id: "professional",
    name: "Professional",
    subtitle: "High-Traffic & Automation",
    price: "£999",
    monthlySupport: "£19.99",
    showYearlyOption: false,
    description:
      "High-performance digital ecosystem for established businesses. Bespoke functionality and elite styling.",
    features: [
      "Custom iOS & Android App (£29.99/mo support)",
      "Automated Abandoned Cart Emails",
      "Unlimited pages, dedicated PM, advanced e-commerce",
      HOSTING_LINE,
    ],
    highlighted: false,
  },
  {
    type: "one-off",
    id: "additional-services",
    name: "Additional Services",
    subtitle: "",
    price: "£299",
    priceSubtext: "One-off fee · No monthly fee",
    description: "Add-on services to extend your site or app. One-time fee, no ongoing commitment.",
    features: [
      "Bespoke integrations and enhancements",
      "Extra pages or functionality",
      "Consultation and strategy",
    ],
    highlighted: false,
  },
];

const YEARLY_SUPPORT = "£199";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function isTierWithSupport(tier: Tier): tier is TierWithSupport {
  return tier.type === "support";
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const supportLabel = (tier: TierWithSupport) => {
    if (isYearly) return `${YEARLY_SUPPORT}/year`;
    const base = `${tier.monthlySupport}/mo`;
    if (tier.showYearlyOption) return `${base} (or £199/year)`;
    return base;
  };

  return (
    <section
      id="pricing"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d14]"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="pricing-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-2 text-center"
        >
          Packages that scale with you
        </h2>
        <p className="text-white/70 text-center mb-6">
          One-off build fee + optional support. All prices in GBP (£).
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <span className={`text-sm font-medium ${!isYearly ? "text-white" : "text-white/50"}`}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle between monthly and yearly support pricing"
            onClick={() => setIsYearly((p) => !p)}
            className="relative w-12 h-6 rounded-full bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <motion.span
              className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow"
              animate={{ x: isYearly ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? "text-white" : "text-white/50"}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="text-emerald-400 text-xs font-medium ml-1">Save with yearly</span>
          )}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {tiers.map((tier) => (
            <motion.article
              key={tier.id}
              variants={card}
              className={`relative rounded-2xl p-6 flex flex-col ${
                tier.highlighted
                  ? "glass-strong border-2 border-white/20 shadow-xl shadow-white/5"
                  : "glass border border-white/10"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden />
                  Popular
                </div>
              )}

              {/* Price above title */}
              <div className="mb-4">
                {isTierWithSupport(tier) ? (
                  <AnimatePresence mode="wait">
                    <p
                      key={supportLabel(tier)}
                      className="text-2xl sm:text-3xl font-bold text-white leading-tight"
                    >
                      {tier.price}
                      <span className="block text-sm font-normal text-white/70 mt-1">
                        + {supportLabel(tier)} support
                      </span>
                    </p>
                  </AnimatePresence>
                ) : (
                  <>
                    <p className="text-2xl sm:text-3xl font-bold text-white">{tier.price}</p>
                    <p className="text-white/60 text-sm mt-1">{tier.priceSubtext}</p>
                  </>
                )}
              </div>

              <h3 id={`pricing-${tier.id}`} className="text-lg font-bold text-white">
                {tier.name}
                {tier.subtitle ? (
                  <span className="block text-sm font-normal text-white/70 mt-0.5">
                    {tier.subtitle}
                  </span>
                ) : null}
              </h3>
              <p className="mt-2 text-white/70 text-sm">{tier.description}</p>

              {isTierWithSupport(tier) && (
                <p className="mt-2 text-emerald-400/90 text-xs font-medium">{HOSTING_NOTE}</p>
              )}

              <ul className="mt-4 space-y-2 flex-1" role="list">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-white/85">
                    <Check className="w-4 h-4 shrink-0 text-emerald-400 mt-1" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/dashboard"
                className={`mt-6 block w-full text-center rounded-lg py-3 font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "glass border border-white/20 hover:bg-white/10"
                }`}
              >
                {tier.type === "one-off" ? "Enquire" : "Get started"}
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
