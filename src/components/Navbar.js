import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
import MobileDrawer from './MobileDrawer'
import {
  Home as HomeIcon,
  BookOpen as BookOpenIcon,
  ChevronDown as ChevronDownIcon,
  ShoppingBag as ShoppingBagIcon,
  Package as PackageIcon,
  Phone as PhoneIcon,
  Route as RouteIcon,
  ArrowRight as ArrowRightIcon,
  MapPin as MapPinIcon,
} from 'lucide-react'
import { PRODUCT_CATEGORIES, getProductsByCategory, formatUGX } from '@/lib/products'

const shadowMd = '0px 4px 8px rgba(24, 24, 27, 0.1), 0px 0px 1px rgba(24, 24, 27, 0.3)'

const MENU_CATEGORIES = PRODUCT_CATEGORIES

// Generic hover dropdown for the desktop floating pill: trigger link + fixed
// panel. The panel is portaled to the app root: the nav pill's backdrop-filter
// makes it the containing block for fixed descendants, which would misplace/clip
// a fixed panel rendered in place (same reason MobileDrawer portals its overlay).
function NavDropdown({ item, linkStyle, labelStyle, renderBg, ariaLabel, panelStyle = {}, children }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const closeTimer = useRef(null)
  const wrapperRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => setMounted(true), [])

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = null
  }
  const openMenu = () => {
    cancelClose()
    setOpen(true)
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  // Close on Escape, on route change, and on pointer-down outside the trigger
  // and panel (touch devices have no mouseleave); clean up the timer on unmount
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (e) => {
      if (wrapperRef.current?.contains(e.target) || panelRef.current?.contains(e.target)) return
      setOpen(false)
    }
    const onRoute = () => setOpen(false)
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    router.events.on('routeChangeStart', onRoute)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
      router.events.off('routeChangeStart', onRoute)
      cancelClose()
    }
  }, [router.events])

  const panel = (
      <div
        role="menu"
        aria-label={ariaLabel}
        ref={panelRef}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
        onFocus={openMenu}
        onBlur={scheduleClose}
        style={{
          position: 'fixed',
          zIndex: 1040,
          top: '104px',
          left: '50%',
          transform: open ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
          opacity: open ? 1 : 0,
          // visibility is deliberately not transitioned: a transitioned visibility
          // change can get stuck at computed "visible" (e.g. after bfcache/back
          // navigation), leaving a closed panel blocking the page.
          visibility: open ? 'visible' : 'hidden',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 180ms ease, transform 180ms ease',
          backgroundColor: '#FFF2D7',
          border: '2px solid #09090b',
          borderRadius: '1.5rem',
          boxShadow: shadowMd,
          padding: '32px',
          ...panelStyle,
        }}
      >
        {children}
      </div>
  )

  return (
    <div ref={wrapperRef} onMouseEnter={openMenu} onMouseLeave={scheduleClose} onFocus={openMenu} onBlur={scheduleClose}>
      {/* Deliberately a button, not a link: hovering users mis-clicked the old
          trigger link and navigated away. The pages are reachable from links
          inside the panel. Click/Enter only ever opens (hover/focus already
          opened it for mouse users — a toggle here would instantly re-close);
          closing is outside-tap, mouse-leave, Escape, or navigation. */}
      <button
        type="button"
        onClick={openMenu}
        className="navlink rpx"
        aria-haspopup="true"
        aria-expanded={open}
        style={{ ...linkStyle, border: 'none' }}
      >
        <span className="rt" style={{ ...labelStyle, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          {item.label}
          <ChevronDownIcon
            size={16}
            aria-hidden
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }}
          />
        </span>
        {renderBg(item)}
      </button>
      {mounted ? createPortal(panel, document.getElementById('site-root') || document.body) : null}
    </div>
  )
}

function ProductsMegaMenu({ item, linkStyle, labelStyle, renderBg }) {
  const [activeCategory, setActiveCategory] = useState('raw')

  const activeMeta = MENU_CATEGORIES.find((c) => c.key === activeCategory) || MENU_CATEGORIES[0]
  const activeProducts = getProductsByCategory(activeMeta.key)

  return (
    <NavDropdown
      item={item}
      linkStyle={linkStyle}
      labelStyle={labelStyle}
      renderBg={renderBg}
      ariaLabel="Products"
      panelStyle={{
        width: 'min(64rem, calc(100vw - 48px))',
        display: 'grid',
        gridTemplateColumns: '240px 1fr',
        gap: '32px',
      }}
    >
        {/* Left column: category links + blurb */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {MENU_CATEGORIES.map((category) => {
              const isActive = category.key === activeMeta.key
              return (
                <a
                  key={category.key}
                  href={`/products#${category.key}`}
                  role="menuitem"
                  onMouseEnter={() => setActiveCategory(category.key)}
                  onFocus={() => setActiveCategory(category.key)}
                  style={{
                    fontFamily: 'var(--font-hanken)',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    lineHeight: '1.75rem',
                    color: '#09090b',
                    padding: '8px 12px',
                    borderRadius: '0.75rem',
                    backgroundColor: isActive ? 'rgba(9, 9, 11, 0.08)' : 'transparent',
                    transition: 'background-color 150ms ease',
                  }}
                >
                  {category.navLabel}
                </a>
              )
            })}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '0 12px' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: '1.375rem', color: 'rgba(9, 9, 11, 0.75)' }}>
              {activeMeta.blurb}
            </p>
            <a
              href="/products"
              role="menuitem"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 700,
                fontFamily: 'var(--font-hanken)',
                color: '#09090b',
              }}
            >
              View all products <ArrowRightIcon size={16} />
            </a>
            <a
              href="/wholesale-and-partnerships"
              role="menuitem"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 700,
                fontFamily: 'var(--font-hanken)',
                color: '#09090b',
              }}
            >
              Wholesale &amp; partnerships <ArrowRightIcon size={16} />
            </a>
          </div>
        </div>

        {/* Right area: product cards for the active category */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(activeProducts.length, 3)}, 1fr)`,
            gap: '16px',
            alignContent: 'start',
          }}
        >
          {activeProducts.map((product) => (
            <a
              key={product.slug}
              href={`/products/${product.slug}`}
              role="menuitem"
              className="hover-op9"
              style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#09090b' }}
            >
              <span style={{ position: 'relative', display: 'block' }}>
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  style={{
                    width: '100%',
                    aspectRatio: activeProducts.length > 3 ? '5 / 3' : '4 / 3',
                    objectFit: 'cover',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(9, 9, 11, 0.15)',
                    display: 'block',
                  }}
                />
                {product.bestSeller && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      padding: '2px 10px',
                      borderRadius: '9999px',
                      backgroundColor: '#f5cb81',
                      color: '#09090b',
                      fontSize: '0.6875rem',
                      lineHeight: '1rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-poppins)',
                    }}
                  >
                    Best Seller
                  </span>
                )}
              </span>
              <span style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, lineHeight: '1.25rem' }}>
                {product.shortName}
              </span>
              <span style={{ fontSize: '0.875rem', color: 'rgba(9, 9, 11, 0.7)' }}>
                {formatUGX(product.price)} · {product.size}
              </span>
            </a>
          ))}
        </div>
    </NavDropdown>
  )
}

// Pages shown in the About dropdown
const ABOUT_LINKS = [
  {
    label: 'Our Story',
    href: '/our-story',
    image: '/images/products/founder-obaya-apiary.jpg',
    imageAlt: 'Founder Obaya inspecting a honeycomb frame at Lwamata apiary',
    blurb: 'Three generations of beekeeping in Yumbe, West Nile, and a mission to give Ugandan honey the market it deserves.',
  },
  {
    label: 'Our Process',
    href: '/our-process',
    image: '/images/our-process/beekeeper-field.jpg',
    imageAlt: 'Beekeeper harvesting honeycomb in the field in Uganda',
    blurb: 'From hive to jar: Grade A comb, cold-pressed below 40°C, lab-tested and traceable by harvest number.',
  },
  {
    label: 'Impact',
    href: '/impact-and-sustainability',
    image: 'https://cdn.sanity.io/images/wf5e366r/production/745c75b930ef6de7de4178d0bff5f5fd956c9393-5184x3456.jpg',
    imageAlt: 'Smallholder beekeeping community supported by Humble Beeing in West Nile',
    blurb: 'Farmers paid 30% above market rates, regenerative apiaries, and trade (not aid) across West Nile.',
  },
  {
    label: 'Blog',
    href: '/blog',
    image: 'https://cdn.sanity.io/images/wf5e366r/production/b7984b21e4eca856f7f7563aa2af6a89be4b5402-5184x3456.jpg',
    imageAlt: 'Jars of Humble Beeing honey from the Humble Beeing blog',
    blurb: 'Stories from the apiaries, honey guides, and news from the Humble Beeing team.',
  },
]

function AboutMenu({ item, linkStyle, labelStyle, renderBg }) {
  return (
    <NavDropdown
      item={item}
      linkStyle={linkStyle}
      labelStyle={labelStyle}
      renderBg={renderBg}
      ariaLabel="About"
      panelStyle={{
        width: 'min(64rem, calc(100vw - 48px))',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
      }}
    >
      {ABOUT_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          role="menuitem"
          className="hover-op9"
          style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#09090b' }}
        >
          <img
            src={link.image}
            alt={link.imageAlt}
            style={{
              width: '100%',
              aspectRatio: '4 / 3',
              objectFit: 'cover',
              borderRadius: '0.75rem',
              border: '1px solid rgba(9, 9, 11, 0.15)',
              display: 'block',
            }}
          />
          <span style={{ fontFamily: 'var(--font-hanken)', fontWeight: 600, fontSize: '1.25rem', lineHeight: '1.5rem' }}>
            {link.label}
          </span>
          <span style={{ fontSize: '0.875rem', lineHeight: '1.375rem', color: 'rgba(9, 9, 11, 0.75)' }}>{link.blurb}</span>
        </a>
      ))}
    </NavDropdown>
  )
}

function FloatingPill({ items }) {
  const pillLogoSrc = 'https://cdn.sanity.io/files/wf5e366r/production/abe3713a984fec694f2bc5e23a9f8173a94985a3.svg'
  const trace = items.find((it) => it.label === 'Trace')
  const shop = items.find((it) => it.label === 'Shop')

  const ctaLink = (item) => (
    <a
      key={item.label}
      href={item.href}
      target={item.isExternal ? '_blank' : undefined}
      rel={item.isExternal ? 'noopener noreferrer' : undefined}
      className="btn-dark rpx rml"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        '--px': '20px',
        '--px-xl': '24px',
        '--ml': '8px',
        '--ml-xl': '16px',
        paddingTop: '12px',
        paddingBottom: '12px',
        borderRadius: '9999px',
        fontWeight: 700,
        fontFamily: 'var(--font-hanken)',
        backgroundColor: '#09090b',
        color: '#f5cb81',
        border: '1px solid #09090b',
        whiteSpace: 'nowrap',
      }}
    >
      {item.icon ? <item.icon size={20} /> : null}
      <span className="rt" style={{ '--fs': '1rem', '--fs-xl': '1.125rem', '--lh': '1.5' }}>{item.label}</span>
    </a>
  )

  return (
    <div
      className="rd"
      style={{
        position: 'fixed',
        top: '32px',
        left: 0,
        right: 0,
        zIndex: 1050,
        '--d': 'none',
        '--d-lg': 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          border: '2px solid #09090b',
          padding: '12px 16px',
          borderRadius: '9999px',
          boxShadow: shadowMd,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          maxWidth: '100%',
        }}
      >
        <a
          href="/"
          className="rmr"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '4px 20px',
            borderRadius: '9999px',
            '--mr': '16px',
            '--mr-xl': '48px',
          }}
        >
          <img src={pillLogoSrc} alt="Humble Beeing Logo" style={{ height: '40px', width: 'auto' }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {items
            .filter((it) => it.label !== 'Shop' && it.label !== 'Trace')
            .map((item) => {
              const linkStyle = {
                position: 'relative',
                '--px': '12px',
                '--px-xl': '24px',
                paddingTop: '12px',
                paddingBottom: '12px',
                borderRadius: '9999px',
                fontWeight: 600,
                fontFamily: 'var(--font-hanken)',
                color: '#09090b',
                whiteSpace: 'nowrap',
                transition: 'color 200ms ease, transform 150ms ease',
              }
              const labelStyle = { position: 'relative', zIndex: 1, '--fs': '1rem', '--fs-xl': '1.125rem', '--lh': '1.5' }
              const renderBg = (it) =>
                !it.active ? (
                  <span
                    aria-hidden
                    className="navlink-bg"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(128, 128, 128, 0.12)',
                      border: '1px solid #d4d4d8',
                      zIndex: 0,
                    }}
                  />
                ) : (
                  <span
                    aria-hidden
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(128, 128, 128, 0.16)',
                      border: '1px solid #a1a1aa',
                      zIndex: 0,
                    }}
                  />
                )

              if (item.label === 'Products') {
                return (
                  <ProductsMegaMenu
                    key={item.label}
                    item={item}
                    linkStyle={linkStyle}
                    labelStyle={labelStyle}
                    renderBg={renderBg}
                  />
                )
              }

              if (item.label === 'About') {
                return (
                  <AboutMenu
                    key={item.label}
                    item={item}
                    linkStyle={linkStyle}
                    labelStyle={labelStyle}
                    renderBg={renderBg}
                  />
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="navlink rpx"
                  style={linkStyle}
                >
                  <span className="rt" style={labelStyle}>
                    {item.label}
                  </span>
                  {renderBg(item)}
                </a>
              )
            })}
          {trace ? ctaLink(trace) : null}
          {shop ? ctaLink(shop) : null}
        </nav>
      </div>
    </div>
  )
}

export default function Navbar(props) {
  const overlayOnHero = props.overlayOnHero || false
  const router = useRouter()

  const blackLogo = 'https://cdn.sanity.io/files/wf5e366r/production/abe3713a984fec694f2bc5e23a9f8173a94985a3.svg'
  const mobileLogoSrc = blackLogo

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '/', icon: HomeIcon },
      {
        label: 'About',
        icon: BookOpenIcon,
        match: ['/our-story', '/our-process', '/impact-and-sustainability', '/blog'],
        children: [
          { label: 'Our Story', href: '/our-story' },
          { label: 'Our Process', href: '/our-process' },
          { label: 'Impact', href: '/impact-and-sustainability' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        label: 'Products',
        icon: PackageIcon,
        match: ['/products', '/wholesale-and-partnerships'],
        children: [
          ...PRODUCT_CATEGORIES.map((c) => ({
            label: c.navLabel,
            href: `/products#${c.key}`,
          })),
          { label: 'All products →', href: '/products' },
          { label: 'Wholesale', href: '/wholesale-and-partnerships' },
        ],
      },
      { label: 'Store Locator', href: '/store-locator', icon: MapPinIcon },
      { label: 'Trace', href: 'https://trace.humble-beeing.com', isExternal: true, icon: RouteIcon },
      { label: 'Shop', href: 'https://shop.humble-beeing.com', isExternal: true, icon: ShoppingBagIcon },
      { label: 'Contact', href: '/contact-and-connect', icon: PhoneIcon },
    ],
    [],
  )

  const itemsWithActive = useMemo(() => {
    const asPath = router?.asPath || '/'
    const isActive = (href) => {
      if (!href || href.startsWith('http')) return false
      if (href === '/') return asPath === '/'
      return asPath.startsWith(href)
    }
    return navItems.map((i) => ({
      ...i,
      active: i.match ? i.match.some(isActive) : isActive(i.href),
    }))
  }, [router?.asPath, navItems])

  return (
    <div
      className="rpx rpy"
      style={{
        '--px': '1rem',
        '--px-sm': '2rem',
        '--px-lg': '5.5rem',
        '--py': '0.625rem',
        '--py-sm': '1rem',
        '--py-lg': '0',
        position: overlayOnHero ? 'fixed' : 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'transparent',
      }}
    >
      {/* Mobile / tablet pill (hidden from lg where the floating pill takes over) */}
      <div className="rd" style={{ '--d': 'block', '--d-lg': 'none' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="rpx rpy"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              border: '2px solid #09090b',
              '--px': '8px',
              '--px-sm': '12px',
              '--py': '6px',
              '--py-sm': '8px',
              borderRadius: '9999px',
              boxShadow: shadowMd,
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              width: '90vw',
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              alignItems: 'center',
              columnGap: '8px',
            }}
          >
            <div className="rml" style={{ justifySelf: 'start', '--ml': '4px', '--ml-sm': '12px' }}>
              <MobileDrawer navItems={itemsWithActive} triggerColor="black" triggerSize="1.25rem" />
            </div>
            <a href="/" style={{ justifySelf: 'center', display: 'inline-flex' }}>
              <img
                src={mobileLogoSrc}
                alt="The Humble Beeing Logo"
                className="rh"
                style={{ '--h': '30px', '--h-sm': '36px', width: 'auto' }}
              />
            </a>
            <a
              href="https://shop.humble-beeing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark rpx rpy"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                '--px': '12px',
                '--px-sm': '16px',
                '--py': '6px',
                '--py-sm': '8px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontFamily: 'var(--font-poppins)',
                backgroundColor: '#09090b',
                color: '#f5cb81',
                border: '1px solid #09090b',
                justifySelf: 'end',
              }}
            >
              <ShoppingBagIcon size={14} />
              <span
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  whiteSpace: 'nowrap',
                  border: 0,
                }}
              >
                Shop
              </span>
            </a>
          </div>
        </div>
      </div>

      <FloatingPill items={itemsWithActive} />
    </div>
  )
}
