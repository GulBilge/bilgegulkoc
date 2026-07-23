import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";
import { categories, getPostBySlug, posts } from "@/lib/yazilar";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return pageMetadata("Yazılar", "Yazı bulunamadı.");
  return pageMetadata(post.title, post.excerpt);
}

export default async function YaziDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const category = categories.find((c) => c.slug === post.category);

  return (
    <Section>
      <article className="flex flex-col gap-6">
        <Link
          href="/yazilar"
          className="text-sm font-medium text-stone-500 hover:text-stone-900"
        >
          ← Tüm yazılar
        </Link>

        <div className="flex flex-col gap-3">
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
          {post.seriesLabel && (
            <p className="text-sm font-medium text-stone-500">
              {post.seriesLabel}
            </p>
          )}
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
            {post.title}
          </h1>
        </div>

        <div className="flex max-w-xl flex-col gap-4">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-stone-700">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="text-sm text-stone-500">
          Bu yazı önce{" "}
          <a
            href={post.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-stone-900 underline underline-offset-2"
          >
            Instagram&apos;da
          </a>{" "}
          paylaşıldı.
        </p>
      </article>
    </Section>
  );
}
