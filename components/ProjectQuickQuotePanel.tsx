import React, { useRef, useState } from "react";
import type { FormEvent } from "react";
import { SERVICE_OPTIONS } from "../data/quoteServiceOptions";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE = "020 3654 8508";
const WHATSAPP = "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20fixed-fee%20quote%20for%20my%20architectural%20drawings";
const POSTCODE = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;

type Props = {
  projectSlug?: string;
  projectTitle?: string;
  suggestedService?: string;
  source: "case-study-gallery" | "case-studies-hub";
};

function fireEvent(name: string, params: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...args: any[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

export default function ProjectQuickQuotePanel({
  projectSlug = "",
  projectTitle = "",
  suggestedService = "",
  source,
}: Props) {
  const [service, setService] = useState(suggestedService);
  const [postcode, setPostcode] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const startedAt = useRef<number | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const normalizedPostcode = postcode.toUpperCase().replace(/\s+/g, " ").trim();

  function trackStart() {
    if (!startedAt.current) {
      startedAt.current = Date.now();
      fireEvent("form_start", { form_name: source, referring_project: projectSlug || "hub" });
    }
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setError("");
    trackStart();

    if (!service) {
      setError("Please select the service you need.");
      return;
    }
    if (!POSTCODE.test(normalizedPostcode)) {
      setError("Please enter a valid UK postcode.");
      return;
    }

    if (!expanded) {
      setExpanded(true);
      fireEvent("lead_step_continue", { form_name: source, step: "contact_details", referring_project: projectSlug || "hub" });
      window.setTimeout(() => nameRef.current?.focus(), 20);
      return;
    }

    if (!name.trim() || !phone.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter your name, phone number and valid email address.");
      return;
    }

    setSending(true);
    try {
      const ok = await submitBoroughLead({
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        postcode: normalizedPostcode,
        service,
        message: message.trim() || "Quotation enquiry from WEDRAWPLANS planning project gallery",
        hp: company,
        raw: {
          source,
          referringCaseStudy: projectSlug || undefined,
          referringProjectTitle: projectTitle || undefined,
          referringPage: projectSlug ? "/case-studies/" + projectSlug : "/case-studies",
          projectService: service,
          postcode: normalizedPostcode,
          originalMessage: message.trim(),
          formName: source,
        },
        formStartedAt: startedAt.current || undefined,
      });
      if (!ok) {
        setError("Your enquiry could not be sent. Please try again or call us.");
        return;
      }
      setSuccess(true);
      fireEvent("case_study_quote_submitted", { form_name: source, referring_project: projectSlug || "hub", service });
    } catch {
      setError("There was a connection problem. Please try again or call us.");
    } finally {
      setSending(false);
    }
  }

  return (
    <aside className="h-fit w-full rounded-[22px] border border-[#e2e9e8] bg-white p-3 shadow-[0_15px_36px_rgba(19,46,52,0.07)] sm:p-4 lg:sticky lg:top-36" aria-label="Get a quick quotation">
      <div className="rounded-[18px] border border-[#e2e8eb] bg-[#f7fafc] px-4 py-5 sm:px-6">
        {success ? (
          <div role="status" className="py-8 text-center">
            <span aria-hidden="true" className="text-3xl text-[#2d927b]">✓</span>
            <h3 className="mt-3 text-xl font-semibold text-[#213d44]">Thank you for your enquiry</h3>
            <p className="mt-3 text-sm leading-7 text-[#617176]">Your request has been received. WEDRAWPLANS will contact you about the next steps.</p>
            <button type="button" onClick={() => {setSuccess(false);setExpanded(false);setService(suggestedService);setPostcode("");setName("");setPhone("");setEmail("");setMessage("");startedAt.current=null;}} className="mt-5 text-sm font-semibold text-[#277c8d] underline">Make another enquiry</button>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h3 className="text-[18px] font-semibold leading-6 text-[#213943]">Get your quick quote in minutes</h3>
              <p className="mx-auto mt-2 max-w-[360px] text-[12px] leading-6 text-[#627379]">
                Choose your service and enter the property postcode. Then leave your contact details for a fixed-fee quotation.
              </p>
            </div>
            <form className="mt-5 space-y-3" onSubmit={submit}>
              <div className="hidden" aria-hidden="true"><label htmlFor={"company-" + source + projectSlug}>Company</label><input id={"company-" + source + projectSlug} tabIndex={-1} autoComplete="off" value={company} onChange={e=>setCompany(e.target.value)}/></div>
              <label className="block">
                <span className="sr-only">Which service do you need?</span>
                <select required value={service} onFocus={trackStart} onChange={(event) => {setService(event.target.value);trackStart();}} className="h-13 min-h-[52px] w-full rounded-[14px] border border-[#d8e2e5] bg-white px-4 text-[14px] text-[#203e49] outline-none focus:border-[#64b7c4] focus:ring-2 focus:ring-[#d0edf1]">
                  <option value="">✎  Which service do you need?</option>
                  {SERVICE_OPTIONS.map(option=><option value={option.value} key={option.label}>{option.label}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="sr-only">Property postcode</span>
                <input required autoComplete="postal-code" placeholder="📍  Property postcode" value={postcode} onFocus={trackStart} onChange={event=>setPostcode(event.target.value)} className="min-h-[52px] w-full rounded-[14px] border border-[#d8e2e5] bg-white px-4 text-[14px] text-[#203e49] outline-none focus:border-[#64b7c4] focus:ring-2 focus:ring-[#d0edf1]" />
              </label>
              {expanded && (
                <div className="space-y-3 border-t border-[#dbe7e7] pt-4">
                  <label className="block">
                    <span className="sr-only">Your name</span>
                    <input ref={nameRef} required autoComplete="name" placeholder="Your name" value={name} onChange={event=>setName(event.target.value)} className="min-h-[50px] w-full rounded-[14px] border border-[#d8e2e5] bg-white px-4 text-[14px] outline-none focus:border-[#64b7c4]" />
                  </label>
                  <label className="block">
                    <span className="sr-only">Phone number</span>
                    <input required type="tel" autoComplete="tel" placeholder="Phone number" value={phone} onChange={event=>setPhone(event.target.value)} className="min-h-[50px] w-full rounded-[14px] border border-[#d8e2e5] bg-white px-4 text-[14px] outline-none focus:border-[#64b7c4]" />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email address</span>
                    <input required type="email" autoComplete="email" placeholder="Email address" value={email} onChange={event=>setEmail(event.target.value)} className="min-h-[50px] w-full rounded-[14px] border border-[#d8e2e5] bg-white px-4 text-[14px] outline-none focus:border-[#64b7c4]" />
                  </label>
                  <label className="block">
                    <span className="sr-only">Brief project description (optional)</span>
                    <textarea rows={3} placeholder="A little about your plans (optional)" value={message} onChange={event=>setMessage(event.target.value)} className="w-full rounded-[14px] border border-[#d8e2e5] bg-white px-4 py-3 text-[14px] outline-none focus:border-[#64b7c4]" />
                  </label>
                </div>
              )}
              {error && <p role="alert" className="text-[12px] leading-5 text-red-700">{error}</p>}
              <button type="submit" disabled={sending} className="min-h-[54px] w-full rounded-full bg-[#67a8c7] px-4 text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_20px_rgba(56,111,142,0.18)] transition hover:bg-[#5199b9] disabled:opacity-60">
                {sending ? "Sending your enquiry..." : expanded ? "Send quote request →" : "Get a quick quote →"}
              </button>
            </form>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-[10px] font-semibold text-[#63747a]">
              <span className="rounded-full bg-white px-2.5 py-1">✓ Fixed fee</span>
              <span className="rounded-full bg-white px-2.5 py-1">✓ Clear next steps</span>
              <span className="rounded-full bg-white px-2.5 py-1">✓ London &amp; M25</span>
            </div>
          </>
        )}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <a href="tel:+442036548508" className="rounded-full bg-[#20243b] px-4 py-2.5 text-center text-[12px] font-semibold text-white">Call {PHONE}</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25b956] px-4 py-2.5 text-center text-[12px] font-semibold text-white">WhatsApp us now</a>
        </div>
        <p className="mt-3 text-center text-[11px] leading-5 text-[#738188]">Your details are used to respond to your enquiry.</p>
      </div>
    </aside>
  );
}
