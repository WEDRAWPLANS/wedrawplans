import React from "react";

export default function ServiceInternalLinks({ boroughName }: { boroughName: string }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Popular services in {boroughName}
        </h2>

        <p className="mt-3 max-w-3xl text-slate-700">
          We provide full design and planning services for extensions, loft conversions
          and new build developments. Each service page explains what is included,
          how approvals work, and how to get a fixed quote.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <a
            href="/extension-plans"
            className="rounded-2xl border bg-slate-50 p-6 hover:bg-white"
          >
            <div className="text-sm font-extrabold">Extension Plans</div>
            <div className="mt-2 text-sm text-slate-700">
              Planning drawings and Building Regulations packages for house extensions.
            </div>
            <div className="mt-4 text-sm font-semibold text-blue-600 underline underline-offset-4">
              View Extension Plans
            </div>
          </a>

          <a
            href="/loft-conversion-plans"
            className="rounded-2xl border bg-slate-50 p-6 hover:bg-white"
          >
            <div className="text-sm font-extrabold">Loft Conversion Plans</div>
            <div className="mt-2 text-sm text-slate-700">
              Dormer, mansard and hip to gable loft designs with structural engineering.
            </div>
            <div className="mt-4 text-sm font-semibold text-blue-600 underline underline-offset-4">
              View Loft Plans
            </div>
          </a>

          <a
            href="/new-build-plans"
            className="rounded-2xl border bg-slate-50 p-6 hover:bg-white"
          >
            <div className="text-sm font-extrabold">New Build Plans</div>
            <div className="mt-2 text-sm text-slate-700">
              New build planning drawings with structural engineering and town planning support.
            </div>
            <div className="mt-4 text-sm font-semibold text-blue-600 underline underline-offset-4">
              View New Build Plans
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
