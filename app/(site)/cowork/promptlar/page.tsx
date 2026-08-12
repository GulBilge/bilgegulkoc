import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Promptlar — Claude Cowork'e Giriş Serisi",
  "Claude Cowork serisine ait, kopyala-yapıştır hazır promptlar."
);

export default function CoworkPromptlarPage() {
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
            Promptlar
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Serinin promptları burada toplanıyor — diğerleri eklendikçe bu
            sayfa güncellenecek.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-stone-500">
              Gün 10/11
            </span>
            <h2 className="text-lg font-semibold text-stone-950">
              IG Carousel Sistem Promptu
            </h2>
            <p className="text-sm text-stone-600">
              Instagram carousel&apos;leri için kopyala-yapıştır hazır sistem
              promptu.
            </p>
            <Link
              href="/cowork/karusel-promptu"
              className="text-sm font-medium text-stone-900 underline underline-offset-2"
            >
              Promptu görüntüle ve kopyala →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-stone-500">
              Gün 11/11
            </span>
            <h2 className="text-lg font-semibold text-stone-950">
              Bültenimi Tara Promptu
            </h2>
            <p className="text-sm text-stone-600">
              Gmail&apos;deki bültenleri kişisel bültene, Reel
              hook&apos;larına ve LinkedIn taslaklarına dönüştüren prompt.
            </p>
            <Link
              href="/cowork/newsletter-intelligence"
              className="text-sm font-medium text-stone-900 underline underline-offset-2"
            >
              Promptu görüntüle ve kopyala →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
