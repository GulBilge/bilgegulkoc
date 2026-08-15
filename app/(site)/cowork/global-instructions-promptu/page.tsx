import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CopyPromptBlock } from "@/components/CopyPromptBlock";
import { pageMetadata } from "@/lib/metadata";
import { globalInstructionsInterviewPrompt } from "@/lib/cowork-prompts";

export const metadata: Metadata = pageMetadata(
  "Global Instructions Röportaj Promptu — Cowork",
  "Claude'un seni 7 soruyla tanıyıp Cowork Global Instructions için kalıcı bir hafıza metni çıkardığı prompt."
);

export default function GlobalInstructionsPromptuPage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Global Instructions Röportaj Promptu
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">
            Bu promptu yeni bir sohbette Claude&apos;a yapıştır. Claude sana
            tek tek 7 soru sorup kim olduğunu, kime hizmet ettiğini ve nasıl
            konuşman gerektiğini öğreniyor; sonunda Settings &gt; Cowork &gt;
            Global Instructions&apos;a yapıştırabileceğin tek bir &quot;kalıcı
            talimat&quot; metni çıkarıyor.
          </p>
        </div>

        <CopyPromptBlock text={globalInstructionsInterviewPrompt} />
      </div>
    </Section>
  );
}
