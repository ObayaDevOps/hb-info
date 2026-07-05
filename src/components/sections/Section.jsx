const MAXW = {
  md: '28rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  '8xl': '90rem',
  full: '100%',
}

// Accepts Chakra-style spacing tokens (numbers, x4px) or CSS strings
const tok = (v) => (typeof v === 'number' ? `${v * 4}px` : v)

export default function Section({
  children,
  maxW = '5xl',
  px = { base: '24px', md: '32px' },
  py = { base: '128px', md: '128px' },
  style = {},
  ...rest
}) {
  const pxObj = typeof px === 'object' ? Object.fromEntries(Object.entries(px).map(([k, v]) => [k, tok(v)])) : { base: tok(px) }
  const pyObj = typeof py === 'object' ? Object.fromEntries(Object.entries(py).map(([k, v]) => [k, tok(v)])) : { base: tok(py) }
  return (
    <div
      className="rpx rpy"
      style={{
        position: 'relative',
        maxWidth: MAXW[maxW] || maxW,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        '--px': pxObj.base,
        '--px-md': pxObj.md,
        '--px-lg': pxObj.lg,
        '--py': pyObj.base,
        '--py-md': pyObj.md,
        '--py-lg': pyObj.lg,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
