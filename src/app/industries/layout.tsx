// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironcladroofingtx.com';
const url      = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Commercial & Institutional Roofing | Ironclad Roofing Co.",
  description:
    "Ironclad Roofing Co. provides roofing programs for HOAs and property managers, commercial real estate, and municipal and government facilities across Georgetown and Central Texas.",
  keywords: [
    "HOA roofing Georgetown TX",
    "property management roofing Central Texas",
    "commercial real estate roofing Texas",
    "municipal roofing contractor Texas",
    "government facility roofing Georgetown",
    "multi-property roofing program Texas",
    "Ironclad Roofing Co. industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | Ironclad Roofing Co. — Georgetown, TX",
    description:
      "Roofing programs for HOAs, commercial real estate, and municipal and government facilities across Central Texas.",
    url,
    siteName: "Ironclad Roofing Co.",
    locale: "en_US",
    type: "website",
    images: [{ url: `${BASE_URL}/logos/ironclad-banner.png?v=1`, alt: "Ironclad Roofing Co. — Industries Served" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Ironclad Roofing Co.",
    description: "Roofing programs for HOAs, commercial real estate, and municipal facilities across Central Texas.",
    images: [`${BASE_URL}/logos/ironclad-banner.png?v=1`],
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Industries", item: url },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial & Institutional Roofing — Georgetown TX",
  description:
    "Ironclad Roofing Co. provides tailored roofing programs for HOAs and property managers, commercial real estate, and municipal and government facilities across Central Texas.",
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
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: "Roofing, Storm Damage Restoration, Roof Maintenance Programs",
  url,
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  );
}
