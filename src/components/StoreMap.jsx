// Client-only Leaflet map for the store locator. Leaflet touches `window` at
// import time, so this module must only ever be loaded via
// next/dynamic(..., { ssr: false }) — never import it statically from a page.
import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const KAMPALA_CENTER = [0.3136, 32.5811]
const TILE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'

// divIcon SVG markers avoid Leaflet's default PNG icons, whose URLs break
// under bundlers — and let the pin carry the brand colours.
const storeIcon = L.divIcon({
  className: '',
  html: `<svg width="34" height="34" viewBox="0 0 24 24" fill="#f5cb81" stroke="#000819" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3" fill="#000819" stroke="none"/></svg>`,
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -30],
})

const userIcon = L.divIcon({
  className: '',
  html: `<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="8" fill="#000819" stroke="#FFF2D7" stroke-width="2.5"/></svg>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
})

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

// Imperative map moves live here because MapContainer props are immutable
// after mount; useMap() only works from a child of MapContainer.
function MapController({ stores, selectedId, userLocation, markerRefs }) {
  const map = useMap()
  const didInitialFit = useRef(false)

  useEffect(() => {
    if (didInitialFit.current || stores.length === 0) return
    didInitialFit.current = true
    if (stores.length === 1) {
      map.setView([stores[0].lat, stores[0].lng], 14)
    } else {
      map.fitBounds(L.latLngBounds(stores.map((s) => [s.lat, s.lng])), { padding: [40, 40] })
    }
  }, [map, stores])

  useEffect(() => {
    if (!selectedId) return
    const store = stores.find((s) => s._id === selectedId)
    if (!store) return
    map.flyTo([store.lat, store.lng], Math.max(map.getZoom(), 15), { duration: 0.8 })
    markerRefs.current[selectedId]?.openPopup()
  }, [map, selectedId, stores, markerRefs])

  useEffect(() => {
    if (!userLocation) return
    const nearest = [...stores]
      .sort((a, b) => haversineKm(userLocation, a) - haversineKm(userLocation, b))
      .slice(0, 3)
    const points = [[userLocation.lat, userLocation.lng], ...nearest.map((s) => [s.lat, s.lng])]
    map.fitBounds(L.latLngBounds(points), { padding: [40, 40] })
  }, [map, userLocation, stores])

  return null
}

export default function StoreMap({ stores, selectedId, onSelect, userLocation }) {
  const markerRefs = useRef({})

  return (
    <MapContainer
      center={KAMPALA_CENTER}
      zoom={12}
      scrollWheelZoom={false}
      // zIndex 0 keeps Leaflet's internal panes (z-index up to ~1000) below
      // the fixed navbar pill and mobile drawer.
      style={{ height: '100%', width: '100%', borderRadius: '1.5rem', zIndex: 0 }}
    >
      <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} />
      {stores.map((s) => (
        <Marker
          key={s._id}
          position={[s.lat, s.lng]}
          icon={storeIcon}
          ref={(r) => {
            markerRefs.current[s._id] = r
          }}
          eventHandlers={{ click: () => onSelect?.(s._id) }}
        >
          <Popup>
            <div style={{ fontFamily: 'var(--font-hanken)', minWidth: '160px' }}>
              <strong style={{ fontSize: '0.95rem' }}>{s.name}</strong>
              <div style={{ marginTop: '2px', color: '#52525b' }}>{s.area}</div>
              {s.phone && (
                <a href={`tel:${s.phone.replace(/\s/g, '')}`} style={{ display: 'block', marginTop: '4px' }}>
                  {s.phone}
                </a>
              )}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', marginTop: '4px', fontWeight: 600 }}
              >
                Get directions →
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
          <Popup>You are here</Popup>
        </Marker>
      )}
      <MapController stores={stores} selectedId={selectedId} userLocation={userLocation} markerRefs={markerRefs} />
    </MapContainer>
  )
}
