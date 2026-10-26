"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MENU_LABELS, NAV, SITE } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

function activeKey(pathname: string) {
  const seg = pathname.split("/")[1] ?? "";
  return seg === "" ? "home" : seg;
}

export function Header() {
  const pathname = usePathname();
  // Drawer state is keyed to the path it was opened on, so navigating closes it without an effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const current = activeKey(pathname);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPath(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="bar g">
      <div className="wrap">
        <div className="top">
          <Link className="logo" href="/">
            akimov<span>/</span>web
          </Link>
          <nav aria-label="Разделы">
            {NAV.map((n) => (
              <Link key={n.key} href={n.href} aria-current={current === n.key ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="r">
            <Link className="btn s" href="/contacts/">
              Обсудить проект
            </Link>
            <ThemeToggle />
            <button
              className="ibtn burger"
              type="button"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              aria-controls="menu"
              onClick={() => setOpenPath(open ? null : pathname)}
            >
              <i />
            </button>
          </div>
        </div>
      </div>
      <div className="menu g" id="menu" hidden={!open}>
        <div className="wrap menu-in">
          {NAV.map((n) => (
            <Link key={n.key} href={n.href} aria-current={current === n.key ? "page" : undefined}>
              {MENU_LABELS[n.key] ?? n.label}
            </Link>
          ))}
          <Link className="btn" href="/contacts/">
            Обсудить проект
          </Link>
          <a className="btn l" href={SITE.telegram.url}>
            Написать в Telegram
          </a>
        </div>
      </div>
    </header>
  );
}
