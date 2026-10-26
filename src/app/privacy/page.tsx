import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Политика конфиденциальности",
  description: "Политика обработки персональных данных.",
  path: "/privacy/",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <div className="g">
      <div className="wrap page stub">
        <h1>Политика конфиденциальности</h1>
        <p>Здесь будет текст политики обработки персональных данных. Он появится перед запуском сайта.</p>
        <p>
          <Link href="/">← На главную</Link>
        </p>
      </div>
    </div>
  );
}
