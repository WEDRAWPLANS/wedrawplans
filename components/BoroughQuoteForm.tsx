import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { BOROUGH_QUOTE_ID } from "../data/londonAreas";
import { submitBoroughLead } from "../lib/submitBoroughLead";

type Props = {
  boroughName: string;
  formId: string;
};

export default function BoroughQuoteForm({ boroughName, formId }: Props) {
  const submittingRef = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const submitting = status === "sending";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus("sending");
    try {
      const sent = await submitBoroughLead(event, { boroughName, showFormAlerts: false });
      setStatus(sent ? "sent" : "error");
    } catch {
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  const control = "block h-12 w-full min-w-0 rounded-xl border border-[#7f9595] bg-[#f8fbfa] px-3.5 text-base text-[#203e4a] outline-none transition-colors placeholder:text-[#566e72] focus:border-[#236f7b] focus:bg-white focus:ring-2 focus:ring-[#236f7b] focus:ring-offset-2";
  const fieldLabel = "mb-1.5 block text-sm font-semibold leading-5 text-[#203e4a]";
  const titleId = `${formId}-heading`;
  const whatsappHref = "https://wa.me/442036548508?text=" + encodeURIComponent(
    `Hello WEDRAWPLANS, I would like a drawing quote for a project in ${boroughName}.`
  );

  return (
    <section id={BOROUGH_QUOTE_ID} aria-labelledby={titleId} tabIndex={-1} className="min-w-0 scroll-mt-5 focus:outline-none">
      <div className="rounded-xl bg-[#e6f1ee] px-4 py-2.5 text-center text-[#245b63]">
        <p className="break-words text-[13px] font-extrabold uppercase tracking-[0.15em]">
          <span className="font-semibold">WEDRAWPLANS</span>
          {" · "}
          <strong className="font-extrabold">{boroughName}</strong>
        </p>
      </div>
      <h2 id={titleId} className="mt-4 text-[22px] font-bold leading-tight tracking-tight text-[#193c43] sm:text-[24px]">
        Get your fixed-fee drawing quote
      </h2>
      <p className="mt-2 text-sm leading-5 text-[#52686e]">
        A short description is enough. No drawings needed.
      </p>
      <form onSubmit={handleSubmit} onChange={() => { if (status === "sent") setStatus("idle"); }} aria-labelledby={titleId} className="mt-4 space-y-3 text-[13px]">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <input type="hidden" name="service" value="Homeowner project enquiry" readOnly />
        <div>
          <label htmlFor={formId + "-postcode"} className={fieldLabel}>
            Property postcode <span className="text-[#b64740]">*</span>
          </label>
          <input id={formId + "-postcode"} name="postcode" required autoComplete="postal-code"
            inputMode="text" autoCapitalize="characters" spellCheck={false} placeholder="e.g. SW1A 1AA" className={control} />
        </div>
        <div>
          <label htmlFor={formId + "-details"} className={fieldLabel}>
            What would you like to build or change? <span className="text-[#b64740]">*</span>
          </label>
          <textarea id={formId + "-details"} name="projectDetails" required rows={2}
            placeholder="e.g. A rear extension for a bigger kitchen"
            className={control + " min-h-[84px] resize-y py-2.5 leading-6"} />
        </div>
        <div>
          <label htmlFor={formId + "-name"} className={fieldLabel}>
            Your name <span className="text-[#b64740]">*</span>
          </label>
          <input id={formId + "-name"} name="name" required autoComplete="name" className={control} />
        </div>
        <div>
          <label htmlFor={formId + "-email"} className={fieldLabel}>
            Email address <span className="text-[#b64740]">*</span>
          </label>
          <input id={formId + "-email"} name="email" type="email" required autoComplete="email"
            autoCapitalize="none" spellCheck={false} className={control} />
        </div>
        <div>
          <label htmlFor={formId + "-phone"} className={fieldLabel}>Telephone (optional)</label>
          <input id={formId + "-phone"} name="phone" type="tel" autoComplete="tel" className={control} />
        </div>
        {status === "error" && (
          <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-900">
            Your enquiry could not be sent. Please try again or call <a className="font-semibold underline" href="tel:+442036548508">020 3654 8508</a>.
          </p>
        )}
        <div role="status" className={status === "sent" ? "rounded-xl border border-[#9acdb7] bg-emerald-50 p-3 text-sm font-medium text-emerald-950" : "sr-only"}>
          {submitting ? "Sending your enquiry. Please wait." : status === "sent" ? "Thank you. Your enquiry has been sent. We’ll be in touch by email." : ""}
        </div>
        <button type="submit" disabled={submitting} aria-busy={submitting} className="flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#236f7b] px-5 py-3 text-center text-[16px] font-bold text-white shadow-[0_8px_22px_rgba(20,79,91,0.15)] transition hover:bg-[#194e5b] focus-visible:ring-2 focus-visible:ring-[#236f7b] focus-visible:ring-offset-2 disabled:cursor-wait">
          {submitting ? "Sending your enquiry…" : "Get my fixed-fee quote"}
        </button>
        <p className="text-center text-[12px] leading-5 text-[#60747a]">
          No obligation. We use your details only to respond to your enquiry.
        </p>
      </form>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 border-t border-[#e4ece9] text-[13px] font-semibold text-[#236f7b]">
        <a href="tel:+442036548508" className="inline-flex min-h-[44px] items-center underline underline-offset-2">Call us</a>
        <a href={whatsappHref} className="inline-flex min-h-[44px] items-center underline underline-offset-2" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <Link href="/get-drawings-quote" className="inline-flex min-h-[44px] items-center underline underline-offset-2">Detailed quote form</Link>
      </div>
    </section>
  );
}
