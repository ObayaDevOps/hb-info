import { useEffect, useState } from 'react';
import Form from '@/components/Form'

const tealBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
  padding: '0 16px',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  borderRadius: '4px',
  fontFamily: 'Poppins, var(--font-poppins), sans-serif',
  fontWeight: 500,
}

const ContactModal = ({ buttonText = "Get in Touch" }) => {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hover-teal"
        style={{
          ...tealBtn,
          color: '#00DEE3',
          border: '1px solid #00E2E5',
          backgroundColor: 'transparent',
        }}
      >
        {buttonText}
      </button>

      {open && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1400,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div
            role="dialog"
            aria-label="Contact Us"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '32rem',
              backgroundColor: '#000819',
              border: '2px solid #00E2E5',
              borderRadius: '12px',
              padding: '0.5rem',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <div style={{ padding: '24px 24px 0 24px' }}>
              <p
                style={{
                  fontFamily: 'Poppins, var(--font-poppins), sans-serif',
                  fontSize: '1.25rem',
                  lineHeight: 'normal',
                  fontWeight: 500,
                  letterSpacing: '0.025rem',
                  color: 'white',
                }}
              >
                Contact Us
              </p>
            </div>
            <div style={{ padding: '24px' }}>
              <p
                style={{
                  fontFamily: 'Poppins, var(--font-poppins), sans-serif',
                  fontSize: '0.875rem',
                  lineHeight: '1.875rem',
                  fontWeight: 400,
                  color: '#FFF',
                }}
              >
                Want to reach out?
                Enter your details below and provide a
                message to Ashton & Carrington
                and we'll respond as soon as we can.
              </p>

              <div>
                <Form />
              </div>
            </div>
            <div style={{ marginTop: '3.5rem', padding: '0 24px 24px 24px' }}>
              <button
                onClick={() => setOpen(false)}
                className="hover-teal"
                style={{
                  ...tealBtn,
                  color: '#00E2E5',
                  backgroundColor: 'transparent',
                  border: '1px solid transparent',
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  marginBottom: '1.5rem',
                  marginRight: '12rem',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ContactModal;
