import { getSiteUrl } from "@/lib/seo";

/**
 * JSON-LD ProfessionalService schema for the homepage.
 * UK formatting: currency GBP (£), local business in Leicestershire.
 */
export default function ProfessionalServiceSchema() {
  const siteUrl = getSiteUrl();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Haddon Digital Group",
    description:
      "UK Digital Agency and Web Developer in Leicestershire. Web design, mobile app development and digital transformation. Packages from £299.00.",
    url: siteUrl,
    image: `${siteUrl}/favicon.svg`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Leicestershire",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", latitude: 52.6369, longitude: -1.3753 },
      geoRadius: "50000",
    },
    priceRange: "£299.00 - £999.00",
    currency: "GBP",
    serviceType: ["Web Design", "Mobile App Development", "Digital Transformation"],
    offers: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Essential" },
        price: 449,
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#pricing`,
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Advanced" },
        price: 699,
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#pricing`,
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Professional" },
        price: 999,
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#pricing`,
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mobile App" },
        price: 299,
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/#pricing`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
