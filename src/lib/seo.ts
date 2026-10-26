import type { Metadata } from "next";
import { SITE } from "@/data/site";

export const absoluteUrl = (path = "/") => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

type PageMeta = {
  title: string;
  description: string;
  /** Path with leading and trailing slash, e.g. "/works/muiraje/". */
  path: string;
  image?: string;
  noindex?: boolean;
  /** Skip the "| Akimov Web" title suffix. */
  absolute?: boolean;
};

export function pageMetadata({ title, description, path, image = "/og.png", noindex, absolute }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const img = absoluteUrl(image);
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: "Akimov Web",
      title,
      description,
      url,
      images: [{ url: img, width: 1200, height: 630, alt: "Akimov Web: сайты под ключ" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [img] },
  };
}
