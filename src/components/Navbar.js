import { useMemo } from 'react'
import { useRouter } from 'next/router'
import MobileDrawer from './MobileDrawer'
import {
  Home as HomeIcon,
  BookOpen as BookOpenIcon,
  Droplet as DropletIcon,
  ShoppingBag as ShoppingBagIcon,
  Leaf as LeafIcon,
  Newspaper as NewspaperIcon,
  Package as PackageIcon,
  Phone as PhoneIcon,
  Route as RouteIcon,
} from 'lucide-react'

const shadowMd = '0px 4px 8px rgba(24, 24, 27, 0.1), 0px 0px 1px rgba(24, 24, 27, 0.3)'

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
            .map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                className="navlink rpx"
                style={{
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
                }}
              >
                <span
                  className="rt"
                  style={{ position: 'relative', zIndex: 1, '--fs': '1rem', '--fs-xl': '1.125rem', '--lh': '1.5' }}
                >
                  {item.label}
                </span>
                {!item.active ? (
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
                )}
              </a>
            ))}
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
      { label: 'Our Story', href: '/our-story', icon: BookOpenIcon },
      { label: 'Our Process', href: '/our-process', icon: DropletIcon },
      { label: 'Trace', href: 'https://trace.humble-beeing.com', isExternal: true, icon: RouteIcon },
      { label: 'Shop', href: 'https://shop.humble-beeing.com', isExternal: true, icon: ShoppingBagIcon },
      { label: 'Impact', href: '/impact-and-sustainability', icon: LeafIcon },
      { label: 'Blog', href: '/blog', icon: NewspaperIcon },
      { label: 'Wholesale', href: '/wholesale-and-partnerships', icon: PackageIcon },
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
    return navItems.map((i) => ({ ...i, active: isActive(i.href) }))
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
