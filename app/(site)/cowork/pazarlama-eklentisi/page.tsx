import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { CopyPromptBlock } from "@/components/CopyPromptBlock";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Pazarlama Eklentisini Kendi İşine Göre Ayarlamak — Cowork",
  "Hazır bir pazarlama eklentisini kurumsal ayarlarından çıkarıp kendi markana göre nasıl özelleştirirsin. Adım adım, teknik bilgi gerektirmeyen rehber."
);

const skills = [
  { command: "/draft-content", ne: "Blog yazısı, sosyal medya, e-posta metni taslağı" },
  { command: "/campaign-plan", ne: "Kampanya planı ve içerik takvimi" },
  { command: "/brand-review", ne: "Yazdığın metnin marka sesine uyup uymadığını denetler" },
  { command: "/content-creation", ne: "Kanal bazlı içerik üretimi" },
  { command: "/performance-report", ne: "Performans raporu" },
  { command: "/competitive-brief", ne: "Rakip analizi" },
  { command: "/seo-audit", ne: "Site içeriği denetimi" },
  { command: "/email-sequence", ne: "E-posta serisi kurgusu" },
];

const ozet = [
  "Artı menüsü, Plugins, Browse plugins",
  "Marketing eklentisini seç",
  "Install ile kur",
  '"Customize the marketing plugin for me based on my company" yaz',
  "Sorulara cevap ver",
  "Save plugin ile kaydet",
];

function GuideImage({ alt }: { alt: string }) {
  return (
    <div className="flex aspect-[9/16] max-w-xs flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-4 text-center text-xs text-stone-400">
      <span>Ekran görüntüsü eklenecek</span>
      <span className="text-stone-500">{alt}</span>
    </div>
  );
}

function GuideScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="max-w-xs overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={1080}
        height={1920}
        sizes="(min-width: 640px) 320px, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}

export default function PazarlamaEklentisiPage() {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <Link
            href="/cowork"
            className="text-sm font-medium text-stone-500 hover:text-stone-900"
          >
            ← Claude Cowork&apos;e Giriş Serisi
          </Link>
          <span className="text-xs font-semibold text-stone-500">
            Video 9 — Rehber
          </span>
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">
            Pazarlama Eklentisini Kendi İşine Göre Ayarlamak
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">
            Claude Cowork&apos;te hazır eklentiler var. Bunlardan biri
            pazarlama eklentisi (Marketing plugin). İçinde blog yazısı,
            kampanya planı, marka sesi denetimi gibi yedi hazır beceri
            geliyor.
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600">
            Ama bu eklenti kurumsal pazarlama ekipleri düşünülerek
            hazırlanmış. Kurduğunda karşına Slack, HubSpot, Figma gibi senin
            hiç kullanmadığın araçlar çıkıyor. İyi haber şu: eklentiyi kendi
            işine göre yeniden ayarlayabiliyorsun. Üstelik tek bir cümleyle.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Başlamadan önce
          </h2>
          <p className="max-w-2xl text-sm text-stone-600">
            Bu adımları uygulamak için elinde şunlar olmalı: Claude Cowork
            erişimi ve kendi işine ait bir proje klasörü (içinde markanı
            anlatan bilgiler olsun). Proje klasörün yoksa da olur — o zaman
            Claude sana daha çok soru soracak, cevaplarını kendin yazacaksın.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Adım 1: Eklenti menüsünü aç
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Sohbet kutusundaki artı işaretine tıkla. Açılan menüde{" "}
            <strong className="text-stone-900">Plugins</strong> (Eklentiler)
            seçeneğini bul, üzerine gel. Yan tarafta çıkan listeden{" "}
            <strong className="text-stone-900">Browse plugins</strong>{" "}
            (Eklentilere göz at) seçeneğine tıkla.
          </p>
          <GuideScreenshot
            src="/images/cowork/pazarlama-eklentisi/01-menu.jpg"
            alt="Cowork sohbet kutusunda artı işaretine tıklanıyor"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Adım 2: Pazarlama eklentisini bul
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Karşına eklenti dizini çıkıyor. Anthropic sekmesinde hazır
            eklentiler listeleniyor: Design, Small Business, Productivity,
            Marketing, Engineering, Data, Finance ve diğerleri.{" "}
            <strong className="text-stone-900">Marketing</strong> kutusuna
            tıkla.
          </p>
          <GuideScreenshot
            src="/images/cowork/pazarlama-eklentisi/02-plugin-listesi.jpg"
            alt="Eklenti dizini, Anthropic sekmesinde listelenen hazır eklentiler ve Marketing kutusu"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Adım 3: İçinde ne olduğuna bak, sonra kur
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Açılan sayfada eklentinin ne yaptığı yazıyor. Aşağıda iki bölüm
            önemli.
          </p>
          <p className="text-sm font-medium text-stone-800">
            Beceriler (Skills) — eklentinin içinde gelen sekiz hazır komut:
          </p>
          <div className="max-w-2xl overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 text-stone-500">
                  <th className="px-3 py-2 font-medium">Komut</th>
                  <th className="px-3 py-2 font-medium">Ne işe yarıyor</th>
                </tr>
              </thead>
              <tbody>
                {skills.map((row) => (
                  <tr key={row.command} className="border-b border-stone-100 last:border-0">
                    <td className="px-3 py-2 font-mono text-xs text-stone-800">{row.command}</td>
                    <td className="px-3 py-2 text-stone-700">{row.ne}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            <strong className="text-stone-900">Bağlantılar (Connectors)</strong>{" "}
            — eklentinin bağlanabildiği dış araçlar. Burada Canva, Slack,
            Figma, HubSpot, Notion gibi on üç araç görünüyor. Çoğunu
            kullanmıyorsan sorun değil, bir sonraki adımda bunları
            temizleyeceğiz.
          </p>
          <GuideScreenshot
            src="/images/cowork/pazarlama-eklentisi/03-marketing-detay.jpg"
            alt="Marketing eklentisinin detay sayfası, becerileri ve bağlantıları"
          />
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Sağ üstteki <strong className="text-stone-900">Install</strong>{" "}
            (Kur) düğmesine bas. Kurulum birkaç saniye sürüyor.
          </p>
          <GuideScreenshot
            src="/images/cowork/pazarlama-eklentisi/03-yukleniyor.jpg"
            alt="Marketing eklentisi kuruluyor"
          />
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Kurduktan sonra aynı düğmenin yerinde{" "}
            <strong className="text-stone-900">Manage</strong> (Yönet) ve{" "}
            <strong className="text-stone-900">Remove</strong> (Kaldır)
            yazacak.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Adım 4: Eklentiyi kendine göre ayarla
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Şimdi asıl kısım. Yeni bir sohbet aç ve şu cümleyi yaz:
          </p>
          <CopyPromptBlock text='Customize the "marketing" plugin for me based on my company' />
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Türkçesi: &quot;Pazarlama eklentisini benim işime göre
            özelleştir.&quot; İngilizce yazmak zorunda değilsin, Türkçe de
            yazabilirsin.
          </p>
          <GuideScreenshot
            src="/images/cowork/pazarlama-eklentisi/04-komut.jpg"
            alt="Cowork sohbetinde özelleştirme komutu yazılmış"
          />
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Claude bu isteği alınca eklenti özelleştirme becerisini devreye
            sokuyor ve sana sorular sormaya başlıyor.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-lg font-semibold text-stone-950">
            Adım 5: Sorulara cevap ver
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Burası rehberin en önemli kısmı. Claude tahmin yürütmüyor, sana
            soruyor. Verdiğin cevaplar eklentinin nasıl çalışacağını
            belirliyor.
          </p>

          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-stone-900">
              Soru 1: Hangi kanallarda içerik üretiyorsun
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
              Seçenekler arasından işaretliyorsun. Bu cevap, eklentinin
              LinkedIn ve e-posta bülteni için gereksiz içerik üretmesini
              engelliyor.
            </p>
            <GuideImage alt="Kanal seçimi sorusu, Instagram seçeneği işaretlenmiş" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-stone-900">
              Soru 2: Rakip analizi kimleri kapsasın
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
              Rakip analizi becerisinin kimlere bakacağını soruyor. Türkiye
              &apos;deki eğitmenler, kadın girişimciler, global yapay zeka
              eğitmenleri gibi seçenekler geliyor.
            </p>
            <GuideScreenshot
              src="/images/cowork/pazarlama-eklentisi/06-soru-rakip.jpg"
              alt="Rakip analizi becerisi için hedef seçimi sorusu"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-stone-900">
              Soru 3: Performans raporu hangi verilere baksın
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
              Instagram etkileşim ve erişim gibi seçenekler var. E-posta
              açılma oranı, kayıt ve satış sayıları gibi başka şeyleri de
              seçebilirsin. Bir seçeneği anlamıyorsan boş bırakabilirsin —
              &quot;Şimdilik ölçüm yok&quot; gibi bir seçenek de var.
            </p>
            <GuideScreenshot
              src="/images/cowork/pazarlama-eklentisi/07-soru-rapor.jpg"
              alt="Performans raporu için veri kaynağı seçimi sorusu"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Adım 6: Sonucu gözden geçir ve kaydet
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Sorular bittiğinde Claude eklentinin yeni halini özetliyor.
            Örnek bir ayrım şöyle çıkabilir: kalan bağlantılar (Canva,
            Supermetrics, Google Drive, Gmail gibi gerçekten kullandıkların)
            ve çıkarılan bağlantılar (Slack, HubSpot, Figma gibi kurumsal
            ekipler için gelip senin karşılığın olmayanlar).
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Aşağıda <strong className="text-stone-900">Save plugin</strong>{" "}
            (Eklentiyi kaydet) düğmesi çıkıyor. Ona basınca özelleştirilmiş
            hali kaydediliyor.
          </p>
          <GuideScreenshot
            src="/images/cowork/pazarlama-eklentisi/08-ozet.jpg"
            alt="Claude'un çıkardığı özet: kalan bağlantılar, çıkarılan bağlantılar ve Save plugin düğmesi"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Sonradan değiştirmek istersen
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
            Özelleştirme sırasında Claude bir marka dosyası oluşturuyor.
            Sesin ya da işinin odağı değişirse tek yapman gereken o dosyayı
            düzenlemek. Sekiz beceri de otomatik olarak yeni haline göre
            çalışıyor. Yani her seferinde baştan kurmuyorsun.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-stone-950">
            Bilmen gereken sınırlar
          </h2>
          <ul className="flex max-w-2xl flex-col gap-2 text-sm leading-relaxed text-stone-600">
            <li>
              <strong className="text-stone-900">Görsel üretmiyor.</strong>{" "}
              Eklenti metin üretiyor, görsel için Canva gibi bir araca
              ihtiyacın var.
            </li>
            <li>
              <strong className="text-stone-900">
                Konu başlıkları jenerik gelebilir.
              </strong>{" "}
              Eklenti senin hedef kitleni ve tonunu tam bilmiyor. İskeleti o
              kuruyor, içini sen dolduruyorsun.
            </li>
            <li>
              <strong className="text-stone-900">
                E-posta serileri şimdilik kopyala yapıştır.
              </strong>{" "}
              Bir e-posta pazarlama aracına bağlarsan bu kısım da
              otomatikleşiyor.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 rounded-xl bg-stone-100 p-4">
          <h2 className="text-lg font-semibold text-stone-950">Özet</h2>
          <ol className="flex flex-col gap-1 text-sm leading-relaxed text-stone-700">
            {ozet.map((step, i) => (
              <li key={i}>
                {i + 1}. {step}
              </li>
            ))}
          </ol>
          <p className="text-sm text-stone-600">
            Toplam süre: sorulara ne kadar düşünerek cevap verdiğine bağlı
            olarak on ile yirmi dakika arası.
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-stone-200 pt-6 text-sm text-stone-500">
          <p>
            Bu rehber eklentiyi kendi işine göre ayarlamayı anlatıyor. Bir
            sonraki adım, ayarlanmış eklentiyle gerçek bir kampanya planı
            çıkarmak.
          </p>
          <Link
            href="https://instagram.com/teknikbilgekoc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-stone-900 underline underline-offset-2"
          >
            Sorularını Instagram&apos;dan ilet →
          </Link>
        </div>
      </div>
    </Section>
  );
}
