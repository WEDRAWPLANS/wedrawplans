import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const isEmail = (v?: string) => /.+@.+\..+/.test(v || '');
const nonEmpty = (v?: string) => (v || '').trim().length > 0;

const LIVE =
  typeof window !== 'undefined' &&
  ((window as any).__LIVE__ || (typeof process !== 'undefined' && (process as any).env && (process as any).env.NEXT_PUBLIC_LIVE === '1'));

export default function Home() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    projectType: '',
    stage: '',
    message: '',
    consent: false,
    company: '' // honeypot
  });
  const [errors, setErrors] = useState<{[k:string]: string}>({});
  const [tests, setTests] = useState<{name:string; pass:boolean; note?:string}[]>([]);

  useEffect(() => {}, []);

  function updateField(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target as any;
    const type = (e.target as any).type;
    const checked = (e.target as any).checked;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  }

  function validate() {
    const e: {[k:string]: string} = {};
    if (!nonEmpty(form.name)) e.name = 'Required';
    if (!nonEmpty(form.phone)) e.phone = 'Required';
    if (!isEmail(form.email)) e.email = 'Invalid email';
    if (!nonEmpty(form.postcode)) e.postcode = 'Required';
    if (!nonEmpty(form.projectType)) e.projectType = 'Select one';
    if (!nonEmpty(form.stage)) e.stage = 'Select one';
    if (!form.consent) e.consent = 'Consent required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.company) { setSent(true); return; }
    if (!validate()) return;

    setLoading(true);
    try {
      if (LIVE) {
        const res = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Lead API error: ' + res.status);
      } else {
        await new Promise((r) => setTimeout(r, 400));
      }
      setSent(true);
    } catch (err) {
      console.error(err);
      alert('There was an error sending your message. Please phone us instead.');
    } finally {
      setLoading(false);
    }
  }

  function runDiagnostics() {
    const results: {name:string; pass:boolean; note?:string}[] = [];

    try {
      results.push({ name: 'useState initialises', pass: typeof sent === 'boolean' && typeof loading === 'boolean' });
    } catch (e:any) {
      results.push({ name: 'useState initialises', pass: false, note: e?.message });
    }

    try {
      const guarded = typeof process !== 'undefined' && (process as any).env && (process as any).env.NEXT_PUBLIC_LIVE === '1';
      results.push({ name: 'process guard safe', pass: typeof guarded === 'boolean' });
    } catch (e:any) {
      results.push({ name: 'process guard safe', pass: false, note: e?.message });
    }

    try {
      const prev = { ...form };
      const bad = { ...form, name: '', phone: '', email: 'bad', postcode: '', projectType: '', stage: '', consent: false };
      setForm(bad);
      const valid = validate();
      results.push({ name: 'Validation fails on empty/invalid', pass: valid === false });
      setForm(prev);
    } catch (e:any) {
      results.push({ name: 'Validation fails on empty/invalid', pass: false, note: e?.message });
    }

    try {
      const prev = { ...form };
      setForm({ ...form, name: 'Test', phone: '0700000000', email: 'a@b.com', postcode: 'SE1 1JA', projectType: 'Rear extension', stage: 'Planning drawings', consent: true, company: '' });
      const valid = validate();
      results.push({ name: 'Validation passes on valid input', pass: valid === true });
      setForm(prev);
    } catch (e:any) {
      results.push({ name: 'Validation passes on valid input', pass: false, note: e?.message });
    }

    try {
      const map = LIVE ? ((typeof process !== 'undefined' && (process as any).env && (process as any).env.NEXT_PUBLIC_MAP_EMBED_URL) || '') : '';
      results.push({ name: 'mapEmbed safe', pass: typeof map === 'string' });
    } catch (e:any) {
      results.push({ name: 'mapEmbed safe', pass: false, note: e?.message });
    }

    setTests(results);
  }

  const mapEmbed =
    LIVE
      ? ((typeof process !== 'undefined' && (process as any).env && (process as any).env.NEXT_PUBLIC_MAP_EMBED_URL) || '')
      : '';

  return (
    <>
      <Head>
        <title>WEDRAWPLANS — Architectural Drawings for Planning & Building Regs (London & M25)</title>
        <meta name="description" content="Fast planning drawings, building regulation packs, and full design for home extensions, lofts, and new builds. Get a same‑day quote and speak to our team now." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white text-neutral-900">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-red-600 text-white grid place-items-center font-bold">W</div>
              <span className="font-semibold">WEDRAWPLANS</span>
            </div>
            <div className="flex items-center gap-3">
              <a className="hidden md:inline-block text-sm underline" href="mailto:info@wedrawplans.com">info@wedrawplans.com</a>
              <a className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm font-semibold bg-red-600 text-white hover:bg-red-700" href="tel:+442036548508">Call +44 20 3654 8508</a>
            </div>
          </div>
        </div>

        <main className="pt-20">
          <section className="bg-gradient-to-b from-neutral-50 to-white">
            <div className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  Architectural drawings that win approvals
                </h1>
                <p className="mt-4 text-lg text-neutral-700">
                  Planning drawings and building regulation packs for extensions, lofts, and conversions — across London and the M25. Fast, compliant, and council friendly. Get a same day quote now.
                </p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green-600"/> Same day call back</li>
                  <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green-600"/> Fixed transparent pricing</li>
                  <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green-600"/> Council ready drawings</li>
                  <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green-600"/> 100% UK Building Regs 2025</li>
                </ul>
                <div className="mt-8 flex gap-3">
                  <a href="#quote" className="inline-flex items-center rounded-2xl bg-red-600 text-white px-5 py-3 font-semibold hover:bg-red-700">Get a free quote</a>
                  <a href="tel:+442036548508" className="inline-flex items-center rounded-2xl border px-5 py-3 font-semibold hover:bg-neutral-50">Call now</a>
                </div>
                <p className="mt-3 text-xs text-neutral-500">By WEDRAWPLANS • 201 Borough High Street, London SE1 1JA</p>
              </div>

              <div id="quote">
                <div className="rounded-3xl shadow-xl border border-neutral-200 bg-white">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold">Get your same day quote</h2>
                    <p className="text-sm text-neutral-600 mt-1">We will email and phone you back quickly.</p>

                    <form onSubmit={handleSubmit} className="mt-6 grid gap-4" method="post">
                      <input type="text" name="company" value={form.company} onChange={updateField} className="hidden" tabIndex={-1} autoComplete="off" />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <input className="w-full rounded-xl border px-3 py-2" name="name" placeholder="Full name" value={form.name} onChange={updateField} required />
                        <input className="w-full rounded-xl border px-3 py-2" type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={updateField} required />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input className="w-full rounded-xl border px-3 py-2" type="email" name="email" placeholder="Email" value={form.email} onChange={updateField} required />
                        <input className="w-full rounded-xl border px-3 py-2" name="postcode" placeholder="Postcode" value={form.postcode} onChange={updateField} required />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <select name="projectType" className="w-full rounded-xl border px-3 py-2" value={form.projectType} onChange={updateField} required>
                          <option value="">Project type</option>
                          <option>Rear extension</option>
                          <option>Side return extension</option>
                          <option>Loft conversion</option>
                          <option>Garage conversion</option>
                          <option>New build</option>
                          <option>Flat conversion</option>
                          <option>Basement</option>
                        </select>
                        <select name="stage" className="w-full rounded-xl border px-3 py-2" value={form.stage} onChange={updateField} required>
                          <option value="">Stage</option>
                          <option>Planning drawings</option>
                          <option>Building regs pack</option>
                          <option>Full package</option>
                          <option>Measured survey</option>
                        </select>
                      </div>
                      <textarea className="w-full rounded-xl border px-3 py-2" name="message" placeholder="Tell us about your project (optional)" rows={4} value={form.message} onChange={updateField} />

                      <label className="text-xs text-neutral-600 flex items-center gap-2">
                        <input type="checkbox" name="consent" checked={form.consent} onChange={updateField} className="rounded" /> I agree to be contacted by phone and email.
                      </label>

                      {Object.keys(errors).length > 0 && (
                        <div className="text-red-700 text-sm">
                          Please correct: {Object.keys(errors).join(', ')}
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        <button type="submit" disabled={loading} className="rounded-2xl bg-red-600 hover:bg-red-700 text-white px-5 py-3 font-semibold disabled:opacity-60">
                          {loading ? 'Sending...' : 'Submit'}
                        </button>
                        <a className="text-sm underline" href="mailto:info@wedrawplans.com">Or email us instead</a>
                      </div>

                      {sent && (
                        <p className="text-green-700 text-sm mt-2">Thank you. We have received your details. We will be in touch soon.</p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-y bg-white">
            <div className="mx-auto max-w-7xl px-4 py-6 grid sm:grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border p-4"><strong>Same day call back</strong><div className="text-sm text-neutral-600">Fast quotes and clear pricing</div></div>
              <div className="rounded-2xl border p-4"><strong>Building Regs 2025 ready</strong><div className="text-sm text-neutral-600">Fully compliant specification</div></div>
              <div className="rounded-2xl border p-4"><strong>London + M25 coverage</strong><div className="text-sm text-neutral-600">Borough specific expertise</div></div>
            </div>
          </section>

          <section className="bg-neutral-50">
            <div className="mx-auto max-w-7xl px-4 py-12">
              <h2 className="text-2xl sm:text-3xl font-bold">What we deliver</h2>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {[{ title: 'Planning drawings', desc: 'Full plans, elevations, site and block plans, design statements.' },
                  { title: 'Building regulations pack', desc: '2025 compliant specifications, details, notes, and schedules.' },
                  { title: 'Measured survey', desc: 'On site survey with laser measure and photo record.' },
                  { title: '3D visuals', desc: 'Optional visuals to help clients and planners understand proposals.' },
                  { title: 'Consultant coordination', desc: 'Structural, drainage, and fire safety integration.' },
                  { title: 'Submission support', desc: 'Planning Portal submission and validation support.' }].map((item) => (
                    <div key={item.title} className="rounded-2xl bg-white p-6 border shadow-sm">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="mt-2 text-sm text-neutral-700">{item.desc}</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Find your borough page</h2>
                <p className="mt-2 text-neutral-700">Dedicated landing pages for each borough and council area to match local policy and boost visibility.</p>
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {['Lewisham','Harrow','Newham','Redbridge','Camden','Barnet','Enfield','Haringey','Tower Hamlets','Southwark','Bromley','Croydon'].map((b) => (
                    <a key={b} href={`/borough/${b.toLowerCase().replace(/\s+/g,'-')}`} className="rounded-xl border px-4 py-3 hover:bg-neutral-50">{b}</a>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border shadow-sm min-h-[320px]">
                {LIVE && mapEmbed ? (
                  <iframe title="WEDRAWPLANS project map" src={mapEmbed} className="w-full h-[360px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                ) : (
                  <div className="w-full h-[360px] grid place-items-center bg-neutral-100 text-neutral-600">Project map preview (disabled in sandbox)</div>
                )}
              </div>
            </div>
          </section>

          <section className="bg-neutral-50">
            <div className="mx-auto max-w-7xl px-4 py-12">
              <h2 className="text-2xl sm:text-3xl font-bold">Clients trust WEDRAWPLANS</h2>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                {[{ quote: 'Fast, clear, and got us approved first time.', name: 'Homeowner in Bromley' },
                  { quote: 'Very detailed regs pack. Builder was impressed.', name: 'Developer in Harrow' },
                  { quote: 'Smooth process from survey to submission.', name: 'Landlord in Lewisham' }].map((t, i) => (
                    <div key={i} className="rounded-2xl bg-white p-6 border shadow-sm">
                      <p className="text-neutral-800">“{t.quote}”</p>
                      <p className="mt-3 text-sm text-neutral-600">{t.name}</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12">
              <h2 className="text-2xl sm:text-3xl font-bold">FAQs</h2>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                {[{ q: 'How fast can you start?', a: 'We usually call back the same day and can schedule a survey within a few days.' },
                  { q: 'Do you handle planning submission?', a: 'Yes. We prepare drawings and manage submission to the Planning Portal, including validation support.' },
                  { q: 'Are your drawings compliant with 2025 Building Regulations?', a: 'Yes. Our specification pack aligns with current UK regulations and local guidance.' },
                  { q: 'Do you work across the M25?', a: 'Yes. We cover all London boroughs and nearby areas.' }].map((f) => (
                    <div key={f.q} className="rounded-2xl border p-6">
                      <h3 className="font-semibold">{f.q}</h3>
                      <p className="mt-2 text-neutral-700 text-sm">{f.a}</p>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-b from-white to-neutral-50">
            <div className="mx-auto max-w-7xl px-4 py-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">Ready for your quote?</h2>
              <p className="mt-2 text-neutral-700">Call us or send your details. We reply fast.</p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a href="tel:+442036548508" className="inline-flex items-center rounded-2xl bg-red-600 text-white px-5 py-3 font-semibold hover:bg-red-700">Call +44 20 3654 8508</a>
                <a href="#quote" className="inline-flex items-center rounded-2xl border px-5 py-3 font-semibold hover:bg-neutral-50">Get a free quote</a>
                <a href="mailto:info@wedrawplans.com" className="inline-flex items-center rounded-2xl border px-5 py-3 font-semibold hover:bg-neutral-50">info@wedrawplans.com</a>
              </div>
              <p className="mt-3 text-xs text-neutral-500">WEDRAWPLANS • 201 Borough High Street, London SE1 1JA</p>
            </div>
          </section>

          <section className="bg-white border-t">
            <div className="mx-auto max-w-7xl px-4 py-8">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Diagnostics</h3>
                <button onClick={runDiagnostics} className="rounded-xl border px-4 py-2 hover:bg-neutral-50">Run tests</button>
              </div>
              {tests.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm">
                  {tests.map((t, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${t.pass ? 'bg-green-600' : 'bg-red-600'}`} />
                      <span className="font-medium">{t.name}</span>
                      {t.note && <span className="text-neutral-500">— {t.note}</span>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </main>

        <a href="tel:+442036548508" className="fixed bottom-5 right-5 md:hidden shadow-lg rounded-full px-5 py-3 bg-red-600 text-white font-semibold">Call</a>

        <footer className="bg-black text-white mt-12">
          <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-8">
            <div>
              <div className="inline-flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-white text-black grid place-items-center font-bold">W</div>
                <span className="font-semibold">WEDRAWPLANS</span>
              </div>
              <p className="mt-3 text-sm text-neutral-300">Architectural drawings for planning and building regulations across London and the M25.</p>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-3 space-y-1 text-sm text-neutral-300">
                <li><a href="tel:+442036548508" className="underline">+44 20 3654 8508</a></li>
                <li><a href="mailto:info@wedrawplans.com" className="underline">info@wedrawplans.com</a></li>
                <li>201 Borough High Street, London SE1 1JA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Services</h4>
              <ul className="mt-3 space-y-1 text-sm text-neutral-300">
                <li>Planning drawings</li>
                <li>Building regulations pack</li>
                <li>Measured surveys</li>
                <li>3D visuals</li>
                <li>Consultant coordination</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Legal</h4>
              <ul className="mt-3 space-y-1 text-sm text-neutral-300">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-neutral-400">© {new Date().getFullYear()} WEDRAWPLANS. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </>
  );
}
