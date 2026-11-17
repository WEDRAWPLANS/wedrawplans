import Link from "next/link";

const BARNET_GARAGE =
  "https://publicaccess.barnet.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=P2YCK1JIKQK00";
const BARNET_EXTENSION =
  "https://publicaccess.barnet.gov.uk/online-applications/applicationDetails.do?activeTab=documents&keyVal=P8RYOIJIHMH00";
const CAMDEN_DOCUMENTS =
  "https://camdocs.camden.gov.uk/CMWebDrawer/PlanRec?q=recContainer:%222026/1634/P%22";

function CouncilLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-[#a8cdc7] bg-white px-4 py-2.5 text-[13px] font-semibold text-[#1d6d74] underline-offset-4 hover:bg-[#edf7f3] hover:underline">
      {children} <span aria-hidden="true" className="ml-2">↗</span>
    </a>
  );
}

/**
 * These pages deliberately use the existing /case-studies/[slug] template:
 * CaseStudyHeader, CaseStudyGalleryQuote and CaseStudyBottom/Footer are shared
 * and must never be replaced by a bespoke or embedded static HTML shell.
 */
export function BernhartConservationStory() {
  return (
    <section aria-labelledby="bernhart-conservation-story" className="border-y border-[#dce7e2] bg-[#f5f9f6]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#347b70]">Evidence-led conservation area case study · Barnet · 2018</p>
        <h2 id="bernhart-conservation-story" className="mt-3 max-w-4xl text-2xl font-semibold leading-snug text-[#24474b] sm:text-3xl">
          How conservation-area character, neighbours and parking shaped the planning assessment
        </h2>
        <p className="mt-5 max-w-4xl text-[15px] leading-8 text-[#536e70]">
          Bernhart Close lies within the Watling Estate Conservation Area, which Barnet explicitly identified in the garage-conversion delegated report. The project illustrates an essential point for homeowners: creating additional living space in a sensitive setting depends on the external design, its relationship with the street and the potential effect on other residents. This is a historic example from 2018, not a promise that current policies would produce the same result.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-[18px] border border-[#d7e5df] bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#28756d]">01 · Architecture and heritage</p>
            <h3 className="mt-2 text-xl font-semibold text-[#25494c]">Replacing the garage door with a carefully considered front window</h3>
            <p className="mt-3 text-[14px] leading-7 text-[#597074]">
              The garage-to-habitable-room application proposed a front window in place of the existing garage door without additional changes to the rest of the dwelling. The planning officer considered the altered frontage acceptable and noted that several other houses on the same street had undergone similar garage conversions. Those local precedents informed the officer's view that the proposed change could sit comfortably within the existing appearance of the street.
            </p>
          </article>
          <article className="rounded-[18px] border border-[#d7e5df] bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#28756d]">02 · Consultation and technical concerns</p>
            <h3 className="mt-2 text-xl font-semibold text-[#25494c]">Neighbour representations addressed through the planning process</h3>
            <p className="mt-3 text-[14px] leading-7 text-[#597074]">
              Barnet consulted five neighbouring properties and received one representation concerning the foundation for the replacement wall, a proposed drainage connection and possible excavation effects. The delegated report records that the officer considered the objections but found no unacceptable impact on neighbouring amenity for planning purposes. These concerns were assessed; the report does not itself provide structural design approval or a drainage consent.
            </p>
          </article>
          <article className="rounded-[18px] border border-[#d7e5df] bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#28756d]">03 · Parking and highways</p>
            <h3 className="mt-2 text-xl font-semibold text-[#25494c]">Retaining off-street parking when losing an internal garage</h3>
            <p className="mt-3 text-[14px] leading-7 text-[#597074]">
              Removing garage parking can prompt highway concerns, especially where conversions affect existing car storage. Barnet's highway assessment identified one off-street parking space to be retained and raised no highway objection. The report's proposed conditions required the retained parking and access to remain available for vehicles. That site-specific conclusion was an important part of the recorded 2018 assessment.
            </p>
          </article>
          <article className="rounded-[18px] border border-[#d7e5df] bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#28756d]">04 · Two separate consents</p>
            <h3 className="mt-2 text-xl font-semibold text-[#25494c]">A garage conversion and a rear extension at one home</h3>
            <p className="mt-3 text-[14px] leading-7 text-[#597074]">
              The same property also has a separate 2018 householder approval for a single-storey rear extension, documented under its own application reference. Both outcomes are displayed together to show the property's planning history, while keeping the approvals distinct. The garage officer's report is evidence for the garage scheme only; it must not be treated as the reasoning for the rear-extension decision.
            </p>
          </article>
        </div>
        <div className="mt-7 rounded-[18px] border border-[#c8dfd6] bg-white p-6">
          <h3 className="text-lg font-semibold text-[#25494b]">Independently check the 2018 council records</h3>
          <p className="mt-2 max-w-3xl text-[13px] leading-7 text-[#5b7073]">
            These are the exact Barnet Documents-tab links supplied for the two applications. The garage delegated report recommended approval and specified matching materials and retained parking. Final decisions and council-held drawings should always be checked under the relevant application.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <CouncilLink href={BARNET_GARAGE}>Garage conversion documents · 18/0452/HSE</CouncilLink>
            <CouncilLink href={BARNET_EXTENSION}>Rear extension documents · 18/2968/HSE</CouncilLink>
          </div>
        </div>
        <p className="mt-7 text-[13px] leading-7 text-[#62777a]">
          Explore another related WEDRAWPLANS example: <Link className="font-semibold text-[#207681] underline underline-offset-4" href="/case-studies/dryfield-road-edgware-conservation-extension">Dryfield Road conservation-area rear extension</Link>, or learn about <Link className="font-semibold text-[#207681] underline underline-offset-4" href="/areas/barnet">architectural drawings in Barnet</Link>.
        </p>
      </div>
    </section>
  );
}

export function HornbyGarageConversionStory() {
  return (
    <section aria-labelledby="hornby-conversion-story" className="border-y border-[#dce7e2] bg-[#f5f9f6]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#347b70]">Garage conversion architecture · Camden</p>
        <h2 id="hornby-conversion-story" className="mt-3 max-w-4xl text-2xl font-semibold text-[#24474b] sm:text-3xl">
          From garage space to proposed habitable accommodation
        </h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <p className="text-[15px] leading-8 text-[#536e70]">
            Converting a garage into living accommodation requires more than removing a garage door. Architectural plans need to distinguish the existing layout from the proposed living space and record any external elevation changes so that planners can assess how the alteration affects the home and its surroundings. The Hornby Close project is illustrated by five privacy-redacted, full-sheet WEDRAWPLANS drawings. Select a thumbnail and enlarge each sheet to inspect the existing and proposed plans, elevations and construction details.
          </p>
          <p className="text-[15px] leading-8 text-[#536e70]">
            Planning consent and Building Regulations are separate. A proposed habitable room must also be assessed for matters such as fire safety, thermal performance, ventilation, damp protection and appropriate construction details. The Camden documents link allows readers to inspect the submitted application record directly; the specific planning outcome and approved drawing schedule are still being checked before any grant is claimed on the website.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CouncilLink href={CAMDEN_DOCUMENTS}>View Camden application documents · 2026/1634/P</CouncilLink>
          <Link href="/areas/camden" className="inline-flex min-h-11 items-center rounded-full border border-[#a8cdc7] bg-white px-4 py-2.5 text-[13px] font-semibold text-[#1d6d74] hover:bg-[#edf7f3]">
            Architectural drawing services in Camden
          </Link>
        </div>
      </div>
    </section>
  );
}
