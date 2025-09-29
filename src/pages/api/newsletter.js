export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { email } = req.body || {}
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' })
    }
    // Placeholder: In production, forward to your ESP (Mailchimp, Brevo, etc.)
    // eslint-disable-next-line no-console
    console.log('[newsletter] subscribe:', email)
    return res.status(200).json({ ok: true })
  } catch (err) {
    return res.status(500).json({ error: 'Unexpected error' })
  }
}

