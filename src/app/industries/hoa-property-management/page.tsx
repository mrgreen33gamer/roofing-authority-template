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
  faBuilding, faSearch, faFileInvoiceDollar, faCalendarCheck,
  faHouseChimney, faCloudRain, faClipboardList, faChartBar,
  faRocket, faUsers, faTrophy, faChartLine, faClock,
  faLayerGroup, faBroom, faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function HOAPropertyManagementIndustryPage() {

  const painPoints = [
    {
      icon: faFileInvoiceDollar,
      problem: "No predictable budget for roof maintenance across the community",
      consequence: "Without a maintenance schedule, roof problems get discovered as emergencies — right when the board is least prepared to approve an unplanned special assessment.",
    },
    {
      icon: faCalendarCheck,
      problem: "Board approval timelines don't match contractor availability",
      consequence: "Most roofers quote a job and expect an answer in days. HOA boards need weeks to review bids and vote. By the time you're approved, the contractor has moved on to the next job.",
    },
    {
      icon: faSearch,
      problem: "No documented condition history across the property",
      consequence: "When a new board or management company takes over, there's often no record of roof age, past repairs, or known issues — leading to duplicate inspections and disputes with insurers.",
    },
    {
      icon: faUsers,
      problem: "Owners get inconsistent answers about what's covered",
      consequence: "Without a clear, documented maintenance plan, homeowners don't know whether a roof issue is their responsibility or the association's — creating friction at every board meeting.",
    },
    {
      icon: faCloudRain,
      problem: "One storm event, dozens of separate insurance claims",
      consequence: "A single hailstorm can damage every roof in the community. Without one contractor coordinating documentation across all units, each owner ends up fighting their own claim alone.",
    },
    {
      icon: faClipboardList,
      problem: "No single vendor accountable for the whole roofline",
      consequence: "Different owners hiring different roofers over the years leaves a patchwork of materials and warranties — making it hard to know who's responsible when something fails.",
    },
  ];

  const whyFeatures = [
    {
      icon: faBuilding,
      title: "Community-Wide Roof Condition Reports",
      description: "We inspect every roof in the community and deliver one consolidated report the board can use for budgeting, reserve studies, and special assessment planning — not a piecemeal quote per building.",
    },
    {
      icon: faCalendarCheck,
      title: "Built Around Your Board's Approval Calendar",
      description: "We present at board meetings, provide multi-year phased proposals, and hold pricing through your approval process — so a slower HOA timeline doesn't cost you the contractor.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "One Contractor, One Point of Accountability",
      description: "We become the association's roofing vendor of record — one warranty, one crew standard, and one contact for every building, instead of a different roofer per owner.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Community-Wide Inspection",  description: "We walk every roof in the community and document condition, age, and priority issues in one consolidated report.", icon: faSearch },
    { number: 2, title: "Present to the Board",        description: "We present findings and a phased budget proposal directly to your board or management company — ready for a vote.", icon: faRocket },
    { number: 3, title: "Coordinate Storm Claims",     description: "After a storm event, we document every affected roof and coordinate with each owner's insurer so no one is left fighting alone.", icon: faCloudRain },
    { number: 4, title: "Maintain & Warranty",         description: "Once approved, we execute the phased plan and back every roof with a 25-year workmanship warranty under one association-wide record.", icon: faShieldHalved },
  ];

  const metrics = [
    { icon: faTrophy,    value: 60,  label: "HOA communities under active roofing programs", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 94,  label: "Storm claims approved with our documentation",   suffix: "%", duration: 3 },
    { icon: faClock,     value: 15,  label: "Years serving Central Texas properties",         suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Community-wide condition reports",   us: "✅ One consolidated report",       others: "❌ Quote per building only" },
    { feature: "Board-meeting-ready proposals",      us: "✅ Presented in person",            others: "❌ Emailed quote, no follow-up" },
    { feature: "Multi-year phased budgeting",        us: "✅ Built for reserve studies",      others: "❌ One-time pricing only" },
    { feature: "Storm claim coordination across units", us: "✅ Handled as one claim event", others: "❌ Each owner on their own" },
    { feature: "GAF Master Elite® certified crews",  us: "✅ Every roof",                    others: "❌ Not always" },
  ];

  const faq = [
    {
      question: "Can you present our roofing proposal directly to the HOA board?",
      answer: "Yes — we regularly present condition reports and phased budget proposals at board meetings, and we're happy to answer owner questions at community meetings as well.",
    },
    {
      question: "How do you handle a storm that damages roofs across the whole community?",
      answer: "We inspect and document every affected roof as one coordinated event, then work with each owner's insurance carrier so claims move consistently instead of each homeowner navigating the process alone.",
    },
    {
      question: "Can you work with our management company instead of the board directly?",
      answer: "Yes — we regularly work through property management companies as the primary point of contact, with periodic reporting back to the board or ownership group.",
    },
    {
      question: "Do you offer multi-year maintenance plans for reserve study budgeting?",
      answer: "Yes — we build phased, multi-year roofing plans specifically designed to align with HOA reserve studies and capital planning cycles, so costs are predictable rather than a surprise special assessment.",
    },
    {
      question: "Do you work with HOAs outside of Georgetown?",
      answer: "Yes — we actively manage community roofing programs throughout Williamson County and the broader Central Texas area.",
    },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Multiple active HOA maintenance programs countywide.", badge: "Most Requested" },
    { town: "Round Rock",   benefit: "Established relationships with growing HOA communities.", badge: "" },
    { town: "Cedar Park",   benefit: "New-construction and established community roofing.",   badge: "" },
    { town: "Leander",      benefit: "Rapidly growing HOA developments under active service.", badge: "" },
    { town: "Liberty Hill", benefit: "Rural and newly-developed community coverage.",          badge: "" },
    { town: "Hutto",        benefit: "New-build community warranty and maintenance work.",     badge: "" },
  ];

  const services = [
    { icon: faHouseChimney, title: "Roof Replacement",         body: "Phased, budget-aware replacement across multi-building communities.",       link: "/services/roof-replacement" },
    { icon: faCloudRain,    title: "Storm Damage Restoration",  body: "Coordinated storm claims across every affected roof in the community.",      link: "/services/storm-damage-restoration" },
    { icon: faSearch,       title: "Roof Inspection",           body: "Community-wide condition reports built for board and reserve-study use.",   link: "/services/roof-inspection" },
    { icon: faBroom,        title: "Gutter Installation",       body: "Association-wide gutter programs that protect every building's foundation.", link: "/services/gutter-installation" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "HOA & Property Management" },
      ]} />

      <SectionIntro
        title="Roofing Programs for HOAs & Property Management"
        subtitle="Community-wide inspections, board-ready proposals, and coordinated storm claims — built for how HOAs actually budget and approve work."
      />

      <TrustBar headline="Trusted with 60+ HOA and property-management roofing programs across Central Texas" />

      <IndustryPainPoints
        industry="HOA and property management"
        painPoints={painPoints}
        ctaText="Get a Community Roof Report"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="HOA communities"
          features={whyFeatures}
          title="What We Build Differently for HOAs & Property Managers"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="HOA communities" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Roofing Service Your Community Needs"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Georgetown"
          areas={localAreas}
          servicePath="industries/hoa-property-management"
          title="Serving HOA Communities Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="HOA & Property Management Roofing FAQs" />
      </div>

      <CTABanner
        headline="Ready for a Community-Wide Roof Report?"
        subline="Board-ready condition reports and phased budget proposals for HOA and property-management communities. Free consultation."
        primaryText="Get Your Free Report"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+15129006200"
      />

      <div className={styles.section}>
        <Variant4
          title="Tell Us About Your Community"
          cityName="Georgetown"
          slug="industries/hoa-property-management"
          spot="hoa-industry-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}