import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CopyPromptBlock } from "@/components/CopyPromptBlock";
import { pageMetadata } from "@/lib/metadata";
import { folderOrganizerPrompt } from "@/lib/cowork-prompts";

export const metadata: Metadata = pageMetadata(
  "Klasör Organize Promptu — Cowork",
  "Cowork'e verdiğin bir klasördeki dosyaları silmeden türüne göre klasörleyip anlaşılır isimlerle yeniden adlandıran prompt."
);

export default function KlasorOrganizePromptuPage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Klasör Organize Promptu
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">
            Claude Cowork&apos;te düzenlemek istediğin klasöre (örneğin
            masaüstüne) erişim verdikten sonra bu promptu yapıştır. Cowork
            önce ne yapacağını liste olarak sana gösterip onayını bekliyor —
            hiçbir dosyayı silmeden, sadece türüne göre klasörleyip anlaşılır
            isimlerle yeniden adlandırıyor.
          </p>
        </div>

        <CopyPromptBlock text={folderOrganizerPrompt} />
      </div>
    </Section>
  );
}
