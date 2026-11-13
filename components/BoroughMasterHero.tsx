import React from "react";
import Image from "next/image";
import BoroughQuoteForm from "./BoroughQuoteForm";
import { submitBoroughLead } from "../lib/submitBoroughLead";
import { hasOneReplyMethod } from "../lib/hasOneReplyMethod";

type BoroughHeaderProps = {
  boroughName: string;
};

type BoroughHeroProps = {
  boroughName: string;
  formId: string;
  headline: string;
  /** Optional borough-specific illustration. Other boroughs keep their existing drawing preview. */
  showcaseImage?: { src: string; alt: string; fit?: "cover" | "contain"; watermarkEmbedded?: boolean; caption?: string };
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
export default function BoroughMasterHero({ boroughName, formId, headline, showcaseImage }: BoroughHeroProps) {
  function scrollToForm() {
    document.getElementById(formId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!hasOneReplyMethod(e.currentTarget)) {
      e.preventDefault();
      return;
    }
    await submitBoroughLead(e, { boroughName });
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
                src={showcaseImage?.src || "/images/drawings.jpg"}
                alt={showcaseImage?.alt || "Example of WEDRAWPLANS architectural planning drawings"}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className={showcaseImage?.fit === "contain" ? "object-contain" : showcaseImage ? "object-cover" : "object-contain"}
              />
              {showcaseImage && !showcaseImage.watermarkEmbedded ? <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"><span className="-rotate-[24deg] whitespace-nowrap text-[clamp(22px,4vw,44px)] font-extrabold tracking-[.10em] text-slate-500/5">WEDRAWPLANS</span></span> : null}
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
            <BoroughQuoteForm boroughName={boroughName} formId={formId} onSubmit={handleSubmit} />
            <div className="mt-5 overflow-hidden rounded-xl border border-[#e0e8e4] bg-[#f7faf9] lg:hidden">
              <div className={showcaseImage ? (showcaseImage.fit === "contain" ? "relative aspect-[1.414/1] max-h-[285px] w-full bg-[#f1f5f2]" : "relative aspect-[16/10] max-h-[285px] w-full bg-[#f1f5f2]") : "relative h-[140px] w-full bg-[#f7faf9]"}>
                <Image
                  src={showcaseImage?.src || "/images/drawings.jpg"}
                  alt={showcaseImage?.alt || "WEDRAWPLANS architectural drawing example"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className={showcaseImage?.fit === "contain" ? "object-contain" : showcaseImage ? "object-cover" : "object-contain"}
                />
                {showcaseImage && !showcaseImage.watermarkEmbedded ? <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"><span className="-rotate-[24deg] whitespace-nowrap text-[clamp(25px,5vw,50px)] font-extrabold tracking-[.10em] text-slate-500/5">WEDRAWPLANS</span></span> : null}
              </div>
              <p className="p-3 text-[12px] leading-5 text-slate-600">
                {showcaseImage?.caption || `Planning, extension and Building Control drawing advice for ${boroughName} and surrounding areas.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
