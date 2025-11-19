import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,      // smtp.office365.com
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,   // info@wedrawplans.com
        pass: process.env.SMTP_PASS,   // your app password
      },
    });

    await transporter.sendMail({
      from: `WEDRAWPLANS <info@wedrawplans.com>`,
      to: process.env.LEAD_FROM || "info@wedrawplans.com",
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      html: `
        <h2>New enquiry from your website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("Email error:", err);
    return res
      .status(500)
      .json({ error: err.message || "Failed to send email" });
  }
}
