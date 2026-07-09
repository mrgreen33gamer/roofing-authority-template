// src/app/services/layout.tsx
// /services parent layout:
// - Broad "all services" metadata (no city/keyword cannibalization)
// - OfferCatalog schema listing all 6 roofing services
// - BreadcrumbList for the /services route
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironcladroofingtx.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Roofing Services | Replacement, Repair & Storm Damage | Ironclad Roofing Co.",
  description:
    "Ironclad Roofing Co. offers roof replacement, repair, storm damage restoration, inspections, gutter installation, and commercial roofing for Georgetown and Central Texas. GAF Master Elite® certified, no contracts.",
  keywords: [
    "roofing services Georgetown TX",
    "roof replacement Central Texas",
    "storm damage restoration Georgetown",
    "roof repair Round Rock TX",
    "roof inspection Cedar Park TX",
    "gutter installation Georgetown",
    "commercial roofing Central Texas",
    "Ironclad Roofing Co. services",
  ],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: "Roofing Services | Replacement, Repair & Storm Damage | Ironclad Roofing Co.",
    description:
      "Roof replacement, repair, storm damage restoration, inspections, and gutter installation for Georgetown and Central Texas. GAF Master Elite® certified, no contracts.",
    url,
    siteName: "Ironclad Roofing Co.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/logos/ironclad-banner.png?v=1`,
        alt: "Ironclad Roofing Co. — Roofing Services for Central Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Services | Ironclad Roofing Co.",
    description:
      "Roof replacement, repair, storm damage restoration, inspections, and gutter installation for Central Texas. GAF Master Elite® certified.",
    images: [`${BASE_URL}/logos/ironclad-banner.png?v=1`],
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Ironclad Roofing Co. — Roofing Services",
  description:
    "Full-service roofing offerings for Georgetown and Central Texas: roof replacement, repair, storm damage restoration, inspections, gutter installation, and commercial roofing.",
  provider: {
    "@type": "RoofingContractor",
    name: "Ironclad Roofing Co.",
    url: BASE_URL,
    telephone: "+15129006200",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Georgetown",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Replacement",
        description:
          "Full tear-off and GAF Master Elite® installation, backed by a 25-year workmanship warranty.",
        url: `${BASE_URL}/services/roof-replacement`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Repair",
        description:
          "Same-day fixes for leaks, missing shingles, and flashing issues.",
        url: `${BASE_URL}/services/roof-repair`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Storm Damage Restoration",
        description:
          "24/7 emergency tarping and full insurance claim handling after hail or wind damage.",
        url: `${BASE_URL}/services/storm-damage-restoration`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Roof Inspection",
        description:
          "Thorough, honest roof assessments with full photo documentation.",
        url: `${BASE_URL}/services/roof-inspection`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Gutter Installation",
        description:
          "Seamless gutters sized right for your roofline.",
        url: `${BASE_URL}/services/gutter-installation`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Commercial Roofing",
        description:
          "Flat and low-slope roofing for warehouses, retail, and multi-family properties.",
        url: `${BASE_URL}/services/commercial-roofing`,
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: url },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
