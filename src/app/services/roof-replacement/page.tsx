// Ironclad Roofing Co. — Roof Replacement Service Page
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
  faHeadset, faFileContract, faRotateLeft, faLock,
  faTrophy, faChartLine, faCloudRain, faBroom, faLayerGroup, faHammer,
} from "@fortawesome/free-solid-svg-icons";

export default function RoofReplacementPage() {

  const expectations = [
    { icon: faSearch,       title: "Free On-Roof Inspection",               description: "We climb up, document every issue with photos, and explain what's wrong in plain English — no upsell pressure, ever." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Touch Anything", description: "You get a written price before any work starts. It doesn't change when the job takes longer than expected." },
    { icon: faCheckCircle,  title: "Done Right, Start to Finish",           description: "Full tear-off, deck inspection, and GAF Master Elite® installation — most homes are done in a single day." },
    { icon: faShieldHalved, title: "25-Year Workmanship Warranty",          description: "Every roof we install is backed by 25 years of coverage. If something fails, we fix it at no charge." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Emergency Response — Any Time",        description: "We answer 7 days a week, including evenings and weekends. A damaged roof can't wait until Monday." },
    { icon: faHouseChimney, title: "All Roof Types Installed",             description: "Asphalt shingle, metal, tile, and flat/low-slope — our crews have installed them all and know them well." },
    { icon: faShieldHalved, title: "GAF Master Elite®, Fully Insured",     description: "Every crew lead is GAF Master Elite®-certified — a status held by only the top 2% of roofing contractors nationwide." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book",       description: "Contact us by phone, text, or online. We'll schedule your free inspection — usually within 48 hours.", icon: faHeadset },
    { number: 2, title: "Free Inspection",    description: "We climb up, document the damage, and check your attic and decking for hidden issues.",                icon: faSearch },
    { number: 3, title: "Flat-Rate Quote",    description: "We show you the exact price and material options before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Install & Warranty", description: "Full tear-off and install, cleaned up same day, and backed by a 25-year workmanship warranty.",        icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Roofs replaced across Central Texas",   suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customers who'd refer us to a neighbor", suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Georgetown-area homeowners", suffix: "+", duration: 2 },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",        body: "The price we quote is the price you pay — no matter how long it takes." },
    { icon: faRotateLeft,   title: "25-Year Full Warranty",    body: "Materials and labor both covered for 25 years on every roof we install." },
    { icon: faHeadset,      title: "Emergency Available",      body: "7-day-a-week availability for genuine roofing emergencies — evenings included." },
    { icon: faLock,         title: "Licensed & Insured",       body: "Fully insured and bonded, GAF Master Elite® certified. Proof available on request." },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Home base — fastest dispatch, most available crews.", badge: "Fastest Response" },
    { town: "Round Rock",   benefit: "Full roof replacement coverage throughout Round Rock.", badge: "" },
    { town: "Cedar Park",   benefit: "Same-day inspections for Cedar Park neighborhoods.",   badge: "" },
    { town: "Leander",      benefit: "On our regular route — quick turnaround guaranteed.",  badge: "" },
    { town: "Liberty Hill", benefit: "Rural coverage — call ahead for same-week availability.", badge: "" },
    { town: "Taylor",       benefit: "Full roofing coverage for Williamson County homes.",   badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts",   us: "✅ Always written",     others: "❌ Estimate only" },
    { feature: "25-year materials AND labor warranty", us: "✅ Every install",       others: "❌ Materials only" },
    { feature: "GAF Master Elite® certified crews",    us: "✅ All crew leads",      others: "❌ Not always" },
    { feature: "Emergency service 7 days/week",        us: "✅ Always available",   others: "❌ M–F business hours" },
    { feature: "Free on-roof inspection",              us: "✅ Every quote",        others: "❌ Often a flat fee" },
  ];

  const faq = [
    { question: "How much does a roof replacement cost in Georgetown?",     answer: "Most asphalt shingle replacements range from $9,000–$18,000 depending on roof size and pitch. Metal and tile run higher. We quote flat-rate after a free on-roof inspection — no surprises." },
    { question: "How long does a full roof replacement take?",             answer: "Most homes are completed in a single day, start to finish. Larger or steeper roofs may take two days. We always clean up fully before we leave." },
    { question: "What are signs I need a roof replacement instead of a repair?", answer: "Widespread granule loss, curling or missing shingles across the roof, soft spots in the decking, a roof over 20 years old, or repeated leaks in different spots are all signs replacement makes more sense than another repair." },
    { question: "Will you help with my insurance claim?",                  answer: "Yes — we document storm damage thoroughly and work directly with your adjuster to make sure the claim reflects the actual scope of work needed." },
    { question: "What roofing materials do you install?",                  answer: "Asphalt shingle (GAF, Owens Corning, CertainTeed), standing seam and metal, tile, and flat/low-slope systems (TPO/EPDM). We'll help you pick the right material for your home and budget." },
    { question: "Do you offer financing?",                                 answer: "Yes — we offer flexible financing options so a full roof replacement doesn't have to be paid out of pocket all at once. Ask us during your free inspection." },
  ];

  const crossServices = [
    { icon: faCloudRain,   title: "Storm Damage Restoration", body: "Fast, insurance-ready repair after hail or wind damage.", link: "/services/storm-damage-restoration" },
    { icon: faSearch,      title: "Roof Inspection",          body: "A thorough, honest assessment — with photos, not guesses.", link: "/services/roof-inspection" },
    { icon: faBroom,       title: "Gutter Installation",      body: "Seamless gutters sized right for your roofline.",          link: "/services/gutter-installation" },
    { icon: faLayerGroup,  title: "Roof Repair",              body: "Same-day fixes for leaks, missing shingles, and more.",    link: "/services/roof-repair" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services", href: "/services" },
        { label: "Roof Replacement" },
      ]} />

      <SectionIntro
        title="Roof Replacement in Georgetown, TX"
        subtitle="Free inspection, GAF Master Elite® installation, and a 25-year workmanship warranty on every roof we replace."
      />

      <TrustBar headline="2,400+ Central Texas homeowners trust Ironclad for roofing service" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for a Roof Replacement" expectations={expectations} />
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
        <LocalServiceAreas cityName="Georgetown" areas={localAreas} servicePath="services/roof-replacement" title="Roof Replacement Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="Roof Replacement FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Roof Seen Better Days? Let's Fix That."
        subline="Free inspection available. Flat-rate pricing, 25-year warranty, all major materials installed."
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
          title="Schedule Your Free Inspection"
          cityName="Georgetown"
          slug="services/roof-replacement"
          spot="roof-replacement-page-form"
          formVariant={2}
        />
      </div>

    </main>
  );
}
