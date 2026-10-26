import { WorkList } from "@/components/ProjectCards";
import { SectionHead } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Работы: сайты, магазины и веб-приложения",
  description:
    "Заказ клиента, демо-сайт и четыре собственных продукта. У каждой работы своя страница: задача, что сделано, результат и скриншоты.",
  path: "/works/",
});

export default function WorksPage() {
  return (
    <div className="g">
      <div className="wrap page">
        <SectionHead
          as="h1"
          eyebrow="Работы"
          title="Что я сделал"
          lead="Заказ клиента, демо-сайт и четыре собственных продукта. У каждого своя страница: задача, что сделано, результат и скриншоты."
        />
        <h2 className="sr-only">Список работ</h2>
        <WorkList />
      </div>
    </div>
  );
}
