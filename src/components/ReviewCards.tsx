import { REVIEWS } from "@/data/reviews";

export function ReviewCards({ withAddCard = false }: { withAddCard?: boolean }) {
  return (
    <div className="revs">
      {REVIEWS.map((r, i) => (
        <figure className="rev" key={i}>
          <blockquote>«{r.quote}»</blockquote>
          <div className="who">
            <div className="ava">фото</div>
            <figcaption>
              <b>{r.name}</b>
              <span>{r.role}</span>
            </figcaption>
          </div>
        </figure>
      ))}
      {withAddCard ? (
        <figure className="rev add">
          <p>Здесь появятся новые отзывы. Достаточно имени, роли, пары предложений и фото.</p>
        </figure>
      ) : null}
    </div>
  );
}
