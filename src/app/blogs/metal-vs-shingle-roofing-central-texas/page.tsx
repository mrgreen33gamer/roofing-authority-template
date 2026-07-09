'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faLeaf, faClock, faShieldHalved, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Metal roofing keeps showing up in Central Texas neighborhoods — but is it worth the upfront cost over a traditional asphalt shingle roof? The honest answer depends on how long you plan to stay in your home and how much hail protection matters to you.",
  },
  {
    type: 'cards',
    heading: 'Metal vs. Shingle — Side by Side',
    cards: [
      { icon: faLeaf, title: 'Energy Efficiency', body: 'Metal roofs reflect solar heat and can cut summer cooling costs 10–25%. Asphalt shingles absorb more heat and transfer it into the attic.' },
      { icon: faClock, title: 'Lifespan', body: 'Standing-seam metal lasts 40–70 years. Architectural asphalt shingles average 20–30 years in Central Texas heat and UV exposure.' },
      { icon: faShieldHalved, title: 'Hail Resistance', body: 'Standing-seam metal shrugs off most hail with cosmetic dents at worst. Class 4 impact-resistant shingles close much of the gap for a fraction of the cost.' },
      { icon: faDollarSign, title: 'Upfront Cost', body: 'Metal roofing typically costs 2–3x more per square than architectural asphalt shingles, installed.' },
    ],
  },
  {
    type: 'table',
    heading: 'Cost & Performance Comparison (Central Texas, 2026)',
    tableHeaders: ['Category', 'Asphalt Shingle', 'Standing-Seam Metal'],
    tableRows: [
      ['Installed cost (2,000 sq ft roof)', '$9,000–$14,000', '$18,000–$30,000'],
      ['Expected lifespan', '20–30 years', '40–70 years'],
      ['Hail performance', 'Good with Class 4 impact-resistant shingle', 'Excellent — may dent, rarely fails'],
      ['Insurance premium discount', 'Sometimes, with Class 4 rating', 'Often, with Class 4 metal + wind mitigation'],
      ['Best fit for', 'Budget-conscious replacement, 10–20 year hold', 'Long-term buy-and-hold homeowners'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "For most Georgetown-area homes, a Class 4 impact-resistant architectural shingle offers the best balance of cost, hail protection, and insurance premium reduction. Metal makes the most financial sense if you're planning to stay in your home 20+ years or want to minimize storm-related claims long term.",
  },
  {
    type: 'tips',
    heading: 'Questions to Ask Before You Decide',
    items: [
      'How many more years do you realistically plan to own this home?',
      'Does your insurance carrier offer a premium discount for Class 4 impact-resistant materials?',
      'Can your roof deck and structure support the added weight of metal panels?',
      'Does your HOA restrict roofing material or color choices?',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Metal vs. Shingle Roofing: What Makes Sense for Texas Homes in 2026?"
        description="Metal roofing is everywhere in Central Texas right now — but is it right for your home and budget? Real pros, cons, and costs for Georgetown-area homeowners."
        imageSrc="/pages/blogs/metal-vs-shingle-roofing.jpg"
        imageAlt="Metal vs shingle roofing comparison for Texas homes"
        category="Materials"
        date="April 10, 2026"
        readTime={8}
        authorName="Mike Hawkins, Ironclad Roofing Co."
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Not Sure Which Roofing Material Is Right for Your Home?"
        body="Get a free material comparison and written quote from Ironclad Roofing Co."
        buttonText="Get a Free Consultation"
        buttonHref="/services/roof-replacement"
      />
      <NewsletterSignup variant={1} spot="metal-vs-shingle-blog" />
    </>
  );
}
