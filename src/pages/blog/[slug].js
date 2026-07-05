import Head from 'next/head';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';
// Layout supplies Navbar/Footer

const hanken = 'var(--font-hanken)'

const bodyTextClass = { '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Mock content source to mirror the blog index
  const categories = [
    { slug: 'beekeeping', name: 'Beekeeping Knowledge' },
    { slug: 'recipes', name: 'Recipes' },
    { slug: 'impact-stories', name: 'Impact Stories' },
    { slug: 'sustainability', name: 'Sustainability Insights' },
  ];

  const posts = [
    {
      slug: 'welcome-to-the-hive',
      title: 'Welcome to the Hive',
      category: 'beekeeping',
      image: 'https://cdn.sanity.io/images/wf5e366r/production/b7984b21e4eca856f7f7563aa2af6a89be4b5402-5184x3456.jpg',
    },
    {
      slug: 'citrus-honey-madeleines',
      title: 'Citrus Honey Madeleines',
      category: 'recipes',
      image: 'https://cdn.sanity.io/images/wf5e366r/production/3049c86f8b48da4c3f32c4673e5bd000217e3c4e-5184x3456.jpg',
    },
  ];

  const post = useMemo(() => posts.find((p) => p.slug === slug), [slug]);
  const pageTitle = post?.title || (slug ? slug.replace(/-/g, ' ') : 'Blog Post');
  const tagName = post ? categories.find((c) => c.slug === post.category)?.name : undefined;

  return (
    <div style={{ backgroundColor: '#FFF2D7', color: '#000819', minHeight: '100vh', fontFamily: hanken }}>
      <Head>
        <title>{pageTitle} | Humble Beeing</title>
        <meta name="description" content="Blog article from Humble Beeing." />
      </Head>

      {/* Hero */}
      <HeroSection
        title={pageTitle}
        subtitle={tagName || 'Insights from the field and the kitchen.'}
        bgImage={post?.image || 'https://cdn.sanity.io/images/wf5e366r/production/b7984b21e4eca856f7f7563aa2af6a89be4b5402-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <div
        className="rpx rpy rbr rmt"
        style={{
          position: 'relative',
          maxWidth: '72rem',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#FFF2D7',
          '--px': '48px',
          '--px-md': '80px',
          '--py': '48px',
          '--py-md': '80px',
          '--br': '0px',
          '--br-lg': '2rem',
          '--mt': '0px',
          '--mt-md': '24px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', paddingBottom: '32px' }}>
          {tagName && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '20px',
                padding: '0 6px',
                borderRadius: '0.25rem',
                backgroundColor: '#000819',
                color: 'white',
                fontSize: '0.75rem',
                lineHeight: '1rem',
                fontWeight: 500,
              }}
            >
              {tagName}
            </span>
          )}
          <h1
            className="rt"
            style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', fontWeight: 600, fontFamily: hanken }}
          >
            {pageTitle}
          </h1>
          <p className="rt" style={{ ...bodyTextClass, color: '#000819' }}>
            Intro paragraph for the article. Highlight key themes like African luxury honey, pure beeswax candles, and traceable sourcing in Uganda.
          </p>
          <p className="rt" style={{ ...bodyTextClass, color: '#000819' }}>
            Body content goes here. Include rich storytelling, expert tips, and links to Impact & Sustainability where relevant.
          </p>
        </div>

        {post?.image && (
          <div style={{ paddingBottom: '32px' }}>
            <img
              src={post.image}
              alt={pageTitle}
              className="rh"
              style={{ borderRadius: '1.5rem', objectFit: 'cover', width: '100%', '--h': '280px', '--h-md': '420px' }}
            />
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
          <p className="rt" style={{ ...bodyTextClass, color: '#000819' }}>
            Continue the story with supporting details, quotes, and data. Add CTAs to products or related posts.
          </p>
          <p className="rt" style={{ ...bodyTextClass, color: '#000819' }}>
            Wrap up with a conclusion and next steps for the reader.
          </p>
        </div>
      </div>
    </div>
  );
}

BlogPostPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
