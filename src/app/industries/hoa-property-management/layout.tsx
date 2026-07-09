// src/app/industries/hoa-property-management/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironcladroofingtx.com';
const url = `${BASE_URL}/industries/hoa-property-management`;

export const metadata: Metadata = {
  title: "Roofing for HOAs & Property Management | Ironclad Roofing Co.",
  description: "Community-wide roof inspections, board-ready proposals, and coordinated storm claims for HOAs and property management companies in Central Texas.",
  keywords: [
    "HOA roofing contractor Texas",
    "property management roofing Georgetown",
    "HOA roof maintenance program Central Texas",
    "community roofing inspection Texas",
    "HOA storm damage roofing",
    "Ironclad Roofing Co. HOA",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Roofing for HOAs & Property Management | Ironclad Roofing Co.",
    description: "Community-wide inspections, board-ready proposals, and coordinated storm claims for HOAs and property managers in Central Texas.",
    url, siteName: "Ironclad Roofing Co.", locale: "en_US", type: "website",
    images: [{ url: `${BASE_URL}/logos/ironclad-banner.png?v=1`, alt: "HOA & property management roofing – Ironclad Roofing Co." }],
  },
  twitter: { card: "summary_large_image", title: "Roofing for HOAs & Property Management | Ironclad Roofing Co.", description: "Community-wide inspections, board-ready proposals, and coordinated storm claims for HOAs and property managers in Central Texas.", images: [`${BASE_URL}/logos/ironclad-banner.png?v=1`] },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Roofing Programs for HOAs & Property Management",
  description: "Community-wide roof inspections, board-ready proposals, and coordinated storm claims for HOAs and property management companies in Central Texas.",
  provider: { "@type": "RoofingContractor", name: "Ironclad Roofing Co.", url: BASE_URL, telephone: "+15129006200", address: { "@type": "PostalAddress", addressLocality: "Georgetown", addressRegion: "TX", addressCountry: "US" } },
  serviceType: "Roofing, Storm Damage Restoration, Roof Maintenance Programs",
  areaServed: { "@type": "State", name: "Texas" },
  url,
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ironclad Roofing Co. — HOA & Property Management Roofing",
  description: "Community-wide roof inspections, board-ready proposals, and coordinated storm claims for HOAs and property management companies in Central Texas.",
  url,
  provider: { "@type": "RoofingContractor", name: "Ironclad Roofing Co.", url: BASE_URL },
  areaServed: { "@type": "State", name: "Texas" },
  serviceType: ["Roof Replacement", "Roof Inspection", "Storm Damage Restoration", "Gutter Installation"],
};

export default function HOAPropertyManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      {children}
    </>
  );
}
