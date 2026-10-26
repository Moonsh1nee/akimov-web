export type Review = {
  quote: string;
  name: string;
  role: string;
  /** Real reviews show initials instead of the dashed photo placeholder. */
  initials?: string;
};

// The first review is real (client message, lightly trimmed). The rest are placeholders to replace.
export const REVIEWS: Review[] = [
  {
    quote:
      "Спасибо тебе большое, без тебя вряд ли получилось бы превратить идею в полноценный сайт. Буду обращаться, если понадобится расширение или что-то ещё.",
    name: "Владелица магазина Muiraje",
    role: "Заказчица, интернет-магазин",
    initials: "M",
  },
  { quote: "Место для второго отзыва. Лучше, если там есть конкретный результат: сроки, заявки, удобство.", name: "Имя Фамилия", role: "Должность, компания" },
  { quote: "Место для третьего отзыва. Короткий текст в два-три предложения читается лучше длинного.", name: "Имя Фамилия", role: "Должность, компания" },
];

export const REVIEWS_ARE_DRAFTS = true;
