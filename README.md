# Vandergriff Group Architects — Blueprint WebStudio Concept

Independent, non-official redesign concept for http://www.vandergriff-group.com/Home.aspx (Vandergriff Group Architects, PC, 312 North Big Spring Street, Suite 100, Midland, TX 79701).
Preview: https://vga.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom one-page build: content in `src/App.jsx`, styles in `src/styles.css`, concept widget in `src/concept.jsx`.

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deployment
Vercel project `vandergriff-group` (framework Vite, team mrwerner-s-projects); pushes to `main` deploy automatically. Domain `vga.blueprintwebstudio.com` is a CNAME at Porkbun (use the target Vercel shows).
Optional env vars: `VITE_CONCEPT_END_DATE` (defaults to 2026-12-12 23:59 Central), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the project inquiry form (`api/contact.js`; demo mode without them).
The interest form posts to the same-origin proxy `api/demo-interest.js` (prospect "Vandergriff Group Architects", source `vga.blueprintwebstudio.com`).

## Design
- Logo: their own "Vandergriff Group / Architects • PC" logo with the interlocking gray rings (`/img/logo2.png`, 432 × 98, transparent PNG) on the light header, on a vellum plate in the dark footer. Favicon is the two rings.
- Palette from the logo: the ring gray, the black wordmark (graphite #2A2D2C for dark sections) and the logo's mint (#60C199, deepened to #2D8862 for text) on a drafting-vellum off-white.
- Fonts: Belleza (headings; a humanist sans close to the logo's Optima-style wordmark), Mulish (body), DM Mono (labels, sheet numbers).
- Motif: a construction drawing set. A drafting grid behind the hero, dimension lines around the hero photo ("28′-0″ steel horseshoe", from their project text), a section-cut marker, a title block under the photo, and every project shown as a drawing sheet with a title block and sheet number (A-101…A-119).
- Signature section: the portfolio, all 19 projects with photos from their site, filterable by their seven sectors. Each sector shows its client list from the old category pages; each project opens a side panel with client, location, size, completion date and description.
- Section order: header with phone → hero (Horseshoe Arena photo in a drawing frame) → stats → portfolio → scope of services → about + culture values → principals and staff directory → project inquiry form and contact → footer.

## What changed from the current site
- The home page is a Flash banner (`/flash/banner.swf`), so modern browsers show "Couldn't load plugin" in the main hero area. The concept uses the same photos as real images.
- Text sits in small fixed-height boxes with hover-to-scroll "Scroll Up / Scroll Down" arrows that don't work on touch screens. The concept shows the text in full.
- Project photos are switched with ASP.NET postbacks (`__doPostBack`) from 34px thumbnails, which reload the page for every image.
- jQuery 1.4 loads over plain `http://`. The layout is fixed-width (939px) and doesn't fit a phone.
- The newest news item is from February 2015, and the homepage still says the Pavilion "open[s] on February 7, 2015". The concept drops the dated news list.
- The "location" page is a copied Wikipedia article about Midland (with 2009 and 2013 population figures). The concept replaces it with the address, a map link and the phone.
- Conflicting firm age: "Founded in 1979", "over a 30 year history" and "32-year history" on different pages. The concept uses "Since 1979" only.
- Typos fixed: "Communtiy", "Healtcare", "Exxon Mobile", "Randall Thomspon", "a fully integrate team", "seculded", "dinning", "Multip Purpose", "an eExhibits".

## Photos
All photos are the firm's own files from vandergriff-group.com: the hero (`images/images/398___Selected.jpg`, the Horseshoe Arena), the office entrance (`Images/ProjectBackgroundImages/119___selected.jpg`), the sketch behind the People section (`.../117___selected.jpg`) and the 19 project images (`Images/ProjectImages/<id>___selected.jpg`, 785 × 395). Midland ISD (id 141) and Midland Fair Havens (id 146) have no image on the site, so they are not in the grid (their facts are folded into the Midland ISD card and left out respectively). Larger, newer photos would help, since the originals are 785px wide and several are renderings.
No awards, badges or reviews appear on the current site, so none are shown.

## Owner should confirm
- William Parsons' title: the contact page says "Principal Architect" but his bio says "Senior Project Architect" (and Mark Pelletier's bio also says "Senior Project Architect"). The concept uses Principal Architect for both, as on the contact page.
- The staff directory (Brian Polaski, Justin Lyon, Tony Gore, Victor Radej, Randall Thompson, Jeremy Bentz) is likely out of date; confirm who is still with the firm and their licenses. "Randall Thomspon" was corrected to Thompson to match the email rthompson@.
- Whether to name Gary L. Vandergriff (mentioned in the Horseshoe and Downtown project text) as founder, and any history to add.
- Stats: "50+ medical facility projects" and "Midland ISD repeat client since 1983" come from the old category pages; confirm they are still accurate or have grown.
- The corporate client list (ExxonMobil, AT&T, Ashland Chemical, Warren Equipment, Schlumberger, Weaver, First Capital Bank, University Lands) and the government agency list; whether all may be named.
- Project statuses: Downtown Redevelopment is marked "in progress" and Hero Plaza "Fall 2015" from the old site. Newer projects (the firm is still filing Texas TDLR projects in 2025) should be added.
- The hero headline and the short project summaries are rewritten from the site text; check the wording.
- Office hours (none on the current site, so none are shown). No reviews are shown (none on the current site).
