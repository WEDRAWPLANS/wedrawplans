import type { NextApiRequest, NextApiResponse } from "next";

type LeadBody = {
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  service?: string | null;
  postcode?: string | null;
  message?: string | null;
  pagePath?: string | null;
  turnstileToken?: string | null;
  hp?: string | null;
  company?: string | null;
  website?: string | null;
  url?: string | null;
};

type LeadResponse = {
  ok: boolean;
  error?: string;
};

const TO_EMAILS = ["info@wedrawplans.com", "architectabbey@gmail.com"];
const FROM_EMAIL = "onboarding@resend.dev";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;

type RateStore = Map<string, number[]>;

const globalForLeadProtection = globalThis as unknown as {
  __wdpLeadRateStore?: RateStore;
};

const rateStore: RateStore = globalForLeadProtection.__wdpLeadRateStore || new Map();
globalForLeadProtection.__wdpLeadRateStore = rateStore;

function toText(value: unknown) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function getClientIp(req: NextApiRequest) {
  const forwarded = req.headers["x-forwarded-for"];

  if (typeof forwarded === "string" && forwarded.length) {
    return forwarded.split(",")[0].trim();
  }

  if (Array.isArray(forwarded) && forwarded.length) {
    return forwarded[0];
  }

  return req.socket.remoteAddress || "unknown";
}

function normalisePhone(value: string) {
  const raw = toText(value);
  if (!raw) return "";
  const keepPlus = raw.startsWith("+");
  const digits = raw.replace(/[^\d]/g, "");
  return keepPlus ? `+${digits}` : digits;
}

function hasValidEmail(value: string) {
  return EMAIL_REGEX.test(value);
}

function hasValidPhone(value: string) {
  const digitsOnly = normalisePhone(value).replace(/[^\d]/g, "");
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

function normalisePostcode(value: string) {
  return value.trim().toUpperCase().replace(/\s+/g, " ");
}

function hasRepeatedConsonantRun(value: string) {
  return /[bcdfghjklmnpqrstvwxyz]{6,}/i.test(value);
}

function hasLongMixedCaseRandomness(value: string) {
  const v = value.trim();
  if (v.length < 10) return false;

  const letters = v.replace(/[^a-z]/gi, "");
  if (letters.length < 8) return false;

  const upperCount = (letters.match(/[A-Z]/g) || []).length;
  const lowerCount = (letters.match(/[a-z]/g) || []).length;

  return upperCount >= 2 && lowerCount >= 2 && !/\s/.test(v);
}

function looksLikeRandomText(value: string) {
  const v = value.trim();
  if (!v) return false;

  const compact = v.replace(/\s+/g, "");
  const letters = compact.replace(/[^a-z]/gi, "");
  const vowels = (letters.match(/[aeiou]/gi) || []).length;
  const consonants = (letters.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
  const upperCount = (letters.match(/[A-Z]/g) || []).length;
  const lowerCount = (letters.match(/[a-z]/g) || []).length;

  if (v.length >= 10 && !/\s/.test(v) && upperCount >= 2 && lowerCount >= 2) return true;
  if (letters.length >= 12 && vowels <= 2 && consonants >= 8) return true;
  if (hasRepeatedConsonantRun(v)) return true;
  if (/^[a-zA-Z0-9]{14,}$/.test(compact) && !/\s/.test(v)) return true;

  return false;
}

function looksLikeGibberishName(name: string) {
  const v = name.trim();

  if (!v) return false;
  if (v.length < 2) return true;
  if (/https?:\/\//i.test(v)) return true;
  if (/[@<>[\]{}_=+]/.test(v)) return true;
  if (/^\d+$/.test(v)) return true;
  if (!/[a-z]/i.test(v)) return true;
  if (hasRepeatedConsonantRun(v)) return true;
  if (hasLongMixedCaseRandomness(v)) return true;

  return false;
}

function looksLikeNonsensePostcode(value: string) {
  const v = normalisePostcode(value).replace(/\s+/g, "");

  if (!v) return false;
  if (UK_POSTCODE_REGEX.test(v)) return false;
  if (v.length > 9 && /^[A-Z0-9]+$/i.test(v)) return true;
  if (v.length > 12) return true;
  if (looksLikeRandomText(v)) return true;

  return false;
}

function looksLikeBotEmail(email: string) {
  const v = email.toLowerCase().trim();

  if (!EMAIL_REGEX.test(v)) return false;

  const [local, domain] = v.split("@");
  if (!local || !domain) return false;

  const dotCount = (local.match(/\./g) || []).length;
  const digits = (local.match(/\d/g) || []).length;

  if (dotCount >= 4) return true;
  if (local.length >= 14 && digits >= 3 && dotCount >= 2) return true;
  if (/^[a-z](\.[a-z]){3,}\.\d+/i.test(local)) return true;
  if (looksLikeRandomText(local.replace(/\./g, "")) && domain === "gmail.com") return true;

  return false;
}

function looksLikeFakePhone(phone: string) {
  const digits = normalisePhone(phone).replace(/[^\d]/g, "");

  if (!digits) return false;
  if (digits.length < 10 || digits.length > 15) return true;
  if (/^(\d)\1{8,}$/.test(digits)) return true;

  const isLikelyUk =
    digits.startsWith("07") ||
    digits.startsWith("01") ||
    digits.startsWith("02") ||
    digits.startsWith("03") ||
    digits.startsWith("44");

  if (digits.length === 10 && !isLikelyUk) return true;

  return false;
}

function isObviousSpamMessage(message: string) {
  const v = message.toLowerCase();

  const badPatterns = [
    "seo service",
    "seo services",
    "crypto",
    "telegram",
    "forex",
    "backlink",
    "backlinks",
    "guest post",
    "guest posts",
    "casino",
    "viagra",
    "loan",
    "marketing agency",
    "boost your traffic",
    "domain authority",
    "dr 50+",
    "link building",
    "whatsapp marketing",
    "rank your website",
    "increase traffic",
  ];

  return badPatterns.some((pattern) => v.includes(pattern));
}

function cleanupRateStore(now: number) {
  const windowMs = 10 * 60 * 1000;

  rateStore.forEach((timestamps, key) => {
    const kept = timestamps.filter((ts) => now - ts < windowMs);

    if (kept.length) {
      rateStore.set(key, kept);
    } else {
      rateStore.delete(key);
    }
  });
}

async function verifyTurnstile(token: string, ip: string) {
  const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

  if (!TURNSTILE_SECRET_KEY) {
    console.error("Missing TURNSTILE_SECRET_KEY environment variable");
    return { ok: false, error: "Server is missing Turnstile secret key" };
  }

  if (!token) {
    return { ok: false, error: "Missing Turnstile token" };
  }

  const verifyResp = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(
        token
      )}&remoteip=${encodeURIComponent(ip)}`,
    }
  );

  const verifyData = (await verifyResp.json().catch(() => null)) as
    | { success?: boolean }
    | null;

  if (!verifyData?.success) {
    return { ok: false, error: "Turnstile verification failed" };
  }

  return { ok: true };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeadResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  const now = Date.now();

  cleanupRateStore(now);

  const windowMs = 10 * 60 * 1000;
  const recent = (rateStore.get(ip) || []).filter((ts) => now - ts < windowMs);
  const sameIpCountBeforeThisRequest = recent.length;

  recent.push(now);
  rateStore.set(ip, recent);

  const body = (req.body || {}) as LeadBody;

  const name = toText(body.name);
  const phone = toText(body.phone);
  const email = toText(body.email);
  const service = toText(body.service);
  const postcode = normalisePostcode(toText(body.postcode));
  const message = toText(body.message);
  const pagePath = toText(body.pagePath) || "/";
  const turnstileToken = toText(body.turnstileToken);
  const honeypot = toText(body.hp || body.company || body.website || body.url);

  if (honeypot) {
    return res.status(200).json({ ok: true });
  }

  const validEmail = hasValidEmail(email);
  const validPhone = hasValidPhone(phone);
  const hasWorkingContact = validEmail || validPhone;

  if (!hasWorkingContact) {
    return res.status(400).json({
      ok: false,
      error: "Please provide a valid phone number or email address.",
    });
  }

  const botSignals: string[] = [];
  const reviewFlags: string[] = [];

  const gibberishName = name ? looksLikeGibberishName(name) : false;
  const randomMessage = message ? looksLikeRandomText(message) : false;
  const nonsensePostcode = postcode ? looksLikeNonsensePostcode(postcode) : false;
  const botEmail = validEmail ? looksLikeBotEmail(email) : false;
  const fakePhone = phone ? looksLikeFakePhone(phone) : false;

  if (gibberishName) {
    botSignals.push("Random generated name");
    reviewFlags.push("Name looks unusual");
  }

  if (randomMessage) {
    botSignals.push("Random generated message");
    reviewFlags.push("Message looks random");
  }

  if (nonsensePostcode) {
    botSignals.push("Nonsense postcode");
    reviewFlags.push("Postcode format not standard");
  } else if (postcode && !UK_POSTCODE_REGEX.test(postcode)) {
    reviewFlags.push("Postcode format not standard");
  }

  if (botEmail) {
    botSignals.push("Bot style email");
    reviewFlags.push("Email pattern looks automated");
  }

  if (fakePhone) {
    botSignals.push("Fake phone pattern");
    reviewFlags.push("Phone number looks unusual");
  }

  if (!name) {
    reviewFlags.push("Name missing");
  }

  if (!postcode) {
    reviewFlags.push("Postcode missing");
  }

  if (!service) {
    reviewFlags.push("Service missing");
  }

  if (!message) {
    reviewFlags.push("Message missing");
  }

  if (sameIpCountBeforeThisRequest >= 6) {
    botSignals.push("Repeated submissions from same IP");
    reviewFlags.push("Repeated submissions from same IP");
  }

  if (message && isObviousSpamMessage(message)) {
    botSignals.push("Spam keyword message");
  }

  const obviousMachineRubbish =
    botSignals.length >= 3 &&
    (gibberishName || randomMessage) &&
    (nonsensePostcode || botEmail || fakePhone || sameIpCountBeforeThisRequest >= 6);

  const intenseRepeatedAttack =
    sameIpCountBeforeThisRequest >= 20 &&
    (botSignals.length >= 1 || nonsensePostcode || randomMessage || gibberishName);

  if (obviousMachineRubbish || intenseRepeatedAttack) {
    console.warn("Silently swallowed lead.ts spam submission", {
      ip,
      botSignals,
      sameIpCountBeforeThisRequest,
      pagePath,
      name,
      email,
      phone,
      postcode,
    });

    return res.status(200).json({ ok: true });
  }

  try {
    const turnstileResult = await verifyTurnstile(turnstileToken, ip);

    if (!turnstileResult.ok) {
      return res.status(400).json({
        ok: false,
        error: turnstileResult.error || "Turnstile verification failed",
      });
    }
  } catch (e) {
    console.error("Turnstile verification error:", e);
    return res.status(500).json({ ok: false, error: "Turnstile verification error" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
  const TWILIO_WHATSAPP_FROM = process.env.TWILIO_WHATSAPP_FROM;
  const TWILIO_WHATSAPP_TO = process.env.TWILIO_WHATSAPP_TO;

  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
  }

  const needsReview = reviewFlags.length >= 2 || botSignals.length >= 1;
  const safeName = name || "Website visitor";
  const subjectPrefix = needsReview ? "[Needs Review] " : "";
  const subject = `${subjectPrefix}New WEDRAWPLANS enquiry from ${safeName}`;

  const leadText = [
    "New lead from the WEDRAWPLANS website:",
    "",
    `Needs review: ${needsReview ? "Yes" : "No"}`,
    `Page path: ${pagePath}`,
    `IP: ${ip}`,
    "",
    `Name: ${safeName}`,
    `Phone: ${phone || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Postcode: ${postcode || "Not provided"}`,
    `Service: ${service || "Not specified"}`,
    "",
    "Message:",
    message || "No message provided",
    "",
    "Review flags:",
    reviewFlags.length ? reviewFlags.join(" | ") : "None",
    "",
    "Bot signals:",
    botSignals.length ? botSignals.join(" | ") : "None",
  ].join("\n");

  const autoReplySubject = "Thank you for contacting WEDRAWPLANS";
  const autoReplyText = [
    `Dear ${safeName},`,
    "",
    "Thank you for contacting WEDRAWPLANS about architectural drawings.",
    "",
    "We have received your enquiry with the following details:",
    `• Phone: ${phone || "Not provided"}`,
    `• Email: ${email || "Not provided"}`,
    `• Postcode: ${postcode || "Not provided"}`,
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
    if (RESEND_API_KEY) {
      await sendEmailWithResend({
        apiKey: RESEND_API_KEY,
        from: `WEDRAWPLANS Leads <${FROM_EMAIL}>`,
        to: TO_EMAILS,
        replyTo: validEmail ? email : undefined,
        subject,
        text: leadText,
      });

      if (validEmail && !botEmail) {
        await sendEmailWithResend({
          apiKey: RESEND_API_KEY,
          from: `WEDRAWPLANS <${FROM_EMAIL}>`,
          to: [email],
          subject: autoReplySubject,
          text: autoReplyText,
        });
      }
    }

    if (
      TWILIO_ACCOUNT_SID &&
      TWILIO_AUTH_TOKEN &&
      TWILIO_WHATSAPP_FROM &&
      TWILIO_WHATSAPP_TO
    ) {
      const whatsappBody = [
        "New WEDRAWPLANS website lead:",
        "",
        `Needs review: ${needsReview ? "Yes" : "No"}`,
        `Name: ${safeName}`,
        `Phone: ${phone || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        `Postcode: ${postcode || "Not provided"}`,
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
  const payload: Record<string, unknown> = {
    from,
    to,
    subject,
    text,
  };

  if (replyTo) {
    payload.reply_to = replyTo;
  }

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const errorText = await resp.text().catch(() => "Unknown error");
    console.error("Resend API error:", resp.status, errorText);
  }
}
