import React from "react";

export default function Barnet() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
          WEDRAWPLANS • Barnet
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">
          Architectural Drawings in Barnet
        </h1>
        <p className="text-lg text-gray-700">
          Planning permission, extensions, loft conversions and full building regulation
          drawings for homes in Barnet, Finchley, Hendon, Mill Hill, Totteridge,
          Whetstone and all surrounding areas.
        </p>
        <p className="text-sm text-gray-600">
          Fast surveys, clear drawings, strong planning strategy and compliant building
          regulation packs tailored to Barnet Council.
        </p>
      </header>

      <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5 space-y-2">
        <h2 className="text-xl font-semibold">
          Get your Barnet extension or loft project moving today
        </h2>
        <p className="text-sm text-gray-700">
          Send us your address in Barnet and a short description of your project. We will
          confirm what is possible under planning or permitted development and provide a
          clear fixed quote for your drawings.
        </p>

        <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
          <li>Measured survey and photo record</li>
          <li>Full planning or permitted development drawings</li>
          <li>Building regulation drawings and structural coordination</li>
          <li>Submission to Barnet Council and follow up</li>
        </ul>

        <div className="pt-2 text-sm">
          <p>
            Phone:{" "}
            <a href="tel:+442036548508" className="font-semibold text-emerald-700 underline">
              +44 20 3654 8508
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@wedrawplans.com"
              className="font-semibold text-emerald-700 underline"
            >
              info@wedrawplans.com
            </a>
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Barnet areas we cover</h2>
        <p className="text-sm text-gray-700">
          We provide drawings across the whole borough of Barnet, including:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
          <ul className="list-disc pl-5 space-y-1">
            <li>Finchley Central (N3)</li>
            <li>North Finchley (N12)</li>
            <li>East Finchley (N2)</li>
            <li>Hendon (NW4)</li>
            <li>Mill Hill (NW7)</li>
          </ul>

          <ul className="list-disc pl-5 space-y-1">
            <li>Totteridge & Whetstone (N20)</li>
            <li>High Barnet (EN5)</li>
            <li>Chipping Barnet</li>
            <li>Golders Green & NW11 borders</li>
            <li>EN4, EN5 & all Barnet postcodes</li>
          </ul>
        </div>

        <p className="text-sm text-gray-700">
          Typical projects in these areas include rear and side extensions, wraparound
          extensions, large loft conversions, garden studios and full refurbishments.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What WEDRAWPLANS does in Barnet</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="space-y-2">
            <h3 className="font-semibold">Extensions</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Single storey rear extensions</li>
              <li>Side and side return extensions</li>
              <li>Wraparound & L-shaped extensions</li>
              <li>Double storey side/rear extensions</li>
              <li>Kitchen & open-plan extensions</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Loft conversions</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rear dormer loft conversions</li>
              <li>Hip-to-gable conversions</li>
              <li>L-shaped dormers</li>
              <li>Mansard-style lofts</li>
              <li>Staircase & layout design</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Garden buildings</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Home offices & studios</li>
              <li>Gym rooms</li>
              <li>Guest rooms</li>
              <li>Permitted development outbuildings</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Flats, HMOs & new builds</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Flat conversion drawings</li>
              <li>HMO layouts</li>
              <li>Fire safety & AOV plans</li>
              <li>Small new-build developments</li>
              <li>Full planning & building regs packs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Barnet planning & permitted development</h2>
        <p className="text-sm text-gray-700">
          Barnet Council follows national PD rules but interprets them carefully. Many
          extensions and loft conversions can be approved under permitted development if
          drawn correctly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold">Planning application types</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Householder planning applications</li>
              <li>Lawful Development Certificates</li>
              <li>Prior Approval (6m & 8m extensions)</li>
              <li>Full planning for conversions & new builds</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">PD limits in Barnet</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>3m rear extension (semis)</li>
              <li>4m rear extension (detached)</li>
              <li>6m/8m with Prior Approval</li>
              <li>Loft volume: 40–50m³</li>
              <li>Outbuildings: 2.5m near boundaries</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Building regulation drawings</h2>
        <p className="text-sm text-gray-700">
          We prepare full building regulation drawings including structure, fire safety,
          thermal compliance, drainage, and construction details required by Barnet
          Building Control.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">FAQ</h2>

        <div className="space-y-2 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold">Can I build a 6m extension in Barnet?</h3>
            <p>Yes, under Prior Approval with correct drawings and neighbour consultation.</p>
          </div>

          <div>
            <h3 className="font-semibold">Are loft conversions allowed under PD?</h3>
            <p>Most are, as long as volume and design rules are followed.</p>
          </div>

          <div>
            <h3 className="font-semibold">Do you help with submissions?</h3>
            <p>Yes — we handle full submissions to Barnet Council.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
