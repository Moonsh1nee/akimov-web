import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Публичная оферта",
  description: "Условия оказания услуг.",
  path: "/oferta/",
  noindex: true,
});

export default function OfertaPage() {
  return (
    <div className="g">
      <div className="wrap page stub">
        <h1>Публичная оферта</h1>
        <p>Здесь будут условия оказания услуг: предмет, сроки, порядок оплаты и приёмки. Текст появится перед запуском сайта.</p>
        <p>
          <Link href="/">← На главную</Link>
        </p>
      </div>
    </div>
  );
}
