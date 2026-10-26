/**
 * Pre-generates smaller WebP variants of every image in public/img so the
 * custom image loader (src/lib/image-loader.ts) can serve a right-sized file
 * on a fully static export. Originals stay in public/img; outputs go to
 * public/img/_w (git-ignored) and are rebuilt only when the source changes.
 *
 * Every width always gets a file: when the source is not wider than the
 * target, the source itself is copied (never upscaled or re-compressed).
 */
import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = path.resolve(import.meta.dirname, "..", "public", "img");
const OUT = path.join(SRC, "_w");
const WIDTHS = [480, 800, 1200, 1600, 2200];
const QUALITY = 88;

await mkdir(OUT, { recursive: true });

let made = 0;
for (const file of await readdir(SRC)) {
  if (!/\.(webp|jpe?g|png)$/i.test(file)) continue;
  const { name, ext } = path.parse(file);
  const input = path.join(SRC, file);
  const inputStat = await stat(input);
  const meta = await sharp(input).metadata();

  for (const width of WIDTHS) {
    const output = path.join(OUT, `${name}-${width}.webp`);
    const fresh = await stat(output).then((s) => s.mtimeMs >= inputStat.mtimeMs, () => false);
    if (fresh) continue;
    if (!meta.width || width >= meta.width) {
      if (ext.toLowerCase() === ".webp") await copyFile(input, output);
      else await sharp(input).webp({ quality: QUALITY }).toFile(output);
    } else {
      await sharp(input).resize({ width }).webp({ quality: QUALITY, effort: 5 }).toFile(output);
    }
    made++;
  }
}
if (made) console.log(`build-images: wrote ${made} variants`);
