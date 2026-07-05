import Form from '@/components/Form'
import Head from "next/head";
import HeroSection from '@/components/sections/HeroSection';
import PageLayout from '@/components/layouts/PageLayout';

// Layout supplies Navbar/Footer

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#f5cb81', minHeight: '100vh' }}>
      <Head>
        {/* Use data from Sanity */}
        <title>{'Contact Us'}</title>
        <meta name="description" content={'Empowering Innovation and Financial Growth Through Expertise'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.sanity.io/images/wf5e366r/production/4a9d5b493b1b3fd3057b1b880bf136491f396a57-1019x593.png" />
      </Head>

      {/* Hero */}
      <HeroSection
        title="Contact Us"
        subtitle="We’ll get back to you as soon as we can."
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/1bdb425b08c28f34c4c48fc739d2dff3fd2584d4-4032x2268.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      {/* Panel */}
      <div
        className="rpx rpy rbr rsh rmt"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#FFF2D7',
          '--px': '48px',
          '--px-md': '80px',
          '--py': '64px',
          '--py-md': '80px',
          '--br': '0px',
          '--br-lg': '2rem',
          '--sh': 'none',
          '--sh-lg': '0px 16px 24px rgba(24, 24, 27, 0.1), 0px 0px 1px rgba(24, 24, 27, 0.3)',
          '--mt': '0px',
          '--mt-md': '40px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '1.25rem',
            lineHeight: 'normal',
            fontWeight: 600,
            color: '#000819',
          }}
        >
          Contact Us
        </p>
        <p
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '0.95rem',
            lineHeight: '1.75rem',
            fontWeight: 400,
            color: '#000819',
            paddingTop: '0.5rem',
          }}
        >
          Want to reach out? Enter your details below and provide a message to Ashton & Carrington and we'll respond as soon as we can.
        </p>

        <div style={{ marginTop: '16px' }}>
          <Form buttonPosition='none' />
        </div>
      </div>
    </div>
  );
}

ContactPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
