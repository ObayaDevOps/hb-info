import SEO from '@/components/SEO';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
// Layout supplies Navbar/Footer
import StyledCard from '@/components/StyledCard';
import { BLOG_POSTS } from '@/lib/siteMeta';

const categories = [
  { slug: 'beekeeping', name: 'Beekeeping Knowledge' },
  { slug: 'recipes', name: 'Recipes' },
  { slug: 'impact-stories', name: 'Impact Stories' },
  { slug: 'sustainability', name: 'Sustainability Insights' },
  { slug: 'gifts', name: 'Gifting Guides' },
  { slug: 'candles', name: 'Candles' },
  { slug: 'wholesale', name: 'Wholesale' },
];

const posts = BLOG_POSTS;


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
