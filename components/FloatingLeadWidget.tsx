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

return null;
