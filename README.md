# ByteSpace landing page

Next.js 15 (App Router, JavaScript) + Tailwind CSS 3.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Replacing the placeholders with the Figma assets

1. **Images.** Export the real images from Figma into `public/images/`
   (hero student, growth student, creator woman, 6 course thumbnails, avatars,
   3D shapes in `public/images/shapes/`). The files there now are SVG placeholders.
   If your exports are PNG/JPG/WebP, update the paths in `src/lib/assets.js`.
2. **Colors.** Edit the `brand`, `lime`, `ink`, `body`, `line`, `surface` tokens in `tailwind.config.js`.
   The hero/CTA grid and section gradients in `src/app/globals.css` reuse the same blue and lime values.
3. **Font.** Currently Plus Jakarta Sans (`@fontsource-variable/plus-jakarta-sans`, imported in `src/app/layout.js`).
   To change it, install the new fontsource package, import it in `layout.js`,
   and update `fontFamily.sans` in `tailwind.config.js`.
4. **Copy.** All section content lives in `src/lib/data.js`.

## Structure

- `src/app/` layout, page, global CSS
- `src/components/` one component per section (Hero, CourseCatalog, GrowthSection, CreatorCta, Testimonials, Footer, ...)
- `src/lib/assets.js` every image path
- `src/lib/data.js` all text content
