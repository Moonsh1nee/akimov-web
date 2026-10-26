import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Gallery } from "@/components/Gallery";
import { JsonLd } from "@/components/JsonLd";
import { Chips } from "@/components/ui";
import { PROJECTS, getProject } from "@/data/projects";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const cover = p.shots.find((s) => s.src)?.src;
  return pageMetadata({
    title: `${p.name}: ${p.kind.split(" · ")[0].toLowerCase()}`,
    description: p.lead,
    path: `/works/${p.slug}/`,
    image: cover && !cover.endsWith(".webp") ? cover : undefined,
  });
}

export default async function CasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const others = PROJECTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <div className="g">
      <div className="wrap page">
        <p className="crumbs">
          <Link href="/works/">← Все работы</Link>
        </p>
        <div className="case-head">
          <span className="k">{p.kind}</span>
          <h1>{p.name}</h1>
          <p>{p.lead}</p>
        </div>

        <Gallery name={p.name} address={p.address} shots={p.shots} priority />

        {p.note ? (
          <p className="callout" style={{ marginTop: 24 }}>
            {p.note}
          </p>
        ) : null}

        <div className="cfacts">
          {p.facts.map(([label, value]) => (
            <div key={label}>
              <span className="mono">{label}</span>
              <b>{value}</b>
            </div>
          ))}
        </div>

        <div className="story">
          <div>
            <h2>Задача</h2>
            {p.task.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div>
            <h2>Что сделано</h2>
            <ul>
              {p.done.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <Chips items={p.stack} />
          </div>
          <div>
            <h2>Результат</h2>
            {p.results.map((t) => (
              <p key={t}>{t}</p>
            ))}
            {p.score ? (
              <p className="tech" style={{ marginTop: 16 }}>
                <span>Для технарей, проверка Lighthouse на телефоне:</span>
                <span>
                  скорость <b>94–98</b>
                </span>
                <span>
                  SEO <b>100</b>
                </span>
                <span>
                  доступность <b>100</b>
                </span>
              </p>
            ) : null}
          </div>
        </div>

        <div className="cta" style={{ marginTop: 36 }}>
          {p.link ? (
            <a className="btn" href={p.link}>
              Открыть демо ↗
            </a>
          ) : null}
          <Link className={`btn${p.link ? " l" : ""}`} href="/contacts/">
            Хочу такой же сайт
          </Link>
        </div>

        <div className="more-cases">
          {others.map((o) => (
            <Link className="mc" href={`/works/${o.slug}/`} key={o.slug}>
              <b>{o.name}</b>
              <span>{o.kind}</span>
            </Link>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: p.name,
          description: p.lead,
          url: absoluteUrl(`/works/${p.slug}/`),
          author: { "@type": "Person", name: "Владислав Акимов" },
        }}
      />
    </div>
  );
}
