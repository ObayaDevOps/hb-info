import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Search as SearchIcon,
  LocateFixed as LocateFixedIcon,
  Store as StoreIcon,
  Phone as PhoneIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Globe as GlobeIcon,
  Navigation as NavigationIcon,
  X as XIcon,
} from 'lucide-react'
import SEO from '@/components/SEO'
import HeroSection from '@/components/sections/HeroSection'
import PageLayout from '@/components/layouts/PageLayout'
import client from '../../sanity/lib/client'
// Layout supplies Navbar/Footer

// Leaflet touches `window` at import time, so the map only loads client-side.
const StoreMap = dynamic(() => import('@/components/StoreMap'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: '100%',
        minHeight: '420px',
        backgroundColor: '#FFF2D7',
        borderRadius: '1.5rem',
      }}
    />
  ),
})

const hanken = 'var(--font-hanken)'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export async function getStaticProps() {
  const query = `*[_type == "store" && defined(location)] | order(name asc) {
    _id,
    name,
    area,
    "lat": location.lat,
    "lng": location.lng,
    phone,
    socialUrl,
    website,
    "logoUrl": logo.asset->url,
    "logoAlt": logo.alt
  }`

  let stores = []
  try {
    stores = (await client.fetch(query)) || []
  } catch (err) {
    stores = []
  }

  return {
    props: { stores },
    revalidate: 60,
  }
}

function haversineKm(a, b) {
  const R = 6371
  const toRad = (d) => (d * Math.PI) / 180
  const dLat = toRad(b.lat - a.lat)
  const dLng = toRad(b.lng - a.lng)
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(h))
}

function SocialLink({ url }) {
  let Icon = GlobeIcon
  let label = 'Social media'
  try {
    const host = new URL(url).hostname
    if (host.includes('instagram.com')) {
      Icon = InstagramIcon
      label = 'Instagram'
    } else if (host.includes('facebook.com')) {
      Icon = FacebookIcon
      label = 'Facebook'
    }
  } catch (err) {
    // keep generic icon for unparseable URLs
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover-underline"
      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem' }}
      onClick={(e) => e.stopPropagation()}
    >
      <Icon size={16} />
      {label}
    </a>
  )
}

function StoreCard({ store, selected, distanceKm, onClick, index }) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: Math.min(index * 0.06, 0.3) }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      style={{
        display: 'flex',
        gap: '14px',
        padding: '16px',
        borderRadius: '1rem',
        backgroundColor: 'white',
        border: selected ? '2px solid #f5cb81' : '2px solid transparent',
        boxShadow: '0px 4px 8px rgba(24, 24, 27, 0.08), 0px 0px 1px rgba(24, 24, 27, 0.3)',
        cursor: 'pointer',
      }}
    >
      {store.logoUrl ? (
        <img
          src={`${store.logoUrl}?w=96&h=96&fit=crop&auto=format`}
          alt={store.logoAlt || `${store.name} logo`}
          width={48}
          height={48}
          style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover', flex: 'none' }}
        />
      ) : (
        <div
          aria-hidden="true"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            backgroundColor: '#FFF2D7',
            color: '#000819',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: hanken,
            fontWeight: 700,
            fontSize: '1.25rem',
            flex: 'none',
          }}
        >
          {store.name.charAt(0)}
        </div>
      )}

      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px' }}>
          <h3 style={{ fontFamily: hanken, fontWeight: 600, fontSize: '1rem', lineHeight: '1.5rem' }}>
            {store.name}
          </h3>
          {distanceKm != null && (
            <span
              style={{
                flex: 'none',
                fontSize: '0.75rem',
                fontWeight: 600,
                backgroundColor: '#f5cb81',
                borderRadius: '9999px',
                padding: '2px 10px',
              }}
            >
              {distanceKm < 10 ? distanceKm.toFixed(1) : Math.round(distanceKm)} km
            </span>
          )}
        </div>
        <p style={{ fontSize: '0.875rem', color: '#52525b', marginTop: '2px' }}>{store.area}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '10px', alignItems: 'center' }}>
          {store.phone && (
            <a
              href={`tel:${store.phone.replace(/\s/g, '')}`}
              className="hover-underline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem' }}
              onClick={(e) => e.stopPropagation()}
            >
              <PhoneIcon size={16} />
              {store.phone}
            </a>
          )}
          {store.socialUrl && <SocialLink url={store.socialUrl} />}
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 600 }}
            onClick={(e) => e.stopPropagation()}
          >
            <NavigationIcon size={16} />
            Directions
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function StoreLocatorPage({ stores }) {
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  const [userLocation, setUserLocation] = useState(null)
  const [geoError, setGeoError] = useState(null)
  const [geoLoading, setGeoLoading] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matches = q
      ? stores.filter(
          (s) => s.name.toLowerCase().includes(q) || (s.area || '').toLowerCase().includes(q),
        )
      : stores
    if (!userLocation) return matches
    return [...matches].sort((a, b) => haversineKm(userLocation, a) - haversineKm(userLocation, b))
  }, [stores, query, userLocation])

  function handleNearMe() {
    if (!navigator.geolocation) {
      setGeoError('Location is not supported by this browser. You can still search by area above.')
      return
    }
    setGeoLoading(true)
    setGeoError(null)
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserLocation({ lat: coords.latitude, lng: coords.longitude })
        setGeoLoading(false)
      },
      (err) => {
        setGeoLoading(false)
        setGeoError(
          err.code === 1
            ? 'Location permission was denied. You can still search by area above.'
            : 'We couldn’t get your location. Please try again.',
        )
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 },
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Humble Beeing Stockists',
    itemListElement: stores.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Store',
        name: s.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: s.area,
          addressLocality: 'Kampala',
          addressCountry: 'UG',
        },
        geo: { '@type': 'GeoCoordinates', latitude: s.lat, longitude: s.lng },
        ...(s.phone ? { telephone: s.phone } : {}),
        ...(s.socialUrl ? { sameAs: [s.socialUrl] } : {}),
      },
    })),
  }

  return (
    <>
      <SEO
        title="Store Locator: Where to Buy Humble Beeing Honey"
        description="Find stores and stockists near you carrying Humble Beeing gourmet raw Ugandan honey and beeswax candles. Search by area or use your location to find the closest store in Kampala."
        jsonLd={jsonLd}
      />

      <HeroSection
        title="Find Us Near You"
        subtitle="Stockists carrying our honey and beeswax range across Kampala."
        bgImage={'https://cdn.sanity.io/images/wf5e366r/production/745c75b930ef6de7de4178d0bff5f5fd956c9393-5184x3456.jpg'}
        overlay
        py={{ base: 16, md: 24 }}
      />

      <div
        className="rpx rpy"
        style={{
          '--px': '1rem',
          '--px-sm': '2rem',
          '--px-md': '3rem',
          '--py': '2.5rem',
          '--py-md': '4rem',
          maxWidth: '80rem',
          margin: '0 auto',
        }}
      >
        {/* Search + near-me controls */}
        <motion.div
          {...fadeUp}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '8px' }}
        >
          <div style={{ position: 'relative', flex: '1 1 260px', maxWidth: '420px' }}>
            <SearchIcon
              size={18}
              style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#52525b' }}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by store or area…"
              aria-label="Search stores by name or area"
              style={{
                width: '100%',
                height: '48px',
                padding: '0 16px 0 42px',
                fontSize: '0.9375rem',
                fontFamily: hanken,
                borderRadius: '9999px',
                border: '1px solid #1A2234',
                backgroundColor: 'white',
                color: '#000819',
                outline: 'none',
              }}
            />
          </div>
          <button
            type="button"
            onClick={handleNearMe}
            disabled={geoLoading}
            className="btn-amber"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              height: '48px',
              padding: '0 22px',
              borderRadius: '9999px',
              backgroundColor: '#f5cb81',
              color: '#000819',
              fontFamily: hanken,
              fontWeight: 600,
              fontSize: '0.9375rem',
              opacity: geoLoading ? 0.7 : 1,
            }}
          >
            <LocateFixedIcon size={18} />
            {geoLoading ? 'Locating…' : 'Find stores near me'}
          </button>
          <Link
            href="/contact-and-connect?type=wholesale"
            className="hover-bg-navy"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              height: '48px',
              padding: '0 22px',
              borderRadius: '9999px',
              border: '1px solid #000819',
              color: '#000819',
              fontFamily: hanken,
              fontWeight: 600,
              fontSize: '0.9375rem',
              whiteSpace: 'nowrap',
            }}
          >
            <StoreIcon size={18} />
            Become a stockist
          </Link>
        </motion.div>

        {geoError && (
          <p role="alert" style={{ fontSize: '0.875rem', color: '#b91c1c', marginBottom: '8px' }}>
            {geoError}
          </p>
        )}

        {/* Map + list */}
        <div
          className="rgtc rg"
          style={{
            display: 'grid',
            '--gtc': '1fr',
            '--gtc-md': '7fr 5fr',
            '--g': '20px',
            '--g-md': '28px',
            marginTop: '20px',
            alignItems: 'start',
          }}
        >
          {/* Map renders first (order 1) so it stacks on top on mobile and
              takes the wider 7fr column on desktop; the list follows. */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', order: 2 }}>
            {stores.length === 0 ? (
              <div
                style={{
                  padding: '32px 24px',
                  borderRadius: '1rem',
                  backgroundColor: 'white',
                  textAlign: 'center',
                  fontFamily: hanken,
                }}
              >
                <p style={{ fontWeight: 600, fontSize: '1.125rem' }}>Stockist list coming soon</p>
                <p style={{ fontSize: '0.9375rem', color: '#52525b', marginTop: '8px' }}>
                  We&rsquo;re adding our partner stores. In the meantime,{' '}
                  <a href="/contact-and-connect" className="hover-underline" style={{ fontWeight: 600 }}>
                    contact us
                  </a>{' '}
                  and we&rsquo;ll point you to the nearest stockist.
                </p>
              </div>
            ) : filtered.length === 0 ? (
              <div
                style={{
                  padding: '32px 24px',
                  borderRadius: '1rem',
                  backgroundColor: 'white',
                  textAlign: 'center',
                  fontFamily: hanken,
                }}
              >
                <p style={{ fontWeight: 600 }}>No stores match &ldquo;{query}&rdquo;</p>
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="btn-dark"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '12px',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    backgroundColor: '#000819',
                    color: '#f5cb81',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                  }}
                >
                  <XIcon size={14} />
                  Clear search
                </button>
              </div>
            ) : (
              filtered.map((store, i) => (
                <StoreCard
                  key={store._id}
                  store={store}
                  index={i}
                  selected={store._id === selectedId}
                  distanceKm={userLocation ? haversineKm(userLocation, store) : null}
                  onClick={() => setSelectedId(store._id)}
                />
              ))
            )}
          </div>

          {/* Map column */}
          <div
            className="rh rtop"
            style={{
              '--h': '380px',
              '--h-md': '560px',
              // top:auto disables the mobile stick; only the desktop column pins
              '--top': 'auto',
              '--top-md': '104px',
              position: 'sticky',
              order: 1,
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0px 4px 8px rgba(24, 24, 27, 0.08), 0px 0px 1px rgba(24, 24, 27, 0.3)',
            }}
          >
            <StoreMap
              stores={filtered}
              selectedId={selectedId}
              onSelect={setSelectedId}
              userLocation={userLocation}
            />
          </div>
        </div>
      </div>
    </>
  )
}

StoreLocatorPage.getLayout = (page) => (
  <PageLayout navbarProps={{ overlayOnHero: true }}>{page}</PageLayout>
)
