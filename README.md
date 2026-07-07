# BCCCE 2027

The website for the **5th International Balkans Conference on Challenges of Civil Engineering (BCCCE 2027)**, organised by the Department of Civil Engineering at EPOKA University. The conference takes place in Tirana, Albania, on **13–15 May 2027**.

This repository is a static, no-build HTML/CSS/JS site.

## Project structure

Each top-level topic lives in its own folder with a consistent pair of files:

```
<page>/
├── index.html     # Full standalone page (header, hero, footer, nav)
└── section.html   # Same content only, isolated for embedding elsewhere
```

| Folder | Page |
|---|---|
| `/` | Home |
| `topics/` | Conference topics / tracks |
| `partners/` | Hosts & partners |
| `speakers/` | Keynote speakers |
| `committee/` | Organising & scientific committee |
| `venue/` | Conference venue (index only, no `section.html`) |
| `call/` | Call for papers / author guidelines |
| `register/` | Registration & fees |
| `sponsors/` | Sponsorship packages |
| `contact/` | Contact information |
| `downloads/` | Downloadable files (paper templates) |

### The `index.html` / `section.html` split

- **`index.html`** is the real page as visitors see it on this site: full `<head>`, shared header/footer injected by `scripts.js`, site-wide `styles.css`, and site navigation.
- **`section.html`** is a self-contained "isolated" copy of the same content (own `<style>` block scoped under `.isolated-content`, no dependency on `scripts.js`/`styles.css`) meant to be pasted into an external CMS/page builder without inheriting the host page's styles.

Because the content is duplicated, **when you edit a page's content, update both files** to keep them in sync.

## Shared assets

- **`styles.css`** — site-wide styles used by every `index.html`.
- **`scripts.js`** — injects the shared header, sponsors carousel, and footer into any page with `#site-header` / `#site-sponsors` / `#site-footer` placeholders, resolves asset paths via `<meta name="base-path">`, and implements the mobile menu, scroll navbar, carousels, language switcher, global search overlay, and an "Add to Calendar" (`.ics`) generator for timeline dates.
- **`signature.html`** — a standalone Gmail signature template (open in a browser, copy/paste into Gmail settings — not part of the live site).

## Committee data

`committee/index.html` and `committee/section.html` fetch the International Scientific Committee list at runtime from a Google Apps Script endpoint (`BRAIN_URL`), cache it in `localStorage`, and render it client-side. The Local Organising Committee is hard-coded in the HTML.

## Downloads

`downloads/` holds the author paper templates referenced from the Call for Papers page:
- `BCCCE2027_Paper_Template.docx` — MS Word template
- `BCCCE2027_Paper_Template.tex` — self-contained LaTeX template (compiles with pdfLaTeX, no external images required)

## License

MIT — see [LICENSE](LICENSE).
