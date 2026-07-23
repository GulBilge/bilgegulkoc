import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { getPostsByCategory } from "@/lib/yazilar";

export const metadata: Metadata = pageMetadata(
  "21 Gün 21 Claude Özelliği",
  "Serinin tamamı tek yerde: gönderiler, hikayeler ve promptlar."
);

export default function ClaudeSerisiPage() {
  const seriPosts = getPostsByCategory()
    .filter((p) => p.seriesLabel)
    .sort((a, b) => (a.date < b.date ? -1 : 1));

  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            21 Gün 21 Claude Özelliği
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Instagram&apos;da paylaştığım 21 günlük serinin tamamı burada.
            Her gün için gönderiyi okuyabilir, o günün hazır promptunu
            kopyalayabilir ya da story içeriklerine göz atabilirsin.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/21gunClaude/gonderiler"
            className="rounded-full border border-stone-300 px-4 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
          >
            Tüm gönderiler →
          </Link>
          <Link
            href="/21gunClaude/promptlar"
            className="rounded-full border border-stone-300 px-4 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
          >
            Tüm promptlar →
          </Link>
          <Link
            href="/21gunClaude/hikayeler"
            className="rounded-full border border-stone-300 px-4 py-1.5 text-sm font-medium text-stone-700 hover:bg-stone-100"
          >
            Tüm hikayeler →
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-stone-200">
          {seriPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/yazilar/${post.slug}`}
              className="flex flex-col gap-1 py-4 first:pt-0"
            >
              <span className="text-xs font-medium text-stone-500">
                {post.seriesLabel}
              </span>
              <span className="text-base font-semibold text-stone-950">
                {post.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
