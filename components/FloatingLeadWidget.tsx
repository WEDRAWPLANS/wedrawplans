import React, { useEffect, useMemo, useRef, useState } from "react";
import { submitBoroughLead } from "../lib/submitBoroughLead";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type FloatingLeadWidgetProps = {
  boroughName?: string;
  serviceLabel?: string;
  logoSrc?: string;
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

function FallbackEmblemIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 17.2V20h2.8L17.9 8.9l-2.8-2.8L4 17.2Z" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.9 6.1 16.7 8.9" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 15.7V7.9c0-.5.4-.9.9-.9h3" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.6 18h6.5c.5 0 .9-.4.9-.9v-5" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function FloatingLeadWidget({
  boroughName,
  serviceLabel,
  logoSrc,
}: FloatingLeadWidgetProps) {

  const effectiveBorough = (boroughName && boroughName.trim()) || "London";
  const effectiveService = (serviceLabel && serviceLabel.trim()) || "Planning drawings";
  const effectiveLogoSrc = (logoSrc && logoSrc.trim()) || "/images/wedrawplans-emblem.png";

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
  const [projectDetails, setProjectDetails] = useState("");

  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  const pagePath = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location?.pathname || "";
  }, []);

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(max-width: 640px)").matches ?? true;
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    if (!payloadProjectType) {
      setError("Please select a project type.");
      return;
    }

    try {
      setSubmitting(true);

      await submitBoroughLead({
        name: payloadName,
        phone: payloadPhone,
        email: payloadEmail,
        postcode: payloadPostcode,
        borough: effectiveBorough,
        service: effectiveService,
        message: projectDetails,
      });

      if (window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "Lead",
          event_label: "Floating Widget",
        });
      }

      setSent(true);

      setName("");
      setPhone("");
      setEmail("");
      setPostcode("");
      setProjectType("");
      setProjectDetails("");

    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const z = 2147483647;
  const right = 16;

  /* LOWERED WIDGET POSITION */
  const bottom = isMobile ? 16 : 24;

  if (!mounted) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          right,
          bottom,
          zIndex: z,
          minHeight: isMobile ? 54 : 56,

          /* slightly smaller mobile width */
          maxWidth: isMobile ? 250 : 320,

          borderRadius: 999,
          border: "1px solid rgba(0,0,0,0.10)",
          background: "#ffffff",
          boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: isMobile ? "8px 12px 8px 8px" : "8px 14px 8px 8px",
        }}
      >
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: 999,
            background: "#F00000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!logoFailed ? (
            <img
              src={effectiveLogoSrc}
              width={26}
              height={26}
              style={{ objectFit: "contain" }}
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <FallbackEmblemIcon />
          )}
        </span>

        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontSize: 13, fontWeight: 900 }}>
            Need help with drawings?
          </span>

          <span style={{ fontSize: 11, color: "#666" }}>
            Request your fixed fee quote
          </span>
        </span>
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: z + 1,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: isMobile ? "flex-end" : "center",
            justifyContent: "center",
            padding: 12,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 520,
              borderRadius: 18,
              background: "#fff",
              boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
            }}
          >
            <form onSubmit={handleSubmit} style={{ padding: 20 }}>

              {!sent ? (
                <>
                  <input
                    ref={firstFieldRef}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "100%", padding: 10, marginBottom: 8 }}
                  />

                  <input
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ width: "100%", padding: 10, marginBottom: 8 }}
                  />

                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", padding: 10, marginBottom: 8 }}
                  />

                  <input
                    placeholder="Postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    style={{ width: "100%", padding: 10, marginBottom: 8 }}
                  />

                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    style={{ width: "100%", padding: 10, marginBottom: 8 }}
                  >
                    <option value="">Project type</option>
                    <option>House extension</option>
                    <option>Loft conversion</option>
                    <option>New build</option>
                    <option>Internal alterations</option>
                  </select>

                  <textarea
                    placeholder="Project details"
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    rows={3}
                    style={{ width: "100%", padding: 10 }}
                  />

                  {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      marginTop: 10,
                      width: "100%",
                      padding: 12,
                      background: "#111",
                      color: "#fff",
                      borderRadius: 10,
                      fontWeight: 900,
                    }}
                  >
                    {submitting ? "Sending..." : "Request quote"}
                  </button>
                </>
              ) : (
                <div>
                  Thank you. We received your enquiry.
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
