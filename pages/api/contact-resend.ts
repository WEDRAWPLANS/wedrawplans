import type { NextApiRequest, NextApiResponse } from "next";

type Data = { success: true } | { success: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  const { name, email, phone, message, service, borough, postcode } =
    (req.body as any) || {};

  if (!name || !email) {
    return res
      .status(400)
      .json({ success: false, error: "Missing name or email." });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return res
        .status(500)
        .json({ success: false, error: "Email service not configured." });
    }

    const fromAddress = "WeDrawPlans <info@wedrawplans.com>";
    const toAddress = "info@wedrawplans.com";

    const subject = `New enquiry from ${name} via wedrawplans.com`;

    const text = `
New website enquiry from wedrawplans.com

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Postcode: ${postcode || "Not provided"}
Service: ${service || "Not specified"}
Borough: ${borough || "Not specified"}

Message:
${message || "No message provided (quick quote form)."}
    `.trim();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Resend error:", response.status, body);
      return res
        .status(500)
        .json({ success: false, error: "Failed to send email." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return res
      .status(500)
      .json({ success: false, error: "Unexpected error sending email." });
  }
}
