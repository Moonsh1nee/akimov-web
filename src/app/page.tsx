import Image from "next/image";
import Link from "next/link";
import { CompareTable, HonestNote } from "@/components/CompareTable";
import { ContactBlock } from "@/components/ContactBlock";
import { FaqList } from "@/components/FaqList";
import { Plans } from "@/components/Plans";
import { DemoStrip } from "@/components/DemoCards";
import { HomeProjects } from "@/components/ProjectCards";
import { ReviewCards } from "@/components/ReviewCards";
import { Facts, IconCards, Section, SectionHead, Steps, TrustRow } from "@/components/ui";
import { FACTS, NUMS, PERKS, STACK_MAIN, STACK_SECONDARY, STEPS, TRUST, WHY_CODE } from "@/data/content";
import { HOME_FAQ } from "@/data/faq";
import { SITE } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Akimov Web: сайты и интернет-магазины под ключ",
  description: SITE.description,
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <div className="g">
        <div className="wrap">
          <div className="hero">
            <div>
              {SITE.availability ? (
                <span className="pill">
                  <i />
                  {SITE.availability}
                </span>
              ) : null}
              <h1>
                Сайт, который <em>приводит клиентов</em>, а не просто висит в интернете
              </h1>
              <p className="lead">
                Рисую, пишу и запускаю сайт сам. Вы говорите напрямую с тем, кто делает работу, и получаете готовый сайт за 2–6 недель.
              </p>
              <div className="cta">
                <Link className="btn" href="/contacts/">
                  Обсудить проект →
                </Link>
                <Link className="btn l" href="/works/">
                  Посмотреть работы
                </Link>
              </div>
              <small>Отвечаю в течение дня. Первая консультация бесплатно.</small>
            </div>
            <div>
              <div className="frame">
                <div className="b">
                  <i />
                  <i />
                  <i />
                  <span>ostov-architects · главная</span>
                </div>
                <div className="shot">
                  <Image src="/img/ostov-home.webp" alt="Главный экран сайта Ostov Architects" width={1440} height={900} sizes="(min-width: 1040px) 540px, 100vw" priority fetchPriority="high" />
                </div>
              </div>
              <div className="perks">
                {PERKS.map((p) => (
                  <div className="perk" key={p.title}>
                    <b>{p.title}</b>
                    <span>{p.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="nums">
            {NUMS.map((n) => (
              <div key={n.text}>
                <b>
                  {n.value}
                  {n.unit ? <small>{n.unit}</small> : null}
                </b>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <SectionHead
          eyebrow="Работы"
          title="Что получили заказчики и что я сделал для себя"
          lead="Один заказ клиента, одно демо и четыре собственных продукта. В каждом можно полистать скриншоты."
        />
        <HomeProjects />
      </Section>

      <Section alt>
        <SectionHead
          eyebrow="Примеры"
          title="Примеры, которые можно заказать"
          lead="Пять живых демо с вымышленными компаниями: лендинг, запись, личный сайт, B2B и магазин. Откройте любое и попробуйте."
        />
        <DemoStrip />
        <Link className="more-link" href="/demo/">
          Смотреть все примеры →
        </Link>
      </Section>

      <Section alt>
        <SectionHead
          eyebrow="Почему не конструктор"
          title="Сайт на чистом коде и сайт на WordPress или Tilda"
          lead="Конструкторы хороши для простых задач и стоят дешевле. Когда сайт должен приносить деньги и расти, разница становится заметной."
        />
        <IconCards items={WHY_CODE} />
        <CompareTable />
        <HonestNote />
      </Section>

      <Section>
        <SectionHead
          eyebrow="Цены"
          title="Три понятных пакета"
          lead="Цена зависит от объёма. После короткого разговора я называю точную сумму и срок, и она не меняется по ходу работы."
        />
        <Plans />
        <Link className="more-link" href="/services/">
          Подробнее об услугах и ценах →
        </Link>
      </Section>

      <Section alt>
        <SectionHead
          eyebrow="Отзывы"
          title="Что говорят заказчики"
          lead="Первый отзыв настоящий. Остальные места пока заняты черновиками, заменю их настоящими."
        />
        <ReviewCards />
        <TrustRow items={TRUST} />
        <Link className="more-link" href="/reviews/">
          Все отзывы →
        </Link>
      </Section>

      <Section>
        <div className="about solo">
          <div>
            <span className="mono">Обо мне</span>
            <h2>Привет, я Владислав</h2>
            <p>
              Я делаю сайты и веб-приложения: от рисунка в Figma до запуска на сервере. Живу в Волгограде, работаю с заказчиками по всей России.
            </p>
            <p>
              <strong>Мне важно, чтобы сайт решал задачу, а не просто выглядел красиво.</strong> Поэтому перед дизайном я спрашиваю, кто ваш клиент и что он должен сделать на странице.
            </p>
            <p>Технологий у меня много, но вам о них думать не придётся. Скажу только, сколько это стоит и когда будет готово.</p>
            <div className="stack" aria-label="Стек">
              {STACK_MAIN.map((s) => (
                <span key={s}>{s}</span>
              ))}
              {STACK_SECONDARY.map((s) => (
                <span className="n" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <Facts items={FACTS} />
            <Link className="more-link" href="/about/">
              Подробнее обо мне →
            </Link>
          </div>
        </div>
      </Section>

      <Section alt>
        <SectionHead eyebrow="Как проходит работа" title="От разговора до запуска за 4 шага" />
        <Steps items={STEPS} />
      </Section>

      <Section>
        <SectionHead eyebrow="Вопросы" title="О чём спрашивают чаще всего" />
        <FaqList items={HOME_FAQ} />
      </Section>

      <div className="g tail">
        <div className="wrap">
          <ContactBlock />
        </div>
      </div>
    </>
  );
}
