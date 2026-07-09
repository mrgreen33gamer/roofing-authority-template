"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";

import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faFileContract, faCalendarCheck, faCity, faUsers,
  faSearch, faClock, faLayerGroup, faShieldHalved,
  faHouseChimney, faCloudRain, faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialRealEstateIndustryPage() {

  const painPoints = [
    {
      icon: faFileContract,
      problem: "Lease language leaves roof responsibility ambiguous between landlord and tenant",
      consequence: "When a leak happens, days get lost arguing over whether it's a landlord capital repair or a tenant maintenance item — while water keeps getting into the space below.",
    },
    {
      icon: faCalendarCheck,
      problem: "Roof replacement has to happen inside a narrow window between tenant turnovers",
      consequence: "Miss the vacancy window and you're stuck delaying the project a full lease cycle, or paying to work around an occupied space and the disruption that comes with it.",
    },
    {
      icon: faCity,
      problem: "A multi-building portfolio has roofs of different ages, systems, and vendors",
      consequence: "Without one contractor tracking condition across every property, you're reacting building-by-building instead of budgeting the whole portfolio on one replacement schedule.",
    },
    {
      icon: faUsers,
      problem: "Retail and office tenants can't tolerate noise or disruption during business hours",
      consequence: "A crew that doesn't plan around tenant operating hours creates complaints, potential lease violations, and lost sales for the businesses you depend on for rent.",
    },
    {
      icon: faSearch,
      problem: "No documented roof condition report to support acquisition, refinancing, or insurance renewal",
      consequence: "Lenders, buyers, and insurers all want current roof documentation. Without it, deals slow down or reserve estimates get padded with worst-case assumptions.",
    },
    {
      icon: faClock,
      problem: "Capital expenditure approval moves slower than the roof is deteriorating",
      consequence: "By the time a CapEx committee signs off on a proactive repair, the problem has often escalated into a full emergency replacement at a much higher cost.",
    },
  ];

  const whyFeatures = [
    {
      icon: faCity,
      title: "Portfolio-Wide Roof Condition Tracking",
      description: "We inspect every property in your portfolio and deliver one consolidated report — by building, by age, by priority — so you can plan CapEx across the whole portfolio instead of one property at a time.",
    },
    {
      icon: faCalendarCheck,
      title: "Scheduled Around Leases, Not the Other Way Around",
      description: "We plan roof replacement and major repairs around tenant turnover dates, lease renewal windows, and off-hours access — so tenant operations and sales are never disrupted.",
    },
    {
      icon: faShieldHalved,
      title: "Low-Slope Commercial Systems Done Right",
      description: "TPO and EPDM installations from GAF Master Elite® certified crews, backed by a 25-year workmanship warranty — the same standard whether it's one building or a twelve-property portfolio.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Assessment",        description: "We inspect every roof in your portfolio and document age, system type, and condition in one report built for capital planning.", icon: faSearch },
    { number: 2, title: "Lease-Aware Scheduling",       description: "We build the project timeline around tenant turnover dates and lease renewal windows so occupied units are never disrupted.", icon: faCalendarCheck },
    { number: 3, title: "Low-Slope TPO/EPDM Install",   description: "Flat and low-slope systems installed by GAF Master Elite® crews, with tenant-safe site protocols during business hours.", icon: faLayerGroup },
    { number: 4, title: "Warranty & Portfolio Records", description: "Every roof is backed by a 25-year workmanship warranty, with documentation filed under one property record for future financing, insurance, or resale needs.", icon: faShieldHalved },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,   label: "Million square feet of commercial roofing under active contracts", suffix: "M+", duration: 2 },
    { icon: faChartLine, value: 98,  label: "Projects completed without tenant business interruption",          suffix: "%", duration: 3 },
    { icon: faClock,     value: 15,  label: "Years serving Central Texas commercial properties",                suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Portfolio-wide condition tracking",   us: "✅ One report, every building",         others: "❌ Quote per property only" },
    { feature: "Tenant-aware scheduling",             us: "✅ Built around lease turnover",          others: "❌ Crew shows up whenever" },
    { feature: "Low-slope TPO/EPDM specialists",      us: "✅ GAF Master Elite® certified",          others: "❌ Generalist crews" },
    { feature: "CapEx-ready documentation",           us: "✅ Lender & insurer ready reports",        others: "❌ Informal estimate only" },
    { feature: "25-year workmanship warranty",        us: "✅ Every roof, every building",           others: "❌ Varies or none" },
  ];

  const faq = [
    {
      question: "Who's responsible for the roof under our NNN lease — landlord or tenant?",
      answer: "That depends on your lease's specific capital-vs-maintenance language, and we're not attorneys — but we can provide a documented condition report and repair-vs-replace cost breakdown that helps ownership and tenants resolve responsibility questions with facts instead of guesswork.",
    },
    {
      question: "Can you schedule roof replacement around our tenants' lease and turnover dates?",
      answer: "Yes — this is most of what we do for commercial portfolios. We build project timelines around vacancy windows, lease renewal dates, and tenant operating hours so occupied units are never disrupted.",
    },
    {
      question: "Do you work on flat and low-slope commercial roofs, not just steep residential?",
      answer: "Yes — TPO and EPDM low-slope systems are a core part of our commercial work, installed by GAF Master Elite® certified crews with manufacturer-backed warranties.",
    },
    {
      question: "Can you provide documentation for a property acquisition or refinance?",
      answer: "Yes — we provide detailed, dated roof condition reports that satisfy lender, buyer, and insurer due-diligence requirements, including remaining useful life estimates.",
    },
    {
      question: "Can you manage roofing across our entire portfolio, not just one property?",
      answer: "Yes — we build a single maintenance and replacement schedule across your whole portfolio so you get consistent pricing, one point of contact, and coordinated CapEx planning instead of managing each property separately.",
    },
    {
      question: "Do you work outside normal business hours to avoid disrupting tenants?",
      answer: "Yes — we regularly schedule noisy or disruptive phases of a project during off-hours or low-traffic periods for retail and office tenants, and coordinate site access in advance with property management.",
    },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Home base — active commercial roofing programs across retail, office, and industrial properties.", badge: "Most Requested" },
    { town: "Round Rock",   benefit: "Retail centers and office parks under active roofing contracts.",           badge: "" },
    { town: "Cedar Park",   benefit: "Growing commercial corridor with new and existing property roofing.",       badge: "" },
    { town: "Leander",      benefit: "Industrial and light-commercial roofing for a rapidly developing market.",  badge: "" },
    { town: "Hutto",        benefit: "New commercial development and warranty roofing work.",                    badge: "" },
    { town: "Taylor",       benefit: "Industrial and logistics facility roofing near the growing tech corridor.", badge: "" },
  ];

  const services = [
    { icon: faCity,         title: "Commercial Roofing",       body: "TPO and EPDM low-slope systems for retail, office, and industrial properties.",        link: "/services/commercial-roofing" },
    { icon: faHouseChimney, title: "Roof Replacement",         body: "Full replacement scheduled around tenant turnover and lease timelines.",                link: "/services/roof-replacement" },
    { icon: faSearch,       title: "Roof Inspection",          body: "Portfolio-wide condition reports built for CapEx planning, lending, and insurance.",     link: "/services/roof-inspection" },
    { icon: faCloudRain,    title: "Storm Damage Restoration", body: "Coordinated storm claims across every affected building in your portfolio.",             link: "/services/storm-damage-restoration" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Commercial Real Estate" },
      ]} />

      <SectionIntro
        title="Roofing Programs for Commercial Real Estate Portfolios"
        subtitle="Tenant-aware scheduling, low-slope TPO/EPDM expertise, and portfolio-wide condition reports — built for how commercial property managers actually operate."
      />

      <TrustBar headline="Trusted with 3M+ sq ft of commercial roofing under active contracts across Central Texas" />

      <IndustryPainPoints
        industry="commercial real estate"
        painPoints={painPoints}
        ctaText="Get a Portfolio Roof Assessment"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="commercial properties"
          features={whyFeatures}
          title="What We Build Differently for Commercial Real Estate"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="commercial properties" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Roofing Service Your Portfolio Needs"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Georgetown"
          areas={localAreas}
          servicePath="industries/commercial-real-estate"
          title="Serving Commercial Properties Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="Commercial Real Estate Roofing FAQs" />
      </div>

      <CTABanner
        headline="Ready for a Portfolio-Wide Roof Assessment?"
        subline="Tenant-aware scheduling and CapEx-ready condition reports for commercial real estate portfolios. Free consultation."
        primaryText="Get Your Free Assessment"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+15129006200"
      />

      <div className={styles.section}>
        <Variant4
          title="Tell Us About Your Portfolio"
          cityName="Georgetown"
          slug="industries/commercial-real-estate"
          spot="commercial-real-estate-industry-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
