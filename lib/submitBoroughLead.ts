import type React from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function safeSessionKey(key: string) {
  return `wdp_${key}`;
}

function getOnceFlag(key: string) {
  try {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem(safeSessionKey(key)) === "1";
  } catch {
    return false;
  }
}

function setOnceFlag(key: string) {
  try {
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(safeSessionKey(key), "1");
  } catch {
    // ignore
  }
}

function fireGenerateLeadOnce(params: Record<string, any>) {
  try {
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;

    const onceKey = "lead_submit_fired";
    if (getOnceFlag(onceKey)) return;
    setOnceFlag(onceKey);

    window.gtag("event", "generate_lead", { ...params, transport_type: "beacon" });
  } catch {
    // ignore
  }
}

// lib/submitBoroughLead.ts
export async function submitBoroughLead(
  e: React.FormEvent<HTMLFormElement>,
  options?: { boroughName?: string }
) {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const raw = Object.fromEntries(data.entries());

  const descriptionField =
    (data.get("message") as string | null) ||
    (data.get("description") as string | null) ||
    (data.get("projectDescription") as string | null) ||
    (data.get("projectDetails") as string | null) ||
    (data.get("details") as string | null) ||
    (data.get("brief") as string | null) ||
    (data.get("briefDescription") as string | null);

  const boroughName = options?.boroughName ? String(options.boroughName) : "";

  const payload = {
    name: data.get("name"),
    email: data.get("email"),
    phone: data.get("phone"),
    postcode: data.get("postcode") || data.get("boroughPostcode"),
    service: data.get("projectType") || data.get("service"),
    message: descriptionField,
    borough: boroughName,
    raw,
  };

  try {
    const res = await fetch("/api/contact-resend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      fireGenerateLeadOnce({
        borough: boroughName || "London",
        project_type: String(payload.service || ""),
        postcode: String(payload.postcode || ""),
        has_phone: !!payload.phone,
        has_email: !!payload.email,
      });

      const label = boroughName ? `${boroughName} ` : "";
      alert(`Thank you — your ${label}enquiry has been sent. WEDRAWPLANS will contact you shortly.`);
      form.reset();
      return true;
    }

    alert("Something went wrong. Please try again or call us directly.");
    return false;
  } catch {
    alert("Network error — please try again.");
    return false;
  }
}
