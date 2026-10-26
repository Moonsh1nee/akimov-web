import { ReviewCards } from "@/components/ReviewCards";
import { SectionHead, TrustRow } from "@/components/ui";
import { TRUST } from "@/data/content";
import { REVIEWS_ARE_DRAFTS } from "@/data/reviews";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Отзывы заказчиков",
  description: "Отзывы тех, для кого я делал сайты. Здесь будут имена, роли и результаты проектов.",
  path: "/reviews/",
});

export default function ReviewsPage() {
  return (
    <div className="g">
      <div className="wrap page">
        <SectionHead
          as="h1"
          eyebrow="Отзывы"
          title="Что говорят заказчики"
          lead="Здесь будут настоящие отзывы с именами и результатами. Пока на их месте черновики."
        />
        <ReviewCards withAddCard />
        {REVIEWS_ARE_DRAFTS ? <p className="draft">Черновики: имена, тексты и фото заменю настоящими, когда придут.</p> : null}
        <TrustRow items={TRUST} />
      </div>
    </div>
  );
}
