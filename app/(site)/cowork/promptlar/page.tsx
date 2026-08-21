import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Promptlar — Claude Cowork'e Giriş Serisi",
  "Claude Cowork serisine ait, kopyala-yapıştır hazır promptlar."
);

export default function CoworkPromptlarPage() {
  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Link
            href="/cowork"
            className="text-sm font-medium text-stone-500 hover:text-stone-900"
          >
            ← Claude Cowork&apos;e Giriş Serisi
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">
            Promptlar
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">
            Serinin promptları burada toplanıyor — diğerleri eklendikçe bu
            sayfa güncellenecek.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-stone-500">
              Gün 2/12
            </span>
            <h2 className="text-lg font-semibold text-stone-950">
              Klasör Organize Promptu
            </h2>
            <p className="text-sm text-stone-600">
              Bir klasördeki dosyaları silmeden türüne göre klasörleyip
              anlaşılır isimlerle yeniden adlandıran prompt.
            </p>
            <Link
              href="/cowork/klasor-organize-promptu"
              className="text-sm font-medium text-stone-900 underline underline-offset-2"
            >
              Promptu görüntüle ve kopyala →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-stone-500">
              Gün 3/12
            </span>
            <h2 className="text-lg font-semibold text-stone-950">
              Gmail Etiketleme Promptu
            </h2>
            <p className="text-sm text-stone-600">
              Gmail&apos;ini kendi etiketlerine göre sınıflandırıp eski
              bültenleri geri alınabilir şekilde arşivleyen, herkesin
              doldurabileceği şablon prompt.
            </p>
            <Link
              href="/cowork/gmail-etiketleme-promptu"
              className="text-sm font-medium text-stone-900 underline underline-offset-2"
            >
              Promptu görüntüle ve kopyala →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-stone-500">
              Gün 5/12
            </span>
            <h2 className="text-lg font-semibold text-stone-950">
              Instagram Analiz Panosu Promptu
            </h2>
            <p className="text-sm text-stone-600">
              Windsor.ai ile son 50 gönderini analiz edip interaktif bir
              HTML pano çıkaran prompt.
            </p>
            <Link
              href="/cowork/instagram-analiz-panosu"
              className="text-sm font-medium text-stone-900 underline underline-offset-2"
            >
              Promptu görüntüle ve kopyala →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-stone-500">
              Gün 7/12
            </span>
            <h2 className="text-lg font-semibold text-stone-950">
              Global Instructions Röportaj Promptu
            </h2>
            <p className="text-sm text-stone-600">
              Claude&apos;un seni 7 soruyla tanıyıp Cowork Global
              Instructions için kalıcı bir hafıza metni çıkardığı prompt.
            </p>
            <Link
              href="/cowork/global-instructions-promptu"
              className="text-sm font-medium text-stone-900 underline underline-offset-2"
            >
              Promptu görüntüle ve kopyala →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-stone-500">
              Gün 10/12
            </span>
            <h2 className="text-lg font-semibold text-stone-950">
              IG Carousel Sistem Promptu
            </h2>
            <p className="text-sm text-stone-600">
              Instagram carousel&apos;leri için kopyala-yapıştır hazır sistem
              promptu.
            </p>
            <Link
              href="/cowork/karusel-promptu"
              className="text-sm font-medium text-stone-900 underline underline-offset-2"
            >
              Promptu görüntüle ve kopyala →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-stone-500">
              Gün 11/12
            </span>
            <h2 className="text-lg font-semibold text-stone-950">
              Bültenimi Tara Promptu
            </h2>
            <p className="text-sm text-stone-600">
              Gmail&apos;deki bültenleri kişisel bültene, Reel
              hook&apos;larına ve LinkedIn taslaklarına dönüştüren prompt.
            </p>
            <Link
              href="/cowork/newsletter-intelligence"
              className="text-sm font-medium text-stone-900 underline underline-offset-2"
            >
              Promptu görüntüle ve kopyala →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-stone-500">
              Bonus
            </span>
            <h2 className="text-lg font-semibold text-stone-950">
              Yazı Sesi Röportaj Promptu
            </h2>
            <p className="text-sm text-stone-600">
              Claude&apos;un seni 8 soruyla tanıyıp yazı sesini tanımlayan
              &quot;benim-sesim.md&quot; dosyasını çıkardığı, her metinden
              önce ona okutabileceğin prompt.
            </p>
            <Link
              href="/cowork/yazi-sesi-promptu"
              className="text-sm font-medium text-stone-900 underline underline-offset-2"
            >
              Promptu görüntüle ve kopyala →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
