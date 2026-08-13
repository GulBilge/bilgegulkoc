import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { CopyPromptBlock } from "@/components/CopyPromptBlock";
import { pageMetadata } from "@/lib/metadata";
import { instagramAnalyticsDashboardPrompt } from "@/lib/cowork-prompts";

export const metadata: Metadata = pageMetadata(
  "Instagram Analiz Panosu Promptu — Cowork",
  "Windsor.ai bağlayıcısıyla son 50 Instagram gönderini analiz edip interaktif bir HTML pano çıkaran Claude Cowork promptu."
);

export default function InstagramAnalizPanosuPage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Link
            href="/cowork/promptlar"
            className="text-sm font-medium text-stone-500 hover:text-stone-900"
          >
            ← Tüm promptlar
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Instagram Analiz Panosu Promptu
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">
            Windsor.ai bağlayıcısını Claude Cowork&apos;e ekledikten sonra bu
            promptu yapıştır. Son 50 gönderini (Reels, Carousel, Post)
            çekiyor; her biri için izlenme, beğeni, yorum, kayıt, paylaşım,
            hook türü ve konu başlığı gibi verileri çıkarıp tek dosyalık,
            interaktif bir HTML pano hazırlıyor.
          </p>
        </div>

        <dl className="flex max-w-2xl flex-col gap-2 rounded-xl bg-stone-100 p-4 text-sm text-stone-700">
          <div className="flex gap-2">
            <dt className="font-semibold text-stone-900">Gereken:</dt>
            <dd>Claude Cowork · Windsor.ai bağlayıcısı (Instagram Insights)</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold text-stone-900">Çıktı:</dt>
            <dd>
              En iyi/en zayıf 3 gönderi, işe yarayan 3 örüntü, geri tutan 3
              hata, denenecek 5 konu, 30 günlük 3 format deneyi.
            </dd>
          </div>
        </dl>

        <CopyPromptBlock text={instagramAnalyticsDashboardPrompt} />
      </div>
    </Section>
  );
}
