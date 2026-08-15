import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CopyPromptBlock } from "@/components/CopyPromptBlock";
import { pageMetadata } from "@/lib/metadata";
import { gmailLabelingPrompt } from "@/lib/cowork-prompts";

export const metadata: Metadata = pageMetadata(
  "Gmail Etiketleme Promptu — Cowork",
  "Gmail'ini kendi etiketlerine göre sınıflandırıp eski bültenleri arşivleyen, herkesin kendi kategorilerine göre doldurabileceği Claude Cowork promptu."
);

const fillIns = [
  { yer: "[KAPSAM]", ne: "Taranacak dönem", ornek: "son 12 aylık kapsamda" },
  {
    yer: "[ETİKET 1] – [ETİKET 5]",
    ne: "Kendi 5 etiketin",
    ornek: "Müşteri/İş, Araç & Abonelik, Bülten, Kişisel, Aksiyon Gerekli",
  },
  {
    yer: "[ÖNCELİKLİ ETİKET]",
    ne: "Birden fazla kategoriye uyan mailde hangi etiket kazansın",
    ornek: "Aksiyon Gerekli",
  },
  {
    yer: "[ARŞİVLENECEK ETİKET]",
    ne: "Hangi etiketteki mailler arşivlensin",
    ornek: "Bülten",
  },
  {
    yer: "[ARŞİV EŞİĞİ]",
    ne: "Kaç aydan eski mailler arşivlensin",
    ornek: "6 aydan",
  },
  {
    yer: "[HASSAS KATEGORİLER]",
    ne: "Otomatik karar verilmemesi gereken mail türleri",
    ornek: "Fatura, sözleşme, hukuki veya banka kaynaklı",
  },
  {
    yer: "[İNCELEME ETİKETİ]",
    ne: "Hassas kategorideki maillerin gideceği etiket",
    ornek: "İncelenecek",
  },
];

export default function GmailEtiketlemePromptuPage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Gmail Etiketleme Promptu
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">
            Gmail&apos;ini kendi etiketlerine göre sınıflandırıp eski
            bültenleri geri alınabilir şekilde arşivleyen, hassas mailleri
            (fatura, sözleşme, banka) otomatik karar vermeden ayıran bir
            prompt. Köşeli parantezli yerleri kendi etiketlerinle
            değiştirip Claude Cowork&apos;e yapıştır.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Kullanmadan önce doldur
          </h2>
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
          <CopyPromptBlock text={gmailLabelingPrompt} />
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
          Prompt önce bir etiketleme planı ve özet rapor çıkarır, hiçbir
          şeyi uygulamadan önce senin onayını bekler. Hiçbir mail kalıcı
          olarak silinmez — arşivleme her zaman geri alınabilir.
        </p>
      </div>
    </Section>
  );
}
