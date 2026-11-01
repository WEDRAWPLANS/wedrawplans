import Link from "next/link";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK = "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20fixed-fee%20quote%20for%20architectural%20drawings";
const GOOGLE_PROFILE = "https://share.google/D3KId64vHtHSKPALr";
const QUOTE = "/get-drawings-quote";

export function CaseStudyHeader() {
  return (
    <header className="sticky top-0 z-[60] border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 pb-3 pt-4 lg:px-6 lg:pt-5">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="inline-flex items-center justify-center">
            <img src="/images/wedrawplans-logo.png" alt="WEDRAWPLANS" className="h-24 w-auto object-contain lg:h-28" />
          </Link>
          <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-slate-600">Architectural Drawing Consultants</div>
          <nav aria-label="Main navigation" className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[13px] text-slate-900">
            <Link href="/" className="hover:text-black">Home</Link>
            <Link href="/extensions" className="hover:text-black">Extension Drawings</Link>
            <Link href="/loft-conversion" className="hover:text-black">Loft Drawings</Link>
            <Link href="/new-build" className="hover:text-black">New Build Drawings</Link>
            <Link href="/building-regulation-drawings" className="hover:text-black">Building Regulations</Link>
            <Link href="/areas" className="hover:text-black">Areas We Cover</Link>
          </nav>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a href={PHONE_LINK} className="inline-flex items-center gap-2 rounded-full bg-[#20243b] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#161a2f]">
              <span aria-hidden="true">📞</span><span>Call {PHONE_DISPLAY}</span>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe57]">
              <span>WhatsApp us now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

/** Reuses the Barnet bottom-page pattern across the project archive. */
export function CaseStudyBottom({ projectType = "architectural drawing" }: { projectType?: string }) {
  return (
    <>
      <section className="border-t border-[#ecdcd5] bg-[#fdf5f2] py-9 sm:py-12" aria-labelledby="project-quote-heading">
        <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#ae6761]">WEDRAWPLANS · Fixed-fee drawing services</p>
          <h2 id="project-quote-heading" className="mt-3 text-[21px] font-semibold leading-snug text-slate-900 sm:text-[26px]">Ready to discuss your project?</h2>
          <p className="mx-auto mt-3 max-w-3xl text-[13px] leading-7 text-slate-700">
            Whether you are considering a {projectType}, planning application or Building Regulations drawings, tell us the property postcode and what you would like to achieve. We can review the requirements and provide a fixed-fee quotation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={QUOTE} className="rounded-full bg-[#64b7c4] px-6 py-3 text-[13px] font-semibold text-white shadow-sm hover:bg-[#4da4b4]">Get your fixed-fee quote</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-[13px] font-semibold text-slate-800 hover:border-[#64b7c4]">Chat on WhatsApp</a>
          </div>
          <p className="mt-5 text-[13px] text-slate-800">Prefer to speak? Call <a href={PHONE_LINK} className="font-semibold underline">{PHONE_DISPLAY}</a></p>
        </div>
      </section>

      <section className="border-t border-[#e6eae8] bg-[#f8f4f0] py-10" aria-labelledby="google-feedback-heading">
        <div className="mx-auto max-w-5xl px-4 text-center lg:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#a4635d]">Client feedback</p>
          <h2 id="google-feedback-heading" className="mt-2 text-[20px] font-semibold text-slate-900 sm:text-[24px]">Customer feedback on Google</h2>
          <div className="mt-4 text-[30px] tracking-[0.12em] text-[#e8a628]" aria-label="Five-star customer review" role="img">★★★★★</div>
          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-slate-700">
            WEDRAWPLANS has received five-star customer feedback. Read our Google Business Profile to see published reviews.
          </p>
          <a href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-[13px] font-semibold text-slate-800 hover:border-[#64b7c4]">
            View WEDRAWPLANS on Google
          </a>
        </div>
      </section>
    </>
  );
}

export function CaseStudyFooter() {
  return (
    <>
      <footer className="border-t border-[#2a3050] bg-[#20243b]">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
          <div className="flex flex-col items-center text-center">
            <Link href="/" className="inline-flex items-center justify-center">
              <img src="/images/wedrawplans-logo.png" alt="WEDRAWPLANS" className="h-20 w-auto object-contain" />
            </Link>
            <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/70">Architectural Drawing Consultants</div>
            <p className="mt-4 max-w-2xl text-[13px] leading-7 text-white/80">
              WEDRAWPLANS provide architectural drawings for house extensions, loft conversions, planning applications, Building Regulations and residential development projects across London and surrounding areas.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href={PHONE_LINK} className="inline-flex justify-center rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20243b] hover:bg-slate-100">Call {PHONE_DISPLAY}</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#1ebe57]">WhatsApp us</a>
              <Link href={QUOTE} className="inline-flex justify-center rounded-full border border-white/35 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-[#20243b]">Request a quote</Link>
              <a href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-full border border-white/35 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-[#20243b]">Google Profile</a>
            </div>
            <div className="mt-8 grid w-full max-w-4xl gap-6 border-t border-white/10 pt-8 text-center md:grid-cols-3">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Phone</div>
                <a href={PHONE_LINK} className="mt-2 block text-[12px] text-white/65 hover:text-white">{PHONE_DISPLAY}</a>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Services</div>
                <div className="mt-2 flex flex-col gap-1 text-[12px] text-white/65">
                  <Link href="/extensions" className="hover:text-white">Extension Drawings</Link>
                  <Link href="/loft-conversion" className="hover:text-white">Loft Drawings</Link>
                  <Link href="/building-regulation-drawings" className="hover:text-white">Building Regulations</Link>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Studio</div>
                <div className="mt-2 text-[12px] leading-6 text-white/65">201 Borough High Street<br />London SE1 1JA<br />United Kingdom</div>
              </div>
            </div>
            <nav aria-label="Footer navigation" className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] text-white/65">
              <Link href="/" className="hover:text-white">Home</Link>
              <Link href="/areas" className="hover:text-white">Areas We Cover</Link>
              <Link href="/case-studies" className="hover:text-white">Planning Approvals &amp; Projects</Link>
              <Link href="/new-build" className="hover:text-white">New Build</Link>
              <Link href="/commercial" className="hover:text-white">Commercial</Link>
            </nav>
            <div className="mt-6 text-[11px] text-white/45">Copyright {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.</div>
          </div>
        </div>
      </footer>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp with WEDRAWPLANS"
        className="fixed bottom-4 right-4 z-[80] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/70 hover:bg-[#1ebe57]">
        <span className="text-xl" aria-hidden="true">💬</span>
      </a>
    </>
  );
}
