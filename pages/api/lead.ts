// pages/api/lead.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const {
      fullName,
      name,
      email,
      phone,
      postcode,
      projectType,
      message,
      ...rest
    } = (req.body || {}) as Record<string, any>;

    // Prefer fullName, then name, etc.
    const leadName = fullName || name || "";
    const leadEmail = email || "";
    const leadPhone = phone || "";
    const leadPostcode = postcode || "";
    const leadProjectType = projectType || "";
    const leadMessage = message || "";

    const allData = {
      fullName: leadName,
      email: leadEmail,
      phone: leadPhone,
      postcode: leadPostcode,
      projectType: leadProjectType,
      message: leadMessage,
      ...rest,
    };

    const html = `
      <h2>New WEDRAWPLANS website enquiry</h2>

      <p><strong>Name:</strong> ${leadName || "—"}</p>
      <p><strong>Email:</strong> ${leadEmail || "—"}</p>
      <p><strong>Phone:</strong> ${leadPhone || "—"}</p>
      <p><strong>Postcode:</strong> ${leadPostcode || "—"}</p>
      <p><strong>Project type:</strong> ${leadProjectType || "—"}</p>

      <p><strong>Message:</strong></p>
      <p>${leadMessage ? leadMessage.replace(/\n/g, "<br>") : "—"}</p>

      <hr>
      <p><strong>Raw form data</strong></p>
      <pre style="font-family: monospace; white-space: pre-wrap;">
${JSON.stringify(allData, null, 2)}
      </pre>
    `;

    await resend.emails.send({
      from: process.env.LEAD_FROM || "info@wedrawplans.com",
      to: process.env.REPLY_FROM || "info@wedrawplans.com",
      reply_to: leadEmail || process.env.REPLY_FROM || undefined,
      subject: "New enquiry from wedrawplans.co.uk",
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.error("Lead email error:", error);
    return res.status(500).json({
      ok: false,
      error: "Failed to send lead email",
      details: error?.message || String(error),
    });
  }
}
