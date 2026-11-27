JointNexa — jointnexa-us.vercel.app
Images this folder must contain before the site goes live
=========================================================

The HTML references exactly twelve files by name. Drop your own files in
with these names and nothing else needs editing.

  jointnexa-hero.webp                  800 x 800   hero, inside the navy formula card
  jointnexa-2-bottles-guarantee.webp   600 x 600   price card, 2 bottles
  jointnexa-3-bottles-guarantee.webp   600 x 600   price card, 3 bottles
  jointnexa-6-bottles-guarantee.webp   600 x 600   price card, 6 bottles
  jointnexa-guarantee.webp             800 x 800   guarantee seal, #guarantee
  jointnexa-review-1.webp              600 x 800   customer screenshot 1
  jointnexa-review-2.webp              600 x 800   customer screenshot 2
  jointnexa-review-3.webp              600 x 800   customer screenshot 3
  jointnexa-bonus-1.webp               600 x 800   The Ageless Brain & Body Protocol
  jointnexa-bonus-2.webp               600 x 800   Forgotten Tonics From Your Kitchen
  jointnexa-bonus-3.webp               600 x 800   Forgotten Remedies From Your Backyard
  favicon.png                          512 x 512   tab icon and manifest icon

A note on the bonus images
--------------------------
Your brief listed jointnexa-bonus-1.webp three times. The official site
shows three different guides, so the HTML references bonus-1, bonus-2 and
bonus-3, one per guide, in the order above. If you only have one bonus
image, copy it to all three names rather than editing the HTML, or the
second and third cards will show a broken image.

Why the sizes are written into the HTML
---------------------------------------
Every <img> carries width and height attributes. The browser uses them to
reserve the right amount of space before the file has downloaded, which
is what keeps Cumulative Layout Shift at zero. The CSS then sizes each
image with

    width: auto;  max-width: 100%;  height: auto;  max-height: <cap>;

so the picture scales down by whichever edge runs out of room first. It
is never stretched and never letterboxed with grey bars.

That means your files do NOT have to match the pixel sizes above exactly.
What matters is the SHAPE. A hero at 1200 x 1200 looks identical to one
at 800 x 800, because the ratio is the same. If your aspect ratio differs
noticeably from the list above, update the width and height attributes on
that one <img> tag in index.html to your file's real pixel dimensions.

Keeping the page fast
---------------------
- Export as WebP at quality 78-82. Above that the file grows with no
  visible gain.
- Keep the hero under about 90 KB. It is the Largest Contentful Paint
  element on mobile and it is preloaded, so its weight sets the score.
- Keep the other ten under about 60 KB each. They all load lazily, so
  they cost nothing until the reader scrolls to them.
- Do not add images that are not on the list above. Every file here is
  referenced; an unreferenced extra is dead weight in the deployment.

favicon.png
-----------
Square, 512 x 512, transparent background if the mark allows it. It is
used three times: the browser tab, the Apple touch icon, and the web app
manifest. One file covers all three.
