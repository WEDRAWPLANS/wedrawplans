# WEDRAWPLANS — 24 case-study original-drawing galleries

**Date:** 2 November 2026. **Release:** preview-only; do not merge to main or publish without Abbey's explicit sign-off.

## Publication and privacy standard

- All 24 project pages use a **consistent sideways carousel** on the left and **WEDRAWPLANS' existing two-step quote form** on the right, responsive with the form below on mobile. Use the existing `ProjectMediaSlider`, `CaseStudyGalleryQuote`, and `ProjectQuickQuotePanel` components on this branch.
- Show user-supplied actual project drawings: first **existing / proposed 3D view**, then **proposed plans**, **proposed elevations**, **sections**, and where useful **existing drawings**. Swipe or click arrows and dots; lightbox enlarges the drawing. Do not autoplay rapidly.
- All photos/drawings must have meaningful accessible alt text and real document-specific captions. Avoid calling a supplied PDF an authority-stamped approved revision unless it has been checked against the decision.
- **KEEP THE COMPLETE ORIGINAL WEDRAWPLANS DRAWING SHEET AND COMPANY TEMPLATE**, including logo, title block, drawing numbers, revisions, scales, WEDRAWPLANS contact information and planning drawings. **Redact only the private client name, property door number, and other private client-identifying labels**, while checking plans for relevant neighbouring door numbers. Original source PDFs remain unchanged; publish only anonymised derivative sheets.
- No invented CGIs, renders, approved status, design revisions or contractor-completion photos. Show full-size sharp image when clicking enlarge. Balance performance (responsive optimized images) with enough detail to understand drawings.
- Upload the updated full-template anonymised WebP sheets from the prepared review package to `public/images/case-studies/<slug>/<filename>.webp` first. Do **not** put image refs into the live gallery data before the assets exist in that preview branch; image URLs would be broken.
- Each project ideally carries 4–7 curated drawings or visual comparisons; up to 10 if uniquely useful. Prefer strong legible views to all pages of a long PDF. Include planning approval reference on the case-study text itself, not as false “approved” graphic watermark.
- User will supply additional drawings throughout the day; update gallery per actual file availability, preview build, copyright/privacy checks and later owner publication approval.

## Received and prepared (first two) — ORIGINAL FULL SHEETS

**01 Sistova Road, Wandsworth — six privacy-redacted, full-template slides prepared**  
Source: `sistova all combined documents(1).pdf` (12 pages). Selected drawing pages **1, 5, 6, 7, 2 and 3**, in that order, retaining the original WEDRAWPLANS logo, title block, standard notes, drawing numbers and views. The door number `34A` was removed from the title-block project address. Fire-safety statement pages were excluded from the visual gallery. Case 2026/1748.

**04 Cromwell Road, Hounslow — five privacy-redacted, full-template slides prepared**  
Source: `90_cromwell_road_planning_drawings only.pdf` (6 pages). Selected drawing pages **3, 5, 2, 6 and 1**, in that order, retaining complete WEDRAWPLANS sheet templates. The client's personal name and house number were removed from title blocks, and adjacent `No.88` labels from the plan plate were removed. The public site plan with numbered neighbouring properties was excluded. Case P/2026/2306.

Assets: `/mnt/data/WEDRAWPLANS_Sistova_Cromwell_Full_Template_Galleries_REVIEW.zip` and `/mnt/data/WEDRAWPLANS_Sistova_Cromwell_Interactive_Review.html` in the conversation container. The HTML is fully self-contained and displays the **11 genuine anonymised drawings** for the owner's review, with navigation, mobile swiping, enlargement and a visual quotation panel linked to the existing website form. Matching anonymised presentation PDFs are included. The original source files were never overwritten.

**Status:** Review files created and redaction text-checked locally. The GitHub/Vercel preview branch still needs the **binary WebP drawing files** imported before the actual online carousel can show all 11; the available GitHub connector's text-file endpoints do not accept local binary paths. Do not claim the gallery images are already hosted.

## Full project queue (existing published order)

| # | Public project title | Original drawing gallery |
|---:|---|---|
| 01 | Sistova Road, Wandsworth | Six FULL-TEMPLATE anonymised slides prepared; binary upload required |
| 02 | Allum Lane, Elstree | Awaiting drawings, renders, optional video |
| 03 | Sunbury Avenue, Mill Hill | Awaiting relevant approved drawings and construction images |
| 04 | Cromwell Road, Hounslow | Five FULL-TEMPLATE anonymised slides prepared; binary upload required |
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

- Import actual anonymised WebP images into the GitHub preview branch via an authorised binary-asset upload path. Existing GitHub text-file tool cannot upload local binary assets directly; do not claim complete deployment without images. The prepared ZIP is the source of truth in the current chat.
- Wire source-specific caption metadata into `data/caseStudies.ts` `galleryImages` for each case with committed file paths, preserving selected order.
- Build preview, visually confirm 100% slides load, mobile layout, dots, lightbox, and quote submit path (do not submit fictitious live lead).
- Review with Abbey before production release.
