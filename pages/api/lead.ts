import type { NextApiRequest, NextApiResponse } from "next";

type LeadBody = {
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  service?: string | null;
  postcode?: string | null;
  turnstileToken?: string | null;
};

type LeadResponse = {
  ok: boolean;
  error?: string;
};

// Where you receive leads
const TO_EMAILS = ["info@wedrawplans.com", "architectabbey@gmail.com"];

// Use Resend default sender for now so emails do not fail
const FROM_EMAIL = "onboarding@resend.dev";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeadResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = (req.body || {}) as LeadBody;

  const name = (body.name || "").toString().trim();
  const phone = (body.phone || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const service = (body.service || "").toString().trim();
  const postcode = (body.postcode || "").toString().trim();
  const turnstileToken = (body.turnstileToken || "").toString().trim();

  if (!name || !phone || !email || !postcode) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing required lead fields" });
  }

  // 0) Turnstile anti spam (required)
  const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

  if (!TURNSTILE_SECRET_KEY) {
    console.error("Missing TURNSTILE_SECRET_KEY environment variable");
    return res
      .status(500)
      .json({ ok: false, error: "Server is missing Turnstile secret key" });
  }

  if (!turnstileToken) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing Turnstile token" });
  }

  try {
    const verifyResp = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${encodeURIComponent(
          TURNSTILE_SECRET_KEY
        )}&response=${encodeURIComponent(turnstileToken)}`,
      }
    );

    const verifyData = (await verifyResp.json().catch(() => null)) as
      | { success?: boolean }
      | null;

    if (!verifyData?.success) {
      return res
        .status(400)
        .json({ ok: false, error: "Turnstile verification failed" });
    }
  } catch (e) {
    console.error("Turnstile verification error:", e);
    return res
      .status(500)
      .json({ ok: false, error: "Turnstile verification error" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const TWILIO_WHATSAPP_FROM = process.env.TWILIO_WHATSAPP_FROM;
  const TWILIO_WHATSAPP_TO = process.env.TWILIO_WHATSAPP_TO;

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
  }

  const subject = `New WEDRAWPLANS enquiry from ${name}`;

  const leadText = [
    "New lead from the WEDRAWPLANS website:",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Postcode: ${postcode}`,
    `Service: ${service || "Not specified"}`,
    "",
    "This lead was captured from the main hero form on wedrawplans.co.uk.",
  ].join("\n");

  const autoReplySubject = "Thank you for contacting WEDRAWPLANS";
  const autoReplyText = [
    `Dear ${name || "client"},`,
    "",
    "Thank you for contacting WEDRAWPLANS about architectural drawings.",
    "",
    "We have received your enquiry with the following details:",
    `• Phone: ${phone}`,
    `• Email: ${email}`,
    `• Postcode: ${postcode}`,
    `• Service: ${service || "Not specified"}`,
    "",
    "A member of the WEDRAWPLANS team will review your information and contact you shortly to discuss the next steps.",
    "",
    "If your enquiry is urgent, you can also call us on 020 3654 8508.",
    "",
    "WEDRAWPLANS",
    "Architectural drawing consultants for extensions, loft conversions, new builds and conversions across London and the M25 area.",
  ].join("\n");

  try {
    // 1) Send lead email to WEDRAWPLANS (both inboxes)
    if (RESEND_API_KEY) {
      await sendEmailWithResend({
        apiKey: RESEND_API_KEY,
        from: `WEDRAWPLANS Leads <${FROM_EMAIL}>`,
        to: TO_EMAILS,
        replyTo: email,
        subject,
        text: leadText,
      });

      // 2) Auto reply to client
      await sendEmailWithResend({
        apiKey: RESEND_API_KEY,
        from: `WEDRAWPLANS <${FROM_EMAIL}>`,
        to: [email],
        subject: autoReplySubject,
        text: autoReplyText,
      });
    }

    // 3) WhatsApp notification via Twilio (optional, only if configured)
    if (
      TWILIO_ACCOUNT_SID &&
      TWILIO_AUTH_TOKEN &&
      TWILIO_WHATSAPP_FROM &&
      TWILIO_WHATSAPP_TO
    ) {
      const whatsappBody = [
        "New WEDRAWPLANS website lead:",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Postcode: ${postcode}`,
        `Service: ${service || "Not specified"}`,
      ].join("\n");

      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;

      const authString = Buffer.from(
        `${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`
      ).toString("base64");

      const formData = new URLSearchParams();
      formData.append("From", TWILIO_WHATSAPP_FROM);
      formData.append("To", TWILIO_WHATSAPP_TO);
      formData.append("Body", whatsappBody);

      const twilioResp = await fetch(twilioUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${authString}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (!twilioResp.ok) {
        const errorText = await twilioResp.text().catch(() => "Unknown error");
        console.error("Twilio WhatsApp error:", twilioResp.status, errorText);
      }
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Lead handler error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}

type ResendEmailParams = {
  apiKey: string;
  from: string;
  to: string[];
  subject: string;
  text: string;
  replyTo?: string;
};

async function sendEmailWithResend({
  apiKey,
  from,
  to,
  subject,
  text,
  replyTo,
}: ResendEmailParams) {
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!resp.ok) {
    const errorText = await resp.text().catch(() => "Unknown error");
    console.error("Resend API error:", resp.status, errorText);
    return;
  }
}
