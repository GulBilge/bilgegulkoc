import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Proje Keşfi",
  "Yazılım otomasyon projen için uygun bir zaman seç, birlikte kısa bir proje keşfi görüşmesi yapalım."
);

export default function ProjeKesfiPage() {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Proje Keşfi
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Yazılım otomasyon projen için nereden başlayacağını birlikte
            netleştirelim. Aşağıdan uygun bir zaman seç, kısa bir proje keşfi
            görüşmesinde ihtiyacını dinleyip yol haritasını konuşalım.
          </p>
        </div>

        <CalendlyEmbed />
      </div>
    </Section>
  );
}
