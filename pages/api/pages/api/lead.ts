// pages/api/lead.ts
import type { NextApiRequest, NextApiResponse } from "next";

type ApiResponse = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const {
    fullName,
    email,
    phone,
    postcode,
    projectType,
    propertyType,
    borough,
    message,
    budget,
    timeline,
  } = req.body || {};

  if (!fullName || !email) {
    return res.status(400).json({
      success: false,
      message: "Full name and email are required.",
    });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return res.status(500).json({
      success: false,
      message: "Email service is not configured on the server.",
    });
  }

  const subject = `New WEDRAWPLANS enquiry from ${fullName}`;

  const html = `
    <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:#111827;">
      <h2 style="margin-bottom:8px;">New enquiry from WEDRAWPLANS website</h2>
      <p style="margin:0 0 12px 0;">A new lead has been submitted from the main landing page.</p>

      <h3 style="margin:16px 0 4px 0;">Client details</h3>
      <table cellpadding="4" cellspacing="0" style="border-collapse:collapse;">
        <tr>
          <td style="font-weight:600;">Name:</td>
          <td>${fullName}</td>
        </tr>
        <tr>
          <td style="font-weight:600;">Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td style="font-weight:600;">Phone:</td>
          <td>${phone || "-"}</td>
        </tr>
        <tr>
          <td style="font-weight:600;">Postcode:</td>
          <td>${postcode || "-"}</td>
        </tr>
        <tr>
          <td style="font-weight:600;">Borough:</td>
          <td>${borough || "-"}</td>
        </tr>
      </table>

      <h3 style="margin:16px 0 4px 0;">Project details</h3>
      <table cellpadding="4" cellspacing="0" style="border-collapse:collapse;">
        <tr>
          <td style="font-weight:600;">Project type:</td>
          <td>${projectType || "-"}</td>
        </tr>
        <tr>
          <td style="font-weight:600;">Property type:</td>
          <td>${propertyType || "-"}</td>
        </tr>
        <tr>
          <td style="font-weight:600;">Budget:</td>
          <td>${budget || "-"}</td>
        </tr>
        <tr>
          <td style="font-weight:600;">Timeline:</td>
          <td>${timeline || "-"}</td>
        </tr>
      </table>

      <h3 style="margin:16px 0 4px 0;">Client message</h3>
      <p style="white-space:pre-line;border:1px solid #e5e7eb;border-radius:6px;padding:8px 10px;background:#f9fafb;">
        ${message || "No additional message provided."}
      </p>

      <p style="margin-top:16px;font-size:12px;color:#6b7280;">
        This email was sent automatically from wedrawplans.co.uk
      </p>
    </div>
  `;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "WEDRAWPLANS <no-reply@wedrawplans.co.uk>",
        to: ["architectabbey@gmail.com"],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const text = await resendResponse.text();
      console.error("Resend error:", resendResponse.status, text);
      return res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later.",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Enquiry sent successfully." });
  } catch (error) {
    console.error("Unexpected error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Unexpected server error. Please try again later.",
    });
  }
}
