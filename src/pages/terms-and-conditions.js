import { useState } from 'react';
import Head from "next/head";
import { ChevronDown, ChevronUp } from 'lucide-react';
import client from '../../sanity/lib/client';
import { PortableText } from '@portabletext/react';
import ContactModal from '../components/ContactModal';

import PageLayout from '@/components/layouts/PageLayout';
import VerticalStepperNav from '../components/VerticalStepperNav';

const poppins = 'Poppins, var(--font-poppins), sans-serif'

// GROQ query to fetch terms page data
export async function getStaticProps() {
  const query = `*[_type == "termsPage"][0] {
    title,
    subtitle,
    metaDescription,
    "backgroundImageUrl": backgroundImage.asset->url,
    sections[] {
      id,
      title,
      content[],
      accordionItems[] {
        title,
        text[]
      },
      postContent[]
    }
  }`;

  const pageData = await client.fetch(query);

  return {
    props: {
      pageData,
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
}

// Define fallback sections data if Sanity data is not available
const fallbackSections = [
  { id: 'termsAndConditions1', title: 'Terms and Conditions 1' },
  { id: 'termsAndConditions2', title: 'Terms and Conditions 2' },
  { id: 'termsAndConditions3', title: 'Terms and Conditions 3' },
  { id: 'termsAndConditions4', title: 'Terms and Conditions 4' },
  { id: 'termsAndConditions5', title: 'Terms and Conditions 5' },
  { id: 'termsAndConditions6', title: 'Terms and Conditions 6' },
  { id: 'termsAndConditions7', title: 'Terms and Conditions 7' },
];

// Portable Text components for rendering rich text content
const BlockTextComponents = {
  block: {
    normal: ({ children }) => <p style={{ color: 'white', lineHeight: 1.625, marginBottom: '16px' }}>{children}</p>,
    h3: ({ children }) => (
      <h3 style={{ fontSize: '1rem', lineHeight: '1.5rem', fontWeight: 600, color: 'white', marginTop: '24px', marginBottom: '16px' }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 style={{ fontSize: '0.875rem', lineHeight: '1.25rem', fontWeight: 600, color: 'white', marginTop: '16px', marginBottom: '12px' }}>
        {children}
      </h4>
    ),
  },
  list: {
    bullet: ({ children }) => <ul style={{ listStyleType: 'square', color: 'white', marginBottom: '16px', paddingLeft: '24px' }}>{children}</ul>,
    number: ({ children }) => <ol style={{ listStyleType: 'decimal', color: 'white', marginBottom: '16px', paddingLeft: '24px' }}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li style={{ color: 'white', lineHeight: 1.625, marginBottom: '8px' }}>{children}</li>,
    number: ({ children }) => <li style={{ color: 'white', lineHeight: 1.625, marginBottom: '8px' }}>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong style={{ fontWeight: 700 }}>{children}</strong>,
    em: ({ children }) => <em style={{ fontStyle: 'italic' }}>{children}</em>,
  },
};

const AccordionComponent = ({ items = [] }) => {
  const [expanded, setExpanded] = useState(() => new Set());

  const handleToggle = (title) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  return (
    <div>
      {items.map((item, index) => {
        const isOpen = expanded.has(item.title);
        return (
          <div
            key={index}
            style={{
              margin: '0.75rem 0',
              borderRadius: '0.25rem',
              border: '1px solid #1A2130',
              backgroundImage: 'linear-gradient(to right, #000819, #1A2130)',
              boxShadow: '0px 3px 3px 0px rgba(0,8,25,0.4)',
            }}
          >
            <button
              onClick={() => handleToggle(item.title)}
              aria-expanded={isOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                textAlign: 'left',
                padding: '0.5rem',
                color: 'white',
              }}
            >
              {isOpen ? <ChevronUp /> : <ChevronDown />}
              <span style={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: poppins,
                    fontSize: '1rem',
                    lineHeight: '1.875rem',
                    fontWeight: 500,
                    color: 'white',
                  }}
                >
                  {item.title}
                </span>
              </span>
            </button>

            {isOpen && (
              <div>
                <hr style={{ borderTop: '1px solid #1A2130', margin: '0 1rem' }} />
                <div className="rp" style={{ '--p': '0.5rem', '--p-lg': '1rem' }}>
                  {Array.isArray(item.text) ? (
                    <div style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                      <PortableText value={item.text} components={BlockTextComponents} />
                    </div>
                  ) : (
                    <p
                      style={{
                        fontFamily: poppins,
                        fontSize: '1rem',
                        lineHeight: '1.875rem',
                        fontWeight: 400,
                        color: 'white',
                        margin: '0 1.5rem',
                      }}
                    >
                      {item.text}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default function TermsPage({ pageData }) {
  // Use pageData from Sanity or fallback to default values
  const title = pageData?.title || 'Our Terms and Conditions';
  const subtitle = pageData?.subtitle || 'Our Terms';
  const metaDescription = pageData?.metaDescription || 'Our Full Terms and Conditions';
  const sections = pageData?.sections || fallbackSections;

  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  // Use Sanity image URL or fallback to default
  const backgroundImageUrl = pageData?.backgroundImageUrl || 'https://cdn.sanity.io/files/wf5e366r/production/a85b19a75d625e4ccd0c5c469dc046888df5f017.svg';

  const handleLinkClick = (id) => {
    setActiveSection(id);
    const mainContent = document.getElementById('main-content-area');
    const element = document.getElementById(id);

    if (mainContent && element) {
      const offsetTop = element.offsetTop;
      const scrollMarginTop = parseInt(window.getComputedStyle(element).scrollMarginTop, 10) || 0;
      mainContent.scrollTo({
        top: offsetTop - scrollMarginTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="rh rbgi"
      style={{
        minHeight: '100vh',
        '--h': 'auto',
        '--h-lg': '100vh',
        display: 'flex',
        flexDirection: 'column',
        '--bgi': 'none',
        '--bgi-lg': `url('${backgroundImageUrl}')`,
        backgroundColor: '#000819',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}
    >
      {/* Overlay for readability */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.64), #000819)',
          zIndex: 1,
        }}
      />

      <Head>
        <title>{title} | Ashton & Carrington</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.sanity.io/images/wf5e366r/production/4a9d5b493b1b3fd3057b1b880bf136491f396a57-1019x593.png" />
      </Head>

      {/* Navbar provided by PageLayout */}

      <div
        className="rpx rov"
        style={{
          '--px': '1rem',
          '--px-lg': '4rem',
          paddingTop: '2rem',
          paddingBottom: '2rem',
          position: 'relative',
          zIndex: 2,
          flex: 1,
          '--ov': 'visible',
          '--ov-lg': 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>
          <p
            className="rt"
            style={{
              fontFamily: poppins,
              '--fs': '1.5rem',
              '--fs-lg': '2.25rem',
              '--lh': '3rem',
              fontWeight: 500,
              letterSpacing: '0.72px',
              color: 'white',
              padding: '8px',
            }}
          >
            {title}
          </p>
        </div>

        {/* Flex row fills remaining space in container */}
        <div className="rfd" style={{ display: 'flex', '--fd': 'column', '--fd-md': 'row', gap: '40px', flex: 1, overflow: 'hidden' }}>
          {/* Left Sidebar */}
          <nav
            className="rd rw"
            style={{
              '--w': '100%',
              '--w-md': '20.5rem',
              '--d': 'none',
              '--d-lg': 'flex',
              position: 'sticky',
              top: '2rem',
              alignSelf: 'flex-start',
              padding: '16px',
              borderRadius: '0.375rem',
              fontFamily: poppins,
              maxHeight: 'calc(100vh - 10rem)',
              overflowY: 'auto',
            }}
          >
            <VerticalStepperNav
              sections={sections}
              activeSection={activeSection}
              onLinkClick={handleLinkClick}
            />
          </nav>

          {/* Right Content Area: Scrolls internally */}
          <main
            id="main-content-area"
            className="no-scrollbar rp"
            style={{
              flex: 1,
              borderRadius: '0.375rem',
              fontFamily: poppins,
              color: 'white',
              height: '100%',
              overflowY: 'auto',
              scrollBehavior: 'smooth',
              '--p': '8px',
              '--p-lg': '24px',
              paddingTop: '2.5rem',
            }}
          >
            <p
              className="rt"
              style={{
                fontFamily: poppins,
                '--fs': '1.25rem',
                '--fs-lg': '1.75rem',
                '--lh': 'normal',
                fontWeight: 500,
                letterSpacing: '2.24px',
                color: 'white',
                textTransform: 'uppercase',
                marginBottom: '3.75rem',
              }}
            >
              {subtitle}
            </p>

            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                style={{ scrollMarginTop: '8rem', marginBottom: '3.75rem' }}
              >
                <h2
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: '1.875rem',
                    fontWeight: 600,
                    marginBottom: '16px',
                    color: 'white',
                    fontFamily: poppins,
                  }}
                >
                  {section.title}
                </h2>

                {section.content && section.content.length > 0 && (
                  <div style={{ marginTop: '16px' }}>
                    <PortableText value={section.content} components={BlockTextComponents} />
                  </div>
                )}

                {section.accordionItems && section.accordionItems.length > 0 && (
                  <AccordionComponent items={section.accordionItems} />
                )}

                {section.postContent && section.postContent.length > 0 && (
                  <div style={{ marginTop: '24px' }}>
                    <PortableText value={section.postContent} components={BlockTextComponents} />
                  </div>
                )}
              </div>
            ))}

            <div style={{ marginBottom: '1.5rem', marginRight: '2rem' }}>
              <ContactModal buttonText='Speak to an Expert' inNav={false} />
            </div>
          </main>
        </div>
      </div>

      {/* Footer provided by PageLayout */}
    </div>
  );
}

TermsPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true, bg: '#000819' }}>
    {page}
  </PageLayout>
)
