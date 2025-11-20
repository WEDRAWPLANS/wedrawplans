import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Accept form submission but do nothing for now
  const { name, email, phone, notes } = req.body;

  return res.status(200).json({ success: true });
}
