import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

type Data = { success: true } | { success: false; error: string };

type PostcodeIntel = {
  normalized: string;
  outward: string;
  borough: string | null;
  coverageLabel: string | null;
};

const KNOWN_SERVICE_OPTIONS = new Set([
  "House extension drawings",
  "Loft conversion drawings",
  "Planning drawings",
  "Building regulation drawings",
  "New build drawings",
  "Flat conversion drawings",
  "Other drawings",
  "General enquiry",
]);

const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

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

function toText(value: unknown) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

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
  const normalized = normalisePhone(value);
  const digitsOnly = normalized.replace(/[^\d]/g, "");
  return digitsOnly.length >= 10;
}

function normalizeService(value: string) {
  const raw = toText(value);
  if (!raw) return "General enquiry";

  const lower = raw.toLowerCase();

  if (KNOWN_SERVICE_OPTIONS.has(raw)) return raw;
  if (
    lower.includes("house extension") ||
    lower.includes("rear extension") ||
    lower.includes("side extension") ||
    lower.includes("wraparound")
  ) {
    return "House extension drawings";
  }
  if (lower.includes("loft")) {
    return "Loft conversion drawings";
  }
  if (lower.includes("planning")) {
    return "Planning drawings";
  }
  if (
    lower.includes("building regulation") ||
    lower.includes("building regs") ||
    lower.includes("building control")
  ) {
    return "Building regulation drawings";
  }
  if (lower.includes("new build")) {
    return "New build drawings";
  }
  if (
    lower.includes("flat conversion") ||
    lower.includes("conversion to flats") ||
    lower.includes("hmo")
  ) {
    return "Flat conversion drawings";
  }
  if (lower.includes("other")) {
    return "Other drawings";
  }

  return raw;
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
  ];
  return badPatterns.some((p) => v.includes(p));
}

function looksLikeDisposableEmail(email: string) {
  const v = email.toLowerCase();
  const disposableDomains = [
    "mailinator.com",
    "guerrillamail.com",
    "10minutemail.com",
    "tempmail.com",
    "temp-mail.org",
    "yopmail.com",
    "sharklasers.com",
  ];
  return disposableDomains.some((domain) => v.endsWith(`@${domain}`));
}

function hasManyDigits(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  return digits.length >= 6;
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

function looksLikeGibberishName(name: string) {
  const v = name.trim();
  if (!v) return false;
  if (v.length < 2) return true;
  if (/https?:\/\//i.test(v)) return true;
  if (/[@<>[\]{}_=+]/.test(v)) return true;
  if (/^\d+$/.test(v)) return true;
  if (!/[a-z]/i.test(v)) return true;
  if (hasManyDigits(v) && !/\s/.test(v)) return true;
  if (hasRepeatedConsonantRun(v)) return true;
  if (hasLongMixedCaseRandomness(v)) return true;
  return false;
}

function getOriginOrReferer(req: NextApiRequest) {
  const origin = toText(req.headers.origin);
  const referer = toText(req.headers.referer);
  return origin || referer || "";
}

function isLikelyFromOwnSite(req: NextApiRequest) {
  const source = getOriginOrReferer(req).toLowerCase();
  if (!source) return true;
  return (
    source.includes("wedrawplans.co.uk") ||
    source.includes("www.wedrawplans.co.uk") ||
    source.includes("vercel.app") ||
    source.includes("localhost")
  );
}

function scoreLead(input: {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  borough: string | null;
  timeTakenMs?: number | null;
  message: string;
  pagePath: string;
}) {
  let score = 0;

  if (input.name.length >= 2) score += 15;
  if (hasValidEmail(input.email)) score += 20;
  if (hasValidPhone(input.phone)) score += 20;
  if (UK_POSTCODE_REGEX.test(input.postcode)) score += 15;
  if (input.service.length >= 3) score += 10;
  if (input.borough) score += 5;
  if (input.message.length >= 10) score += 5;
  if (typeof input.timeTakenMs === "number" && input.timeTakenMs >= 2500) score += 5;
  if (input.pagePath.startsWith("/")) score += 5;

  return Math.min(score, 100);
}

function getLeadBand(score: number) {
  if (score >= 80) return "High";
  if (score >= 55) return "Medium";
  return "Low";
}

function makeFingerprint(input: {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
  pagePath: string;
}) {
  const base = [
    input.name.toLowerCase(),
    input.email.toLowerCase(),
    normalisePhone(input.phone),
    normalisePostcode(input.postcode || ""),
    input.service.toLowerCase(),
    input.message.toLowerCase(),
    input.pagePath.toLowerCase(),
  ].join("|");

  return crypto.createHash("sha1").update(base).digest("hex");
}

type RateStore = Map<string, number[]>;
type DuplicateStore = Map<string, number>;

const globalForSpamProtection = globalThis as unknown as {
  __wdpRateStore?: RateStore;
  __wdpDuplicateStore?: DuplicateStore;
};

const rateStore: RateStore = globalForSpamProtection.__wdpRateStore || new Map();
const duplicateStore: DuplicateStore = globalForSpamProtection.__wdpDuplicateStore || new Map();

globalForSpamProtection.__wdpRateStore = rateStore;
globalForSpamProtection.__wdpDuplicateStore = duplicateStore;

function cleanupOldEntries(now: number) {
  const rateWindowMs = 10 * 60 * 1000;
  const duplicateWindowMs = 60 * 60 * 1000;

  for (const [key, timestamps] of rateStore.entries()) {
    const kept = timestamps.filter((ts) => now - ts < rateWindowMs);
    if (kept.length) {
      rateStore.set(key, kept);
    } else {
      rateStore.delete(key);
    }
  }

  for (const [key, ts] of duplicateStore.entries()) {
    if (now - ts >= duplicateWindowMs) {
      duplicateStore.delete(key);
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const ip = getClientIp(req);
  const now = Date.now();

  cleanupOldEntries(now);

  const windowMs = 10 * 60 * 1000;
  const maxRequestsPerIp = 8;

  const recent = (rateStore.get(ip) || []).filter((ts) => now - ts < windowMs);
  if (recent.length >= maxRequestsPerIp) {
    return res.status(429).json({
      success: false,
      error: "Too many requests. Please try again later.",
    });
  }
  recent.push(now);
  rateStore.set(ip, recent);

  const body = (req.body as Record<string, unknown>) || {};

  const rawName = toText(body.name);
  const rawEmail = toText(body.email);
  const rawPhone = toText(body.phone);
  const rawMessage = toText(body.message);
  const rawService = toText(body.service);
  const rawPostcode = toText(body.postcode);
  const rawPagePath = toText(body.pagePath);
  const rawUserAgent = toText(body.userAgent) || toText(req.headers["user-agent"]);
  const hp = toText(body.hp || body.company || body.website);

  const parsedTimeTaken =
    typeof body.timeTakenMs === "number"
      ? body.timeTakenMs
      : Number(body.timeTakenMs || 0);

  const timeTakenMs =
    Number.isFinite(parsedTimeTaken) && parsedTimeTaken > 0
      ? parsedTimeTaken
      : null;

  if (hp) {
    return res.status(200).json({ success: true });
  }

  const email = rawEmail;
  const phone = rawPhone;
  const message = rawMessage;
  const service = normalizeService(rawService);
  const postcode = rawPostcode;
  const normalisedPostcode = postcode ? normalisePostcode(postcode) : "";

  const postcodeIntel = postcode
    ? detectPostcodeIntel(postcode)
    : {
        normalized: "",
        outward: "",
        borough: null,
        coverageLabel: null,
      };

  const borough = toText(body.borough) || postcodeIntel.borough || null;
  const coverageLabel = toText(body.coverageLabel) || postcodeIntel.coverageLabel || null;
  const outwardCode = toText(body.outwardCode) || postcodeIntel.outward || null;
  const pagePath = rawPagePath || "/";
  const validEmail = hasValidEmail(email);
  const validPhone = hasValidPhone(phone);
  const hasWorkingContact = validEmail || validPhone;
  const safeName = rawName || "Website visitor";

  const hardBlockReasons: string[] = [];
  const softFlags: string[] = [];

  if (!hasWorkingContact) {
    hardBlockReasons.push("No valid email or phone provided");
  }

  if (message && isObviousSpamMessage(message)) {
    hardBlockReasons.push("Message matched obvious spam keywords");
  }

  if (rawName && looksLikeGibberishName(rawName)) {
    softFlags.push("Name looks unusual");
  }

  if (email && !validEmail) {
    softFlags.push("Email format looks invalid");
  }

  if (validEmail && looksLikeDisposableEmail(email)) {
    softFlags.push("Disposable email domain");
  }

  if (phone && !validPhone) {
    softFlags.push("Phone number looks short");
  }

  if (postcode && !UK_POSTCODE_REGEX.test(normalisedPostcode)) {
    softFlags.push("Postcode format not standard");
  }

  if (!rawName) {
    softFlags.push("Name missing");
  }

  if (!rawService) {
    softFlags.push("Service missing");
  }

  if (!message) {
    softFlags.push("Message missing");
  }

  if (typeof timeTakenMs === "number" && timeTakenMs > 0 && timeTakenMs < 2500) {
    softFlags.push("Submitted very quickly");
  }

  if (!isLikelyFromOwnSite(req)) {
    softFlags.push("Origin or referer did not look like own site");
  }

  if (!rawUserAgent) {
    softFlags.push("User agent missing");
  }

  const leadScore = scoreLead({
    name: safeName,
    email,
    phone,
    postcode: normalisedPostcode,
    service,
    borough,
    timeTakenMs,
    message,
    pagePath,
  });

  const leadBand = getLeadBand(leadScore);

  const fingerprint = makeFingerprint({
    name: safeName,
    email,
    phone,
    postcode: normalisedPostcode,
    service,
    message,
    pagePath,
  });

  const duplicateSeenAt = duplicateStore.get(fingerprint);
  const duplicateWindowMs = 60 * 60 * 1000;
  const isDuplicate =
    typeof duplicateSeenAt === "number" && now - duplicateSeenAt < duplicateWindowMs;

  if (isDuplicate) {
    console.warn("Duplicate submission swallowed", {
      ip,
      fingerprint,
      name: safeName,
      email,
      phone,
      postcode: normalisedPostcode,
      pagePath,
    });
    return res.status(200).json({ success: true });
  }

  const probableBotAutoSwallow =
    looksLikeGibberishName(safeName) &&
    (!message || message.length < 6) &&
    (!postcode || !UK_POSTCODE_REGEX.test(normalisedPostcode)) &&
    typeof timeTakenMs === "number" &&
    timeTakenMs < 2500;

  if (hardBlockReasons.length > 0 || probableBotAutoSwallow) {
    console.warn("Blocked spam submission", {
      ip,
      hardBlockReasons,
      probableBotAutoSwallow,
      body,
    });
    return res.status(200).json({ success: true });
  }

  const needsReview =
    softFlags.length >= 2 ||
    leadScore < 45 ||
    (!rawName && !message) ||
    (!postcode && !message);

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return res.status(500).json({
        success: false,
        error: "Email service not configured.",
      });
    }

    const fromAddress = "WeDrawPlans <onboarding@resend.dev>";
    const toAddresses = ["architectabbey@gmail.com"];

    const subjectPrefix = needsReview ? "[Needs Review] " : "";
    const subject =
      `${subjectPrefix}New enquiry from ${safeName} via wedrawplans.co.uk` +
      `${borough ? ` (${borough})` : ""}` +
      ` [${leadBand} Lead ${leadScore}/100]`;

    const textLines = [
      "New website enquiry from wedrawplans.co.uk",
      "",
      `Lead score: ${leadScore}/100`,
      `Lead quality: ${leadBand}`,
      `Needs review: ${needsReview ? "Yes" : "No"}`,
      `Detected borough: ${borough || "Not detected"}`,
      `Detected outward code: ${outwardCode || "Not detected"}`,
      `Coverage message: ${coverageLabel || "Not available"}`,
      `Page path: ${pagePath || "Unknown"}`,
      `Time taken: ${typeof timeTakenMs === "number" ? `${timeTakenMs} ms` : "Unknown"}`,
      `IP: ${ip}`,
      `User agent: ${rawUserAgent || "Not available"}`,
      `Origin/referer check: ${isLikelyFromOwnSite(req) ? "Looks normal" : "Unusual"}`,
      "",
      `Name: ${safeName}`,
      `Email: ${email || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Postcode: ${normalisedPostcode || "Not provided"}`,
      `Service: ${service || "General enquiry"}`,
      `Raw service submitted: ${rawService || "Not provided"}`,
      `Borough: ${borough || "Not specified"}`,
      "",
      "Main message / description:",
      message || "Quick quote from website form",
      "",
      "Soft review flags:",
      softFlags.length ? softFlags.join(" | ") : "None",
      "",
      "All submitted form fields:",
      JSON.stringify(body, null, 2),
    ];

    const resendPayload: Record<string, unknown> = {
      from: fromAddress,
      to: toAddresses,
      subject,
      text: textLines.join("\n"),
    };

    if (validEmail) {
      resendPayload.reply_to = email;
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resendPayload),
    });

    if (!response.ok) {
      const responseBody = await response.text();
      console.error("Resend error:", response.status, responseBody);
      return res.status(500).json({ success: false, error: "Failed to send email." });
    }

    duplicateStore.set(fingerprint, now);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending email:", err);
    return res.status(500).json({
      success: false,
      error: "Unexpected error sending email.",
    });
  }
}
