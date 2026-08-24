import { promptItems } from "./claude-serisi";
import { posts } from "./yazilar";

export type ResourceItem = {
  slug: string;
  title: string;
  excerpt: string;
  href: string;
  date: string;
};

function postDate(slug: string): string {
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(`kaynaklar: "${slug}" için yazilar.ts içinde tarih bulunamadı`);
  }
  return post.date;
}

export const promptResources: ResourceItem[] = [
  ...promptItems.map((item) => ({
    slug: item.slug,
    title: item.title,
    excerpt: item.intro,
    href: `/21gunClaude/promptlar#gun-${item.day}`,
    date: postDate(item.slug),
  })),
  {
    slug: "cowork-klasor-organize-promptu",
    title: "Klasör Organize Promptu",
    excerpt:
      "Bir klasördeki dosyaları silmeden türüne göre klasörleyip anlaşılır isimlerle yeniden adlandıran prompt.",
    href: "/cowork/klasor-organize-promptu",
    date: postDate("cowork-gun-2-masaustu-toplama"),
  },
  {
    slug: "cowork-gmail-etiketleme-promptu",
    title: "Gmail Etiketleme Promptu",
    excerpt:
      "Gmail'ini kendi etiketlerine göre sınıflandırıp eski bültenleri geri alınabilir şekilde arşivleyen şablon prompt.",
    href: "/cowork/gmail-etiketleme-promptu",
    date: postDate("cowork-gun-3-gmail-bes-etiket"),
  },
  {
    slug: "cowork-instagram-analiz-panosu",
    title: "Instagram Analiz Panosu Promptu",
    excerpt: "Windsor.ai ile son 50 gönderini analiz edip interaktif bir HTML pano çıkaran prompt.",
    href: "/cowork/instagram-analiz-panosu",
    date: postDate("cowork-gun-5-windsor-instagram-panosu"),
  },
  {
    slug: "cowork-global-instructions-promptu",
    title: "Global Instructions Röportaj Promptu",
    excerpt:
      "Claude'un seni 7 soruyla tanıyıp Cowork Global Instructions için kalıcı bir hafıza metni çıkardığı prompt.",
    href: "/cowork/global-instructions-promptu",
    date: postDate("cowork-gun-7-global-instructions"),
  },
  {
    slug: "cowork-karusel-promptu",
    title: "IG Carousel Sistem Promptu",
    excerpt: "Instagram carousel'leri için kopyala-yapıştır hazır sistem promptu.",
    href: "/cowork/karusel-promptu",
    date: postDate("cowork-gun-10-karusel-promptu"),
  },
  {
    slug: "cowork-newsletter-intelligence",
    title: "Bültenimi Tara Promptu",
    excerpt:
      "Gmail'deki bültenleri kişisel bültene, Reel hook'larına ve LinkedIn taslaklarına dönüştüren prompt.",
    href: "/cowork/newsletter-intelligence",
    date: postDate("cowork-gun-11-bultenimi-tara"),
  },
  {
    slug: "cowork-pazarlama-eklentisi",
    title: "Pazarlama Eklentisi Promptu",
    excerpt: "Hazır Marketing eklentisini kendi işine göre özelleştiren kurulum promptu.",
    href: "/cowork/pazarlama-eklentisi",
    date: postDate("cowork-gun-12-pazarlama-eklentisi"),
  },
  {
    slug: "cowork-yazi-sesi-promptu",
    title: "Yazı Sesi Röportaj Promptu",
    excerpt:
      "Claude'un seni 8 soruyla tanıyıp yazı sesini tanımlayan \"benim-sesim.md\" dosyasını çıkardığı prompt.",
    href: "/cowork/yazi-sesi-promptu",
    date: "2026-08-21",
  },
  {
    slug: "cowork-60-icerik-fikri-promptu",
    title: "60 İçerik Fikri Promptu",
    excerpt: "Tek oturumda 60 Instagram carousel fikri çıkaran, sırayla kullanılacak 7 promptluk seri.",
    href: "/cowork/60-icerik-fikri-promptu",
    date: "2026-08-23",
  },
];

export const guideResources: ResourceItem[] = [
  {
    slug: "claude-dort-calisma-modu",
    title: "Claude'un Dört Çalışma Modu",
    excerpt:
      "Chat, Cowork, Code ve Design. Hangisi ne işe yarıyor, sen ne zaman hangisini açmalısın — teknik terim yok, doğrudan senin işinden örneklerle.",
    href: "/rehber/claude-dort-calisma-modu",
    date: "2026-08-24",
  },
  {
    slug: "ucretsiz-dm-otomasyon-rehberi",
    title: "Ücretsiz DM Otomasyon Rehberi",
    excerpt:
      "ManyChat'i hiç kullanmamış biri bile bu adımları takip ederek ilk Instagram DM otomasyonunu kurabilir.",
    href: "/rehber",
    date: "2026-07-30",
  },
];
