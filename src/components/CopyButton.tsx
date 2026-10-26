"use client";

import { useState } from "react";

/** Copies text, falling back to selecting the sibling value when the clipboard API is refused. */
export function CopyButton({ text, label = "Копировать адрес" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);

  async function copy(e: React.MouseEvent<HTMLButtonElement>) {
    const val = e.currentTarget.closest(".way")?.querySelector(".val");
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
    } catch {
      if (val) {
        const range = document.createRange();
        range.selectNodeContents(val);
        const sel = getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  }

  return (
    <button className="btn" type="button" onClick={copy}>
      {done ? "Скопировано" : label}
    </button>
  );
}
