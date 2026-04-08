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

    window.gtag("event", "generate_lead", {
      ...params,
      transport_type: "beacon",
    });
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

    let responseData: any = null;
    let responseText = "";

    try {
      responseText = await res.text();
      responseData = responseText ? JSON.parse(responseText) : null;
    } catch {
      responseData = responseText || null;
    }

    if (!res.ok) {
      console.error("submitBoroughLead failed", {
        status: res.status,
        statusText: res.statusText,
        payload,
        response: responseData,
      });

      const serverMessage =
        typeof responseData === "object" && responseData?.error
          ? String(responseData.error)
          : typeof responseData === "string" && responseData
            ? responseData
            : "Something went wrong. Please try again or call us directly.";

      if (form) {
        alert(serverMessage);
      }

      return false;
    }

    fireGenerateLeadOnce({
      borough: boroughName || "London",
      project_type: coerceToString(payload.service),
      postcode: coerceToString(payload.postcode),
      has_phone: !!payload.phone,
      has_email: !!payload.email,
      page_path: coerceToString(payload.pagePath),
    });

    if (form) {
      const label = boroughName ? `${boroughName} ` : "";
      alert(`Thank you — your ${label}enquiry has been sent. WEDRAWPLANS will contact you shortly.`);
      form.reset();
    }

    return true;
  } catch (error) {
    console.error("submitBoroughLead network error", {
      error,
      payload,
    });

    if (form) {
      alert("Network error — please try again.");
    }

    return false;
  }
}
