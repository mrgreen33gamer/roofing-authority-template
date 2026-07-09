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
  faGavel, faFileContract, faCalendarCheck, faSchool,
  faClipboardList, faLandmark, faSearch, faShieldHalved,
  faHouseChimney, faCloudRain, faChartLine, faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function MunicipalGovernmentIndustryPage() {

  const painPoints = [
    {
      icon: faGavel,
      problem: "Public bid and RFP requirements slow down urgent roof repairs",
      consequence: "A leaking school or public-facility roof doesn't wait for a formal bid cycle, but skipping the process isn't an option for a public entity — leaving facilities staff caught between urgency and compliance.",
    },
    {
      icon: faFileContract,
      problem: "Prevailing wage and bonding requirements disqualify unprepared contractors",
      consequence: "Many roofing companies aren't set up to meet certified payroll, bonding, and insurance requirements — narrowing the pool of contractors who can even respond to a public solicitation.",
    },
    {
      icon: faCalendarCheck,
      problem: "Roofing budgets are tied to a fiscal-year cycle, not the calendar year",
      consequence: "A roof failure discovered mid-year with no line item in the current budget often means limping through with patch repairs until the next fiscal year opens funding.",
    },
    {
      icon: faSchool,
      problem: "School and public-facility roof work has to avoid disrupting students, staff, or public services",
      consequence: "Work has to be scheduled around the academic calendar, business hours, or public access — a missed coordination window can shut down a classroom or public service counter.",
    },
    {
      icon: faClipboardList,
      problem: "Public accountability requires documentation most contractors don't provide",
      consequence: "Taxpayer-funded projects need transparent, itemized documentation for audits and public records requests — a handshake invoice doesn't hold up.",
    },
    {
      icon: faLandmark,
      problem: "Multiple facilities across a district or municipality with no centralized roof records",
      consequence: "Without one contractor tracking condition across every building — schools, fire stations, city hall — facilities staff are left guessing which roof is next to fail.",
    },
  ];

  const whyFeatures = [
    {
      icon: faGavel,
      title: "Bid, RFP & Prevailing Wage Ready",
      description: "We're set up to respond to formal public solicitations — certified payroll, bonding, and insurance minimums, and prevailing wage compliance are already part of how we operate, not an obstacle.",
    },
    {
      icon: faCalendarCheck,
      title: "Built Around Your Fiscal Year",
      description: "We provide multi-year phased proposals aligned to your budget cycle, so a roof replacement can be planned and funded proactively instead of becoming an emergency mid-year expense.",
    },
    {
      icon: faClipboardList,
      title: "Transparent Documentation for Public Accountability",
      description: "Every inspection, bid response, and completed job comes with itemized, dated documentation built to hold up under public records requests and municipal audits.",
    },
  ];

  const processSteps = [
    { number: 1, title: "Facility-Wide Inspection",       description: "We inspect every municipal or district facility and document condition, age, and priority in one report built for budget planning.", icon: faSearch },
    { number: 2, title: "Bid & RFP Response",              description: "We respond to formal solicitations with complete bonding, insurance, and prevailing wage documentation ready to submit.", icon: faGavel },
    { number: 3, title: "Scheduled Around Public Operations", description: "Work is scheduled around the academic calendar, business hours, or public access needs to avoid disrupting the services your community depends on.", icon: faSchool },
    { number: 4, title: "Documented Completion & Warranty", description: "Every project closes out with itemized documentation and a 25-year workmanship warranty on file for audits and future budget planning.", icon: faShieldHalved },
  ];

  const metrics = [
    { icon: faLandmark,  value: 40,  label: "Municipal and public facilities served across Central Texas",       suffix: "+", duration: 2 },
    { icon: faChartLine, value: 100, label: "Public bid and RFP requirements met on every proposal",              suffix: "%", duration: 3 },
    { icon: faClock,     value: 15,  label: "Years serving Central Texas municipalities and school districts",    suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Public bid & RFP experience",         us: "✅ Certified payroll & bonding ready",  others: "❌ Not equipped for public contracts" },
    { feature: "Fiscal-year budget alignment",        us: "✅ Multi-year phased proposals",        others: "❌ One-time quotes only" },
    { feature: "Prevailing wage compliance",          us: "✅ Built into every public job",         others: "❌ Often unfamiliar with requirements" },
    { feature: "Public records-ready documentation",  us: "✅ Itemized, dated, audit-ready",        others: "❌ Informal invoicing" },
    { feature: "GAF Master Elite® certified crews",   us: "✅ Every facility",                      others: "❌ Not always" },
  ];

  const faq = [
    {
      question: "Do you participate in formal public bid and RFP processes?",
      answer: "Yes — we regularly respond to municipal and school district solicitations with complete bonding, insurance certificates, and prevailing wage documentation included.",
    },
    {
      question: "Are you familiar with prevailing wage requirements on public contracts?",
      answer: "Yes — prevailing wage compliance and certified payroll reporting are part of how we operate on public-sector jobs, not something we have to learn on your project.",
    },
    {
      question: "Can you work within our fiscal-year budget cycle?",
      answer: "Yes — we build multi-year phased proposals designed to align with municipal and school district budget cycles, so roof replacement can be planned and funded proactively rather than as an emergency.",
    },
    {
      question: "Can you schedule roof work to avoid disrupting school or public operations?",
      answer: "Yes — we routinely schedule around the academic calendar, business hours, and public access needs, including nights, weekends, and school breaks when required.",
    },
    {
      question: "Do you provide documentation for public records requests or audits?",
      answer: "Yes — every inspection, bid response, and completed project includes itemized, dated documentation built to satisfy public accountability and audit requirements.",
    },
    {
      question: "Can you manage roofing across multiple facilities in our district or municipality?",
      answer: "Yes — we build a single facility-wide maintenance and replacement schedule across schools, administrative buildings, and public facilities, so you get one point of contact and coordinated budgeting instead of managing each building separately.",
    },
  ];

  const localAreas = [
    { town: "Georgetown",   benefit: "Home base — active roofing programs for city facilities and Georgetown ISD.", badge: "Most Requested" },
    { town: "Round Rock",   benefit: "Municipal and Round Rock ISD facility roofing experience.",   badge: "" },
    { town: "Cedar Park",   benefit: "City facility and public-safety building roofing.",            badge: "" },
    { town: "Leander",      benefit: "Leander ISD school facility roofing programs.",                badge: "" },
    { town: "Hutto",        benefit: "City and school district facility roofing.",                   badge: "" },
    { town: "Taylor",       benefit: "Municipal facility roofing supporting rapid public infrastructure growth.", badge: "" },
  ];

  const services = [
    { icon: faLandmark,     title: "Commercial Roofing",       body: "Low-slope roofing systems for city halls, schools, fire stations, and public facilities.", link: "/services/commercial-roofing" },
    { icon: faHouseChimney, title: "Roof Replacement",         body: "Fiscal-year-aligned replacement scheduling for municipal and school district facilities.",   link: "/services/roof-replacement" },
    { icon: faSearch,       title: "Roof Inspection",          body: "Facility-wide condition reports built for budget planning and public records.",              link: "/services/roof-inspection" },
    { icon: faCloudRain,    title: "Storm Damage Restoration", body: "Coordinated storm claims across every affected public facility.",                            link: "/services/storm-damage-restoration" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Municipal & Government" },
      ]} />

      <SectionIntro
        title="Roofing Programs for Municipal & Government Facilities"
        subtitle="Bid-ready proposals, fiscal-year-aligned budgeting, and transparent documentation — built for how public entities actually procure and approve work."
      />

      <TrustBar headline="Trusted with 40+ municipal, school district, and public-facility roofing programs across Central Texas" />

      <IndustryPainPoints
        industry="municipal and government"
        painPoints={painPoints}
        ctaText="Request a Facility Roof Assessment"
        ctaLink="/contact"
      />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="public facilities"
          features={whyFeatures}
          title="What We Build Differently for Municipal & Government Clients"
        />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="public facilities" />
      </div>

      <div className={styles.section}>
        <ServiceCardComponent
          heading="Every Roofing Service Your Facilities Need"
          cards={services}
        />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Georgetown"
          areas={localAreas}
          servicePath="industries/municipal-government"
          title="Serving Municipal & Public Facilities Across Central Texas"
        />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Georgetown" faq={faq} title="Municipal & Government Roofing FAQs" />
      </div>

      <CTABanner
        headline="Ready to Discuss Your Facility's Roofing Needs?"
        subline="Bid-ready proposals and fiscal-year-aligned budgeting for municipal and government facilities. Free consultation."
        primaryText="Request a Proposal"
        primaryLink="/contact"
        secondaryText="Call Us Now"
        secondaryLink="tel:+15129006200"
      />

      <div className={styles.section}>
        <Variant4
          title="Tell Us About Your Facility"
          cityName="Georgetown"
          slug="industries/municipal-government"
          spot="municipal-government-industry-page"
          formVariant={4}
        />
      </div>

    </main>
  );
}
