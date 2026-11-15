import WoolwichAnimationCard from "./WoolwichAnimationCard";
import Link from "next/link";
import ProjectQuickQuotePanel from "./ProjectQuickQuotePanel";

const mediaBase = "/images/case-studies/700-woolwich-road-greenwich-two-new-flats/";
const caseStudy = "/case-studies/700-woolwich-road-greenwich-two-new-flats";
const councilDocuments = "https://planning.royalgreenwich.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=_GRNW_DCAPR_102414";

const canvases = [
  { path: "completed-woolwich-road.png", fallback: "completed-woolwich-road.png", title: "Woolwich Road · finished residential development", label: "Finished building", description: "Original photograph of the completed mixed-use development." },
  { path: "planning-09-elevation.webp", fallback: "planning-09-elevation.webp", title: "WEDRAWPLANS planning elevation", label: "Approved planning", description: "Original submitted elevation drawings; Greenwich 20/0899/F." },
  { path: "br-01-fourth-floor-services.webp", fallback: "br-01-fourth-floor-services.webp", title: "WEDRAWPLANS Building Regulations drawing BR01", label: "Building Regulations", description: "Proposed fourth-floor layout and services coordination." },
  { path: "construction-02-roof-steel-frame.webp", fallback: "construction-02-roof-steel-frame.webp", title: "Rooftop steelwork construction", label: "Structural coordination", description: "Steel beams, columns and construction-stage coordination." },
  { path: "planning-05-cover-perspective.webp", fallback: "planning-05-cover-perspective.webp", title: "Architectural design perspective", label: "Architectural CGI", description: "Visualisation of the mixed-use residential development." },
] as const;

export default function WoolwichDeveloperShowcase() {
  return (
    <section id="woolwich-developer-showcase" aria-labelledby="woolwich-developer-heading" className="border-y border-[#dce7e2] bg-[#f6faf8]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[.17em] text-[#1f745f]">WEDRAWPLANS — PLANNING APPROVAL GRANTED</p>
          <h2 id="woolwich-developer-heading" className="mt-4 text-3xl font-extrabold tracking-tight text-[#192d3c] sm:text-4xl">Woolwich Road, Greenwich — Two Additional Flats, One Complete Development Service</h2>
          <p className="mt-3 text-[12px] font-bold uppercase tracking-[.14em] text-[#526777]">PLANNING + BUILDING REG + STRUCTURE + PROJECT MANAGEMENT</p>
          <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-8 text-[#4e6870]">The Woolwich Road development demonstrates two stages of successful residential planning. Royal Greenwich first approved a five-storey new-build scheme of 14 flats and two commercial units in 2016 (14/0289/F). In July 2020, permission followed for a further upper floor with two additional two-bedroom flats (20/0899/F), alongside related access and parking changes. For the two additional apartments, WEDRAWPLANS secured planning approval, prepared the complete Building Regulations drawing package, coordinated structural engineering and managed the project throughout the design and construction process.</p>
          <p className="mt-3 text-[13px] font-semibold text-[#236f65]">Royal Borough of Greenwich · Original new-build approval 2016 (14/0289/F) · Additional-floor approval 2020 (20/0899/F)</p>
        </div>
        <div className="mt-9 overflow-hidden rounded-[23px] border border-[#d6e6df] bg-white shadow-[0_18px_55px_rgba(33,62,58,.10)]">
          <div className="relative aspect-[16/8] min-h-[250px] w-full overflow-hidden bg-slate-200">
            <img
              src={mediaBase + "completed-woolwich-road.png"}
              alt="Completed Woolwich Road Greenwich residential building showing brick façades and rooftop flats"
              loading="lazy"
              className="h-full w-full object-cover"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = mediaBase + "completed-woolwich-road.png"; }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061d27]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[.18em]">WEDRAWPLANS · PLANNING + BUILDING REG + STRUCTURE + PROJECT MANAGEMENT</p>
              <p className="mt-2 max-w-3xl text-xl font-semibold leading-tight sm:text-3xl">Woolwich Road · completed residential development</p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(330px,.65fr)]">
          <WoolwichAnimationCard compact />
          <div className="min-w-0">
            <ProjectQuickQuotePanel source="new-build-developer-showcase" projectSlug="700-woolwich-road-greenwich-two-new-flats" projectTitle="Woolwich Road, Greenwich" suggestedService="New build drawings"/>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#247767]">Original WEDRAWPLANS project evidence</p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#253d42] sm:text-3xl">Planning, technical design, structural works and delivery</h3>
            </div>
            <Link href={caseStudy} className="text-[13px] font-bold text-[#217779] underline underline-offset-4">Explore the complete project gallery →</Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {canvases.map((item, i) => (
              <Link key={item.label} href={caseStudy + "#project-drawings"} className="group overflow-hidden rounded-[16px] border border-[#d7e5df] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/3] bg-[#f1f4f3]">
                  <img src={mediaBase + item.path} alt={item.title} loading="lazy" className="h-full w-full object-contain p-1.5 transition-transform group-hover:scale-[1.02]" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src=mediaBase+item.fallback;}} />
                </div>
                <div className="border-t border-[#e2eae7] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#2a7565]">Showcase {i + 1} · {item.label}</p>
                  <p className="mt-2 text-[12px] leading-6 text-[#536c71]">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-9 grid gap-5 rounded-[20px] border border-[#d5e6dc] bg-white p-6 lg:grid-cols-[1fr_auto] lg:items-center sm:p-8">
          <div>
            <h3 className="text-xl font-bold text-[#22454c]">Developers and landowners — unlock your site's full potential</h3>
            <p className="mt-3 max-w-3xl text-[14px] leading-7 text-[#557078]">Whether you own a development plot, an existing building with airspace potential or a site suitable for new homes, WEDRAWPLANS brings planning, Building Regulations, structural coordination and project management together in one clearly defined service. We help landowners and developers evaluate opportunities, secure planning permission, develop coordinated technical information and manage the construction process. Each project is tailored to the site's constraints and commercial objectives.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:flex-col">
            <a href="#new-build-quote" className="rounded-full bg-[#267481] px-6 py-3 text-center text-[13px] font-bold text-white hover:bg-[#1a606a]">Request a developer quotation</a>
            <a href={councilDocuments} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#a9cfc1] px-6 py-3 text-center text-[13px] font-bold text-[#24746e] hover:bg-[#eff8f3]">View Greenwich approved documents ↗</a>
          </div>
        </div>
        <p className="mt-4 text-[11px] leading-5 text-[#617676]">Original new-build permission 14/0289/F was granted in 2016; permission 20/0899/F approved the two additional flats in 2020. Our Building Regulations, structural and project-management services demonstrate the further stages involved in delivering that approved development.</p>
      </div>
    </section>
  );
}
