// src/app/service-areas/page.tsx
// Ironclad Roofing Co. — Service Areas Page
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.scss';
import CTABanner from '#/PageComponents/CTABanner/CTABanner';
import FAQ from '#/PageComponents/FAQ/FAQ';

const SERVICE_AREAS = [
  {
    city:        'Georgetown',
    slug:        'georgetown-tx',
    county:      'Williamson County',
    badge:       'Home Base',
    description: 'Our headquarters. Fastest response times, same-day inspections available 7 days a week. Full roofing repair, replacement, and storm damage restoration across all of Georgetown.',
    highlights:  ['Same-day inspections', 'Storm emergency dispatch', 'All services available'],
  },
  {
    city:        'Round Rock',
    slug:        'round-rock-tx',
    county:      'Williamson County',
    badge:       'Primary Area',
    description: 'Full roofing coverage for Round Rock homes and businesses. Fast dispatch from our Georgetown base — typically under 30 minutes.',
    highlights:  ['30-min dispatch', 'Residential & commercial', 'Insurance claim assistance'],
  },
  {
    city:        'Cedar Park',
    slug:        'cedar-park-tx',
    county:      'Williamson County',
    badge:       'Primary Area',
    description: "Serving Cedar Park's residential neighborhoods with the same flat-rate pricing and 25-year workmanship warranty as every other area we cover.",
    highlights:  ['Flat-rate pricing', '25-year warranty', 'All major shingle brands'],
  },
  {
    city:        'Leander',
    slug:        'leander-tx',
    county:      'Williamson County',
    badge:       '',
    description: 'Reliable roofing service for Leander residents. We install and repair all major roofing systems — asphalt shingle, metal, tile, and flat/low-slope.',
    highlights:  ['All roof types', 'GAF Master Elite® crews', 'No contracts'],
  },
  {
    city:        'Liberty Hill',
    slug:        'liberty-hill-tx',
    county:      'Williamson County',
    badge:       '',
    description: 'Rural and residential roofing service for the Liberty Hill area. We make the drive — flat-rate pricing applies just the same.',
    highlights:  ['Rural coverage', 'Flat-rate pricing', 'Storm damage available'],
  },
  {
    city:        'Hutto',
    slug:        'hutto-tx',
    county:      'Williamson County',
    badge:       '',
    description: 'Roof repair, replacement, and inspection for Hutto homes and businesses. Fast-growing neighborhoods, same dependable crews.',
    highlights:  ['New-build & resale roofs', 'Residential & commercial', 'Same-day when available'],
  },
  {
    city:        'Taylor',
    slug:        'taylor-tx',
    county:      'Williamson County',
    badge:       '',
    description: 'Full-service roofing coverage for Taylor. Older housing stock and new development alike — all systems, all brands.',
    highlights:  ['Full service coverage', 'All neighborhoods', 'Commercial & residential'],
  },
  {
    city:        'Jarrell',
    slug:        'jarrell-tx',
    county:      'Williamson County',
    badge:       '',
    description: 'Extending our coverage north to Jarrell — residents get the same certified crews, flat-rate pricing, and 25-year workmanship warranty.',
    highlights:  ['Northern Williamson County', 'Certified crews', '25-year warranty'],
  },
];

const faq = [
  {
    question: 'What areas do you service?',
    answer: 'We serve Georgetown and the surrounding Central Texas region — including Round Rock, Cedar Park, Leander, Liberty Hill, Hutto, Taylor, Jarrell, and most communities within about 35 miles of Georgetown. Call us if you\'re not sure — we probably cover your area.',
  },
  {
    question: 'Is your pricing the same in all service areas?',
    answer: 'Yes — flat-rate pricing applies across every city and community we serve. The price we quote before we start is the price you pay, regardless of your location.',
  },
  {
    question: 'Do you offer storm damage response outside of Georgetown?',
    answer: 'Yes. Storm damage inspections and emergency tarping are available 7 days a week across all of our service areas. Response times vary by distance from our Georgetown base — we\'ll give you an honest ETA when you call.',
  },
  {
    question: 'Do you work on commercial roofing in all areas?',
    answer: 'Yes — commercial roofing for retail centers, offices, HOAs, and multi-family properties is within scope across all our coverage areas. Call to discuss your specific building and location.',
  },
  {
    question: 'How fast can you get to me?',
    answer: 'For Georgetown and immediate surrounding areas (Round Rock, Cedar Park, Leander, Hutto), we typically dispatch within 1–2 hours for same-day calls. For outlying areas like Taylor, Jarrell, and Liberty Hill, same-day service is often available — call to confirm availability.',
  },
];

export default function ServiceAreasPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Central Texas Roofing — Since 2010
            </div>
            <h1 className={styles.heroTitle}>
              Service Areas
              <span className={styles.heroAccent}>We Come to You.</span>
            </h1>
            <p className={styles.heroSub}>
              Based in Georgetown, serving all of Central Texas. Flat-rate pricing, GAF Master Elite®-certified crews, and a 25-year workmanship warranty — no matter where you are.
            </p>
            <div className={styles.heroActions}>
              <a href="tel:+15129006200" className={styles.heroCTAPrimary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call (512) 900-6200
              </a>
              <Link href="/contact" className={styles.heroCTASecondary}>
                Free Estimate
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Quick trust strip */}
          <motion.div className={styles.trustStrip}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            {[
              { val: '35mi',   lbl: 'Coverage radius from Georgetown' },
              { val: '8+',     lbl: 'Cities we actively serve' },
              { val: 'Same Day', lbl: 'Inspections when available' },
              { val: '25-Year', lbl: 'Warranty on every roof' },
            ].map(({ val, lbl }) => (
              <div key={lbl} className={styles.trustStat}>
                <span className={styles.trustVal}>{val}</span>
                <span className={styles.trustLbl}>{lbl}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Areas grid ── */}
      <section className={styles.areasSection}>
        <div className={styles.areasSectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Full Coverage Map</span>
            <h2 className={styles.sectionTitle}>Every Community We Serve</h2>
            <p className={styles.sectionSub}>
              Click any city to see local service details, common roofing issues in your area, and what to expect from our team.
            </p>
          </div>

          <div className={styles.areasGrid}>
            {SERVICE_AREAS.map((area, i) => {
              const isHub = area.badge === 'Home Base';
              const isPrimary = area.badge === 'Primary Area';

              return (
                <motion.div
                  key={area.slug}
                  className={`${styles.areaCard} ${isHub ? styles.areaCardHub : ''} ${isPrimary ? styles.areaCardPrimary : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                >
                  {area.badge && (
                    <span className={`${styles.areaBadge} ${isHub ? styles.areaBadgeHub : styles.areaBadgeNearby}`}>
                      {area.badge}
                    </span>
                  )}

                  <div className={styles.areaPin} aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>

                  <div className={styles.areaTopRow}>
                    <h3 className={styles.areaCity}>{area.city}</h3>
                    <span className={styles.areaCounty}>{area.county}</span>
                  </div>

                  <p className={styles.areaDesc}>{area.description}</p>

                  <ul className={styles.areaHighlights}>
                    {area.highlights.map(h => (
                      <li key={h}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.areaFooter}>
                    <a href="tel:+15129006200" className={styles.areaCallBtn}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      Call Now
                    </a>
                    <Link href="/contact" className={styles.areaEstimateBtn}>
                      Free Estimate
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Not on the list? ── */}
      <section className={styles.unlisted}>
        <div className={styles.unlistedInner}>
          <div className={styles.unlistedIcon} aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div className={styles.unlistedText}>
            <h3>Don't see your city?</h3>
            <p>We cover most of Central Texas within about 35 miles of Georgetown. Call us — there's a good chance we serve your area.</p>
          </div>
          <a href="tel:+15129006200" className={styles.unlistedCTA}>
            Call (512) 900-6200
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ
        cityName="Central Texas"
        faq={faq}
        title="Service Area FAQs"
      />

      {/* ── CTA Banner ── */}
      <CTABanner
        headline="Ready to Schedule? We'll Come to You."
        subline="Same-day inspections available across Central Texas. Flat-rate pricing, 25-year workmanship warranty, no contracts ever."
        primaryText="Call (512) 900-6200"
        primaryLink="tel:+15129006200"
        secondaryText="Get a Free Estimate"
        secondaryLink="/contact"
      />

    </main>
  );
}
