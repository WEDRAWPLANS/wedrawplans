import type { NextApiRequest, NextApiResponse } from "next";

type LookupResponse =
  | {
      success: true;
      postcode: string;
      district: string | null;
      ward: string | null;
      parish: string | null;
      region: string | null;
      country: string | null;
    }
  | { success: false; error: string };

const UK_POSTCODE_REGEX = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;

function normalisePostcode(value: string) {
  const compact = value.trim().toUpperCase().replace(/\s+/g, "");
  if (compact.length <= 3) return compact;
  return compact.slice(0, -3) + " " + compact.slice(-3);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LookupResponse>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const raw = Array.isArray(req.query.postcode)
    ? req.query.postcode[0]
    : String(req.query.postcode || "");

  const postcode = normalisePostcode(raw);

  if (!UK_POSTCODE_REGEX.test(postcode)) {
    return res.status(400).json({ success: false, error: "Please enter a valid UK postcode." });
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4500);

  try {
    const response = await fetch(
      "https://api.postcodes.io/postcodes/" + encodeURIComponent(postcode),
      { signal: controller.signal }
    );

    const data = (await response.json().catch(() => null)) as any;

    if (!response.ok || data?.status !== 200 || !data?.result) {
      return res.status(404).json({ success: false, error: "We could not verify that postcode." });
    }

    const result = data.result;

    return res.status(200).json({
      success: true,
      postcode: normalisePostcode(result.postcode || postcode),
      district: result.admin_district || null,
      ward: result.admin_ward || null,
      parish: result.parish || null,
      region: result.region || null,
      country: result.country || null,
    });
  } catch (error) {
    console.error("postcode lookup failed", error);
    return res.status(503).json({
      success: false,
      error: "Postcode lookup is temporarily unavailable. Please try again.",
    });
  } finally {
    clearTimeout(timer);
  }
}
