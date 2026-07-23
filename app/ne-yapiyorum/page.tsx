import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Ne Yapıyorum",
  "Lead qualification agent ve Snapshot yaklaşımı ile uzman kadınlar için AI sistemleri."
);

export default function NeYapiyorumPage() {
  return (
    <Section>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
          Ne Yapıyorum
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-stone-600">
          [Lead qualification agent / Snapshot yaklaşımı açıklaması buraya
          gelecek]
        </p>
        <p className="max-w-xl text-base leading-relaxed text-stone-600">
          [Semra Hoca arketipi — geliri var, sistemi yok, tek başına çalışan
          uzman kadın — üzerinden anlatım buraya gelecek]
        </p>
      </div>
    </Section>
  );
}
