import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { categories, getPostsByCategory } from "@/lib/yazilar";

export const metadata: Metadata = pageMetadata(
  "Yazılar",
  "AI & Otomasyon, Kadın Uzmanlar için Sistemler ve Anne-Girişimci Notları — Instagram içeriğinin kalıcı arşivi."
);

export default async function YazilarPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  const { kategori } = await searchParams;
  const activeCategory = categories.find((c) => c.slug === kategori);
  const postList = getPostsByCategory(activeCategory?.slug);

  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Yazılar
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Instagram&apos;da paylaştığım içeriklerin kalıcı, genişletilmiş
            hali. Buradaki her yazı önce Instagram&apos;da paylaşıldı.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/yazilar"
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              !activeCategory
                ? "border-stone-900 bg-stone-900 text-white"
                : "border-stone-300 text-stone-700 hover:bg-stone-100"
            }`}
          >
            Tümü
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/yazilar?kategori=${c.slug}`}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory?.slug === c.slug
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 text-stone-700 hover:bg-stone-100"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col divide-y divide-stone-200">
          {postList.map((post) => {
            const category = categories.find((c) => c.slug === post.category);
            return (
              <Link
                key={post.slug}
                href={`/yazilar/${post.slug}`}
                className="flex flex-col gap-2 py-6 first:pt-0"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-500">
                  <span>{category?.label}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-lg font-semibold text-stone-950">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-stone-600">
                  {post.excerpt}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
