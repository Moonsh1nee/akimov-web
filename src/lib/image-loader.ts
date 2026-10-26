// Static export has no image optimizer, so variants are pre-built by scripts/build-images.mjs.
// Keep WIDTHS in sync with that script.
const WIDTHS = [480, 800, 1200, 1600, 2200];

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const match = /^\/img\/([^/]+)\.(?:webp|jpe?g|png)$/i.exec(src);
  if (!match) return src;
  const target = WIDTHS.find((w) => w >= width);
  // Wider than the largest variant: serve the original.
  return target ? `/img/_w/${match[1]}-${target}.webp` : src;
}
