// Ironclad Roofing Hero — Storm-ready photo command
// Photographic parallax roof scene + an authentic roofer photo card replaces the
// abstract storm-readiness dial. Real imagery, iron plate + rivet-amber system.
// Photos live in /public/pages/home/welcome and ship with the template.
'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
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

const GALLERY = [
  { src: '/pages/home/welcome/hero-roof.jpg', alt: 'Residential roof line', label: 'Replace' },
  { src: '/pages/home/welcome/hero-shingles.jpg', alt: 'Architectural shingles', label: 'Shingles' },
  { src: '/pages/home/welcome/hero-crew.jpg', alt: 'Roofing crew at work', label: 'Crew' },
];

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.06, reduceMotion ? 1.06 : 1.16]);

  const badgeText = "Georgetown's Most Trusted Roofer — Since 2010";
  const headlineLines = ['Built to Last.', 'Built for Storms.'];
  const headlineAccent = 'Ironclad Roofing.';
  const subheadline =
    'Flat-rate pricing. Same-day inspections. 25-year workmanship warranty on every job. Serving Georgetown and Central Texas with GAF Master Elite®-certified roofing crews.';
  const primaryCta = { label: 'Call (512) 900-6200', href: 'tel:+15129006200' };
  const secondaryCta = { label: 'Free Estimate', href: '/contact' };
  const chips = ['Same-Day Service', 'No Contracts', 'GAF Master Elite®', '15+ Yrs Local', '25-Yr Warranty'];

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — wide roof scene at dusk */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/hero-roof.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Iron + amber scrim keeps the headline legible and on-brand */}
      <div className={styles.photoBgScrim} aria-hidden="true" />

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

        {/* Authentic roofer photo — the ownable image, framed as a spec card */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: 'easeOut' }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/hero-main.jpg"
              alt="Ironclad Roofing crew member tearing off old shingles on a residential roof in Georgetown, TX"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 420px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              GAF Master Elite® · On-Site
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Same-day inspections
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> 25-year workmanship warranty
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
