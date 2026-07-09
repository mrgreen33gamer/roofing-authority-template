// src/app/layout.tsx
// Ironclad Roofing Co. — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Russo_One, Titillium_Web, Roboto } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — Russo One / Titillium Web / Roboto (iron industrial)
const fontTitle = Russo_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.ironcladroofingtx.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
// Next.js 14+ moved viewport / themeColor / colorScheme out of `metadata` and
// into a separate `viewport` export. The `viewportFit: 'cover'` is the single
// most important line in this file for the notch / home-indicator fix.
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  // Two themeColor entries so iOS Safari can pick the right one when the user
  // toggles light/dark mode. Both are obsidian dark to match the brand bg
  // applied to <body> in globals.css. Adjust if you want a lighter Safari
  // chrome tint for light-mode users.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#16181d" },
    { media: "(prefers-color-scheme: dark)",  color: "#16181d" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ironclad Roofing Co. | Roof Replacement, Repair & Storm Damage — Georgetown, TX",
    template: "%s | Ironclad Roofing Co.",
  },
  description:
    "Ironclad Roofing Co. is a Georgetown, TX roofing company offering roof replacement, repair, storm damage restoration, inspections, and gutter installation for Central Texas homes and businesses. GAF Master Elite® certified, fully insured, no contracts.",
  keywords: [
    "Ironclad Roofing Co.",
    "roofing company Georgetown TX",
    "roof replacement Georgetown Texas",
    "storm damage restoration Central Texas",
    "roof repair Round Rock TX",
    "roofing contractor Cedar Park TX",
    "gutter installation Georgetown",
    "emergency roof repair Georgetown",
  ],
  authors: [{ name: "Ironclad Roofing Co.", url: BASE_URL }],
  creator: "Ironclad Roofing Co.",
  publisher: "Ironclad Roofing Co.",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "Ironclad Roofing Co. | Roof Replacement, Repair & Storm Damage — Georgetown, TX",
    description:
      "Georgetown-based roofing company for roof replacement, repair, storm damage restoration, and gutter installation across Central Texas. GAF Master Elite® certified. No contracts.",
    url: BASE_URL,
    siteName: "Ironclad Roofing Co.",
    images: [
      {
        url: `${BASE_URL}/logos/ironclad-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "Ironclad Roofing Co. — Georgetown TX Roofing & Storm Damage Restoration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ironclad Roofing Co. | Georgetown TX Roofing & Storm Damage",
    description:
      "Roof replacement, repair, storm damage restoration & gutter installation for Central Texas. GAF Master Elite® certified — no contracts.",
    images: [`${BASE_URL}/logos/ironclad-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${BASE_URL}/#organization`,
  name: "Ironclad Roofing Co.",
  alternateName: "Ironclad Roofing",
  description:
    "Residential and commercial roofing services in Georgetown and Central Texas — roof replacement, repair, storm damage restoration, inspections, and gutter installation. GAF Master Elite® certified, fully insured, no contracts.",
  url: BASE_URL,
  telephone: "+15129006200",
  email: "hello@ironcladroofingtx.com",
  foundingDate: "2010",
  founder: {
    "@type": "Person",
    name: "Mike Hawkins",
    jobTitle: "Owner & GAF Master Elite® Roofing Contractor",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1420 Rivery Blvd",
    addressLocality: "Georgetown",
    addressRegion: "TX",
    postalCode: "78628",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.6333,
    longitude: -97.6772,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storm Damage Restoration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Inspection" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Roofing" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/ironcladroofingtx",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* ConditionalShell shows Header/Footer only on non-admin pages */}
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#d97706" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                background: "#16181d",
              }}
            >
              <PulseLoader size={50} color="#d97706" />
            </div>
          }
        >
          <JourneyTrackerProvider>
            {children}
          </JourneyTrackerProvider>
        </Suspense>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        {/* Footer only on non-admin pages */}
        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}