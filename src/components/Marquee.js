export default function Marquee({ speed = 95, children, gap = 52 }) {
  // Rough mapping from speed to duration (seconds)
  const durationSec = Math.max(8, Math.round(800 / speed))
  const gapPx = gap * 4 // Chakra spacing token -> px
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: `hb-scroll ${durationSec}s linear infinite`,
        }}
      >
        {/* Two copies for a seamless loop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: `${gapPx}px` }}>
          {children}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: `${gapPx}px` }}>
          {children}
        </div>
      </div>
    </div>
  )
}
