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
          lead="Отзыв заказчицы магазина Muiraje настоящий. Остальные места пока заняты черновиками, заменю их настоящими."
        />
        <ReviewCards withAddCard />
        {REVIEWS_ARE_DRAFTS ? <p className="draft">Отзывы с именами «Имя Фамилия» и подписью «фото» пока черновики.</p> : null}
        <TrustRow items={TRUST} />
      </div>
    </div>
  );
}
