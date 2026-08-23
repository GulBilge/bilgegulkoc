import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CopyPromptBlock } from "@/components/CopyPromptBlock";
import { pageMetadata } from "@/lib/metadata";
import { contentIdeasPrompts } from "@/lib/cowork-prompts";

export const metadata: Metadata = pageMetadata(
  "60 İçerik Fikri Promptu — Cowork",
  "ChatGPT veya Claude ile tek oturumda 60 Instagram carousel fikri çıkaran, sırayla kullanılacak 7 promptluk seri."
);

export default function IcerikFikriPromptuPage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            60 İçerik Fikri Promptu
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">
            Bu promptları sırayla kullan. En iyi sonuç için köşeli parantez
            içlerini kendi işine göre doldur.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {contentIdeasPrompts.map((item) => (
            <div key={item.baslik} className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-stone-950">
                {item.baslik}
              </h2>
              <CopyPromptBlock text={item.prompt} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 rounded-xl bg-stone-100 p-4 text-sm leading-relaxed text-stone-600">
          <p>
            <strong className="text-stone-900">Küçük öneri:</strong> Bu
            promptları tek tek kullanırsan daha kaliteli sonuç alırsın.
            Direkt 60 fikir istemek hızlıdır ama en iyi sonuç için önce
            sesini ve hedef kitleni netleştirmen gerekir.
          </p>
          <p>Kolay gelsin ✨</p>
        </div>
      </div>
    </Section>
  );
}
