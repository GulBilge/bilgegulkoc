import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CopyPromptBlock } from "@/components/CopyPromptBlock";
import { pageMetadata } from "@/lib/metadata";
import { karuselSystemPrompt } from "@/lib/cowork-prompts";

export const metadata: Metadata = pageMetadata(
  "Karusel Promptu — Cowork",
  "Instagram carousel'leri için kopyala-yapıştır hazır sistem promptu."
);

export default function KaruselPromptuPage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            IG Carousel Sistem Promptu
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">
            Aşağıdaki promptu kopyalayıp Claude&apos;a yapıştır. Çift süslü
            parantez içindeki alanları ({"{{MARKA_ADI}}"}, {"{{KONU}}"} gibi)
            kendi markanın bilgileriyle değiştir.
          </p>
        </div>

        <CopyPromptBlock text={karuselSystemPrompt} />
      </div>
    </Section>
  );
}
