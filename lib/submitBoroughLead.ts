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

type BoroughLeadObject = {
  name?: string;
  email?: string;
  phone?: string;
  postcode?: string;
  service?: string;
  message?: string;
  borough?: string;
  raw?: any;
};

function isFormEvent(arg: any): arg is React.FormEvent<HTMLFormElement> {
  return !!arg && typeof arg === "object" && "currentTarget" in arg && "preventDefault" in arg;
}

function coerceToString(v: any) {
  if (v === null || v === undefined) return "";
  return String(v);
}

function buildPayloadFromFormEvent(
  e: React.FormEvent<HTMLFormElement>,
  options?: { boroughName?: string }
) {
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

  return { payload, form, boroughName };
}

function buildPayloadFromObject(obj: BoroughLeadObject) {
  const boroughName = coerceToString(obj.borough);

  const payload = {
    name: obj.name ?? "",
    email: obj.email ?? "",
    phone: obj.phone ?? "",
    postcode: obj.postcode ?? "",
    service: obj.service ?? "",
    message: obj.message ?? "",
    borough: boroughName,
    raw: obj.raw ?? obj,
  };

  return { payload, boroughName };
}

// lib/submitBoroughLead.ts
export async function submitBoroughLead(
  eOrData: React.FormEvent<HTMLFormElement> | BoroughLeadObject,
  options?: { boroughName?: string }
) {
  let payload: any;
  let boroughName = "";
  let form: HTMLFormElement | null = null;

  if (isFormEvent(eOrData)) {
    eOrData.preventDefault();
    const built = buildPayloadFromFormEvent(eOrData, options);
    payload = built.payload;
    form = built.form;
    boroughName = built.boroughName;
  } else {
    const built = buildPayloadFromObject(eOrData || {});
    payload = built.payload;
    boroughName = built.boroughName;
  }

  try {
    const res = await fetch("/api/contact-resend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      fireGenerateLeadOnce({
        borough: boroughName || "London",
        project_type: coerceToString(payload.service),
        postcode: coerceToString(payload.postcode),
        has_phone: !!payload.phone,
        has_email: !!payload.email,
      });

      // Only show alert + reset for normal page forms
      if (form) {
        const label = boroughName ? `${boroughName} ` : "";
        alert(`Thank you — your ${label}enquiry has been sent. WEDRAWPLANS will contact you shortly.`);
        form.reset();
      }

      return true;
    }

    if (form) {
      alert("Something went wrong. Please try again or call us directly.");
    }

    return false;
  } catch {
    if (form) {
      alert("Network error — please try again.");
    }
    return false;
  }
}
