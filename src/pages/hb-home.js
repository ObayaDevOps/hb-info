// Switch homepage to Humble Beeing layout — un-Chakra'd: semantic HTML + inline styles.
import SEO from '@/components/SEO';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion';
const Slider = dynamic(() => import('react-slick'), { ssr: false })
import PageLayout from '@/components/layouts/PageLayout';
import Marquee from 'react-fast-marquee';
import StyledCard from '@/components/StyledCard';
import HeroCarousel from '@/components/home/HeroCarousel';

// Logos for the small marquee under "Uganda's Finest Honey"
const trustedLogos = [
  { alt: 'Latitude 0 Hotel', src: 'https://cdn.sanity.io/images/wf5e366r/production/ddf580905739f82cb20bef3648f54eaaa7ef3056-198x180.png'},
  { alt: 'Le Gourmet Delicatessen', src: 'https://cdn.sanity.io/files/wf5e366r/production/fff846c85549f356e03908c96e86fe74cc50e1cc.svg' },
  { alt: 'Yujo Izakaya', src: 'https://cdn.sanity.io/images/wf5e366r/production/f2231cd129038eb65672eb11d3c54d7f003b38e9-236x214.png' },
  { alt: 'Karuna Yoga Studio', src: 'https://cdn.sanity.io/images/wf5e366r/production/69a883cd9c0228b6fa2bb347631a300c0eaf448f-384x150.png' },
  { alt: 'Coffee At Last', src: 'https://cdn.sanity.io/images/wf5e366r/production/4299c07e010cf4d76f512a24ee6faecf43694bdc-125x125.png' },
  { alt: '32 Degree East', src: 'https://cdn.sanity.io/images/wf5e366r/production/5f4529c5e5fbe869d6eb2b7f5c25a2c35595815a-299x168.jpg' },
  { alt: 'Farm to Table', src: 'https://cdn.sanity.io/images/wf5e366r/production/19f1d85a8b5634f1686c7d093158680d9dd5f222-225x225.jpg' },
  { alt: 'Afrotide Crafts', src: 'https://cdn.sanity.io/images/wf5e366r/production/f90c865b8ffdb1de3878efbd3cd71f03469657dd-225x225.jpg' },
  { alt: 'Tierra Tours', src: 'https://cdn.sanity.io/images/wf5e366r/production/c63cb736e2b83848d2ec2dec5bbb721e8f035217-2290x1969.webp' },
];

const carousel = [
  { name: 'Single-Origin Gourmet Raw Honey', href: 'https://shop.humble-beeing.com', external: true, image: 'https://cdn.sanity.io/images/wf5e366r/production/06a02c2552c748ec8e77986956481bd97bdce9f3-5184x3456.jpg', alt: 'Jar of single-origin raw Ugandan honey with pine and coffee blossom notes', description: 'Experience the unique blend of pine and coffee blossom in this exquisite honey.' },
  { name: 'Infused Gourmet Raw Honey', href: 'https://shop.humble-beeing.com', external: true, image: 'https://cdn.sanity.io/images/wf5e366r/production/5a0f907daefa5fb874629a1e49df9dc768c9a577-5184x3456.jpg', alt: 'Creamy infused raw honey with shea blossom notes, pure honey from Uganda', description: 'Delicate and creamy honey with notes of shea blossom, a true taste of nature.' },
  { name: 'Luxury Beeswax Candles', href: 'https://shop.humble-beeing.com', external: true, image: 'https://cdn.sanity.io/images/wf5e366r/production/b7984b21e4eca856f7f7563aa2af6a89be4b5402-5184x3456.jpg', alt: 'Hand-poured pure beeswax candles made in Kampala, Uganda', description: 'Sustainably sourced Beeswax. Naturally purifying. Designed to transform everyday moments into rituals of wellness.' },
  { name: 'Premium Gift Sets', href: 'https://shop.humble-beeing.com', external: true, image: 'https://cdn.sanity.io/images/wf5e366r/production/1d022d7ffe1a49451ded511330df3d8d69c5c21e-5184x3456.jpg', alt: 'Luxury Ugandan gift set with honey jars and beeswax candles in recycled paper packaging', description: 'The perfect way to explore our gourmet range: Orange Peel, Lemon, Rosemary, Vanilla Bean, and more. Packaged in recycled paper, handcrafted by local artisans' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

// Shared bits (Chakra-token equivalents, all values literal CSS)
const shadowXl = '0px 16px 24px rgba(24, 24, 27, 0.1), 0px 0px 1px rgba(24, 24, 27, 0.3)'
const hanken = 'var(--font-hanken)'

// Black pill button (hover inverts via .btn-dark)
const pillBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
  backgroundColor: '#09090b',
  color: '#f5cb81',
  border: '1px solid #09090b',
  borderRadius: '9999px',
  fontWeight: 700,
  fontFamily: hanken,
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
}

// Amber pill button used on dark photo sections (hover inverts via .btn-amber)
const pillBtnAmber = {
  ...pillBtn,
  backgroundColor: '#f5cb81',
  color: '#09090b',
  border: '1px solid #09090b',
}

// Full-bleed photo statement containers
const statementContainer = {
  position: 'relative',
  maxWidth: '90rem',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '95vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
}

const statementResponsive = {
  '--br': '0px',
  '--br-lg': '24px',
  '--sh': 'none',
  '--sh-lg': shadowXl,
  '--px': '48px',
  '--px-md': '80px',
  '--py': '64px',
  '--py-md': '80px',
  '--mt': '24px',
  '--mt-lg': '80px',
}

export default function HBHome() {
  const heroImages = [
    'https://cdn.sanity.io/images/wf5e366r/production/7bf19649189ce81bb0b684bfaffa856300fc1583-2268x4032.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/289a82281b2afc47c22bda041c9be198359c905a-5184x3456.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/745c75b930ef6de7de4178d0bff5f5fd956c9393-5184x3456.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/291f49cddd44907c1c209a4b77b446bf521d47b7-5184x3456.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/e6e3c7e35d213f7c070ee6d25c2364ee1eb1b954-5184x3456.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/3049c86f8b48da4c3f32c4673e5bd000217e3c4e-5184x3456.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/fe1376a20f4c8693c806a9308a0c2d5bdd66271a-5184x3456.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/536a0d144a6196619310c04ede39ee01395494cf-5184x3456.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/06a02c2552c748ec8e77986956481bd97bdce9f3-5184x3456.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/e19ff4b7f6b8a5b6342a833ef7ff61efa2efc905-5184x3456.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/b7984b21e4eca856f7f7563aa2af6a89be4b5402-5184x3456.jpg',
    'https://cdn.sanity.io/images/wf5e366r/production/1bdb425b08c28f34c4c48fc739d2dff3fd2584d4-4032x2268.jpg',
  ];

  const Arrow = ({ dir, className, style, onClick }) => {
    const Icon = dir === 'prev' ? ArrowLeft : ArrowRight
    return (
      <button
        aria-label={dir === 'prev' ? 'Previous' : 'Next'}
        onClick={onClick}
        className={`${className || ''} btn-dark ${dir === 'prev' ? 'rleft' : 'rright'}`}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          [dir === 'prev' ? '--left' : '--right']: '8px',
          [dir === 'prev' ? '--left-md' : '--right-md']: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '40px',
          borderRadius: '9999px',
          backgroundColor: '#09090b',
          color: '#f5cb81',
          border: '1px solid #09090b',
          zIndex: 2,
        }}
      >
        <Icon size={20} />
      </button>
    )
  }
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <Arrow dir="prev" />,
    nextArrow: <Arrow dir="next" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }
  const sliderSettingsMobile = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow dir="prev" />,
    nextArrow: <Arrow dir="next" />,
  }

  return (
    <div style={{ backgroundColor: '#f5cb81', color: '#000819', minHeight: '100vh', fontFamily: hanken }}>
      <SEO
        title="Pure Raw Honey from Uganda — Luxury Gifts & Beeswax Candles"
        description="Humble Beeing crafts pure raw Ugandan honey, infused honeys, beeswax candles, and luxury gift hampers in Kampala — lab-tested, traceable, delivered citywide."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Humble Beeing Products',
          itemListElement: carousel.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Product',
              name: c.name,
              description: c.description,
              image: c.image,
              url: c.href,
              brand: { '@type': 'Brand', name: 'Humble Beeing' },
            },
          })),
        }}
      />

      {/* Hero */}
      <HeroCarousel
        images={heroImages}
        marquee={(
          <>
            {[
              'Highest Quality Raw African Honey',
              'Traceable & Pesticide-free',
              'Single Origin & Small Batch',
              '100% Ugandan Owned',
              'Eco-Friendly & Recyclable Packaging',
              'Ethical & Sustainable Impact',
              'Direct from Small-holder Farmers',
            ].map((line, i) => (
              <p
                key={line}
                className="rt"
                style={{
                  fontFamily: hanken,
                  '--fs': '1.125rem',
                  '--lh': '1.75rem',
                  '--fs-md': '1.25rem',
                  '--lh-md': '1.875rem',
                  fontWeight: 600,
                  marginLeft: i > 0 ? '128px' : 0,
                }}
              >
                {line}
              </p>
            ))}
          </>
        )}
      >
        <motion.div
          {...fadeUp}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}
        >
          <motion.h1
            className="rt"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            style={{
              '--fs': '1.875rem',
              '--lh': '2.375rem',
              '--fs-md': '3.75rem',
              '--lh-md': '4.5rem',
              '--ls-md': '-0.025em',
              fontWeight: 600,
              fontFamily: hanken,
            }}
          >
            Uganda's Finest Honey
          </motion.h1>
          <motion.p
            className="rt rmaxw"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            style={{ '--maxw': '28rem', '--maxw-md': '42rem', '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', fontFamily: hanken }}
          >
            Pure, Gourmet Raw Honey From Uganda's Pristine Biodiverse Landscapes.
          </motion.p>
          <motion.p
            className="rt rmaxw"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            style={{ '--maxw': '28rem', '--maxw-md': '42rem', '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', fontFamily: hanken }}
          >
            Traceable from Hive to Jar with a Sustainable Impact.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px' }}
          >
            <Link href="https://shop.humble-beeing.com" className="btn-dark rpx" style={{ ...pillBtn, '--px': '20px', '--px-md': '28px' }}>
              Shop Now
            </Link>
            <Link href="/impact-and-sustainability" className="btn-dark rpx" style={{ ...pillBtn, '--px': '20px', '--px-md': '28px' }}>
              Explore Impact
            </Link>
          </motion.div>
        </motion.div>
      </HeroCarousel>

      {/* Product Slider (react-slick) — desktop */}
      <div
        className="rd rpx rpy rsh"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'black',
          minHeight: '100vh',
          '--sh': 'none',
          '--sh-lg': shadowXl,
          '--px': '48px',
          '--px-md': '80px',
          '--py': '0px',
          '--py-md': '64px',
          '--d': 'none',
          '--d-md': 'block',
        }}
      >
        <div style={{ padding: '8px', marginTop: '64px' }}>
          <motion.h2
            className="rt rmb"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            style={{ '--fs': '0.875rem', '--lh': '1.25rem', '--fs-lg': '1.25rem', '--lh-lg': '1.875rem', '--mb': '12px', '--mb-md': '0px', color: '#FFF2D7', fontWeight: 600, fontFamily: hanken }}
          >
            Explore Selections
          </motion.h2>
          <motion.h2
            className="rt rmb"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-lg': '1.875rem', '--lh-lg': '2.375rem', '--mb': '12px', '--mb-md': '16px', color: '#FFF2D7', fontWeight: 600, fontFamily: hanken }}
          >
            Our Product Range
          </motion.h2>
        </div>

        <motion.div className="slider-container rpb" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} style={{ '--pb': '32px', '--pb-md': '24px' }}>
          <Slider {...sliderSettings}>
            {carousel.map((c, index) => (
              <motion.div key={c.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 + (index * 0.1) }}>
                <StyledCard style={{ borderRadius: '1rem' }}>
                  <div>
                    <div
                      className="rp"
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', '--p': '24px', '--p-md': '32px' }}
                    >
                      <img
                        src={c.image}
                        alt={c.alt || c.name}
                        className="rw rh"
                        style={{ '--w': '200px', '--h': '200px', '--w-md': '100%', '--h-md': '100%', alignSelf: 'center', borderRadius: '0.75rem', objectFit: 'cover' }}
                      />
                      <p className="rt" style={{ fontWeight: 700, '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>{c.name}</p>
                      <p className="rt" style={{ fontWeight: 400, '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem' }}>{c.description}</p>
                      <Link
                        href={c.href}
                        target={c.external ? '_blank' : undefined}
                        rel={c.external ? 'noopener noreferrer' : undefined}
                        className="btn-dark rpx"
                        style={{ ...pillBtn, '--px': '20px', '--px-md': '28px' }}
                      >
                        Shop
                      </Link>
                    </div>
                  </div>
                </StyledCard>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Product Slider Mobile (react-slick) */}
      <div
        className="rd rpx rpy rbr rsh rmt"
        style={{
          position: 'relative',
          maxWidth: '90rem',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'black',
          '--br': '0px',
          '--br-lg': '24px',
          '--sh': 'none',
          '--sh-lg': shadowXl,
          '--px': '16px',
          '--px-md': '80px',
          '--py': '64px',
          '--mt': '24px',
          '--mt-lg': '128px',
          '--d': 'block',
          '--d-md': 'none',
        }}
      >
        <div style={{ padding: '16px' }}>
          <motion.h2
            className="rmb"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            style={{ fontSize: '1.25rem', lineHeight: '1.875rem', '--mb': '8px', '--mb-md': '0px', color: '#FFF2D7', fontWeight: 600, fontFamily: hanken }}
          >
            Explore Selections
          </motion.h2>
          <motion.h2
            className="rmb"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            style={{ fontSize: '1.875rem', lineHeight: '2.375rem', '--mb': '12px', '--mb-md': '16px', color: '#FFF2D7', fontWeight: 600, fontFamily: hanken }}
          >
            Our Product Range
          </motion.h2>
        </div>

        <motion.div className="slider-container rpb" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} style={{ '--pb': '32px', '--pb-md': '24px' }}>
          <Slider {...sliderSettingsMobile}>
            {carousel.map((c, index) => (
              <motion.div key={c.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 + (index * 0.1) }}>
                <StyledCard style={{ borderRadius: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', padding: '32px' }}>
                      <img
                        src={c.image}
                        alt={c.alt || c.name}
                        className="rw rh"
                        style={{ '--w': '300px', '--h': '300px', '--w-md': '350px', '--h-md': '350px', alignSelf: 'center', borderRadius: '0.75rem', objectFit: 'cover' }}
                      />
                      <p className="rt" style={{ fontWeight: 700, '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}>{c.name}</p>
                      <p className="rt" style={{ fontWeight: 400, '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem' }}>{c.description}</p>
                      <Link
                        href={c.href}
                        target={c.external ? '_blank' : undefined}
                        rel={c.external ? 'noopener noreferrer' : undefined}
                        className="btn-dark rpx"
                        style={{ ...pillBtn, '--px': '20px', '--px-md': '28px' }}
                      >
                        Shop
                      </Link>
                    </div>
                  </div>
                </StyledCard>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Trusted Supplier marquee section */}
      <div
        className="rmt rbr rsh rpx rpy"
        style={{
          position: 'relative',
          maxWidth: '90rem',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#FFF2D7',
          '--mt': '0px',
          '--mt-md': '80px',
          '--br': '0px',
          '--br-lg': '32px',
          '--sh': 'none',
          '--sh-lg': shadowXl,
          '--px': '48px',
          '--px-md': '80px',
          '--py': '40px',
          '--py-md': '80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}>
          <p
            className="rt rmt rmb"
            style={{
              '--fs': '1.125rem',
              '--lh': '1.75rem',
              '--fs-lg': '1.5rem',
              '--lh-lg': '2rem',
              '--mb': '12px',
              '--mb-md': '16px',
              '--mt': '12px',
              '--mt-md': '-32px',
              fontWeight: 600,
              color: '#52525b',
              textAlign: 'center',
            }}
          >
            Trusted Supplier To
          </p>
          <div style={{ maxWidth: '100%' }}>
            <Marquee gradient={false} speed={40} pauseOnHover>
              {trustedLogos.map((item, idx) => (
                <div key={idx} style={{ display: 'inline-block' }}>
                  <div
                    title={item.alt}
                    className="rpx rpy rmr"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#FFF2D7',
                      borderRadius: '9999px',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      '--px': '12px',
                      '--px-md': '16px',
                      '--py': '4px',
                      '--py-md': '8px',
                      '--mr': '12px',
                      '--mr-md': '24px',
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="rh"
                      style={{ '--h': '64px', '--h-md': '86px', width: 'auto', objectFit: 'contain', opacity: 0.9, filter: 'grayscale(100%)' }}
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* Honey Statement */}
      <div className="rpy" style={{ '--py': '48px', '--py-md': '64px' }}>
        <div
          className="rbr rsh rpx rpy rmt"
          style={{
            ...statementContainer,
            ...statementResponsive,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('https://cdn.sanity.io/images/wf5e366r/production/289a82281b2afc47c22bda041c9be198359c905a-5184x3456.jpg')",
          }}
        >
          <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <motion.h3
              className="rt"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.5rem', '--lh-md': '2rem', fontWeight: 600, fontFamily: hanken }}
            >
              Gourmet Raw Ugandan Honey
            </motion.h3>
            {['Traceable.', 'Pesticide Free.', 'Single-Origin.', 'Ethically Sourced.'].map((line, i) => (
              <motion.h2
                key={line}
                className="rt"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i < 3 ? 0.15 + i * 0.05 : 0.25 }}
                style={{ '--fs': '1.875rem', '--lh': '2.375rem', '--fs-md': '4.5rem', '--lh-md': '5.75rem', '--ls-md': '-0.025em', fontWeight: 600, fontFamily: hanken }}
              >
                {line}
              </motion.h2>
            ))}
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '16px' }}>
              <Link
                href="/our-process"
                className="btn-amber rpx rt"
                style={{ ...pillBtnAmber, '--px': '20px', '--px-md': '28px', '--fs': '0.875rem', '--lh': '1.25rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem' }}
              >
                Find Out More About Our Honey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Impact Statement */}
      <div className="rpy" style={{ '--py': '48px', '--py-md': '64px' }}>
        <div
          className="rbr rsh rpx rpy rmt"
          style={{
            ...statementContainer,
            ...statementResponsive,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('https://cdn.sanity.io/images/wf5e366r/production/e21c432bb95edcad8c48491cf4f76ce70f31a0a0-1154x1200.png')",
          }}
        >
          <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <motion.h3
              className="rt"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              style={{ '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem', fontWeight: 600, fontFamily: hanken }}
            >
              Our Mission & Vision
            </motion.h3>
            {['2,000 farmers.', '400 tons of Organic Honey.', 'Certified luxury.'].map((line, i) => (
              <motion.h2
                key={line}
                className="rt"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 + i * 0.05 }}
                style={{ '--fs': '1.25rem', '--lh': '1.875rem', '--fs-md': '1.875rem', '--lh-md': '2.375rem', fontWeight: 600, fontFamily: hanken }}
              >
                {line}
              </motion.h2>
            ))}
            <motion.p
              className="rt"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              style={{ maxWidth: '42rem', paddingTop: '24px', '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', fontFamily: hanken }}
            >
              Our mission is to improve the livelihood of 2000 farmers by providing knowledge, fair market-access and building inclusive, resilient, and sustainable beehive product value chains.
              We aim to become Africa's largest producer and exporter to EU of certified organic honey and beeswax. While promoting the planting and conservation of the native Shea Tree.
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '16px' }}>
              <Link
                href="/impact-and-sustainability"
                className="btn-amber rpx rt"
                style={{ ...pillBtnAmber, '--px': '20px', '--px-md': '28px', '--fs': '0.875rem', '--lh': '1.25rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem' }}
              >
                Explore our Impact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Family Statement */}
      <div className="rpy" style={{ '--py': '48px', '--py-md': '64px' }}>
        <div
          className="rbr rsh rpx rpy rmt"
          style={{
            ...statementContainer,
            ...statementResponsive,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('https://cdn.sanity.io/images/wf5e366r/production/351d48dac96af618c5068833c2ff4ddf7046dcfe-1200x1199.png')",
          }}
        >
          <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <motion.h3
              className="rt"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              style={{ '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem', fontWeight: 600, fontFamily: hanken }}
            >
              A Family Business
            </motion.h3>
            {['Built By Ugandans.', 'For The World.'].map((line, i) => (
              <motion.h2
                key={line}
                className="rt"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 + i * 0.05 }}
                style={{ '--fs': '1.25rem', '--lh': '1.875rem', '--fs-md': '1.875rem', '--lh-md': '2.375rem', fontWeight: 600, fontFamily: hanken }}
              >
                {line}
              </motion.h2>
            ))}
            <motion.p
              className="rt"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              style={{ maxWidth: '42rem', paddingTop: '24px', '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', fontFamily: hanken }}
            >
              Humble Beeing is a 100% Ugandan-Family Owned company, led by Obaya who quit his job in London working as a Trading Systems Software Developer at an Investment Bank
              to move back home to Uganda (where he grew up) to start a beekeeping social enterprise, to (hopefully) give his life some more meaning and change the world for the better.

              Now the aim is to transform the family village in Yumbe into an economic hub and allow everyone the opportunity to benefit from domestic and international markets.
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '16px' }}>
              <Link
                href="/our-story"
                className="btn-amber rpx rt"
                style={{ ...pillBtnAmber, '--px': '20px', '--px-md': '28px', '--fs': '0.875rem', '--lh': '1.25rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem' }}
              >
                Read our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Our Guarantee */}
      <div
        className="rmt rmb rpy rpx"
        style={{
          width: '100%',
          minHeight: '85vh',
          '--mt': '64px',
          '--mt-lg': '96px',
          '--mb': '24px',
          '--mb-lg': '64px',
          '--py': '48px',
          '--py-md': '80px',
          '--px': '24px',
          '--px-md': '48px',
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.6)), url('https://cdn.sanity.io/images/wf5e366r/production/9484a86c3200f89d7c0558d1bd1238cc28de7b01-3000x2000.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="rpx"
          style={{ position: 'relative', maxWidth: '90rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', color: 'white', '--px': '16px', '--px-md': '24px', '--px-lg': '32px' }}
        >
          <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <motion.h2
              className="rt"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', paddingTop: '24px', textAlign: 'center', fontWeight: 600, fontFamily: hanken }}
            >
              Our Guarantee
            </motion.h2>
            <motion.h1
              className="rt"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              style={{ '--fs': '1.875rem', '--lh': '2.375rem', '--fs-md': '3.75rem', '--lh-md': '4.5rem', '--ls-md': '-0.025em', maxWidth: '56rem', textAlign: 'center', fontWeight: 600, fontFamily: hanken }}
            >
              Only the very best Grade-A honeycomb from pesticide-free areas makes it into our jars and our farmers are given a fair price
            </motion.h1>
            <motion.h2
              className="rt"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', paddingTop: '24px', textAlign: 'center', fontWeight: 600, fontFamily: hanken }}
            >
              - Humble Beeing Promise, 2023
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* Recipes */}
      <div className="rpy" style={{ '--py': '48px', '--py-md': '64px' }}>
        <div
          className="rbr rsh rpx rpy rmt"
          style={{
            ...statementContainer,
            ...statementResponsive,
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.75)), url('https://cdn.sanity.io/images/wf5e366r/production/4dfb5556eba5a09ad920ebc2c6a70b2a083c2daa-1200x911.png')",
          }}
        >
          <motion.div {...fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <motion.h3
              className="rt"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              style={{ '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem', fontWeight: 600, fontFamily: hanken }}
            >
              For the Foodies
            </motion.h3>
            {['A Gourmet World Awaits!', 'Hand-Picked Infusion Pairings'].map((line) => (
              <motion.h2
                key={line}
                className="rt"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                style={{ '--fs': '1.25rem', '--lh': '1.875rem', '--fs-md': '1.875rem', '--lh-md': '2.375rem', fontWeight: 600, fontFamily: hanken }}
              >
                {line}
              </motion.h2>
            ))}
            <motion.p
              className="rt"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              style={{ maxWidth: '42rem', paddingTop: '24px', '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', fontFamily: hanken }}
            >
              Unleash your inner chef! Our exquisite honeys are not just for your tea; they are a secret ingredient waiting to transform your culinary creations. From delectable glazes to gourmet desserts, explore a world of flavors.
              Have a look at our recipes for inspiration!
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '16px' }}>
              <Link
                href="/blog"
                className="btn-amber rpx rt"
                style={{ ...pillBtnAmber, '--px': '20px', '--px-md': '28px', '--fs': '0.875rem', '--lh': '1.25rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem' }}
              >
                See more Recipes
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials and Social Proof */}
      <div
        className="rbr rsh rpx rpt rpb rmb"
        style={{
          position: 'relative',
          maxWidth: '90rem',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#FFF2D7',
          '--br': '0px',
          '--br-lg': '32px',
          '--sh': 'none',
          '--sh-lg': shadowXl,
          '--px': '48px',
          '--px-md': '80px',
          '--pt': '24px',
          '--pt-lg': '48px',
          '--pb': '24px',
          '--pb-lg': '80px',
          '--mb': '48px',
          '--mb-lg': '96px',
        }}
      >
        <motion.h2
          className="rt rmb"
          {...fadeUp}
          style={{ '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem', '--mb': '16px', '--mb-md': '0px', fontWeight: 600, fontFamily: hanken }}
        >
          Testimonials
        </motion.h2>
        <motion.h2
          className="rt rmb"
          {...fadeUp}
          style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.5rem', '--lh-md': '2rem', '--mb': '16px', '--mb-md': '32px', fontWeight: 600, fontFamily: hanken }}
        >
          Don't just take our word for it!
        </motion.h2>
        <div className="rgtc" style={{ display: 'grid', '--gtc': '1fr', '--gtc-md': 'repeat(3, 1fr)' }}>
          {[
            { q: '“The Garlic and chilli infused honey flavors go really well with fried chicken wings🥰❤️ 100% recommend!”', a: 'Sheillah R. - Food Reviewer' },
            { q: '“Without a doubt, this is the best honey in Uganda. I’ve been in the country for years, and this is by far the best souvenir I’ve found here. Everyone I’ve gifted it to has loved it! My personal favorite is the rosemary-infused honey. My dad, a cheese lover, enjoys it drizzled over cheese, especially the garlic-infused variety. My mom uses them in her Asian cooking, and it elevates the flavors like nothing else!”', a: 'Minori - Japan' },
            { q: '“The best honey I’ve had! Love their raw honey, so luxurious and delicious and I’m not even normally the biggest fan of honey. Definitely the best honey you can find in Uganda, my family loved them as gifts.”', a: 'Lina A.' },
          ].map((t, idx) => (
            <motion.div key={idx} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 + (idx * 0.1) }} style={{ display: 'flex' }}>
              <StyledCard style={{ borderRadius: '1rem', paddingTop: '16px', paddingBottom: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', padding: '24px' }}>
                  <p className="rt" style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem' }}> {t.q} </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      minHeight: '20px',
                      backgroundColor: '#09090b',
                      color: '#f5cb81',
                      borderRadius: '9999px',
                      padding: '4px 12px',
                      fontSize: '0.75rem',
                      lineHeight: '1rem',
                      fontWeight: 500,
                    }}
                  >
                    {t.a}
                  </span>
                </div>
              </StyledCard>
            </motion.div>
          ))}
        </div>
        <motion.div className="rpt" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.6 }} style={{ textAlign: 'center', '--pt': '32px', '--pt-md': '48px' }}>
          <a
            href="https://g.page/r/CXO3cDknQeegEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark rpx"
            style={{ ...pillBtn, '--px': '20px', '--px-md': '28px' }}
          >
            Leave Us a Review!
          </a>
        </motion.div>
      </div>

      {/* Quality Assured */}
      <div className="rpy" style={{ '--py': '48px', '--py-md': '64px' }}>
        <div
          className="rbr rsh rpx rpy rmt"
          style={{
            ...statementContainer,
            ...statementResponsive,
            alignItems: 'stretch',
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.85)), url('https://cdn.sanity.io/images/wf5e366r/production/bd61c8b1a8ed936847ac22805b9201884f74c35d-905x1200.png')",
          }}
        >
          <motion.div {...fadeUp} style={{ width: '100%' }}>
            <motion.div
              {...fadeUp}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', flex: 1, maxWidth: '56rem', width: '100%' }}
            >
              <motion.h3
                className="rt"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 }}
                style={{ '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem', fontWeight: 600, fontFamily: hanken }}
              >
                Quality Assured
              </motion.h3>
              <motion.h2
                className="rt"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.15 }}
                style={{ '--fs': '1.25rem', '--lh': '1.875rem', '--fs-md': '2.25rem', '--lh-md': '2.75rem', '--ls-md': '-0.025em', fontWeight: 600, fontFamily: hanken }}
              >
                Certified. Traceable. Trusted.
              </motion.h2>
              <motion.p
                className="rt"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.25 }}
                style={{ maxWidth: '100%', paddingTop: '24px', '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', fontFamily: hanken }}
              >
                Proud partners and certified producers meeting the highest standards for Ugandan honey and beeswax. Every jar carries lab-grade moisture readings, batch provenance, and Uganda National Bureau of Standards compliance.
              </motion.p>
              <motion.p
                className="rt"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.3 }}
                style={{ maxWidth: '100%', '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', color: '#f4f4f5', fontFamily: hanken }}
              >
                Each harvest is tested in independent food laboratories for moisture, acidity, antibiotic residue, and HMF levels—and we consistently exceed European export benchmarks.
              </motion.p>
              <motion.p
                className="rt"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.33 }}
                style={{ maxWidth: '100%', '--fs': '1rem', '--lh': '1.5rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', color: '#f4f4f5', fontFamily: hanken }}
              >
                We invest in rigorous third-party audits so chefs, retailers, and families can trust that what is on the label is exactly what is inside the jar.
              </motion.p>
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }} style={{ paddingTop: '32px' }}>
                <Link
                  href="/lab-tests"
                  className="btn-amber rpx rt"
                  style={{ ...pillBtnAmber, '--px': '20px', '--px-md': '28px', '--fs': '0.875rem', '--lh': '1.25rem', '--fs-md': '1.125rem', '--lh-md': '1.75rem' }}
                >
                  View Lab Test Results
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.35 }}
              className="rai rminw"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                '--ai': 'flex-start',
                '--ai-lg': 'flex-end',
                '--minw': 'auto',
                '--minw-lg': '320px',
                width: '100%',
              }}
            >
              <motion.div
                className="rjc"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', '--jc': 'flex-start', '--jc-lg': 'flex-end' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <a href="https://tunadobees.org/" target="_blank" rel="noopener noreferrer" className="hover-fade">
                    <img
                      src="https://cdn.sanity.io/images/wf5e366r/production/5d7e7c96941067625b03a2237d453997ee15ddde-200x241.png"
                      alt="TUNADO membership badge — The Uganda National Apiculture Development Organisation"
                      className="rmaxw"
                      style={{ '--maxw': '120px', '--maxw-md': '160px', backgroundColor: 'white', borderRadius: '0.5rem', padding: '16px' }}
                    />
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <a
                    href="https://unbs.go.ug/content.php?src=product-certification&pg=content"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-fade"
                  >
                    <img
                      src="https://cdn.sanity.io/images/wf5e366r/production/8d19ad6abb9cf3d307255c19a5420cc38f446d75-226x278.png"
                      alt="Uganda National Bureau of Standards (UNBS) certification mark for honey quality"
                      className="rmaxw"
                      style={{ '--maxw': '120px', '--maxw-md': '160px', backgroundColor: 'white', borderRadius: '0.5rem', padding: '16px' }}
                    />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Spacer above footer with brand background */}
      <div className="rh" style={{ backgroundColor: '#f5cb81', '--h': '48px', '--h-lg': '96px' }} />
    </div>
  );
}

HBHome.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>
    {page}
  </PageLayout>
)
