import Image from "next/image";
import { CtaBand, Facts, IconCards, Section, SectionHead } from "@/components/ui";
import { FACTS, RULES, STACK_GROUPS } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Обо мне: Владислав Акимов, разработчик сайтов",
  description:
    "Делаю сайты и веб-приложения от рисунка в Figma до запуска. Волгоград, работаю удалённо по всей России. Один человек на связи и договор с фиксированной ценой.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <div className="g">
        <div className="wrap page">
          <div className="about" style={{ alignItems: "start" }}>
            <div className="photo">
              <Image src="/img/me.webp" alt="Владислав Акимов" width={900} height={1125} sizes="380px" priority />
            </div>
            <div>
              <span className="mono">Обо мне</span>
              <h1>Привет, я Владислав</h1>
              <p>
                Я делаю сайты и веб-приложения: от рисунка в Figma до запуска на сервере. Живу в Волгограде, работаю с заказчиками по всей России.
              </p>
              <p>
                Начинал с собственных проектов: приложение для задач и привычек, учёт финансов, питания и подписок, демо-сайт для архитектурного бюро. Потом пришёл настоящий заказ, интернет-магазин с необычным дизайном. Сейчас беру небольшие проекты и довожу их до запуска.
              </p>
              <p>
                <strong>Мне важно, чтобы сайт решал задачу, а не просто выглядел красиво.</strong> Поэтому перед дизайном я спрашиваю, кто ваш клиент и что он должен сделать на странице.
              </p>
              <Facts items={FACTS} />
            </div>
          </div>
        </div>
      </div>

      <Section alt>
        <SectionHead eyebrow="Как я работаю" title="Правила, которых держусь" />
        <IconCards items={RULES} />
      </Section>

      <Section>
        <SectionHead
          eyebrow="Стек"
          title="Чем я пользуюсь"
          lead="Вам о технологиях думать не нужно, но если интересно или нужно показать другому разработчику, вот список."
        />
        <div className="why">
          {STACK_GROUPS.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <div className="stack">
                {g.main.map((s) => (
                  <span key={s}>{s}</span>
                ))}
                {g.secondary.map((s) => (
                  <span className="n" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand title="Давайте обсудим ваш сайт" />
    </>
  );
}
