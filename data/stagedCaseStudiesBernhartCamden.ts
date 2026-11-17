/**
 * Publication staging ONLY. Deliberately not imported by data/caseStudies.ts,
 * pages/areas/barnet.tsx, pages/areas/camden.tsx or sitemap generation.
 *
 * Never promote a candidate until its own redacted and inspected drawing assets,
 * decision evidence, and owner approval are recorded. Do not reuse another
 * project's drawings or publish private address/client details.
 */
export type StagedCaseStudy = {
  slug: string;
  locality: string;
  boroughPage: string;
  provisionalTitle: string;
  summary: string;
  planning: { reference: string; description: string; status: "verified_granted" | "requires_verification" }[];
  drawingCountRequired: number;
  originalSource: string;
  conditionsBeforePublication: string[];
  readyToPublish: false;
};

export const stagedCaseStudies: readonly StagedCaseStudy[] = [
  {
    slug: "bernhart-close-barnet-garage-conversion-rear-extension",
    locality: "Bernhart Close, Edgware, Barnet",
    boroughPage: "/areas/barnet",
    provisionalTitle: "Bernhart Close, Barnet — Garage Conversion and Rear Extension Planning Approvals",
    summary:
      "Two separate 2018 Barnet householder decisions: conversion of an existing garage to habitable accommodation with a replacement front window, and a separately permitted single-storey rear extension. The council's historic decisions applied to the specific house and are not Building Regulations approvals.",
    planning: [
      { reference: "18/0452/HSE", description: "Garage conversion and front window", status: "verified_granted" },
      { reference: "18/2968/HSE", description: "Single-storey rear extension", status: "verified_granted" },
    ],
    drawingCountRequired: 0, // Final selection requires privacy clearance, not a manufactured sheet count.
    originalSource: "Prior owner-supplied Barnet decision PDFs (NOT cleared for public upload)",
    conditionsBeforePublication: [
      "Prepare selected project drawing sheets with all full addresses, house numbers, applicant/client details and contact information irreversibly removed.",
      "Keep source decision-notice PDFs OFF public/, including their unredacted metadata and thumbnails.",
      "Inspect every full-size sheet and generated thumbnail before committing binaries.",
      "Add one faint grey diagonal WEDRAWPLANS watermark per selected sheet.",
      "Verify both Barnet council document-tab URLs before adding links.",
      "Place one canonical case study at /case-studies/ and link it from /areas/barnet only after media and text pass review.",
    ],
    readyToPublish: false,
  },
  {
    slug: "hornby-close-camden-garage-conversion",
    locality: "Hornby Close, Camden",
    boroughPage: "/areas/camden",
    provisionalTitle: "Camden Garage Conversion — Existing and Proposed Architectural Drawings",
    summary:
      "Existing and proposed garage conversion plans, front elevation changes and construction-related drawing notes for a Camden home. Council approval must not be claimed until the exact planning application decision and reference are verified.",
    planning: [
      { reference: "PENDING", description: "Camden planning decision and application reference not yet verified", status: "requires_verification" },
    ],
    drawingCountRequired: 5,
    originalSource: "Owner-supplied Hornby Close PDFs 01–05 (NOT cleared for public upload)",
    conditionsBeforePublication: [
      "Locate or regenerate all five selected web sheets and remove the precise property address, title-block client details and any other personal identifiers from image pixels.",
      "Check each sheet's drawing label, proposed/existing status and project-specific context.",
      "Do not claim Camden planning permission granted on the strength of drawings marked Planning Application alone.",
      "Confirm the Camden planning reference, council decision and permitted drawing schedule.",
      "Use five privacy-cleared selected architectural sheets, discreet grey diagonal WEDRAWPLANS watermarks and small clickable thumbnails.",
      "Create one canonical /case-studies/ page and a project-specific link on /areas/camden only when verified.",
    ],
    readyToPublish: false,
  },
];
