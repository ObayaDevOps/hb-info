// The apex domain redirects to www. Keep every public search signal on the
// final destination, including pages rendered without a site URL environment variable.
export const SITE_URL = 'https://www.humble-beeing.com'

export function canonicalUrl(path = '/') {
  const pathname = new URL(path, SITE_URL).pathname
  return `${SITE_URL}${pathname}`
}

export const SITE_NAME = 'Humble Beeing'

// Definitional entity statement — reused in schema, page copy, and llms.txt so
// search engines and AI assistants get one consistent description of the brand.
export const BRAND_STATEMENT =
  'Humble Beeing is a Kampala-based Ugandan producer of pure raw honey, infused honeys, hand-poured beeswax candles, and luxury gift hampers, made with smallholder farmers through traceable, regenerative beekeeping.'

export const LOGO_URL =
  'https://cdn.sanity.io/images/wf5e366r/production/4a9d5b493b1b3fd3057b1b880bf136491f396a57-1019x593.png'

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  '@id': `${SITE_URL}/#store`,
  name: SITE_NAME,
  description: BRAND_STATEMENT,
  url: SITE_URL,
  logo: LOGO_URL,
  image: 'https://cdn.sanity.io/images/wf5e366r/production/06a02c2552c748ec8e77986956481bd97bdce9f3-5184x3456.jpg',
  email: 'obaya@humble-beeing.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2nd Floor, Tools and Machinery Building, Kabalagala',
    addressLocality: 'Kampala',
    addressCountry: 'UG',
  },
  areaServed: [
    { '@type': 'City', name: 'Kampala' },
    { '@type': 'Country', name: 'Uganda' },
  ],
  sameAs: [
    'https://www.instagram.com/humble_beeing_ug/',
    'https://www.linkedin.com/company/humble-beeing',
  ],
  priceRange: '$$',
}

export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, path }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  }
}

export const STATIC_ROUTES = [
  '/',
  '/products',
  '/blog',
  '/recipes',
  '/our-story',
  '/our-process',
  '/impact-and-sustainability',
  '/wholesale-and-partnerships',
  '/lab-tests',
  '/store-locator',
  '/contact-and-connect',
  '/terms-and-conditions',
]

// Single source of truth for blog posts — used by /blog and sitemap.xml.
export const BLOG_POSTS = [
  {
    slug: 'best-honey-in-kampala-buyers-guide-2025',
    title: 'How to Choose Honey in Kampala',
    category: 'beekeeping',
    snippet: 'Use harvest details, tasting notes, and published test reports to assess honey sold in Kampala.',
  },
  {
    slug: 'where-to-buy-honey-in-kampala-stockists-and-delivery',
    title: 'Where Can You Buy Trustworthy Honey in Kampala Today?',
    category: 'beekeeping',
    snippet: 'Get the freshest African luxury honey and sustainable beeswax candles delivered in Kampala with this stockist map and delivery checklist.',
  },
  {
    slug: 'raw-honey-uganda-benefits-and-buying-guide',
    title: 'Why Do Serious Food Lovers in Uganda Seek Out Raw Honey Instead of the Squeeze Bottle?',
    category: 'beekeeping',
    snippet: 'Explore why chefs prefer raw African luxury honey for flavor, nutrition, and traceable honey Uganda sourcing straight from the apiary.',
  },
  {
    slug: 'how-to-store-honey-in-kampala-heat-and-humidity-tips',
    title: 'How Should You Store Honey in Kampala’s Heat Without Losing Its Magic?',
    category: 'beekeeping',
    snippet: 'Learn pro tips for keeping African luxury honey silky even in Kampala heat with airtight jars, shade placement, and traceable honey Uganda freshness cues.',
  },
  {
    slug: 'premium-honey-uganda-what-makes-it-worth-it',
    title: 'What Makes Premium Ugandan Honey Worth the Splurge?',
    category: 'beekeeping',
    snippet: 'Understand the craftsmanship, terroir, and lab testing that turn traceable honey Uganda harvests into premium African luxury honey.',
  },
  {
    slug: 'how-we-test-honey-purity-in-uganda-lab-and-field',
    title: 'What Our Published Honey Lab Reports Show',
    category: 'sustainability',
    snippet: 'Read the scope and results of UNBS chemistry and microbiology reports for one Humble Beeing raw honey sample.',
  },
  {
    slug: 'organic-honey-in-uganda-what-it-really-means',
    title: 'Organic Honey in Uganda: What It Really Means',
    category: 'sustainability',
    snippet: 'Decode organic standards, forage zones, and regenerative practices behind truly traceable honey Uganda labels.',
  },
  {
    slug: 'specialist-honey-for-chefs-in-kampala-pairings-and-uses',
    title: 'Which Specialist Ugandan Honey Elevates Restaurant Menus in Kampala?',
    category: 'beekeeping',
    snippet: 'Discover chef-approved pairings that spotlight African luxury honey infusions and traceable honey Uganda provenance on fine-dining menus.',
  },
  {
    slug: 'wholesale-honey-kampala-suppliers-guide',
    title: 'Where Can Kampala Businesses Source Reliable Wholesale Honey?',
    category: 'wholesale',
    snippet: 'Navigate Kampala’s wholesale scene with supplier vetting tips, MOQ insights, and traceable honey Uganda certifications for retailers.',
  },
  {
    slug: 'ugandan-gift-ideas-honey-and-candle-gift-sets',
    title: 'What Are the Best Ugandan Honey and Candle Gifts for People Who Have Everything?',
    category: 'gifts',
    snippet: 'Build unforgettable hampers that pair African luxury honey flights with sustainable beeswax candles for elevated Ugandan gifting.',
  },
  {
    slug: 'beeswax-candles-uganda-clean-burn-guide',
    title: 'How to Use and Care for Beeswax Candles in Uganda',
    category: 'candles',
    snippet: 'Learn how to choose, burn, and store beeswax candles in a Kampala home.',
  },
  {
    slug: 'scented-candles-uganda-fragrance-guide-and-room-pairings',
    title: 'Which Scented Candle Should You Light for Each Room in Kampala?',
    category: 'candles',
    snippet: 'Match sustainable beeswax candles to each room with fragrance layering tips inspired by African luxury honey terroirs.',
  },
  {
    slug: 'kwanjula-and-kukyala-gift-guide-honey-in-introduction-ceremony-baskets',
    title: 'Kwanjula & Kukyala Gift Guide: Why Honey Belongs in Every Introduction Ceremony Basket',
    category: 'gifts',
    snippet: 'Plan kwanjula and kukyala gifts with confidence: what to carry, how to present it, and why pure Ugandan honey has always belonged in the basket.',
  },
  {
    slug: 'single-origin-ugandan-honey-west-nile-shea-and-coffee-blossom',
    title: 'Single-Origin Ugandan Honey: West Nile, Shea Blossom & Coffee Blossom Explained',
    category: 'beekeeping',
    snippet: 'Taste your way across Uganda’s honey regions (West Nile shea blossom, coffee blossom, and wildflower harvests) and learn what single-origin really means.',
  },
  {
    slug: 'real-vs-fake-honey-uganda-how-to-know-yours-is-pure',
    title: 'Real vs Fake Honey in Uganda: What Can You Actually Check?',
    category: 'sustainability',
    snippet: 'Learn what labels and sample-specific reports can show, and why kitchen tests cannot prove honey purity.',
  },
]

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug)
