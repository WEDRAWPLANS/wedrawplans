import React, { useState } from "react";

export default function Home() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    // TODO: connect to your real endpoint
    // For now this just simulates a send
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 600);
  }

  return (
    <>
      <main className="page">
        {/* Top bar */}
        <header className="topbar">
          <div className="topbar-inner">
            <div className="brand">
              <div className="brand-logo">W</div>
              <div className="brand-name">WEDRAWPLANS</div>
            </div>
            <div className="topbar-contact">
              <a href="tel:+442036548508" className="topbar-link">
                <span role="img" aria-label="phone">
                  📞
                </span>
                +44 20 3654 8508
              </a>
              <span className="topbar-dot">•</span>
              <a
                href="mailto:info@wedrawplans.com"
                className="topbar-link"
              >
                <span role="img" aria-label="email">
                  ✉️
                </span>
                info@wedrawplans.com
              </a>
            </div>
          </div>
        </header>

        {/* Hero and form */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-badge">
                London house extension drawings made easy
              </div>
              <h1 className="hero-title">
                Planning drawings that win approvals and create build ready
                quotes
              </h1>
              <p className="hero-text">
                Fast, clear, council compliant drawings for extensions, lofts,
                conversions and new builds across London and the M25. Share
                your details for a free call and same day outline quote.
              </p>

              <ul className="hero-list">
                <li>Council compliant drawings</li>
                <li>Fixed transparent pricing</li>
                <li>First issue in 48 hours</li>
                <li>Aligned to UK 2025 Building Regulations</li>
              </ul>

              <div className="hero-ctas">
                <a href="tel:+442036548508" className="btn-secondary">
                  Call now
                </a>
                <a href="mailto:info@wedrawplans.com" className="btn-secondary">
                  Email us
                </a>
                <span className="hero-open">
                  ⏰ Open today for new enquiries
                </span>
              </div>
            </div>

            <div className="hero-right">
              <div className="card">
                <h2>Get your free call and outline quote</h2>
                <p className="card-sub">
                  No obligation. We respond within one business day.
                </p>

                {sent ? (
                  <div className="alert-success">
                    Thank you. Your request has been received. We will contact
                    you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="lead-form">
                    <div className="form-row two">
                      <div className="form-field">
                        <label>Full name</label>
                        <input
                          name="name"
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-field">
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div className="form-row two">
                      <div className="form-field">
                        <label>Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="07…"
                        />
                      </div>
                      <div className="form-field">
                        <label>Postcode</label>
                        <input
                          name="postcode"
                          required
                          placeholder="SE5 7GD"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label>Project type</label>
                        <select name="project" required>
                          <option value="Extension">House extension</option>
                          <option value="Loft">Loft conversion</option>
                          <option value="Annexe">Garden annexe / outbuilding</option>
                          <option value="Conversion">Flat or HMO conversion</option>
                          <option value="New build">New build</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label>Tell us a bit more</label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="What are you planning and when would you like to start"
                        />
                      </div>
                    </div>

                    <label className="form-consent">
                      <input type="checkbox" required />
                      <span>
                        I agree to be contacted by WEDRAWPLANS. My details will
                        not be shared with any third party.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={submitting}
                    >
                      {submitting ? "Sending…" : "Request my free call"}
                    </button>

                    <p className="form-footer">
                      Or call{" "}
                      <a href="tel:+442036548508">
                        +44 20 3654 8508
                      </a>{" "}
                      or email{" "}
                      <a href="mailto:info@wedrawplans.com">
                        info@wedrawplans.com
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Proof section */}
        <section className="section">
          <div className="section-inner three">
            <div className="feature-card">
              <h3>Council ready drawings</h3>
              <p>
                Drawings aligned to the latest UK Building Regulations and local
                London validation lists, including fire safety and access
                requirements.
              </p>
            </div>
            <div className="feature-card">
              <h3>All London boroughs</h3>
              <p>
                We focus on homeowners across London and the M25 and understand
                how different boroughs behave, from Harrow to Lewisham.
              </p>
            </div>
            <div className="feature-card">
              <h3>Fast and precise</h3>
              <p>
                Typical extension projects receive first issue drawings within
                48 hours of survey, with clear revisions and support until
                approval.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage section */}
        <section className="section section-alt">
          <div className="section-inner">
            <div className="coverage-left">
              <h2>Where we work</h2>
              <p>
                Inner and outer London, including suburban areas around the M25.
                Estate agents and developers are welcome for repeat and bulk
                instructions.
              </p>
              <ul className="borough-list">
                {[
                  "Lewisham",
                  "Southwark",
                  "Lambeth",
                  "Greenwich",
                  "Hackney",
                  "Haringey",
                  "Croydon",
                  "Bromley",
                  "Harrow",
                  "Redbridge",
                  "Newham",
                  "Ealing",
                ].map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="coverage-right">
              <div className="map-placeholder">
                <div>London and M25 coverage</div>
                <small>
                  Replace this box later with an interactive SVG or map
                  component
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-inner">
            <div>
              <strong>WEDRAWPLANS</strong> – Architectural planning and drawing
              services for London homeowners
            </div>
            <div className="footer-contact">
              <a href="tel:+442036548508">+44 20 3654 8508</a>
              <span>·</span>
              <a href="mailto:info@wedrawplans.com">info@wedrawplans.com</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Simple global styles */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          color: #0f172a;
          background: #f8fafc;
        }
        a {
          color: inherit;
        }
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .topbar {
          border-bottom: 1px solid #e2e8f0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 20;
        }
        .topbar-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .brand-logo {
          height: 32px;
          width: 32px;
          border-radius: 999px;
          background: #dc2626;
          color: white;
          display: grid;
          place-items: center;
          font-weight: 700;
        }
        .brand-name {
          font-size: 18px;
          font-weight: 600;
        }
        .topbar-contact {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        .topbar-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
        }
        .topbar-link:hover {
          opacity: 0.8;
        }
        .hero {
          padding: 32px 16px 40px;
          background: linear-gradient(to bottom, #ffffff, #f1f5f9);
        }
        .hero-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          gap: 32px;
        }
        @media (min-width: 900px) {
          .hero-inner {
            grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
          }
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .hero-badge {
          display: inline-flex;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid #e2e8f0;
          font-size: 12px;
          background: white;
        }
        .hero-title {
          font-size: 32px;
          line-height: 1.1;
          margin: 0;
        }
        @media (min-width: 768px) {
          .hero-title {
            font-size: 40px;
          }
        }
        .hero-text {
          margin: 0;
          font-size: 16px;
          color: #475569;
        }
        .hero-list {
          list-style: none;
          padding: 0;
          margin: 8px 0 0;
          display: grid;
          gap: 6px;
        }
        @media (min-width: 600px) {
          .hero-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .hero-list li::before {
          content: "✔";
          color: #059669;
          margin-right: 6px;
        }
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          margin-top: 8px;
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid #cbd5f5;
          background: white;
          font-size: 14px;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background: #f8fafc;
        }
        .hero-open {
          font-size: 13px;
          color: #64748b;
        }
        .hero-right {
          display: flex;
          justify-content: center;
        }
        .card {
          width: 100%;
          max-width: 420px;
          background: white;
          border-radius: 18px;
          border: 1px solid #e2e8f0;
          padding: 20px 20px 22px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
        }
        .card h2 {
          margin: 0;
          font-size: 20px;
        }
        .card-sub {
          margin: 4px 0 0;
          font-size: 13px;
          color: #64748b;
        }
        .alert-success {
          margin-top: 16px;
          padding: 12px;
          border-radius: 12px;
          background: #ecfdf3;
          color: #166534;
          font-size: 14px;
          border: 1px solid #bbf7d0;
        }
        .lead-form {
          margin-top: 16px;
          display: grid;
          gap: 10px;
        }
        .form-row {
          display: grid;
          gap: 10px;
        }
        .form-row.two {
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .form-row.two {
            grid-template-columns: 1fr 1fr;
          }
        }
        .form-field label {
          display: block;
          font-size: 13px;
          margin-bottom: 4px;
        }
        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          padding: 7px 9px;
          font-size: 14px;
          outline: none;
        }
        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          border-color: #0f172a;
        }
        .form-consent {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: #64748b;
        }
        .form-consent input {
          margin-top: 3px;
        }
        .btn-primary {
          width: 100%;
          border: none;
          border-radius: 999px;
          padding: 10px 16px;
          font-size: 15px;
          font-weight: 500;
          background: #0f172a;
          color: white;
          cursor: pointer;
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: default;
        }
        .form-footer {
          margin: 8px 0 0;
          font-size: 12px;
          text-align: center;
          color: #64748b;
        }
        .form-footer a {
          text-decoration: underline;
        }
        .section {
          padding: 24px 16px 32px;
        }
        .section-inner {
          max-width: 1120px;
          margin: 0 auto;
        }
        .section-inner.three {
          display: grid;
          gap: 16px;
        }
        @media (min-width: 900px) {
          .section-inner.three {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .feature-card {
          background: white;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          padding: 16px;
          font-size: 14px;
        }
        .feature-card h3 {
          margin: 0 0 4px;
          font-size: 16px;
        }
        .feature-card p {
          margin: 0;
          color: #64748b;
        }
        .section-alt {
          background: white;
          border-top: 1px solid #e2e8f0;
        }
        .section-alt .section-inner {
          display: grid;
          gap: 24px;
        }
        @media (min-width: 900px) {
          .section-alt .section-inner {
            grid-template-columns: 1.2fr 1fr;
          }
        }
        .coverage-left h2 {
          margin: 0 0 8px;
        }
        .coverage-left p {
          margin: 0 0 10px;
          color: #475569;
        }
        .borough-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 6px;
          font-size: 14px;
        }
        @media (min-width: 640px) {
          .borough-list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .borough-list li::before {
          content: "●";
          font-size: 10px;
          margin-right: 6px;
          color: #0f172a;
        }
        .coverage-right {
          display: flex;
          justify-content: center;
        }
        .map-placeholder {
          width: 100%;
          max-width: 420px;
          height: 220px;
          border-radius: 20px;
          border: 1px dashed #cbd5e1;
          background: radial-gradient(circle at center, #e2e8f0, #f8fafc);
          display: grid;
          place-items: center;
          text-align: center;
          font-size: 13px;
          color: #475569;
          padding: 12px;
        }
        .map-placeholder small {
          display: block;
          margin-top: 4px;
          font-size: 11px;
          color: #64748b;
        }
        .footer {
          border-top: 1px solid #e2e8f0;
          background: #0f172a;
          color: #e2e8f0;
          padding: 14px 16px;
          margin-top: auto;
        }
        .footer-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 13px;
        }
        @media (min-width: 700px) {
          .footer-inner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        .footer-contact {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .footer-contact a {
          text-decoration: none;
        }
        .footer-contact a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
