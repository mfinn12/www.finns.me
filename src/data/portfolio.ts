// Portfolio pieces, shown in this order. To add one, put the PDF in
// public/docs, the preview image in public/images/portfolio, and add an entry.

export interface PortfolioItem {
  title: string;
  description: string;
  /** What I did on the piece. */
  role: string;
  href: string;
  image: string;
  /** Who the work was for (optional; shown as a small label). */
  client?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    title: 'Infographic',
    description: "Visual overview of how Arena's product works.",
    role: 'Created the concept and content; worked with a designer on layout.',
    href: '/docs/infographic.pdf',
    image: '/images/portfolio/infographic-700x381.png',
    client: 'Arena',
  },
  {
    title: 'Brochure',
    description: 'Product brochure for Arena.',
    role: 'Wrote the copy and guided a designer on layout.',
    href: '/docs/brochure-arena.pdf',
    image: '/images/portfolio/brochure-arena-696x400.png',
    client: 'Arena',
  },
  {
    title: 'Case Study',
    description: 'Anonymous customer case study for Arena.',
    role: 'Wrote the copy, created the graphics and designed the document.',
    href: '/docs/case-study-arena.pdf',
    image: '/images/portfolio/case-study-arena-700x396.png',
    client: 'Arena',
  },
  {
    title: 'Lead Generation Paper',
    description: 'White paper optimized to generate leads from a landing page.',
    role: 'Rewrote a thought-leadership paper and designed the document.',
    href: '/docs/lead-gen-paper.pdf',
    image: '/images/portfolio/lead-gen-paper-700x341.png',
    client: 'Arena',
  },
  {
    title: 'Marketing Plan',
    description: 'Sample marketing plan used with freelance clients.',
    role: 'Created for my freelance business.',
    href: '/docs/marketing-plan-sample.pdf',
    image: '/images/portfolio/marketing-plan-sample-700x393.png',
    client: 'signal | noise marketing',
  },
  {
    title: 'Pay-Per-Click Overview',
    description: 'Overview of pay-per-click (PPC) marketing for freelance clients.',
    role: 'Created for my freelance business.',
    href: '/docs/ppc-overview.pdf',
    image: '/images/portfolio/ppc-overview-553x400.png',
    client: 'signal | noise marketing',
  },
  {
    title: 'Brand Guide',
    description: 'Brand guide for Arena.',
    role: 'Guided logo, color and font choices; worked with a designer on the guide.',
    href: '/docs/brand-guide-arena.pdf',
    image: '/images/portfolio/brand-colors-arena-700x393.png',
    client: 'Arena',
  },
  {
    title: 'Content Best Practices',
    description: 'Best practices for content marketing, created for freelance clients.',
    role: 'Created for my freelance business.',
    href: '/docs/content-best-practices.pdf',
    image: '/images/portfolio/content-best-practices-689x400.png',
    client: 'signal | noise marketing',
  },
  {
    title: 'Messaging Framework',
    description: 'Messaging and positioning framework for Arena.',
    role: 'Wrote the proposed messaging and positioning and aligned the leadership team.',
    href: '/docs/messaging-framework.pdf',
    image: '/images/portfolio/messaging-framework-587x400.png',
    client: 'Arena',
  },
  {
    title: 'Press Release',
    description: "Press release for a client's presentation at an industry event.",
    role: 'Wrote and published the release on PRWeb.',
    href: '/docs/press-release.pdf',
    image: '/images/portfolio/prweb-logo-700x192.jpg',
  },
  {
    title: 'Analyst Profile',
    description:
      'The Advisory Board Company, which advises the health care industry, published a profile of Arena.',
    role: 'Led the analyst outreach that resulted in the profile.',
    href: '/docs/analyst-profile-arena.pdf',
    image: '/images/portfolio/analyst-profile-643x400.png',
    client: 'Arena',
  },
  {
    title: 'Panel Recap',
    description: "Recap of an industry panel discussion, contributed to Becker's Hospital Review.",
    role: 'Provided the content and worked with a freelance writer.',
    href: 'https://www.beckershospitalreview.com/quality/5-hot-topics-around-nurse-retention.html',
    image: '/images/portfolio/beckers-logo-700x400.png',
    client: 'Arena',
  },
];
