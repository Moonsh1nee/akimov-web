import Link from "next/link";

export default function NotFound() {
  return (
    <div className="g">
      <div className="wrap page stub">
        <span className="mono">Ошибка 404</span>
        <h1 style={{ marginTop: 14 }}>Такой страницы нет</h1>
        <p>Возможно, ссылка устарела или в адресе опечатка. Вернитесь на главную или посмотрите работы.</p>
        <div className="cta">
          <Link className="btn" href="/">
            На главную
          </Link>
          <Link className="btn l" href="/works/">
            Работы
          </Link>
        </div>
      </div>
    </div>
  );
}
