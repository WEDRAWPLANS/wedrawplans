import React from "react";
import Head from "next/head";
import { submitBoroughLead } from "../lib/submitBoroughLead";

const PHONE_DISPLAY = "020 3654 8508";
const PHONE_LINK = "tel:+442036548508";
const WHATSAPP_LINK =
  "https://wa.me/442036548508?text=Hello%20WEDRAWPLANS%2C%20I%20would%20like%20a%20fixed%20quote%20for%20house%20extension%20planning%20drawings";

export default function ExtensionPlansPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    await submitBoroughLead(e, {
      boroughName: "House Extension Plans London"
    });
  }

  function scrollToForm() {
    const el = document.getElementById("extension-quote");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  const localBusinessJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WEDRAWPLANS",
    url: "https://www.wedrawplans.co.uk/extension-plans",
    telephone: "+44 20 3654 8508",
    email: "info@wedrawplans.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "201 Borough High Street",
      addressLocality: "London",
      postalCode: "SE1 1JA",
      addressCountry: "UK"
    },
    areaServed: "Greater London and M25",
    description:
      "Professional house extension planning drawings in London with fixed fees. Specialists in rear, side return, wrap around and double storey extensions."
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need planning permission for a house extension?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Some house extensions fall under permitted development, while others require full planning permission. This depends on size, location, property type and local restrictions. We assess this before producing drawings."
        }
      },
      {
        "@type": "Question",
        name: "How much do extension planning drawings cost in London?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Extension planning drawings typically start from £750 with fixed fees depending on the size and complexity of the project."
        }
      },
      {
        "@type": "Question",
        name: "What drawings are required for planning permission?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Planning applications usually require existing and proposed floor plans, elevations, site plans and sometimes sections and roof plans."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>
          House Extension Plans London | Fixed Fee Planning Drawings – WEDRAWPLANS
        </title>
        <meta
          name="description"
          content="House extension planning drawings in London. Fixed fees from £750. Rear, side return, wrap around and double storey extensions. All boroughs covered."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      </Head>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-left">
            <span className="eyebrow">
              HOUSE EXTENSION PLANNING DRAWINGS
            </span>
            <h1>
              House Extension Plans in London – Fixed Fees, Proven Planning Success
            </h1>
            <p>
              WEDRAWPLANS is a London-based architectural drawing consultancy
              specialising in planning drawings for house extensions. We deliver
              council-ready drawings for rear extensions, side returns, wrap
              around and double storey extensions with clear fixed pricing and
              expert planning knowledge.
            </p>

            <ul className="bullets">
              <li>Fixed fees from £750</li>
              <li>Measured survey accuracy</li>
              <li>Planning and Building Regulations packs</li>
              <li>All London boroughs and M25 covered</li>
              <li>Same-day response on most enquiries</li>
              <li>Phone, email and WhatsApp support</li>
            </ul>

            <div className="cta-row">
              <button onClick={scrollToForm} className="primary-btn">
                Get My Fixed Quote
              </button>
              <a href={PHONE_LINK} className="secondary-link">
                Or call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="hero-right" id="extension-quote">
            <h3>Free Fixed Extension Quote</h3>
            <p>
              Share a few details and receive a clear fixed fee for your extension
              drawings.
            </p>

            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Name" required />
              <div className="two">
                <input name="phone" placeholder="Telephone" required />
                <input name="email" placeholder="Email" required />
              </div>
              <input name="postcode" placeholder="Postcode" required />
              <select name="extensionType" required>
                <option value="">Select extension type</option>
                <option>Rear extension</option>
                <option>Side return extension</option>
                <option>Wrap around extension</option>
                <option>Double storey extension</option>
                <option>Other extension</option>
              </select>
              <textarea
                name="message"
                placeholder="Briefly describe your extension project"
                rows={4}
              />
              <button type="submit" className="primary-btn full">
                Get My Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHY EXTENSIONS FAIL */}
      <section className="section">
        <div className="container narrow">
          <h2>Why House Extension Applications Get Refused in London</h2>
          <p>
            Many house extension applications are refused not because the idea
            is wrong, but because the drawings fail to communicate compliance.
            Common refusal reasons include excessive depth, poor daylight impact,
            neighbour overshadowing, scale issues and weak justification.
          </p>
          <p>
            Our drawings are designed with planning officers in mind. We address
            policy requirements, neighbouring properties, massing and layout
            clarity from the outset to significantly improve approval chances.
          </p>
        </div>
      </section>

      {/* TYPES */}
      <section className="section alt">
        <div className="container">
          <h2>Types of House Extensions We Design</h2>

          <h3>Rear Extensions</h3>
          <p>
            Rear extensions are common across London terraced and semi-detached
            houses. Our drawings balance internal space gain with planning
            constraints such as depth limits and overlooking.
          </p>

          <h3>Side Return Extensions</h3>
          <p>
            Side return extensions require careful boundary and daylight
            consideration. We specialise in maximising side return potential
            while remaining policy compliant.
          </p>

          <h3>Wrap Around Extensions</h3>
          <p>
            Wrap around extensions are high-impact projects that need strong
            design justification. We produce coordinated drawings that planning
            officers can clearly assess.
          </p>

          <h3>Double Storey Extensions</h3>
          <p>
            Double storey extensions require sensitive massing and neighbour
            analysis. Our drawings focus on scale, proportion and policy
            alignment.
          </p>
        </div>
      </section>

      {/* PLANNING VS PD */}
      <section className="section">
        <div className="container narrow">
          <h2>Permitted Development vs Planning Permission</h2>
          <p>
            Some house extensions fall under permitted development rights,
            meaning planning permission is not required. Others require full
            planning approval depending on size, location and restrictions.
          </p>
          <p>
            We advise you clearly at the start and prepare drawings suitable for
            either route, ensuring compliance and clarity for local authorities.
          </p>
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="section alt">
        <div className="container narrow">
          <h2>What Is Included in Your Extension Drawing Package</h2>
          <ul>
            <li>Measured survey and existing drawings</li>
            <li>Proposed floor plans and elevations</li>
            <li>Sections and roof plans where required</li>
            <li>Location and block plans</li>
            <li>Planning-ready PDF drawing set</li>
            <li>Revision support prior to submission</li>
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container narrow">
          <h2>Our Extension Drawing Process</h2>
          <ol>
            <li>Initial enquiry and fixed quote</li>
            <li>Measured survey of your property</li>
            <li>Preparation of existing drawings</li>
            <li>Design and layout development</li>
            <li>Client feedback and revisions</li>
            <li>Final planning submission pack</li>
          </ol>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <h2>Get a Fixed Quote for Your House Extension Plans</h2>
          <p>
            Speak to WEDRAWPLANS today and get professional extension planning
            drawings anywhere in London.
          </p>
          <div className="cta-row center">
            <a href={PHONE_LINK} className="primary-btn">
              Call {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_LINK} className="secondary-btn">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
