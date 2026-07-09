// src/app/about/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironcladroofingtx.com';
const url      = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About Ironclad Roofing Co. — Georgetown TX Roofing Company Since 2010",
  description:
    "Meet the Ironclad Roofing Co. team. Locally owned and operated in Georgetown, Texas since 2010. GAF Master Elite®-certified crews, fully insured, honest pricing, and a 25-year workmanship warranty on every roof. Serving Georgetown, Round Rock, Cedar Park, Leander, and all of Central Texas.",
  keywords: [
    "about Ironclad Roofing Co.",
    "Georgetown roofing company",
    "roofing contractor Georgetown TX",
    "locally owned roofing Georgetown",
    "GAF Master Elite certified Georgetown Texas",
    "Central Texas roofing company",
    "roofing company history Georgetown",
    "Mike Hawkins Ironclad Roofing Co.",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About Ironclad Roofing Co. — Georgetown TX Roofing Company Since 2010",
    description:
      "Locally owned and operated in Georgetown since 2010. GAF Master Elite®-certified, fully insured, flat-rate pricing, 25-year workmanship warranty. Serving all of Central Texas.",
    url,
    siteName: "Ironclad Roofing Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ironclad Roofing Co. — Georgetown TX Since 2010",
    description:
      "Locally owned roofing company in Georgetown, TX. GAF Master Elite®-certified, flat-rate pricing, 25-year workmanship warranty.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${BASE_URL}/#organization`,
  name: "Ironclad Roofing Co.",
  url: BASE_URL,
  telephone: "+15129006200",
  email: "hello@ironcladroofingtx.com",
  foundingDate: "2010",
  founder: {
    "@type": "Person",
    name: "Mike Hawkins",
    jobTitle: "Founder & Owner",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1420 Rivery Blvd",
    addressLocality: "Georgetown",
    addressRegion: "TX",
    postalCode: "78628",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Georgetown",   containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Round Rock",   containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Cedar Park",   containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Leander",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Liberty Hill", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hutto",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Taylor",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Jarrell",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  sameAs: [
    "https://www.facebook.com/ironcladroofingtx",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: url },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
