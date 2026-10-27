import Link from "next/link";
import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="g">
      <div className="wrap">
        <div className="cols">
          <div>
            <b>{SITE.brand}</b>
            <p>
              Сайты и веб-приложения под ключ.
              <br />
              {SITE.city} · работаю удалённо
            </p>
          </div>
          <div className="links">
            <b>Разделы</b>
            <Link href="/works/">Работы</Link>
            <Link href="/demo/">Примеры сайтов</Link>
            <Link href="/services/">Услуги и цены</Link>
            <Link href="/about/">Обо мне</Link>
            <Link href="/reviews/">Отзывы</Link>
            <Link href="/contacts/">Контакты</Link>
          </div>
          <div className="links">
            <b>Документы</b>
            <Link href="/privacy/">Политика конфиденциальности</Link>
            <Link href="/oferta/">Оферта</Link>
            <p className="req">
              {SITE.legal.fullName}
              <br />
              {SITE.legal.status}
              <br />
              {SITE.legal.inn}
            </p>
          </div>
        </div>
        <p style={{ marginTop: 20 }}>© {new Date().getFullYear()} {SITE.name}</p>
      </div>
    </footer>
  );
}
