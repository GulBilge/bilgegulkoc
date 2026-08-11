import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { getPostsByCategory } from "@/lib/yazilar";

export const metadata: Metadata = pageMetadata(
  "Gönderiler — Claude Cowork'e Giriş Serisi",
  "Claude Cowork serisinin tüm Instagram gönderi metinleri."
);

export default function CoworkGonderilerPage() {
  const seriPosts = getPostsByCategory()
    .filter((p) => p.series === "cowork-giris")
    .sort((a, b) => (a.date < b.date ? -1 : 1));

  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Link
            href="/cowork"
            className="text-sm font-medium text-stone-500 hover:text-stone-900"
          >
            ← Claude Cowork&apos;e Giriş Serisi
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Gönderiler
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Serinin her gününde paylaştığım gönderi. Devamını okumak
            istersen Yazılar&apos;daki tam haline gidebilirsin.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-stone-200">
          {seriPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/yazilar/${post.slug}`}
              className="flex flex-col gap-2 py-6 first:pt-0"
            >
              <span className="text-xs font-medium text-stone-500">
                {post.seriesLabel}
              </span>
              <h2 className="text-lg font-semibold text-stone-950">
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed text-stone-600">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
