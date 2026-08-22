import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { DanismanlikForm } from "@/components/sections/DanismanlikForm";
import { DanismanlikHiddenForm } from "@/components/DanismanlikHiddenForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Danışmanlık",
  "Tek konu, tek problem, net bir yol haritası. Yapay zeka araçlarıyla çözüm odaklı danışmanlık talep formu."
);

export default function DanismanlikPage() {
  return (
    <>
      <Section>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
              Danışmanlık
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-stone-600">
              Tek konu, tek problem, net bir yol haritası. İşinde takıldığın
              tek bir noktayı yapay zeka araçlarıyla nasıl çözeceğini birlikte
              açıyoruz ve oradan nasıl ilerleyeceğini elinde somut bir
              planla bitiriyorsun.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-stone-950">
              Kimler için
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-stone-600">
              Kendi işini yürüten herkes koçlar, diyetisyenler, eğitmenler,
              danışmanlar, terapistler ve daha fazlası. İşinde takıldığın tek
              bir noktayı yapay zeka araçlarını kullanarak çözmek istiyorsan,
              buradasın demektir.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-stone-950">
              Nasıl işliyor
            </h2>
            <ol className="flex max-w-xl flex-col gap-2 text-base leading-relaxed text-stone-600">
              <li>1. Formu doldurursun.</li>
              <li>2. Kapsamı birlikte netleştiririz.</li>
              <li>3. Uygunsa tarih ve ödeme bilgisi paylaşılır.</li>
            </ol>
            <p className="max-w-xl text-sm leading-relaxed text-stone-500">
              Görüşmenin kaç dakika süreceği ve ücret bilgisi, netleştirme
              görüşmesinden sonra paylaşılır.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-stone-950">
              Kimler için uygun değil
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-stone-600">
              Kurumsal entegrasyon projeleri, hazır yazılım desteği, uzun
              vadeli ajans işleri ve yapay zeka araçlarıyla çözülemeyecek
              problemler için doğru adres değilim. Bu talepler için başka bir
              yapıya ihtiyacın var demektir, dürüstçe söylemek isterim.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-stone-950">
              Talep formu
            </h2>
            <div className="max-w-xl">
              <DanismanlikForm />
            </div>
          </div>

          <p className="max-w-xl text-xs leading-relaxed text-stone-400">
            Form verileri yalnızca bu talebi değerlendirmek için kullanılır,
            üçüncü kişilerle paylaşılmaz.
          </p>
        </div>
      </Section>
      <DanismanlikHiddenForm />
    </>
  );
}
