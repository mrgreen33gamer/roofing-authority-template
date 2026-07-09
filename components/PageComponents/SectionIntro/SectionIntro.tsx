// components/PageComponents/SectionIntro/SectionIntro.tsx
//
// FIX: Glitch on the eyebrow icon (referenced as the "Gear" animation in TODOs)
// Root cause:
//   The icon used to live inside a parent <motion.span> that animated
//   y: -10 → 0 on enter. If the SCSS attaches a CSS @keyframes spin (rotate)
//   to .tagIcon, the browser composites two transforms on the same subtree:
//   the parent's translateY (Framer Motion) and the child's rotate (CSS keyframe).
//   On the first paint after IntersectionObserver fires whileInView, the
//   compositor briefly reconciles those transforms in the wrong order,
//   producing the "jump" / stutter on enter.
//
// Solution:
//   1. The icon is now its own <motion.span> element with its own transform
//      origin and isolated will-change.
//   2. The infinite spin is owned by Framer Motion (animate.rotate: 360,
//      repeat: Infinity, ease: linear) — NOT a CSS keyframe — so transforms
//      compose predictably and the parent's enter transform doesn't fight it.
//   3. The parent <motion.span> only animates opacity now; positioning is
//      handled via a sibling motion <span> wrap with y. This keeps the
//      transform layers cleanly separated (rotate stays on the icon node only).
//
// IMPORTANT — for this fix to fully take effect, your styles.module.scss
// MUST NOT define an `animation: spin <duration> linear infinite;` rule on
// `.tagIcon`. If it does, remove that rule — Framer Motion now drives the
// rotation. (Keeping both will reintroduce the conflict.)
'use client';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

interface SectionIntroProps {
  title:    string;
  subtitle: string;
  light?:   boolean;
  tag?:     string;
}

const SectionIntro: React.FC<SectionIntroProps> = ({ title, subtitle, light, tag }) => (
  <div className={`${styles.wrap} ${light ? styles.light : ''}`}>
    {tag && (
      <motion.span
        className={styles.tag}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        aria-hidden="true"
      >
        <span className={styles.tagLine} />

        {/*
          Icon as its own motion element.
          - opacity fades in on enter (decoupled from rotation).
          - rotate spins forever, owned entirely by Framer Motion.
          - style.willChange='transform' hints the compositor to give the icon
            its own layer so the parent's transform never reflows it.
          - transformOrigin is locked to the geometric center.
        */}
        <motion.span
          className={styles.tagIcon}
          aria-hidden="true"
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.4, ease: 'easeOut' },
            rotate:  { duration: 14, ease: 'linear', repeat: Infinity },
          }}
          style={{
            display:          'inline-flex',
            willChange:       'transform',
            transformOrigin:  '50% 50%',
            // Force its own compositing layer — eliminates first-frame snap
            // when the parent enters the viewport.
            backfaceVisibility: 'hidden',
          }}
        >
          <FontAwesomeIcon icon={faHouseChimney} width={10} height={10} />
        </motion.span>

        {tag}
        <span className={styles.tagLine} />
      </motion.span>
    )}

    <motion.h1
      className={styles.title}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: tag ? 0.08 : 0 }}
    >
      {title}
    </motion.h1>

    <motion.p
      className={styles.subtitle}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: tag ? 0.16 : 0.08 }}
    >
      {subtitle}
    </motion.p>

    <motion.span
      className={styles.divider}
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.2 }}
    />
  </div>
);

export default SectionIntro;