import type { Metadata } from "next";
import Link from "next/link";
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
          Yıllarca kurumsal hayatın içinde yazılım mühendisi olarak
          çalıştım. Büyük sistemler kurdum, karmaşık problemleri çözdüm —
          ama bir noktada fark ettim ki kurduğum bu sistemler kendi
          hayatıma hiç yer bırakmıyordu.
        </p>
        <p className="max-w-xl text-base leading-relaxed text-stone-600">
          Kızım doğduğunda yüksek lisansımı yeni bitirmiştim. Kurumsal
          hayatı ona bakmak için bıraktım. Anne olmak harikaydı, gerçekten
          öyleydi — ama duramadım. Bebeğim kucağımda uyurken bile aklıma
          sürekli yeni fikirler üşüşüyordu; içimdeki üretme çağrısını
          susturamadım.
        </p>
        <p className="max-w-xl text-base leading-relaxed text-stone-600">
          Kurumsaldan çıkıp evden, kendi kurallarımla sürdürülebilir bir
          profesyonel pratik kurmaya karar verdim. Bugün yazılım
          mühendisliği ve yapay zeka mimarlığı bilgimi, benim gibi evden
          çalışan, işini büyütmek isteyen ama sistemi olmayan uzman
          kadınlara taşıyorum. Koçlar, danışmanlar, eğitmenler,
          terapistler — kaplarına sığamayan ama görünürlük ve mahremiyet
          kaygısı da taşıyan kadınlar.
        </p>
        <p className="max-w-xl text-base leading-relaxed text-stone-600">
          Bunu dışarıdan bir uzman gibi değil, aynı gerçekliği yaşayan
          biri olarak yapıyorum. Sabahın erken saatleri, bölünmüş dikkat,
          &quot;yetebilir miyim&quot; sorusu — hepsini biliyorum. Bu yüzden
          kurduğum sistemler teoride değil, gerçek hayatta işliyor.
        </p>
        <p className="max-w-xl text-sm text-stone-500">
          Bu yolculuğu daha detaylı okumak istersen:{" "}
          <Link
            href="/yazilar/bir-yil-once-ile-simdi-arasinda"
            className="font-medium text-stone-900 underline underline-offset-2"
          >
            Bir yıl önce ile şimdi arasında
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
