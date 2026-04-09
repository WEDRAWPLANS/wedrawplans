import React, { useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { submitBoroughLead } from "../../lib/submitBoroughLead";
import ServiceInternalLinks from "../../components/ServiceInternalLinks";
import SmartPlanningAssistant from "../../components/SmartPlanningAssistant";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const EMAIL = "info@wedrawplans.com";
const EMAIL_LINK = "mailto:info@wedrawplans.com";
const GOOGLE_BUSINESS_PROFILE_LINK = "https://share.google/D3KId64vHtHSKPALr";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20fixed%20fee%20quote%20for%20architectural%20drawings%20in%20London";

type LinkItem = {
  name: string;
  href: string;
};

function toAreaHref(name: string) {
  return `/areas/${name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/,/g, "")
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()}`;
}

function initialsForBadge(name: string) {
  const cleaned = name
    .replace("City of London", "City")
    .replace("Kensington and Chelsea", "Kensington")
    .replace("Hammersmith and Fulham", "Hammersmith")
    .replace("Barking and Dagenham", "Barking")
    .replace("Richmond upon Thames", "Richmond")
    .trim();

  const parts = cleaned.split(" ").filter(Boolean);
  const first = parts[0]?.[0] || "L";
  const second = parts[1]?.[0] || parts[0]?.[1] || "D";
  return `${first}${second}`.toUpperCase();
}

function TrustPill({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-900">{title}</div>
      <div className="mt-2 text-[12px] leading-6 text-slate-600">{body}</div>
    </div>
  );
}

function ServiceCard({
  title,
  body,
  href,
  tag,
}: {
  title: string;
  body: string;
  href: string;
  tag: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#64b7c4] hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[16px] font-semibold text-slate-900">{title}</h3>
        <div className="rounded-full border border-slate-200 bg-[#f8f4f0] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 group-hover:border-[#64b7c4]">
          {tag}
        </div>
      </div>
      <p className="mt-3 text-[14px] leading-7 text-slate-700">{body}</p>
      <div className="mt-5 text-[14px] font-semibold text-blue-700 underline underline-offset-4">
        View service page
      </div>
    </Link>
  );
}

function ClusterCard({
  title,
  areas,
  body,
}: {
  title: string;
  areas: string[];
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">{title}</h3>
      <p className="mt-3 text-[13px] leading-7 text-slate-700">{body}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {areas.map((area) => (
          <span
            key={area}
            className="rounded-full border border-slate-200 bg-[#fdf8f3] px-3 py-1 text-[12px] text-slate-700"
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}

function FaqCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-[14px] font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-[13px] leading-7 text-slate-700">{body}</p>
    </div>
  );
}

export default function AreasIndexPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, { boroughName: "London and M25" });
  }

  function scrollToForm() {
    const el = document.getElementById("areas-quote");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const boroughNames = [
    "Barking and Dagenham",
    "Barnet",
    "Bexley",
    "Brent",
    "Bromley",
    "Camden",
    "City of London",
    "Croydon",
    "Ealing",
    "Enfield",
    "Greenwich",
    "Hackney",
    "Hammersmith and Fulham",
    "Haringey",
    "Harrow",
    "Havering",
    "Hillingdon",
    "Hounslow",
    "Islington",
    "Kensington and Chelsea",
    "Kingston upon Thames",
    "Lambeth",
    "Lewisham",
    "Merton",
    "Newham",
    "Redbridge",
    "Richmond upon Thames",
    "Southwark",
    "Sutton",
    "Tower Hamlets",
    "Waltham Forest",
    "Wandsworth",
    "Westminster",
  ];

  const boroughLinks: LinkItem[] = boroughNames.map((name) => ({
    name,
    href: toAreaHref(name),
  }));

  const countyLinks: LinkItem[] = [
    { name: "Hertfordshire", href: "/areas/hertfordshire" },
    { name: "Essex", href: "/areas/essex" },
    { name: "Surrey", href: "/areas/surrey" },
    { name: "Kent", href: "/areas/kent" },
    { name: "Buckinghamshire", href: "/areas/buckinghamshire" },
  ];

  const localBusinessJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "WEDRAWPLANS",
      url: "https://www.wedrawplans.co.uk/areas",
      telephone: "+44 20 3654 8508",
      email: "info@wedrawplans.com",
      image: "https://www.wedrawplans.co.uk/images/rear-extension-planning-building-reg-drawings.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201 Borough High Street",
        addressLocality: "London",
        postalCode: "SE1 1JA",
        addressCountry: "UK",
      },
      areaServed: ["London", "Greater London", "M25 area", ...boroughNames],
      description:
        "Architectural drawings across London and the M25 for house extensions, loft conversions, planning applications, building regulation packs, flat conversions, new build homes, internal remodelling and commercial drawing services.",
      sameAs: ["https://twitter.com/WEDRAWPLANS", GOOGLE_BUSINESS_PROFILE_LINK],
    }),
    []
  );

  const faqJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you cover every London borough for architectural drawings",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. WEDRAWPLANS cover every London borough and selected surrounding M25 locations for extensions, loft conversions, planning drawings, building regulation packs, flat conversions, internal remodelling and small new build projects.",
          },
        },
        {
          "@type": "Question",
          name: "Can you prepare both planning drawings and building regulation drawings",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We prepare planning drawing packages, lawful development certificate drawings and technical building regulation packs, with structural coordination where required.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you arrange an initial measured survey",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In most cases we can arrange the initial measured survey within 48 hours of instruction, subject to location, access and availability.",
          },
        },
        {
          "@type": "Question",
          name: "Do you submit to the local council through the Planning Portal",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We can prepare the drawings, complete the forms, submit through the Planning Portal and respond to planning officer queries where required.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help if my project is an extension, loft conversion or new build",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We cover single storey and double storey extensions, side returns, wraparound extensions, loft conversions, garage conversions, garden rooms, conversion projects and new build homes.",
          },
        },
        {
          "@type": "Question",
          name: "Do you coordinate with structural engineers",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We coordinate with structural engineers so beams, openings, load paths and technical details align properly with the architectural drawings.",
          },
        },
        {
          "@type": "Question",
          name: "What is the quickest way to get a quote from WEDRAWPLANS",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Send your postcode, project type and a short description using the form on this page or by WhatsApp. We reply with a clear fixed fee and recommended next steps.",
          },
        },
        {
          "@type": "Question",
          name: "Do you cover projects just outside London",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. We also support selected surrounding M25 locations including parts of Hertfordshire, Essex, Surrey, Kent and Buckinghamshire.",
          },
        },
      ],
    }),
    []
  );

  const itemListJson = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "London Borough Pages",
      itemListElement: boroughLinks.map((borough, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: borough.name,
        url: `https://www.wedrawplans.co.uk${borough.href}`,
      })),
    }),
    [boroughLinks]
  );

  return (
    <>
      <Head>
        <title>Architectural Drawings Across London and the M25 | WEDRAWPLANS</title>
        <meta
          name="description"
          content="Architectural drawings across London and the M25 for house extensions, loft conversions, planning applications, building regulation packs, flat conversions and small new build projects. Explore borough pages and request a fixed fee quote."
        />
        <meta
          name="keywords"
          content="architectural drawings London, extension drawings London, loft conversion drawings London, planning drawings London, building regulation drawings London, new build drawings London, flat conversion drawings London, architectural plans across London"
        />
        <link rel="canonical" href="https://www.wedrawplans.co.uk/areas" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJson) }}
        />
      </Head>

      <div className="min-h-screen bg-[#f8f4f0] text-slate-900">
        <header className="sticky top-0 z-[60] border-b border-slate-200 bg-[#fdf8f3]/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 lg:px-6 lg:py-4">
            <div className="relative flex min-h-[96px] items-center justify-center sm:min-h-[118px] lg:min-h-[120px]">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  className="h-24 w-auto object-contain sm:h-28 lg:h-28 xl:h-32"
                />
              </Link>

              <div className="absolute right-0 hidden items-center gap-3 lg:flex">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center rounded-full bg-[#20243b] px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#161a2f]"
                >
                  <span className="mr-2" aria-hidden="true">📞</span>
                  <span>{PHONE_DISPLAY}</span>
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-[#25D366] px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#1ebe57]"
                >
                  <span className="mr-2" aria-hidden="true">💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="absolute left-0 hidden lg:flex">
                <Link
                  href="/"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-900 shadow-sm hover:border-slate-400"
                >
                  Home
                </Link>
              </div>
            </div>

            <div className="hidden text-center text-[10px] uppercase tracking-[0.18em] text-slate-600 sm:block">
              Architectural Drawing Consultants
            </div>

            <div className="mt-3 hidden border-t border-slate-300 pt-3 lg:block">
              <nav className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] font-medium text-slate-900">
                <Link href="/areas" className="hover:text-black">
                  Areas We Cover
                </Link>
                <Link href="/extension-plans" className="hover:text-black">
                  Extension Plans
                </Link>
                <Link href="/loft-conversion-plans" className="hover:text-black">
                  Loft Plans
                </Link>
                <Link href="/new-build-plans" className="hover:text-black">
                  New Build
                </Link>
                <Link href="/building-regulation-drawings" className="hover:text-black">
                  Building Regulations
                </Link>
                <Link href="/commercial" className="hover:text-black">
                  Commercial
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <section className="border-b border-slate-200 bg-[#fdf8f3]">
            <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6 lg:py-10">
              <div className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-stretch">
                <div className="space-y-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-700">
                      London architectural drawing coverage
                    </p>

                    <h1 className="mt-2 text-[22px] font-semibold uppercase leading-snug tracking-[0.14em] text-slate-900 sm:text-[28px]">
                      Architectural Drawings Across London and the M25 for Extensions, Lofts, New Builds and Building Regs
                    </h1>

                    <p className="mt-3 text-[13px] font-semibold tracking-[0.08em] text-slate-800">
                      Fixed fees • Initial survey within 48 hours • Borough specific guidance • Planning and technical drawing packs
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <Image
                      src="/images/rear-extension-planning-building-reg-drawings.jpg"
                      alt="WEDRAWPLANS architectural drawings across London for extensions planning and building regulations"
                      width={1400}
                      height={950}
                      priority
                      className="h-[280px] w-full object-cover sm:h-[340px]"
                    />
                  </div>

                  <p className="text-[13px] leading-7 text-slate-700">
                    WEDRAWPLANS prepare architectural drawings across every London borough and selected surrounding M25 locations for house extensions, loft conversions, planning applications, building regulation packs, flat conversions, refurbishments, internal remodelling and small new build schemes. This page is the main London wide hub for clients looking for clear scope, strong design guidance, practical drawings and fast next steps.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    Whether you are planning a rear extension in Bromley, a loft conversion in Richmond, a side return in Southwark, a garage conversion in Harrow, a flat conversion in Redbridge or a new build scheme in Barnet, this page is designed to push you quickly to the right borough page and the right drawing package while keeping lead capture strong from start to finish.
                  </p>

                  <p className="text-[13px] leading-7 text-slate-700">
                    Many homeowners arrive here looking for one thing only: the fastest route to clear drawings, approval guidance and a fixed fee. That is why this page is built around borough coverage, service coverage, planning confidence, builder ready technical information and repeated enquiry points that make it easy to move forward today.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <TrustPill title="Fixed fees" body="Clear written scope and pricing before work starts." />
                    <TrustPill title="Fast surveys" body="Initial survey within 48 hours in most cases." />
                    <TrustPill title="London wide" body="Every borough covered with local guidance and service links." />
                  </div>

                  <ul className="space-y-1 text-[13px] text-slate-800">
                    <li>• House extensions including side return, rear and wraparound layouts</li>
                    <li>• Loft conversions including dormers, mansards and hip to gable schemes</li>
                    <li>• Building regulation drawing packs with structural coordination</li>
                    <li>• Flat conversions, internal remodelling, new builds and small developments</li>
                    <li>• Strong internal linking into borough pages and service pages</li>
                    <li>• Same day response on many enquiries</li>
                  </ul>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm hover:bg-[#4da4b4]"
                    >
                      Request drawing fees instantly
                    </button>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                    >
                      <span>💬</span>
                      <span>Send photos on WhatsApp</span>
                    </a>

                    <a
                      href={GOOGLE_BUSINESS_PROFILE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 shadow-sm hover:bg-slate-900 hover:text-white"
                    >
                      <span>⭐</span>
                      <span>Google Profile</span>
                    </a>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                      Fast route for London homeowners
                    </div>
                    <div className="mt-2 grid grid-cols-1 gap-3 text-[12px] text-slate-700 sm:grid-cols-3">
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 1</div>
                        <div>Send postcode, borough and project type</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 2</div>
                        <div>Survey within 48 hours where available</div>
                      </div>
                      <div className="rounded-xl border border-slate-100 p-3">
                        <div className="font-semibold text-slate-900">Step 3</div>
                        <div>Fixed fee drawings, revisions and submission support</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="areas-quote" className="space-y-6">
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <div className="p-5">
                      <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        Built to grab serious London leads
                      </div>
                      <h2 className="mt-2 text-[14px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                        Request your fixed fee quote
                      </h2>

                      <p className="mt-2 text-[12px] leading-6 text-slate-600">
                        Tell us your postcode, borough and what you plan to build. We reply with a clear fixed fee, recommended route and the next steps to move quickly into survey and drawings.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-4 space-y-3 text-[13px]">
                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">Name</label>
                          <input
                            name="name"
                            required
                            className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                          />
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="space-y-1">
                            <label className="text-[11px] font-medium text-slate-700">Telephone</label>
                            <input
                              name="phone"
                              required
                              type="tel"
                              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] font-medium text-slate-700">Email</label>
                            <input
                              name="email"
                              required
                              type="email"
                              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                            />
                          </div>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="space-y-1">
                            <label className="text-[11px] font-medium text-slate-700">Postcode</label>
                            <input
                              name="postcode"
                              required
                              placeholder="SW1A 1AA"
                              onFocus={(e) => {
                                e.target.placeholder = "";
                              }}
                              onBlur={(e) => {
                                if (!e.target.value) e.target.placeholder = "SW1A 1AA";
                              }}
                              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] text-slate-500/70 outline-none focus:border-[#64b7c4] focus:text-slate-900"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] font-medium text-slate-700">Borough or area</label>
                            <input
                              name="borough"
                              placeholder="For example: Richmond or Bromley"
                              className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">What drawings do you need</label>
                          <select
                            name="projectType"
                            required
                            defaultValue=""
                            className="w-full border-b border-slate-300 bg-transparent px-1 py-1.5 text-[13px] outline-none focus:border-[#64b7c4]"
                          >
                            <option value="" disabled>
                              Select project type
                            </option>
                            <option value="House extension drawings">House extension drawings</option>
                            <option value="Loft conversion drawings">Loft conversion drawings</option>
                            <option value="Garage conversion drawings">Garage conversion drawings</option>
                            <option value="Outbuilding or garden room drawings">Outbuilding or garden room drawings</option>
                            <option value="Internal remodelling drawings">Internal remodelling drawings</option>
                            <option value="Planning drawings only">Planning drawings only</option>
                            <option value="Building regulation pack only">Building regulation pack only</option>
                            <option value="New build house drawings">New build house drawings</option>
                            <option value="Conversion to self contained flats">Conversion to self contained flats</option>
                            <option value="Commercial drawings">Commercial drawings</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-medium text-slate-700">Brief description of your project</label>
                          <textarea
                            name="projectDetails"
                            rows={4}
                            placeholder="For example: rear extension and loft conversion with open plan kitchen and full building regs package"
                            className="w-full rounded border border-slate-300 bg-white px-2 py-2 text-[13px] outline-none focus:border-[#64b7c4]"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full rounded-full bg-[#64b7c4] py-2.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#4da4b4]"
                        >
                          Request drawing fees instantly
                        </button>

                        <div className="mt-2 space-y-1 text-[11px] text-slate-500">
                          <div>Typical enquiries include extensions, lofts, flat conversions, new builds and Building Reg packs.</div>
                          <div>We reply with clear scope, fixed fee, and the recommended planning or technical route.</div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                    <Image
                      src="/images/building-regulation-technical-drawing-packs.jpg"
                      alt="Technical architectural drawing packs across London by WEDRAWPLANS"
                      width={1200}
                      height={900}
                      className="h-[240px] w-full object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                        Technical drawing packs builders can actually use
                      </h3>
                      <p className="text-[13px] leading-7 text-slate-700">
                        Clear plans, sections, notes and coordinated technical intent that help planning officers, Building Control teams and builders understand the project without confusion.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-md">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-900">
                      Why this page matters
                    </div>
                    <ul className="mt-3 space-y-1 text-[13px] text-slate-700">
                      <li>• It links every borough page from one authority hub</li>
                      <li>• It covers every major homeowner drawing intent</li>
                      <li>• It gives clients a fast quote route from anywhere in London</li>
                      <li>• It supports extension, loft, new build and building regs SEO together</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceInternalLinks boroughName="London" />

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:items-center">
                <div className="space-y-4">
                  <h2 className="text-[20px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    London and outer London coverage map
                  </h2>
                  <p className="text-[14px] leading-7 text-slate-700">
                    This section is designed to make coverage obvious at a glance. WEDRAWPLANS support projects across inner London, outer London and selected high demand M25 edge locations. If your property is near a borough boundary or just outside Greater London, send the postcode and we will route you correctly.
                  </p>
                  <p className="text-[14px] leading-7 text-slate-700">
                    The strongest lead advantage on this page is not only borough coverage, but the way coverage is tied directly into extension drawings, loft conversion drawings, Building Reg packs, new build layouts and internal remodelling work. This helps clients immediately see that they are in the right place whether they arrived looking for borough help or service help.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Inner London",
                      "Outer London",
                      "Greater London",
                      "Selected M25 locations",
                      "Extensions",
                      "Lofts",
                      "New builds",
                      "Building regs",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-[#fdf8f3] px-3 py-1 text-[12px] text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
                  <Image
                    src="/images/area.jpg"
                    alt="London and outer London architectural drawing coverage map for WEDRAWPLANS"
                    width={1400}
                    height={900}
                    className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[430px]"
                  />
                  <div className="space-y-2 p-5">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                      Borough coverage plus M25 reach
                    </div>
                    <p className="text-[13px] leading-7 text-slate-700">
                      Use the borough directory below to jump into the right local page, or send your postcode now and let us direct you to the fastest planning and drawing route.
                    </p>
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="mt-2 rounded-full bg-[#20243b] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#161a2f]"
                    >
                      Get my London quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[20px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                Start with the right drawing package
              </h2>
              <p className="mt-2 max-w-4xl text-[14px] leading-7 text-slate-700">
                This page is built to capture clients at every stage. Some people arrive looking for borough help. Others already know the exact service they need. These core service routes make it easy to move into the strongest page for your project type before or after choosing your borough.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <ServiceCard
                  title="Extension Plans"
                  tag="Extensions"
                  href="/extension-plans"
                  body="Planning drawings and Building Regulation packs for rear extensions, side returns, wraparound layouts, two storey extensions and kitchen enlargements."
                />
                <ServiceCard
                  title="Loft Conversion Plans"
                  tag="Lofts"
                  href="/loft-conversion-plans"
                  body="Dormer, mansard and hip to gable loft conversion drawings prepared for planning, lawful development and technical development."
                />
                <ServiceCard
                  title="New Build Plans"
                  tag="New Builds"
                  href="/new-build-plans"
                  body="New build house drawings and small development packages with layout, massing, elevations and technical progression."
                />
                <ServiceCard
                  title="Building Regulation Drawings"
                  tag="Technical"
                  href="/building-regulation-drawings"
                  body="Technical drawing sets with sections, notes, compliance intent, structural coordination and practical builder ready detail."
                />
                <ServiceCard
                  title="Commercial Drawing Services"
                  tag="Commercial"
                  href="/commercial"
                  body="Shopfronts, office layouts, mixed use schemes, restaurants, change of use and supporting commercial drawing packages."
                />
                <ServiceCard
                  title="Areas We Cover"
                  tag="Local Pages"
                  href="/areas"
                  body="Use the borough directory below to jump into a local page with borough specific guidance and a direct quote route."
                />
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[20px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                High intent London project clusters
              </h2>
              <p className="mt-2 max-w-4xl text-[14px] leading-7 text-slate-700">
                Different parts of London behave differently. Some boroughs convert strongly for rear extensions and kitchen enlargements. Others bring more loft, conversion or new build enquiries. This section helps reinforce that WEDRAWPLANS understand London at borough level, not just as one broad area.
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <ClusterCard
                  title="Extension led boroughs"
                  areas={["Bromley", "Barnet", "Harrow", "Croydon", "Redbridge", "Hillingdon"]}
                  body="Strong family-home stock, larger plots and regular demand for rear extensions, side returns, wraparounds and open plan kitchen layouts."
                />
                <ClusterCard
                  title="Loft and roofspace led boroughs"
                  areas={["Richmond", "Wandsworth", "Merton", "Southwark", "Lambeth", "Ealing"]}
                  body="High demand for dormers, roofspace conversion, full width loft layouts and planning sensitive roof design work."
                />
                <ClusterCard
                  title="Conversion and development led boroughs"
                  areas={["Barnet", "Redbridge", "Newham", "Tower Hamlets", "Brent", "Enfield"]}
                  body="Higher enquiry levels for flat conversions, small schemes, HMOs, mixed use upgrades and new build opportunities."
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4da4b4]"
                >
                  Request drawing fees instantly
                </button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[20px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                Full London borough directory
              </h2>
              <p className="mt-2 max-w-4xl text-[14px] leading-7 text-slate-700">
                Every borough below links to a dedicated page. This is where local knowledge, service intent, planning sensitivity and direct lead capture come together. Select your borough to view the stronger local page and request a fixed fee quote.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {boroughLinks.map((borough) => (
                  <Link
                    key={borough.name}
                    href={borough.href}
                    className="group rounded-2xl border border-slate-200 bg-[#fdf8f3] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#64b7c4] hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-[12px] font-semibold text-slate-900 group-hover:border-[#64b7c4]">
                        {initialsForBadge(borough.name)}
                      </div>
                      <div className="text-[14px] font-semibold text-slate-900">{borough.name}</div>
                    </div>
                    <div className="mt-3 text-[13px] leading-6 text-slate-700">
                      View borough page and request a fixed fee quote.
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Why this borough directory is powerful for lead capture
                </h3>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-[13px] text-slate-700">
                    Borough pages let homeowners feel the service is local, specific and relevant to their council area.
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-[13px] text-slate-700">
                    Internal linking strengthens borough SEO while keeping service intent anchored back into the main site.
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-[13px] text-slate-700">
                    The combination of local trust plus a direct fixed fee quote route is one of the strongest drivers of enquiries.
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-[20px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                  Surrounding M25 locations
                </h2>
                <p className="mt-2 max-w-4xl text-[14px] leading-7 text-slate-700">
                  We also support projects outside Greater London where demand overlaps strongly with London homeowner searches and planning activity.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                  {countyLinks.map((county) => (
                    <Link
                      key={county.name}
                      href={county.href}
                      className="rounded-xl border border-slate-200 bg-[#fdf8f3] px-4 py-3 text-[13px] font-medium text-slate-900 shadow-sm transition hover:border-[#64b7c4] hover:bg-white"
                    >
                      {county.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="grid gap-8 lg:grid-cols-[1fr,1fr] lg:items-center">
                <div className="space-y-4">
                  <h2 className="text-[20px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Example scheme and quality benchmark
                  </h2>
                  <p className="text-[14px] leading-7 text-slate-700">
                    This section is here to show the level of clarity and confidence we aim to create before a client even submits an enquiry. A good London mother page should not just list services. It should also prove design quality, technical maturity and the kind of presentation homeowners trust.
                  </p>
                  <p className="text-[14px] leading-7 text-slate-700">
                    The video and showcase image below help bridge the gap between search intent and action. They give visitors enough visual proof to feel comfortable sending their details rather than leaving the page to compare competitors.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={scrollToForm}
                      className="rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4da4b4]"
                    >
                      Request drawing fees instantly
                    </button>
                    <a
                      href={GOOGLE_BUSINESS_PROFILE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] text-slate-800 hover:bg-slate-900 hover:text-white"
                    >
                      ⭐ Google Profile
                    </a>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-lg">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster="/images/video-main-poster.jpg"
                      className="h-full w-full object-cover"
                    >
                      <source src="/videos/barnet-planning-project.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-lg transition hover:-translate-y-0.5"
                  >
                    <Image
                      src="/images/new-build-house-planning-design-drawings.jpg"
                      alt="Architectural project showcase drawing presentation by WEDRAWPLANS"
                      width={900}
                      height={700}
                      className="h-full w-full object-cover"
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[20px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                Planning drawings, Building Regs and what clients usually need next
              </h2>
              <p className="mt-2 max-w-4xl text-[14px] leading-7 text-slate-700">
                One of the biggest reasons leads fail to convert is confusion. Many clients know they need drawings, but they do not know whether they need planning drawings, a lawful development set, a Building Regulation package, structural coordination or all of the above. This page should remove that confusion and push people smoothly into enquiry.
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Planning drawing packages
                  </h3>
                  <p className="mt-3 text-[13px] leading-7 text-slate-700">
                    Usually the right route when a client needs permission, pre application support or a lawful development certificate. Typical documents include existing and proposed plans, elevations, roof plans, sections, site location plans and clear presentation of the proposed design.
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-slate-700">
                    <li>Existing and proposed floor plans</li>
                    <li>Existing and proposed elevations</li>
                    <li>Roof plans and key sections</li>
                    <li>Location and block plans</li>
                    <li>Planning submission support if required</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                    Building Regulation drawing packs
                  </h3>
                  <p className="mt-3 text-[13px] leading-7 text-slate-700">
                    Usually needed once the design is approved and the project is moving towards pricing, compliance and construction. These packs focus on technical intent, junctions, compliance notes, insulation, ventilation, fire safety and structural coordination.
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-slate-700">
                    <li>Sections and critical construction details</li>
                    <li>Thermal and ventilation intent</li>
                    <li>Structural coordination</li>
                    <li>Fire and compliance notes</li>
                    <li>Builder ready technical information</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.14em] text-emerald-900">
                  Local planning knowledge matters in London
                </h3>
                <p className="mt-3 text-[13px] leading-7 text-emerald-900">
                  London includes conservation areas, listed settings, Article 4 directions, tighter roofscape control and borough specific design expectations. The strongest strategy is to start with the right planning route from the beginning and then shape the drawings so they read clearly in the local context.
                </p>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <h2 className="text-[20px] font-semibold uppercase tracking-[0.14em] text-slate-900">
                Frequently asked questions
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <FaqCard
                  title="Do you cover every London borough for architectural drawings"
                  body="Yes. WEDRAWPLANS cover every London borough and selected surrounding M25 locations. You can use the borough directory above or send your postcode and we will point you to the right route."
                />
                <FaqCard
                  title="Can you help with both extensions and loft conversions"
                  body="Yes. Many clients contact us for either one or both. We prepare drawing packages for rear extensions, side returns, wraparounds, loft conversions, dormers, mansards and other layout improvements."
                />
                <FaqCard
                  title="Do I need planning permission or can I use permitted development"
                  body="That depends on the property, location, design and restrictions. We check the address, proposal and borough context and then advise the most suitable route."
                />
                <FaqCard
                  title="Can you prepare Building Regulation drawings after planning"
                  body="Yes. We often take approved planning layouts forward into technical Building Regulation packs with structural coordination and builder ready detail."
                />
                <FaqCard
                  title="Do you support flat conversions and new build schemes"
                  body="Yes. We support conversion projects, self contained flat layouts, small development schemes and new build homes where the project scope fits our service offer."
                />
                <FaqCard
                  title="How quickly can you survey"
                  body="In most cases we can arrange the initial measured survey within 48 hours of instruction, subject to access, availability and location."
                />
                <FaqCard
                  title="Do you submit to the local council"
                  body="Yes. We can handle Planning Portal submissions and support planning officer queries where required so the process remains clear and well managed."
                />
                <FaqCard
                  title="What is the quickest way to get started"
                  body="Use the quote form on this page or send your postcode, photos and project description on WhatsApp. We will reply with a clear fixed fee and the recommended next steps."
                />
              </div>
            </div>
          </section>

          <section className="bg-[#f8f4f0] py-10">
            <div className="mx-auto max-w-6xl px-4 lg:px-6">
              <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-xl md:flex md:items-center md:justify-between md:gap-8 md:p-8">
                <div className="max-w-3xl">
                  <h2 className="text-[20px] font-semibold uppercase tracking-[0.12em]">
                    Ready to move your London project forward
                  </h2>
                  <p className="mt-3 text-[14px] leading-7 text-slate-300">
                    Send your postcode and a short description today. WEDRAWPLANS will review the enquiry, identify the most suitable route and reply with a clear fixed fee and next steps for survey and drawings.
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-3 md:mt-0">
                  <a
                    href={PHONE_LINK}
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                  <a
                    href={EMAIL_LINK}
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-white hover:text-slate-900"
                  >
                    Email {EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="inline-flex items-center justify-center rounded-full bg-[#64b7c4] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#4da4b4]"
                  >
                    Request drawing fees instantly
                  </button>
                  <a
                    href={GOOGLE_BUSINESS_PROFILE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-white hover:text-slate-900"
                  >
                    Google Profile
                  </a>
                </div>
              </div>

              <div className="pt-6 text-[12px] text-slate-600">
                See also{" "}
                <Link href="/extension-plans" className="underline">
                  extension plans
                </Link>
                ,{" "}
                <Link href="/loft-conversion-plans" className="underline">
                  loft conversion plans
                </Link>
                ,{" "}
                <Link href="/new-build-plans" className="underline">
                  new build plans
                </Link>
                ,{" "}
                <Link href="/building-regulation-drawings" className="underline">
                  building regulation drawings
                </Link>
                ,{" "}
                <Link href="/commercial" className="underline">
                  commercial drawing services
                </Link>
                .
              </div>

              <div className="pt-4 text-center text-[13px] text-slate-600">
                Find WEDRAWPLANS on Google Maps:
                <br />
                <a
                  href={GOOGLE_BUSINESS_PROFILE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-4 hover:text-blue-800"
                >
                  View our Google Business Profile
                </a>
              </div>
            </div>
          </section>

          <SmartPlanningAssistant boroughName="London" />
        </main>

        <footer className="border-t border-[#2a3050] bg-[#20243b]">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="inline-flex items-center justify-center">
                <img
                  src="/images/wedrawplans-logo.png"
                  alt="WEDRAWPLANS"
                  className="h-20 w-auto object-contain"
                />
              </Link>

              <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/70">
                Architectural Drawing Consultants
              </div>

              <p className="mt-4 max-w-2xl text-[13px] leading-7 text-white/80">
                WEDRAWPLANS provide architectural drawings for house extensions, loft conversions, planning applications, Building Regulations and small residential development projects across every London borough and selected surrounding M25 locations.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={PHONE_LINK}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#20243b] shadow-sm hover:bg-slate-100"
                >
                  Call {PHONE_DISPLAY}
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm hover:bg-[#1ebe57]"
                >
                  WhatsApp us
                </a>

                <a
                  href={EMAIL_LINK}
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-[#20243b]"
                >
                  Email us
                </a>

                <a
                  href={GOOGLE_BUSINESS_PROFILE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-white hover:text-[#20243b]"
                >
                  Google Profile
                </a>
              </div>

              <div className="mt-8 grid w-full max-w-4xl gap-6 border-t border-white/10 pt-8 text-center md:grid-cols-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Phone</div>
                  <div className="mt-2 text-[12px] text-white/65">
                    <a href={PHONE_LINK} className="hover:text-white">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Email</div>
                  <div className="mt-2 text-[12px] text-white/65">
                    <a href={EMAIL_LINK} className="hover:text-white">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">Studio</div>
                  <div className="mt-2 text-[12px] leading-6 text-white/65">
                    201 Borough High Street
                    <br />
                    London SE1 1JA
                    <br />
                    United Kingdom
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] text-white/65">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <Link href="/areas" className="hover:text-white">
                  Areas We Cover
                </Link>
                <Link href="/extension-plans" className="hover:text-white">
                  Extension Plans
                </Link>
                <Link href="/loft-conversion-plans" className="hover:text-white">
                  Loft Plans
                </Link>
                <Link href="/new-build-plans" className="hover:text-white">
                  New Build
                </Link>
                <Link href="/building-regulation-drawings" className="hover:text-white">
                  Building Regulations
                </Link>
                <Link href="/commercial" className="hover:text-white">
                  Commercial
                </Link>
              </div>

              <div className="mt-6 text-[11px] text-white/45">
                Copyright {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with WEDRAWPLANS"
          className="fixed bottom-4 right-4 z-[80] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white/70 hover:bg-[#1ebe57]"
        >
          <span className="text-xl">💬</span>
        </a>
      </div>
    </>
  );
}
