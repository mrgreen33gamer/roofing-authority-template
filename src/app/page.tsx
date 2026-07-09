// Ironclad Roofing Co. — Homepage
// Phase 2: Reshuffled component order + fresh content
// Original order: WelcomePage → TrustBar → ServiceCards → WhatToExpect → WhyChooseUs
//                 → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection
//                 → LocalServiceAreas → FAQ → CTABanner → BlogPreview → Form
//
// New order:      WelcomePage → TrustBar → ImpactMetrics → ServiceCards
//                 → WhyChooseUs → CTABanner (mid) → ProcessTimeline → Testimonials
//                 → GuaranteeSection → LocalServiceAreas → WhatToExpect → FAQ
//                 → BlogPreview → Form
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faHouseChimney, faCloudRain, faLayerGroup, faSearch, faBroom, faBuilding,
  faTrophy, faChartLine, faClock,
  faBolt, faShieldHalved, faUsers,
  faHeadset, faFileContract, faCheckCircle,
  faFileAlt, faRotateLeft, faLock, faStar,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  // ── Services ────────────────────────────────────────────────────────────────
  const services = [
    {
      icon: faHouseChimney,
      title: "Roof Replacement",
      body: "Free on-roof inspection, flat-rate quote, and full tear-off installation. Most homes are done in a single day.",
      link: "/services/roof-replacement",
      image: "/pages/home/services/replacement.jpg",
    },
    {
      icon: faCloudRain,
      title: "Storm Damage Restoration",
      body: "24/7 emergency tarping and full insurance claim handling after hail or wind damage — we meet the adjuster on-site.",
      link: "/services/storm-damage-restoration",
      image: "/pages/home/services/storm.jpg",
    },
    {
      icon: faLayerGroup,
      title: "Roof Repair",
      body: "Same-day fixes for leaks, missing shingles, and flashing issues — most repairs completed in one visit.",
      link: "/services/roof-repair",
      image: "/pages/home/services/repair.jpg",
    },
    {
      icon: faSearch,
      title: "Roof Inspection",
      body: "A thorough, honest on-roof assessment with full photo documentation — never just a guess from the ground.",
      link: "/services/roof-inspection",
      image: "/pages/home/services/inspection.jpg",
    },
    {
      icon: faBroom,
      title: "Gutter Installation",
      body: "Seamless gutters sized right for your roofline — protects your foundation and fascia from water damage.",
      link: "/services/gutter-installation",
      image: "/pages/home/services/gutters.jpg",
    },
    {
      icon: faBuilding,
      title: "Commercial Roofing",
      body: "Flat and low-slope roofing for warehouses, retail, and multi-family properties, with minimal business disruption.",
      link: "/services/commercial-roofing",
      image: "/pages/home/services/commercial.jpg",
    },
  ];

  // ── Impact metrics (moved up — builds trust before selling) ─────────────────
  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Roofs restored across Central Texas",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 15,   label: "Years of local roofing experience",    suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",         suffix: "%", duration: 2 },
  ];

  // ── Why Choose Us (3 differentiators) ───────────────────────────────────────
  const whyFeatures = [
    {
      icon: faBolt,
      title: "Emergency Response — Any Hour",
      description: "Roof leaking at 11pm after a storm? We answer. Emergency dispatch is available 7 days a week, evenings included. Storm damage doesn't wait, and neither do we.",
    },
    {
      icon: faShieldHalved,
      title: "GAF Master Elite® Certified",
      description: "Every crew lead holds GAF Master Elite® certification — a status held by only about 2% of roofing contractors nationwide. No unlicensed subs, no shortcuts.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2010",
      description: "We're not a franchise. Ironclad was founded in Georgetown by Mike Hawkins. Every decision is made locally, and every call is answered by someone who lives here.",
    },
  ];

  // ── How it works (process) ───────────────────────────────────────────────────
  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day inspection that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Tech Arrives On Time",
      description: "Uniformed, background-checked crew lead shows up in the window we promised. Full roof inspection — explained in plain English, not roofing jargon.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before we touch anything. You decide — zero pressure to proceed. The quote covers materials and labor, and it never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Warranted",
      description: "Quality materials, clean worksite, 25-year workmanship warranty on every job. We leave when you're satisfied — not when we feel like it.",
      icon: faCheckCircle,
    },
  ];

  // ── What to expect (moved lower — reinforces process detail after trust built) ─
  const expectations = [
    {
      icon: faSearch,
      title: "Honest Roof Assessment",
      description: "We diagnose what's actually wrong — not what's most profitable to fix. You see the findings and photos before we recommend anything.",
    },
    {
      icon: faLayerGroup,
      title: "Clean, Respectful Service",
      description: "Yard protected, magnetic nail sweep after every job, property left exactly as we found it. Every single visit.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work starts. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Manufacturer-Quality Materials",
      description: "We install GAF, Owens Corning, and other top-tier materials on every job, backed by the full 25-year warranty. No off-brand shortcuts.",
    },
  ];

  // ── Service areas ────────────────────────────────────────────────────────────
  const localAreas = [
    { town: "Georgetown",   benefit: "Home base — fastest dispatch and most available crews in the city.", badge: "Home Base" },
    { town: "Round Rock",   benefit: "Full residential and commercial coverage. On our regular route.",     badge: "" },
    { town: "Cedar Park",   benefit: "Same-day availability for Cedar Park homes and businesses.",          badge: "" },
    { town: "Leander",      benefit: "Regular service area — quick turnaround guaranteed.",                 badge: "" },
    { town: "Liberty Hill", benefit: "Rural coverage, no trip charge for most Liberty Hill addresses.",     badge: "" },
    { town: "Taylor",       benefit: "Full coverage for Taylor and Williamson County customers.",           badge: "" },
  ];

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  const faq = [
    {
      question: "How much does a roof replacement cost in Georgetown?",
      answer: "Most asphalt shingle replacements run $9,000–$18,000 depending on size and pitch. Metal and tile run higher. We always provide a flat-rate written quote after a free on-roof inspection — no surprises.",
    },
    {
      question: "Do you offer emergency storm damage service?",
      answer: "Yes — 7 days a week including evenings and weekends. A damaged roof after a storm is a genuine emergency. Call us anytime at (512) 900-6200.",
    },
    {
      question: "How quickly can you come out?",
      answer: "Same-day inspections are available most days. Emergency calls are dispatched within 1–2 hours. We'll give you an honest ETA when you call — not a 4-hour window.",
    },
    {
      question: "What roofing materials do you install?",
      answer: "Asphalt shingle (GAF, Owens Corning, CertainTeed), standing seam and metal, tile, and flat/low-slope systems. We'll help you pick the right material for your home and budget.",
    },
    {
      question: "Are you certified and insured in Texas?",
      answer: "Yes — GAF Master Elite® certified, fully insured, and bonded. That certification is held by only about 2% of roofing contractors nationwide. Proof available on request.",
    },
    {
      question: "Do you offer financing for a new roof?",
      answer: "Yes — flexible financing with approved credit, including 0% interest options for qualifying homeowners. Ask us when you get your quote.",
    },
  ];

  // ── TrustBar badges (roofing-specific) ──────────────────────────────────────
  const trustBadges = [
    { icon: faStar,          label: "4.9★ Google Rating",   sub: "400+ Reviews" },
    { icon: faShieldHalved,  label: "Fully Insured",        sub: "& Bonded" },
    { icon: faTrophy,        label: "GAF Master Elite®",    sub: "Top 2% of Roofers" },
    { icon: faClock,         label: "Same-Day Inspections", sub: "7 Days a Week" },
    { icon: faBolt,          label: "Emergency Available",  sub: "Evenings & Weekends" },
    { icon: faFileAlt,       label: "Flat-Rate Pricing",    sub: "No Surprises" },
    { icon: faRotateLeft,    label: "25-Year Warranty",     sub: "Materials & Labor" },
    { icon: faLock,          label: "No Contracts",         sub: "Ever" },
    { icon: faHouseChimney,  label: "All Materials Installed", sub: "Shingle, Metal, Tile" },
    { icon: faUsers,         label: "Locally Owned",        sub: "Since 2010" },
  ];

  // Storm-urgency rhythm: metrics → form early → services → CTA mid
  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Georgetown's trusted roofing company — GAF Master Elite® certified, insured, and warrantied on every job"
      />
      <div className={styles.section}>
        <ImpactMetrics title="Numbers That Speak for Us" metrics={metrics} cityName="Georgetown" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Georgetown" slug="/" spot="homepage-contact-form" formVariant={2} />
      </div>
      <div className={styles.section}>
        <ServiceCardComponent heading="Complete Roofing Services for Your Home" cards={services} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Georgetown" features={whyFeatures} title="What Makes Ironclad Different" />
      </div>
      <CTABanner
        headline="Storm Damage? Leaking Roof? Call Now."
        subline="Inspections, repairs, and replacements with insurance-aware documentation and clean tear-offs."
        primaryText="Call (512) 900-6200"
        primaryLink="tel:+15129006200"
        secondaryText="Roof Inspection"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Georgetown" areas={localAreas} servicePath="" title="Serving All of Central Texas" />
      </div>
      <div className={styles.section}>
        <WhatToExpect sectionTitle="Every Service Call, Every Time" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="Roofing Questions — Answered Straight" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
    </main>
  );
}
