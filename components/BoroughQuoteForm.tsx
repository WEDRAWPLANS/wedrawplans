import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";

type Props = {
  boroughName: string;
  formId: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
};

/**
 * One-step, postcode-first form shared by all 33 London borough-area heroes.
 * Preserve the existing /api/contact-resend delivery and tracking via onSubmit.
 * Never block enquiries for a postcode outside the named borough.
 */
export default function BoroughQuoteForm({ boroughName, formId, onSubmit }: Props) {
  const submittingRef = useRef(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setSubmitting(true);
    try {
      await onSubmit(event);
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  }

  const control = "h-12 w-full min-w-0 rounded-[14px] border border-[#7a8d92] bg-white px-4 text-[16px] text-[#203e4a] outline-none transition placeholder:text-[#60747a] focus:border-[#236f7b] focus:ring-2 focus:ring-[#236f7b] focus:ring-offset-2";
  const fieldLabel = "mb-1.5 block text-left text-[12px] font-semibold text-[#203e4a]";

  return (
    <>
      <div className="overflow-hidden rounded-[13px] bg-[#245b63] px-4 py-2.5 text-center text-white">
        <p className="break-words text-[14px] font-extrabold uppercase tracking-[0.17em] sm:text-[15px]">
          {boroughName}
        </p>
      </div>
      <h2 className="mt-4 text-[17px] font-semibold leading-snug tracking-tight text-[#223b3e] sm:text-[19px]">
        Get your fixed-fee drawing quote
      </h2>
      <p className="mt-1.5 text-[12px] leading-5 text-[#586d73]">
        Tell us what you would like to build or change. No drawings or plans are needed to enquire.
      </p>
      <form onSubmit={handleSubmit} aria-busy={submitting} className="mt-4 space-y-3.5 text-[13px]">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <input type="hidden" name="service" value="Homeowner project enquiry" readOnly />
        <div>
          <label htmlFor={formId + "-postcode"} className={fieldLabel}>
            Property postcode <span className="text-[#b64740]">*</span>
          </label>
          <input id={formId + "-postcode"} name="postcode" required autoComplete="postal-code"
            inputMode="text" placeholder="Enter your property postcode" className={control} />
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
            placeholder="Your email address" className={control} />
        </div>
        <div>
          <label htmlFor={formId + "-phone"} className={fieldLabel}>Telephone (optional)</label>
          <input id={formId + "-phone"} name="phone" type="tel" autoComplete="tel"
            placeholder="Your phone number, if preferred" className={control} />
        </div>
        <button type="submit" disabled={submitting} className="flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#236f7b] px-5 py-3 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_8px_22px_rgba(20,79,91,0.15)] transition hover:bg-[#194e5b] focus-visible:ring-2 focus-visible:ring-[#236f7b] focus-visible:ring-offset-2 disabled:cursor-wait">
          {submitting ? "Sending your enquiry…" : "Get my fixed-fee quote →"}
        </button>
        <p className="text-center text-[11px] leading-5 text-[#60747a]">
          No obligation. We use your details only to respond to your enquiry.
        </p>
        <p className="text-center text-[11px] leading-5 text-[#60747a]">
          Prefer a service list?{" "}
          <Link href="/get-drawings-quote" className="font-semibold text-[#236f7b] underline underline-offset-2 hover:text-[#194e5b]">
            Use the detailed quote form
          </Link>
        </p>
      </form>
      <p role="status" aria-live="polite" className="sr-only">
        {submitting ? "Sending your enquiry. Please wait." : ""}
      </p>
    </>
  );
}
