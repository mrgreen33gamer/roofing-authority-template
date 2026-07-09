// Ironclad Roofing Co. — Gutter Installation Service Page
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
  faHeadset, faFileContract, faTrophy, faChartLine, faCloudRain,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function GutterInstallationPage() {

  const expectations = [
    { icon: faSearch,       title: "Free On-Site Measurement",             description: "We measure your actual roofline — not a generic estimate — to size gutters and downspouts correctly for your home's water flow." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Start",      description: "You'll know the exact price for seamless gutters and any guards before we begin — no surprise add-ons." },
    { icon: faCheckCircle,  title: "Seamless, Formed On-Site",             description: "Gutters are formed on-site to your home's exact dimensions, so there are no leak-prone seams along the run." },
    { icon: faShieldHalved, title: "25-Year Workmanship Warranty",         description: "Installation is backed by our full workmanship warranty — if a seam or hanger fails, we fix it at no charge." },
  ];

  const whyFeatures = [
    { icon: faHouseChimney, title: "Sized Right for Your Roofline",        description: "Gutter size and downspout placement are calculated from your actual roof area, not a one-size-fits-all default — so they handle real Texas downpours." },
    { icon: faShieldHalved, title: "Protects Your Foundation & Fascia",    description: "Properly installed gutters route water away from your foundation and keep fascia boards from rotting — problems that cost far more to fix later." },
    { icon: faClock,        title: "Gutter Guards Available",             description: "Reduce clogging from leaves and debris with guard systems matched to your gutter setup, cutting down on cleaning and overflow." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",         description: "Tell us about your current gutters — or lack of them — and we'll schedule a free on-site measurement.", icon: faHeadset },
    { number: 2, title: "Measure & Assess",     description: "We measure your roofline, check downspout placement, and evaluate drainage around your foundation.",  icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",      description: "You get an exact price for seamless gutters, downspouts, and optional guards — no pressure to upgrade.", icon: faFileContract },
    { number: 4, title: "Install & Clean Up",   description: "Gutters are formed and installed same-day in most cases, with full site cleanup when we're done.",     icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Roofing and gutter projects completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 97,   label: "Customers who'd refer us to a neighbor",                      suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Georgetown-area homeowners",                     suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Home base — fastest scheduling for gutter installs.",     badge: "Fastest Response" },
    { town: "Round Rock",   benefit: "Full seamless gutter coverage throughout Round Rock.",     badge: "" },
    { town: "Cedar Park",   benefit: "Same-week installs available for most Cedar Park homes.",  badge: "" },
    { town: "Leander",      benefit: "On our regular route — quick turnaround guaranteed.",      badge: "" },
    { town: "Liberty Hill", benefit: "Gutter installs available with flexible scheduling.",      badge: "" },
    { town: "Hutto",        benefit: "Full seamless gutter and guard installation coverage.",    badge: "" },
  ];

  const comparisonRows = [
    { feature: "Seamless gutters formed on-site",       us: "✅ Every install",     others: "❌ Sectional, seam-prone" },
    { feature: "Sized from actual roofline measurements", us: "✅ Always measured", others: "❌ Standard sizing" },
    { feature: "25-year workmanship warranty",          us: "✅ Every install",     others: "❌ 1 year or none" },
    { feature: "Gutter guard options available",        us: "✅ Multiple systems",  others: "❌ Limited or none" },
    { feature: "Free on-site measurement & quote",      us: "✅ Every estimate",    others: "❌ Often a flat fee" },
  ];

  const faq = [
    { question: "How much does gutter installation cost?",                  answer: "Seamless gutter installation typically runs $8–$14 per linear foot depending on material and home size, with gutter guards as an optional add-on. We give you a flat-rate quote after measuring your roofline for free." },
    { question: "Why are seamless gutters better than sectional ones?",     answer: "Seamless gutters are formed on-site to your exact roofline, eliminating the joints where sectional gutters typically leak, sag, and collect debris over time." },
    { question: "Do I really need gutter guards?",                         answer: "If your property has trees nearby, guards significantly cut down on clogging and the need for regular cleaning. For homes without much tree coverage, they're optional rather than essential — we'll give you an honest read during the estimate." },
    { question: "Can bad gutters actually damage my home?",                answer: "Yes — gutters that overflow or misdirect water can erode soil around your foundation, cause basement or crawlspace moisture issues, and rot fascia boards and soffits. Properly sized gutters prevent all of that." },
    { question: "How long does gutter installation take?",                 answer: "Most homes are completed in a single day. Larger homes or those needing extensive fascia repair first may take a bit longer." },
    { question: "Do you install gutters on new roofs and existing roofs both?", answer: "Yes — we install gutters as part of new roof replacements or as a standalone project on an existing roof, matching them to your home's current setup either way." },
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
        { label: "Gutter Installation" },
      ]} />

      <SectionIntro
        title="Gutter Installation in Georgetown, TX"
        subtitle="Seamless gutters and guards sized right for your roofline — protecting your foundation and fascia from water damage."
      />

      <TrustBar headline="2,400+ Central Texas homeowners trust Ironclad for roofing service" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Gutter Installation" expectations={expectations} />
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
        <LocalServiceAreas cityName="Georgetown" areas={localAreas} servicePath="services/gutter-installation" title="Gutter Installation Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="Gutter Installation FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Old Gutters Failing You? Let's Get It Right."
        subline="Free on-site measurement. Seamless installation, flat-rate pricing, 25-year workmanship warranty."
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
          title="Schedule Your Free Measurement"
          cityName="Georgetown"
          slug="services/gutter-installation"
          spot="gutter-installation-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
