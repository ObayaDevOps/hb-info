import { useEffect, useState } from 'react'
import { toaster } from '@/lib/toaster'

const typeColors = {
  success: '#38A169',
  error: '#E53E3E',
  warning: '#DD6B20',
  info: '#3182CE',
}

export default function Toasts() {
  const [items, setItems] = useState([])

  useEffect(() => toaster.subscribe(setItems), [])

  if (!items.length) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 1100,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        maxWidth: 'calc(100vw - 2rem)',
      }}
    >
      {items.map((t) => (
        <div
          key={t.id}
          role="status"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            background: '#000819',
            color: '#FFF2D7',
            borderRadius: '0.5rem',
            boxShadow: '0px 8px 16px rgba(17, 24, 39, 0.2), 0px 0px 1px rgba(17, 24, 39, 0.3)',
            padding: '0.75rem 1rem',
            width: '20rem',
            maxWidth: '100%',
            animation: 'hb-toast-in 200ms ease-out',
          }}
        >
          <span
            aria-hidden
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '9999px',
              marginTop: '6px',
              flex: 'none',
              background: typeColors[t.type] || typeColors.info,
            }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{t.title}</div>
            {t.description ? (
              <div style={{ fontSize: '0.8125rem', opacity: 0.85, marginTop: '2px' }}>{t.description}</div>
            ) : null}
          </div>
          <button
            onClick={() => toaster.dismiss(t.id)}
            aria-label="Dismiss notification"
            style={{
              color: '#FFF2D7',
              fontSize: '1rem',
              lineHeight: 1,
              padding: '2px',
              opacity: 0.7,
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )
}
