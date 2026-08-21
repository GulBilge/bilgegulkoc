import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CopyPromptBlock } from "@/components/CopyPromptBlock";
import { pageMetadata } from "@/lib/metadata";
import { voiceInterviewPrompt } from "@/lib/cowork-prompts";

export const metadata: Metadata = pageMetadata(
  "Yazı Sesi Röportaj Promptu — Cowork",
  "Claude'un seni 8 soruyla tanıyıp kendi yazı sesini tanımlayan bir dosya çıkardığı, her metinden önce ona okutabileceğin prompt."
);

export default function YaziSesiPromptuPage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Yazı Sesi Röportaj Promptu
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">
            Bu promptu yeni bir sohbette Claude&apos;a yapıştır. Claude sana
            tek tek 8 soru sorup ne iş yaptığını, kime hizmet ettiğini,
            hangi kelimeleri asla kullanmadığını ve seni taklit edilmez
            yapan şeyi öğreniyor; sonunda &quot;benim-sesim.md&quot; adında
            tek bir dosya çıkarıyor. Bu dosyayı bundan sonra her metin
            yazdırmadan önce Claude&apos;a okutabilirsin.
          </p>
        </div>

        <CopyPromptBlock text={voiceInterviewPrompt} />
      </div>
    </Section>
  );
}
