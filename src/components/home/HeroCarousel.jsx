import { useEffect, useRef, useState } from 'react'
import Marquee from '@/components/Marquee'

export default function HeroCarousel({ images = [], children, marquee, autoMs = 6000 }) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)

  const next = () => setCurrent((c) => (c + 1) % images.length)
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)

  // Auto-advance
  useEffect(() => {
    if (!images.length || isPaused) return
    const id = setInterval(next, autoMs)
    return () => clearInterval(id)
  }, [images.length, isPaused, autoMs])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return
        const dx = e.changedTouches[0].clientX - touchStartX.current
        const threshold = 40
        if (dx > threshold) prev()
        if (dx < -threshold) next()
        touchStartX.current = null
      }}
    >
      {/* Slides */}
      {images.map((src, idx) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: idx === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}

      {/* Overlay for contrast */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)' }} />

      {/* Film grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.84,
          mixBlendMode: 'multiply',
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
          zIndex: 1,
        }}
      />

      {/* Marquee bar at bottom */}
      {marquee && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderTop: '4px solid #09090b',
            borderBottom: '4px solid #09090b',
            backgroundColor: 'white',
            zIndex: 2,
            paddingTop: '8px',
            paddingBottom: '8px',
          }}
        >
          <Marquee gap={50} speed={55}>{marquee}</Marquee>
        </div>
      )}

      {/* Dots above marquee */}
      <div
        className="rbottom"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          zIndex: 3,
          '--bottom': marquee ? '56px' : '24px',
          '--bottom-md': marquee ? '64px' : '32px',
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? '12px' : '8px',
              height: i === current ? '12px' : '8px',
              borderRadius: '9999px',
              backgroundColor: i === current ? 'white' : 'rgba(255,255,255,0.6)',
              border: i === current ? '2px solid rgba(0,0,0,0.2)' : 'none',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div
        className="rpx"
        style={{
          position: 'relative',
          zIndex: 1,
          color: 'white',
          maxWidth: '90rem',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '--px': '24px',
          '--px-md': '32px',
        }}
      >
        {children}
      </div>
    </section>
  )
}
