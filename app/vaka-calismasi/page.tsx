import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Vaka Çalışması",
  "Yakında: tamamlanan bir proje üzerinden detaylı vaka çalışması."
);

export default function VakaCalismasiPage() {
  return (
    <Section>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
          Vaka Çalışması
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-stone-600">
          Yakında burada olacak.
        </p>
      </div>
    </Section>
  );
}
