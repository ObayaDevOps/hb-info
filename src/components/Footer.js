import { FaLinkedin, FaTree } from 'react-icons/fa'
import { FiCode } from 'react-icons/fi'
import { GiBeehive } from 'react-icons/gi'
import { TbShirt } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { toaster } from '@/lib/toaster'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const donateBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  height: '40px',
  borderRadius: '9999px',
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  backgroundColor: '#09090b',
  color: '#f5cb81',
  border: '1px solid #f5cb81',
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleSubscribe = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = (formData.get('email') || '').toString().trim()
    if (!email) {
      toaster.create({ title: 'Enter your email', type: 'warning' })
      return
    }
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        toaster.create({ title: 'Subscribed!', description: "You're on the list.", type: 'success' })
        form.reset()
      } else {
        toaster.create({ title: 'Something went wrong', type: 'error' })
      }
    } catch (err) {
      toaster.create({ title: 'Network error', type: 'error' })
    }
  }

  return (
    <footer
      style={{
        color: '#f5cb81',
        backgroundColor: '#000819',
        fontFamily: 'var(--font-hanken)',
        borderTopLeftRadius: '2rem',
        borderTopRightRadius: '2rem',
      }}
    >
      <div
        className="rpx rpy"
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '--px': '1.5rem',
          '--px-md': '5.5rem',
          '--py': '40px',
          '--py-md': '0px',
        }}
      >
        <div
          className="rfd rai rg"
          style={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'space-between',
            '--fd': 'column',
            '--fd-lg': 'row',
            '--ai': 'stretch',
            '--ai-lg': 'center',
            '--g': '40px',
            '--g-md': '48px',
            '--g-lg': '64px',
          }}
        >
          {/* Brand + Info */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <motion.div {...fadeUp}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src="https://cdn.sanity.io/images/wf5e366r/production/31804bbe067efeb8f270cc0f9205ea7ca34d6149-652x394.png"
                  alt="Humble Beeing Logo"
                  className="rh"
                  style={{ '--h': '216px', '--h-md': '240px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="rt"
              style={{ '--fs': '1.125rem', '--lh': '1.75rem', '--fs-md': '1.25rem', '--lh-md': '1.875rem', fontWeight: 700 }}
            >
              Building a sweeter, more sustainable future.
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              style={{ fontSize: '0.875rem', lineHeight: '1.375rem', maxWidth: '28rem', opacity: 0.9 }}
            >
              Humble Beeing is a Kampala-based Ugandan producer of pure raw honey, infused honeys,
              hand-poured beeswax candles, and luxury gift hampers — lab-tested, traceable, and
              crafted with smallholder beekeepers.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
              <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                2nd Floor, Tools and Machinery Building, Kabalagala, Kampala
              </motion.p>
              <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
                <a
                  href="mailto:hi@humble-beeing.com"
                  className="hover-underline"
                  style={{ fontSize: '0.875rem', fontWeight: 600, color: '#f5cb81' }}
                >
                  hi@humble-beeing.com
                </a>
              </motion.p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '8px' }}>
                <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
                  <a
                    href="https://www.linkedin.com/company/humble-beeing"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{ display: 'inline-flex', padding: '4px', borderRadius: '0.375rem', color: '#f5cb81' }}
                  >
                    <FaLinkedin size={16} />
                  </a>
                </motion.div>
                <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.35 }}>
                  <a
                    href="https://www.dralegawebops.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Developer Portfolio/Website"
                    style={{ display: 'inline-flex', padding: '4px', borderRadius: '0.375rem', color: '#f5cb81' }}
                  >
                    <FiCode size={16} />
                  </a>
                </motion.div>
                <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.4 }}>
                  <a
                    href="https://www.dralegawebops.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Developer Portfolio/Website"
                    className="btn-ghost-amber"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '36px',
                      padding: '0 14px',
                      borderRadius: '0.375rem',
                      border: '1px solid #f5cb81',
                      color: '#f5cb81',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      transition: 'background-color 150ms ease',
                    }}
                  >
                    Built by DWO
                  </a>
                </motion.div>
              </div>

              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.45 }}
                className="rd"
                style={{ fontSize: '0.875rem', fontWeight: 500, paddingTop: '8px', '--d': 'none', '--d-lg': 'flex' }}
              >
                © {currentYear} Humble Beeing. All rights reserved
              </motion.p>
            </div>
          </div>

          {/* Newsletter Pill */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}>
            <motion.p
              {...fadeUp}
              className="rt"
              style={{ '--fs': '1.5rem', '--fs-md': '2rem', '--lh': '1.2', fontWeight: 800 }}
            >
              Join our newsletter
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="rt"
              style={{ '--fs': '0.95rem', '--fs-md': '1rem', '--lh': '1.5', fontWeight: 500 }}
            >
              Be first to hear about new products, impact updates, and stories from our beekeepers.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="rp"
              style={{
                backgroundColor: '#000819',
                border: '2px solid #f5cb81',
                borderRadius: '9999px',
                boxShadow: '0px 4px 8px rgba(24, 24, 27, 0.1), 0px 0px 1px rgba(24, 24, 27, 0.3)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                '--p': '8px',
                '--p-sm': '10px 12px',
                width: '100%',
              }}
            >
              <form onSubmit={handleSubscribe} style={{ width: '100%' }}>
                <div className="rg" style={{ display: 'flex', alignItems: 'center', '--g': '6px', '--g-sm': '8px' }}>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="footer-mail rpx rpy rt"
                    style={{
                      flex: 1,
                      minWidth: 0,
                      border: 'none',
                      outline: 'none',
                      backgroundColor: '#000819',
                      color: '#f5cb81',
                      '--px': '12px',
                      '--px-sm': '16px',
                      '--py': '8px',
                      '--py-sm': '10px',
                      '--fs': '0.95rem',
                      '--fs-md': '1rem',
                      '--lh': '1.5',
                      fontWeight: 500,
                    }}
                  />
                  <button
                    type="submit"
                    className="btn-sub rpx"
                    style={{
                      height: '40px',
                      '--px': '16px',
                      '--px-md': '24px',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      lineHeight: '1.25rem',
                      backgroundColor: '#f5cb81',
                      color: '#000819',
                      border: '1px solid #f5cb81',
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} style={{ fontSize: '0.8rem', color: '#f5cb81' }}>
              We respect your privacy. Unsubscribe anytime.
            </motion.p>

            {/* Donate to Support */}
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="rt rpt"
              style={{ '--fs': '1.25rem', '--fs-md': '1.5rem', '--lh': '1.2', fontWeight: 800, '--pt': '24px', '--pt-md': '32px' }}
            >
              Get Involved!
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="rt"
              style={{ '--fs': '0.75rem', '--fs-md': '1rem', '--lh': '1.5', fontWeight: 800 }}
            >
              Donate to Support a Smallholder Beekeeper
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <div className="rg" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', '--g': '12px', '--g-md': '16px' }}>
                <a
                  href="https://store.pesapal.com/humblebeeinghoneypayments"
                  className="btn-dark rpx"
                  style={{ ...donateBtnStyle, '--px': '16px', '--px-md': '24px' }}
                >
                  <GiBeehive size={18} />
                  Beehive - $100
                </a>
                <a
                  href="https://store.pesapal.com/humblebeeinghoneypayments"
                  className="btn-dark rpx"
                  style={{ ...donateBtnStyle, '--px': '16px', '--px-md': '24px' }}
                >
                  <TbShirt size={18} />
                  Beesuit-$80
                </a>
                <a
                  href="https://store.pesapal.com/humblebeeinghoneypayments"
                  className="btn-dark rpx"
                  style={{ ...donateBtnStyle, '--px': '16px', '--px-md': '24px' }}
                >
                  <FaTree size={18} />
                  Shea Trees -$15
                </a>
              </div>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.35 }}
              className="rd"
              style={{ fontSize: '0.875rem', fontWeight: 500, paddingTop: '8px', '--d': 'flex', '--d-lg': 'none' }}
            >
              © {currentYear} HB Fine Honey Suppliers Limited. All rights reserved
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
