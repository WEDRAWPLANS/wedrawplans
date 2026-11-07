import React from "react";
import Image from "next/image";
import { submitBoroughLead } from "../lib/submitBoroughLead";

type BoroughHeaderProps = {
  boroughName: string;
};

type BoroughHeroProps = {
  boroughName: string;
  formId: string;
  headline: string;
};

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_HREF = "tel:+442036548508";

function whatsappHref(boroughName: string) {
  return "https://wa.me/442036548508?text=" + encodeURIComponent(
    "Hello WEDRAWPLANS, I would like a fixed-fee quote for architectural drawings in " + boroughName
  );
}

/**
 * Shared Ealing-approved borough header. Every borough keeps its own
 * location, planning evidence, and SEO metadata below the hero.
 */
export function BoroughMasterHeader({ boroughName }: BoroughHeaderProps) {
  return (
    <header className="w-screen max-w-[100vw] min-w-0 overflow-x-clip border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 pb-2 pt-3 sm:pb-3 sm:pt-6 lg:px-6">
        <div className="flex flex-col items-center text-center">
          <a href="/" aria-label="WEDRAWPLANS homepage">
            <Image
              src="/images/wedrawplans-logo.png"
              alt="WEDRAWPLANS"
              width={420}
              height={140}
              priority
              className="h-16 w-auto object-contain sm:h-24"
            />
          </a>
          <div className="mt-2 hidden text-[11px] uppercase tracking-[0.18em] text-slate-600 sm:block">
            Architectural Drawing Consultants
          </div>
          <div className="mt-2 max-w-3xl text-[13px] font-medium text-slate-800">
            Professional Planning &amp; Building Regulations Drawings · Clear Fixed Fees
          </div>
        </div>
        <hr className="mt-5 border-t border-slate-600" />
        <div className="mt-2 flex w-full flex-wrap items-center justify-between gap-3">
          <div className="text-[12px] text-slate-700">
            <span className="font-semibold text-slate-900">{boroughName}</span>
            {" · "}Architectural drawing services
          </div>
          <div className="flex items-center gap-2">
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-1 rounded-full border border-slate-300 px-3 py-1.5 text-[12px] font-medium text-slate-900 shadow-sm hover:bg-slate-900 hover:text-white sm:inline-flex"
            >
              ☎ {PHONE_DISPLAY}
            </a>
            <a
              href={whatsappHref(boroughName)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full bg-[#25D366] px-3 py-1.5 text-[12px] font-medium text-white shadow-sm hover:bg-[#1ebe57]"
            >
              💬 <span className="hidden sm:inline">WhatsApp us</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/**
 * Mobile-first borough hero copied from the approved Ealing price/quote
 * composition. £750 applies ONLY to qualifying planning drawings,
 * never to an inclusive Building Regulations package.
 */
export default function BoroughMasterHero({ boroughName, formId, headline }: BoroughHeroProps) {
  const formStartedRef = React.useRef(false);
  function scrollToForm() {
    document.getElementById(formId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const data = new FormData(e.currentTarget);
    if (!String(data.get("phone") || "").trim() && !String(data.get("email") || "").trim()) {
      e.preventDefault();
      alert("Please enter a phone number or an email address so we can reply.");
      return;
    }
    const ok = await submitBoroughLead(e, { boroughName });
    if (ok) formStartedRef.current = false;
  }

  return (
    <section className="w-full min-w-0 border-b border-slate-200 bg-[#fdf8f3]">
      <div className="mx-auto flex max-w-5xl min-w-0 flex-col gap-5 px-4 py-6 lg:flex-row lg:gap-8 lg:px-6 lg:py-10">
        <div className="min-w-0 lg:w-1/2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-700">
            {boroughName} architectural drawings
          </p>
          <h1 className="mt-2 max-w-xl break-words text-[27px] font-bold leading-[1.16] tracking-tight text-[#172b39] sm:text-[34px]">
            {headline}
          </h1>
          <div className="mt-5 overflow-hidden rounded-2xl border border-[#cbded9] bg-white shadow-[0_12px_35px_-26px_rgba(21,59,73,0.55)]">
            <div className="h-1 bg-[#267b83]" />
            <div className="p-4 sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2b747c]">
                Planning &amp; Building Regulations Drawing Packages
              </p>
              <p className="mt-2 text-[14px] font-normal leading-6 text-[#53666d]">
                Planning drawings from <span className="font-medium text-[#274047]">£750</span> for suitable projects
              </p>
              <p className="mt-3 text-[13px] leading-6 text-[#53666d]">
                For suitable straightforward house extension and loft conversion planning drawings.
                Your written fixed-fee quote sets out the included work.
              </p>
              <button
                type="button"
                onClick={scrollToForm}
                className="mt-4 flex min-h-[46px] w-full items-center justify-center rounded-full bg-[#236f7b] px-5 py-3 text-[14px] font-bold text-white transition hover:bg-[#194e5b] sm:w-auto"
              >
                Get your fixed-fee quote
              </button>
              <p className="mt-3 text-[11px] leading-[1.65] text-[#667b80]">
                Council application fees, measured surveys, structural calculations and technical Building Regulations drawings are separate where required.
              </p>
            </div>
          </div>
          <p className="mt-4 text-[12px] font-medium text-slate-700">
            Professional council drawing packages · Survey and submission options available
          </p>
          <p className="mt-3 text-[13px] leading-6 text-slate-700">
            WEDRAWPLANS prepares planning and technical drawings for extensions, loft conversions,
            refurbishments and residential schemes across {boroughName}. We advise on the appropriate
            planning route, prepare the drawings and assist with council submissions where required.
          </p>
          <ul className="mt-4 hidden space-y-1 text-[13px] text-slate-800 lg:block">
            <li>• Rear, side and wraparound extensions</li>
            <li>• Loft conversions, dormers and roof alterations</li>
            <li>• Internal remodelling and property conversions</li>
            <li>• Planning applications and Building Regulations drawing packs</li>
            <li>• Fixed fees agreed in writing before instruction</li>
          </ul>
          <div className="mt-6 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:block">
            <div className="relative h-[190px] w-full bg-[#f4f8f7]">
              <Image
                src="/images/drawings.jpg"
                alt="Example of WEDRAWPLANS architectural planning drawings"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-contain"
              />
            </div>
            <div className="p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900">Our drawing packages</p>
              <p className="mt-2 text-[13px] text-slate-700">
                Existing and proposed plans, elevations and supporting information tailored to your project and the relevant local authority.
              </p>
            </div>
          </div>
        </div>

        <div id={formId} className="min-w-0 scroll-mt-5 lg:w-1/2">
          <div className="rounded-2xl border border-[#e0e7e3] bg-white p-5 shadow-md sm:p-6">
            <h2 className="text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
              Tell us your idea. Get a fixed-fee quote.
            </h2>
            <p className="mt-1 text-[12px] text-slate-600">
              Planning an extension, loft or other project in {boroughName}? Share your postcode and a few words. We’ll reply with the right drawing package and a clear fixed fee.
            </p>
            <form
              onSubmit={handleSubmit}
              onFocusCapture={() => {
                if (!formStartedRef.current) {
                  formStartedRef.current = true;
                  (window as typeof window & { gtag?: (...args: any[]) => void }).gtag?.("event", "form_start", {
                    form_name: "borough_direct_write_v2",
                    page_path: window.location.pathname,
                  });
                }
              }}
              className="mt-5 space-y-4"
              aria-label={`${boroughName} one-step fixed-fee quotation form`}
            >
              <input type="hidden" name="formVariant" value="borough_direct_write_v2" />
              <div className="rounded-xl border border-[#c7dedb] bg-[#f3faf7] px-4 py-3">
                <p className="text-[12px] font-semibold text-[#236a65]">Tell us about your project</p>
                <p className="mt-1 text-[12px] leading-5 text-[#526d69]">
                  Your postcode and a few words about your plans are enough to start. No extra steps or drawings needed.
                </p>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="borough-postcode" className="block text-[13px] font-semibold text-slate-800">
                  Property postcode
                </label>
                <input
                  id="borough-postcode"
                  name="postcode"
                  autoComplete="postal-code"
                  required
                  placeholder="Enter your postcode"
                  className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[16px] text-slate-900 outline-none transition focus:border-[#237f83] focus:ring-2 focus:ring-[#d1edeb]"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="borough-message" className="block text-[14px] font-semibold text-[#203f40]">
                  Tell us what you have in mind
                </label>
                <textarea
                  id="borough-message"
                  name="projectDetails"
                  rows={4}
                  placeholder="For example: I’d like a 4m rear kitchen extension. Could you quote for the planning drawings?"
                  className="min-h-[130px] w-full resize-y rounded-xl border border-[#bed6d6] bg-white px-4 py-3 text-[16px] text-slate-900 shadow-sm outline-none transition focus:border-[#237f83] focus:ring-2 focus:ring-[#d1edeb]"
                />
                <p className="text-[12px] text-slate-500">A few words are helpful, but this can be left blank if you are not sure yet.</p>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="borough-name" className="block text-[13px] font-semibold text-slate-800">
                  Your name
                </label>
                <input
                  id="borough-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[16px] text-slate-900 outline-none transition focus:border-[#237f83] focus:ring-2 focus:ring-[#d1edeb]"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="borough-phone" className="block text-[13px] font-semibold text-slate-800">
                    Telephone
                  </label>
                  <input
                    id="borough-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Your number"
                    className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[16px] text-slate-900 outline-none transition focus:border-[#237f83] focus:ring-2 focus:ring-[#d1edeb]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="borough-email" className="block text-[13px] font-semibold text-slate-800">
                    Email
                  </label>
                  <input
                    id="borough-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your email"
                    className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[16px] text-slate-900 outline-none transition focus:border-[#237f83] focus:ring-2 focus:ring-[#d1edeb]"
                  />
                </div>
              </div>
              <p className="-mt-2 text-[12px] text-slate-500">Provide at least a phone number or an email address.</p>
              <div className="space-y-1.5">
                <label htmlFor="borough-type" className="block text-[13px] font-semibold text-slate-800">
                  What are you planning? <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <select
                  id="borough-type"
                  name="projectType"
                  defaultValue=""
                  className="min-h-[50px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[16px] text-slate-900 outline-none transition focus:border-[#237f83] focus:ring-2 focus:ring-[#d1edeb]"
                >
                  <option value="">Choose a project type (optional)</option>
                  <option value="House extension">House extension (rear, side or wraparound)</option>
                  <option value="Loft conversion">Loft conversion</option>
                  <option value="Outbuilding or garden room">Garden room, studio or outbuilding</option>
                  <option value="Garage conversion">Garage conversion</option>
                  <option value="Internal remodelling">Internal alterations / open-plan layout</option>
                  <option value="New build house">New home / residential development</option>
                  <option value="Conversion to flats">Property conversion / flats</option>
                  <option value="Other drawings">Other / not sure yet</option>
                </select>
              </div>
              <button
                type="submit"
                className="min-h-[52px] w-full rounded-full bg-[#247786] px-4 py-3 text-[14px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#185b68] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#237f83]"
              >
                Get your fixed-fee quote →
              </button>
              <p className="text-center text-[11px] leading-5 text-slate-500">
                No obligation · No drawings required · We only use your details to reply.
              </p>
            </form>
            <div className="mt-5 overflow-hidden rounded-xl border border-[#e0e8e4] bg-[#f7faf9] lg:hidden">
              <Image
                src="/images/drawings.jpg"
                alt="WEDRAWPLANS architectural drawing example"
                width={800}
                height={310}
                className="h-[140px] w-full object-contain"
              />
              <p className="p-3 text-[12px] leading-5 text-slate-600">
                Planning, extension and Building Control drawing advice for {boroughName} and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
