
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data =
  | { ok: true }
  | { ok: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, phone, postcode, projectType, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ ok: false, error: "Missing name or email" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,              // smtp.office365.com
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,                            // STARTTLS
      auth: {
        user: process.env.SMTP_USER,           // info@wedrawplans.com
        pass: process.env.SMTP_PASS,           // mailbox password / app password
      },
    });

    const toAddress = process.env.LEAD_FROM || "info@wedrawplans.com";
    const fromAddress =
      process.env.REPLY_FROM || `"WEDRAWPLANS" <info@wedrawplans.com>`;

    const html = `
      <h2>New enquiry from WEDRAWPLANS website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Postcode:</strong> ${postcode || "-"}</p>
      <p><strong>Project type:</strong> ${projectType || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${(message || "").replace(/\n/g, "<br>")}</p>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject: `New website enquiry from ${name}`,
      replyTo: email,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("Lead email error:", err);
    return res.status(500).json({
      ok: false,
      error: err?.message || "Failed to send email",
    });
  }
}
