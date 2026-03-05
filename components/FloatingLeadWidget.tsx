import React, { useEffect, useMemo, useRef, useState } from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

type FloatingLeadWidgetProps = {
  boroughName?: string;
  serviceLabel?: string;
  logoSrc?: string; // default: /images/wedrawplans-logo.png
};

function isValidUkPostcodeLoose(value: string) {
  const v = value.trim().toUpperCase();
  if (!v) return false;
  return /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/.test(v);
}

function normalisePhone(value: string) {
  const raw = value.trim();
  if (!raw) return "";
  const keepPlus = raw.startsWith("+");
  const digits = raw.replace(/[^\d]/g, "");
  return keepPlus ? `+${digits}` : digits;
}

export default function FloatingLeadWidget({
  boroughName,
  serviceLabel,
  logoSrc,
}: FloatingLeadWidgetProps) {
  const effectiveBorough = (boroughName && boroughName.trim()) || "London";
  const effectiveService = (serviceLabel && serviceLabel.trim()) || "Planning drawings";
  const effectiveLogoSrc = (logoSrc && logoSrc.trim()) || "/images/wedrawplans-logo.png";

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [logoFailed, setLogoFailed] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [projectType, setProjectType] = useState("");

  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const pagePath = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location?.pathname || "";
  }, []);

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia && window.matchMedia("(max-width: 640px)").matches;
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    lastActiveElementRef.current = (document.activeElement as HTMLElement) || null;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === "Tab") {
        const modal = document.getElementById("wdp-lead-modal");
        if (!modal) return;

        const focusables = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 50);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setError(null);
    setSent(false);
  }, [open]);

  const canSubmit = useMemo(() => {
    const n = name.trim().length >= 2;
    const p = normalisePhone(phone).length >= 9;
    const e = email.trim().includes("@") && email.trim().includes(".");
    const pc = isValidUkPostcodeLoose(postcode);
    const pt = projectType.trim().length >= 2;
    return n && p && e && pc && pt && !submitting;
  }, [name, phone, email, postcode, projectType, submitting]);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    window.setTimeout(() => {
      const el = lastActiveElementRef.current;
      if (el && typeof el.focus === "function") el.focus();
    }, 0);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const payloadName = name.trim();
    const payloadPhone = normalisePhone(phone);
    const payloadEmail = email.trim();
    const payloadPostcode = postcode.trim().toUpperCase();
    const payloadProjectType = projectType.trim();

    if (!payloadName || payloadName.length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!payloadPhone || payloadPhone.length < 9) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (!payloadEmail || !payloadEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!isValidUkPostcodeLoose(payloadPostcode)) {
      setError("Please enter a valid UK postcode.");
      return;
    }
    if (!payloadProjectType || payloadProjectType.length < 2) {
      setError("Please select a project type.");
      return;
    }

    try {
      setSubmitting(true);

      const messageParts = [
        `Project type: ${payloadProjectType}`,
        pagePath ? `Page: ${pagePath}` : null,
        `Source: floating_lead_widget`,
      ].filter(Boolean);

      await submitBoroughLead({
        name: payloadName,
        phone: payloadPhone,
        email: payloadEmail,
        postcode: payloadPostcode,
        borough: effectiveBorough,
        service: effectiveService,
        message: messageParts.join(" | "),
      });

      setSent(true);

      setName("");
      setPhone("");
      setEmail("");
      setPostcode("");
      setProjectType("");

      window.setTimeout(() => closeModal(), 1100);
    } catch {
      setError("Sorry, something went wrong. Please try again or use WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  const z = 2147483647;

  if (!mounted) return null;

  // Round button same size feel as WhatsApp (typically ~56)
  const size = 56;

  // Place above WhatsApp
  // Most WhatsApp buttons sit around bottom: 22-28px, so we stack above it with a gap.
  const right = 18;
  const bottom = 28 + size + 12;

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        aria-label="Open quick drawings enquiry"
        style={{
          position: "fixed",
          right,
          bottom,
          zIndex: z,
          width: size,
          height: size,
          borderRadius: 999,
          border: "1px solid rgba(0,0,0,0.10)",
          background: "#E30613",
          boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transform: open ? "scale(1.06)" : "scale(1)",
          transition: "transform 180ms ease",
        }}
      >
        {!logoFailed ? (
          <img
            src={effectiveLogoSrc}
            alt="WEDRAWPLANS"
            width={size}
            height={size}
            style={{
              width: size,
              height: size,
              objectFit: "cover",
            }}
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.06 4.19l3.75 3.75"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Quick drawings enquiry"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: z + 1,
            background: "rgba(0,0,0,0.50)",
            display: "flex",
            alignItems: isMobile ? "flex-end" : "center",
            justifyContent: "center",
            padding: 12,
          }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            id="wdp-lead-modal"
            style={{
              width: "100%",
              maxWidth: 520,
              borderRadius: 18,
              background: "#fff",
              boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "14px 16px",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <div style={{ fontWeight: 900, fontSize: 16, color: "#111" }}>Get drawings quote</div>
                <div style={{ fontSize: 12.5, color: "#555" }}>Initial survey within 48 hours.</div>
              </div>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                style={{
                  border: "1px solid rgba(0,0,0,0.10)",
                  background: "#fff",
                  borderRadius: 10,
                  padding: "8px 10px",
                  cursor: "pointer",
                  color: "#111",
                  fontWeight: 800,
                }}
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: "#222" }}>Name</span>
                  <input
                    ref={firstFieldRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                    style={{
                      border: "1px solid rgba(0,0,0,0.14)",
                      borderRadius: 12,
                      padding: "12px 12px",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: "#222" }}>Phone</span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07..."
                    inputMode="tel"
                    autoComplete="tel"
                    style={{
                      border: "1px solid rgba(0,0,0,0.14)",
                      borderRadius: 12,
                      padding: "12px 12px",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: "#222" }}>Email</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    inputMode="email"
                    autoComplete="email"
                    style={{
                      border: "1px solid rgba(0,0,0,0.14)",
                      borderRadius: 12,
                      padding: "12px 12px",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                </label>

                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: "#222" }}>Postcode</span>
                  <input
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="SE5 7GD"
                    autoComplete="postal-code"
                    style={{
                      border: "1px solid rgba(0,0,0,0.14)",
                      borderRadius: 12,
                      padding: "12px 12px",
                      fontSize: 14,
                      outline: "none",
                      textTransform: "uppercase",
                    }}
                  />
                </label>
              </div>

              <div style={{ marginTop: 10 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 12.5, fontWeight: 800, color: "#222" }}>Project type</span>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    style={{
                      border: "1px solid rgba(0,0,0,0.14)",
                      borderRadius: 12,
                      padding: "12px 12px",
                      fontSize: 14,
                      outline: "none",
                      background: "#fff",
                    }}
                  >
                    <option value="">Select one</option>
                    <option value="House extension">House extension</option>
                    <option value="Loft conversion">Loft conversion</option>
                    <option value="New build">New build</option>
                    <option value="Internal alterations">Internal alterations</option>
                    <option value="Garage conversion">Garage conversion</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>

              {error && (
                <div
                  style={{
                    marginTop: 10,
                    padding: "10px 12px",
                    borderRadius: 12,
                    background: "rgba(227,6,19,0.08)",
                    border: "1px solid rgba(227,6,19,0.22)",
                    color: "#8a0010",
                    fontWeight: 800,
                    fontSize: 13,
                  }}
                >
                  {error}
                </div>
              )}

              {sent && (
                <div
                  style={{
                    marginTop: 10,
                    padding: "10px 12px",
                    borderRadius: 12,
                    background: "rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.10)",
                    color: "#111",
                    fontWeight: 900,
                    fontSize: 13,
                  }}
                >
                  Sent. We will contact you shortly.
                </div>
              )}

              <div style={{ marginTop: 12, display: "flex", gap: 10, alignItems: "center" }}>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: canSubmit ? "#111" : "rgba(0,0,0,0.28)",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: 14,
                    cursor: canSubmit ? "pointer" : "not-allowed",
                  }}
                >
                  {submitting ? "Sending..." : "Request quote"}
                </button>
              </div>

              <div style={{ marginTop: 10, fontSize: 12, color: "#666", lineHeight: 1.35 }}>
                Borough: <strong style={{ color: "#111" }}>{effectiveBorough}</strong> · Service:{" "}
                <strong style={{ color: "#111" }}>{effectiveService}</strong>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
