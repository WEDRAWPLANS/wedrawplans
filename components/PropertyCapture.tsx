import React, { FormEvent, useMemo, useState } from "react";
import Link from "next/link";

type LookupResult = {
  postcode: string;
  district: string | null;
  ward: string | null;
  parish: string | null;
  region: string | null;
  country: string | null;
};

function formatPostcode(value: string) {
  const compact = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
  if (compact.length <= 3) return compact;
  return compact.slice(0, -3) + " " + compact.slice(-3);
}

function validPostcode(value: string) {
  return /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(value.trim());
}

function fire(name: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (typeof w.gtag === "function") w.gtag("event", name, params);
}

export default function PropertyCapture({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [postcode, setPostcode] = useState("");
  const [lookup, setLookup] = useState<LookupResult | null>(null);
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [lookupNote, setLookupNote] = useState("");

  const progress = useMemo(() => {
    if (step === 1) return 25;
    if (step === 2) return 50;
    if (step === 3) return 75;
    return 100;
  }, [step]);

  async function checkPostcode(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLookupNote("");

    const clean = formatPostcode(postcode);
    if (!validPostcode(clean)) {
      setError("Please enter a valid UK postcode.");
      return;
    }

    setBusy(true);
    fire("property_registration_start", { source: "postcode_first" });

    try {
      const response = await fetch("/api/postcode-lookup?postcode=" + encodeURIComponent(clean));
      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setPostcode(data.postcode || clean);
        setLookup(data);
        setLookupNote(
          data.district
            ? `✓ Postcode found · ${data.district}`
            : "✓ Postcode found"
        );
        fire("property_postcode_confirmed", {
          source: "postcode_first",
          district_known: Boolean(data.district),
        });
      } else {
        setPostcode(clean);
        setLookup(null);
        setLookupNote("Postcode format accepted — add your street below.");
      }

      setStep(2);
    } catch {
      setPostcode(clean);
      setLookup(null);
      setLookupNote("Postcode format accepted — add your street below.");
      setStep(2);
    } finally {
      setBusy(false);
    }
  }

  function continueAddress(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (street.trim().length < 2) {
      setError("Please enter the street or building name.");
      return;
    }

    setStep(3);
  }

  async function saveProperty(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setBusy(true);

    try {
      const response = await fetch("/api/property-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postcode,
          street: street.trim(),
          houseNumber: houseNumber.trim(),
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          district: lookup?.district || "",
          pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
          company: "",
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        setError(data?.error || "We could not save your property. Please try again.");
        return;
      }

      fire("property_registration_complete", {
        source: "postcode_first",
        has_phone: Boolean(phone.trim()),
        has_house_number: Boolean(houseNumber.trim()),
      });

      setStep(4);
    } catch {
      setError("Network error — please try again.");
    } finally {
      setBusy(false);
    }
  }

  const panelClass = compact
    ? "rounded-[18px] border border-[#dce7e3] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
    : "rounded-[24px] border border-[#dce7e3] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.10)] sm:p-6";

  return (
    <section aria-labelledby="my-property-heading" className={panelClass}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#236f7b]">
            My Property
          </p>
          <h2 id="my-property-heading" className="mt-1 text-[22px] font-bold leading-tight text-[#193c43] sm:text-[26px]">
            Start with your postcode
          </h2>
          <p className="mt-2 max-w-[560px] text-[13px] leading-6 text-[#52686e]">
            Save your property in a few quick steps. This is not a quotation request and you do not need drawings or project details.
          </p>
        </div>
        <div className="hidden rounded-full bg-[#edf5f2] px-3 py-1 text-[11px] font-bold text-[#236f7b] sm:block">
          {step === 4 ? "Saved" : `Step ${step} of 3`}
        </div>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e8eeeb]">
        <div
          className="h-full rounded-full bg-[#236f7b] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {step === 1 && (
        <form onSubmit={checkPostcode} className="mt-5">
          <label htmlFor="property-postcode" className="block text-[13px] font-bold text-[#203e4a]">
            Property postcode
          </label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[19px]" aria-hidden="true">
                📍
              </span>
              <input
                id="property-postcode"
                autoComplete="postal-code"
                autoCapitalize="characters"
                spellCheck={false}
                inputMode="text"
                value={postcode}
                onChange={(e) => setPostcode(formatPostcode(e.target.value))}
                placeholder="e.g. SW18 5XX"
                className="h-14 w-full rounded-[14px] border border-[#b9cbc6] bg-[#fbfdfc] pl-12 pr-4 text-[18px] font-semibold uppercase tracking-[0.04em] text-[#173e46] outline-none transition placeholder:font-normal placeholder:tracking-normal placeholder:text-[#87979a] focus:border-[#236f7b] focus:ring-2 focus:ring-[#236f7b]/20"
                autoFocus
              />
            </div>
            <button
              type="submit"
              disabled={busy}
              className="min-h-14 rounded-[14px] bg-[#236f7b] px-7 text-[14px] font-extrabold uppercase tracking-[0.10em] text-white shadow-[0_8px_20px_rgba(35,111,123,0.20)] transition hover:bg-[#194e5b] disabled:opacity-60"
            >
              {busy ? "Finding…" : "Find my property →"}
            </button>
          </div>
          <p className="mt-2 text-[12px] leading-5 text-[#60747a]">
            Postcode first. We only ask for contact details after your property area is confirmed.
          </p>
          {error ? <p role="alert" className="mt-3 text-[13px] font-medium text-red-700">{error}</p> : null}
        </form>
      )}

      {step === 2 && (
        <form onSubmit={continueAddress} className="mt-5 space-y-4">
          <div className="rounded-[14px] bg-[#edf7f3] px-4 py-3 text-[13px] font-semibold text-[#2f6f55]">
            {lookupNote || `✓ ${postcode}`}
          </div>

          <div>
            <label htmlFor="property-street" className="block text-[13px] font-bold text-[#203e4a]">
              Street or building
            </label>
            <input
              id="property-street"
              autoComplete="address-line1"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="e.g. Standen Road"
              className="mt-2 h-13 w-full rounded-[14px] border border-[#b9cbc6] bg-white px-4 py-3 text-[16px] text-[#173e46] outline-none focus:border-[#236f7b] focus:ring-2 focus:ring-[#236f7b]/20"
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="property-number" className="block text-[13px] font-bold text-[#203e4a]">
              House / flat number <span className="font-normal text-[#60747a]">(optional)</span>
            </label>
            <input
              id="property-number"
              autoComplete="address-line2"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              placeholder="e.g. 98 or Flat 2"
              className="mt-2 h-13 w-full rounded-[14px] border border-[#b9cbc6] bg-white px-4 py-3 text-[16px] text-[#173e46] outline-none focus:border-[#236f7b] focus:ring-2 focus:ring-[#236f7b]/20"
            />
          </div>

          {error ? <p role="alert" className="text-[13px] font-medium text-red-700">{error}</p> : null}

          <div className="flex gap-2">
            <button type="button" onClick={() => setStep(1)} className="min-h-12 rounded-full border border-[#b9cbc6] px-5 text-[13px] font-bold text-[#36545a]">
              Back
            </button>
            <button type="submit" className="min-h-12 flex-1 rounded-full bg-[#236f7b] px-5 text-[14px] font-bold text-white">
              Continue →
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={saveProperty} className="mt-5 space-y-3">
          <div className="rounded-[14px] border border-[#dce7e3] bg-[#fafcfb] px-4 py-3 text-[13px] leading-5 text-[#36545a]">
            <strong>{[houseNumber, street].filter(Boolean).join(" ")}</strong>
            <br />
            {postcode}
            {lookup?.district ? <> · {lookup.district}</> : null}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="property-name" className="block text-[12px] font-bold text-[#203e4a]">Your name</label>
              <input
                id="property-name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 h-12 w-full rounded-[12px] border border-[#b9cbc6] px-3.5 text-[16px] outline-none focus:border-[#236f7b]"
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="property-email" className="block text-[12px] font-bold text-[#203e4a]">Email address</label>
              <input
                id="property-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 h-12 w-full rounded-[12px] border border-[#b9cbc6] px-3.5 text-[16px] outline-none focus:border-[#236f7b]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="property-phone" className="block text-[12px] font-bold text-[#203e4a]">
              Telephone <span className="font-normal text-[#60747a]">(optional)</span>
            </label>
            <input
              id="property-phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1.5 h-12 w-full rounded-[12px] border border-[#b9cbc6] px-3.5 text-[16px] outline-none focus:border-[#236f7b]"
            />
          </div>

          {error ? <p role="alert" className="text-[13px] font-medium text-red-700">{error}</p> : null}

          <div className="flex gap-2 pt-1">
            <button type="button" onClick={() => setStep(2)} className="min-h-12 rounded-full border border-[#b9cbc6] px-5 text-[13px] font-bold text-[#36545a]">
              Back
            </button>
            <button type="submit" disabled={busy} className="min-h-12 flex-1 rounded-full bg-[#236f7b] px-5 text-[14px] font-bold text-white disabled:opacity-60">
              {busy ? "Saving…" : "Save my property →"}
            </button>
          </div>

          <p className="text-center text-[11px] leading-5 text-[#60747a]">
            Property registration only. This does not request a quotation or commit you to any service.
          </p>
        </form>
      )}

      {step === 4 && (
        <div className="mt-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e7f5ee] text-[26px]" aria-hidden="true">✓</div>
          <h3 className="mt-4 text-[22px] font-bold text-[#193c43]">Property saved</h3>
          <p className="mx-auto mt-2 max-w-[520px] text-[14px] leading-6 text-[#52686e]">
            We have saved your property details. You can stop here, or continue only if you want help with drawings or planning.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-2 sm:flex-row">
            <Link href="/#home-quote" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#236f7b] px-6 text-[13px] font-bold text-white">
              I need drawings too →
            </Link>
            <button
              type="button"
              onClick={() => {
                setStep(1);
                setPostcode("");
                setLookup(null);
                setStreet("");
                setHouseNumber("");
                setName("");
                setEmail("");
                setPhone("");
                setError("");
                setLookupNote("");
              }}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b9cbc6] px-6 text-[13px] font-bold text-[#36545a]"
            >
              Save another property
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
