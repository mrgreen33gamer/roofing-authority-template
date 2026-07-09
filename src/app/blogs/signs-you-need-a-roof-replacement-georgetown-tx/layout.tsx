import type { Metadata } from 'next';
import { getPostBySlug } from '../../../../libs/blog-posts';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ironcladroofingtx.com';
const slug     = 'signs-you-need-a-roof-replacement-georgetown-tx';
const post     = getPostBySlug(slug)!;
const url      = `${BASE_URL}/blogs/${slug}`;
const imgUrl   = `${BASE_URL}/pages/blogs/roof-replacement-signs.jpg`;

export const metadata: Metadata = {
  title: `${post.title} | Ironclad Roofing Co.`,
  description: post.excerpt,
  keywords: ['roof replacement georgetown tx', 'signs roof needs replacing', 'georgetown roof repair vs replace', 'roofing georgetown tx', 'hail damage roof georgetown'],
  authors: [{ name: 'Mike Hawkins', url: BASE_URL }],
  alternates: { canonical: url },
  openGraph: {
    title: post.title,
    description: post.excerpt,
    url,
    siteName: 'Ironclad Roofing Co.',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-04-18T08:00:00-05:00',
    modifiedTime: '2026-04-18T08:00:00-05:00',
    authors: ['Mike Hawkins'],
    images: [{ url: imgUrl, width: 1200, height: 630, alt: post.imageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: post.title,
    description: post.excerpt,
    images: [imgUrl],
  },
  robots: { index: true, follow: true },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  datePublished: '2026-04-18T08:00:00-05:00',
  dateModified: '2026-04-18T08:00:00-05:00',
  author: {
    '@type': 'Person',
    name: 'Mike Hawkins',
    url: BASE_URL,
    jobTitle: 'Founder & Owner, Ironclad Roofing Co.',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Ironclad Roofing Co.',
    url: BASE_URL,
    logo: { '@type': 'ImageObject', url: `${BASE_URL}/logos/ironclad-banner.png` },
  },
  image: imgUrl,
  url,
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  keywords: 'roof replacement georgetown tx, signs roof needs replacing, roofing georgetown',
  articleSection: 'Roof Replacement',
  inLanguage: 'en-US',
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': url,
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2'],
  },
  url,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blogs` },
    { '@type': 'ListItem', position: 3, name: post.title, item: url },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
