// Ironclad Roofing Co. — Services Overview
// Order: Breadcrumb → SectionIntro → TrustBar → ServiceCards → WhatToExpect
//        → ImpactMetrics → WhyChooseUs → ProcessTimeline → GuaranteeSection
//        → Testimonials → LocalServiceAreas → ValueComparison → FAQ → CTABanner → Form
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faHouseChimney, faLayerGroup, faCloudRain, faSearch, faBroom, faBuilding,
  faTrophy, faChartLine, faClock,
  faHeadset, faFileContract, faCheckCircle,
  faShieldHalved, faLock, faRotateLeft, faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faHouseChimney, title: "Roof Replacement",         body: "Full tear-off, GAF Master Elite® installation, and a 25-year workmanship warranty on every roof.",              link: "/services/roof-replacement" },
    { icon: faLayerGroup,   title: "Roof Repair",               body: "Same-day fixes for leaks, missing shingles, and flashing issues across Central Texas.",                        link: "/services/roof-repair" },
    { icon: faCloudRain,    title: "Storm Damage Restoration",  body: "24/7 emergency tarping and full insurance claim handling after hail or wind damage.",                          link: "/services/storm-damage-restoration" },
    { icon: faSearch,       title: "Roof Inspection",           body: "Thorough, honest assessments — with photo documentation, not guesses.",                                       link: "/services/roof-inspection" },
    { icon: faBroom,        title: "Gutter Installation",       body: "Seamless gutters sized right for your roofline, protecting your foundation and fascia.",                       link: "/services/gutter-installation" },
    { icon: faBuilding,     title: "Commercial Roofing",        body: "Flat and low-slope roofing for warehouses, retail, and multi-family properties — minimal disruption.",         link: "/services/commercial-roofing" },
  ];

  const expectations = [
    { icon: faSearch,       title: "Free Inspection",                description: "We climb up, document every issue with photos, and explain exactly what's wrong with a flat-rate price before anything is touched." },
    { icon: faCheckCircle,  title: "Upfront Flat-Rate Pricing",       description: "No hourly billing, no surprise fees. You approve the price before we start — and it never changes mid-job." },
    { icon: faShieldHalved, title: "GAF Master Elite® Certified",     description: "Every crew lead is GAF Master Elite®-certified, background-checked, and fully insured. You know exactly who is on your roof." },
    { icon: faLayerGroup,   title: "25-Year Workmanship Warranty",    description: "Every job we complete is backed by 25 years of coverage on materials and labor. No fine print." },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Roofs restored since 2010",                  suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",                suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Georgetown and Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faBolt,          title: "Same-Day & Emergency Service",  description: "We staff for Central Texas storm season. Emergency calls get answered and dispatched within the hour — evenings and weekends included." },
    { icon: faHeadset,       title: "No Contracts, Ever",            description: "No service agreements, no lock-in. You hire us because we do great work — not because you're stuck with us." },
    { icon: faShieldHalved,  title: "Financing Available",           description: "A full roof replacement doesn't have to break the bank. We offer flexible financing options for qualified homeowners — ask us for details." },
  ];

  const processSteps = [
    { number: 1, title: "Schedule",  description: "Call, text, or book online. We'll confirm a time that fits your schedule — usually within 48 hours.", icon: faHeadset },
    { number: 2, title: "Inspect",   description: "We climb up, inspect thoroughly, and explain the problem clearly — no pressure.",                       icon: faSearch },
    { number: 3, title: "Quote",     description: "Flat-rate written quote before any work starts. No surprises, no hidden fees.",                          icon: faFileContract },
    { number: 4, title: "Complete",  description: "Done with quality materials, site cleaned up, backed by our 25-year workmanship warranty.",              icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faFileContract, title: "Flat-Rate Pricing",            description: "The price you approve is the price you pay. No hourly billing, no change orders mid-job." },
    { icon: faRotateLeft,   title: "25-Year Workmanship Warranty", description: "Every job is backed by 25 years of coverage on materials and labor. No fine print." },
    { icon: faHeadset,      title: "Real People Answer the Phone", description: "Call us at 10pm after a storm and someone in Georgetown answers. No call centers, no hold queues." },
    { icon: faLock,         title: "Licensed, Bonded & Insured",   description: "Fully bonded and insured, GAF Master Elite® certified. Proof available on request." },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Home base — best availability and fastest response in the city.", badge: "Home Base" },
    { town: "Round Rock",   benefit: "Full residential and commercial service coverage.",                badge: "" },
    { town: "Cedar Park",   benefit: "Same-day availability for Cedar Park-area homes.",                 badge: "" },
    { town: "Leander",      benefit: "Regular route — quick turnaround for Leander customers.",          badge: "" },
    { town: "Liberty Hill", benefit: "Rural coverage with no trip charge for most locations.",            badge: "" },
    { town: "Taylor",       benefit: "Full service coverage for Williamson County homes and businesses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate upfront pricing",        us: "✅ Always",         others: "❌ Estimate + surprise fees" },
    { feature: "25-year materials & labor warranty", us: "✅ Every job",     others: "❌ Materials only, or none" },
    { feature: "GAF Master Elite® certified crews", us: "✅ All crew leads", others: "❌ Varies" },
    { feature: "No service contracts required",    us: "✅ Always",         others: "❌ Often required" },
    { feature: "Emergency & same-day available",   us: "✅ 7 days a week",  others: "❌ Business hours only" },
  ];

  const faq = [
    { question: "How much does roofing service cost in Georgetown?",  answer: "Repairs typically range from $250–$1,500 depending on the issue. A full roof replacement runs $9,000–$18,000 depending on size, pitch, and material. We always provide a flat-rate written quote after a free inspection." },
    { question: "Do you work with all roofing materials?",            answer: "Yes — asphalt shingle, metal, tile, and flat/low-slope systems. We install GAF, Owens Corning, CertainTeed, and other major brands, and we'll help you pick the right material for your home and budget." },
    { question: "What does a roof inspection include?",                answer: "A full on-roof walk, attic and decking check, photo documentation of any issues, and a written report — free with any service request, and available on its own for pre-purchase or insurance needs." },
    { question: "Are you available for storm emergencies?",            answer: "Yes — 24/7, including evenings and weekends. We understand a leaking roof after a storm is a genuine emergency. Emergency tarping is typically dispatched the same day you call." },
    { question: "How long does a full roof replacement take?",         answer: "Most residential replacements are completed in a single day. We carry common materials in stock, so most jobs are scheduled within a week of your approved quote." },
  ];

  return (
    <>
      <Breadcrumb crumbs={[
        { label: "Home",     href: "/" },
        { label: "Services" },
      ]} />

      <SectionIntro
        title="Roofing Services for Georgetown & Central Texas"
        subtitle="Replacement, repair, storm restoration, and inspections — done right, priced fairly, backed by a 25-year warranty on every job."
      />

      <TrustBar headline="Trusted by 2,400+ Central Texas homes and businesses since 2010" />

      <div className={styles.section}>
        <ServiceCardComponent heading="What We Do" cards={services} />
      </div>

      <div className={styles.section}>
        <WhatToExpect sectionTitle="How Every Service Call Works" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="Results That Speak for Themselves" metrics={metrics} cityName="Georgetown" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Georgetown" features={whyFeatures} title="Why Central Texas Chooses Ironclad" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection guarantees={guarantees} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Georgetown" areas={localAreas} servicePath="services" title="Serving All of Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="Roofing Service FAQs" />
      </div>

      <CTABanner
        headline="Ready to Schedule Your Service?"
        subline="Same-day and emergency service available. Flat-rate pricing, 25-year warranty, no contracts ever."
        primaryText="Call Us Now"
        primaryLink="tel:+15129006200"
        secondaryText="Schedule Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <Variant2
          title="Request a Service or Free Estimate"
          cityName="Georgetown"
          slug="services"
          spot="services-page-form"
          formVariant={2}
        />
      </div>
    </>
  );
}
