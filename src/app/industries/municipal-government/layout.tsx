// src/app/industries/municipal-government/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironcladroofingtx.com';
const url = `${BASE_URL}/industries/municipal-government`;

export const metadata: Metadata = {
  title: "Municipal & Government Roofing | Ironclad Roofing Co.",
  description: "Bid-ready proposals, prevailing wage compliance, and fiscal-year-aligned roofing programs for municipalities, school districts, and government facilities in Central Texas.",
  keywords: [
    "municipal roofing contractor Texas",
    "government facility roofing Georgetown",
    "school district roofing Central Texas",
    "public bid roofing contractor Texas",
    "prevailing wage roofing Texas",
    "Ironclad Roofing Co. municipal",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Municipal & Government Roofing | Ironclad Roofing Co.",
    description: "Bid-ready proposals, prevailing wage compliance, and fiscal-year-aligned roofing programs for municipalities, school districts, and government facilities in Central Texas.",
    url, siteName: "Ironclad Roofing Co.", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/logos/ironclad-banner.png?v=1`, alt: "Municipal and government roofing – Ironclad Roofing Co." }],
  },
  twitter: { card: "summary_large_image", title: "Municipal & Government Roofing | Ironclad Roofing Co.", description: "Bid-ready proposals, prevailing wage compliance, and fiscal-year-aligned roofing programs for municipalities, school districts, and government facilities in Central Texas.", images: [`${BASE_URL}/logos/ironclad-banner.png?v=1`] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Roofing Programs for Municipal & Government Facilities",
  description: "Bid-ready proposals, prevailing wage compliance, and fiscal-year-aligned roofing programs for municipalities, school districts, and government facilities in Central Texas.",
  provider: { "@type": "RoofingContractor", name: "Ironclad Roofing Co.", url: BASE_URL, telephone: "+15129006200", address: { "@type": "PostalAddress", addressLocality: "Georgetown", addressRegion: "TX", addressCountry: "US" } },
  serviceType: "Commercial Roofing, Roof Replacement, Roof Inspection, Storm Damage Restoration",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ironclad Roofing Co. — Municipal & Government Roofing",
  description: "Bid-ready proposals, prevailing wage compliance, and fiscal-year-aligned roofing programs for municipalities, school districts, and government facilities in Central Texas.",
  url,
  provider: { "@type": "RoofingContractor", name: "Ironclad Roofing Co.", url: BASE_URL },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: ["Commercial Roofing", "Roof Replacement", "Roof Inspection", "Storm Damage Restoration"],
};

export default function MunicipalGovernmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      {children}
    </>
  );
}
