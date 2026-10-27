import type { Plan } from "./pricing";

export type Demo = {
  slug: string;
  name: string;
  /** Short site type shown as a badge. */
  type: string;
  /** Package from pricing.ts this kind of site falls under; the price comes from there. */
  planId: Plan["id"];
  forWhom: string;
  features: string[];
  url: string;
  image: string;
  alt: string;
  /** Used to prefill the contact form: "Хочу сайт как «name» (kind)". */
  kind: string;
};

// All five are live demos of fictional companies, never client work.
export const DEMOS: Demo[] = [
  {
    slug: "chisto34",
    name: "Чисто34",
    type: "Лендинг",
    planId: "landing",
    forWhom: "Для клининга, мастеров и служб, которым нужны быстрые заявки.",
    features: ["Калькулятор цены уборки", "Эффект «сотри грязь» до и после", "Заявка в один шаг"],
    url: "https://moonsh1nee.github.io/demo-chisto34/",
    image: "/img/demo-chisto34.webp",
    alt: "Демо лендинга клининга «Чисто34»: калькулятор уборки на первом экране",
    kind: "лендинг для клининга",
  },
  {
    slug: "volga-dent",
    name: "Волга-Дент",
    type: "Онлайн-запись",
    planId: "services",
    forWhom: "Для клиник, студий и салонов, где клиенты записываются на приём.",
    features: ["Пошаговая запись к врачу", "Раздел «Мои записи»", "Цены и врачи в одном месте"],
    url: "https://moonsh1nee.github.io/demo-volga-dent/",
    image: "/img/demo-volga-dent.webp",
    alt: "Демо сайта стоматологии «Волга-Дент»: форма записи на первом экране",
    kind: "сайт с онлайн-записью",
  },
  {
    slug: "maria-levina",
    name: "Мария Левина",
    type: "Личный сайт",
    planId: "services",
    forWhom: "Для психологов, коучей и экспертов, которые продают себя и свой подход.",
    features: ["Короткий тест для посетителя", "Блог с заметками", "Запись на встречу"],
    url: "https://moonsh1nee.github.io/demo-maria-levina/",
    image: "/img/demo-maria-levina.webp",
    alt: "Демо личного сайта психолога «Мария Левина»",
    kind: "личный сайт специалиста",
  },
  {
    slug: "volga-metal",
    name: "Волга-Металл-Сервис",
    type: "B2B",
    planId: "services",
    forWhom: "Для производств и компаний, которые работают с юрлицами по договору.",
    features: ["Калькулятор с НДС", "Запрос коммерческого предложения", "Оборудование и проекты"],
    url: "https://moonsh1nee.github.io/demo-volga-metal/",
    image: "/img/demo-volga-metal.webp",
    alt: "Демо B2B-сайта «Волга-Металл-Сервис» с чертежом на первом экране",
    kind: "B2B-сайт с расчётом и запросом КП",
  },
  {
    slug: "volzhskaya-vypechka",
    name: "Волжская выпечка",
    type: "Интернет-магазин",
    planId: "shop",
    forWhom: "Для пекарен, кофеен и небольших магазинов с доставкой.",
    features: ["Каталог и корзина", "Промокод ВОЛГА10", "Доставка и подписка"],
    url: "https://moonsh1nee.github.io/demo-volzhskaya-vypechka/",
    image: "/img/demo-volzhskaya-vypechka.webp",
    alt: "Демо интернет-магазина пекарни «Волжская выпечка»",
    kind: "интернет-магазин",
  },
];

export const DEMO_DISCLAIMER =
  "Демо-проекты с вымышленными компаниями, показывают возможности. Ваш сайт будет с вашим дизайном и данными.";

export const getDemo = (slug: string) => DEMOS.find((d) => d.slug === slug);

/** Text dropped into the contact form when a visitor taps «Хочу такой же». */
export const demoPrefill = (d: Demo) => `Хочу сайт как «${d.name}» (${d.kind}). Демо: ${d.url}\n`;
