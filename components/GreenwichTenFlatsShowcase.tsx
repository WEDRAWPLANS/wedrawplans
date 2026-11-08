import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "../data/caseStudies";

export default function GreenwichTenFlatsShowcase({ project }: { project: CaseStudy }) {
  const [view, setView] = useState<"full" | "detail">("detail");
  const full = project.heroImage;
  const detail = project.secondaryImage;

  return (
    <div className="space-y-7 select-none" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <section aria-labelledby="greenwich-tenflats-story" className="overflow-hidden rounded-[20px] border border-[#d3e5dc] bg-white shadow-[0_14px_37px_rgba(21,65,66,.06)]">
        <div className="border-b border-[#d4e7db] bg-[#edf7ef] px-5 py-6 sm:px-8">
          <p className="text-[11px] font-extrabold uppercase tracking-[.17em] text-[#257b5b]">Royal Borough of Greenwich · Existing-use lawfulness certificate</p>
          <h2 id="greenwich-tenflats-story" className="mt-3 max-w-3xl text-[25px] font-semibold leading-tight text-[#24474b] sm:text-[33px]">
            Ten self-contained flats. A complex evidence trail. One successful decision.
          </h2>
          <p className="mt-4 max-w-4xl text-[14px] leading-7 text-[#526e70]">
            In Plumstead, a pair of historic mid-terrace buildings with converted roofspace was already used as
            ten self-contained homes. The challenge was not to obtain permission for ten new flats.
            It was to demonstrate, with sufficient reliable evidence, that the existing residential use
            had become lawful under the planning rules applicable when the application was made.
          </p>
        </div>
        <div className="grid gap-3 px-4 py-5 sm:grid-cols-3 sm:px-6">
          {[
            ["10", "Existing self-contained flats certified"],
            ["2019", "Application evidence assessed"],
            ["17 Mar 2020", "Certificate granted by Greenwich"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[13px] border border-[#dde9e2] bg-[#f6faf7] px-4 py-4">
              <p className="text-[22px] font-bold tracking-tight text-[#255a55]">{value}</p>
              <p className="mt-1 text-[11px] leading-5 text-[#5a7575]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="greenwich-tenflats-evidence" className="rounded-[20px] border border-[#d9e7e1] bg-white p-5 sm:p-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#a06b5d]">The planning challenge</p>
        <h2 id="greenwich-tenflats-evidence" className="mt-2 text-[23px] font-semibold text-[#284b4e] sm:text-[29px]">
          Turning a difficult historic-use record into a convincing case
        </h2>
        <p className="mt-3 text-[13px] leading-7 text-[#577175]">
          A previous certificate application had been refused in June 2019 because the council considered
          the evidence of continuous use insufficient. The later application was assessed against a stronger,
          wider collection of documents: existing architectural floor plans and elevations, tenancy agreements,
          statutory declarations, council-tax records, housing-benefit information and accommodation history.
        </p>
        <p className="mt-3 text-[13px] leading-7 text-[#577175]">
          Importantly, individual tenancy agreements did not themselves cover every part of the four-year
          period then relevant to the application. The officer's report identified corroborating Greenwich
          council-tax correspondence, registration histories and records of occupation. An earlier council
          inspection also confirmed ten self-contained flats with no shared facilities.
        </p>
        <p className="mt-3 text-[13px] leading-7 text-[#577175]">
          We provided architectural drawing support for the existing building arrangements, helping the
          submission explain the internal layout alongside the separate documentary evidence.
          On the balance of probability, Greenwich accepted that the ten-flat use had continued for the
          relevant period and issued the existing-use certificate under section 191.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["An earlier refusal", "The initial application did not demonstrate the required continuous use to the council's satisfaction."],
            ["Corroborated evidence", "Tenancy documentation was considered alongside council-tax history, housing records and inspection findings."],
            ["Lawfulness established", "Greenwich certified the existing use of ten independent flats, assessed as lawful on 22 November 2019."],
          ].map(([title, detail]) => (
            <div key={title} className="rounded-xl border border-[#dce8e1] bg-[#f7faf8] px-4 py-4">
              <h3 className="text-[13px] font-bold text-[#2f5c5c]">{title}</h3>
              <p className="mt-2 text-[12px] leading-6 text-[#5c7777]">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="greenwich-tenflats-plan" className="overflow-hidden rounded-[20px] border border-[#d8e5df] bg-white shadow-[0_12px_30px_rgba(20,66,65,.05)]">
        <div className="border-b border-[#dce9e0] bg-[#f2f8f4] px-4 py-5 sm:px-7">
          <p className="text-[11px] font-extrabold uppercase tracking-[.15em] text-[#26795e]">Original WEDRAWPLANS project drawing</p>
          <h2 id="greenwich-tenflats-plan" className="mt-2 text-[23px] font-semibold text-[#28494c] sm:text-[27px]">
            Understand the existing residential layout
          </h2>
          <p className="mt-2 text-[13px] leading-6 text-[#5d7778]">
            A selected existing ground- and first-floor drawing from the project record.
            Switch between the complete architectural sheet and a larger plan detail.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 px-4 py-4 sm:px-6" role="group" aria-label="Drawing display">
          <button type="button" aria-pressed={view==="detail"} onClick={()=>setView("detail")}
            className={"rounded-full px-4 py-2.5 text-[12px] font-semibold focus-visible:ring-2 focus-visible:ring-[#28797c] "+(view==="detail"?"bg-[#286f73] text-white":"border border-[#cbded5] bg-white text-[#42676a]")}>
            <span aria-hidden="true">⌕ </span> Large plan detail
          </button>
          <button type="button" aria-pressed={view==="full"} onClick={()=>setView("full")}
            className={"rounded-full px-4 py-2.5 text-[12px] font-semibold focus-visible:ring-2 focus-visible:ring-[#28797c] "+(view==="full"?"bg-[#286f73] text-white":"border border-[#cbded5] bg-white text-[#42676a]")}>
            View complete sheet
          </button>
        </div>
        <figure className="mx-3 mb-4 overflow-hidden rounded-xl border border-[#e1e9e4] bg-[#f9faf8] p-2 sm:mx-6 sm:p-4">
          <div className={"relative mx-auto w-full "+(view==="detail"?"aspect-[1240/770]":"aspect-[2048/1447]")}>
            <Image key={view} src={view==="detail"?detail:full}
              alt={view==="detail"?"Enlarged existing ground and first-floor plans from a WEDRAWPLANS architectural survey in Plumstead, Greenwich":"Complete original WEDRAWPLANS existing architectural floor-plan drawing sheet, with the property number removed"}
              fill sizes="(max-width: 1024px) 100vw, 65vw" className="pointer-events-none object-contain" draggable={false}/>
          </div>
          <figcaption className="mt-2 px-2 pb-1 text-[11px] leading-6 text-[#62797a]">
            One selected existing-floor drawing. The certificate confirms the historic ten-flat use on the
            full documentary and site-inspection record; this drawing alone is not the complete ten-flat evidence.
          </figcaption>
        </figure>
      </section>

      <section className="rounded-[18px] border border-[#d0e3d5] bg-[#edf7f1] px-5 py-6 sm:px-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#277358]">Property owners · Landlords · Investors</p>
        <h2 className="mt-2 text-[21px] font-semibold leading-tight text-[#274d4e] sm:text-[25px]">
          Need drawings or evidence for a conversion, HMO or established residential use?
        </h2>
        <p className="mt-3 text-[13px] leading-7 text-[#577174]">
          A lawful-development case turns on the specific facts and reliable evidence.
          WEDRAWPLANS can help prepare existing plans, coordinate architectural information
          and explain which planning application route may apply to a multi-unit property.
          A new conversion, retrospective planning application and existing-use certificate are different processes.
        </p>
        <p className="mt-2 text-[11px] leading-6 text-[#637c7a]">
          This historic decision applied the law in force for a 2019 application; the relevant
          time limits and evidence requirements for a new application must be checked today.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#case-study-quote" className="inline-flex rounded-full bg-[#256e75] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1d565c]">Get your fixed-fee drawing quote</a>
          <Link href="/commercial/change-of-use" className="inline-flex rounded-full border border-[#a5cbbd] bg-white px-5 py-3 text-[12px] font-semibold text-[#286a6e]">Explore conversion drawing services</Link>
          <Link href="/hmo-planning-drawings#approved-projects" className="inline-flex rounded-full border border-[#a5cbbd] bg-white px-5 py-3 text-[12px] font-semibold text-[#286a6e]">Compare our residential planning projects</Link>
          <Link href="/case-studies/sevington-road-hendon-seven-bedroom-hmo-planning-approval" className="inline-flex rounded-full border border-[#a5cbbd] bg-white px-5 py-3 text-[12px] font-semibold text-[#286a6e]">Related: Hendon HMO permission</Link>
        </div>
      </section>
    </div>
  );
}
