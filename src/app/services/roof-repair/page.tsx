// Ironclad Roofing Co. — Roof Repair Service Page
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
} from "@fortawesome/free-solid-svg-icons";

export default function RoofRepairPage() {

  const expectations = [
    { icon: faSearch,       title: "Free Diagnostic Inspection",            description: "We find the actual source of the leak or damage — not just the spot where it's showing up inside your ceiling." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Start",       description: "You'll know the exact repair cost before we touch a shingle. No hourly surprises, no change orders." },
    { icon: faClock,        title: "Most Repairs Done Same Day",           description: "Small and mid-size repairs — flashing, missing shingles, isolated leaks — are typically wrapped up in a single visit." },
    { icon: faShieldHalved, title: "25-Year Workmanship Warranty",         description: "Even routine repairs are backed by our full workmanship warranty. If it fails because of our work, we fix it free." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Fast Scheduling, Not Just for Emergencies", description: "You don't need a disaster to get quick service. Routine leak and shingle repairs get scheduled fast, usually within a day or two." },
    { icon: faHouseChimney, title: "Every Repair Method, Not Just Patches",     description: "We fix flashing, decking, vents, valleys, and shingles correctly the first time — not a temporary patch that fails next season." },
    { icon: faShieldHalved, title: "GAF Master Elite® Standards on Every Job", description: "Repairs are done to the same certified standard as our full replacements — a level held by only 2% of roofing contractors." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",       description: "Tell us what you're seeing — a stain, a missing shingle, a draft — and we'll get you scheduled fast.", icon: faHeadset },
    { number: 2, title: "Diagnose the Cause", description: "We inspect the roof and attic to find the real source, not just patch the visible symptom.",              icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",    description: "You get the exact repair price up front — most jobs are quoted and approved on the spot.",              icon: faFileContract },
    { number: 4, title: "Repair & Clean Up",  description: "We complete the repair, haul away debris, and walk you through what was fixed and why.",                icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Roofs repaired or restored across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 96,   label: "Repairs resolved in a single visit",               suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years fixing Georgetown-area roofs",                suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Home base — fastest dispatch for repair calls.",           badge: "Fastest Response" },
    { town: "Round Rock",   benefit: "Regular repair routes through Round Rock neighborhoods.",   badge: "" },
    { town: "Cedar Park",   benefit: "Same-day diagnostic visits available most weeks.",          badge: "" },
    { town: "Leander",      benefit: "On our standard route — quick turnaround on small repairs.", badge: "" },
    { town: "Hutto",        benefit: "Full repair coverage for Hutto homes and roofs.",           badge: "" },
    { town: "Taylor",       benefit: "Repair crews cover all of Williamson County.",               badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate repair price before work starts", us: "✅ Always written",   others: "❌ Hourly or vague estimate" },
    { feature: "Finds root cause, not just symptom",         us: "✅ Full diagnostic",  others: "❌ Patches visible spot only" },
    { feature: "Workmanship warranty on repairs",            us: "✅ 25 years",         others: "❌ 1 year or none" },
    { feature: "Same-day repair availability",               us: "✅ Most jobs",        others: "❌ Days-to-weeks wait" },
    { feature: "GAF Master Elite® certified crews",          us: "✅ All crew leads",   others: "❌ Not always" },
  ];

  const faq = [
    { question: "How much does a roof repair cost?",                        answer: "Most isolated repairs — a section of missing shingles, a flashing fix, a small leak — run $350–$1,200. We give you a flat-rate quote after a free diagnostic inspection, so you know the exact cost before we start." },
    { question: "Can you fix a leak without replacing the whole roof?",     answer: "In most cases, yes. Leaks are usually caused by a specific failure point — flashing, a vent boot, a handful of damaged shingles — and can be repaired directly. We only recommend replacement when the roof itself is at the end of its life." },
    { question: "How fast can you get someone out for a repair?",          answer: "Routine repairs are typically scheduled within 1–2 business days. If water is actively entering your home, tell us when you call and we'll prioritize it." },
    { question: "Will a repair void my roof's existing warranty?",         answer: "Not if it's done correctly. We use manufacturer-approved materials and methods, and our own repairs come with a 25-year workmanship warranty regardless of your roof's age." },
    { question: "What are the most common roof repairs you handle?",       answer: "Missing or lifted shingles, damaged flashing around chimneys and vents, cracked pipe boots, minor leaks around valleys, and small areas of storm wear that don't require a full section replacement." },
    { question: "How do I know if I need a repair or a full replacement?", answer: "If the damage is isolated and the rest of the roof is in good shape, a repair makes sense. If you're seeing widespread granule loss, multiple leak points, or the roof is 20+ years old, we'll tell you honestly if replacement is the smarter investment." },
  ];

  const crossServices = [
    { icon: faCloudRain,  title: "Storm Damage Restoration", body: "Fast, insurance-ready repair after hail or wind damage.", link: "/services/storm-damage-restoration" },
    { icon: faSearch,     title: "Roof Inspection",          body: "A thorough, honest assessment — with photos, not guesses.", link: "/services/roof-inspection" },
    { icon: faBroom,      title: "Gutter Installation",      body: "Seamless gutters sized right for your roofline.",          link: "/services/gutter-installation" },
    { icon: faHouseChimney, title: "Roof Replacement",       body: "Full tear-off and install, backed by a 25-year warranty.",  link: "/services/roof-replacement" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Roof Repair" },
      ]} />

      <SectionIntro
        title="Roof Repair in Georgetown, TX"
        subtitle="Fast, honest fixes for leaks, missing shingles, and flashing issues — most repairs done in a single visit."
      />

      <TrustBar headline="2,400+ Central Texas homeowners trust Ironclad for roofing service" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for a Roof Repair" expectations={expectations} />
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
        <LocalServiceAreas cityName="Georgetown" areas={localAreas} servicePath="services/roof-repair" title="Roof Repair Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="Roof Repair FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Got a Leak or Missing Shingles? Let's Fix It Fast."
        subline="Free diagnostic inspection available. Flat-rate pricing, most repairs done same day."
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
          title="Schedule Your Free Diagnostic"
          cityName="Georgetown"
          slug="services/roof-repair"
          spot="roof-repair-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
