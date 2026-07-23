import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, Menu, X } from 'lucide-react'

// Full-screen slide-in menu, hand-rolled (no Chakra).
// Trigger is a real <button> so it is keyboard-focusable (was a bare svg).
// The overlay is portaled to the app root: the nav pill's backdrop-filter
// makes it the containing block for fixed descendants, which would clip a
// fixed overlay rendered in place to the pill's size.
export default function MobileDrawer({ navItems, triggerColor = '#000819', triggerSize = '2rem' }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  // Labels of expandable sections (items with children) currently open
  const [openSections, setOpenSections] = useState(() => new Set())

  const toggleSection = (label) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })
  }

  useEffect(() => setMounted(true), [])

  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const primary = navItems.filter((it) => it.label !== 'Trace' && it.label !== 'Order on WhatsApp')
  const trace = navItems.find((it) => it.label === 'Trace')
  const shop = navItems.find((it) => it.label === 'Order on WhatsApp')

  const pillLinkStyle = {
    padding: '12px 16px',
    borderRadius: '2rem',
    backgroundColor: '#09090b',
    color: '#f5cb81',
    border: '1px solid #09090b',
    fontFamily: 'var(--font-hanken)',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  }

  const bigLabelStyle = {
    fontSize: '1.6875rem',
    lineHeight: 'normal',
    letterSpacing: '0.02rem',
    textTransform: 'none',
    fontFamily: 'var(--font-hanken)',
    fontWeight: 600,
    margin: 0,
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        style={{ display: 'flex', alignItems: 'center', color: triggerColor }}
      >
        <Menu color={triggerColor} size={triggerSize} />
      </button>

      {mounted ? createPortal(
      <div
        aria-hidden={!open}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1300,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#000819',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 300ms ease',
          overflowY: 'auto',
          visibility: open ? 'visible' : 'hidden',
        }}
      >
        <div
          role="dialog"
          aria-label="Navigation menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '8px',
            minHeight: '85vh',
            padding: '6rem 1.5rem 1rem 1.5rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {primary.map((item) => {
              const rowStyle = {
                padding: '8px 12px',
                borderRadius: item.active ? '2rem' : '0.375rem',
                backgroundColor: item.active ? 'rgba(0, 8, 25, 0.08)' : 'transparent',
                border: item.active ? '2px solid #000819' : '2px solid transparent',
                color: '#000819',
                fontFamily: 'var(--font-hanken)',
                fontWeight: 600,
              }

              if (item.children?.length) {
                const sectionOpen = openSections.has(item.label)
                return (
                  <div key={item.label}>
                    {/* Whole row toggles the section — a label link here caused
                        accidental navigation when users meant to expand */}
                    <button
                      type="button"
                      onClick={() => toggleSection(item.label)}
                      aria-label={`${sectionOpen ? 'Collapse' : 'Expand'} ${item.label} links`}
                      aria-expanded={sectionOpen}
                      className="hover-op9"
                      style={{
                        ...rowStyle,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        {item.icon ? <item.icon size={36} color="#000819" /> : null}
                        <span style={bigLabelStyle}>{item.label}</span>
                      </span>
                      <ChevronDown
                        size={28}
                        color="#000819"
                        style={{ transform: sectionOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }}
                      />
                    </button>
                    {sectionOpen && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '62px' }}>
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className="hover-op9"
                            style={{
                              padding: '6px 12px',
                              color: '#000819',
                              fontFamily: 'var(--font-hanken)',
                              fontWeight: 600,
                              fontSize: '1.25rem',
                              lineHeight: '1.75rem',
                            }}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  aria-current={item.active ? 'page' : undefined}
                  className="hover-op9"
                  style={rowStyle}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {item.icon ? <item.icon size={36} color="#000819" /> : null}
                    <span style={bigLabelStyle}>{item.label}</span>
                  </span>
                </a>
              )
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '16px' }}>
            {trace && (
              <a
                href={trace.href}
                target={trace.isExternal ? '_blank' : undefined}
                rel={trace.isExternal ? 'noopener noreferrer' : undefined}
                className="btn-dark"
                style={pillLinkStyle}
              >
                {trace.icon ? <trace.icon size={36} /> : null}
                <span style={{ ...bigLabelStyle, fontWeight: 700 }}>{trace.label}</span>
              </a>
            )}
            {shop && (
              <a
                href={shop.href}
                target={shop.isExternal ? '_blank' : undefined}
                rel={shop.isExternal ? 'noopener noreferrer' : undefined}
                className="btn-dark"
                style={pillLinkStyle}
              >
                {shop.icon ? <shop.icon size={36} /> : null}
                <span style={{ ...bigLabelStyle, fontWeight: 700 }}>{shop.label}</span>
              </a>
            )}
          </div>
        </div>

        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{ position: 'absolute', top: '16px', right: '16px', margin: '8px', color: '#000819' }}
        >
          <X color="#000819" size="2.75rem" />
        </button>
      </div>,
      document.getElementById('site-root') || document.body,
      ) : null}
    </>
  )
}
