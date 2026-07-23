import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Hakkımda",
  "Bilge Gül Koç'un kurumsaldan çıkış hikayesi ve yazılımcı-anne yolculuğu."
);

export default function HakkimdaPage() {
  return (
    <Section>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
          Hakkımda
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-stone-600">
          [Kurumsaldan çıkış hikayesi buraya gelecek]
        </p>
        <p className="max-w-xl text-base leading-relaxed text-stone-600">
          [Yazılımcı-anne yolculuğu buraya gelecek]
        </p>
      </div>
    </Section>
  );
}
