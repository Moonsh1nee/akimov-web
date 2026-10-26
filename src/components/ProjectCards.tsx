import Image from "next/image";
import Link from "next/link";
import { type Project, PROJECTS, getProjectOrThrow } from "@/data/projects";
import { Gallery } from "./Gallery";
import { Chips } from "./ui";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className="case">
      <div className="plate">
        <Gallery name={project.name} address={project.address} shots={project.shots} compact={compact} />
      </div>
      <div className="meta">
        <div>
          <span className="k">{project.kind}</span>
          <h3>{project.name}</h3>
          <Chips items={project.stack} />
        </div>
        <p className="res">
          {project.short}
          <span>{project.more}</span>
        </p>
        <Link className="btn l s" href={`/works/${project.slug}/`}>
          Подробнее →
        </Link>
      </div>
      {project.note ? <p className="callout">{project.note}</p> : null}
    </article>
  );
}

/** Home page layout: the client order first, then the demo and own projects. */
export function HomeProjects() {
  const p = (slug: string) => getProjectOrThrow(slug);
  return (
    <>
      <ProjectCard project={p("muiraje")} />
      <div className="sub">
        <span className="mono">Демо и собственные проекты</span>
        <h3>Не клиентские заказы, а мои эксперименты</h3>
        <p>Здесь видно, как я решаю задачи, когда никто не ограничивает.</p>
      </div>
      <ProjectCard project={p("ostov-architects")} />
      <div className="pair">
        <ProjectCard project={p("getgrip")} compact />
        <ProjectCard project={p("wisely")} compact />
      </div>
      <div className="pair">
        <ProjectCard project={p("fuel")} compact />
        <ProjectCard project={p("cadence")} compact />
      </div>
    </>
  );
}

export function WorkList() {
  return (
    <div className="cards">
      {PROJECTS.map((p) => {
        const cover = p.shots.find((s) => s.src)?.src;
        return (
          <Link className="work" href={`/works/${p.slug}/`} key={p.slug}>
            <div className="frame">
              <div className="b">
                <i />
                <i />
                <i />
                <span>{p.address}</span>
              </div>
              <div className="shot">
                {cover ? <Image src={cover} alt={`${p.name}: главный экран`} width={1440} height={900} sizes="(min-width: 960px) 540px, 100vw" loading="lazy" /> : null}
              </div>
            </div>
            <div className="m">
              <span className="k">{p.kind}</span>
              <h3>{p.name}</h3>
              <p>{p.short}</p>
              <span className="go">Подробнее →</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
