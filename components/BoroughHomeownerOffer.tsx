import Link from "next/link";
import { caseStudyBySlug } from "../data/caseStudies";

/** Original, homeowner-facing borough guidance. Local evidence is explicitly identified. */
export const boroughDetails: Record<string, {
  name: string;
  areas: string;
  focus: string;
  question: string;
  answer: string;
  watch: string;
  service: string;
  proof: string;
}> = {
  "barking-and-dagenham": {
    "name": "Barking & Dagenham",
    "areas": "Barking, Dagenham and Becontree",
    "focus": "rear kitchen extensions and loft conversion drawings",
    "question": "Thinking of opening up a Dagenham kitchen with a rear extension?",
    "answer": "We can show the existing and proposed layout, check whether the dimensions may fall within permitted development or need a planning/prior approval route, and prepare separate technical drawings when Building Control is required.",
    "watch": "Extensions on altered or non-standard properties deserve an address-specific check before treating them as permitted development.",
    "service": "/extension-plans",
    "proof": "sistova-road-wandsworth-extension-basement"
  },
  "barnet": {
    "name": "Barnet",
    "areas": "Mill Hill, Edgware, Finchley and Hendon",
    "focus": "side and rear extensions, dormer lofts and larger-house projects",
    "question": "Can I add a rear extension and a loft conversion to my Barnet house?",
    "answer": "We can coordinate both designs while distinguishing the planning permission or lawful-development drawings from the later Building Regulations package. Existing extensions and roof form can affect the route.",
    "watch": "Review earlier consents, boundary relationships and any conservation constraints before choosing the application type.",
    "service": "/extension-plans",
    "proof": "the-reddings-mill-hill-extension-basement-loft"
  },
  "bexley": {
    "name": "Bexley",
    "areas": "Bexleyheath, Welling, Sidcup and Erith",
    "focus": "side extensions, rear kitchen extensions and loft designs",
    "question": "Do I need council drawings for a two-storey side extension in Bexleyheath?",
    "answer": "A two-storey side extension may require householder planning permission. We can prepare the design drawings and advise what further technical Building Control information is needed once the scheme is settled.",
    "watch": "Confirm the relationship with neighbouring windows, boundaries and the existing roof rather than assuming a standard extension footprint.",
    "service": "/extension-plans",
    "proof": "cromwell-road-hounslow-rear-extension"
  },
  "brent": {
    "name": "Brent",
    "areas": "Wembley, Willesden, Kilburn and Harlesden",
    "focus": "rear infill extensions, loft conversions and flat-layout changes",
    "question": "Can I extend the rear of a Brent terraced house?",
    "answer": "The right drawing package depends on the property, existing additions and the proposed depth. We can prepare planning application drawings or lawful-development plans, followed by Building Regulations details where instructed.",
    "watch": "For terraces and converted flats, check property type, shared boundaries and whether permitted development rights actually apply.",
    "service": "/extension-plans",
    "proof": "sistova-road-wandsworth-extension-basement"
  },
  "bromley": {
    "name": "Bromley",
    "areas": "Bromley, Beckenham, Orpington and Chislehurst",
    "focus": "larger rear extensions, loft conversions and garden rooms",
    "question": "What plans do I need for a kitchen extension in Orpington?",
    "answer": "We can develop the proposed kitchen and rear elevation, assess the likely consent route and prepare drawings suitable for a council application where necessary. Building Control drawings cover the construction stage separately.",
    "watch": "Consider roof shape, neighbour impact and the existing property before committing to a particular rear-projection length.",
    "service": "/extension-plans",
    "proof": "cromwell-road-hounslow-rear-extension"
  },
  "camden": {
    "name": "Camden",
    "areas": "Hampstead, Kentish Town, Camden Town and Gospel Oak",
    "focus": "townhouse refurbishments, roof alterations and flat conversions",
    "question": "Can I alter the roof or rear of a Camden townhouse?",
    "answer": "We can prepare existing and proposed plans and elevations for a planning application and coordinate the later technical package. Listed-building or conservation constraints may require extra design and supporting material.",
    "watch": "Before design work, establish whether the property is listed, in a conservation area or divided into flats.",
    "service": "/planning-drawings",
    "proof": "warbeck-road-hammersmith-fulham-loft-certificate"
  },
  "city-of-london": {
    "name": "City of London",
    "areas": "the Barbican, Farringdon, Aldgate and the Square Mile",
    "focus": "commercial alterations, change-of-use layouts and Building Control plans",
    "question": "Who prepares alteration and Building Regulations drawings for City of London premises?",
    "answer": "We can prepare measured existing layouts, proposed plans and technical drawing packs, with the applicable planning, heritage and Building Control routes reviewed for the premises and proposed use.",
    "watch": "Commercial and mixed-use buildings may require distinct planning, fire-safety and access considerations; do not assume a standard householder application.",
    "service": "/building-regulation-drawings",
    "proof": "700-woolwich-road-greenwich-two-new-flats"
  },
  "croydon": {
    "name": "Croydon",
    "areas": "Purley, South Croydon, Thornton Heath and West Croydon",
    "focus": "rear extensions, lofts and carefully assessed side-plot homes",
    "question": "Could my Croydon property take a loft conversion or a separate new home on a side plot?",
    "answer": "We can explore the viable footprint and access arrangements, prepare plans for the appropriate planning route, and quote technical Building Regulations drawings once the design has progressed.",
    "watch": "A side-plot dwelling needs its own planning feasibility review; it is not equivalent to a permitted-development extension.",
    "service": "/new-build-plans",
    "proof": "allum-lane-elstree-major-house-extension"
  },
  "ealing": {
    "name": "Ealing",
    "areas": "Acton, Hanwell, Southall and Northfields",
    "focus": "rear kitchen extensions, roof conversions and side-return infills",
    "question": "How much does it cost to have Ealing house extension plans drawn?",
    "answer": "For suitable straightforward schemes, planning drawing packages start from £750. We can separately quote a measured survey, council submission and Building Control construction details depending on the project.",
    "watch": "In terraces and older houses, consider party walls, existing extensions and any conservation restrictions when planning the design.",
    "service": "/extension-plans",
    "proof": "sistova-road-wandsworth-extension-basement"
  },
  "enfield": {
    "name": "Enfield",
    "areas": "Palmers Green, Southgate, Winchmore Hill and Edmonton",
    "focus": "rear extensions, loft conversions and garden outbuildings",
    "question": "I want a rear extension in Enfield. Do I ask for planning drawings or Building Regs?",
    "answer": "Start with the proposed size and use: some schemes follow permitted development, while others need an application. Building Regulations drawings are the separate technical pack for Building Control and the build.",
    "watch": "Check the property's alterations and whether the chosen roof or extension design changes its planning status.",
    "service": "/extension-plans",
    "proof": "cromwell-road-hounslow-rear-extension"
  },
  "greenwich": {
    "name": "Greenwich",
    "areas": "Charlton, Blackheath, Eltham and Woolwich",
    "focus": "loft conversions, residential extensions and solar planning drawings",
    "question": "Can I have drawings for an Eltham loft conversion or roof alterations?",
    "answer": "We can prepare elevations, roof plans and sections for the correct planning or lawful-development route. If the work proceeds, Building Control may need detailed sections and construction specifications.",
    "watch": "Roof alterations and solar equipment can have different planning rules; assess the exact property and installation before submission.",
    "service": "/loft-conversion-plans",
    "proof": "alnwick-road-eltham-lawful-loft"
  },
  "hackney": {
    "name": "Hackney",
    "areas": "Stoke Newington, Dalston, Clapton and Homerton",
    "focus": "rear infill extensions, dormers and conversions",
    "question": "Can a Hackney terrace have a side-return kitchen extension?",
    "answer": "We can draw a clear existing and proposed layout and assess whether planning consent or a lawful-development route is appropriate. Detailed Building Regulations drawings are quoted separately for construction.",
    "watch": "Check conservation context and whether the property is a house or flat before assuming permitted-development rights.",
    "service": "/extension-plans",
    "proof": "sistova-road-wandsworth-extension-basement"
  },
  "hammersmith-and-fulham": {
    "name": "Hammersmith & Fulham",
    "areas": "Fulham, Shepherd's Bush, Hammersmith and Parsons Green",
    "focus": "rear roof extensions, lofts and side-return alterations",
    "question": "Is a rear dormer in Shepherd's Bush permitted development?",
    "answer": "The answer depends on the building, roof changes and applicable restrictions. We can prepare lawful-development certificate drawings or a planning package as appropriate, followed by technical Building Regulations drawings.",
    "watch": "Existing roof form, previous extensions and conservation status can affect the route even on similar-looking streets.",
    "service": "/lawful-development-certificate-drawings",
    "proof": "warbeck-road-hammersmith-fulham-loft-certificate"
  },
  "haringey": {
    "name": "Haringey",
    "areas": "Crouch End, Muswell Hill, Tottenham and Wood Green",
    "focus": "loft conversions, rear extensions and older-house layouts",
    "question": "Do I need architectural drawings for a Haringey loft conversion?",
    "answer": "Existing and proposed roof plans, elevations and sections help establish the design and consent route. We can separately detail insulation, stairs and structural coordination for Building Control.",
    "watch": "Some homes require closer consideration of roof design, height and local conservation constraints.",
    "service": "/loft-conversion-plans",
    "proof": "deans-way-edgware-lawful-loft"
  },
  "harrow": {
    "name": "Harrow",
    "areas": "Pinner, Stanmore, Rayners Lane and Harrow-on-the-Hill",
    "focus": "loft conversions, side extensions and residential alterations",
    "question": "What plans are needed for a Pinner loft conversion and new staircase?",
    "answer": "We can prepare the loft planning or lawful-development drawings first, including the roof and stair arrangement, then quote the Building Regulations pack covering technical design and coordination.",
    "watch": "Loft headroom, the existing roof form and whether the property is protected can all affect what is feasible.",
    "service": "/loft-conversion-plans",
    "proof": "burnt-oak-broadway-harrow-retail-flats"
  },
  "havering": {
    "name": "Havering",
    "areas": "Romford, Hornchurch, Upminster and Rainham",
    "focus": "larger rear extensions, loft designs and outbuildings",
    "question": "Can I build a larger rear extension in Hornchurch without full planning permission?",
    "answer": "Some eligible householder extensions may use the larger-home prior approval route. We can prepare the plans and advise which council process is appropriate, with Building Control work considered separately.",
    "watch": "A larger-home prior approval is not automatic permission: property type, limits and neighbour consultation matter.",
    "service": "/extension-plans",
    "proof": "sefton-avenue-mill-hill-prior-approval"
  },
  "hillingdon": {
    "name": "Hillingdon",
    "areas": "Ruislip, Hayes, Uxbridge and Northwood",
    "focus": "house extensions, lofts and new-build feasibility",
    "question": "What drawings do I need for a house extension in Ruislip?",
    "answer": "We can turn your brief into existing and proposed plans, elevations and necessary sections, then identify whether planning permission, prior approval or lawful-development documentation applies.",
    "watch": "Site levels, existing extensions and any special property restrictions should be checked before finalizing a proposed footprint.",
    "service": "/extension-plans",
    "proof": "northolm-edgware-two-storey-extension"
  },
  "hounslow": {
    "name": "Hounslow",
    "areas": "Hounslow, Chiswick, Isleworth and Brentford",
    "focus": "rear kitchen extensions, side returns and loft changes",
    "question": "Can I get drawings for a rear extension in Hounslow and council submission?",
    "answer": "We can prepare a coordinated planning package and, where included in the quote, lodge the relevant council application and liaise with the case officer. Building Regulations drawings form a separate technical stage.",
    "watch": "Before choosing the application route, consider the extension depth, property type and relationship with neighbouring buildings.",
    "service": "/extension-plans",
    "proof": "cromwell-road-hounslow-rear-extension"
  },
  "islington": {
    "name": "Islington",
    "areas": "Highbury, Holloway, Angel and Canonbury",
    "focus": "terrace infills, roof alterations and converted flats",
    "question": "Can I add a side-return extension to an Islington property?",
    "answer": "We can document existing and proposed floor plans and elevations for the appropriate permission route, and prepare a technical Building Control package for the work where instructed.",
    "watch": "Converted flats and properties in conservation areas often need a different assessment from a straightforward single-family house.",
    "service": "/planning-drawings",
    "proof": "sistova-road-wandsworth-extension-basement"
  },
  "kensington-and-chelsea": {
    "name": "Kensington & Chelsea",
    "areas": "Chelsea, Kensington, Notting Hill and North Kensington",
    "focus": "townhouse alterations, basements and sensitive refurbishments",
    "question": "What drawings are required for alterations to a Kensington townhouse?",
    "answer": "Our planning packages can show the design and its relationship to the existing building, while separate technical drawings address Building Regulations. More complex or protected properties may need supporting heritage input.",
    "watch": "Check listed-building and conservation designations early and avoid assuming a basement or roof alteration is automatically permitted.",
    "service": "/planning-drawings",
    "proof": "the-reddings-mill-hill-extension-basement-loft"
  },
  "kingston": {
    "name": "Kingston upon Thames",
    "areas": "Kingston, Surbiton, New Malden and Tolworth",
    "focus": "rear house extensions, lofts and kitchen enlargement",
    "question": "Can I extend my kitchen into the garden in Surbiton?",
    "answer": "We can prepare the proposed layout and elevations, assess the planning/prior approval route and coordinate any later Building Control drawing set. The quote separates drawing scope from survey and council costs.",
    "watch": "A side return or deep rear projection should be checked against the actual plot and neighbouring properties.",
    "service": "/extension-plans",
    "proof": "cromwell-road-hounslow-rear-extension"
  },
  "lambeth": {
    "name": "Lambeth",
    "areas": "Brixton, Streatham, Clapham and Stockwell",
    "focus": "loft conversions, rear infills and planning application drawings",
    "question": "How do I arrange loft conversion drawings for a Lambeth house?",
    "answer": "We can prepare the roof layout, elevations and sections for planning or lawful-development review and distinguish the later Building Regulations pack for fire, insulation and structural coordination.",
    "watch": "A flat, maisonette or converted house may have different permitted-development rights from a single dwelling.",
    "service": "/loft-conversion-plans",
    "proof": "electric-avenue-brixton-shopfront"
  },
  "lewisham": {
    "name": "Lewisham",
    "areas": "Brockley, Catford, Sydenham and Lee",
    "focus": "loft conversions, house extensions and flat conversions",
    "question": "Do I need planning permission to turn a Lewisham house into flats?",
    "answer": "Flat conversion proposals need a different planning assessment from ordinary householder extensions. We can prepare layout drawings for the council and later coordinate the technical Building Regulations stage.",
    "watch": "Check residential standards, access and fire-safety requirements when considering a change in the number of flats.",
    "service": "/planning-drawings",
    "proof": "brockley-road-lewisham-two-flat-conversion"
  },
  "merton": {
    "name": "Merton",
    "areas": "Merton Park, Wimbledon, Mitcham and Colliers Wood",
    "focus": "rear extensions and loft conversions in existing family homes",
    "question": "Can a Merton Park house take a rear extension and loft conversion?",
    "answer": "We can draw both proposals and establish which permissions or lawful-development confirmations may be appropriate. Building Regulations drawings are the technical plans needed for Building Control and construction.",
    "watch": "Review existing roof space, prior extensions and any local conservation constraints before assuming standard dimensions will work.",
    "service": "/extension-plans",
    "proof": "sistova-road-wandsworth-extension-basement"
  },
  "newham": {
    "name": "Newham",
    "areas": "Stratford, Forest Gate, East Ham and Plaistow",
    "focus": "loft additions, rear extensions and residential conversion plans",
    "question": "What drawings do I need to extend a house in Forest Gate?",
    "answer": "We can produce existing/proposed elevations and plans for the appropriate planning route and supply a separate Building Control technical package where required.",
    "watch": "An existing conversion into flats can change which planning rights and applications apply compared with a single house.",
    "service": "/extension-plans",
    "proof": "brockley-road-lewisham-two-flat-conversion"
  },
  "redbridge": {
    "name": "Redbridge",
    "areas": "Ilford, Wanstead, South Woodford and Gants Hill",
    "focus": "rear extensions, roof conversions and garden buildings",
    "question": "Can I add a rear extension to my Ilford house using permitted development?",
    "answer": "We can assess the intended dimensions and property circumstances before advising on planning permission, prior approval or a lawful-development certificate, with Building Regulations detailed separately.",
    "watch": "Do not rely solely on a neighbour's extension as evidence of your own property's permitted-development rights.",
    "service": "/extension-plans",
    "proof": "sefton-avenue-mill-hill-prior-approval"
  },
  "richmond": {
    "name": "Richmond upon Thames",
    "areas": "Twickenham, Teddington, Barnes and East Sheen",
    "focus": "kitchen extensions, lofts and sensitive residential improvements",
    "question": "Are there extra design checks for a Twickenham rear extension?",
    "answer": "We can develop plans showing the building and proposed change and prepare the relevant council drawing pack. Conservation, flood-related or heritage constraints can require additional checks where applicable.",
    "watch": "Check the specific address and site constraints rather than treating the whole borough as subject to the same restrictions.",
    "service": "/extension-plans",
    "proof": "cromwell-road-hounslow-rear-extension"
  },
  "southwark": {
    "name": "Southwark",
    "areas": "Dulwich, Peckham, Camberwell and Bermondsey",
    "focus": "rear extensions, lofts and flat layout changes",
    "question": "Who can draw plans for a kitchen extension in Dulwich?",
    "answer": "We can prepare the existing and proposed plans for the appropriate planning or lawful-development route, and a separate Building Regulations pack once the design is agreed.",
    "watch": "For terraces, maisonettes and protected properties, confirm the right application route and neighbour relationships early.",
    "service": "/extension-plans",
    "proof": "sistova-road-wandsworth-extension-basement"
  },
  "sutton": {
    "name": "Sutton",
    "areas": "Cheam, Carshalton, Sutton and Wallington",
    "focus": "rear extensions, loft conversions and house alterations",
    "question": "Do I need separate planning and Building Control drawings for an extension in Cheam?",
    "answer": "Planning drawings explain what you want permission to build; Building Regulations drawings show technical construction compliance. Depending on the project, you may need one or both stages.",
    "watch": "Look at property type, extension dimensions and previous permissions before choosing full planning or permitted development.",
    "service": "/building-regulation-drawings",
    "proof": "cromwell-road-hounslow-rear-extension"
  },
  "tower-hamlets": {
    "name": "Tower Hamlets",
    "areas": "Mile End, Bow, Bethnal Green and Canary Wharf",
    "focus": "roof alterations, conversions and heritage-aware designs",
    "question": "Can I change a roof or internal layout in Tower Hamlets?",
    "answer": "We can prepare proposals for the applicable planning or lawful-development route and separately detail Building Control matters. Heritage or listed-building consent may be relevant at some addresses.",
    "watch": "Some buildings are flats or listed properties, so standard householder permitted-development assumptions may not apply.",
    "service": "/planning-drawings",
    "proof": "mile-end-road-listed-building-heritage"
  },
  "waltham-forest": {
    "name": "Waltham Forest",
    "areas": "Walthamstow, Chingford, Leyton and Highams Park",
    "focus": "rear extensions, lofts and property-access drawings",
    "question": "Can I have drawings for a Chingford extension or driveway crossover?",
    "answer": "We can prepare householder planning plans and, where needed, drawings for access or dropped-kerb applications. Building Regulations technical packs are separate from planning or highways permissions.",
    "watch": "A dropped kerb has highway authority requirements and should not be assumed to form part of standard extension permission.",
    "service": "/planning-drawings",
    "proof": "hall-lane-chingford-dropped-kerb"
  },
  "wandsworth": {
    "name": "Wandsworth",
    "areas": "Balham, Battersea, Tooting and Putney",
    "focus": "side returns, rear extensions and basement or roof alterations",
    "question": "Could a Wandsworth property accommodate a rear or side extension?",
    "answer": "Our planning drawings set out the existing and proposed design for the council, and a separate Building Regulations set details the construction approach. WEDRAWPLANS has published Wandsworth project evidence.",
    "watch": "Consider neighbours, boundary position and whether a conservation constraint affects the design.",
    "service": "/extension-plans",
    "proof": "sistova-road-wandsworth-extension-basement"
  },
  "westminster": {
    "name": "Westminster",
    "areas": "Pimlico, Paddington, Marylebone and Maida Vale",
    "focus": "townhouse planning, heritage changes and technical alterations",
    "question": "What plans are needed for a Westminster flat or townhouse alteration?",
    "answer": "We can prepare clear existing and proposed architectural plans and coordinate Building Regulations details as appropriate. Some projects require planning permission, listed-building consent or specialist supporting assessments.",
    "watch": "Check the building's legal property type and any listed or conservation status before treating works as permitted development.",
    "service": "/planning-drawings",
    "proof": "mile-end-road-listed-building-heritage"
  }
};

export default function BoroughHomeownerOffer({ slug }: { slug: string }) {
  const info = boroughDetails[slug];
  if (!info) return null;
  const project = caseStudyBySlug[info.proof];
  const isLocalProject = project?.relatedArea === "/areas/" + slug;

  return (
    <section aria-labelledby={"homeowner-" + slug} className="border-y border-[#d8e8e3] bg-[#f6faf8] py-10 text-[#24383b] sm:py-14">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#2b747c]">Planning & Building Control drawing advice · {info.name}</p>
        <h2 id={"homeowner-" + slug} className="mt-3 max-w-4xl text-[23px] font-extrabold leading-tight text-[#203238] sm:text-[30px]">
          Need plans drawn for a home or property project in {info.name}?
        </h2>
        <p className="mt-4 max-w-4xl text-[15px] leading-7 text-[#4a6264]">
          We help with {info.focus} around {info.areas}. Tell us what you want to build and your property postcode; we'll identify the drawing stage and prepare a clear, fixed-fee quotation.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[#dae6e2] bg-white p-5">
            <h3 className="text-[17px] font-bold">Drawings for planning permission</h3>
            <p className="mt-2 text-[13px] leading-6 text-[#4a6264]">Existing and proposed plans, roof plans, elevations and sections as appropriate for planning permission, prior approval or a lawful-development certificate. We can also quote council submission and case-officer liaison.</p>
            <Link href="/planning-drawings" className="mt-3 inline-flex text-[13px] font-semibold text-[#226f79] underline underline-offset-4">Planning application drawing service</Link>
          </div>
          <div className="rounded-xl border border-[#dae6e2] bg-white p-5">
            <h3 className="text-[17px] font-bold">Building Regulations & Building Control drawings</h3>
            <p className="mt-2 text-[13px] leading-6 text-[#4a6264]">Technical plans, sections and construction notes for the Building Control stage, including coordination with structural information where required. This is a separately scoped service, not automatically included in the planning fee.</p>
            <Link href="/building-regulation-drawings" className="mt-3 inline-flex text-[13px] font-semibold text-[#226f79] underline underline-offset-4">Building Regulations drawing service</Link>
          </div>
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-xl border border-[#dae6e2] bg-white p-5 sm:p-6">
            <h3 className="text-[17px] font-bold">{info.question}</h3>
            <p className="mt-3 text-[13px] leading-7 text-[#4a6264]">{info.answer}</p>
            <p className="mt-3 text-[13px] leading-6 text-[#4a6264]"><strong>Worth checking:</strong> {info.watch}</p>
            <Link href={info.service} className="mt-4 inline-flex text-[13px] font-semibold text-[#226f79] underline underline-offset-4">Explore the relevant drawing service</Link>
          </div>
          <div className="rounded-xl border border-[#cdded8] bg-[#eaf4f0] p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#276d72]">Straightforward extension & loft projects</p>
            <p className="mt-3 text-[27px] font-extrabold">Planning drawings from £750</p>
            <p className="mt-2 text-[12px] leading-6 text-[#4a6264]">For qualifying straightforward projects. The fixed quote confirms drawings and revisions. Surveys, council application fees, submission services, structural calculations and Building Regulations drawings are separately scoped unless included in your written quotation.</p>
            <Link href="/get-drawings-quote" className="mt-5 inline-flex rounded-full bg-[#246f7d] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#175363]">Get your fixed-fee quote</Link>
          </div>
        </div>
        {project ? (
          <div className="mt-6 rounded-xl border border-[#dbe7e3] bg-white p-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#2c7779]">{isLocalProject ? "WEDRAWPLANS project in this borough" : "Related WEDRAWPLANS project example from another area"}</p>
            <p className="mt-2 text-[14px] font-semibold">{project.shortTitle} · {project.outcome}</p>
            <p className="mt-1 text-[12px] leading-6 text-[#526669]">{project.service}. This is an example of our documented project work; planning outcomes always depend on the individual site and proposal.</p>
            <Link href={"/case-studies/" + project.slug} className="mt-3 inline-flex text-[13px] font-semibold text-[#226f79] underline underline-offset-4">View approved project details</Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
