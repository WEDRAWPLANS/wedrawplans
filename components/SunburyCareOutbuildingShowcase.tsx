import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "../data/caseStudies";

export default function SunburyCareOutbuildingShowcase({ project }: { project: CaseStudy }) {
  const sheets = (project.galleryImages || []).filter((image) => image.src.includes("approved-"));
  const [selected, setSelected] = useState(0);
  const active = sheets[Math.min(selected, sheets.length - 1)];
  const change = (step: number) => setSelected((current) => (current + step + sheets.length) % sheets.length);

  return (
    <div className="space-y-8 select-none" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <section aria-label="Architectural visualisation of the garden care outbuilding" className="overflow-hidden rounded-[22px] border border-[#d9e6df] bg-white shadow-[0_15px_40px_rgba(22,69,70,.06)]">
        <div className="border-b border-[#dfebe5] bg-[#eaf6ef] px-5 py-5 sm:px-7">
          <p className="text-[11px] font-extrabold uppercase tracking-[.17em] text-[#267359]">Barnet Council · Certificate of Lawfulness granted</p>
          <h3 className="mt-2 text-[24px] font-semibold leading-tight text-[#23474b] sm:text-[29px]">A garden building designed with purpose</h3>
          <p className="mt-2 max-w-4xl text-[13px] leading-7 text-[#527074]">
            A light-filled ancillary care space, carefully arranged to provide accessible facilities within a modest single-storey garden building.
            The architectural visualisation illustrates the proposed design, not a photograph of completed construction.
          </p>
        </div>
        <figure>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f2f7f4]">
            <Image src={project.heroImage} alt="Architectural visualisation of a single-storey rendered garden care building with a flat roof, glazed doors, step-free approach and landscaped garden" fill priority sizes="(max-width: 1024px) 100vw, 65vw" className="pointer-events-none object-contain" draggable={false} />
          </div>
          <figcaption className="border-t border-[#e6eee9] px-5 py-3 text-[12px] leading-6 text-[#617b7c] sm:px-7">
            Proposed ancillary garden care outbuilding · Sunbury Avenue, Mill Hill
          </figcaption>
        </figure>
      </section>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["30 March 2026", "Council decision"],
          ["2.5 m", "Maximum proposed building height"],
          ["Class E", "Lawfulness assessed under permitted development"],
        ].map(([number, label]) => (
          <div key={number} className="rounded-[15px] border border-[#dbe7df] bg-[#f6faf7] px-4 py-4">
            <p className="text-[19px] font-bold text-[#275751]">{number}</p>
            <p className="mt-1 text-[12px] leading-5 text-[#627b7a]">{label}</p>
          </div>
        ))}
      </div>

      <section className="rounded-[19px] border border-[#dbe5df] bg-white px-5 py-6 sm:px-7 sm:py-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[.17em] text-[#a16a60]">The challenge and solution</p>
        <h3 className="mt-2 text-[24px] font-semibold leading-tight text-[#23494c] sm:text-[28px]">
          Accessible everyday support, with a sensitive garden footprint
        </h3>
        <p className="mt-4 text-[13px] leading-7 text-[#526f71]">
          The brief called for a dedicated support space ancillary to the main residence, incorporating a treatment area,
          wheelchair circulation and an accessible wet room. Rather than introducing an independent home, WEDRAWPLANS
          developed an integrated garden-building solution that remains connected to the residential use of the house.
        </p>
        <p className="mt-3 text-[13px] leading-7 text-[#526f71]">
          The drawings demonstrated the building's single-storey form, flat roof, modest 2.5-metre height, garden siting,
          boundary relationship and the proposed internal arrangement. Barnet Council considered the specific use,
          dimensions and garden coverage before issuing a Certificate of Lawfulness under section 192.
        </p>
        <p className="mt-3 text-[12px] leading-6 text-[#647d7c]">
          This certificate confirms the lawfulness of the described proposal on the evidence and circumstances submitted.
          It is not a general approval for self-contained accommodation or a substitute for Building Regulations requirements.
        </p>
      </section>

      {active ? (
        <section aria-labelledby="sunbury-care-drawings-heading" className="overflow-hidden rounded-[20px] border border-[#dbe6e1] bg-white shadow-[0_15px_35px_rgba(20,65,66,.05)]">
          <div className="bg-[#f0f7f2] px-5 py-5 sm:px-7">
            <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#267359]">Original project drawings</p>
            <h3 id="sunbury-care-drawings-heading" className="mt-2 text-[23px] font-semibold text-[#264b4f] sm:text-[28px]">Explore the design behind the certificate</h3>
            <p className="mt-2 text-[13px] leading-7 text-[#597476]">Review the accessible floor arrangement and the complete elevation drawings showing how the garden building relates to the main home.</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
            <p className="text-[13px] font-semibold text-[#285359]">{active.caption}</p>
            <div className="flex gap-2">
              <button type="button" aria-label="Previous drawing" onClick={() => change(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bad2ca] bg-white text-[22px] text-[#27666b] focus-visible:ring-2 focus-visible:ring-[#208a8c]">‹</button>
              <button type="button" aria-label="Next drawing" onClick={() => change(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bad2ca] bg-white text-[22px] text-[#27666b] focus-visible:ring-2 focus-visible:ring-[#208a8c]">›</button>
            </div>
          </div>
          <figure className="mx-3 mb-4 overflow-hidden rounded-[12px] border border-[#dfebe5] bg-[#f8faf8] p-2 sm:mx-5 sm:p-4">
            <div className="relative mx-auto aspect-[1.364/1] w-full">
              <Image key={active.src} src={active.src} alt={active.alt} fill sizes="(max-width: 1024px) 100vw, 62vw" className="pointer-events-none object-contain" draggable={false} />
            </div>
          </figure>
          <div className="flex gap-3 overflow-x-auto border-t border-[#e3ece6] px-4 py-4 sm:px-6">
            {sheets.map((sheet, i) => (
              <button key={sheet.src} type="button" onClick={() => setSelected(i)} aria-label={"Show " + sheet.caption} aria-current={i === selected ? "true" : undefined}
                className={"w-[158px] shrink-0 rounded-xl border p-2 text-left transition " + (i === selected ? "border-[#3a8e84] bg-[#ebf7ef]" : "border-[#d8e7df] bg-white hover:border-[#9dc6b8]")}>
                <span className="relative block aspect-[1.364/1] overflow-hidden rounded-md bg-[#f7faf7]">
                  <Image src={sheet.src} alt="" fill sizes="158px" className="pointer-events-none object-contain" draggable={false} />
                </span>
                <span className="mt-2 block text-[11px] font-semibold leading-5 text-[#496b6d]">{sheet.caption}</span>
              </button>
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-[18px] border border-[#cbded4] bg-[#edf7f1] px-5 py-6 sm:px-7">
        <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#27745d]">Planning your own garden building?</p>
        <h3 className="mt-2 text-[21px] font-semibold leading-tight text-[#25494d]">Garden studio, office, hobby room or accessible care building</h3>
        <p className="mt-3 max-w-3xl text-[13px] leading-7 text-[#536f73]">
          Every garden outbuilding has its own planning considerations. We can assess its proposed use, site coverage,
          dimensions and boundary position, then prepare a clear fixed-fee architectural drawing quotation for the correct application route.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#case-study-quote" className="inline-flex rounded-full bg-[#236e74] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#195961]">Request your fixed-fee quote</a>
          <Link href="/garden-room-outbuilding-plans" className="inline-flex rounded-full border border-[#a7c9be] bg-white px-5 py-3 text-[12px] font-semibold text-[#28686b]">Explore outbuilding drawing services</Link>
        </div>
      </section>
    </div>
  );
}
