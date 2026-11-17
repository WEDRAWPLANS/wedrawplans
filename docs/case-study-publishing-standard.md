# WEDRAWPLANS case-study publication standard (review draft)

**Applies to all future case studies and revisions. Do not replace existing site chrome with independently designed static HTML.**

## Non-negotiable website shell
- Reuse the existing Next.js case-study route `pages/case-studies/[slug].tsx` and shared `CaseStudyHeader`, `CaseStudyFooter`, `CaseStudyBottom`, `CaseStudyGalleryQuote` and `ProjectQuickQuotePanel` components. These are the approved Warbeck/Cranbourne site-wide look and behaviour.
- Maintain the original WEDRAWPLANS logo, font/colour language, navigation, phone, WhatsApp, existing reviews, responsive header/footer, sticky enquiry form and mobile CTA. No alternate logos, invented brand variants or isolated demo website shells.
- Add project-specific content inside the existing components, not by copying/pasting a duplicate page-wide header or footer.

## Project evidence and SEO
- A single property with several applications should have **one unified case study** with a distinct evidence block and exact planning decision for each consent.
- Lead with the homeowner question, conservation/heritage context where applicable, what the drawings proposed, the actual planning challenges, the officer's conclusion and independently checkable results. Use past dates to demonstrate historical work without treating outdated planning policies as current advice.
- Preserve the **exact supplied council Documents-tab URLs**, rather than generic search or homepage URLs. Confirm each URL belongs to the correct application; never infer or fabricate identifiers.
- Write substantive, naturally keyword-relevant content, accessible headings, local service and related-case-study internal links, concise metadata and truthful Article/Breadcrumb structured data. Do not stuff keywords or promise rankings.
- Correctly distinguish: delegated **recommendation** vs decision notice; planning permission vs lawful-development certificate vs Building Regulations approval vs construction/completion.

## Media privacy and release
- Avoid house numbers, applicant and client names, telephone and email details in visible text, metadata, images and thumbnails. Privately hold originals; irreversibly redact personal identifiers from selected full drawing sheets while retaining overall drawing proportions and professional title-block presentation. Inspect full image pixels and metadata before uploading any asset.
- Use compact, clickable, original full-sheet galleries with drawing-number labels and an unobtrusive WEDRAWPLANS watermark. Never substitute generic unrelated photographs or imply unbuilt proposals are completed works.
- Place changes on a preview branch, run build and mobile checks, review the actual Vercel case-study URL and obtain the owner's explicit approval **before merging or publishing**. Keep a draft PR open until ready.
- Include the same project as a genuine local internal link from its borough page, homepage/case-study hub where relevant, and related service pages **only after publication approval**. Preserve existing canonical URLs and SEO improvements for all other pages.

## Bernhart & Camden, November 2026
- Bernhart Close: one combined case study, two 2018 Barnet applications 18/0452/HSE and 18/2968/HSE, Watling Estate Conservation Area, with two exact council documents links. The supplied April 2018 Barnet delegated report is evidence about the **garage conversion only**.
- Hornby Close, Camden: council application 2026/1634/P, exact direct Camden documents link; do not claim permission unless the decision is independently checked. Five original drawing sheets require privacy-cleared artwork before gallery inclusion.
