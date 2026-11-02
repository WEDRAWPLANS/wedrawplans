# WEDRAWPLANS — 24 case-study original-drawing galleries

**Date:** 2 November 2026. **Release:** preview-only; do not merge to main or publish without Abbey's explicit sign-off.

## Publication and privacy standard

- All 24 project pages use a **consistent sideways carousel** on the left and **WEDRAWPLANS' existing two-step quote form** on the right, responsive with the form below on mobile. Use the existing `ProjectMediaSlider`, `CaseStudyGalleryQuote`, and `ProjectQuickQuotePanel` components on this branch.
- Show user-supplied actual project drawings: first **existing / proposed 3D view**, then **proposed plans**, **proposed elevations**, **sections**, and where useful **existing drawings**. Swipe or click arrows and dots; lightbox enlarges the drawing. Do not autoplay rapidly.
- All photos/drawings must have meaningful accessible alt text and real document-specific captions. Avoid calling a supplied PDF an authority-stamped approved revision unless it has been checked against the decision.
- Preserve the drawing itself, but **crop public extracts to remove the client name, precise house door number, title block contact details and other privacy-sensitive data**. Do not publish complete PDF source pages or unredacted documents without separate review.
- No invented CGIs, renders, approved status, design revisions or contractor-completion photos. Show full-size sharp image when clicking enlarge. Balance performance (responsive optimized images) with enough detail to understand drawings.
- Upload prepared JPEGs from the locally prepared image package to `public/images/case-studies/<slug>/<filename>.jpg` first. Do **not** put image refs into the live gallery data before the assets exist in that preview branch; image URLs would be broken.
- Each project ideally carries 4–7 curated drawings or visual comparisons; up to 10 if uniquely useful. Prefer strong legible views to all pages of a long PDF. Include planning approval reference on the case-study text itself, not as false “approved” graphic watermark.
- User will supply additional drawings throughout the day; update gallery per actual file availability, preview build, copyright/privacy checks and later owner publication approval.

## Received and prepared (first two)

**01 Sistova Road, Wandsworth — ready for upload and website wiring**  
Supplied source: `sistova all combined documents(1).pdf` (12 pages, drawing plates 1–8; fire safety statement 9–12 excluded). Six selected cropped JPG slides from drawing pages 1, 5, 6, 7, 2 and 3: existing/proposed design view; proposed plans; proposed elevations; proposed section; existing plans; existing elevations. Council case 2026/1748. Privacy-sensitive title blocks cropped. Files are in the separately prepared gallery-asset bundle.

**04 Cromwell Road, Hounslow — ready for upload and website wiring**  
Supplied source: `90_cromwell_road_planning_drawings only.pdf` (6 drawing pages). Five selected cropped JPG slides from source pages 3, 5, 2, 6, 1: 3D existing/proposed; existing/proposed plans; proposed elevations; existing/proposed sections; existing elevations. The site-plan sheet with nearby door numbers was excluded. Council case P/2026/2306. Client-identifying title blocks cropped. Files are in the prepared gallery-asset bundle.

Assets were rendered and inspected locally on 2 Nov 2026; the complete 11-image gallery working demo is packaged as `WEDRAWPLANS_Sistova_Cromwell_Sliding_Galleries_PREVIEW.zip` in the chat's file deliverable. **The images have NOT yet been transferred to the GitHub repository or Vercel CDN. The web galleries must not falsely claim to contain them until upload.** The demo's quote form is visual-only; actual site form uses connected lead endpoint.

## Full project queue (existing published order)

| # | Public project title | Original drawing gallery |
|---:|---|---|
| 01 | Sistova Road, Wandsworth | Six selected slides prepared; transfer to preview required |
| 02 | Allum Lane, Elstree | Awaiting drawings, renders, optional video |
| 03 | Sunbury Avenue, Mill Hill | Awaiting relevant approved drawings and construction images |
| 04 | Cromwell Road, Hounslow | Five selected slides prepared; transfer to preview required |
| 05 | The Reddings, Mill Hill | Awaiting drawings; existing project video reference retained |
| 06 | The Hyde, Colindale | Existing selected 3D visuals; further original drawings welcome |
| 07 | Woolwich Road, Greenwich | Awaiting drawings |
| 08 | Brockley Road, Lewisham | Awaiting drawings |
| 09 | Mile End Road, Tower Hamlets | Awaiting drawings |
| 10 | Burnt Oak Broadway, Harrow | Awaiting drawings |
| 11 | Tithe Walk, Mill Hill | Awaiting drawings |
| 12 | Northolm, Edgware | Awaiting drawings |
| 13 | Deans Way, Edgware | Awaiting drawings |
| 14 | Reddings Close — Loft, Mill Hill | Awaiting drawings |
| 15 | Reddings Close — Extension, Mill Hill | Awaiting drawings |
| 16 | Alnwick Road, Eltham | Awaiting drawings |
| 17 | Electric Avenue, Brixton | Awaiting drawings |
| 18 | Station Road, Hendon | Awaiting drawings |
| 19 | Sefton Avenue, Mill Hill | Awaiting drawings |
| 20 | Hall Lane, Chingford | Awaiting drawings |
| 21 | Leicester Road, Barnet | Awaiting drawings |
| 22 | Cranbourne Drive, Hoddesdon | Awaiting drawings |
| 23 | Dryfield Road, Edgware | Awaiting drawings |
| 24 | Warbeck Road, Shepherd’s Bush | Earlier drawing PDF exists in user upload context; to be audited and prepared in sequence |

## Next

- Publish original JPGs to the GitHub preview branch via an authorised binary-asset upload path. Existing GitHub text-file tool cannot upload local binary assets directly; do not claim complete deployment without images. The prepared ZIP is the source of truth in the current chat.
- Wire source-specific caption metadata into `data/caseStudies.ts` `galleryImages` for each case with committed file paths, preserving selected order.
- Build preview, visually confirm 100% slides load, mobile layout, dots, lightbox, and quote submit path (do not submit fictitious live lead).
- Review with Abbey before production release.
