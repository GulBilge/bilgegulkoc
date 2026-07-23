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
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Ne Yapıyorum
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Çoğu uzman kadın bir noktaya kadar tek başına gelir: müşterisi
            var, geliri var — ama günün büyük kısmı mesajlara cevap
            yetiştirmekle, aynı soruları tekrar tekrar açıklamakla, hangi
            işin öncelikli olduğuna karar vermekle geçiyor. Sistem yok,
            hepsi kafada ve mesaj kutusunda.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-stone-950">
            Kimin için
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Bu yaklaşım özellikle koçlar, danışmanlar, eğitmenler ve
            terapistler için: işi büyüyen ama günlük operasyonun altında
            kalan, tek başına çalışan uzman kadınlar için kurulmuş.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-stone-950">
            Nasıl çalışıyorum
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Önce Snapshot yaklaşımıyla iş akışına kısa ve odaklı bir bakış
            atıyorum — nerede zaman kaybediyorsun, hangi mesajlar seni asıl
            işinden alıkoyuyor, neyi otomatikleştirmek gerçekten anlamlı
            olur. Bu hazır bir teklif kalıbı değil, senin işine özel bir
            okuma.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Uygun olduğunda, mesajlarını karşılayan ve seni ön eleyen bir
            &quot;lead qualification agent&quot; kuruyoruz — sen uyumadan
            önce gelen mesajları senin yerine karşılayan, önceliklendiren
            bir sistem.
          </p>
        </div>
      </div>
    </Section>
  );
}
