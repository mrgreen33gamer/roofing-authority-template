// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'signs-you-need-a-roof-replacement-georgetown-tx',
    title:    '7 Signs Your Roof Needs Replacing in Georgetown, TX (Not Just Repairing)',
    excerpt:  'Central Texas weather is brutal on roofs. Here are the 7 clear warning signs it’s time to replace — not just repair — before your next storm.',
    category: 'Roof Replacement',
    date:     'April 18, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/roof-replacement.jpg',
    imageAlt: 'Signs your roof needs replacing in Georgetown TX',
    featured: true,
  },
  {
    slug:     'how-often-should-you-get-a-roof-inspection',
    title:    'How Often Should You Get a Roof Inspection in Central Texas?',
    excerpt:  'Hail, heat, and high winds all take a toll on Central Texas roofs. Here’s the honest inspection schedule for Georgetown-area homes — and what happens when you skip it.',
    category: 'Maintenance',
    date:     'April 14, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/roof-inspection.jpg',
    imageAlt: 'Roof inspection schedule guide for Central Texas homes',
  },
  {
    slug:     'metal-vs-shingle-roofing-central-texas',
    title:    'Metal vs. Shingle Roofing: What Makes Sense for Texas Homes in 2026?',
    excerpt:  'Metal roofing is everywhere in Central Texas right now — but is it right for your home and budget? Real pros, cons, and costs for Georgetown-area homeowners.',
    category: 'Materials',
    date:     'April 10, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/storm-damage.jpg',
    imageAlt: 'Metal vs shingle roofing comparison for Texas homes',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }