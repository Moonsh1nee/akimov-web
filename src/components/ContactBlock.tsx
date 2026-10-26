import { SITE } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { CopyButton } from "./CopyButton";

export function ContactBlock({ as: Tag = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <div className="contact">
      <div className="lt">
        <Tag>Расскажите про проект</Tag>
        <p>Хватит двух-трёх строк. Отвечу в течение дня и скажу, подойдёт ли вам пакет и сколько это займёт.</p>
        <div className="ways">
          <div className="way">
            <span className="mono">Telegram · быстрее всего</span>
            <span className="val">{SITE.telegram.handle}</span>
            <div className="row">
              <a className="btn" href={SITE.telegram.url}>
                Открыть Telegram ↗
              </a>
            </div>
          </div>
          <div className="way l">
            <span className="mono">Почта</span>
            <span className="val">{SITE.email}</span>
            <div className="row">
              <a className="btn" href={`mailto:${SITE.email}`}>
                Написать письмо
              </a>
              <CopyButton text={SITE.email} />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
