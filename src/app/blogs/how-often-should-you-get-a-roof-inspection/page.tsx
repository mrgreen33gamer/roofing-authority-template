'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faExclamationTriangle, faFileContract, faShieldHalved, faClock } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "In Central Texas, your roof takes a hit from every direction — baking summer sun, sudden hailstorms, high winds, and the occasional ice event. A roof doesn't announce it's failing the way an appliance does; small problems hide until they become expensive ones.",
  },
  {
    type: 'tips',
    heading: 'Recommended Inspection Schedule for Central Texas',
    items: [
      'Twice a year, spring and fall, as routine maintenance — before storm season ramps up and before winter',
      'Immediately after any hailstorm or high-wind event, even if you can\'t see damage from the ground',
      'Before listing your home for sale, or right after buying one, so you know exactly what you\'re dealing with',
      'Every inspection once your roof passes the 15-year mark, as materials age faster in the back half of their lifespan',
      'After any tree limb strike, construction nearby, or other impact event',
    ],
  },
  {
    type: 'cards',
    heading: 'What Happens When You Skip Inspections',
    cards: [
      { icon: faExclamationTriangle, title: 'Hidden leaks go undetected', body: 'A small gap around a pipe boot or chimney flashing can quietly rot decking for months before it shows up as a ceiling stain inside your home.' },
      { icon: faFileContract, title: 'Insurance claim windows close', body: 'Most Texas homeowner policies require you to file a hail or wind damage claim within 12 months of the storm — miss that window and you cover the full replacement cost yourself.' },
      { icon: faShieldHalved, title: 'Manufacturer warranties get voided', body: 'Many shingle warranties require documented periodic maintenance. Skip it, and a legitimate warranty claim can get denied over a missing paper trail.' },
      { icon: faClock, title: 'Years of roof life lost', body: 'Clogged valleys and gutters trap moisture against the deck. Left unaddressed, that can shave 5+ years off an otherwise healthy roof.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: After any hailstorm — even a \"minor\" one — schedule a free inspection within 30 days. Bruised shingles often show zero visible damage from the ground and won't start leaking until a year or more later, well past most insurance filing deadlines.",
  },
  {
    type: 'list',
    heading: "What a Real Inspection Should Cover",
    items: [
      'Shingle condition — granule loss, curling, cracking, or hail bruising',
      'Flashing around chimneys, vents, and skylights',
      'Attic ventilation and any signs of moisture or daylight through the decking',
      'Gutters and downspouts for proper drainage and debris buildup',
      'Soft spots or sagging in the roof deck',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Get a Roof Inspection in Central Texas?"
        description="Hail, heat, and high winds all take a toll on Central Texas roofs. Here's the honest inspection schedule for Georgetown-area homes — and what happens when you skip it."
        imageSrc="/pages/blogs/roof-inspection.jpg"
        imageAlt="Roof inspection schedule guide for Central Texas homes"
        category="Maintenance"
        date="April 14, 2026"
        readTime={6}
        authorName="Mike Hawkins, Ironclad Roofing Co."
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Due for a Roof Inspection?"
        body="Ironclad's GAF Master Elite®-certified crews offer free, no-obligation roof inspections across Central Texas."
        buttonText="Schedule a Free Inspection"
        buttonHref="/services/roof-inspection"
      />
      <NewsletterSignup variant={1} spot="roof-inspection-blog" />
    </>
  );
}
