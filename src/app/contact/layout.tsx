// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironcladroofingtx.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact Ironclad Roofing Co. | Schedule Service in Georgetown & Central Texas',
  description:
    'Contact Ironclad Roofing Co. to schedule a roof inspection, storm damage repair, or a free estimate. Serving Georgetown, Round Rock, Cedar Park, Leander, and all of Central Texas. Call (512) 900-6200.',
  keywords: [
    'contact Ironclad Roofing Co.',
    'roofing service Georgetown TX',
    'schedule roof inspection Georgetown',
    'roofing estimate Central Texas',
    'Ironclad Roofing contact',
    '512-900-6200',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact Ironclad Roofing Co. | Schedule Service in Georgetown & Central Texas',
    description:
      'Call, text, or submit a request. Free inspections available. Flat-rate pricing, 25-year workmanship warranty, GAF Master Elite®-certified crews.',
    url,
    siteName: 'Ironclad Roofing Co.',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ironclad Roofing Co. | Georgetown & Central Texas',
    description: 'Schedule roofing service or get a free estimate. Call (512) 900-6200.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
