import { CompareTable, HonestNote } from "@/components/CompareTable";
import { FaqList } from "@/components/FaqList";
import { Plans } from "@/components/Plans";
import { CtaBand, IconCards, Section, SectionHead } from "@/components/ui";
import { INCLUDED } from "@/data/content";
import { SERVICES_FAQ } from "@/data/faq";
import { PLANS, formatPrice } from "@/data/pricing";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/data/site";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Услуги и цены: лендинг, сайт услуг, интернет-магазин",
  description: `Три пакета: лендинг от ${formatPrice(PLANS[0].price)}, сайт услуг от ${formatPrice(PLANS[1].price)}, магазин от ${formatPrice(PLANS[2].price)}. Дизайн, разработка и запуск, месяц поддержки включён.`,
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <div className="g">
        <div className="wrap page" style={{ paddingBottom: 0 }}>
          <SectionHead
            as="h1"
            eyebrow="Услуги и цены"
            title="Что я делаю и сколько это стоит"
            lead="Три пакета закрывают почти все задачи малого бизнеса. Если ваш случай нестандартный, скажите, посчитаю отдельно."
          />
          <h2 className="sr-only">Пакеты услуг</h2>
          <Plans />
        </div>
      </div>

      <Section>
        <SectionHead eyebrow="Что входит в работу" title="Кроме страниц и кода" />
        <IconCards items={INCLUDED} />
      </Section>

      <Section alt>
        <SectionHead eyebrow="Сравнение" title="Чистый код, WordPress или Tilda" />
        <CompareTable />
        <HonestNote />
      </Section>

      <Section>
        <SectionHead eyebrow="Вопросы" title="Про цены, сроки и условия" />
        <FaqList items={SERVICES_FAQ} />
      </Section>

      <CtaBand title="Не уверены, какой пакет нужен?" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Пакеты услуг",
          itemListElement: PLANS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: p.name,
              description: p.forWhom,
              provider: { "@type": "Person", name: SITE.name },
              url: absoluteUrl("/services/"),
              offers: { "@type": "Offer", priceCurrency: "RUB", price: p.price, description: "Цена от, ориентировочная" },
            },
          })),
        }}
      />
    </>
  );
}
