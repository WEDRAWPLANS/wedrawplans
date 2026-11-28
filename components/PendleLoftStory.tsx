import Link from "next/link";

const questions = [
  {
    title: "Can a rear dormer maximise the usable floor space in an existing loft?",
    answer: "A rear dormer can increase the area with practical headroom compared with the original sloping roof. At Pendle Road, the architectural sample drawings show how the enlarged loft can accommodate two bedrooms and a bathroom. The space and layout available at another property must be designed for its own roof dimensions and structural constraints.",
  },
  {
    title: "Does a dormer loft conversion always need planning permission?",
    answer: "Not always. Some rear dormer enlargements can qualify as permitted development, subject to the property's history, planning restrictions, roof form and the detailed national rules. This specific Wandsworth proposal was confirmed lawful by a Certificate of Lawfulness (Proposed); that does not mean every similar roof alteration is automatically lawful.",
  },
  {
    title: "What does a Lawful Development Certificate establish?",
    answer: "The certificate records that the proposed work described by the submitted plans would be lawful in the circumstances assessed. Wandsworth granted PA2026/0478/CLP on 25 November 2026. It is not a householder planning permission, and structural design and Building Regulations approval remain separate.",
  },
];

export default function PendleLoftStory() {
  return (
    <section aria-labelledby="pendle-loft-maximisation" className="border-y border-[#dfebe5] bg-[#f5f9f7]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#367b74]">
          Pendle Road · Wandsworth SW16 · Certified lawful development
        </p>
        <h2 id="pendle-loft-maximisation" className="mt-3 max-w-4xl text-2xl font-semibold leading-tight text-[#24494d] sm:text-3xl">
          A well-designed rear dormer can turn unused roof space into valuable accommodation
        </h2>
        <p className="mt-5 max-w-4xl text-[15px] leading-8 text-[#526d70]">
          This original WEDRAWPLANS sample drawing package illustrates how the maximum practical benefit can be gained from an existing house roof. At Pendle Road in Furzedown, the proposed rear dormer extends the usable roof envelope, while three rooflights on the front slope introduce daylight. The resulting design demonstrates two loft bedrooms, a bathroom and an arranged stair connection—all without extending the ground-floor footprint.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "33.42m³", caption: "Calculated additional dormer roof volume" },
            { value: "40m³", caption: "Terraced-house allowance used in the drawings" },
            { value: "3", caption: "Front rooflights in the certified scheme" },
            { value: "25 Nov 2026", caption: "Wandsworth lawful-development decision date" },
          ].map((fact) => (
            <div key={fact.caption} className="rounded-[16px] border border-[#d8e7df] bg-white px-5 py-5">
              <p className="text-[23px] font-bold text-[#236b6f]">{fact.value}</p>
              <p className="mt-2 text-[12px] leading-5 text-[#5e7678]">{fact.caption}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          <article className="rounded-[18px] border border-[#dae7e2] bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#a36c61]">01 · Better use of headroom</p>
            <h3 className="mt-2 text-xl font-semibold text-[#274c4e]">A substantial rear dormer, carefully planned</h3>
            <p className="mt-3 text-[14px] leading-7 text-[#5b7275]">
              The proposed rear roof enlargement provides a broad area of increased headroom that can support everyday room use rather than occasional loft storage. The elevations and building section explain the form of the dormer, its relationship to the roof pitch and the new internal loft floor.
            </p>
          </article>
          <article className="rounded-[18px] border border-[#dae7e2] bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#a36c61]">02 · Practical internal layout</p>
            <h3 className="mt-2 text-xl font-semibold text-[#274c4e]">Two loft bedrooms and a bathroom</h3>
            <p className="mt-3 text-[14px] leading-7 text-[#5b7275]">
              The proposed loft floor plan illustrates two separate bedrooms, a bathroom and the stair access. Three-dimensional floor views make the intended arrangement easier for homeowners to understand, while the complete technical sheets provide the dimensions and associated design information.
            </p>
          </article>
          <article className="rounded-[18px] border border-[#dae7e2] bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#a36c61]">03 · Rooflights and materials</p>
            <h3 className="mt-2 text-xl font-semibold text-[#274c4e]">Daylight and a considered roof appearance</h3>
            <p className="mt-3 text-[14px] leading-7 text-[#5b7275]">
              Three rooflights are positioned on the front roof slope. The proposal identifies matching hanging tiles and windows coordinated with the existing dwelling, helping the new dormer sit comfortably within the house's existing character and the conditions attached to the certificate.
            </p>
          </article>
          <article className="rounded-[18px] border border-[#dae7e2] bg-white p-6">
            <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#a36c61]">04 · Permitted development evidence</p>
            <h3 className="mt-2 text-xl font-semibold text-[#274c4e]">33.42m³ of additional roof volume</h3>
            <p className="mt-3 text-[14px] leading-7 text-[#5b7275]">
              The submitted volume-calculation drawing sets out the rear dormer's dimensions as approximately 2.66m high, 4.10m deep and 6.13m long. Its calculated 33.42m³ additional volume is 6.58m³ below the 40m³ allowance shown for this terraced house. The original calculation sheet is included in the gallery.
            </p>
          </article>
        </div>
        <div className="mt-7 rounded-[18px] border border-[#c5ded2] bg-white p-6 sm:p-7">
          <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#2f7666]">Verified council outcome</p>
          <h3 className="mt-2 text-[21px] font-semibold text-[#26494c]">
            Certificate of Lawfulness (Proposed) granted — PA2026/0478/CLP
          </h3>
          <p className="mt-3 max-w-4xl text-[13px] leading-7 text-[#597276]">
            Wandsworth Council issued the certificate on 25 November 2026 for a dormer roof extension to the main rear roof slope with three front rooflights. The council confirmed the proposed works would be lawful under Section 192 of the Town and Country Planning Act 1990, subject to the certified plans and specified conditions. The grant does not replace Building Regulations approval or any Party Wall Act responsibilities.
          </p>
          <p className="mt-4 text-[12px] leading-6 text-[#64797b]">
            To check the source record, search reference PA2026/0478/CLP in Wandsworth Council's official Planning Explorer.
          </p>
          <a
            href="https://planning.wandsworth.gov.uk/Northgate/PlanningExplorer/ApplicationSearch.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full border border-[#a9cbc1] bg-[#eef7f3] px-5 py-3 text-[12px] font-bold text-[#23696c] hover:bg-[#e2f0ea]"
          >
            Search the Wandsworth planning record ↗
          </a>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-[#27494e]">Rear dormer loft conversion: homeowner questions</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {questions.map((question) => (
              <article key={question.title} className="rounded-[16px] border border-[#dce9e3] bg-white p-5">
                <h3 className="text-[15px] font-semibold leading-6 text-[#2d5154]">{question.title}</h3>
                <p className="mt-3 text-[12px] leading-6 text-[#5f7475]">{question.answer}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 rounded-[18px] bg-[#e8f4ed] px-6 py-6">
          <div className="min-w-[220px] flex-1">
            <h2 className="text-[20px] font-semibold text-[#265257]">Could your roof provide an extra bedroom or bathroom?</h2>
            <p className="mt-2 text-[13px] leading-6 text-[#5b7474]">
              Ask WEDRAWPLANS about fixed-fee loft conversion drawings, lawful development and Building Regulations drawing packages in Wandsworth and across London.
            </p>
          </div>
          <Link href="#case-study-quote" className="rounded-full bg-[#286e73] px-6 py-3 text-[13px] font-bold text-white hover:bg-[#1e5c61]">
            Get your fixed-fee quote →
          </Link>
        </div>
        <p className="mt-5 text-[12px] leading-6 text-[#607777]">
          Explore our <Link href="/loft-conversion-plans" className="font-semibold text-[#1e7278] underline underline-offset-4">loft conversion drawing service</Link>, <Link href="/areas/wandsworth" className="font-semibold text-[#1e7278] underline underline-offset-4">architectural drawings in Wandsworth</Link> and <Link href="/building-regulation-drawings" className="font-semibold text-[#1e7278] underline underline-offset-4">Building Regulations drawings</Link>.
        </p>
      </div>
    </section>
  );
}
