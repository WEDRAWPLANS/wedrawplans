import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | { success: true }
  | { success: false; error: string };

const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

function toText(value: unknown) {
  return value === null || value === undefined ? "" : String(value).trim();
}

function normalisePostcode(value: string) {
  const compact = value.trim().toUpperCase().replace(/\s+/g, "");
  if (compact.length <= 3) return compact;
  return compact.slice(0, -3) + " " + compact.slice(-3);
}

function getClientIp(req: NextApiRequest) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length) return forwarded.split(",")[0].trim();
  if (Array.isArray(forwarded) && forwarded.length) return forwarded[0];
  return req.socket.remoteAddress || "unknown";
}

type RateStore = Map<string, number[]>;
const globalForPropertyCapture = globalThis as unknown as {
  __wdpPropertyRateStore?: RateStore;
};
const rateStore =
  globalForPropertyCapture.__wdpPropertyRateStore || new Map<string, number[]>();
globalForPropertyCapture.__wdpPropertyRateStore = rateStore;

function isOwnSite(req: NextApiRequest) {
  const source = toText(req.headers.origin || req.headers.referer).toLowerCase();
  if (!source) return true;
  return (
    source.includes("wedrawplans.co.uk") ||
    source.includes("wedrawplans.vercel.app") ||
    source.includes("vercel.app") ||
    source.includes("localhost")
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  if (!isOwnSite(req)) {
    return res.status(403).json({ success: false, error: "Request not allowed" });
  }

  const body = (req.body || {}) as Record<string, unknown>;

  // Honeypot: accept silently so bots do not learn how the form is filtered.
  if (toText(body.company || body.website || body.url)) {
    return res.status(200).json({ success: true });
  }

  const postcode = normalisePostcode(toText(body.postcode));
  const street = toText(body.street);
  const houseNumber = toText(body.houseNumber);
  const name = toText(body.name);
  const email = toText(body.email);
  const phone = toText(body.phone);
  const district = toText(body.district);
  const pagePath = toText(body.pagePath) || "/";

  if (!UK_POSTCODE_REGEX.test(postcode)) {
    return res.status(400).json({ success: false, error: "Please enter a valid UK postcode." });
  }

  if (!street || street.length < 2) {
    return res.status(400).json({ success: false, error: "Please enter the street or building name." });
  }

  if (!name || name.length < 2) {
    return res.status(400).json({ success: false, error: "Please enter your name." });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ success: false, error: "Please enter a valid email address." });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const recent = (rateStore.get(ip) || []).filter((ts) => now - ts < windowMs);

  if (recent.length >= 20) {
    return res.status(429).json({ success: false, error: "Too many attempts. Please try again shortly." });
  }

  recent.push(now);
  rateStore.set(ip, recent);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY for property registration");
    return res.status(500).json({ success: false, error: "Property registration is temporarily unavailable." });
  }

  const address = [houseNumber, street].filter(Boolean).join(" ");

  const subject = `PROPERTY REGISTRATION — NOT A LEAD — ${postcode}`;
  const text = [
    "WEDRAWPLANS MY PROPERTY REGISTRATION",
    "THIS IS NOT A LEAD OR QUOTATION REQUEST.",
    "",
    `Postcode: ${postcode}`,
    `Property / street: ${address}`,
    `District: ${district || "Not provided"}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    `Page: ${pagePath}`,
    "",
    "Classification: PROPERTY REGISTRATION ONLY",
    "Do not count as a lead, quote, instruction, conversion or revenue.",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "WEDRAWPLANS Property <onboarding@resend.dev>",
        to: ["architectabbey@gmail.com"],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error("Property registration Resend error", response.status, errorText);
      return res.status(502).json({ success: false, error: "We could not save your property. Please try again." });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Property registration error", error);
    return res.status(500).json({ success: false, error: "We could not save your property. Please try again." });
  }
}
