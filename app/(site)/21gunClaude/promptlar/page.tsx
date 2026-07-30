import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { promptItems } from "@/lib/claude-serisi";

export const metadata: Metadata = pageMetadata(
  "Promptlar — 21 Gün 21 Claude Özelliği",
  "21 günlük serinin her gününe ait, kopyala-yapıştır hazır Claude promptları."
);

export default function PromptlarPage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Link
            href="/21gunClaude"
            className="text-sm font-medium text-stone-500 hover:text-stone-900"
          >
            ← 21 Gün 21 Claude Özelliği
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Promptlar
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Her günün promptu aşağıda. Köşeli parantez içindeki kısımları
            ([mesleğin], [hedef kitlen] gibi) kendi bilgilerinle
            değiştirip doğrudan Claude&apos;a yapıştırabilirsin.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {promptItems.map((item) => (
            <div key={item.slug} id={`gun-${item.day}`} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-xs font-semibold text-stone-500">
                  Gün {item.day}/21
                </span>
                <h2 className="text-lg font-semibold text-stone-950">
                  {item.title}
                </h2>
              </div>
              <p className="text-sm text-stone-600">{item.intro}</p>

              {item.prompt && (
                <pre className="max-w-xl whitespace-pre-wrap rounded-xl bg-stone-100 p-4 font-sans text-sm leading-relaxed text-stone-800">
                  {item.prompt}
                </pre>
              )}

              {item.commands && (
                <ul className="flex max-w-xl flex-col gap-2">
                  {item.commands.map((command, i) => (
                    <li
                      key={i}
                      className="rounded-xl bg-stone-100 p-3 font-sans text-sm leading-relaxed text-stone-800"
                    >
                      &quot;{command}&quot;
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href={`/yazilar/${item.slug}`}
                className="text-sm font-medium text-stone-900 underline underline-offset-2"
              >
                Bu günün gönderisini oku
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
