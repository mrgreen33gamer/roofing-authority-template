// Ironclad Roofing Co. — Commercial Roofing Service Page
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
  faFileContract, faTrophy, faChartLine, faCloudRain,
  faLayerGroup, faBuilding, faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialRoofingPage() {

  const expectations = [
    { icon: faSearch,        title: "Full Roof & Drainage Assessment",     description: "We inspect the entire membrane, flashing, drains, and penetrations to give you a complete picture before scoping any work." },
    { icon: faFileContract,  title: "Written Scope and Flat-Rate Bid",     description: "You get a detailed, itemized proposal before work begins — sized to your budget cycle and property management needs." },
    { icon: faCalendarCheck, title: "Scheduled Around Your Operations",    description: "We plan work around business hours, tenant schedules, and access needs — minimizing disruption to whatever runs under that roof." },
    { icon: faShieldHalved,  title: "25-Year Workmanship Warranty",        description: "Commercial installs are backed by the same 25-year workmanship warranty we put behind residential work." },
  ];

  const whyFeatures = [
    { icon: faBuilding,      title: "TPO & EPDM Flat/Low-Slope Specialists", description: "We install and repair the membrane systems commercial and multi-family properties actually use — sized and detailed for long-term performance." },
    { icon: faCalendarCheck, title: "Minimal Disruption to Your Business",   description: "We coordinate access, noise, and staging with property managers and tenants so operations continue with as little interruption as possible." },
    { icon: faShieldHalved,  title: "GAF Master Elite® Certified",          description: "The same certification standard — held by only 2% of contractors nationwide — applied to warehouses, retail centers, and multi-family properties." },
  ];

  const processSteps = [
    { number: 1, title: "Site Assessment",     description: "We walk the roof and drainage systems, documenting membrane condition, ponding, and flashing issues.", icon: faSearch },
    { number: 2, title: "Written Bid & Scope", description: "You receive an itemized proposal covering materials, timeline, and total cost — built for approval cycles.", icon: faFileContract },
    { number: 3, title: "Scheduled Install",   description: "Work is scheduled around your business hours, tenant access, and any operational constraints you flag.",   icon: faCalendarCheck },
    { number: 4, title: "Completion & Warranty", description: "Final walkthrough with your team, full site cleanup, and a 25-year workmanship warranty on the work.",   icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Roofing projects completed across Central Texas",   suffix: "+", duration: 3 },
    { icon: faChartLine, value: 96,   label: "Commercial clients who'd hire us again",             suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Central Texas businesses",              suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Home base — fastest scheduling for commercial assessments.", badge: "Fastest Response" },
    { town: "Round Rock",   benefit: "Commercial and multi-family roofing coverage throughout.",    badge: "" },
    { town: "Cedar Park",   benefit: "Retail and warehouse projects scheduled around business hours.", badge: "" },
    { town: "Leander",      benefit: "Flat and low-slope roofing coverage for growing commercial corridors.", badge: "" },
    { town: "Hutto",        benefit: "Commercial roofing service for warehouses and retail centers.", badge: "" },
    { town: "Taylor",       benefit: "Full commercial roofing coverage across Williamson County.",  badge: "" },
  ];

  const comparisonRows = [
    { feature: "TPO/EPDM flat & low-slope specialists", us: "✅ In-house expertise", others: "❌ Subcontracted out" },
    { feature: "Scheduling around business hours",       us: "✅ Standard practice",  others: "❌ Rarely accommodated" },
    { feature: "Written itemized bid before work",        us: "✅ Always provided",   others: "❌ Vague lump sum" },
    { feature: "25-year workmanship warranty",            us: "✅ Every project",     others: "❌ Shorter or none" },
    { feature: "GAF Master Elite® certified crews",       us: "✅ All crew leads",    others: "❌ Not always" },
  ];

  const faq = [
    { question: "What commercial roofing systems do you install?",          answer: "We specialize in TPO and EPDM flat and low-slope systems, common on warehouses, retail buildings, and multi-family properties. We'll recommend the right system based on your building's use, drainage, and budget." },
    { question: "Can you schedule work without disrupting our business?",   answer: "Yes — we routinely schedule around business hours, tenant occupancy, and delivery or customer traffic patterns. We'll discuss access and timing constraints before finalizing the schedule." },
    { question: "How do you handle multi-tenant or property management projects?", answer: "We coordinate directly with property managers on scheduling, access, and communication to tenants, and provide the documentation property management companies typically need for approval and records." },
    { question: "How long does a commercial roof replacement take?",        answer: "Timeline depends on square footage and roof complexity — a mid-size warehouse or retail roof typically takes several days to a couple weeks. We provide a specific timeline in your written bid." },
    { question: "Do you offer routine maintenance for commercial roofs?",   answer: "Yes — scheduled inspections and maintenance help catch membrane wear, ponding water, and flashing issues before they become leaks, extending the life of flat and low-slope systems significantly." },
    { question: "Can you work with our insurance or property management company directly?", answer: "Yes — we regularly coordinate directly with property management companies, insurance adjusters, and ownership groups to keep documentation and approvals moving smoothly." },
  ];

  const crossServices = [
    { icon: faCloudRain,    title: "Storm Damage Restoration", body: "Fast, insurance-ready repair after hail or wind damage.", link: "/services/storm-damage-restoration" },
    { icon: faSearch,       title: "Roof Inspection",          body: "A thorough, honest assessment — with photos, not guesses.", link: "/services/roof-inspection" },
    { icon: faLayerGroup,   title: "Roof Repair",              body: "Same-day fixes for leaks, missing shingles, and more.",    link: "/services/roof-repair" },
    { icon: faHouseChimney, title: "Roof Replacement",         body: "Full tear-off and install, backed by a 25-year warranty.",  link: "/services/roof-replacement" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Roofing" },
      ]} />

      <SectionIntro
        title="Commercial Roofing in Georgetown, TX"
        subtitle="Flat and low-slope TPO/EPDM roofing for warehouses, retail, and multi-family properties — scheduled around your operations."
      />

      <TrustBar headline="2,400+ Central Texas properties trust Ironclad for roofing service" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Commercial Roofing" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Georgetown" features={whyFeatures} title="Why Georgetown Businesses Call Ironclad First" />
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
        <LocalServiceAreas cityName="Georgetown" areas={localAreas} servicePath="services/commercial-roofing" title="Commercial Roofing Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="Commercial Roofing FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Commercial Roof Needs Attention? Let's Scope It Right."
        subline="Written bids, scheduling around your operations, and a 25-year workmanship warranty on every project."
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
          title="Request a Commercial Assessment"
          cityName="Georgetown"
          slug="services/commercial-roofing"
          spot="commercial-roofing-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
