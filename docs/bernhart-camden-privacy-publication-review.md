# Bernhart Close (Barnet) and Camden Garage Conversion — prepublication PR

**Status: staging / review only — DO NOT MERGE FOR PUBLICATION.** Both source projects were researched; **no privacy-cleared project-specific drawing assets were found in the complete 523-file `main` Git tree** on 16 November 2026. The repository has `pages/areas/camden.tsx` and `public/images/camden-area.jpg` but the latter is NOT Camden project evidence. No Bernhart or Hornby project image directory exists.

## Verified source facts and safe headlines

### Bernhart Close, Edgware, Barnet
- **One combined case-study URL**, not two duplicates:
  `/case-studies/bernhart-close-barnet-garage-conversion-rear-extension`
- Existing garage to habitable room with front window: **Barnet grant 18/0452/HSE**, decision **5 April 2018**.
- Separate single-storey rear extension: **Barnet grant 18/2968/HSE**, 2018.
- The site was recorded within Watling Estate Conservation Area in the 2018 officer report.
- Council decisions and original drawings contain private client names, postal address and house number: **do not upload originals**.
- Proposed public wording: “Bernhart Close, Barnet — Garage Conversion & Rear Extension Approvals”.
- Distinguish full planning permissions from any later Building Regulations approval, occupation or completion. Do not imply the extensions were built.

### Hornby Close, Camden — Garage Conversion
- Proposed canonical slug: `/case-studies/hornby-close-camden-garage-conversion`.
- Five source PDF sheets were previously supplied as `01_18Hornby close.pdf` through `05_18Hornby close.pdf`.
- These are source drawings NOT publish-ready images. Existing source sheets show a precise street address in the sheet body/title block and other project-specific identifiers.
- Subject: existing/proposed ground floor, elevations, sections/specification and supporting drawing views. Show only verified selected project sheets.
- **Planning outcome not yet independently verified.** Do not say “planning approval granted” until the official Camden reference, decision and approved sheet schedule are established.
- Public locality: **Hornby Close, Camden** only; do not include door number, client names or source contact information.

## Release gates: required before integrating either candidate

1. Obtain privacy-cleared web-ready images for each project, or produce irreversible redactions from the originals (not visual overlays alone). Review pixels at full sheet size and thumbnails. Verify image metadata.
2. **Camden:** find its official planning decision before claiming an approval. Never substitute an unrelated Camden garage application as WEDRAWPLANS evidence.
3. **Bernhart:** cross-check separate 2018 records and correct council document-tab links; keep approval descriptions distinct.
4. Add project assets exclusively to respective `public/images/case-studies/<slug>/` directories. No location/site plans or unselected sheets uploaded. Add one faint diagonal grey WEDRAWPLANS watermark.
5. Promote only verified candidates into `data/caseStudies.ts` with correct `relatedArea`, `galleryImages`, `heroImage`, `secondaryImage`, captions, council evidence and safe metadata.
6. Add contextual links from `/areas/barnet` and `/areas/camden`; preserve shared enquiry forms, existing borough page layout and all existing SEO fixes. Do not use same case-study content as if completed in unrelated boroughs.
7. Ensure canonical URLs, case-study hub and sitemap only list **approved-to-publish** projects. Test mobile (320–414px), thumbnails, modal/full-sheet views, CTA and submission.
8. Review Vercel preview and obtain owner sign-off **before** production merge.

## What this PR does
Adds review-only typed candidate data and this editorial/evidence checklist. **Does not** import the candidates into live components, expose any private source files, create new public URLs, add unverified approvals or change existing enquiry/SEO routes. No live publication is authorized by merging this staging code; subsequent media additions and explicit review are required.
