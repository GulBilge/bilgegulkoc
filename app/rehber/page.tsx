import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const olive = "#6E7A4F";

export const metadata: Metadata = {
  title: { absolute: "Ücretsiz DM Otomasyon Rehberi | Teknik Bilge Koç" },
  description:
    "ManyChat'i hiç kullanmamış biri bile bu adımları takip ederek ilk Instagram DM otomasyonunu kurabilir.",
};

function StepNumber({ n }: { n: string }) {
  return (
    <span
      className={`${montserrat.className} text-4xl font-bold sm:text-5xl`}
      style={{ color: olive }}
      aria-hidden="true"
    >
      {n}
    </span>
  );
}

function StepHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <StepNumber n={n} />
      <h2 className={`${montserrat.className} text-xl font-semibold text-stone-900 sm:text-2xl`}>
        {title}
      </h2>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border-l-4 bg-stone-50 p-4 text-sm leading-relaxed text-stone-700"
      style={{ borderColor: olive }}
    >
      {children}
    </div>
  );
}

function GuideImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={390}
        height={844}
        sizes="(min-width: 640px) 360px, 100vw"
        className="h-auto w-full max-w-sm"
      />
    </div>
  );
}

export default function RehberPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-stone-50 text-stone-800`}>
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-16 px-6 py-16 sm:py-24">
        {/* Başlık */}
        <header className="flex flex-col gap-4">
          <span
            className="w-fit rounded-full px-3 py-1 text-xs font-medium"
            style={{ backgroundColor: `${olive}1a`, color: olive }}
          >
            Ücretsiz Rehber
          </span>
          <h1
            className={`${montserrat.className} text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl`}
          >
            Ücretsiz DM Otomasyon Rehberi
          </h1>
          <p className="text-lg leading-relaxed text-stone-600">
            ManyChat&apos;i hiç kullanmamış biri bile bu adımları takip
            ederek ilk otomasyonunu kurabilir.
          </p>
        </header>

        {/* Bölüm 0 */}
        <section className="flex flex-col gap-4">
          <h2 className={`${montserrat.className} text-lg font-semibold text-stone-900`}>
            Başlamadan önce hazır olması gerekenler
          </h2>
          <Callout>
            Instagram hesabın Profesyonel hesap (İşletme veya İçerik
            Üreticisi) olmalı. Hâlâ değilse: Ayarlar → Hesap → Profesyonel
            Hesaba Geç
          </Callout>
        </section>

        {/* Bölüm 1 */}
        <section className="flex flex-col gap-5">
          <StepHeading n="1" title="ManyChat Hesabı Aç" />
          <ul className="flex flex-col gap-3 text-base leading-relaxed">
            <li>app.manychat.com adresine git</li>
            <li>
              Google veya Facebook ile kayıt ol (Google ile devam etmek
              genelde en pratik seçenek)
            </li>
            <li>
              E-posta doğrulama ekranı gelirse e-postanı gir → Next →
              maildeki kodu onayla
            </li>
          </ul>
          <Callout>
            Google ile kayıt olursan e-posta doğrulama adımı çıkabilir,
            mailini kontrol etmeyi unutma.
          </Callout>
          <GuideImage
            src="/images/rehber/manychat-kayit.jpg"
            alt="ManyChat kayıt ekranı"
          />
        </section>

        {/* Bölüm 2 */}
        <section className="flex flex-col gap-5">
          <StepHeading n="2" title="Instagram'ı Bağla" />
          <ul className="flex flex-col gap-3 text-base leading-relaxed">
            <li>
              &quot;Where would you like to start?&quot; sorusunda kanalı
              seç: Instagram
            </li>
            <li>Connect Via Meta butonuna bas</li>
            <li>Meta Business Suite&apos;te Instagram ile devam et</li>
            <li>
              İzin ekranlarında (İşletmeler / Instagram hesabı / Sayfalar):
              Önerilen — sadece mevcut hesabı seç → Devam. Opsiyonel —
              birden fazla hesabın varsa tüm hesapları seçebilirsin
            </li>
            <li>
              &quot;Review what you&apos;ll share&quot; ekranında
              Kaydet&apos;e bas
            </li>
            <li>
              🎉 &quot;Your Instagram is connected!&quot; ekranını görünce
              bağlantı tamam. Ardından &quot;For myself&quot; (Kendim için)
              seç
            </li>
            <li>
              Kurulum soruları hızlıca geçilebilir — ManyChat birkaç soru
              sorabilir (araçlar, gelir modeli, nereden duydun), en yakın
              seçeneği işaretleyip ilerle, sonradan değişir
            </li>
          </ul>
          <div className="grid gap-4 sm:grid-cols-2">
            <GuideImage
              src="/images/rehber/kanal-secimi.jpg"
              alt="Kanal seçim ekranı"
            />
            <GuideImage
              src="/images/rehber/instagram-baglanti.jpg"
              alt="Instagram bağlantı ekranı"
            />
          </div>
          <GuideImage
            src="/images/rehber/baglanti-basarili.jpg"
            alt="Bağlantı başarılı ekranı"
          />
        </section>

        {/* Bölüm 3 */}
        <section className="flex flex-col gap-5">
          <StepHeading n="3" title="Plan Seç: Ücretsizle Başla" />
          <div className="overflow-x-auto rounded-2xl border border-stone-200">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="bg-stone-100 text-left">
                  <th className="p-3 font-medium text-stone-500"></th>
                  <th className={`${montserrat.className} p-3 font-semibold text-stone-900`}>
                    Ücretsiz Plan
                  </th>
                  <th className={`${montserrat.className} p-3 font-semibold text-stone-900`}>
                    Pro Plan
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fiyat", "$0", "~$15/ay"],
                  ["Kişi", "25 aktif kişiye kadar", "Sınırsız kişi"],
                  ["Otomasyon", "4 aktif otomasyon", "Sınırsız otomasyon"],
                  ["Kanal", "2 kanal (Instagram + 1)", "—"],
                  ["Inbox", "Temel inbox", "—"],
                  ["Takip isteği", "—", "Takip etme isteği gönder"],
                  ["E-posta toplama", "—", "✓"],
                  ["Marka", "ManyChat markası görünür", "Marka olmadan"],
                ].map(([label, free, pro]) => (
                  <tr key={label} className="border-t border-stone-200">
                    <td className="p-3 font-medium text-stone-500">{label}</td>
                    <td className="p-3 text-stone-700">{free}</td>
                    <td className="p-3 text-stone-700">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm leading-relaxed text-stone-600">
            İlk kurulum için ücretsiz plan tam yeterli. Takipçin arttıkça ve
            otomasyon ihtiyacın genişledikçe Pro&apos;ya geçebilirsin. (14
            günlük ücretsiz Pro denemesi de bulunabiliyor.)
          </p>
        </section>

        {/* Bölüm 4 */}
        <section className="flex flex-col gap-8">
          <StepHeading n="4" title="İlk Otomasyonunu Kur" />

          <div className="flex flex-col gap-3">
            <h3 className={`${montserrat.className} text-base font-semibold text-stone-900`}>
              4.1 Tetikleyici: &quot;DMs you&quot;
            </h3>
            <p className="text-base leading-relaxed">
              &quot;When someone&quot; bölümünde DMs you seç:
            </p>
            <ul className="flex flex-col gap-2 text-base leading-relaxed">
              <li>comments on → gönderine yorum yaparsa</li>
              <li>replies to story → hikayene yanıt verirse</li>
              <li>
                <strong>DMs you → sana DM atarsa ✓ (bunu seç)</strong>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className={`${montserrat.className} text-base font-semibold text-stone-900`}>
              4.2 Anahtar kelimeyi gir
            </h3>
            <p className="text-base leading-relaxed">
              &quot;And it includes — a specific word&quot; seçeneğini seç
              ve kelimeleri ekle: REHBER, Rehber, rehber (virgülle ayırarak
              birden fazla kelime girebilirsin)
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className={`${montserrat.className} text-base font-semibold text-stone-900`}>
              4.3 Açılış mesajını yaz (Opening DM)
            </h3>
            <p className="text-base leading-relaxed">
              Sıcak ve samimi bir mesaj + buton ekle. Örnek mesaj:
            </p>
            <blockquote
              className="rounded-xl p-4 text-base italic leading-relaxed text-stone-700"
              style={{ backgroundColor: `${olive}0d` }}
            >
              &quot;Merhaba! &apos;Acaba bu mesaja döndüm mü?&apos; stresini
              geride bırakmaya hazır mısın? Arka planda senin yerine tık tık
              çalışacak o ilk sistemi nasıl kuracağını adım adım anlattığım
              rehber burada. Sistemi kurarken kendine güzel bir kahve almayı
              unutma.&quot;
            </blockquote>
            <p className="text-sm text-stone-500">
              Buton metni önerisi:{" "}
              <span
                className="rounded-full px-3 py-1 text-sm font-medium"
                style={{ backgroundColor: `${olive}1a`, color: olive }}
              >
                🎁 Rehberi Aç
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className={`${montserrat.className} text-base font-semibold text-stone-900`}>
              4.4 Link içeren mesajı ekle
            </h3>
            <p className="text-base leading-relaxed">
              &quot;They will get — a DM with a link&quot; bölümünde
              mesajını yaz ve link butonunu ekle. Örnek:
            </p>
            <blockquote
              className="rounded-xl p-4 text-base italic leading-relaxed text-stone-700"
              style={{ backgroundColor: `${olive}0d` }}
            >
              &quot;İlk sistemini adım adım nasıl kuracağını gösteren
              rehberin burada. 👇&quot;
            </blockquote>
            <p className="text-sm text-stone-500">
              Buton:{" "}
              <span
                className="rounded-full px-3 py-1 text-sm font-medium"
                style={{ backgroundColor: `${olive}1a`, color: olive }}
              >
                🎁 Rehberi Aç
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className={`${montserrat.className} text-base font-semibold text-stone-900`}>
              4.5 Önizleme yap → Canlıya al
            </h3>
            <p className="text-base leading-relaxed">
              Sağ üstten Preview ile test et. Her şey iyiyse Go Live.
            </p>
          </div>
        </section>

        {/* Kapanış */}
        <section
          className="flex flex-col gap-3 rounded-2xl p-6 sm:p-8"
          style={{ backgroundColor: `${olive}14` }}
        >
          <h2 className={`${montserrat.className} text-xl font-semibold text-stone-950`}>
            Tebrikler!
          </h2>
          <p className="text-base leading-relaxed text-stone-700">
            Artık biri sana &quot;REHBER&quot; yazdığında sistem otomatik
            cevap verecek — sen uyurken bile. Hazırsın! İlk DM otomasyonun
            artık aktif. Takipçilerin &quot;REHBER&quot; yazdığında sistem
            otomatik çalışacak.
          </p>
        </section>

        {/* Footer imza */}
        <footer className="flex flex-col items-start gap-2 border-t border-stone-200 pt-8 text-sm text-stone-500">
          <p>
            <span className="font-medium text-stone-700">
              Teknik Bilge Koç · AI & Otomasyon
            </span>{" "}
            — {siteConfig.handle} ile daha fazlası için takipte kal
          </p>
          <Link
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-2"
            style={{ color: olive }}
          >
            Instagram&apos;da takip et
          </Link>
        </footer>
      </div>
    </div>
  );
}
