// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for Ironclad Roofing Co. — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Georgetown, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Roof Replacement',
    text:     "Hail tore up our roof pretty bad last spring. Ironclad had a full replacement done within a week of the insurance approval. The crew explained everything clearly, pricing was upfront, and the new roof looks incredible. Can't recommend them enough.",
  },
  {
    name:     'Sandra K.',
    location: 'Round Rock, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Roof Repair',
    text:     'Woke up to a leak in the ceiling after a bad storm. Called Ironclad and they had someone at my door by 9am. Fixed the same day, fair price. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Cedar Park, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Roof Inspection',
    text:     'Got a full inspection before listing our house. They came out, were thorough, and caught two soft spots before they became a $5,000 problem. Worth every penny, and the report made the sale go smoothly.',
  },
  {
    name:     'Patricia L.',
    location: 'Leander, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Roof Replacement',
    text:     'Had three companies quote us. Ironclad was honest about what our roof actually needed — not just upselling the most expensive materials. The install was clean, fast, and they handled the whole insurance claim for us.',
  },
  {
    name:     'David M.',
    location: 'Liberty Hill, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Gutter Installation',
    text:     'Had new gutters installed before the winter rains and the difference has been huge — no more water pooling by the foundation. Great crew, very professional, left the property spotless.',
  },
  {
    name:     'Angela W.',
    location: 'Hutto, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Storm Damage Restoration',
    text:     'Roof took a beating in a hailstorm on a Friday afternoon. I expected to wait all weekend but they came out Friday evening, tarped it same-day, and had the full restoration done within two weeks. My roofer for life.',
  },
  {
    name:     'Robert H.',
    location: 'Taylor, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Commercial Roofing',
    text:     'Ironclad re-roofed our warehouse with minimal disruption to operations. They coordinated the schedule around our shifts and kept us updated the entire time. Patient, knowledgeable crew — didn\'t feel rushed at all. Highly recommend.',
  },
  {
    name:     'Cheryl B.',
    location: 'Jarrell, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Storm Damage Restoration',
    text:     'Called them at 10pm after a tree limb came through the roof during a storm. They answered immediately, had someone out within the hour to tarp it, and started repairs the next morning. This company genuinely saved us. Thank you.',
  },
];

export default reviews;