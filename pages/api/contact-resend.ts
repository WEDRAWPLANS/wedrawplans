import type { NextApiRequest, NextApiResponse } from "next";

type Data = { success: true } | { success: false; error: string };

type PostcodeIntel = {
  normalized: string;
  outward: string;
  borough: string | null;
  coverageLabel: string | null;
};

const SERVICE_OPTIONS = new Set([
  "House extension drawings",
  "Loft conversion drawings",
  "Planning drawings",
  "Building regulation drawings",
  "New build drawings",
  "Flat conversion drawings",
  "Other drawings",
]);

const UK_POSTCODE_REGEX =
  /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

const POSTCODE_RULES: Array<{
  test: (outward: string) => boolean;
  borough: string;
}> = [
  { test: (o) => /^SE1$/.test(o), borough: "Southwark" },
  { test: (o) => /^SE5$/.test(o), borough: "Southwark" },
  { test: (o) => /^SE15$/.test(o), borough: "Southwark" },
  { test: (o) => /^SE16$/.test(o), borough: "Southwark" },

  { test: (o) => /^SW4$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SW8$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SW9$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SW2$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SW16$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SE11$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SE19$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SE21$/.test(o), borough: "Lambeth" },
  { test: (o) => /^SE24$/.test(o), borough: "Lambeth" },

  { test: (o) => /^SW1/.test(o), borough: "Westminster" },
  { test: (o) => /^SW3$/.test(o), borough: "Kensington and Chelsea" },
  { test: (o) => /^SW5$/.test(o), borough: "Kensington and Chelsea" },
  { test: (o) => /^W8$/.test(o), borough: "Kensington and Chelsea" },
  { test: (o) => /^W1/.test(o), borough: "Westminster" },
  { test: (o) => /^WC/.test(o), borough: "Camden" },

  { test: (o) => /^NW1$/.test(o), borough: "Camden" },
  { test: (o) => /^NW3$/.test(o), borough: "Camden" },
  { test: (o) => /^NW5$/.test(o), borough: "Camden" },
  { test: (o) => /^N1$/.test(o), borough: "Islington" },
  { test: (o) => /^N5$/.test(o), borough: "Islington" },
  { test: (o) => /^N7$/.test(o), borough: "Islington" },
  { test: (o) => /^N19$/.test(o), borough: "Islington" },
  { test: (o) => /^N4$/.test(o), borough: "Haringey" },
  { test: (o) => /^N8$/.test(o), borough: "Haringey" },
  { test: (o) => /^N10$/.test(o), borough: "Haringey" },
  { test: (o) => /^N15$/.test(o), borough: "Haringey" },
  { test: (o) => /^N17$/.test(o), borough: "Haringey" },
  { test: (o) => /^N22$/.test(o), borough: "Haringey" },

  { test: (o) => /^E8$/.test(o), borough: "Hackney" },
  { test: (o) => /^E9$/.test(o), borough: "Hackney" },
  { test: (o) => /^E5$/.test(o), borough: "Hackney" },
  { test: (o) => /^N16$/.test(o), borough: "Hackney" },
  { test: (o) => /^E1$/.test(o), borough: "Tower Hamlets" },
  { test: (o) => /^E2$/.test(o), borough: "Tower Hamlets" },
  { test: (o) => /^E3$/.test(o), borough: "Tower Hamlets" },
  { test: (o) => /^E14$/.test(o), borough: "Tower Hamlets" },

  { test: (o) => /^E13$/.test(o), borough: "Newham" },
  { test: (o) => /^E15$/.test(o), borough: "Newham" },
  { test: (o) => /^E16$/.test(o), borough: "Newham" },
  { test: (o) => /^E6$/.test(o), borough: "Newham" },
  { test: (o) => /^IG1$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG2$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG3$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG4$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG5$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG6$/.test(o), borough: "Redbridge" },
  { test: (o) => /^IG7$/.test(o), borough: "Redbridge" },
  { test: (o) => /^E11$/.test(o), borough: "Waltham Forest" },
  { test: (o) => /^E17$/.test(o), borough: "Waltham Forest" },
  { test: (o) => /^E10$/.test(o), borough: "Waltham Forest" },
  { test: (o) => /^E4$/.test(o), borough: "Waltham Forest" },

  { test: (o) => /^EN5$/.test(o), borough: "Barnet" },
  { test: (o) => /^EN4$/.test(o), borough: "Barnet" },
  { test: (o) => /^N2$/.test(o), borough: "Barnet" },
  { test: (o) => /^N3$/.test(o), borough: "Barnet" },
  { test: (o) => /^N12$/.test(o), borough: "Barnet" },
  { test: (o) => /^NW4$/.test(o), borough: "Barnet" },
  { test: (o) => /^NW7$/.test(o), borough: "Barnet" },
  { test: (o) => /^HA8$/.test(o), borough: "Barnet" },

  { test: (o) => /^EN1$/.test(o), borough: "Enfield" },
  { test: (o) => /^EN2$/.test(o), borough: "Enfield" },
  { test: (o) => /^EN3$/.test(o), borough: "Enfield" },
  { test: (o) => /^N9$/.test(o), borough: "Enfield" },
  { test: (o) => /^N11$/.test(o), borough: "Enfield" },
  { test: (o) => /^N13$/.test(o), borough: "Enfield" },
  { test: (o) => /^N14$/.test(o), borough: "Enfield" },
  { test: (o) => /^N18$/.test(o), borough: "Enfield" },
  { test: (o) => /^N21$/.test(o), borough: "Enfield" },

  { test: (o) => /^HA1$/.test(o), borough: "Harrow" },
  { test: (o) => /^HA2$/.test(o), borough: "Harrow" },
  { test: (o) => /^HA3$/.test(o), borough: "Harrow" },
  { test: (o) => /^HA5$/.test(o), borough: "Harrow" },
  { test: (o) => /^HA7$/.test(o), borough: "Harrow" },

  { test: (o) => /^UB1$/.test(o), borough: "Ealing" },
  { test: (o) => /^UB2$/.test(o), borough: "Ealing" },
  { test: (o) => /^UB5$/.test(o), borough: "Ealing" },
  { test: (o) => /^W5$/.test(o), borough: "Ealing" },
  { test: (o) => /^W7$/.test(o), borough: "Ealing" },
  { test: (o) => /^NW10$/.test(o), borough: "Brent" },
  { test: (o) => /^HA0$/.test(o), borough: "Brent" },
  { test: (o) => /^HA9$/.test(o), borough: "Brent" },
  { test: (o) => /^NW2$/.test(o), borough: "Brent" },
  { test: (o) => /^NW6$/.test(o), borough: "Brent" },

  { test: (o) => /^TW1$/.test(o), borough: "Richmond upon Thames" },
  { test: (o) => /^TW9$/.test(o), borough: "Richmond upon Thames" },
  { test: (o) => /^TW10$/.test(o), borough: "Richmond upon Thames" },
  { test: (o) => /^KT1$/.test(o), borough: "Kingston upon Thames" },
  { test: (o) => /^KT2$/.test(o), borough: "Kingston upon Thames" },
  { test: (o) => /^SW19$/.test(o), borough: "Merton" },
  { test: (o) => /^SM4$/.test(o), borough: "Merton" },
  { test: (o) => /^SW17$/.test(o), borough: "Wandsworth" },
  { test: (o) => /^SW18$/.test(o), borough: "Wandsworth" },
  { test: (o) => /^SW11$/.test(o), borough: "Wandsworth" },
  { test: (o) => /^SW12$/.test(o), borough: "Wandsworth" },
  { test: (o) => /^SW15$/.test(o), borough: "Wandsworth" },
  { test: (o) => /^SW13$/.test(o), borough: "Richmond upon Thames" },
  { test: (o) => /^SW14$/.test(o), borough: "Richmond upon Thames" },

  { test: (o) => /^CR0$/.test(o), borough: "Croydon" },
  { test: (o) => /^CR2$/.test(o), borough: "Croydon" },
  { test: (o) => /^CR7$/.test(o), borough: "Croydon" },
  { test: (o) => /^SM1$/.test(o), borough: "Sutton" },
  { test: (o) => /^SM2$/.test(o), borough: "Sutton" },
  { test: (o) => /^SM3$/.test(o), borough: "Sutton" },
  { test: (o) => /^BR1$/.test(o), borough: "Bromley" },
  { test: (o) => /^BR2$/.test(o), borough: "Bromley" },
  { test: (o) => /^BR3$/.test(o), borough: "Bromley" },
  { test: (o) => /^BR4$/.test(o), borough: "Bromley" },
  { test: (o) => /^SE9$/.test(o), borough: "Greenwich" },
  { test: (o) => /^SE10$/.test(o), borough: "Greenwich" },
  { test: (o) => /^SE18$/.test(o), borough: "Greenwich" },
  { test: (o) => /^SE28$/.test(o), borough: "Greenwich" },
  { test: (o) => /^SE12$/.test(o), borough: "Lewisham" },
  { test: (o) => /^SE13$/.test(o), borough: "Lewisham" },
  { test: (o) => /^SE23$/.test(o), borough: "Lewisham" },
  { test: (o) => /^SE26$/.test(o), borough: "Lewisham" },
  { test: (o) => /^SE6$/.test(o), borough: "Lewisham" },
];

function normalisePostcode(value: string) {
  return value.trim().toUpperCase().replace(/\s+/g, " ");
}

function getOutwardCode(postcode: string) {
  const cleaned = postcode.toUpperCase().replace(/\s+/g, "");
  const match = cleaned.match(/^([A-Z]{1,2}\d[A-Z\d]?)/);
  return match ? match[1] : "";
}

function detectPostcodeIntel(postcode: string): PostcodeIntel {
  const normalized = normalisePostcode(postcode);
  const outward = getOutwardCode(normalized);
  const borough = outward
    ? POSTCODE_RULES.find((rule) => rule.test(outward))?.borough || null
    : null;

  return {
    normalized,
    outward,
    borough,
    coverageLabel: borough
      ? `Serving ${outward} • ${borough} area`
      : outward
      ? `Serving ${outward} area`
      : null,
  };
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

function scoreLead(input: {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  borough: string | null;
  timeTakenMs?: number | null;
}) {
  let score = 0;

  if (input.name.length >= 2) score += 15;
  if (EMAIL_REGEX.test(input.email)) score += 20;
  if (input.phone.replace(/[^\d+]/g, "").length >= 10) score += 20;
  if (UK_POSTCODE_REGEX.test(input.postcode)) score += 20;
  if (SERVICE_OPTIONS.has(input.service)) score += 15;
  if (input.borough) score += 5;
  if (typeof input.timeTakenMs === "number" && input.timeTakenMs >= 2500) score += 5;

  return Math.min(score, 100);
}

function getLeadBand(score: number) {
  if (score >= 85) return "High";
  if (score >= 65) return "Medium";
  return "Low";
}

function isSuspiciousMessage(message: string) {
  const v = message.toLowerCase();
  const badPatterns = [
    "seo service",
    "crypto",
    "telegram",
    "forex",
    "backlink",
    "guest post",
    "casino",
    "viagra",
    "loan",
    "marketing agency",
  ];
  return badPatterns.some((p) => v.includes(p));
}

type RateStore = Map<string, number[]>;
const globalForRateLimit = globalThis as unknown as {
  __wdpRateStore?: RateStore;
};

const rateStore: RateStore = globalForRateLimit.__wdpRateStore || new Map();
globalForRateLimit.__wdpRateStore = rateStore;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;

  const recent = (rateStore.get(ip) || []).filter((ts) => now - ts < windowMs);
  if (recent.length >= maxRequests) {
    return res
      .status(429)
      .json({ success: false, error: "Too many requests. Please try again later." });
  }
  recent.push(now);
  rateStore.set(ip, recent);

  const body = (req.body as any) || {};

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();
  const service = String(body.service || "").trim();
  const postcode = String(body.postcode || "").trim();
  const hp = String(body.hp || body.company || "").trim();
  const timeTakenMs =
    typeof body.timeTakenMs === "number"
      ? body.timeTakenMs
      : Number(body.timeTakenMs || 0) || null;

  if (hp) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !phone || !service || !postcode) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields." });
  }

  if (name.length < 2 || name.length > 80) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid name." });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid email address." });
  }

  if (phone.replace(/[^\d+]/g, "").length < 10) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid phone number." });
  }

  if (!UK_POSTCODE_REGEX.test(postcode)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid postcode." });
  }

  if (!SERVICE_OPTIONS.has(service)) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid service." });
  }

  if (typeof timeTakenMs === "number" && timeTakenMs > 0 && timeTakenMs < 2500) {
    return res
      .status(400)
      .json({ success: false, error: "Submission rejected." });
  }

  if (message && isSuspiciousMessage(message)) {
    return res
      .status(400)
      .json({ success: false, error: "Submission rejected." });
  }

  const postcodeIntel = detectPostcodeIntel(postcode);
  const borough = String(body.borough || postcodeIntel.borough || "").trim() || null;
  const coverageLabel =
    String(body.coverageLabel || postcodeIntel.coverageLabel || "").trim() || null;
  const outwardCode =
    String(body.outwardCode || postcodeIntel.outward || "").trim() || null;

  const leadScore = scoreLead({
    name,
    email,
    phone,
    postcode: normalisePostcode(postcode),
    service,
    borough,
    timeTakenMs,
  });

  const leadBand = getLeadBand(leadScore);

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return res
        .status(500)
        .json({ success: false, error: "Email service not configured." });
    }

    const fromAddress = "WeDrawPlans <onboarding@resend.dev>";
    const toAddresses = ["architectabbey@gmail.com"];

    const subject =
      `New enquiry from ${name} via wedrawplans.com` +
      `${borough ? ` (${borough})` : ""}` +
      ` [${leadBand} Lead ${leadScore}/100]`;

    const textLines = [
      "New website enquiry from wedrawplans.com",
      "",
      `Lead score: ${leadScore}/100`,
      `Lead quality: ${leadBand}`,
      `Detected borough: ${borough || "Not detected"}`,
      `Detected outward code: ${outwardCode || "Not detected"}`,
      `Coverage message: ${coverageLabel || "Not available"}`,
      `Time taken: ${typeof timeTakenMs === "number" ? `${timeTakenMs} ms` : "Unknown"}`,
      `IP: ${ip}`,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Postcode: ${normalisePostcode(postcode)}`,
      `Service: ${service}`,
      `Borough: ${borough || "Not specified"}`,
      "",
      "Main message / description:",
      message || "Quick quote from homepage hero form",
      "",
      "All submitted form fields:",
      JSON.stringify(body, null, 2),
    ];

    const text = textLines.join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: toAddresses,
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      const responseBody = await response.text();
      console.error("Resend error:", response.status, responseBody);
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
