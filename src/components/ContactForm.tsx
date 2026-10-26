"use client";

import Link from "next/link";
import { useId, useState } from "react";

type Status = { kind: "idle" } | { kind: "error"; text: string } | { kind: "info"; text: string };

/**
 * Interface only: the delivery channel (Google Sheets or a cloud function) is not chosen yet.
 * Wire it in `submit` once it is, keeping the validation above it.
 */
export function ContactForm() {
  const uid = useId();
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const contact = String(data.get("contact") ?? "").trim();
    if (!contact) {
      setStatus({ kind: "error", text: "Укажите, как с вами связаться." });
      (form.elements.namedItem("contact") as HTMLInputElement | null)?.focus();
      return;
    }
    if (!data.get("agree")) {
      setStatus({ kind: "error", text: "Отметьте согласие на обработку данных." });
      return;
    }
    setStatus({ kind: "info", text: "Форма пока не подключена. Напишите мне в Telegram или на почту рядом." });
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <p className="ft">Или оставьте заявку</p>
      <label htmlFor={`${uid}-name`}>
        Как к вам обращаться
        <input type="text" id={`${uid}-name`} name="name" autoComplete="name" placeholder="Анна" />
      </label>
      <label htmlFor={`${uid}-contact`}>
        Telegram или почта
        <input
          type="text"
          id={`${uid}-contact`}
          name="contact"
          autoComplete="email"
          inputMode="email"
          autoCapitalize="off"
          placeholder="@username или anna@mail.ru"
        />
      </label>
      <label htmlFor={`${uid}-text`}>
        О проекте
        <textarea id={`${uid}-text`} name="text" placeholder="Чем занимаетесь и что хотите от сайта" />
      </label>
      <label className="consent" htmlFor={`${uid}-agree`}>
        <input type="checkbox" id={`${uid}-agree`} name="agree" />
        <span>
          Согласен на обработку персональных данных в соответствии с <Link href="/privacy/">политикой конфиденциальности</Link>
        </span>
      </label>
      <button className="btn" type="submit">
        Отправить заявку
      </button>
      <p className={`msg${status.kind === "error" ? " err" : ""}`} role="status">
        {status.kind === "idle" ? "" : status.text}
      </p>
    </form>
  );
}
