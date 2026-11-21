# MANAL ALR-AZANI — Portfolio Website

A responsive, bilingual (English/Arabic) personal portfolio starter built with plain HTML, CSS and JavaScript.

## Files
- `index.html` — page structure and editable text
- `style.css` — visual identity, layout and responsive styling
- `script.js` — language switch, project filters and mobile navigation

## Before publishing (important)
1. Open `index.html` and replace the sample contact email `hello@example.com` with your real professional email.
2. Replace the `href="#"` values for Behance, LinkedIn and Instagram with your profile URLs.
3. The four project tiles are illustrative layout placeholders, not representations of finished client work. Replace each `.project-visual` block in `index.html` with an image of your actual project. Example:
   `<img class="project-image" src="assets/matcha-campaign.jpg" alt="Matcha social media campaign">`
4. Create an `assets` folder and place your project images inside it. Recommended image size: 1400 × 1100 px, JPG or WebP.
5. Review the About section and services so every statement matches your current experience and services.

## Publish free with GitHub Pages
1. Sign in at https://github.com and create a new public repository, for example `manal-portfolio`.
2. Upload `index.html`, `style.css`, `script.js` and your `assets` folder to the repository root.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then Save.
6. Wait for GitHub Pages to publish. Your website address will be shown in the Pages section.

## Customize
- Colours are defined at the top of `style.css` in `:root`.
- Main name and all content are in `index.html`.
- The language switch uses `data-en` and `data-ar` attributes.
- Project filters use `data-category` values: `social`, `branding`, and `poster`.

Google Fonts are loaded online; the layout still works if fonts cannot load, using system fallbacks.
