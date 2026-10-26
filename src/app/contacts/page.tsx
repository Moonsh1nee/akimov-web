import { ContactBlock } from "@/components/ContactBlock";
import { Facts } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Контакты: напишите в Telegram или на почту",
  description:
    "Расскажите про проект в Telegram или на почту, отвечу в течение дня. Первая консультация бесплатно. Волгоград, работаю удалённо.",
  path: "/contacts/",
});

export default function ContactsPage() {
  return (
    <div className="g">
      <div className="wrap page">
        <ContactBlock as="h1" />
        <Facts items={["Волгоград, удалённо", "Первая консультация бесплатно", "Работаю по договору"]} />
      </div>
    </div>
  );
}
