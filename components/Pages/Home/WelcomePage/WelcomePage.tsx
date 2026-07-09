'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './styles.module.scss';

// ── Rain canvas ───────────────────────────────────────────────────────────────
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    const pts = Array.from({ length: 38 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5, vx: (Math.random() - 0.5) * 1.5,
      vy: Math.random() * 4 + 3, o: Math.random() * 0.35 + 0.7,
      len: Math.random() * 10 + 8,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.save(); ctx.globalAlpha = p.o;
        ctx.strokeStyle = '#16def9'; ctx.lineWidth = p.r;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.vx * 1.5, p.y + p.len); ctx.stroke();
        ctx.restore();
        p.x += p.vx; p.y += p.vy;
        if (p.y > canvas.height + 10) { p.y = -10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className={styles.particleCanvas} aria-hidden="true" />;
}

// ── Storm severity gauge (reuses the original thermometer CSS/animation shape) ─
function TempMeter() {
  const [fill, setFill] = useState(0);
  useEffect(() => { const t = setTimeout(() => setFill(72), 750); return () => clearTimeout(t); }, []);
  return (
    <div className={styles.thermo} aria-hidden="true">
      {/* tube + bulb stacked in normal flow → reliable centering */}
      <div className={styles.thermoColumn}>
        <div className={styles.thermoTube}>
          <motion.div
            className={styles.thermoFill}
            initial={{ height: '0%' }}
            animate={{ height: `${fill}%` }}
            transition={{ duration: 2.0, delay: 0.85, ease: [0.34, 1.2, 0.64, 1] }}
          />
        </div>
        <div className={styles.thermoBulb} />
      </div>
      {/* labels aligned to tube height */}
      <div className={styles.thermoLabels}>
        <span className={styles.thermoTop}>SEVERE</span>
        <span className={styles.thermoMid}>Georgetown, TX</span>
        <span className={styles.thermoBot}>CALM</span>
      </div>
    </div>
  );
}

const CHIPS = ['Same-Day Service', 'No Contracts', 'GAF Master Elite®', '15+ Yrs Local', '25-Yr Warranty'];

export default function WelcomePage() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <ParticleCanvas />
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>

        {/* LEFT ── text */}
        <div className={styles.content}>
          <motion.div className={styles.badge}
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <span className={styles.badgeDot} />
            Georgetown&apos;s Most Trusted Roofer — Since 2010
          </motion.div>

          <motion.h1 className={styles.headline}
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Built to Last.<br />Built for Storms.<br />
            <span className={styles.accentLine}>Ironclad Roofing.</span>
          </motion.h1>

          <motion.p className={styles.sub}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}>
            Flat-rate pricing. Same-day inspections. 25-year workmanship warranty on every job.
            Serving Georgetown and Central Texas with GAF Master Elite®-certified roofing crews.
          </motion.p>

          <motion.div className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}>
            <a href="tel:+15129006200" className={styles.ctaPrimary}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call (512) 900-6200
            </a>
            <Link href="/contact" className={styles.ctaSecondary}>
              Free Estimate
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </motion.div>

          <motion.div className={styles.chips}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}>
            {CHIPS.map(c => (
              <span key={c} className={styles.chip}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT ── visual widget */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
          aria-hidden="true"
        >
          {/* bg snowflake */}
          <motion.div className={styles.bgFlake}
            animate={{ rotate: 360 }}
            transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}>
            <svg width="420" height="420" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round">
              <line x1="12" y1="2" x2="12" y2="22"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <polyline points="8 6 12 2 16 6"/>
              <polyline points="8 18 12 22 16 18"/>
              <polyline points="6 8 2 12 6 16"/>
              <polyline points="18 8 22 12 18 16"/>
            </svg>
          </motion.div>

          {/* ── stat card: systems serviced — upper left ── */}
          <motion.div className={`${styles.statCard} ${styles.sc1}`}
            initial={{ opacity: 0, y: -10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.05, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.scNum}>2,400+</span>
            <span className={styles.scLbl}>Roofs Restored</span>
          </motion.div>

          {/* ── stat card: rating — upper right ── */}
          <motion.div className={`${styles.statCard} ${styles.sc2}`}
            initial={{ opacity: 0, y: -10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.2, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.scNum}>4.9 ★</span>
            <span className={styles.scLbl}>Google Rating</span>
          </motion.div>

          {/* ── thermometer — dead center ── */}
          <TempMeter />

          {/* ── stat card: warranty — lower left ── */}
          <motion.div className={`${styles.statCard} ${styles.sc3}`}
            initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.35, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.scNum}>25-Year</span>
            <span className={styles.scLbl}>Warranty Included</span>
          </motion.div>

          {/* ── stat card: same-day — lower right, orange ── */}
          <motion.div className={`${styles.statCard} ${styles.sc4} ${styles.scOrange}`}
            initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.scNum}>Same-Day</span>
            <span className={styles.scLbl}>Service Available</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
