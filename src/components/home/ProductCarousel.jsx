import { Children, useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import styles from './ProductCarousel.module.css'

export default function ProductCarousel({ children, label }) {
  const trackRef = useRef(null)
  const dragRef = useRef(null)
  const [progress, setProgress] = useState({ frac: 0, visible: 1 })
  const slides = Children.toArray(children)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    setProgress({
      frac: max > 0 ? Math.min(1, Math.max(0, track.scrollLeft / max)) : 0,
      visible: track.scrollWidth > 0 ? Math.min(1, track.clientWidth / track.scrollWidth) : 1,
    })
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    measure()
    track.addEventListener('scroll', measure, { passive: true })
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    Array.from(track.children).forEach((slide) => observer.observe(slide))
    return () => {
      track.removeEventListener('scroll', measure)
      observer.disconnect()
    }
  }, [measure, slides.length])

  const scrollByStep = (direction) => {
    const track = trackRef.current
    const slide = track?.firstElementChild
    if (!slide) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (slide.getBoundingClientRect().width + gap), behavior: 'smooth' })
  }

  const onPointerDown = (event) => {
    if (event.pointerType === 'touch' || event.button !== 0) return
    const track = trackRef.current
    dragRef.current = { x: event.clientX, left: track.scrollLeft, moved: false }
  }

  const onPointerMove = (event) => {
    const drag = dragRef.current
    if (!drag) return
    const dx = event.clientX - drag.x
    if (!drag.moved && Math.abs(dx) <= 3) return
    if (!drag.moved) {
      drag.moved = true
      trackRef.current.classList.add(styles.dragging)
      trackRef.current.setPointerCapture(event.pointerId)
    }
    trackRef.current.scrollLeft = drag.left - dx
  }

  const endDrag = (event) => {
    const track = trackRef.current
    if (!dragRef.current || !track) return
    if (dragRef.current.moved) {
      const suppressClick = (click) => {
        click.preventDefault()
        click.stopPropagation()
      }
      track.addEventListener('click', suppressClick, { capture: true, once: true })
      setTimeout(() => track.removeEventListener('click', suppressClick, { capture: true }), 0)
    }
    dragRef.current = null
    track.classList.remove(styles.dragging)
    if (track.hasPointerCapture?.(event.pointerId)) track.releasePointerCapture(event.pointerId)
  }

  const atStart = progress.frac <= 0.01
  const atEnd = progress.frac >= 0.99

  return (
    <div className={styles.root}>
      <ul
        ref={trackRef}
        className={styles.track}
        aria-label={label}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {slides.map((slide, index) => (
          <li key={slide.key ?? index} className={styles.slide}>{slide}</li>
        ))}
      </ul>
      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={() => scrollByStep(-1)} disabled={atStart} aria-label="Previous product">
          <ArrowLeft size={20} aria-hidden="true" />
        </button>
        <div
          className={styles.progress}
          role="progressbar"
          aria-label={`${label} position`}
          aria-valuenow={Math.round(progress.frac * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className={styles.bar}
            style={{
              width: `${progress.visible * 100}%`,
              transform: `translateX(${(progress.frac * (1 - progress.visible) * 100) / (progress.visible || 1)}%)`,
            }}
          />
        </div>
        <button type="button" className={styles.arrow} onClick={() => scrollByStep(1)} disabled={atEnd} aria-label="Next product">
          <ArrowRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
