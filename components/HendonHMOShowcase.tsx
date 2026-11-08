import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { CaseStudy } from "../data/caseStudies";

type View = "proposed" | "existing" | "ground" | "first" | "loft";

const FOLDER = "/images/case-studies/sevington-road-hendon-seven-bedroom-hmo/";

const views: { id: View; label: string; caption: string; src: string; ratio: string; alt: string }[] = [
  { id: "proposed", label: "Approved proposed plans", caption: "Drawing P03 · Revision C · Ground, first and loft layouts", src: FOLDER + "approved-proposed-p03-rev-c.webp", ratio: "3309/2339", alt: "Complete approved WEDRAWPLANS planning drawing P03 revision C for a seven-bedroom HMO conversion in Hendon, with the property number omitted" },
  { id: "existing", label: "Existing house plans", caption: "Drawing P02 · Revision A · Existing ground, first and loft layouts", src: FOLDER + "approved-existing-p02-rev-a.webp", ratio: "3309/2339", alt: "Complete existing-floor layout drawing P02 revision A showing the Hendon house before the HMO conversion, with identifying details omitted" },
  { id: "ground", label: "Ground floor detail", caption: "Proposed ground floor · Enlarged extract of Drawing P03 C", src: FOLDER + "proposed-ground-floor-detail.webp", ratio: "793/1566", alt: "Enlarged view of the proposed ground-floor HMO room, kitchen, shower and circulation arrangements" },
  { id: "first", label: "First floor detail", caption: "Proposed first floor · Enlarged extract of Drawing P03 C", src: FOLDER + "proposed-first-floor-detail.webp", ratio: "645/1223", alt: "Enlarged first-floor HMO room layout showing two letting rooms, bathrooms and internal stair" },
  { id: "loft", label: "Loft floor detail", caption: "Proposed loft floor · Enlarged extract of Drawing P03 C", src: FOLDER + "proposed-loft-floor-detail.webp", ratio: "620/1239", alt: "Enlarged proposed loft-floor HMO accommodation arrangement with kitchen and shower facilities" },
];

const factors = [
  ["The right location", "The officer considered the varied housing character in West Hendon, nearby public transport and the site's relationship to surrounding homes."],
  ["A workable room layout", "The assessment reviewed the proposed room sizes, outlook, daylight, internal arrangements and the provision of residential amenity space."],
  ["Neighbouring amenity", "Six objections raised concerns including noise, movement, parking and refuse. The decision addressed these matters through its reasoning and specific conditions."],
  ["Conditions for occupation", "The permission limited occupation to a maximum of 13 people and required matters including sound-insulation certificates, acoustic details and refuse arrangements."],
];

export default function HendonHMOShowcase({ project }: { project: CaseStudy }) {
  const [active, setActive] = useState<View>("proposed");
  const drawing = views.find((v) => v.id === active) || views[0];

  return (
    <div className="space-y-7 select-none" onContextMenu={(event) => event.preventDefault()} onDragStart={(event) => event.preventDefault()}>
      <section aria-labelledby="hmo-hendon-story" className="overflow-hidden rounded-[20px] border border-[#d6e4dd] bg-white shadow-[0_16px_38px_rgba(18,71,71,.06)]">
        <div className="bg-[#eef7f2] px-5 py-6 sm:px-8 sm:py-8">
          <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#2b795b]">Barnet Council · Full planning permission granted</p>
          <h2 id="hmo-hendon-story" className="mt-3 text-[25px] font-semibold leading-tight text-[#264a50] sm:text-[31px]">
            From family dwelling to a carefully assessed seven-bedroom HMO
          </h2>
          <p className="mt-4 text-[14px] leading-7 text-[#536d72]">
            A house in multiple occupation (HMO) proposal calls for more than rearranging bedrooms.
            It needs a convincing architectural layout, planning justification and a clear response
            to how the building will work for future residents and neighbours.
          </p>
          <p className="mt-3 text-[13px] leading-7 text-[#536d72]">
            For this West Hendon project, WEDRAWPLANS prepared architectural plans showing the
            accommodation across the ground, first and loft floors. Barnet's planning assessment
            considered the seven-bedroom proposal against residential space, local character,
            transport access, parking, neighbours and noise before permission was granted in December 2018.
          </p>
        </div>
        <div className="grid gap-3 border-t border-[#d9e6df] px-4 py-5 sm:grid-cols-3 sm:px-6">
          {[
            ["7", "HMO bedrooms in the approved scheme"],
            ["13", "Maximum people stated in the planning condition"],
            ["6 Dec 2018", "Planning decision issued by Barnet"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[14px] border border-[#dfe8e2] bg-[#f7faf8] p-4">
              <p className="text-[23px] font-bold tracking-tight text-[#28655f]">{value}</p>
              <p className="mt-1 text-[11px] leading-5 text-[#597679]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="hmo-assessment" className="rounded-[20px] border border-[#e0e7e2] bg-white p-5 sm:p-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[.15em] text-[#a36b60]">Planning considerations</p>
        <h2 id="hmo-assessment" className="mt-2 text-[23px] font-semibold leading-tight text-[#294b50] sm:text-[28px]">
          How the application addressed the issues that matter
        </h2>
        <p className="mt-3 text-[13px] leading-7 text-[#587276]">
          The delegated report records a detailed assessment rather than a simple bedroom-count exercise.
          It explains why this particular location and accommodation arrangement were considered acceptable
          despite neighbourhood concerns.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {factors.map(([heading, description], i) => (
            <article key={heading} className="rounded-[14px] border border-[#dce9e1] bg-[#f8fbf8] p-4 sm:p-5">
              <p className="text-[11px] font-bold tracking-[.13em] text-[#2b7965]">{String(i + 1).padStart(2,"0")}</p>
              <h3 className="mt-2 text-[15px] font-semibold text-[#294f52]">{heading}</h3>
              <p className="mt-2 text-[12px] leading-6 text-[#60787a]">{description}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-[12px] leading-6 text-[#698183]">
          Planning conditions were attached to protect future and neighbouring occupiers.
          The decision is distinct from an HMO licence, Building Regulations approval and evidence of implementation.
        </p>
      </section>

      <section aria-labelledby="hmo-drawings" className="overflow-hidden rounded-[20px] border border-[#d7e5de] bg-white shadow-[0_16px_36px_rgba(20,68,69,.04)]">
        <div className="bg-[#f0f7f3] px-5 py-5 sm:px-7">
          <p className="text-[11px] font-extrabold uppercase tracking-[.15em] text-[#26785d]">Architectural drawings · Original approved sheets</p>
          <h2 id="hmo-drawings" className="mt-2 text-[23px] font-semibold text-[#294c50] sm:text-[28px]">Explore the seven-bedroom HMO layout</h2>
          <p className="mt-3 text-[12px] leading-6 text-[#5b7477]">
            Compare the existing house with the approved proposed arrangement. For an easier phone view,
            select a floor detail, or return to the complete original drawing sheet at any time.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 border-b border-[#e2eae4] px-4 py-4 sm:grid-cols-3 sm:px-6" role="group" aria-label="Architectural drawing views">
          {views.map(v => (
            <button key={v.id} type="button" aria-pressed={active===v.id} onClick={()=>setActive(v.id)}
              className={"min-h-[42px] rounded-xl px-3 py-2.5 text-center text-[11px] font-semibold leading-5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23777d] " + (active===v.id?"bg-[#256d74] text-white":"border border-[#d5e6dd] bg-white text-[#3c6669] hover:bg-[#f1f8f3]")}>{v.label}</button>
          ))}
        </div>
        <figure className="mx-3 my-4 overflow-hidden rounded-xl border border-[#e3eae5] bg-[#fcfdfb] px-2 py-3 sm:mx-5 sm:px-4">
          <div className={"relative mx-auto w-full " + (active==="ground"||active==="first"||active==="loft" ? "max-w-[520px]" : "")} style={{aspectRatio:drawing.ratio}}>
            <Image key={drawing.id} src={drawing.src} fill
              alt={drawing.alt}
              sizes={active==="ground"||active==="first"||active==="loft"?"(max-width: 768px) 96vw, 520px":"(max-width: 1024px) 96vw, 65vw"}
              className="pointer-events-none object-contain" draggable={false} />
          </div>
          <figcaption className="border-t border-[#e4ebe6] px-2 pt-3 text-[12px] leading-6 text-[#5c7778]">{drawing.caption}</figcaption>
        </figure>
        <div className="border-t border-[#e2eae4] px-5 py-4 sm:px-7">
          <p className="text-[11px] leading-6 text-[#637d7d]">
            The large floor views are enlarged extracts of the original P03 Revision C sheet,
            not separate drawings or new proposals. The approved-plan schedule also included
            P01, P04, P05 and the Design and Access Statement.
          </p>
        </div>
      </section>

      <section className="rounded-[19px] border border-[#cfdfd7] bg-[#edf7f2] px-5 py-6 sm:px-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[.16em] text-[#27775f]">HMO &amp; property conversion drawing services</p>
        <h2 className="mt-2 text-[21px] font-semibold leading-tight text-[#274b50] sm:text-[25px]">
          Considering an HMO, shared house or residential conversion in Barnet?
        </h2>
        <p className="mt-3 text-[13px] leading-7 text-[#536e72]">
          WEDRAWPLANS can assess the proposed use and planning route, prepare existing and proposed drawings,
          and help present the building's layout and the issues likely to matter to the local authority.
          We can also advise what specialist information or separate approval processes may be needed.
        </p>
        <p className="mt-2 text-[11px] leading-6 text-[#647c7d]">
          This is a historic 2018 planning decision. Whether the permission was implemented,
          the building currently operates as an HMO, or a licence was obtained has not been established from the supplied record.
          Every new application must be assessed under the current rules and local conditions.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href="#case-study-quote" className="inline-flex rounded-full bg-[#256c74] px-5 py-3 text-[12px] font-bold text-white hover:bg-[#1c575d]">Request your fixed-fee drawing quote</a>
          <Link href="/hmo-planning-drawings" className="inline-flex rounded-full border border-[#a8c9bc] bg-white px-5 py-3 text-[12px] font-semibold text-[#266b6f]">HMO planning &amp; drawing services</Link>
        </div>
      </section>
    </div>
  );
}
