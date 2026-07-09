'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faDollarSign, faClock, faExclamationTriangle, faSearch, faTools, faShieldHalved, faLeaf } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas roofs take a beating — triple-digit summer heat, sudden hailstorms, and freeze-thaw swings in winter all add up. When repair calls start piling up, it's time to ask the big question: repair or replace?",
  },
  {
    type: 'cards',
    heading: '7 Signs Your Roof Needs Replacing (Not Just Repairing)',
    cards: [
      { icon: faDollarSign, title: 'Repair bills over $500 twice in one year', body: "If you've already spent a meaningful chunk of a full replacement on patch jobs, replacing usually costs less over time." },
      { icon: faClock, title: 'Your roof is 20+ years old', body: 'Most asphalt shingle roofs in Central Texas last 20–25 years. Past that, materials become brittle and unpredictable.' },
      { icon: faExclamationTriangle, title: 'Curling, cracking, or missing shingles', body: 'Shingles that curl at the edges or crack underfoot have lost their seal against wind-driven rain.' },
      { icon: faSearch, title: 'Granule loss and bald spots', body: "Check your gutters — a heavy buildup of granules means shingles are wearing down to bare asphalt." },
      { icon: faTools, title: 'Sagging roofline or soft decking', body: 'A visible dip or spongy feeling underfoot signals water damage to the decking below — this needs attention fast.' },
      { icon: faShieldHalved, title: 'Hail bruising after a storm', body: 'Even without visible leaks, hail impacts can crack the shingle mat underneath — most Texas insurance policies require you to file within 12 months.' },
      { icon: faLeaf, title: 'Rising energy bills', body: 'Deteriorating shingles and failing attic ventilation let heat pour into your attic, forcing your AC to work harder all summer.' },
    ],
  },
  {
    type: 'table',
    heading: 'Repair vs. Replace Cost Comparison (Georgetown, 2026)',
    tableHeaders: ['Factor', 'Repair', 'Full Roof Replacement'],
    tableRows: [
      ['Typical cost', '$300–$1,200', '$9,000–$18,000 (installed, avg. 2,000 sq ft home)'],
      ['Insurance coverage', 'Rarely covered unless storm-related', 'Often covered in full for wind/hail damage'],
      ['Warranty', '1–2 years on the patch', '25-year workmanship warranty'],
      ['Break-even point', 'Never — costs recur every storm season', 'One-time investment, decades of protection'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Most Texas homeowner insurance policies require you to file a hail or wind damage claim within 12 months of the storm date. If your roof took a hit this spring, don\'t wait until it\'s leaking to get it documented.',
  },
  {
    type: 'tips',
    heading: 'What to Do Next in Georgetown',
    items: [
      'Get a free roof inspection from a GAF Master Elite®-certified crew',
      'Photograph any visible damage after a storm before the next rain washes evidence away',
      'Check your shingle warranty paperwork if you know your roof\'s install year',
      'Ask about insurance claim assistance if hail or high wind caused the damage',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs Your Roof Needs Replacing in Georgetown, TX (Not Just Repairing)"
        description="Central Texas weather is brutal on roofs. Here are the 7 clear warning signs it's time to replace — not just repair — before your next storm."
        imageSrc="/pages/blogs/roof-replacement-signs.jpg"
        imageAlt="Signs your roof needs replacing in Georgetown TX"
        category="Roof Replacement"
        date="April 18, 2026"
        readTime={7}
        authorName="Mike Hawkins, Ironclad Roofing Co."
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Need a Roof Replacement in Georgetown?"
        body="Get a free inspection and a written, flat-rate estimate from Ironclad Roofing Co. — Central Texas's GAF Master Elite® roofing experts."
        buttonText="Get a Free Inspection"
        buttonHref="/services/roof-replacement"
      />
      <NewsletterSignup variant={1} spot="roof-replacement-blog" />
    </>
  );
}
