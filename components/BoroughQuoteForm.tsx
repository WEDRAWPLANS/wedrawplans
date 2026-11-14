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

  const control = "h-12 w-full min-w-0 rounded-[14px] border border-[#7a8d92] bg-white px-4 text-[16px] text-[#203e4a] outline-none transition placeholder:text-[#60747a] focus:border-[#236f7b] focus:ring-2 focus:ring-[#236f7b] focus:ring-offset-2";
  const fieldLabel = "mb-1.5 block text-left text-[13px] font-semibold text-[#203e4a]";
  const titleId = `${formId}-heading`;
  const whatsappHref = "https://wa.me/442036548508?text=" + encodeURIComponent(
    `Hello WEDRAWPLANS, I would like a drawing quote for a project in ${boroughName}.`
  );

  return (
    <section id={BOROUGH_QUOTE_ID} aria-labelledby={titleId} tabIndex={-1} className="min-w-0 scroll-mt-5">
      <div className="overflow-hidden rounded-[13px] bg-[#245b63] px-4 py-2.5 text-center text-white">
        <p className="break-words text-[14px] font-extrabold uppercase tracking-[0.17em] sm:text-[15px]">
          {boroughName}
        </p>
      </div>
      <h2 id={titleId} className="mt-4 text-[17px] font-semibold leading-snug tracking-tight text-[#223b3e] sm:text-[19px]">
        Get your fixed-fee drawing quote
      </h2>
      <p className="mt-1.5 text-[13px] leading-5 text-[#586d73]">
        Tell us a little about your project. No drawings or plans needed.
      </p>
      <form onSubmit={handleSubmit} onChange={() => { if (status === "sent") setStatus("idle"); }} aria-labelledby={titleId} className="mt-4 space-y-3 text-[13px]">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <input type="hidden" name="service" value="Homeowner project enquiry" readOnly />
        <div>
          <label htmlFor={formId + "-postcode"} className={fieldLabel}>
            Property postcode <span className="text-[#b64740]">*</span>
          </label>
          <input id={formId + "-postcode"} name="postcode" required autoComplete="postal-code"
            inputMode="text" autoCapitalize="characters" spellCheck={false} placeholder="Enter your property postcode" className={control} />
        </div>
        <div>
          <label htmlFor={formId + "-details"} className={fieldLabel}>
            What would you like to build or change? <span className="text-[#b64740]">*</span>
          </label>
          <textarea id={formId + "-details"} name="projectDetails" required rows={3}
            placeholder="For example: single-storey rear extension or loft conversion"
            className={control + " min-h-[92px] resize-y py-3 leading-6"} />
        </div>
        <div>
          <label htmlFor={formId + "-name"} className={fieldLabel}>
            Your name <span className="text-[#b64740]">*</span>
          </label>
          <input id={formId + "-name"} name="name" required autoComplete="name"
            placeholder="Your name" className={control} />
        </div>
        <div>
          <label htmlFor={formId + "-email"} className={fieldLabel}>
            Email address <span className="text-[#b64740]">*</span>
          </label>
          <input id={formId + "-email"} name="email" type="email" required autoComplete="email"
            autoCapitalize="none" spellCheck={false} placeholder="Your email address" className={control} />
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
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 border-t border-[#d6e3e5] text-[13px] font-semibold text-[#236f7b]">
        <a href="tel:+442036548508" className="inline-flex min-h-[44px] items-center underline underline-offset-2">Call us</a>
        <a href={whatsappHref} className="inline-flex min-h-[44px] items-center underline underline-offset-2" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <Link href="/get-drawings-quote" className="inline-flex min-h-[44px] items-center underline underline-offset-2">Detailed quote form</Link>
      </div>
    </section>
  );
}
