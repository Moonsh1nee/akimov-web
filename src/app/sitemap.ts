import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

// Legal pages are excluded until their real text is added.
const STATIC_PATHS = ["/", "/works/", "/demo/", "/services/", "/about/", "/reviews/", "/contacts/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...STATIC_PATHS, ...PROJECTS.map((p) => `/works/${p.slug}/`)];
  const lastModified = new Date();
  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    priority: path === "/" ? 1 : path.startsWith("/works/") && path !== "/works/" ? 0.6 : 0.8,
  }));
}
