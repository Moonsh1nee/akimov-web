// Single place for contacts and global copy. Edit here, not in components.

export const SITE = {
  brand: "akimov/web",
  name: "Владислав Акимов",
  title: "Akimov Web: сайты под ключ",
  description:
    "Разрабатываю сайты и интернет-магазины под ключ: лендинги, сайты услуг, магазины. Дизайн, код и запуск одним человеком. Волгоград, работаю удалённо по всей России.",
  // Production URL comes from the build env; set NEXT_PUBLIC_SITE_URL in CI once the domain is connected.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://akimov-web.example").replace(/\/$/, ""),
  locale: "ru_RU",
  city: "Волгоград",
  telegram: { handle: "@Moonsh1ne_OP", url: "https://t.me/Moonsh1ne_OP" },
  email: "moonsh1ne.vlad@yandex.ru",
  github: "https://github.com/Moonsh1nee",
  portfolio: "https://getgrip.ru/",
  // Shown in the hero pill. Set to null to hide the pill.
  availability: "Беру 2 проекта на ноябрь" as string | null,
  // Placeholders until real legal details are added.
  legal: {
    fullName: "Акимов Владислав [отчество]",
    status: "Самозанятый (НПД)",
    inn: "ИНН: [будет указан]",
  },
} as const;

export const NAV = [
  { href: "/", label: "Главная", key: "home" },
  { href: "/works/", label: "Работы", key: "works" },
  { href: "/services/", label: "Услуги", key: "services" },
  { href: "/about/", label: "Обо мне", key: "about" },
  { href: "/reviews/", label: "Отзывы", key: "reviews" },
  { href: "/contacts/", label: "Контакты", key: "contacts" },
] as const;

export type NavKey = (typeof NAV)[number]["key"];

export const MENU_LABELS: Partial<Record<NavKey, string>> = { services: "Услуги и цены" };
