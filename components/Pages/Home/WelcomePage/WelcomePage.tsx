// Ironclad Roofing Hero — Storm-ready photo command
// Full-bleed roof photography + shingle-gauge meter + photo strip.
// Distinct from HVAC climate console (no snowflakes; iron/amber system).
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

function EmberCanvas({ color = '#d97706' }: { color?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    const pts = Array.from({ length: 26 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.35 + 0.08),
      o: Math.random() * 0.35 + 0.2,
    }));
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.o;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [color]);
  return <canvas ref={ref} className={styles.particleCanvas} aria-hidden="true" />;
}

function StormGauge({ target = 88 }: { target?: number }) {
  const [fill, setFill] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setFill(target), 700);
    return () => clearTimeout(t);
  }, [target]);
  return (
    <div className={styles.thermo} aria-hidden="true">
      <div className={styles.thermoColumn}>
        <div className={styles.thermoTube}>
          <motion.div
            className={styles.thermoFill}
            initial={{ height: '0%' }}
            animate={{ height: `${fill}%` }}
            transition={{ duration: 2.0, delay: 0.7, ease: [0.34, 1.2, 0.64, 1] }}
          />
        </div>
        <div className={styles.thermoBulb} />
      </div>
      <div className={styles.thermoLabels}>
        <span className={styles.thermoTop}>Storm</span>
        <span className={styles.thermoMid}>Ready</span>
        <span className={styles.thermoBot}>Base</span>
      </div>
    </div>
  );
}

const GALLERY = [
  { src: '/pages/home/welcome/hero-roof.jpg', alt: 'Residential roof line', label: 'Replace' },
  { src: '/pages/home/welcome/hero-shingles.jpg', alt: 'Architectural shingles', label: 'Shingles' },
  { src: '/pages/home/welcome/hero-crew.jpg', alt: 'Roofing crew at work', label: 'Crew' },
];

export default function WelcomePage() {
  const badgeText = "Georgetown's Most Trusted Roofer — Since 2010";
  const headlineLines = ['Built to Last.', 'Built for Storms.'];
  const headlineAccent = 'Ironclad Roofing.';
  const subheadline =
    'Flat-rate pricing. Same-day inspections. 25-year workmanship warranty on every job. Serving Georgetown and Central Texas with GAF Master Elite®-certified roofing crews.';
  const primaryCta = { label: 'Call (512) 900-6200', href: 'tel:+15129006200' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = ['Same-Day Service', 'No Contracts', 'GAF Master Elite®', '15+ Yrs Local', '25-Yr Warranty'];
  const stats = [
    { value: '2,400+', label: 'Roofs Restored' },
    { value: '4.9 ★', label: 'Google Rating' },
    { value: '25-Year', label: 'Warranty Included' },
    { value: 'Same-Day', label: 'Inspections' },
  ];

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.photoBg} aria-hidden="true">
        <img src="/pages/home/welcome/hero-main.jpg" alt="" className={styles.photoBgImg} />
        <div className={styles.photoBgScrim} />
      </div>

      <EmberCanvas color="#d97706" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>

          <motion.div
            className={styles.photoStrip}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
          >
            {GALLERY.map((g) => (
              <div key={g.label} className={styles.stripCard}>
                <img src={g.src} alt={g.alt} className={styles.stripImg} />
                <span className={styles.stripLabel}>{g.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <div className={styles.console}>
            <StormGauge target={88} />
            <div className={styles.statGrid}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.55 + i * 0.1 }}
                >
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
