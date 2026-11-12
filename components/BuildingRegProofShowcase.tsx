import Image from "next/image";
import Link from "next/link";
import CranbournePromo from "./CranbournePromo";
import GrangeRoadPromo from "./GrangeRoadPromo";
import BarnetCombinedExtensionPromo from "./BarnetCombinedExtensionPromo";

const domestic = [
  {
    id: "loft",
    status: "Mill Hill · Householder planning and lawful-development outcomes",
    title: "Loft Building Regulations details, roof structure and insulation",
    desc: "The Reddings house extension, basement and loft project has original rafter and joist drawings, Building Regulations construction details and insulation specifications. See how the technical information sits alongside the separately documented planning and lawful-development outcomes.",
    image: "/images/case-studies/the-reddings/full-sheet-08.jpg",
    alt: "Complete original WEDRAWPLANS Building Regulations construction detail sheet from the Reddings house extension and loft project",
    href: "/case-studies/the-reddings-mill-hill-extension-basement-loft",
    note: "Original construction detail drawing, not a Building Control approval certificate",
  },
  {
    id: "flats",
    status: "Brockley · Planning permission 2025 · Technical drawings 2026",
    title: "Building Control technical drawings for converting property into flats",
    desc: "The Brockley Road conversion illustrates protected access, fire and acoustic separation, smoke ventilation and altered residential layouts. The later technical section is distinct from the original planning drawings approved for the two flats.",
    image: "/images/case-studies/brockley-road-lewisham-two-flat-conversion/brockley-proposed-section-a.webp",
    alt: "Complete WEDRAWPLANS technical section showing fire and acoustic separation and protected access for a Brockley two-flat conversion",
    href: "/case-studies/brockley-road-lewisham-two-flat-conversion",
    note: "Separate Building Control design sheet; not a planning-approved drawing",
  },
] as const;

const larger = [
  {
    id: "woolwich",
    place: "Woolwich Road · Greenwich",
    title: "Two more flats · Building Regulations, planning and structural coordination",
    desc: "Greenwich approved two further residential flats above an original 14-flat mixed-use scheme. Explore original WEDRAWPLANS planning drawings, the BR01-led Building Regulations technical set and rooftop steelwork construction photographs; completion certification is confirmed by the client.",
    image: "/images/case-studies/700-woolwich-road-greenwich-two-new-flats/construction-02-roof-steel-frame.webp",
    alt: "Original Woolwich Road rooftop steel-frame construction photograph showing WEDRAWPLANS residential structural coordination",
    href: "/case-studies/700-woolwich-road-greenwich-two-new-flats",
  },
  {
    id: "hyde",
    place: "The Hyde · Colindale",
    title: "Larger residential and mixed-use planning experience",
    desc: "A six-storey planning-approved scheme for 18 flats and commercial floorspace. A planning precedent, not evidence of Building Control approval or classification as a higher-risk building.",
    image: "/images/hyde-cgi-main.jpg",
    alt: "WEDRAWPLANS design visual for a six-storey residential and mixed-use building at The Hyde, Colindale",
    href: "/case-studies/the-hyde-colindale-major-residential-development",
  },
] as const;

export default function BuildingRegProofShowcase() {
  return (
    <div id="building-regulation-project-samples">
      <section className="border-b border-[#d4e4dc] bg-white py-10 sm:py-12" aria-labelledby="br-projects-heading">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#2c795e]">Sample of WEDRAWPLANS approved projects and technical drawings</p>
          <h2 id="br-projects-heading" className="mt-2 max-w-4xl text-[26px] font-bold leading-tight text-[#1d404a] sm:text-[33px]">
            Planning + Building Regulations + structural engineering coordination
          </h2>
          <p className="mt-3 max-w-4xl text-[14px] leading-7 text-[#526a70]">
            Planning a rear extension, kitchen extension or loft conversion? WEDRAWPLANS can coordinate your
            planning drawings or Lawful Development Certificate, Building Regulations technical pack and
            structural engineer input within one clearly defined quotation. Our real project examples below
            show both approved planning work and original technical sheets, with the stages labelled separately.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["1 · Planning", "Proposed plans, elevations, planning applications, prior approval or lawful-development drawings where appropriate."],
              ["2 · Building Regulations", "Construction details, roof and floor build-ups, insulation, fire safety, drainage and technical Building Control plans."],
              ["3 · Structural coordination", "Coordinate beams, openings, foundations and calculations with a suitably qualified structural engineer where instructed."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-[#d9e8df] bg-[#f5faf7] p-4">
                <h3 className="text-[14px] font-bold text-[#244b50]">{title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#536f72]">{description}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 max-w-4xl text-[12px] leading-6 text-slate-600">
            Council planning decisions do not themselves grant Building Regulations approval. Structural calculations,
            specialist design and statutory approvals are separate and are included only where agreed in writing.
          </p>
          <a href="#quote-form" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#236d74] px-5 py-3 text-[13px] font-bold text-white hover:bg-[#19585f]">
            Get my planning + Building Regulations quote
          </a>
        </div>
      </section>

      <CranbournePromo context="Building Regulations" />
      <GrangeRoadPromo context="service" />
      <BarnetCombinedExtensionPromo context="service" />

      <section className="border-b border-[#d6e5de] bg-[#f7faf8] py-10 sm:py-12" aria-labelledby="br-loft-conversion-examples">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#2a785f]">More original residential technical sheets</p>
          <h2 id="br-loft-conversion-examples" className="mt-2 max-w-4xl text-[25px] font-bold leading-tight text-[#24434b] sm:text-[30px]">
            Loft Building Regulations drawings and residential flat conversions
          </h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {domestic.map((item) => (
              <article key={item.id} className="flex min-w-0 flex-col overflow-hidden rounded-[19px] border border-[#d4e2d9] bg-white shadow-[0_12px_28px_rgba(26,68,58,.06)]">
                <Link href={item.href} aria-label={"Explore " + item.title} className="block border-b border-[#e3ebe5] bg-[#f5f8f6]">
                  <div className="relative aspect-[16/10]">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1023px) 100vw, 50vw" className="pointer-events-none object-contain" />
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#29745d]">{item.status}</p>
                  <h3 className="mt-2 text-[20px] font-bold leading-tight text-[#23454d]">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-[#536d72]">{item.desc}</p>
                  <p className="mt-2 text-[11px] leading-5 text-slate-500">{item.note}</p>
                  <Link href={item.href} className="mt-auto inline-flex self-start pt-5 text-[13px] font-bold text-[#236b73] underline underline-offset-4">
                    View original drawing sheets and case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d6e5de] bg-white py-10 sm:py-12" aria-labelledby="br-larger-projects-heading">
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[.17em] text-[#2a785f]">Specialist residential and commercial work</p>
          <h2 id="br-larger-projects-heading" className="mt-2 max-w-4xl text-[25px] font-bold leading-tight text-[#24434b] sm:text-[30px]">
            New-build homes, new flats, larger residential buildings and commercial works
          </h2>
          <p className="mt-3 max-w-4xl text-[13px] leading-7 text-[#536d72]">
            We also quote for new-build Building Regulation drawings, flats, structural alterations and mixed-use
            building projects. The larger examples document their evidenced planning and technical stages; specialist design,
            structural engineering and Building Control requirements depend on the specific scheme.
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {larger.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-[19px] border border-[#d4e2d9] bg-[#f7faf8]">
                <Link href={item.href} aria-label={"View " + item.place} className="block bg-white">
                  <div className="relative aspect-[16/9]">
                    <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1023px) 100vw, 50vw" className="pointer-events-none object-contain" />
                  </div>
                </Link>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#287660]">{item.place} · {item.id === "woolwich" ? "Planning + Building Regulations + structure" : "Planning-stage project"}</p>
                  <h3 className="mt-2 text-[20px] font-bold text-[#23454d]">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-7 text-[#536d72]">{item.desc}</p>
                  <Link href={item.href} className="mt-4 inline-flex text-[13px] font-bold text-[#246a74] underline underline-offset-4">Explore planning project</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4 rounded-[19px] border border-[#c7ddcf] bg-[#f3faf6] p-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-[18px] font-bold text-[#24464c]">Need new-build or specialist Building Regulation drawings?</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#526c72]">
                We review the construction, structural, fire, access and services requirements and the specialist
                consultants needed. Higher-risk buildings are subject to the separate Building Safety Regulator process
                and a project-specific competence assessment; approval is never assumed.
              </p>
              <a href="https://www.gov.uk/guidance/building-control-approval-for-higher-risk-buildings" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex text-[12px] font-semibold text-[#276e75] underline underline-offset-2">
                Official higher-risk building guidance
              </a>
            </div>
            <a href="#quote-form" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#236d74] px-5 py-3 text-center text-[12px] font-bold text-white">
              Request a technical project quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
