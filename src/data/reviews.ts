export type Review = { quote: string; name: string; role: string; avatar?: string };

// Placeholders: replace with real reviews (add an avatar path under /public/img when available).
export const REVIEWS: Review[] = [
  { quote: "Здесь будет отзыв владелицы Muiraje: что было нужно, как шла работа и что изменилось после запуска.", name: "Имя Фамилия", role: "Владелица магазина Muiraje" },
  { quote: "Место для второго отзыва. Лучше, если там есть конкретный результат: сроки, заявки, удобство.", name: "Имя Фамилия", role: "Должность, компания" },
  { quote: "Место для третьего отзыва. Короткий текст в два-три предложения читается лучше длинного.", name: "Имя Фамилия", role: "Должность, компания" },
];

export const REVIEWS_ARE_DRAFTS = true;
