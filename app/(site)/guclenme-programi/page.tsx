import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { GuclenmeProgramiForm } from "@/components/sections/GuclenmeProgramiForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Yapay Zeka İle Güçlenme Programı",
  "Uzman kadınlar için yapay zeka araçlarını işine katmayı öğrendiğin program. Ön kayıt formunu doldur, detayları ilk sen öğren."
);

export default function GuclenmeProgramiPage() {
  return (
    <>
      <Section>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
              Yapay Zeka İle Güçlenme Programı
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-stone-600">
              Kendi işini yürüten kadınların yapay zeka araçlarını işine
              katmasına, adım adım ve güvenle ilerlemesine odaklanan bir
              program. Ön kayıt formunu doldur, program detayları netleştiğinde
              ilk sen haber al.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-stone-950">
              Kimler için
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-stone-600">
              Kendi işini yürüten kadınlar koçlar, diyetisyenler, eğitmenler,
              danışmanlar, terapistler ve daha fazlası. Yapay zeka araçlarını
              işine katmak isteyen, adım adım ilerlemek isteyen herkes için.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-stone-950">
              Nasıl işliyor
            </h2>
            <ol className="flex max-w-xl flex-col gap-2 text-base leading-relaxed text-stone-600">
              <li>1. Ön kayıt formunu doldurursun.</li>
              <li>2. Program tarihi ve detayları netleştiğinde sana ulaşırım.</li>
              <li>3. Kontenjan ve ücret bilgisi bu aşamada paylaşılır.</li>
            </ol>
            <p className="max-w-xl text-sm leading-relaxed text-stone-500">
              Ön kayıt bir ödeme veya kesin kayıt anlamına gelmez, sadece yer
              ayırtma ve bilgilendirme içindir.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-stone-950">
              Ön kayıt formu
            </h2>
            <div className="max-w-xl">
              <GuclenmeProgramiForm />
            </div>
          </div>

          <p className="max-w-xl text-xs leading-relaxed text-stone-400">
            Form verileri yalnızca bu ön kaydı değerlendirmek için kullanılır,
            üçüncü kişilerle paylaşılmaz.
          </p>
        </div>
      </Section>
    </>
  );
}
