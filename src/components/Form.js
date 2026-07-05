"use client"

import { useForm } from "react-hook-form"
import { useState } from "react";

const labelText = {
  fontFamily: 'var(--font-hanken)',
  fontSize: '0.75rem',
  lineHeight: 'normal',
  fontWeight: 400,
  fontStyle: 'normal',
  color: '#000819',
  display: 'block',
  marginBottom: '4px',
}

const fieldWrap = {
  width: '100%',
}

const errText = {
  color: '#f87171',
  fontSize: '0.75rem',
  marginTop: '4px',
}

const inputBase = {
  width: '100%',
  height: '40px',
  padding: '0 12px',
  fontSize: '0.875rem',
  fontFamily: 'Poppins, var(--font-poppins), sans-serif',
  color: 'white',
  backgroundColor: 'transparent',
  borderRadius: '4px',
  outline: 'none',
}

export default function Form({ buttonPosition = 'absolute' }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  // This function will ONLY run if validation passes
  const onSubmit = async (data) => {
    setShowSuccessMessage(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setShowSuccessMessage(true);
        reset();
      } else {
        console.error("Form submission failed:", res.statusText);
        setShowSuccessMessage(false);
      }
    } catch (error) {
      console.error("An error occurred during submission:", error);
      setShowSuccessMessage(false);
    }
  }

  const onInvalid = (errs) => {
    console.log("Validation Errors:", errs);
    setShowSuccessMessage(false);
  }

  const inputStyle = (hasError) => ({
    ...inputBase,
    border: `1px solid ${hasError ? '#ef4444' : '#e4e4e7'}`,
  })

  const fields = [
    { key: 'name', label: 'Name', placeholder: 'John Appleseed', reg: register('name', { required: 'Name is required' }) },
    {
      key: 'email',
      label: 'Email',
      placeholder: 'john.appleseed@ac.co.uk',
      type: 'email',
      reg: register('email', {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address',
        },
      }),
    },
    { key: 'phoneNumber', label: 'Phone Number', placeholder: '+447123456789', reg: register('phoneNumber', { required: 'Phone number is required' }) },
    { key: 'userMessage', label: 'Message', placeholder: 'Leave your message here...', reg: register('userMessage', { required: 'Message is required' }) },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', width: '100%', paddingTop: '24px' }}>
        {fields.map((f) => (
          <div key={f.key} style={fieldWrap}>
            <label style={labelText}>{f.label}</label>
            <input
              {...f.reg}
              type={f.type || 'text'}
              placeholder={f.placeholder}
              className={errors[f.key] ? 'form-input form-input-err' : 'form-input'}
              style={inputStyle(!!errors[f.key])}
            />
            {errors[f.key] ? <div style={errText}>{errors[f.key]?.message}</div> : null}
          </div>
        ))}

        {/* --- General Error Message --- */}
        {Object.keys(errors).length > 0 && !showSuccessMessage && (
          <p
            style={{
              color: '#DB3E00',
              fontFamily: 'Poppins, var(--font-poppins), sans-serif',
              fontSize: '0.75rem',
              fontWeight: 400,
              width: '100%',
              textAlign: 'right',
              marginTop: '8px',
              marginBottom: '-2rem',
            }}
          >
            Please fill in all details and message.
          </p>
        )}

        {/* --- Success Message --- */}
        {showSuccessMessage && (
          <p
            style={{
              color: '#4ade80',
              fontFamily: 'Poppins, var(--font-poppins), sans-serif',
              fontSize: '0.75rem',
              fontWeight: 400,
              width: '100%',
              textAlign: 'right',
              marginTop: '8px',
              marginBottom: '-2rem',
            }}
          >
            Message sent successfully!
          </p>
        )}

        {/* --- Submit Button --- */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="hover-op9"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40px',
            padding: '0 16px',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            borderRadius: '4px',
            backgroundColor: '#000819',
            color: 'white',
            fontFamily: 'var(--font-hanken)',
            fontWeight: 500,
            position: buttonPosition === 'absolute' ? 'absolute' : undefined,
            right: buttonPosition === 'absolute' ? 0 : undefined,
            bottom: buttonPosition === 'absolute' ? 0 : undefined,
            marginBottom: '1.5rem',
            marginRight: '2rem',
            marginTop: '16px',
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          Send Message
        </button>
      </div>
    </form>
  )
}
