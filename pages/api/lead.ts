import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, phone, email, postcode, projectType, stage, message } = req.body || {}

  if (!name || !phone || !email || !postcode || !projectType || !stage) {
    return res.status(400).json({ ok: false, error: 'Missing fields' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  } as any)

  const to = process.env.LEAD_TO || 'info@wedrawplans.com'
  const from = process.env.LEAD_FROM || 'WEDRAWPLANS <no-reply@wedrawplans.co.uk>'
  const replyFrom = process.env.REPLY_FROM || from

  const html = `
    <h2>New WEDRAWPLANS lead</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Postcode:</strong> ${postcode}</p>
    <p><strong>Project type:</strong> ${projectType}</p>
    <p><strong>Stage:</strong> ${stage}</p>
    <p><strong>Message:</strong><br/>${(message||'').replace(/\n/g,'<br/>')}</p>
  `

  // notify you
  await transporter.sendMail({
    from,
    to,
    subject: `New Lead — ${projectType} (${postcode}) — ${name}`,
    html,
  })

  // auto-reply
  await transporter.sendMail({
    from: replyFrom,
    to: email,
    subject: 'Thanks — we have your details',
    html: `
      <p>Hi ${name},</p>
      <p>Thanks for contacting <strong>WEDRAWPLANS</strong>. We have received your details and will call/email you shortly (same day where possible).</p>
      <p><strong>What happens next?</strong><br/>
      • A quick call to understand your project<br/>
      • A clear quote with timelines<br/>
      • If you are happy, we book your survey</p>
      <p>— WEDRAWPLANS<br/>+44 20 3654 8508<br/>201 Borough High Street, London SE1 1JA</p>
    `,
  })

  return res.status(200).json({ ok: true })
}
