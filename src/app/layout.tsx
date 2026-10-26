import type { Metadata, Viewport } from "next";
import { Golos_Text, JetBrains_Mono, Unbounded } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Metrika } from "@/components/Metrika";
import { SITE } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "latin"],
  weight: ["500", "700"],
  display: "swap",
});

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0D1117" },
    { media: "(prefers-color-scheme: light)", color: "#FAF7F1" },
  ],
};

const yandexVerification = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s | Akimov Web" },
  description: SITE.description,
  authors: [{ name: SITE.name }],
  applicationName: "Akimov Web",
  openGraph: { type: "website", locale: SITE.locale, siteName: "Akimov Web" },
  verification: yandexVerification ? { yandex: yandexVerification } : undefined,
};

// Runs before first paint so a saved theme never flashes the wrong palette.
const themeInit = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

const siteLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Akimov Web",
  description: SITE.description,
  url: absoluteUrl("/"),
  image: absoluteUrl("/img/me.webp"),
  email: SITE.email,
  founder: { "@type": "Person", name: SITE.name },
  address: { "@type": "PostalAddress", addressLocality: SITE.city, addressCountry: "RU" },
  areaServed: "RU",
  sameAs: [SITE.telegram.url, SITE.github],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${golos.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Перейти к содержимому
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={siteLd} />
        <Metrika />
      </body>
    </html>
  );
}
