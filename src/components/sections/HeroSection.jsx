import { motion } from 'framer-motion'

export default function HeroSection({
  title,
  subtitle,
  bgImage,
  overlay = false,
  children,
  py = { base: 12, md: 20 },
}) {
  const tok = (v) => (typeof v === 'number' ? `${v * 4}px` : v)
  const pyObj = typeof py === 'object' ? py : { base: py }

  return (
    <section
      className="subpage-hero"
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : undefined,
        '--hero-bottom': tok(pyObj.base),
        '--hero-bottom-md': tok(pyObj.md ?? pyObj.base),
      }}
    >
      {(overlay || bgImage) && <div className="subpage-hero__shade" aria-hidden="true" />}
      <div className="subpage-hero__content">
        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="subpage-hero__title"
          >
            {title}
          </motion.h1>
        )}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
            className="subpage-hero__subtitle"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="subpage-hero__extra">{children}</div>}
      </div>
    </section>
  )
}
