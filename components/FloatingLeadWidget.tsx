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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 17.2V20h2.8L17.9 8.9l-2.8-2.8L4 17.2Z"
        stroke="white"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9 6.1 16.7 8.9"
        stroke="white"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15.7V7.9c0-.5.4-.9.9-.9h3"
        stroke="white"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.6 18h6.5c.5 0 .9-.4.9-.9v-5"
        stroke="white"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(max-width: 640px)").matches ?? true;
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    lastActiveElementRef.current = document.activeElement as HTMLElement | null;

    const timer = window.setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 50);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open && lastActiveElementRef.current) {
      lastActiveElementRef.current.focus();
    }
  }, [open]);

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

  if (!mounted) return null;

  const widgetZIndex = 60;
  const overlayZIndex = 100;
  const right = 16;

  const bottom = isMobile ? 86 : 26;
  const maxWidth = isMobile ? 340 : 340;
  const minHeight = isMobile ? 56 : 60;

  return (
    <>
      <button
        type="button"
        aria-label="Open fixed fee quote form"
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          right,
          bottom,
          zIndex: widgetZIndex,
          minHeight,
          maxWidth,
          width: isMobile ? "calc(100vw - 32px)" : 340,
          borderRadius: 999,
          border: "1px solid rgba(0,0,0,0.10)",
          background: "#ffffff",
          boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: isMobile ? "9px 14px 9px 9px" : "9px 16px 9px 9px",
          textAlign: "left",
        }}
      >
        <span
          style={{
            width: 42,
            height: 42,
            minWidth: 42,
            borderRadius: 999,
            background: "#F00000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {!logoFailed ? (
            <img
              src={effectiveLogoSrc}
              alt="WEDRAWPLANS"
              width={26}
              height={26}
              style={{ objectFit: "contain", display: "block" }}
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <FallbackEmblemIcon />
          )}
        </span>

        <span
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 1.08,
            overflow: "hidden",
          }}
        >
          <span
            style={{
              fontSize: isMobile ? 12.5 : 14,
              fontWeight: 900,
              color: "#111",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            Need help with drawings?
          </span>

          <span
            style={{
              fontSize: isMobile ? 10.5 : 11.5,
              color: "#666",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            Request your fixed fee quote
          </span>
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: overlayZIndex,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: isMobile ? "flex-end" : "center",
            justifyContent: "center",
            padding: isMobile ? 10 : 16,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 520,
              borderRadius: isMobile ? "18px 18px 0 0" : 18,
              background: "#fff",
              boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
              maxHeight: isMobile ? "88vh" : "90vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit} style={{ padding: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 14,
                }}
              >
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#111" }}>
                    Get your fixed fee quote
                  </div>
                  <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>
                    {effectiveService} in {effectiveBorough}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  style={{
                    border: "1px solid rgba(0,0,0,0.12)",
                    background: "#fff",
                    width: 38,
                    height: 38,
                    borderRadius: 999,
                    cursor: "pointer",
                    fontSize: 18,
                    lineHeight: 1,
                  }}
                >
                  ×
                </button>
              </div>

              {!sent ? (
                <>
                  <input
                    ref={firstFieldRef}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: 12,
                      marginBottom: 10,
                      borderRadius: 10,
                      border: "1px solid #d9d9d9",
                      fontSize: 15,
                    }}
                  />

                  <input
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: "100%",
                      padding: 12,
                      marginBottom: 10,
                      borderRadius: 10,
                      border: "1px solid #d9d9d9",
                      fontSize: 15,
                    }}
                  />

                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding: 12,
                      marginBottom: 10,
                      borderRadius: 10,
                      border: "1px solid #d9d9d9",
                      fontSize: 15,
                    }}
                  />

                  <input
                    placeholder="Postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    style={{
                      width: "100%",
                      padding: 12,
                      marginBottom: 10,
                      borderRadius: 10,
                      border: "1px solid #d9d9d9",
                      fontSize: 15,
                    }}
                  />

                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    style={{
                      width: "100%",
                      padding: 12,
                      marginBottom: 10,
                      borderRadius: 10,
                      border: "1px solid #d9d9d9",
                      fontSize: 15,
                      background: "#fff",
                    }}
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
                    rows={4}
                    style={{
                      width: "100%",
                      padding: 12,
                      marginBottom: 4,
                      borderRadius: 10,
                      border: "1px solid #d9d9d9",
                      fontSize: 15,
                      resize: "vertical",
                    }}
                  />

                  {error && (
                    <div
                      style={{
                        color: "#b00020",
                        marginTop: 8,
                        marginBottom: 4,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      marginTop: 12,
                      width: "100%",
                      padding: 14,
                      background: "#111",
                      color: "#fff",
                      borderRadius: 12,
                      border: "none",
                      fontWeight: 900,
                      fontSize: 15,
                      cursor: "pointer",
                    }}
                  >
                    {submitting ? "Sending..." : "Request quote"}
                  </button>
                </>
              ) : (
                <div
                  style={{
                    padding: "10px 0 2px",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#111",
                  }}
                >
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
