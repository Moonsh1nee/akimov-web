import { COMPARE } from "@/data/content";

export function CompareTable() {
  return (
    <>
      <div className="cmp" tabIndex={0} role="region" aria-label="Сравнение: чистый код, WordPress и Tilda">
        <table>
          <thead>
            <tr>
              <th />
              {COMPARE.head.map((h, i) => (
                <th key={h} className={i === COMPARE.head.length - 1 ? "me" : undefined}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE.rows.map(([label, ...cells]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {cells.map((c, i) => (
                  <td key={i} className={i === cells.length - 1 ? "me" : undefined}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="hint">Таблицу можно листать вбок →</p>
    </>
  );
}

export function HonestNote() {
  return (
    <p className="honest">
      <strong>{COMPARE.honest.lead}</strong> {COMPARE.honest.text}
    </p>
  );
}
