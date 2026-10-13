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
  'Humble Beeing is a Kampala-based Ugandan producer of raw honey, infused honeys, beeswax candles, and gifts, working with smallholder beekeepers and offering wholesale honey and beeswax.'

export const LOGO_URL =
  'https://cdn.sanity.io/images/wf5e366r/production/4a9d5b493b1b3fd3057b1b880bf136491f396a57-1019x593.png'

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  '@id': `${SITE_URL}/#store`,
  name: SITE_NAME,
  legalName: 'HB Fine Honey Suppliers Limited',
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
    title: 'Where to Buy Honey in Kampala: Stockists & Orders',
    category: 'beekeeping',
    snippet: 'Find Kampala honey stockists, explore the current range and confirm availability, collection or delivery before ordering.',
  },
  {
    slug: 'raw-honey-uganda-benefits-and-buying-guide',
    title: 'Raw Honey in Uganda: A Buyer’s Guide',
    category: 'beekeeping',
    snippet: 'Compare raw Ugandan honey by harvest origin, handling, flavour and the scope of available test reports.',
  },
  {
    slug: 'how-to-store-honey-in-kampala-heat-and-humidity-tips',
    title: 'How to Store Honey in Kampala',
    category: 'beekeeping',
    snippet: 'Practical honey storage tips for Kampala: sealed jars, a shaded cupboard and managing natural crystallisation.',
  },
  {
    slug: 'premium-honey-uganda-what-makes-it-worth-it',
    title: 'Premium Ugandan Honey: Origin, Flavour & Value',
    category: 'beekeeping',
    snippet: 'Explore the origins, handling and tasting notes that distinguish premium Ugandan honey, and what to ask before buying.',
  },
  {
    slug: 'how-we-test-honey-purity-in-uganda-lab-and-field',
    title: 'What Our Published Honey Lab Reports Show',
    category: 'sustainability',
    snippet: 'Read the scope and results of UNBS chemistry and microbiology reports for one Humble Beeing raw honey sample.',
  },
  {
    slug: 'organic-honey-in-uganda-what-it-really-means',
    title: 'Organic Honey & Beeswax in Uganda: A Buyer’s Guide',
    category: 'sustainability',
    snippet: 'Understand organic honey and beeswax claims, raw honey, certification scope and what the published UNBS reports establish.',
  },
  {
    slug: 'specialist-honey-for-chefs-in-kampala-pairings-and-uses',
    title: 'Ugandan Honey for Chefs, Restaurants & Hotels',
    category: 'beekeeping',
    snippet: 'Explore Ugandan honey pairings for restaurant menus and hotel breakfasts, with sourcing questions for wholesale buyers.',
  },
  {
    slug: 'wholesale-honey-kampala-suppliers-guide',
    title: 'Buying Wholesale Honey in Kampala: Supplier Guide',
    category: 'wholesale',
    snippet: 'Compare wholesale honey suppliers by origin records, available formats, minimum orders, lead times and relevant test documentation.',
  },
  {
    slug: 'ugandan-gift-ideas-honey-and-candle-gift-sets',
    title: 'Ugandan Gifts: Honey, Candles & Corporate Hampers',
    category: 'gifts',
    snippet: 'Explore locally made honey gifts and beeswax candles for clients, weddings and personal occasions, with corporate gifting enquiries in Kampala.',
  },
  {
    slug: 'beeswax-candles-uganda-clean-burn-guide',
    title: 'How to Use and Care for Beeswax Candles in Uganda',
    category: 'candles',
    snippet: 'Learn how to choose, burn, and store beeswax candles in a Kampala home.',
  },
  {
    slug: 'scented-candles-uganda-fragrance-guide-and-room-pairings',
    title: 'Scented Candles in Uganda: A Fragrance Guide',
    category: 'candles',
    snippet: 'Choose scented beeswax candles for Kampala homes and gifts, with fragrance pairings and candle care guidance.',
  },
  {
    slug: 'kwanjula-and-kukyala-gift-guide-honey-in-introduction-ceremony-baskets',
    title: 'Kwanjula & Kukyala Gifts: A Honey Gift Guide',
    category: 'gifts',
    snippet: 'Ideas for honey gifts in Ugandan introduction ceremony baskets, with presentation tips and locally made gift sets.',
  },
  {
    slug: 'single-origin-ugandan-honey-west-nile-shea-and-coffee-blossom',
    title: 'Single-Origin Ugandan Honey: Regions & Blossoms',
    category: 'beekeeping',
    snippet: 'Explore West Nile shea blossom and other Ugandan honey origins, their tasting notes and what single-origin means.',
  },
  {
    slug: 'real-vs-fake-honey-uganda-how-to-know-yours-is-pure',
    title: 'Real vs Fake Honey in Uganda: What Can You Actually Check?',
    category: 'sustainability',
    snippet: 'Learn what labels and sample-specific reports can show, and why kitchen tests cannot prove honey purity.',
  },
]

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug)
