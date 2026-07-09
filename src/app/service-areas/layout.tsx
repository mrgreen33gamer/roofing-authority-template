// src/app/service-areas/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironcladroofingtx.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Roofing Service Areas | Georgetown, Round Rock, Cedar Park, Leander & Central Texas | Ironclad',
  description:
    'Ironclad Roofing Co. serves Georgetown, Round Rock, Cedar Park, Leander, Liberty Hill, Hutto, Taylor, Jarrell, and all of Central Texas. Flat-rate pricing, same-day inspections, 25-year workmanship warranty.',
  keywords: [
    'roofing service areas Central Texas',
    'roofing Georgetown TX',
    'roofing Round Rock TX',
    'roofing Cedar Park TX',
    'roofing Leander TX',
    'roof repair Central Texas',
    'storm damage restoration Georgetown',
    'Ironclad Roofing service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Roofing Service Areas | Ironclad Roofing Co. — Central Texas',
    description:
      'Serving Georgetown and all of Central Texas with flat-rate roof repair, replacement, and storm damage restoration. Same-day inspections available.',
    url,
    siteName: 'Ironclad Roofing Co.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Service Areas | Ironclad Roofing Co. — Central Texas',
    description: 'Serving Georgetown and all of Central Texas. Flat-rate pricing, same-day inspections, 25-year workmanship warranty.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: 'Ironclad Roofing Co.',
  url: BASE_URL,
  telephone: '+15129006200',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1420 Rivery Blvd',
    addressLocality: 'Georgetown',
    addressRegion: 'TX',
    postalCode: '78628',
    addressCountry: 'US',
  },
  areaServed: [
    'Georgetown, TX', 'Round Rock, TX', 'Cedar Park, TX', 'Leander, TX',
    'Liberty Hill, TX', 'Hutto, TX', 'Taylor, TX', 'Jarrell, TX',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],
  priceRange: '$$',
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
