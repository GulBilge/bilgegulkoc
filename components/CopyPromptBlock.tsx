"use client";

import { useState } from "react";

export function CopyPromptBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          {copied ? "Kopyalandı ✓" : "Promptu Kopyala"}
        </button>
      </div>
      <pre className="max-w-3xl overflow-x-auto whitespace-pre-wrap rounded-xl bg-stone-100 p-4 font-mono text-sm leading-relaxed text-stone-800">
        {text}
      </pre>
    </div>
  );
}
