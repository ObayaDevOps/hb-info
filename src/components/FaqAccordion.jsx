import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FaqAccordion({ items = [], defaultOpenValues = [] }) {
  const [open, setOpen] = useState(() => new Set(defaultOpenValues.map(String)))

  const toggle = (key) => {
    setOpen((prev) => {
      const nextSet = new Set(prev)
      if (nextSet.has(key)) nextSet.delete(key)
      else nextSet.add(key)
      return nextSet
    })
  }

  return (
    <div>
      {items.map((item, index) => {
        const key = String(index)
        const isOpen = open.has(key)
        return (
          <div key={index} style={{ borderBottom: '1px solid #e4e4e7' }}>
            <button
              onClick={() => toggle(key)}
              aria-expanded={isOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                textAlign: 'left',
                padding: '12px 0',
              }}
            >
              <span style={{ flex: 1, fontWeight: 600 }}>{item.q}</span>
              <ChevronDown
                size={20}
                aria-hidden
                style={{
                  flex: 'none',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 200ms ease',
                }}
              />
            </button>
            {isOpen && (
              <div style={{ padding: '4px 0 16px 0' }}>
                <p style={{ margin: 0 }}>{item.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
