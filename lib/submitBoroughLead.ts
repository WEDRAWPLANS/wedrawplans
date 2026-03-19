Abbey, from **this file alone**, I do **not** see a fatal bug that would break only the borough forms by itself.

This submit helper is broadly fine.

What I **do** see is the real weakness:

### What this file depends on

For borough forms to work, the page inputs must use names that match **exactly** one of these:

* `name`
* `email`
* `phone`
* `postcode` or `boroughPostcode`
* `projectType` or `service`
* one of:

  * `message`
  * `description`
  * `projectDescription`
  * `projectDetails`
  * `details`
  * `brief`
  * `briefDescription`

If a borough page uses something else like:

* `fullName`
* `mobile`
* `tel`
* `postCode`
* `project`
* `serviceType`
* `comments`

then this helper will send blanks to `/api/contact-resend`, and your API may reject it.
That would produce exactly the **Something went wrong** message you saw.

### Biggest likely issue

This line:

```ts
body: JSON.stringify(payload),
```

is only as good as the payload that was built from the form.

So the real question is not mainly this file.
The real question is:

**Are the borough page field names matching this helper?**

Because homepage may be using the correct names, while borough pages may not.

### Another important issue

This helper gives you **no useful error detail** back.

You only show:

* `Something went wrong. Please try again or call us directly.`
* `Network error — please try again.`

So even if the API is returning a clear reason like:

* missing name
* missing email
* invalid JSON
* validation failed

you never see it.

That makes debugging much harder.

---

## My conclusion from this file

### Not likely the root cause:

* `fetch("/api/contact-resend")` itself
* GA tracking
* sessionStorage once flag
* `preventDefault()`

### Very likely root cause:

* **borough page input names do not match this submit helper**
* or `/api/contact-resend` expects fields the borough forms are not sending

---

## What I need next

Send me these 2 files and I will pinpoint it properly:

1. **one full borough page that is failing**
2. **`/pages/api/contact-resend.ts`** or wherever that API route is

That will let me tell you exactly why homepage works and borough pages fail.

---

## One thing I can already improve now

Here is a **better replacement** for your `submitBoroughLead.ts` that:

* accepts more possible field names
* shows the real server error
* logs the payload properly
* is safer for debugging

Copy-paste this whole file:

```ts
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
    raw,
  };

  return { payload, form, boroughName };
}

function buildPayloadFromObject(obj: BoroughLeadObject) {
  const boroughName = coerceToString(obj.borough);

  const payload = {
    name: coerceToString(obj.name),
    email: coerceToString(obj.email),
    phone: coerceToString(obj.phone),
    postcode: coerceToString(obj.postcode),
    service: coerceToString(obj.service),
    message: coerceToString(obj.message),
    borough: boroughName,
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
```

## Why this helps

This version will immediately tell us much more:

* whether the server is rejecting the request
* what payload is being sent
* whether borough forms use different field names

Send me the borough page and the API file next. That is where the real fault almost certainly is.
