// Ironclad Roofing Co. — Roof Inspection Service Page
// Order: Breadcrumb → SectionIntro → TrustBar → WhatToExpect → WhyChooseUs
//        → ProcessTimeline → ImpactMetrics → Testimonials → GuaranteeSection
//        → LocalServiceAreas → ValueComparison → FAQ → CTABanner → ServiceCards → Form
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faHouseChimney, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faTrophy, faChartLine, faCloudRain, faBroom,
  faLayerGroup, faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function RoofInspectionPage() {

  const expectations = [
    { icon: faSearch,        title: "Full On-Roof Walkthrough",             description: "We physically walk the roof, not just eyeball it from the ground — shingles, flashing, vents, valleys, and decking all get checked." },
    { icon: faFileContract,  title: "Detailed Photo Report",                description: "Every finding is documented with photos and plain-English notes, so you have a clear record — for yourself, a buyer, or your insurer." },
    { icon: faCheckCircle,   title: "Honest Assessment, No Upselling",      description: "If the roof is fine, we tell you it's fine. We only recommend work that's actually needed — never a scare tactic to sell a replacement." },
    { icon: faShieldHalved,  title: "Findings You Can Act On",              description: "You leave with a clear picture of your roof's condition and, if needed, a straightforward recommendation and price." },
  ];

  const whyFeatures = [
    { icon: faCalendarCheck, title: "Pre-Purchase, Pre-Sale & Annual Inspections", description: "Whether you're buying, selling, or just staying ahead of problems, we tailor the inspection to what you actually need to know." },
    { icon: faFileContract,  title: "Insurance-Ready Documentation",              description: "Reports formatted the way insurers and real estate transactions expect — clear photos, condition notes, and remaining life estimates." },
    { icon: faShieldHalved,  title: "GAF Master Elite® Trained Eyes",             description: "Our inspectors are trained to the same certified standard as our installation crews — a status held by only 2% of contractors nationwide." },
  ];

  const processSteps = [
    { number: 1, title: "Schedule",           description: "Book online or call — we'll find a time that works, often within a day or two.",                     icon: faHeadset },
    { number: 2, title: "On-Roof Inspection", description: "We walk the entire roof surface, checking every component, not just what's visible from a ladder.",   icon: faSearch },
    { number: 3, title: "Photo Documentation", description: "Every finding — good or bad — is photographed and logged for your written report.",                  icon: faFileContract },
    { number: 4, title: "Honest Walkthrough", description: "We review the findings with you in plain language and answer every question before we leave.",       icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Roofs inspected across Central Texas",        suffix: "+", duration: 3 },
    { icon: faChartLine, value: 40,   label: "Of inspections that find no repair needed",   suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years inspecting Georgetown-area roofs",       suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Home base — fastest scheduling for inspections.",        badge: "Fastest Response" },
    { town: "Round Rock",   benefit: "Regular inspection routes throughout Round Rock.",        badge: "" },
    { town: "Cedar Park",   benefit: "Pre-sale and annual inspections available quickly.",      badge: "" },
    { town: "Leander",      benefit: "On our standard route — flexible scheduling.",            badge: "" },
    { town: "Hutto",        benefit: "Full inspection coverage for Hutto homeowners.",          badge: "" },
    { town: "Taylor",       benefit: "Inspection service extends across Williamson County.",    badge: "" },
  ];

  const comparisonRows = [
    { feature: "Full on-roof walkthrough",              us: "✅ Every inspection",  others: "❌ Ground-level only" },
    { feature: "Written photo-documented report",       us: "✅ Always provided",   others: "❌ Verbal summary only" },
    { feature: "Recommends only necessary work",         us: "✅ Honest, no upsell", others: "❌ Often sales-driven" },
    { feature: "Insurance & real-estate ready format",   us: "✅ Yes",               others: "❌ Not standardized" },
    { feature: "GAF Master Elite® trained inspectors",   us: "✅ All inspectors",    others: "❌ Not always" },
  ];

  const faq = [
    { question: "How much does a roof inspection cost?",                    answer: "We offer free inspections when tied to an estimate for repair or replacement work. Standalone inspections for real estate transactions or insurance purposes are a flat fee, quoted up front — ask when you book." },
    { question: "Do I need an inspection before buying or selling a home?", answer: "Yes — a roof inspection gives buyers and sellers an objective, documented picture of the roof's condition, which can prevent surprises during closing or give leverage in negotiations." },
    { question: "How often should I have my roof inspected?",              answer: "We recommend an annual inspection for roofs over 10 years old, and after any major storm regardless of age. Newer roofs can typically go 2–3 years between routine checks." },
    { question: "Will you try to sell me a repair I don't need?",          answer: "No. If the roof is in good condition, we'll tell you exactly that. Our inspection reports document what we actually find — we don't inflate findings to generate work." },
    { question: "Do insurance companies require a specific type of inspection?", answer: "Many insurers want documented proof of roof condition, especially for older roofs or before issuing a new policy. Our reports include the photos and condition notes most insurers ask for." },
    { question: "What's included in the inspection report?",               answer: "Photos of the full roof surface, notes on shingle condition, flashing, vents, valleys, and decking (where visible), an estimated remaining roof life, and any recommended next steps." },
  ];

  const crossServices = [
    { icon: faCloudRain,    title: "Storm Damage Restoration", body: "Fast, insurance-ready repair after hail or wind damage.", link: "/services/storm-damage-restoration" },
    { icon: faLayerGroup,   title: "Roof Repair",              body: "Same-day fixes for leaks, missing shingles, and more.",    link: "/services/roof-repair" },
    { icon: faBroom,        title: "Gutter Installation",      body: "Seamless gutters sized right for your roofline.",          link: "/services/gutter-installation" },
    { icon: faHouseChimney, title: "Roof Replacement",         body: "Full tear-off and install, backed by a 25-year warranty.",  link: "/services/roof-replacement" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Roof Inspection" },
      ]} />

      <SectionIntro
        title="Roof Inspection in Georgetown, TX"
        subtitle="Thorough, honest inspections for pre-purchase, pre-sale, insurance, and annual maintenance — with full photo documentation."
      />

      <TrustBar headline="2,400+ Central Texas homeowners trust Ironclad for roofing service" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens During a Roof Inspection" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Georgetown" features={whyFeatures} title="Why Georgetown Calls Ironclad First" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Georgetown" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Georgetown" areas={localAreas} servicePath="services/roof-inspection" title="Roof Inspections Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="Roof Inspection FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Buying, Selling, or Just Not Sure? Get a Real Answer."
        subline="Full on-roof inspection with photo documentation — an honest assessment, not a sales pitch."
        primaryText="Call Us Now"
        primaryLink="tel:+15129006200"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4
          title="Schedule Your Inspection"
          cityName="Georgetown"
          slug="services/roof-inspection"
          spot="roof-inspection-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
