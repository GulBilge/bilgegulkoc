import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CopyPromptBlock } from "@/components/CopyPromptBlock";
import { pageMetadata } from "@/lib/metadata";
import { newsletterIntelligencePrompt } from "@/lib/cowork-prompts";

export const metadata: Metadata = pageMetadata(
  "Newsletter Intelligence Promptu — Cowork",
  "Gmail'deki bültenleri kişisel bültene, Reel hook'larına ve LinkedIn taslaklarına dönüştüren Claude Cowork promptu."
);

const fillIns = [
  { yer: "[KİM OLDUĞUN]", ne: "Mesleğin ve alanın", ornek: "yapay zeka eğitmeniyim" },
  { yer: "[KİTLEN]", ne: "Kime içerik ürettiğin", ornek: "evden çalışan kadın eğitmenler" },
  { yer: "[İLGİ ALANLARIN]", ne: "Hangi konular önemli", ornek: "AI modelleri, no-code araçlar" },
  { yer: "[DÖNEM]", ne: "Kaç günlük tarama", ornek: "30d (7d, 90d de olur)" },
  { yer: "[PLATFORMLAR]", ne: "İçerik ürettiğin yerler", ornek: "LinkedIn ve Instagram Reels" },
];

export default function NewsletterIntelligencePage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Newsletter Intelligence — Prompt Şablonu
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">
            Gmail&apos;de biriken bültenleri okuyup üç şeye dönüştürür:
            okunacak bir kişisel bülten, yayına hazır Reel hook&apos;ları ve
            LinkedIn taslakları.
          </p>
        </div>

        <dl className="flex max-w-2xl flex-col gap-2 rounded-xl bg-stone-100 p-4 text-sm text-stone-700">
          <div className="flex gap-2">
            <dt className="font-semibold text-stone-900">Gereken:</dt>
            <dd>
              Claude Cowork · Gmail bağlayıcısı (connector) · isteğe bağlı
              Google Drive bağlayıcısı
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold text-stone-900">Süre:</dt>
            <dd>3-5 dakika</dd>
          </div>
        </dl>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Kullanmadan önce doldur
          </h2>
          <p className="max-w-2xl text-sm text-stone-600">
            Promptun içindeki köşeli parantezli yerleri kendine göre
            değiştir.
          </p>
          <div className="max-w-2xl overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-stone-500">
                  <th className="px-3 py-2 font-medium">Yer</th>
                  <th className="px-3 py-2 font-medium">Ne yazacaksın</th>
                  <th className="px-3 py-2 font-medium">Örnek</th>
                </tr>
              </thead>
              <tbody>
                {fillIns.map((row) => (
                  <tr key={row.yer} className="border-b border-stone-100 last:border-0">
                    <td className="px-3 py-2 font-mono text-xs text-stone-800">{row.yer}</td>
                    <td className="px-3 py-2 text-stone-700">{row.ne}</td>
                    <td className="px-3 py-2 text-stone-500">{row.ornek}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">Prompt</h2>
          <CopyPromptBlock text={newsletterIntelligencePrompt} />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">İpuçları</h2>
          <ul className="flex max-w-2xl flex-col gap-2 text-sm leading-relaxed text-stone-600">
            <li>
              <strong className="text-stone-900">Az sonuç çıkarsa panik yapma.</strong>{" "}
              İlk sorgu genelde 2-3 mail bulur. Şablon zaten &quot;geniş
              sorguyla tekrar ara&quot; diyor — Claude&apos;un bunu yapmasını
              bekle. Yapmazsa &quot;okunmuşlara da bak&quot; demen yeterli.
            </li>
            <li>
              <strong className="text-stone-900">Birden fazla Gmail hesabın varsa</strong>{" "}
              hangisinin bağlı olduğunu kontrol et. Claude hangi hesabı
              taradığını raporun başında yazacak; beklediğin hesap değilse
              bağlayıcı ayarlarından değiştir.
            </li>
            <li>
              <strong className="text-stone-900">Drive&apos;a kaydettirmek istersen</strong>{" "}
              sonuna ekle: &quot;Bu dosyaları Drive&apos;ıma da yükle, dosya
              adlarının başına YYYY-AA-GG formatında tarih koy.&quot;
            </li>
            <li>
              <strong className="text-stone-900">Tekrar kullanacaksan skill yap.</strong>{" "}
              Bir kere çalıştıktan sonra &quot;bunu skill olarak kaydet&quot;
              de — bir daha promptu yapıştırmana gerek kalmaz, &quot;bültenlerimi
              tara&quot; demen yeter.
            </li>
            <li>
              <strong className="text-stone-900">Otomatiğe bağla.</strong>{" "}
              &quot;Her Pazartesi 08:00&apos;de otomatik çalıştır&quot;
              dersen zamanlanmış görev kurar.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Beklenti yönetimi
          </h2>
          <ul className="flex max-w-2xl flex-col gap-2 text-sm leading-relaxed text-stone-600">
            <li>
              Gelen kutunda gerçekten bülten yoksa çıktı zayıf olur. En az
              5-6 aktif bülten aboneliği gerekir.
            </li>
            <li>
              Şirketlerin kendi duyuruları abartılı olabilir. Şablon
              temkinli not eklettiriyor ama gözden geçir.
            </li>
            <li>
              Üretilen içerik taslaktır. Yayınlamadan önce kendi sesinle bir
              kez daha oku.
            </li>
          </ul>
        </div>

        <p className="text-xs text-stone-400">
          Bu şablon 12 Ağustos 2026&apos;da gerçek bir Cowork oturumundan
          çıkarıldı. Serbestçe paylaşabilirsin.
        </p>
      </div>
    </Section>
  );
}
