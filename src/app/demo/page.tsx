import { CtaBand, SectionHead } from "@/components/ui";
import { DemoGrid } from "@/components/DemoCards";
import { JsonLd } from "@/components/JsonLd";
import { DEMOS, DEMO_DISCLAIMER } from "@/data/demos";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Примеры сайтов: пять живых демо, которые можно заказать",
  description:
    "Лендинг, онлайн-запись, личный сайт, B2B и интернет-магазин: пять рабочих демо с вымышленными компаниями. Откройте, попробуйте и закажите такой же с вашим дизайном и данными.",
  path: "/demo/",
});

export default function DemoPage() {
  return (
    <>
      <div className="g">
        <div className="wrap page">
          <SectionHead
            as="h1"
            eyebrow="Примеры сайтов"
            title="Живые демо, которые можно заказать"
            lead="Пять рабочих сайтов разных типов. Откройте любой, нажмите кнопки и посмотрите, как он ведёт себя у посетителя."
          />
          <p className="dnote" role="note">
            {DEMO_DISCLAIMER}
          </p>
          <h2 className="sr-only">Список демо-сайтов</h2>
          <DemoGrid />
        </div>
      </div>
      <CtaBand title="Хотите такой же, но под ваш бизнес?" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Демо-сайты Akimov Web",
          itemListElement: DEMOS.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${d.name}: ${d.type.toLowerCase()} (демо)`,
            url: absoluteUrl("/demo/"),
          })),
        }}
      />
    </>
  );
}
