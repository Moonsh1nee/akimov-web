"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Shot } from "@/data/projects";

type Props = { name: string; address: string; shots: Shot[]; priority?: boolean };

const altFor = (name: string, caption: string) => `${name}: ${caption.split(/[:.]/)[0].slice(0, 70)}`;

export function Gallery({ name, address, shots, priority = false }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const last = shots.length - 1;

  const current = () => {
    const el = track.current;
    return el ? Math.max(0, Math.min(last, Math.round(el.scrollLeft / (el.clientWidth || 1)))) : 0;
  };
  const go = (i: number) => {
    const el = track.current;
    if (el) el.scrollTo({ left: Math.max(0, Math.min(last, i)) * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="frame gal">
      <div className="b">
        <i />
        <i />
        <i />
        <span>{address}</span>
      </div>
      <div
        className="track"
        ref={track}
        tabIndex={0}
        role="region"
        aria-label={`Скриншоты ${name}, листайте вбок`}
        onScroll={() => setIndex(current())}
      >
        {shots.map((s, n) => (
          <figure className="slide" key={n}>
            <div className="shot">
              {s.src ? (
                <Image
                  src={s.src}
                  alt={altFor(name, s.caption)}
                  width={1440}
                  height={900}
                  priority={priority && n === 0}
                  loading={priority && n === 0 ? undefined : "lazy"}
                />
              ) : (
                <div className="ph">
                  <span>скриншот</span>
                  <span>будет добавлен</span>
                </div>
              )}
            </div>
            <figcaption>{s.src ? s.caption : `${s.caption.split(":")[0]}. Заглушка.`}</figcaption>
          </figure>
        ))}
      </div>
      <div className="gbar">
        <button type="button" aria-label="Назад" onClick={() => go(current() - 1)}>
          ←
        </button>
        <div className="dots">
          {shots.map((_, n) => (
            <button
              type="button"
              key={n}
              aria-label={`Скриншот ${n + 1} из ${shots.length}`}
              aria-current={n === index ? "true" : undefined}
              onClick={() => go(n)}
            />
          ))}
        </div>
        <button type="button" aria-label="Вперёд" onClick={() => go(current() + 1)}>
          →
        </button>
      </div>
    </div>
  );
}
