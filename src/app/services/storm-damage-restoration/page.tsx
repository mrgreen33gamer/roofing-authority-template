// Ironclad Roofing Co. — Storm Damage Restoration Service Page
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
  faHeadset, faFileContract, faBroom, faTrophy, faChartLine, faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function StormDamageRestorationPage() {

  const expectations = [
    { icon: faHeadset,      title: "Emergency Response, Day or Night",      description: "Hail or wind damage doesn't wait for business hours — neither do we. Call any time and we'll get a crew moving." },
    { icon: faShieldHalved, title: "Emergency Tarping Within Hours",        description: "If your roof is actively leaking or compromised, we tarp it fast to stop further water and structural damage while repairs are scheduled." },
    { icon: faSearch,       title: "Full Documentation for Your Claim",     description: "We photograph every point of damage — hail hits, lifted shingles, exposed decking — so your insurance claim reflects the real scope of loss." },
    { icon: faFileContract, title: "We Deal With the Adjuster, Not You",    description: "We meet your insurance adjuster on-site, walk the roof together, and advocate for a scope that covers full, correct restoration." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "24/7 Emergency Availability",           description: "Storms don't check the clock. We answer day, night, and weekends when your home has been hit." },
    { icon: faFileContract, title: "Insurance Claim Specialists",           description: "We've handled hundreds of Central Texas storm claims — we know what adjusters look for and how to document damage they might otherwise miss." },
    { icon: faShieldHalved, title: "GAF Master Elite®, Storm-Ready Crews",  description: "A certification held by only 2% of roofing contractors nationwide, backed by crews experienced in high-volume storm response." },
  ];

  const processSteps = [
    { number: 1, title: "Emergency Call",       description: "Reach us any hour, any day. We triage the situation immediately and dispatch a crew for urgent cases.",       icon: faHeadset },
    { number: 2, title: "Tarp & Stabilize",     description: "If there's active exposure, we tarp the roof same-day to prevent interior water damage while claims proceed.", icon: faShieldHalved },
    { number: 3, title: "Document the Damage",  description: "Full photo documentation of every hail strike, lifted shingle, and soft spot — built for your insurance file.", icon: faSearch },
    { number: 4, title: "Meet Your Adjuster",   description: "We walk the roof with your adjuster and push for a scope that reflects full restoration, not a patch job.",     icon: faFileContract },
    { number: 5, title: "Restore & Warranty",   description: "Once the claim is approved, we restore the roof and back it with a 25-year workmanship warranty.",              icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Storm-damaged roofs restored across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 94,   label: "Insurance claims approved with our documentation",   suffix: "%", duration: 2 },
    { icon: faClock,     value: 24,   label: "Hour emergency tarping response",                    suffix: "/7", duration: 2 },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Home base — fastest emergency dispatch after a storm.",     badge: "Fastest Response" },
    { town: "Round Rock",   benefit: "Rapid storm response crews cover all of Round Rock.",        badge: "" },
    { town: "Cedar Park",   benefit: "Emergency tarping available same-day after hail events.",    badge: "" },
    { town: "Leander",      benefit: "Storm crews dispatched immediately after severe weather.",   badge: "" },
    { town: "Liberty Hill", benefit: "Full storm restoration coverage, including rural properties.", badge: "" },
    { town: "Jarrell",      benefit: "Emergency response extends to Jarrell after major storms.",  badge: "" },
  ];

  const comparisonRows = [
    { feature: "Emergency tarping response",           us: "✅ Same-day, 24/7",     others: "❌ Next business day" },
    { feature: "Adjuster meets on-site with us",        us: "✅ Always",             others: "❌ Rarely attends" },
    { feature: "Full photo damage documentation",       us: "✅ Every hit logged",   others: "❌ Spot checks only" },
    { feature: "Handles the full claim process",        us: "✅ Start to finish",    others: "❌ You coordinate it" },
    { feature: "GAF Master Elite® certified crews",     us: "✅ All crew leads",     others: "❌ Not always" },
  ];

  const faq = [
    { question: "My roof was just hit by hail — what should I do first?",   answer: "Call us immediately, even before calling your insurance company. We'll assess whether emergency tarping is needed and start documenting the damage right away — that documentation is critical for your claim." },
    { question: "Will insurance actually cover storm damage?",              answer: "Most homeowner's policies cover wind and hail damage to roofing. Coverage depends on your specific policy and the extent of damage, but our documentation is built specifically to support a full, fair claim." },
    { question: "How fast can you tarp my roof if it's actively leaking?",  answer: "We treat active leaks and exposed decking as emergencies and aim to have a tarp on the roof the same day you call, regardless of time or day of the week." },
    { question: "Do I need to be home when the adjuster inspects the roof?", answer: "It helps, but isn't required — we meet the adjuster on-site ourselves and walk the roof with them so nothing gets missed or underscoped, whether or not you're present." },
    { question: "What does storm damage actually look like on a roof?",     answer: "Hail damage often shows as small dark bruises or dents in shingles with granule loss around the impact. Wind damage typically shows as lifted, creased, or missing shingles, especially along ridges and edges. Both can be hard to spot from the ground — that's why we inspect from the roof itself." },
    { question: "Will my insurance premium go up if I file a storm claim?", answer: "Storm damage is typically classified as a no-fault, weather-related claim, which generally has less impact on premiums than other claim types. Your agent can confirm specifics for your policy." },
  ];

  const crossServices = [
    { icon: faSearch,       title: "Roof Inspection",      body: "A thorough, honest assessment — with photos, not guesses.", link: "/services/roof-inspection" },
    { icon: faLayerGroup,   title: "Roof Repair",          body: "Same-day fixes for leaks, missing shingles, and more.",    link: "/services/roof-repair" },
    { icon: faBroom,        title: "Gutter Installation",  body: "Seamless gutters sized right for your roofline.",          link: "/services/gutter-installation" },
    { icon: faHouseChimney, title: "Roof Replacement",     body: "Full tear-off and install, backed by a 25-year warranty.",  link: "/services/roof-replacement" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Storm Damage Restoration" },
      ]} />

      <SectionIntro
        title="Storm Damage Restoration in Georgetown, TX"
        subtitle="Emergency tarping, full insurance claim handling, and complete restoration after hail or wind damage — day or night."
      />

      <TrustBar headline="2,400+ Central Texas homeowners trust Ironclad for storm restoration" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call After a Storm" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Georgetown" features={whyFeatures} title="Why Georgetown Calls Ironclad First After a Storm" />
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
        <LocalServiceAreas cityName="Georgetown" areas={localAreas} servicePath="services/storm-damage-restoration" title="Storm Damage Restoration Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="Storm Damage FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Roof Hit by a Storm? We're Ready — Right Now."
        subline="24/7 emergency tarping, full insurance claim support, and restoration backed by a 25-year warranty."
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
          title="Get Emergency Help Now"
          cityName="Georgetown"
          slug="services/storm-damage-restoration"
          spot="storm-damage-restoration-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
