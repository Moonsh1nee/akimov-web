import Link from "next/link";
import type { ReactNode } from "react";

type Item = { title: string; text: string };

export function SectionHead({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="sh">
      <span className="mono">{eyebrow}</span>
      <Tag>{title}</Tag>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}

export function Section({ children, alt = false }: { children: ReactNode; alt?: boolean }) {
  return (
    <section className={`s g${alt ? " alt" : ""}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Chips({ items }: { items: readonly string[] }) {
  return (
    <div className="chips">
      {items.map((x) => (
        <span key={x}>{x}</span>
      ))}
    </div>
  );
}

export function CtaBand({ title, label = "Написать мне →" }: { title: string; label?: string }) {
  return (
    <div className="g tail">
      <div className="wrap">
        <div className="band">
          <h2>{title}</h2>
          <Link className="btn" href="/contacts/">
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Steps({ items }: { items: readonly { when: string; title: string; text: string }[] }) {
  return (
    <div className="steps">
      {items.map((s) => (
        <div className="step" key={s.title}>
          <span className="mono">{s.when}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}

export function IconCards({ items }: { items: readonly Item[] }) {
  return (
    <div className="why">
      {items.map((x) => (
        <div key={x.title}>
          <h3>{x.title}</h3>
          <p>{x.text}</p>
        </div>
      ))}
    </div>
  );
}

export function TrustRow({ items }: { items: readonly Item[] }) {
  return (
    <div className="trust">
      {items.map((t) => (
        <div key={t.title}>
          <b>{t.title}</b>
          <span>{t.text}</span>
        </div>
      ))}
    </div>
  );
}

export function Facts({ items }: { items: readonly string[] }) {
  return (
    <div className="facts">
      {items.map((f) => (
        <span key={f}>{f}</span>
      ))}
    </div>
  );
}
