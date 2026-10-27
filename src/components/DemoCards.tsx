import Image from "next/image";
import Link from "next/link";
import { type Demo, DEMOS } from "@/data/demos";
import { formatPrice, PLANS } from "@/data/pricing";

const planFor = (d: Demo) => {
  const plan = PLANS.find((p) => p.id === d.planId);
  if (!plan) throw new Error(`No pricing plan "${d.planId}" for demo ${d.slug}`);
  return plan;
};

export function DemoCard({ demo }: { demo: Demo }) {
  const plan = planFor(demo);
  return (
    <article className="dcard">
      <div className="frame">
        <div className="b">
          <i />
          <i />
          <i />
          <span>{new URL(demo.url).pathname.replace(/\//g, "")}</span>
        </div>
        <div className="shot">
          <Image
            src={demo.image}
            alt={demo.alt}
            width={1280}
            height={800}
            sizes="(min-width: 1040px) 520px, 100vw"
            loading="lazy"
          />
        </div>
      </div>
      <div className="dbody">
        <span className="k">{demo.type} · демо</span>
        <h3>{demo.name}</h3>
        <p className="dfor">{demo.forWhom}</p>
        <ul className="dlist">
          {demo.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <p className="dprice">
          Такой сайт: от <b>{formatPrice(plan.price)}</b>
          <span> · пакет «{plan.name}»</span>
        </p>
        <div className="dcta">
          <a className="btn s" href={demo.url} target="_blank" rel="noopener noreferrer">
            Открыть демо <span aria-hidden="true">↗</span>
            <span className="sr-only"> (откроется в новой вкладке)</span>
          </a>
          <Link className="btn l s" href={`/contacts/?demo=${demo.slug}#form`}>
            Хочу такой же
          </Link>
        </div>
      </div>
    </article>
  );
}

export function DemoGrid() {
  return (
    <div className="dgrid">
      {DEMOS.map((d) => (
        <DemoCard demo={d} key={d.slug} />
      ))}
    </div>
  );
}

/** Compact strip for the home page: thumbnails link to the full /demo/ page. */
export function DemoStrip() {
  return (
    <ul className="dstrip">
      {DEMOS.map((d) => (
        <li key={d.slug}>
          <Link href="/demo/">
            <span className="shot">
              <Image src={d.image} alt={d.alt} width={1280} height={800} sizes="(min-width: 1040px) 220px, 60vw" loading="lazy" />
            </span>
            <b>{d.name}</b>
            <span>{d.type}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
