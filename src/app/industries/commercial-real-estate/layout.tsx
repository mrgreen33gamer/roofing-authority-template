// src/app/industries/commercial-real-estate/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironcladroofingtx.com';
const url = `${BASE_URL}/industries/commercial-real-estate`;

export const metadata: Metadata = {
  title: "Commercial Real Estate Roofing | Ironclad Roofing Co.",
  description: "Tenant-aware scheduling, low-slope TPO/EPDM roofing, and portfolio-wide condition reports for commercial real estate owners and property managers in Central Texas.",
  keywords: [
    "commercial real estate roofing Texas",
    "commercial roofing contractor Georgetown",
    "TPO EPDM roofing Central Texas",
    "commercial property roof replacement Texas",
    "multi-building portfolio roofing",
    "Ironclad Roofing Co. commercial",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Real Estate Roofing | Ironclad Roofing Co.",
    description: "Tenant-aware scheduling, low-slope TPO/EPDM roofing, and portfolio-wide condition reports for commercial real estate portfolios in Central Texas.",
    url, siteName: "Ironclad Roofing Co.", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/logos/ironclad-banner.png?v=1`, alt: "Commercial real estate roofing – Ironclad Roofing Co." }],
  },
  twitter: { card: "summary_large_image", title: "Commercial Real Estate Roofing | Ironclad Roofing Co.", description: "Tenant-aware scheduling, low-slope TPO/EPDM roofing, and portfolio-wide condition reports for commercial real estate portfolios in Central Texas.", images: [`${BASE_URL}/logos/ironclad-banner.png?v=1`] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Roofing Programs for Commercial Real Estate",
  description: "Tenant-aware scheduling, low-slope TPO/EPDM roofing, and portfolio-wide condition reports for commercial real estate owners and property managers in Central Texas.",
  provider: { "@type": "RoofingContractor", name: "Ironclad Roofing Co.", url: BASE_URL, telephone: "+15129006200", address: { "@type": "PostalAddress", addressLocality: "Georgetown", addressRegion: "TX", addressCountry: "US" } },
  serviceType: "Commercial Roofing, TPO/EPDM Installation, Roof Replacement, Storm Damage Restoration",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ironclad Roofing Co. — Commercial Real Estate Roofing",
  description: "Tenant-aware scheduling, low-slope TPO/EPDM roofing, and portfolio-wide condition reports for commercial real estate portfolios in Central Texas.",
  url,
  provider: { "@type": "RoofingContractor", name: "Ironclad Roofing Co.", url: BASE_URL },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: ["Commercial Roofing", "Roof Replacement", "Roof Inspection", "Storm Damage Restoration"],
};

export default function CommercialRealEstateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      {children}
    </>
  );
}
