import { motion } from 'framer-motion'
import Section from './Section'

export default function HeroSection({
  title,
  subtitle,
  bgImage,
  overlay = false,
  children,
  py = { base: 12, md: 20 },
}) {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  // py applies to the outer wrapper (as in the original); Chakra tokens are x4px
  const tok = (v) => (typeof v === 'number' ? `${v * 4}px` : v)
  const pyObj = typeof py === 'object' ? py : { base: py }

  return (
    <div
      className="rminh rpy"
      style={{
        position: 'relative',
        backgroundImage: bgImage
          ? `linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.5)), url('${bgImage}')`
          : undefined,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        '--minh': '35vh',
        '--minh-md': '30vh',
        '--py': tok(pyObj.base),
        '--py-md': tok(pyObj.md),
        borderBottomLeftRadius: '2rem',
        borderBottomRightRadius: '2rem',
        overflow: 'hidden',
      }}
    >
      {overlay && <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)' }} />}
      <Section>
        {title && (
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={fadeUp.transition}
          >
            <h1
              className="rt"
              style={{
                '--fs': '2.25rem',
                '--lh': '2.75rem',
                '--ls': '-0.025em',
                '--fs-md': '4.5rem',
                '--lh-md': '5.75rem',
                fontWeight: 600,
                fontFamily: 'var(--font-hanken)',
                color: overlay ? 'white' : undefined,
                textAlign: 'center',
              }}
            >
              {title}
            </h1>
          </motion.div>
        )}
        {subtitle && (
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
          >
            <p
              className="rt"
              style={{
                color: overlay ? 'white' : '#000819',
                marginTop: '12px',
                textAlign: 'center',
                '--fs': '1.25rem',
                '--lh': '1.875rem',
                '--fs-md': '1.5rem',
                '--lh-md': '2rem',
                fontFamily: 'var(--font-hanken)',
              }}
            >
              {subtitle}
            </p>
          </motion.div>
        )}
      </Section>
    </div>
  )
}
