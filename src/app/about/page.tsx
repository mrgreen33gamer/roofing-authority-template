// Ironclad Roofing Co. — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import AboutStory      from "#/PageComponents/AboutStory/AboutStory";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faSearch,
  faFileContract,
  faHardHat,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2010",
      description: "Ironclad was founded in Georgetown by Mike Hawkins after watching too many neighbors get taken advantage of by storm-chasing roofing crews. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust on Your Roof",
      description: "Every crew lead on our team is background-checked, GAF Master Elite®-certified, and fully insured. We treat every property we work on with the same respect we'd want for our own homes — tarps down, job site cleaned, magnetic nail sweep before we leave.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Inspection",
      description: "We won't push a full replacement when a repair will hold up for years. We won't inflate an insurance claim. Our reputation is built on straight talk about what your roof actually needs — and 15 years of repeat customers and referrals prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Roofs restored across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Central Texas families", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Free Roof Inspection",         description: "A GAF Master Elite®-certified crew lead walks your roof, documents every issue with photos, and gives you a straight assessment — repair or replace, no upsell.", icon: faSearch },
    { number: 2, title: "Clear, Written Estimate",       description: "You get a detailed, flat-rate estimate before any work begins — materials, labor, and timeline spelled out. If storm damage is involved, we'll walk you through the insurance claim process too.", icon: faFileContract },
    { number: 3, title: "Professional Installation",     description: "Our crews show up on schedule, protect your landscaping and gutters, and install to GAF specifications — every job supervised start to finish.", icon: faHardHat },
    { number: 4, title: "Final Walkthrough & Warranty",   description: "We walk the finished roof with you, answer every question, and register your 25-year workmanship warranty before we leave the job site.", icon: faClipboardCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="About Ironclad Roofing Co."
        subtitle="Georgetown-owned, Georgetown-operated, and Georgetown-proud since 2010. We do honest roofing work at fair prices for the families and businesses we've called neighbors for 15 years."
      />

      <TrustBar headline="2,400+ Central Texas roofs trust Ironclad — and we've earned every one" />

      <div className={styles.section}>
        <AboutStory cityName="Georgetown" />
      </div>

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Georgetown"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="15 Years, By the Numbers" metrics={metrics} cityName="Georgetown" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Georgetown's Roofing Company — Ready When You Need Us"
        subline="Free inspections and estimates. Flat-rate pricing. 25-year workmanship warranty. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+15129006200"
        secondaryText="Request an Inspection"
        secondaryLink="/contact"
      />

    </main>
  );
}
