/**
 * Package tiers for Build your package and pricing.
 * Single source of truth for names, prices, and upgrade copy.
 */

export type PackageId = "essential" | "advanced" | "professional" | "additional-services";

export type PackageTier = {
  id: PackageId;
  name: string;
  price: string;
  priceValue: number;
  description: string;
  features: string[];
  /** Extra benefits for upgrade CTA (next tier) */
  upgradeTo?: {
    id: PackageId;
    name: string;
    extraPrice: number;
    extraPriceLabel: string;
    benefits: string[];
  };
};

export const PACKAGE_TIERS: PackageTier[] = [
  {
    id: "essential",
    name: "Essential",
    price: "£449.00",
    priceValue: 449,
    description: "A high-impact, single continuous page. Ideal for establishing a professional local presence.",
    features: [
      "Single high-performance continuous page",
      "Client Portal Access",
      "UK-Based High-Speed Hosting",
      "SEO Meta Tags",
    ],
    upgradeTo: {
      id: "advanced",
      name: "Advanced",
      extraPrice: 250,
      extraPriceLabel: "£250.00 more",
      benefits: [
        "Bespoke multi-page website",
        "Priority Client Portal Access",
        "All Essential features included",
      ],
    },
  },
  {
    id: "advanced",
    name: "Advanced",
    price: "£699.00",
    priceValue: 699,
    description: "A sophisticated multi-page site with premium navigation. Built for growing brands.",
    features: [
      "Bespoke Multiple-Page Website",
      "Priority Client Portal Access",
      "UK-Based High-Speed Hosting",
      "All Essential features included",
    ],
    upgradeTo: {
      id: "professional",
      name: "Professional",
      extraPrice: 300,
      extraPriceLabel: "£300.00 more",
      benefits: [
        "High-traffic & automation",
        "Custom iOS & Android App option",
        "Automated Abandoned Cart Emails",
        "Unlimited pages, dedicated PM",
      ],
    },
  },
  {
    id: "professional",
    name: "Professional",
    price: "£999.00",
    priceValue: 999,
    description: "High-performance digital ecosystem. Bespoke functionality and elite styling.",
    features: [
      "Custom iOS & Android App (£29.99/mo support)",
      "Automated Abandoned Cart Emails",
      "Unlimited pages, dedicated PM, advanced e-commerce",
      "UK-Based High-Speed Hosting",
    ],
    upgradeTo: undefined,
  },
  {
    id: "additional-services",
    name: "Custom iOS & Android App",
    price: "£299.00",
    priceValue: 299,
    description: "A branded mobile app for your business. Native iOS and Android apps so your customers can reach you on the go.",
    features: [
      "Native iOS and Android app",
      "Branded app for your business",
      "App Store & Play Store listing support",
      "Optional ongoing support (£29.99/mo)",
    ],
    upgradeTo: undefined,
  },
];

export const PAYMENT_LINKS: Record<PackageId, string> = {
  essential: process.env.NEXT_PUBLIC_PAYMENT_LINK_ESSENTIAL ?? "",
  advanced: process.env.NEXT_PUBLIC_PAYMENT_LINK_ADVANCED ?? "",
  professional: process.env.NEXT_PUBLIC_PAYMENT_LINK_PROFESSIONAL ?? "",
  "additional-services": process.env.NEXT_PUBLIC_PAYMENT_LINK_ADDITIONAL ?? "",
};
