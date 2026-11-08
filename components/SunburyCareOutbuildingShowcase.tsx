import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "../data/caseStudies";

type Props = { project: CaseStudy };

export default function SunburyCareOutbuildingShowcase({ project }: Props) {
  const slides = project.galleryImages || [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const active = slides[Math.min(selectedIndex, Math.max(0, slides.length - 1))];
  const isDrawing = selectedIndex >= 2;

  return (
    <div className="space-y-6 select-none" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <section className="overflow-hidden rounded-[22px] border border-[#d6e5db] bg-white shadow-[0_16px_45px_rgba(33,67,60,.07)]">
        <div className="border-b border-[#dce7df] bg-[#eaf3e9] px-5 py-7 sm:px-7 sm:py-9">
          <p className="text-[11px] font-extrabold uppercase tracking-[.18em] text-[#54734c]">Barnet · Certificate of Lawfulness granted · March 2026</p>
          <h2 className="mt-3 max-w-4xl text-[27px] font-semibold leading-[1.16] tracking-tight text-[#244346] sm:text-[35px]">
            A thoughtfully designed garden building for accessible care
          </h2>
          <p className="mt-4 max-w-4xl text-[14px] leading-7 text-[#51696c]">
            The brief called for a dedicated accessible space for care activities—without creating a separate home.
            WEDRAWPLANS developed a low-profile garden outbuilding linked to the existing household, with level access,
            turning and circulation space, and a purpose-designed accessible wet room. Barnet Council confirmed the
            proposed development was lawful under Class E.
          </p>
        </div>

        <div className="grid gap-3 border-b border-[#e1ebe5] px-4 py-5 sm:grid-cols-3 sm:px-6">
          {[
            ["THE PURPOSE", "Accessible ancillary care space"],
            ["THE DESIGN", "Step-free access and clear circulation"],
            ["THE OUTCOME", "Lawful Development Certificate granted"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-[13px] border border-[#e1eae3] bg-[#f8faf8] px-4 py-4">
              <p className="text-[10px] font-extrabold tracking-[.13em] text-[#9a7563]">{label}</p>
              <p className="mt-1.5 text-[14px] font-semibold leading-6 text-[#284b4e]">{value}</p>
            </div>
          ))}
        </div>

        <div className="px-4 pb-5 pt-6 sm:px-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[.17em] text-[#8f705e]">Original WEDRAWPLANS design</p>
              <h3 className="mt-1 text-[20px] font-semibold text-[#2c4b4d] sm:text-[24px]">Explore the design and architectural drawings</h3>
            </div>
            <span className="text-[12px] font-bold tabular-nums text-[#547178]">{selectedIndex + 1} / {slides.length}</span>
          </div>

          {active ? (
            <>
              <div className="overflow-hidden rounded-[15px] border border-[#dce5df] bg-[#f4f7f4]">
                <div className={isDrawing ? "relative aspect-[1.36/1] w-full" : "relative aspect-[1.53/1] w-full"}>
                  <Image
                    key={active.src}
                    src={active.src}
                    alt={active.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    priority={selectedIndex === 0}
                    className="pointer-events-none object-contain"
                    draggable={false}
                  />
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <p className="min-w-0 flex-1 text-[13px] font-semibold text-[#3f6063]">{active.caption}</p>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setSelectedIndex((i) => (i + slides.length - 1) % slides.length)}
                    aria-label="Previous project image"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bcd6c8] bg-white text-[21px] text-[#276b69] hover:bg-[#edf6ed] focus-visible:ring-2 focus-visible:ring-[#72a5a3]">‹</button>
                  <button type="button" onClick={() => setSelectedIndex((i) => (i + 1) % slides.length)}
                    aria-label="Next project image"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bcd6c8] bg-white text-[21px] text-[#276b69] hover:bg-[#edf6ed] focus-visible:ring-2 focus-visible:ring-[#72a5a3]">›</button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5" aria-label="Select outbuilding project drawing">
                {slides.map((slide, i) => (
                  <button key={slide.src} type="button" onClick={() => setSelectedIndex(i)} aria-label={"Show " + slide.caption}
                    aria-current={selectedIndex === i ? "true" : undefined}
                    className={"min-w-0 rounded-[11px] border p-1.5 text-left transition focus-visible:ring-2 focus-visible:ring-[#76a7a3] " +
                      (selectedIndex === i ? "border-[#3e8781] bg-[#edf7ef] shadow-sm" : "border-[#dae6df] bg-white hover:border-[#8ab8ab]")}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#f3f7f5]">
                      <Image src={slide.src} alt="" fill sizes="(max-width: 640px) 29vw, 135px" className="pointer-events-none object-contain" draggable={false}/>
                    </div>
                    <span className="mt-1.5 block text-[10px] font-semibold leading-4 text-[#4f6b6c]">{i < 2 ? "3D view " + (i + 1) : "Drawing " + (i - 1)}</span>
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[17px] border border-[#dce6df] bg-white p-5 sm:p-6">
          <p className="text-[11px] font-extrabold uppercase tracking-[.13em] text-[#668065]">Designing for accessible use</p>
          <h3 className="mt-2 text-[19px] font-semibold text-[#2b494c]">An adaptable, carefully planned interior</h3>
          <p className="mt-3 text-[13px] leading-7 text-[#576d70]">
            The layout brings together wheelchair circulation, an accessible wet room, step-free entry and space
            for care-related equipment. The drawings explain the interior arrangement as well as the building’s
            relationship to the house and garden.
          </p>
        </div>
        <div className="rounded-[17px] border border-[#dce6df] bg-white p-5 sm:p-6">
          <p className="text-[11px] font-extrabold uppercase tracking-[.13em] text-[#668065]">Getting the planning route right</p>
          <h3 className="mt-2 text-[19px] font-semibold text-[#2b494c]">A lawful use demonstrated through drawings</h3>
          <p className="mt-3 text-[13px] leading-7 text-[#576d70]">
            Barnet assessed the ancillary purpose, the modest single-storey form, garden location and Class E limits.
            The proposal was confirmed lawful in a Certificate issued on 30 March 2026, reference 26/0062/192.
          </p>
        </div>
      </section>

      <section className="rounded-[18px] border border-[#cbded2] bg-[#eff6ef] px-5 py-6 sm:px-7">
        <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#52734f]">Planning a garden studio or outbuilding?</p>
        <h3 className="mt-2 text-[21px] font-semibold leading-snug text-[#28484b]">Start with the right drawings and the right planning route</h3>
        <p className="mt-3 text-[13px] leading-7 text-[#506b6e]">
          Whether you are considering a garden studio, office, therapy room or an ancillary care building,
          the intended use matters. WEDRAWPLANS can assess your proposal, prepare coordinated plans,
          elevations and 3D views, and advise on the appropriate application for your specific property.
        </p>
        <Link href="#case-study-quote" className="mt-5 inline-flex rounded-full bg-[#276e74] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1c565d]">
          Get your fixed-fee drawing quote →
        </Link>
      </section>
    </div>
  );
}
