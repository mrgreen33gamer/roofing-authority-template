"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";

import styles from "./page.module.scss";

import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Property Portfolio Before We Quote",
      description: "Every HOA, commercial portfolio, and municipal facility has its own budget cycle, approval process, and maintenance history. Before we quote anything, we walk every roof and build a program around how you actually operate.",
    },
    {
      icon: faShieldHalved,
      title: "Locally Operated, Multi-Property Experience",
      description: "We're based in Georgetown, TX and have managed roofing programs across HOA communities, commercial portfolios, and municipal facilities throughout Central Texas for 15+ years.",
    },
    {
      icon: faLightbulb,
      title: "One Point of Contact for Every Property",
      description: "Whether it's a single clubhouse roof or a 12-building portfolio, you get one dedicated contact, one consistent crew standard, and one predictable process — not a different vendor for every property.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,   label: "Property-type programs we specialize in",       suffix: "", duration: 2 },
    { icon: faChartLine, value: 180, label: "Multi-property roofs under active maintenance", suffix: "+", duration: 3 },
    { icon: faClock,     value: 15,  label: "Years serving Central Texas properties",        suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Our home base — serving HOAs, commercial, and municipal properties countywide.", badge: "Headquarters" },
    { town: "Round Rock",   benefit: "Established HOA and commercial property relationships.",                        badge: "" },
    { town: "Cedar Park",   benefit: "Growing residential communities with active HOA maintenance contracts.",         badge: "" },
    { town: "Leander",      benefit: "New-construction HOAs and commercial developments.",                            badge: "" },
    { town: "Liberty Hill", benefit: "Rural and newly-annexed municipal facilities.",                                  badge: "" },
    { town: "Taylor",       benefit: "Williamson County municipal and school facility roofing.",                      badge: "" },
  ];

  const comparisonRows = [
    { feature: "Dedicated multi-property account manager", us: "✅ One point of contact",       others: "❌ Different rep per job" },
    { feature: "Portfolio-wide maintenance scheduling",     us: "✅ Coordinated across sites",   others: "❌ Reactive, one at a time" },
    { feature: "Budget-cycle-aware proposals",              us: "✅ Built around fiscal calendars", others: "❌ Standard quotes only" },
    { feature: "Transparent, itemized pricing",             us: "✅ Written before work starts", others: "❌ Billable hours + surprises" },
    { feature: "GAF Master Elite® certified crews",         us: "✅ Every job",                  others: "❌ Varies by sub" },
  ];

  const faq = [
    {
      question: "What property types does Ironclad work with?",
      answer: "We have dedicated programs for HOA and property management communities, commercial real estate portfolios, and municipal and government facilities — plus general commercial roofing for businesses outside those categories.",
    },
    {
      question: "Can you manage roofing across multiple properties in a portfolio?",
      answer: "Yes — that's most of what we do in this space. We build a single maintenance and replacement schedule across your entire portfolio, so you get consistent pricing and one point of contact instead of coordinating each property separately.",
    },
    {
      question: "Do you work with property management companies outside of Georgetown?",
      answer: "Yes — while we're based in Georgetown, we actively serve HOA, commercial, and municipal properties throughout Williamson County and the broader Central Texas area.",
    },
    {
      question: "Can you work within our board or committee's approval and budget process?",
      answer: "Yes — we regularly present at HOA board meetings and work within municipal RFP and fiscal-year budget cycles. We'll build the proposal around your process, not the other way around.",
    },
    {
      question: "How do I know which program fits our property?",
      answer: "Start by clicking your category below or contacting us directly. We'll walk your property, identify the highest-priority issues, and recommend a maintenance or replacement plan that fits your budget cycle — no pressure.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />

      <SectionIntro
        title="Roofing Programs for Central Texas Properties"
        subtitle="Tailored maintenance and replacement programs built for how HOAs, commercial portfolios, and municipal facilities actually budget and operate."
      />

      <TrustBar headline="Trusted with 180+ multi-property roofs across Central Texas" />

      {/* ── THE INDUSTRY GRID ── */}
      <div className={styles.section}>
        <SectionIndustriesServed
          title="Browse by Property Type"
          subtitle="Click your category to see exactly what we build for properties like yours."
        />
      </div>

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Central Texas"
          features={whyFeatures}
          title="Why Property Managers Choose Ironclad"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Central Texas" />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Georgetown"
          areas={localAreas}
          title="Property Programs Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison
          title="Why Property Managers Choose Ironclad"
          rows={comparisonRows}
        />
      </div>

      <div className={styles.section}>
        <FAQ
          cityName="Georgetown"
          faq={faq}
          title="Property & Portfolio Roofing — Frequently Asked Questions"
        />
      </div>

      <CTABanner
        headline="Managing a Property Outside These Categories? Let's Talk."
        subline="We work with property types outside our listed categories all the time. If you manage multiple roofs or a recurring maintenance need, we can build a program around it. Free consultation, no pressure."
        primaryText="Tell Us About Your Property"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+15129006200"
      />

      <div className={styles.section}>
        <Variant4
          title="Get a Free Property Roofing Assessment"
          cityName="Georgetown"
          slug="industries"
          spot="industries-hub-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}