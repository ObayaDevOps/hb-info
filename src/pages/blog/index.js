import SEO from '@/components/SEO';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
// Layout supplies Navbar/Footer
import StyledCard from '@/components/StyledCard';

const categories = [
  { slug: 'beekeeping', name: 'Beekeeping Knowledge' },
  { slug: 'recipes', name: 'Recipes' },
  { slug: 'impact-stories', name: 'Impact Stories' },
  { slug: 'sustainability', name: 'Sustainability Insights' },
];

const posts = [
  {
    slug: 'best-honey-in-kampala-buyers-guide-2025',
    title: 'Which Honey in Kampala Should You Trust in 2025?',
    category: 'beekeeping',
    snippet: 'Compare Kampala’s most trusted African luxury honey jars with traceable honey Uganda data, tasting notes, and buyer red flags for 2025.',
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
    title: 'How Do We Prove Ugandan Honey Is Pure Before It Reaches Your Table?',
    category: 'sustainability',
    snippet: 'Follow our lab and field protocols for certifying traceable honey Uganda batches, from moisture readings to beekeeper audits.',
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
    title: 'Are Beeswax Candles in Uganda Really Cleaner Than Paraffin Pillars?',
    category: 'candles',
    snippet: 'See why sustainable beeswax candles purify indoor air, burn longer, and complement African luxury honey rituals at home.',
  },
  {
    slug: 'scented-candles-uganda-fragrance-guide-and-room-pairings',
    title: 'Which Scented Candle Should You Light for Each Room in Kampala?',
    category: 'candles',
    snippet: 'Match sustainable beeswax candles to each room with fragrance layering tips inspired by African luxury honey terroirs.',
  },
];

export default function BlogPage() {
  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh' }}>
      <SEO
        title="Blog"
        description="Beekeeping knowledge, buyer guides, Kampala stockists, candle care, gifting ideas, and sustainability insights."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'The Hive Journal',
        }}
      />

      {/* Hero */}
      <HeroSection
        title="The Hive Journal"
        subtitle="Thought leadership, field notes, and chef-worthy recipes."
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/3049c86f8b48da4c3f32c4673e5bd000217e3c4e-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <div
        className="rpx rpy rbr"
        style={{
          position: 'relative',
          maxWidth: '90rem',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#FFF2D7',
          '--px': '48px',
          '--px-md': '80px',
          '--py': '64px',
          '--py-md': '80px',
          '--br': '0px',
          '--br-lg': '2rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <h1
            style={{
              fontSize: '1.875rem',
              lineHeight: '2.375rem',
              fontWeight: 600,
              fontFamily: 'var(--font-hanken)',
            }}
          >
            Blog Articles
          </h1>
          <p style={{ color: '#000819' }}>Read stories from our beekeepers, explore pairings, and dive into sustainability insights.</p>

          {/* Category Filter (UI only) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', width: '100%' }}>
            <select
              className="rmaxw"
              style={{
                '--maxw': '100%',
                '--maxw-md': '24rem',
                width: '100%',
                border: '1px solid #1A2234',
                borderRadius: '0.375rem',
                padding: '8px',
                backgroundColor: 'white',
                color: '#000819',
              }}
            >
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
            <input
              placeholder="Search posts…"
              className="rmaxw"
              style={{
                '--maxw': '100%',
                '--maxw-md': '24rem',
                width: '100%',
                height: '40px',
                padding: '0 12px',
                fontSize: '0.875rem',
                borderRadius: '4px',
                border: '2px solid #09090b',
                backgroundColor: 'transparent',
                outline: 'none',
              }}
            />
          </div>

          {/* Posts */}
          <div
            className="rgtc"
            style={{ display: 'grid', width: '100%', paddingTop: '16px', '--gtc': '1fr', '--gtc-sm': 'repeat(2, 1fr)', '--gtc-md': 'repeat(3, 1fr)' }}
          >
            {posts.map((p) => {
              const categoryName = categories.find((c) => c.slug === p.category)?.name
              return (
                <div key={p.slug} style={{ padding: '8px' }}>
                  <StyledCard style={{ padding: '8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', padding: '16px' }}>
                      {categoryName ? (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            minHeight: '20px',
                            padding: '0 6px',
                            borderRadius: '0.25rem',
                            backgroundColor: '#000819',
                            color: '#FFF2D7',
                            fontSize: '0.75rem',
                            lineHeight: '1rem',
                            fontWeight: 500,
                          }}
                        >
                          {categoryName}
                        </span>
                      ) : null}
                      <Link href={`/blog/${p.slug}`}><span style={{ fontWeight: 600 }}>{p.title}</span></Link>
                      <p style={{ color: '#000819', fontSize: '0.875rem', lineHeight: '1.25rem' }}>
                        {p.snippet}
                      </p>
                    </div>
                  </StyledCard>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

BlogPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
