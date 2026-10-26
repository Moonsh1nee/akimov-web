import Link from "next/link";
import { formatPrice, PLANS, PRICE_NOTE } from "@/data/pricing";

export function Plans({ note = true }: { note?: boolean }) {
  return (
    <>
      <div className="prices">
        {PLANS.map((p) => (
          <div className={`card${p.hot ? " hot" : ""}`} key={p.id}>
            {p.tag ? <span className="tag">{p.tag}</span> : null}
            <h3>{p.name}</h3>
            <p className="for">{p.forWhom}</p>
            <div className="pr">
              <small>от</small>
              {formatPrice(p.price)}
            </div>
            <ul>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link className={`btn${p.hot ? "" : " l"}`} href="/contacts/">
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
      {note ? <p className="pnote">{PRICE_NOTE}</p> : null}
    </>
  );
}
