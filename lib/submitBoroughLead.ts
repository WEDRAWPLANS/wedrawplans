import type React from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const PHONE_FALLBACK_URL = "tel:+442036548508";
const WHATSAPP_FALLBACK_URL =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20need%20help%20with%20my%20drawing%20enquiry.";

const EMAIL_FORMAT = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidLeadEmail(value: string) {
  const email = value.trim();
  return email.length <= 254 && EMAIL_FORMAT.test(email);
}

// Only fixed, non-personal event values are passed to GA4.
function trackFormSubmitError(reason: "invalid_email" | "server_rejected" | "network_error") {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "form_submit_error", {
        form_name: "borough_quote",
        page_path: getPagePath(),
        reason,
      });
    }
  } catch {
    // Analytics must never prevent an enquiry or its fallback.
  }
}

function clearSubmissionError(form: HTMLFormElement | null) {
  form?.querySelector("[data-wdp-submission-error]")?.remove();
}

function displaySubmissionError(form: HTMLFormElement | null, message: string) {
  if (!form || typeof document === "undefined") return;
  clearSubmissionError(form);

  const notice = document.createElement("div");
  notice.setAttribute("data-wdp-submission-error", "");
  notice.setAttribute("role", "alert");
  notice.className = "mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900";

  const explanation = document.createElement("p");
  explanation.textContent = message;
  notice.appendChild(explanation);

  const actions = document.createElement("div");
  actions.className = "mt-3 flex flex-wrap gap-3";
  for (const [url, label] of [
    [PHONE_FALLBACK_URL, "Call 020 3654 8508"],
    [WHATSAPP_FALLBACK_URL, "Message on WhatsApp"],
  ]) {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = label;
    link.className = "inline-flex min-h-11 items-center rounded-lg bg-white px-3 py-2 font-semibold text-red-900 underline";
    if (url === WHATSAPP_FALLBACK_URL) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    actions.appendChild(link);
  }
  notice.appendChild(actions);
  form.appendChild(notice);
}

function fireGenerateLead(params: Record<string, any>) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // Once per confirmed successful server response, not once per browser session.
      window.gtag("event", "generate_lead", {
        ...params,
        transport_type: "beacon",
      });
    }
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
  hp?: string;
  website?: string;
  formStartedAt?: number | string;
  raw?: any;
};

function isFormEvent(arg: any): arg is React.FormEvent<HTMLFormElement> {
  return !!arg && typeof arg === "object" && "currentTarget" in arg && "preventDefault" in arg;
}

function coerceToString(v: any) {
  if (v === null || v === undefined) return "";
  return String(v).trim();
}

function firstNonEmpty(...values: any[]) {
  for (const value of values) {
    const text = coerceToString(value);
    if (text) return text;
  }
  return "";
}

function getNow() {
  return Date.now();
}

function getPagePath() {
  try {
    if (typeof window === "undefined") return "";
    return window.location.pathname || "";
  } catch {
    return "";
  }
}

function getUserAgent() {
  try {
    if (typeof window === "undefined") return "";
    return navigator.userAgent || "";
  } catch {
    return "";
  }
}

function parseStartedAt(value: FormDataEntryValue | null) {
  const raw = coerceToString(value);
  if (!raw) return 0;
  const num = Number(raw);
  return Number.isFinite(num) && num > 0 ? num : 0;
}

function getTimeTakenMs(startedAt: number) {
  if (!startedAt) return 0;
  const delta = getNow() - startedAt;
  return delta > 0 ? delta : 0;
}

function buildPayloadFromFormEvent(
  e: React.FormEvent<HTMLFormElement>,
  options?: { boroughName?: string }
) {
  const form = e.currentTarget;
  const data = new FormData(form);
  const raw = Object.fromEntries(data.entries());

  const boroughName = firstNonEmpty(
    options?.boroughName,
    data.get("borough"),
    data.get("boroughName"),
    data.get("area"),
    data.get("location")
  );

  const startedAt = parseStartedAt(
    data.get("formStartedAt") || data.get("startedAt")
  );

  const payload = {
    name: firstNonEmpty(
      data.get("name"),
      data.get("fullName"),
      data.get("fullname"),
      data.get("clientName")
    ),
    email: firstNonEmpty(
      data.get("email"),
      data.get("emailAddress")
    ),
    phone: firstNonEmpty(
      data.get("phone"),
      data.get("mobile"),
      data.get("telephone"),
      data.get("tel"),
      data.get("phoneNumber")
    ),
    postcode: firstNonEmpty(
      data.get("postcode"),
      data.get("postCode"),
      data.get("boroughPostcode"),
      data.get("zip"),
      data.get("areaPostcode")
    ),
    service: firstNonEmpty(
      data.get("projectType"),
      data.get("service"),
      data.get("serviceType"),
      data.get("project"),
      data.get("projectTypeRequested")
    ),
    message: firstNonEmpty(
      data.get("message"),
      data.get("description"),
      data.get("projectDescription"),
      data.get("projectDetails"),
      data.get("details"),
      data.get("brief"),
      data.get("briefDescription"),
      data.get("comments"),
      data.get("notes"),
      data.get("enquiry"),
      data.get("enquiryMessage")
    ),
    borough: boroughName,
    hp: firstNonEmpty(
      data.get("hp"),
      data.get("website"),
      data.get("company")
    ),
    formStartedAt: startedAt || "",
    timeTakenMs: getTimeTakenMs(startedAt),
    pagePath: getPagePath(),
    userAgent: getUserAgent(),
    raw,
  };

  return { payload, form, boroughName };
}

function buildPayloadFromObject(obj: BoroughLeadObject) {
  const boroughName = coerceToString(obj.borough);

  const startedAtRaw =
    typeof obj.formStartedAt === "number"
      ? obj.formStartedAt
      : Number(coerceToString(obj.formStartedAt));

  const startedAt =
    Number.isFinite(startedAtRaw) && startedAtRaw > 0 ? startedAtRaw : 0;

  const payload = {
    name: coerceToString(obj.name),
    email: coerceToString(obj.email),
    phone: coerceToString(obj.phone),
    postcode: coerceToString(obj.postcode),
    service: coerceToString(obj.service),
    message: coerceToString(obj.message),
    borough: boroughName,
    hp: firstNonEmpty(obj.hp, obj.website),
    formStartedAt: startedAt || "",
    timeTakenMs: getTimeTakenMs(startedAt),
    pagePath: getPagePath(),
    userAgent: getUserAgent(),
    raw: obj.raw ?? obj,
  };

  return { payload, boroughName };
}

export async function submitBoroughLead(
  eOrData: React.FormEvent<HTMLFormElement> | BoroughLeadObject,
  options?: { boroughName?: string; showFormAlerts?: boolean }
) {
  const showFormAlerts = options?.showFormAlerts !== false;
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

  clearSubmissionError(form);
  if (!isValidLeadEmail(coerceToString(payload.email))) {
    trackFormSubmitError("invalid_email");
    displaySubmissionError(form, "Please enter a valid email address to receive your quote. Phone is optional.");
    return false;
  }

  try {
    const res = await fetch("/api/contact-resend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    let responseData: any = null;
    let responseText = "";

    try {
      responseText = await res.text();
      responseData = responseText ? JSON.parse(responseText) : null;
    } catch {
      responseData = responseText || null;
    }

    const acceptedByServer = res.ok && responseData?.success === true;

    if (!acceptedByServer) {
      console.warn("submitBoroughLead rejected", { status: res.status });
      trackFormSubmitError("server_rejected");
      displaySubmissionError(form, "We couldn't send your enquiry. Please try again or use one of the contact options below.");
      return false;
    }

    fireGenerateLead({
      borough: boroughName || "London",
      project_type: coerceToString(payload.service),
      // No customer contact details or postcodes in GA4 events.
      has_phone: !!payload.phone,
      has_email: !!payload.email,
      page_path: coerceToString(payload.pagePath),
    });

    if (form) {
      if (showFormAlerts) {
        const label = boroughName ? `${boroughName} ` : "";
        alert(`Thank you — your ${label}enquiry has been sent. WEDRAWPLANS will contact you shortly.`);
      }
      form.reset();
    }

    return true;
  } catch {
    console.warn("submitBoroughLead network error");
    trackFormSubmitError("network_error");
    displaySubmissionError(form, "We couldn't connect to send your enquiry. Please try again or use one of the contact options below.");
    return false;
  }
}
