export type Category = {
  slug: string;
  label: string;
};

export const categories: Category[] = [
  { slug: "ai-otomasyon", label: "AI & Otomasyon" },
  { slug: "kadin-uzmanlar-icin-sistemler", label: "Kadın Uzmanlar için Sistemler" },
  { slug: "anne-girisimci-notlari", label: "Anne-Girişimci Notları" },
];

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "links"; items: { label: string; url: string }[] }
  | { type: "prompt"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  series?: string;
  seriesLabel?: string;
  /** Plain-paragraph body. Used when `blocks` is not set. */
  body?: string[];
  /** Structured body (headings, quotes, lists, tables, links). Takes precedence over `body`. */
  blocks?: ContentBlock[];
  instagramUrl: string;
};

export const posts: Post[] = [
  {
    slug: "gun-1-claude-hatirlar",
    title: "ChatGPT'yi herkes biliyor, Claude'u çok az kişi tanıyor",
    excerpt:
      "Claude ile ChatGPT arasındaki en önemli fark: biri unutur, diğeri seninle birlikte çalışır.",
    category: "ai-otomasyon",
    date: "2026-06-29",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 1/21",
    body: [
      "ChatGPT'yi herkes biliyor. Claude'u çok az kişi tanıyor. İkisi de yapay zeka ama çalışma şekilleri tamamen farklı.",
      "ChatGPT'ye bir şey sorarsın, cevap alırsın. Claude'a bir şey verirsin — dosyan, notun, fikrin — ve o seninle birlikte o konuyu işler.",
      "Fark şu: Claude seni hatırlar. Projen içinde ne anlattıysan bilir. Seninle bağlam kurarak çalışır.",
      "Bir kadın uzman olarak sana şunu söyleyeyim: bu fark, zamanını geri veriyor.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DaLkaDJDw3w/",
  },
  {
    slug: "gun-2-dosya-analizi",
    title: "20 sayfalık raporu okumak zorunda değilsin",
    excerpt: "Claude'a dosya yükleyip saatler süren okuma işini dakikalara indirmek.",
    category: "ai-otomasyon",
    date: "2026-06-30",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 2/21",
    body: [
      "20 sayfalık raporu okumak zorunda değilsin. Claude okusun.",
      "PDF, Word, Excel, metin dosyası — ne yüklersen yükle. Claude içeriği anlar, özetler, analiz eder, sana soru sorar.",
      "Ben bunu ilk kullandığımda şaşırdım: danışmanlık teklifini yükledim, \"bu teklifte neyi güçlendirebilirim\" dedim. 3 dakikada somut öneriler geldi.",
      "Koç, danışman, terapist, diyetisyen — belgelerle çalışan herkes için bu özellik saatler kazandırıyor.",
    ],
    instagramUrl: "https://www.instagram.com/p/DaOJJ26j0n_/",
  },
  {
    slug: "gun-3-teknik-bilgi-gerekmiyor",
    title: "Yapay zeka duyunca aklına ne geliyor?",
    excerpt: "Claude için kod bilmene gerek yok — sadece Türkçe yazman yeterli.",
    category: "ai-otomasyon",
    date: "2026-07-01",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 3/21",
    body: [
      "Yapay zeka duyunca aklına ne geliyor? Kod. Terminal. Siyah ekran. Anlaşılmaz komutlar. Dur bir saniye.",
      "Claude'u kullanmak için bunların hiçbirine ihtiyacın yok.",
      "Sen ne yapıyorsun? Türkçe yazıyorsun. Soruyu soruyorsun, fikri paylaşıyorsun, dosyayı yüklüyorsun. Claude geri kalanını hallediyor.",
      "Evden çalışan bir kadın uzman olarak şunu söyleyeyim: ben de başlarken \"bu benim için değil\" dedim. Sonra ilk sefer denedim — danışan için bir e-posta taslağı istedim. 90 saniyede geldi. Kelime kelime düzelttim, gönderdim.",
      "Teknik değil bu. Sadece alışmak.",
    ],
    instagramUrl: "https://www.instagram.com/p/DaQt8r1j97I/",
  },
  {
    slug: "gun-4-claude-projects",
    title: "Her seferinde sıfırdan başlamak zorunda değilsin",
    excerpt: "Claude Projects ile kim olduğunu bir kez anlatıyorsun, Claude her seferinde hatırlıyor.",
    category: "ai-otomasyon",
    date: "2026-07-02",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 4/21",
    body: [
      "Claude kullanıyorsun ama her seferinde sıfırdan başlıyorsun. \"Ben koçum, hedef kitlem şu, ses tonum böyle…\" Bunu her konuşmada tekrar yazmak zorunda değilsin.",
      "Claude Projects tam da bunun için var. Bir kez anlat, Claude her seferinde hatırlasın.",
    ],
    instagramUrl: "https://www.instagram.com/p/DaTOST9l_Mz/",
  },
  {
    slug: "gun-5-iki-tur-hafiza",
    title: "Claude'un iki tür hafızası var",
    excerpt: "Projects hafızası kalıcı, sohbet hafızası geçici — ikisini doğru yerde kullanmak zaman kazandırıyor.",
    category: "ai-otomasyon",
    date: "2026-07-03",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 5/21",
    body: [
      "Claude'u her açtığında sıfırdan başlıyorsan hafızayı kapatmışsın demektir.",
      "Claude'un iki tür hafızası var: Birincisi Projects hafızası — projen içinde her konuşmada seni hatırlıyor. Kim olduğunu, nasıl çalıştığını, ses tonunu. İkincisi sohbet hafızası — aynı konuşma penceresi açık kaldığı sürece her şeyi biliyor. Pencereyi kapatınca unutuyor.",
      "Fark şu: Projects'e bir kez anlat, defalarca kazan. Sohbet hafızası geçici — ama uzun ve derin çalışmalar için güçlü.",
      "Evden çalışan bir kadın uzman olarak zamanın çok kıymetli. Claude'u her seferinde sıfırdan tanıtmak bu zamanı çalıyor.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DaV3grADPkd/",
  },
  {
    slug: "gun-6-skills",
    title: "Aynı talimatları tekrar tekrar yazmak",
    excerpt: "Skills ile Claude'a bir kez öğretiyorsun, defalarca kullanıyorsun.",
    category: "ai-otomasyon",
    date: "2026-07-04",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 6/21",
    body: [
      "Claude'a her seferinde aynı talimatları tekrar yazıyorsan saatlerini çöpe atıyorsun.",
      "Skills özelliği, Claude'a bir kez öğretip defalarca kullanmak için var.",
      "Ben şu an 4 farklı skill kullanıyorum: caption, e-posta, içerik planı, danışan özeti. Her birini bir kez kurdum. Artık her sohbette sıfırdan başlamıyorum.",
    ],
    instagramUrl: "https://www.instagram.com/p/DaYcVoHj3JW/",
  },
  {
    slug: "gun-7-karsilama-otomasyonu",
    title: "Aynı sorulara tek tek cevap yazmayı bırak",
    excerpt: "Claude ile yazdığın karşılama metnini otomasyona bağlayınca, sen uyurken danışan adayları karşılanıyor.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-07-05",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 7/21",
    body: [
      "Her gün aynı soruları alıyorsun. \"Seanslar nasıl işliyor?\" \"Paketler neler?\" \"Nereden başlayayım?\" Ve her birine tek tek, yeniden, elle cevap yazıyorsun.",
      "Bu bir sistem sorunu. Ve çözümü var.",
      "Claude ile bir karşılama metni yazıyorsun — sıcak, sana ait, mesleğine özel. Sonra bunu bir DM otomasyon aracıyla birleştiriyorsun. Biri sana DM atıyor, sistem devreye giriyor, sen uyurken danışan adayı karşılanıyor.",
      "Teknik bilgi gerekmez. Claude metni yazar, sen onaylarsın.",
    ],
    instagramUrl: "https://www.instagram.com/p/DabBIkhjbRP/",
  },
  {
    slug: "gun-8-artifacts",
    title: "Claude'dan metin alıp Word'e yapıştırmak",
    excerpt: "Artifacts ile Claude sana metin değil, doğrudan kullanılabilir belge üretiyor.",
    category: "ai-otomasyon",
    date: "2026-07-06",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 8/21",
    body: [
      "Claude'dan metin alıp Word'e yapıştırıyorsun. Bu adımı atlayabilirsin.",
      "Artifacts özelliği, Claude'un sana metin değil gerçek bir belge, tablo ya da kontrol listesi üretmesini sağlıyor. Sohbet penceresinin yanında açılıyor. Düzenliyorsun, indiriyorsun. Bitti.",
      "Danışan özeti, teklif, içerik planı, onboarding formu — hepsini doğrudan Claude'da yapabilirsin.",
    ],
    instagramUrl: "https://www.instagram.com/p/Dadl7IlDxm2/",
  },
  {
    slug: "gun-9-web-search",
    title: "Claude internete bağlanabiliyor",
    excerpt: "Web Search açıkken Claude güncel bilgiye erişiyor ve kaynak gösteriyor.",
    category: "ai-otomasyon",
    date: "2026-07-07",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 9/21",
    body: [
      "Claude internete bağlanabiliyor. Ve büyük ihtimalle sen bunu aktif etmedin.",
      "Web Search özelliği açık olduğunda Claude güncel bilgilere erişiyor, kaynak gösteriyor, araştırmanı tek adımda yapıyor. Google'a gidip gelmen gerekmiyor.",
      "İçerik üretirken bir istatistik lazım mı? Claude bulsun. Danışana kaynak göndermek istiyor musun? Claude araştırsın. Rakip analizi mi yapacaksın? Claude incelesin.",
      "Evden çalışan bir kadın uzman olarak araştırma sürecine harcadığın zaman, Claude'un internete bağlanmasıyla doğrudan azalıyor.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DafvSnVCWcO/",
  },
  {
    slug: "gun-10-bir-fikri-bes-formata-cevirmek",
    title: "1 fikri 5 formata çevirmek",
    excerpt: "Tek bir fikri Claude ile 10 dakikada 5 farklı içerik formatına dönüştürmek.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-07-08",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 10/21",
    body: [
      "\"Bugün ne paylaşsam\" diye düşünmek, içerik üretmenin en büyük zaman kaybı.",
      "Çözüm: daha fazla fikir değil, 1 fikri 5 formata çevirmek.",
      "Claude'a bir fikir veriyorsun — koçluk, beslenme, terapi, danışmanlık — ne olursa olsun. Claude sana reel senaryosu, carousel planı, feed görseli metni, threads tweetleri ve story anketi üretiyor. 10 dakikada. 5 içerik.",
    ],
    instagramUrl: "https://www.instagram.com/p/DaipH-7jutB/",
  },
  {
    slug: "gun-11-eksik-talimat",
    title: "Uzman kadınların Claude sorunu yapay zeka değil, eksik talimat",
    excerpt: "İyi bir prompt dört şeyi içerir: kim olduğun, ne istediğin, nasıl istediğin, ne için kullanacağın.",
    category: "ai-otomasyon",
    date: "2026-07-09",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 11/21",
    body: [
      "Kimse söylemiyor ama uzman kadınların Claude sorunu yapay zeka değil, eksik talimat. Claude'dan beklediğin cevabı alamıyorsun.",
      "Hata Claude'da değil — soruda.",
      "İyi bir prompt dört şeyi içerir: kim olduğunu, ne istediğini, nasıl istediğini, ne için kullanacağını. Bu dördü olmadan Claude tahmin ediyor. Tahmin çoğunlukla yanlış.",
      "Örnek: \"E-posta yaz\" değil — \"Ben yaşam koçuyum, potansiyel danışana ilk tanışma seansını teklif eden, sıcak ve kısa bir e-posta yaz. 5 cümleyi geçmesin.\"",
      "Bu fark, çıktı kalitesini tamamen değiştiriyor.",
    ],
    instagramUrl: "https://www.instagram.com/p/DalUTMDjDcE/",
  },
  {
    slug: "gun-12-drive-baglantisi",
    title: "Drive'dan kopyalayıp yapıştırmak artık gerekmiyor",
    excerpt: "Claude, Google Drive'ına doğrudan bağlanıp dosyalarını okuyabiliyor.",
    category: "ai-otomasyon",
    date: "2026-07-10",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 12/21",
    body: [
      "Drive'dan dosya alıp Claude'a yapıştırmak artık gerekmiyor.",
      "Claude artık Drive'ına doğrudan bağlanabiliyor.",
      "Danışan notları, teklif şablonları, içerik planları, raporlar — Claude Drive'ında arar, okur, analiz eder. Sen sadece ne istediğini söylüyorsun.",
    ],
    instagramUrl: "https://www.instagram.com/p/Dan5FxfDySj/",
  },
  {
    slug: "gun-13-ikinci-beyin",
    title: "Claude'u ikinci beyin olarak kullanmak",
    excerpt: "Aklına geleni Claude'a söylüyorsun; o organize ediyor, önceliklendiriyor, üzerine inşa ediyor.",
    category: "ai-otomasyon",
    date: "2026-07-11",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 13/21",
    body: [
      "Beynin doluysa her şey dağılıyor. Danışan seansı hazırlığı, içerik fikirleri, yapılacaklar listesi, o an aklına gelen şey — hepsini taşımak zorunda değilsin.",
      "Claude'u ikinci beyin olarak kullanmak şu demek: aklına ne gelirse Claude'a söylüyorsun. Claude organize ediyor, önceliklendiriyor, hatırlatıyor, üzerine inşa ediyor.",
      "Not uygulamalarından farkı şu: Claude sadece saklamıyor. \"Bu fikirden bir içerik planı çıkar\", \"Bu listeyi önceliğe göre sırala\", \"Bunu bir e-postaya dönüştür\" — bunları yapıyor.",
      "Evden çalışan bir kadın uzman olarak zihin berraklığı en değerli kaynak. Claude onu geri veriyor.",
    ],
    instagramUrl: "https://www.instagram.com/reel/Daqd7-bDfMD/",
  },
  {
    slug: "gun-14-sss-sistemi",
    title: "Aynı soruyu kaçıncı kez cevaplıyorsun?",
    excerpt: "SSS'lerini Claude ile bir kez yaz, sistemin senin yerine cevaplasın.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-07-12",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 14/21",
    body: [
      "Aynı soruyu kaçıncı kez cevaplıyorsun? \"Seanslar nasıl işliyor?\" \"Fiyatlar neler?\" \"Nereden başlayayım?\"",
      "Bu soruların cevaplarını Claude ile bir kez yazıyorsun. Sonra DM otomasyonuna, biyografi sayfana, highlight'larına koyuyorsun. Sistem senin yerine cevaplıyor.",
    ],
    instagramUrl: "https://www.instagram.com/p/DasnOuPiLMO/",
  },
  {
    slug: "gun-15-ses-kopyasi",
    title: "Metinler 'yapay zeka gibi' hissettiriyorsa",
    excerpt: "Claude'a birkaç örnek metnini verip kendi ses tonunu öğretmek.",
    category: "ai-otomasyon",
    date: "2026-07-13",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 15/21",
    body: [
      "Claude'dan gelen metinler \"yapay zeka gibi\" hissettiriyorsa ses kopyası henüz yok demektir.",
      "Ses kopyası şu demek: Claude'a nasıl yazdığını, hangi kelimeleri kullandığını, nasıl cümle kurduğunu öğretiyorsun. Sonra Claude senin gibi yazıyor.",
      "Ben Claude'a kendi yazdığım 5-6 caption'ı veriyorum. \"Bu metinlerden ses tonumu öğren, bundan sonra bu tonda yaz\" diyorum. Fark anında belli oluyor.",
      "Takipçilerin \"bu sen yazmış gibi\" demeli. Claude bunu yapabilir — ama önce sesini öğrenmesi lazım.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DavaWTCgf8P/",
  },
  {
    slug: "gun-16-extended-thinking",
    title: "Hızlı cevap, yüzeysel cevap demektir",
    excerpt: "Extended Thinking ile Claude, önemli kararlarda adım adım düşünüyor.",
    category: "ai-otomasyon",
    date: "2026-07-14",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 16/21",
    body: [
      "Claude hızlı cevap veriyorsa yüzeysel cevap veriyor demektir. Bazı sorular hız değil, derinlik istiyor.",
      "Extended Thinking özelliği, Claude'un cevap vermeden önce adım adım düşünmesini sağlıyor. Fiyatlandırma stratejisi, hizmet paketi, zor danışan kararı — bu sorular için standart Claude yeterli değil.",
    ],
    instagramUrl: "https://www.instagram.com/p/Daxw1LFlfIx/",
  },
  {
    slug: "gun-17-dusunce-bosaltma",
    title: "Düşünceni netleştirmenin bir yolu",
    excerpt: "Kafandaki karışıklığı olduğu gibi Claude'a dök; o organize etsin, sen netleş.",
    category: "ai-otomasyon",
    date: "2026-07-15",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 17/21",
    body: [
      "Kafan karışıkken en zor şey düşüncelerini netleştirmek. Ve çoğu zaman yalnız yapıyorsun bunu.",
      "Claude'u düşünce boşaltma aracı olarak kullanmak şu demek: kafandaki her şeyi döküyorsun — düzensiz, ham, karışık olsun. Claude organize ediyor, örüntü buluyor, soru soruyor. Sen netleşiyorsun.",
      "Bu bir terapi değil. Ama düşünceni işlemek için güçlü bir araç.",
      "Evden çalışan bir kadın uzman olarak zihin netliği hem iş kaliteni hem sağlığını doğrudan etkiliyor.",
    ],
    instagramUrl: "https://www.instagram.com/reel/Da0Vn_lj4Xe/",
  },
  {
    slug: "gun-18-deep-research",
    title: "Kızım 'anne bitti mi' diye üçüncü kez sordu",
    excerpt: "14 açık sekme yerine: Deep Research konuyu kendi başına araştırıp kaynaklı bir rapor veriyor.",
    category: "ai-otomasyon",
    date: "2026-07-16",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 18/21",
    body: [
      "Bir konuyu araştırmak için 40 dakika ayırdım. Sonunda 14 sekme açık, yarısı okunmamış, notlarım dağınık, elimde ne olduğunu ben bile bilmiyordum. Kızım \"anne bitti mi\" diye üçüncü kez sordu. Bitmemişti.",
      "Sonra Claude'un Deep Research özelliğini denedim.",
      "Web Search değil bu. Web Search bir soruya bir cevap arar, bulur, getirir. Deep Research farklı çalışır: konuyu alt sorulara böler, birden fazla kaynağı tarar, kaynakları birbiriyle karşılaştırır, çelişkileri gösterir, sentezler, sonunda kaynaklı bir rapor verir. Yani asistan gibi değil — araştırmacı gibi davranır.",
      "Evden çalışan bir kadın uzmansan bunun ne anlama geldiğini anlatayım: yeni bir hizmet paketi kurgularken pazar araştırmasını, danışanına önereceğin yöntemin arkasındaki güncel çalışmaları, içerik üretimi için konu derinliğini — hepsini tek oturumda, kaynaklarıyla birlikte alırsın. Sen de o sırada sekmelerle boğuşmak yerine asıl işini yaparsın.",
      "Yapay zeka sana hız kazandırmaz sadece. Doğru kullandığında sana derinlik kazandırır. İkisi aynı şey değil.",
    ],
    instagramUrl: "https://www.instagram.com/reel/Da3U_WtguNW/",
  },
  {
    slug: "gun-19-uc-kural",
    title: "İyi sonuç alanlar daha zeki değil, daha net soru soruyor",
    excerpt: "Rol ver, format belirt, sınır koy — Claude'dan aldığın çıktıyı değiştiren 3 basit kural.",
    category: "ai-otomasyon",
    date: "2026-07-17",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 19/21",
    body: [
      "21 günde Claude'u öğrenirken en çok bunu gördüm: iyi sonuç alanlar daha zeki değil — daha net soru soruyor.",
      "3 kural var. Hepsi uygulanabilir, hepsi bugün başlanabilir.",
      "Kural 1: Rol ver. \"Sen bir koçsun\" değil — \"Sen 10 yıllık deneyimli bir yaşam koçusun, danışanlarına sıcak ve direkt konuşursun.\"",
      "Kural 2: Format belirt. \"Yaz\" değil — \"Madde madde yaz, her madde maksimum 2 cümle, başlıkla başlasın.\"",
      "Kural 3: Sınır koy. \"Kısa yaz\" değil — \"150 kelimeyi geçme. İlk cümle kanca olsun.\"",
      "Bu üç kural Claude'dan aldığın çıktıyı tamamen değiştiriyor.",
    ],
    instagramUrl: "https://www.instagram.com/p/Da5fM25DZoa/",
  },
  {
    slug: "gun-20-notion-sheets",
    title: "Kopyala-yapıştır döngüsü bitti",
    excerpt: "Claude, Notion ve Google Sheets'e doğrudan bağlanıp tablolarını analiz edebiliyor.",
    category: "ai-otomasyon",
    date: "2026-07-18",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 20/21",
    body: [
      "Notion'dan kopyala, Claude'a yapıştır, Claude'dan al, Notion'a taşı. Bu döngü bitti.",
      "Claude artık Notion'ına ve Google Sheets'ine doğrudan bağlanabiliyor. İçerik planını görüyor, danışan notlarını okuyor, tablonu analiz ediyor. Gidip gelme yok.",
    ],
    instagramUrl: "https://www.instagram.com/p/Da8fdCVDV5s/",
  },
  {
    slug: "gun-21-seri-bitiyor-baslangic",
    title: "21 gün, 21 içerik. Ve sen hâlâ buradasın",
    excerpt: "21 gün boyunca öğrendiklerimizin özeti — ve bunun neden bir başlangıç olduğu.",
    category: "ai-otomasyon",
    date: "2026-07-19",
    series: "claude-21",
    seriesLabel: "21 Gün 21 Claude Özelliği — Gün 21/21",
    body: [
      "21 gün. 21 içerik. Ve sen hâlâ buradasın. Bu küçük bir şey değil.",
      "Evden çalışan bir kadın uzman olarak her gün onlarca şeyle uğraşırken bu seriyi takip etmek, denemeye çalışmak — bunlar gerçek bir kararlılık.",
      "21 günde şunları öğrendin: Claude nedir. Projects ve Skills nasıl kurulur. Dosya analizi, web araştırması, derin düşünce nasıl kullanılır. Ses kopyası, SSS sistemi, karşılama otomasyonu nasıl hazırlanır. Notion ve Sheets ile iş akışı nasıl bağlanır.",
      "Bunlar araçlar. Ama asıl öğrendiğin şey şu: yapay zeka korkulacak bir şey değil. Zamana ve zihne geri döndürülen bir araç.",
      "Seri burada bitiyor. Ama bu başlangıç.",
    ],
    instagramUrl: "https://www.instagram.com/reel/Da_ETfkGu32/",
  },
  {
    slug: "bir-yil-once-ile-simdi-arasinda",
    title: "Bir yıl önce ile şimdi arasında",
    excerpt: "Geçen sene beynim susmuyordu, bu sene başka kadın uzmanlara sistem kuruyorum.",
    category: "anne-girisimci-notlari",
    date: "2026-07-20",
    body: [
      "Bir sene önce bu durumdaydım. Şimdi çok farklı değilim ya ama ilerleme de yok değil.",
      "Geçen sene bebeğim kucağımda uyurken, yorgunluk tavandayken, beynim susmuyordu.",
      "Aklıma sürekli yeni fikirler üşüşüyordu. Kendi kabıma sığamıyordum. Yüksek lisansımı bitirmiştim. Kurumsal hayatı bebeğime bakmak için bırakmıştım. Ama duramıyordum. Rahatsızdım.",
      "Anne olmak harika, çok güzel. Üstelik böylesine tatlı bir kızın annesi olmak. Bunun bana yeteceğini düşünmüştüm.",
      "Her şeyim var, şükürler olsun. O zaman derdim neydi? Buna terapistler, psikologlar ne der bilmiyorum ama içimdeki üretme çağrısını susturamadım.",
      "Şimdi başka kadın uzmanlarla çalışabilecek durumdayım. Onlara yapay zeka sistemleri kurabilirim. Bu bence güzel bir ilerleme. Geçen sene bunu hayal bile edemezdim.",
      "Sanırım mesele her şeye rağmen devam etmek.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DbBt5log0Si/",
  },
  {
    slug: "sisteme-guvenmek",
    title: "Uyurken bile işim tıkır tıkır işlesin istiyorum",
    excerpt: "Kontrolü bırakmak istemiyor değilim; ama önce sisteme güvenebileceğimden emin olmam gerekiyor.",
    category: "anne-girisimci-notlari",
    date: "2026-07-22",
    body: [
      "Uyurken bile işim tıkır tıkır çalışsın istiyorum ama... Kontrolcüyümdür. Bunu biliyorum.",
      "Ama bir sisteme güvendiğimde rahatlıyorum. Güvenmediğimde değil, her şeyi kendim taşımaya çalışıyorum ve o zaman da tükenmişliğin eşiğinde büyümeye çalışan biri oluyorum.",
      "Oysa her şeyi kendim yapamam. Uzmanlığımın gerekmediği işlere kendimi sokmak, aslında kendimi ziyan etmek demek.",
      "O vakti ve enerjiyi üretmeye, aileme, kendime ayırabilirim — eğer bırakabilirsem.",
      "Güvenebilirim. Ama ancak anlaşıldığımda. Dinlenildiğimde, duyulduğumu hissettiğimde.",
      "Yoksa kontrolü bırakmak istemiyor değilim. Ne güzel olurdu, ben uyurken bile işlerin tıkır tıkır işlemesi. Ama bundan önce emin olmam gerekiyor.",
      "Bunu nasıl kurduğumu yakında paylaşacağım.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DbGnrTlgLLN/",
  },
  {
    slug: "cowork-gun-1-chat-vs-cowork",
    title: "Claude'u duydun. Peki Cowork?",
    excerpt:
      "Chat sohbet eder, Cowork iş yapar — Anthropic'in resmi kursundan ilk ders.",
    category: "ai-otomasyon",
    date: "2026-07-26",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 1/12",
    body: [
      "Claude'u duydun. Peki Cowork?",
      "Anthropic'in resmi kursunu takip ediyorum. Kursun ilk cümlesi her şeyi özetliyor: Chat bir sohbet, Cowork bir çalışma oturumu.",
      "Claude masaüstünü açtım. Yeni sohbette 2 mod var: Chat ve Cowork. Chat bildiğin sohbet modu — sohbet edersin, plan yaparsın, strateji kurarsın. Cowork ise iş yaptırır — dosyalarına, uygulamalarına bağlanır.",
      "Örnekledim: Uygulamam Quizyen için Chat modunda 1 tane mail taslağı oluşturdum. Cowork modunda Gmail'imi bağladım ve verdiğim talimata göre tüm taslakları kendi oluşturdu.",
      "Biri konuşur, diğeri yapar.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DbQqnPeoERZ/",
  },
  {
    slug: "cowork-gun-2-masaustu-toplama",
    title: "200+ dosyalı masaüstünü tek promptla topla",
    excerpt:
      "Cowork'e masaüstü erişimi verip tek promptla dosyaları türlerine göre klasörledim.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-07-28",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 2/12",
    body: [
      "Masaüstünde 200+ dosyası olan her kadın uzmanın gizli derdi olan dağınıklığı Cowork ile tek promptta nasıl topladığımı gösteriyorum.",
      "Uzun uzun sürükle bırak yok. Claude Cowork'u açtım, masaüstüme erişim verdim, hazırladığım promptu yapıştırıp onayladım.",
      "O da hiçbir dosyayı silmeden türlerine göre klasörledi, isimleri düzeltti. Sonuç: tertemiz masaüstü.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DbV-CEzABPp/",
  },
  {
    slug: "cowork-gun-3-gmail-bes-etiket",
    title: "1000+ maili silmeden 5 etikete ayırmak",
    excerpt:
      "Cowork'e Gmail'i bağlayıp tek promptla 1000'den fazla e-postayı 5 etikete ayırdım.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-07-30",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 3/12",
    body: [
      "Claude Cowork ile Gmail nasıl düzenlenir, 1000+ mail silmeden 5 etikete nasıl ayrılır?",
      "Bir önceki videoda masaüstümü toplamıştım, şimdi sıra Gmail'de. Cowork > Connectors > Gmail Connect > Promptu yapıştırdım.",
      "Cowork 6 görev oluşturdu, hepsini etiketledi. Sonuç: Bülten 222, Araç 135, sıfır silme.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DbbNUvbIwOI/",
  },
  {
    slug: "cowork-gun-4-gmail-scheduled-tasks",
    title: "Gmail'ini artık elle etiketleme",
    excerpt:
      "Cowork'ün Scheduled Tasks'ı ile Gmail etiketleme her ayın 1'inde kendi kendine çalışıyor.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-08-01",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 4/12",
    body: [
      "Gmail'ini her ayın 1'inde hâlâ elle etiketliyorsan, ayda 2 saatin çöpe gidiyor.",
      "Bir önceki videoda 1000+ maili 5 etikete ayırmıştık. Bu videoda aynı işi otomatikleştirdim: Claude Cowork > Scheduled Tasks > her ayın 1'i saat 17:30'da çalışacak şekilde ayarladım. Artık gelen kutum her ay kendi kendini 5 etikete ayırıyor. Ben sadece Active / Paused tuşuna bakıyorum.",
      "Bu ne işe yarar? Gmail otomatik etiketleme, fatura / müşteri / başvuru maillerini ayırma, her ay tekrar eden raporlama işini sıfıra indirme.",
      "Kim için? Gmail'de kaybolan, 'mail attım' diyen müşteriyi bulamayan kadın girişimciler ve uzmanlar için.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DbgOBfkIp1k/",
  },
  {
    slug: "cowork-gun-5-windsor-instagram-panosu",
    title: "Instagram hesabını Cowork'e bağlayıp analiz panosu çıkar",
    excerpt:
      "Windsor.ai ile Instagram hesabını Cowork'e bağladım, son 50 gönderiden otomatik analiz panosu çıktı.",
    category: "ai-otomasyon",
    date: "2026-08-03",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 5/12",
    body: [
      "Instagram hesabını Claude Cowork'a Windsor.ai ile bağlayıp son 50 gönderinden otomatik analiz panosu nasıl çıkarılır?",
      "Ne işe yarar? Neyin tuttuğunu, seni neyin geride tuttuğunu, şimdi denenecek 5 konuyu ve 30 günlük 3 format deneyini 2 dakikada görüyorsun.",
      "Nasıl yapılır? Claude Cowork > Artı Butonu > Connectors > Add Connectors > Windsor.ai > Instagram Insights > Yetkilendir > Promptu yapıştır. Claude Cowork senin için interaktif analiz panosu hazırlıyor.",
    ],
    instagramUrl: "https://www.instagram.com/reel/Dblh6xPoOY4/",
  },
  {
    slug: "cowork-gun-6-bes-gunde-ozet",
    title: "5 günde masaüstü, mail ve analiz otomatikleşti",
    excerpt:
      "Claude Cowork ile 5 günde masaüstümü, mailimi ve Instagram analizimi otomatikleştirdim.",
    category: "ai-otomasyon",
    date: "2026-08-05",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 6/12",
    body: [
      "Claude Cowork ile 5 günde masaüstümü, mailimi ve analizlerimi otomatikleştirdim.",
      "Nasıl mı? Tek prompt yazdım, gerisini o hallettı. 1000+ mail → 5 etiket. 200+ dosya → saniyeler içinde. Instagram analizim artık kendi kendine çıkıyor.",
      "Her birinin videosu sayfamda. İsteyene DM'den atabilirim — masaüstü, Gmail ya da Instagram, hangisini istiyorsan yazabilirsin.",
    ],
    instagramUrl: "https://www.instagram.com/p/DbrKlYsAORy/",
  },
  {
    slug: "cowork-gun-7-global-instructions",
    title: "Cowork seni tanımıyorsa bu ayarı atlamışsındır",
    excerpt:
      "Global Instructions kurulmadan Cowork her sohbette seni sıfırdan öğreniyor.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-08-07",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 7/12",
    body: [
      "Akademisi olan, öğrencisi olan ya da topluluğu olan bir kadınsın ama Claude Cowork seni hâlâ tanımıyorsa, en önemli ayarı atlamışsındır.",
      "Bu ayarı yapmadığında ne oluyor? Her sohbette kendini sıfırdan anlatıyorsun ve Cowork'ün kalıcı hafızası boş olduğu için seni unutuyor.",
      "Çözüm nerede? Settings > Cowork > Global Instructions. Oraya bir kere kim olduğunu, kime hizmet ettiğini ve nasıl konuşması gerektiğini yazıyorsun.",
      "Sonuç ne? Bir kere kuruyorsun, her açtığında akademini ve öğrencilerini bilen bir asistanın oluyor.",
    ],
    instagramUrl: "https://www.instagram.com/reel/Dbv1EoBAjn0/",
  },
  {
    slug: "cowork-gun-8-scheduled-tasks-otomasyon",
    title: "Gmail etiketlemeyi Scheduled Tasks'a bağlamak",
    excerpt:
      "Kod yazmadan, Cowork'ün Scheduled Tasks özelliğiyle Gmail etiketlemeyi her ay otomatik hale getirmek.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-08-08",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 8/12",
    body: [
      "Serinin bir önceki bölümünde Gmail'deki 1000 maili Cowork'e 5 ayrı etiket altında toparlatmıştım.",
      "Şimdi bunu her ay düzenli olarak nasıl otomatik yaptıracağımı anlatıyorum. Cowork'ün Scheduled Tasks özelliğini kullanarak bazı işlerini hiç kod yazmadan otomasyona bağlayabilirsin.",
      "Ve evet, bunu öğrenmek saatlerini geri verecek.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DbxjPkBA2VR/",
  },
  {
    slug: "cowork-gun-9-instagram-analiz-rehberi",
    title: "Instagram'dan müşteri gelmiyorsa ne yapmalı",
    excerpt:
      "Claude ve Windsor.ai ile Instagram Insights verilerini analiz edip büyüme karnesi çıkarmak.",
    category: "ai-otomasyon",
    date: "2026-08-09",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 9/12",
    body: [
      "Instagram'dan müşteri gelmiyorsa ne yapmalıyım? Instagram hesabımı nasıl analiz edebilirim?",
      "Bu videoda Claude AI ve Windsor.ai kullanarak Instagram Insights verilerini nasıl analiz edeceğini, Instagram büyüme karneni nasıl çıkaracağını ve hangi içeriklerin gerçekten etkileşim getirdiğini data odaklı nasıl göreceğini gösteriyorum.",
      "Instagram müşteri çekmiyor diyenler, kişisel marka sahipleri ve girişimciler için AI ile Instagram analizi rehberi.",
    ],
    instagramUrl: "https://www.instagram.com/reel/Db0QsG5go3h/",
  },
  {
    slug: "cowork-gun-10-karusel-promptu",
    title: "Karusel hazırlamak artık 30 saniye",
    excerpt:
      "Claude Projects'e kurduğum tek talimatla Instagram karuseli 30 saniyede hazır — promptun tamamı sitede.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-08-10",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 10/12",
    body: [
      "Instagram için karusel hazırlamak eskiden benim de 1 saatimi alıyordu. Canva'da yaz, düzenle, hizala... Yorucu.",
      "Claude Projects ile Instagram karuseli nasıl yapılır sorusunu 30 saniyede çözdüm.",
      "Sistem basit: Bir proje açıyorsun, içine 8 slaytlık karusel yapısını, tonunu ve görsel kimliğini anlatan tek bir talimatı yapıştırıyorsun. Sonra sadece \"karusel oluştur\" diyorsun. Claude sana 1080x1350 boyutunda, kopyalanmaya hazır karusel dosyasını veriyor.",
      "Yapay zeka ile Instagram içerik üretimi dediğim tam olarak bu: bir kere kurulan bir talimat mimarisi. Sonra konu ne olursa olsun aynı kalitede 8 slayt alıyorsun.",
      "Bu prompt özellikle koçlar, danışmanlar ve tek başına içerik üretenler için zaman kazandıran bir AI aracı.",
    ],
    instagramUrl: "https://www.instagram.com/reel/Db3h2aEAt2_/",
  },
  {
    slug: "cowork-gun-11-bultenimi-tara",
    title: "Gmail'deki 100+ bülten tek komutla nasıl özetlenir?",
    excerpt:
      "Cowork'e Gmail ve Drive'ı bağlayıp bültenleri kişisel bültene, LinkedIn taslaklarına ve Reel hook'larına dönüştürdüm — sonra skill olarak kaydettim.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-08-12",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 11/12",
    body: [
      "Gmail'deki 100+ bülten tek komutla nasıl özetlenir?",
      "Claude Cowork'u açtım, Cowork sekmesine geçtim. Gmail + Drive entegrasyonunu bağladım. Not: Drive'ım başka, bültenlerimin olduğu Gmail başka hesaptı, ikisini de bağladım.",
      "Komutumu yapıştırdım: bültenleri tara, en önemli 9 taneyi oku, kendi bültenimi oluştur, içinden 2 tane kendi tarzımda LinkedIn taslağı ve 3 viral Reel hook'u çıkar. Kural: asla unsubscribe yapma, sadece link listele, rapor dili Türkçe kalsın.",
      "Claude bültenleri çekti, özetledi, Drive'a kaydetti.",
      "Son hamle: \"Bunu skill olarak kaydet\" dedim.",
      "Bitti. Artık \"bültenlerimi tara\" demem yetiyor. Skill ismini ezberlememe gerek yok, Claude ne zaman çağıracağını kendisi anlıyor.",
    ],
    instagramUrl: "https://www.instagram.com/reel/Db8tILrg3Op/",
  },
  {
    slug: "cowork-gun-12-pazarlama-eklentisi",
    title: "Bu eklentiyi kendime saklayamazdım",
    excerpt:
      "Claude Cowork'ün hazır Marketing eklentisini 2 dakikada kurup tek promptla kendi işine göre özelleştirmek.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-08-14",
    series: "cowork-giris",
    seriesLabel: "Claude Cowork'e Giriş Serisi — Gün 12/12",
    body: [
      "Bu eklentiyi kendime saklayamazdım. Claude Cowork Marketing Plugin nasıl kurulur?",
      "Cevap: Claude Desktop > Artı (+) > Eklentiler > Eklentileri Ara > Marketing > Yükle > Yönet > Özelleştir. 2 dakika.",
      "8 yetenek + 13 bağlayıcı ile geliyor: brand-review, campaign-plan, competitive-brief, content-creation, draft-content, email-sequence, performance-report, seo-audit + Canva, Gmail, Drive, Instagram, Slack, Hubspot, Notion...",
      "Videoda ne yaptım? Özelleştir'e şu promptu yapıştırdım: \"Customize the 'marketing' plugin for me based on my company.\" Sonra sorduğu 2 soruya cevap verdim: Rakip analizi kimler için? TR'deki AI eğitim programları. Rapor neye baksın? Instagram etkileşim ve erişim.",
      "Hepsini adım adım rehber yaptım. Ekran görüntüleri, hazır cevaplar ve komutlar içinde. Siteme yükledim.",
    ],
    instagramUrl: "https://www.instagram.com/reel/DcB3FOCg_T-/",
  },
  {
    slug: "seo-aeo-geo-ayni-metnin-dort-hali",
    title: "SEO, AEO ve GEO: Aynı Metnin Dört Hâli",
    excerpt:
      "Tek bir ham metnin SEO, AEO ve GEO için nasıl yeniden yazıldığını gösteren pratik bir rehber.",
    category: "ai-otomasyon",
    date: "2026-08-28",
    blocks: [
      {
        type: "p",
        text: "Bu yazı, tek bir ham metnin SEO, AEO ve GEO optimizasyonuyla nasıl dört farklı hâle geldiğini gösteren bir eğitim materyali. Amaç teori anlatmak değil; aynı bilginin farklı okuyucular için nasıl yeniden yapılandırıldığını somut olarak göstermek. Kendi ham metnini bu şablonu takip ederek dört versiyona çevirebilirsin.",
      },
      { type: "h2", text: "0. Ham metin (başlangıç noktası)" },
      {
        type: "quote",
        text: "SEO arama motorlarının getirdiği sonuçlarda öne çıkmanızı sağlar. Doğru kelimeler ile bunu sağlarsınız. Ama artık herkes yapay zekaya soruyor. Bu da SEO'nun etkililiğini azaltıyor. AEO dostu bir yazı için hedef kitlenizin işletmenizi ilgilendiren en çok sorduğu soruyu ve yanıtını yazınızın en başına koymalısınız. Diğer yandan örneğin dijital pazarlama ile ilgili bir eğitim satıyorsanız ve hedef kitleniz bu konuda eğitim arıyor ve bunun için Claude Chat'i kullanıyorsa, Claude Chat'in sizi önermesi için GEO dostu yazı yazmalısınız. Hatta en iyisi hem SEO hem AEO hem GEO dostu yazı yazmanız. İşi şansa bırakmayın.",
      },
      {
        type: "p",
        text: "Ham metnin durumu: Bilgi doğru ve eksiksiz. Ama yapısı yok — başlık yok, soru yok, kanıt yok. Yani ne arama motoru, ne yanıt motoru, ne de yapay zeka asistanı bu metni rahatça kullanabilir.",
      },

      { type: "h2", text: "1. Sadece SEO dostu hâli" },
      {
        type: "h3",
        text: "SEO, AEO ve GEO Nedir? Yapay Zeka Çağında İçerik Optimizasyonu",
      },
      {
        type: "p",
        text: "Meta açıklama: SEO, AEO ve GEO arasındaki farkı öğrenin. Arama motorlarında ve yapay zeka sohbetlerinde öne çıkmak için içerik optimizasyonu rehberi.",
      },
      { type: "h3", text: "SEO nedir?" },
      {
        type: "p",
        text: "SEO (arama motoru optimizasyonu), arama motorlarının getirdiği sonuçlarda öne çıkmanızı sağlar. Doğru anahtar kelimeler (keywords) ile bunu sağlarsınız. Ancak kullanıcı davranışı değişti: artık pek çok kişi sorusunu doğrudan yapay zekaya soruyor. Bu da klasik SEO'nun tek başına etkililiğini azaltıyor.",
      },
      { type: "h3", text: "AEO nedir?" },
      {
        type: "p",
        text: "AEO (yanıt motoru optimizasyonu) dostu bir yazı için, hedef kitlenizin işletmenizi ilgilendiren en çok sorduğu soruyu ve yanıtını yazınızın en başına koymalısınız.",
      },
      { type: "h3", text: "GEO nedir?" },
      {
        type: "p",
        text: "GEO (üretken motor optimizasyonu), yapay zeka sohbetlerinde önerilmenizi hedefler. Örneğin dijital pazarlama eğitimi satıyorsanız ve hedef kitleniz Claude Chat üzerinden eğitim arıyorsa, Claude'un sizi önermesi için GEO dostu içerik üretmelisiniz.",
      },
      { type: "h3", text: "SEO, AEO ve GEO birlikte nasıl kullanılır?" },
      {
        type: "p",
        text: "En iyisi hem SEO hem AEO hem GEO dostu yazmanız. İşi şansa bırakmayın.",
      },
      {
        type: "quote",
        text: "Ne değişti: Başlık hiyerarşisi (H1-H2-H3) kuruldu. Hedef anahtar kelime başlıkta ve ilk 100 kelimede geçiyor. Alt başlıklar arama sorgusu formatında yazıldı (\"SEO nedir?\"). Meta açıklama eklendi.",
      },

      { type: "h2", text: "2. Sadece AEO dostu hâli" },
      { type: "h3", text: "Soru: Yapay zeka çağında SEO yeterli mi?" },
      {
        type: "p",
        text: "Kısa yanıt: Hayır. SEO hâlâ gerekli ama tek başına yetmiyor. Kullanıcılar sorularını arama motoru yerine yapay zeka asistanlarına sorduğunda, klasik sıralama (ranking) görünürlük getirmiyor. Bu yüzden içeriğinizi hem arama motorları hem yanıt motorları için yazmanız gerekiyor.",
      },
      { type: "h3", text: "Sıkça sorulan sorular" },
      {
        type: "list",
        items: [
          "SEO tam olarak ne yapar? — Arama motorlarının sonuç sayfasında öne çıkmanızı sağlar. Doğru anahtar kelimelerle çalışır.",
          "AEO dostu yazı nasıl yazılır? — Hedef kitlenizin en çok sorduğu soruyu ve net yanıtını yazının en başına koyarsınız. Yanıt 40-60 kelimeyi geçmemeli ve tek başına anlaşılabilir olmalı.",
          "GEO neden ayrıca gerekiyor? — Hedef kitleniz Claude Chat gibi bir asistana \"dijital pazarlama eğitimi öner\" dediğinde, asistanın sizi önerebilmesi için içeriğinizin ona uygun biçimde yazılmış olması gerekir.",
          "Üçünü birden yapmak şart mı? — Şart değil ama en güvenlisi bu. İşi şansa bırakmamak için üçünü birlikte kurgulayın.",
        ],
      },
      {
        type: "quote",
        text: "Ne değişti: Metin soru-yanıt mimarisine çevrildi. En kritik soru en üstte, yanıtı hemen altında. Her yanıt bağlamdan koparılıp tek başına alınabilecek şekilde bağımsız yazıldı.",
      },

      { type: "h2", text: "3. Sadece GEO dostu hâli" },
      {
        type: "h3",
        text: "SEO, AEO ve GEO: Üretken Arama Motorlarında Görünürlük",
      },
      {
        type: "p",
        text: "Tanım: Üretken motor optimizasyonu (GEO), içeriği yapay zeka yanıtlarında kaynak olarak gösterilme (citation) olasılığını artıracak biçimde yapılandırma pratiğidir. Klasik SEO sıralama için, GEO ise alıntılanmak için çalışır.",
      },
      {
        type: "p",
        text: "Neden önemli: Üretken yanıt motorları, sıralı sonuç listesi sunmak yerine getirilen kaynakların küçük bir bölümünü seçerek yanıt oluşturur; alıntılanmayan kaynak, sıralaması ne olursa olsun pratikte hiç görünmez. Brandlight araştırmasına göre Google'ın üst sıralarındaki bağlantılar ile yapay zekanın alıntıladığı kaynaklar arasındaki örtüşme %70'ten %20'nin altına düşmüştür.",
      },
      {
        type: "p",
        text: "Ne işe yarıyor: Princeton, Georgia Tech ve Allen Institute ortak çalışmasında dokuz farklı optimizasyon yöntemi test edildi. En iyi sonucu veren üç yöntem — kaynak gösterme, alıntı ekleme ve istatistik ekleme — temel içeriğe kıyasla %30-40 arası görünürlük artışı sağladı. Okunabilirliği artırmak gibi biçimsel iyileştirmeler bile %15-30 arası kazanç verdi. Aynı çalışmada, anahtar kelime yığma (keyword stuffing) gibi klasik SEO yöntemleri üretken motorlarda işe yaramadı.",
      },
      {
        type: "p",
        text: "Pratikte ne demek: Bir eğitim işletmesi, örneğin dijital pazarlama eğitimi satıyorsa ve hedef kitlesi Claude Chat'e \"hangi eğitimi almalıyım\" diye soruyorsa; o işletmenin içeriğinde net tanımlar, tarihli veriler, fiyat aralıkları ve dış kaynak referansları bulunmalıdır. İstatistikler, tanımlar, karşılaştırmalar, fiyatlar, tarihler ve referanslar, üretken modelin seçip atfedebileceği birimler oluşturur.",
      },
      {
        type: "p",
        text: "Sonuç: SEO artık gerekli ama yeterli değil. Üçünü birlikte kurgulayın.",
      },
      {
        type: "quote",
        text: "Ne değişti: Metin alıntılanabilir bilgi bloklarına bölündü. Sayı, tarih, kurum adı ve dış kaynak eklendi. Her paragraf tek başına kopyalanıp bir yapay zeka yanıtına konabilecek durumda.",
      },

      { type: "h2", text: "4. Karşılaştırma: yazı neden ve nasıl değişti?" },
      {
        type: "table",
        headers: ["", "SEO", "AEO", "GEO"],
        rows: [
          ["Kime yazıyorsunuz", "Arama motoru algoritması", "Yanıt kutusu / sesli asistan", "Yapay zeka asistanı (Claude, ChatGPT)"],
          ["Başarı ölçütü", "Sıralama (ranking)", "Öne çıkan yanıt olmak", "Kaynak gösterilmek (citation)"],
          ["Yapı", "Başlık hiyerarşisi + anahtar kelime", "Soru → kısa yanıt → SSS", "Bağımsız, veri yüklü bloklar"],
          ["Ton", "Tanıtıcı, akıcı", "Doğrudan, net, kısa", "Nesnel, referanslı, ansiklopedik"],
          ["En kritik hamle", "Anahtar kelime yerleşimi", "Soruyu en başa koymak", "İstatistik + kaynak eklemek"],
          ["En büyük hatası", "Anahtar kelime yığmak", "Yanıtı geciktirmek", "İddiayı kanıtsız bırakmak"],
          ["Uzunluk eğilimi", "Uzun ve kapsamlı", "Kısa ve parçalı", "Yoğun ve kanıtlı"],
        ],
      },
      { type: "h3", text: "Değişimin özeti" },
      {
        type: "list",
        items: [
          "Ham metin → SEO: Metnin iskeleti değişti. İçerik aynı kaldı, üzerine başlık yapısı ve anahtar kelime yerleşimi eklendi.",
          "SEO → AEO: Metnin sırası değişti. Bilgi aynı, ama sonuç en başa alındı. SEO'da merak uyandırıp okuyucuyu aşağı çekersiniz; AEO'da hemen cevap verirsiniz.",
          "AEO → GEO: Metnin kanıt yoğunluğu değişti. Kısa ve net olmak yetmiyor; sayı, kurum adı, tarih ve dış kaynak gerekiyor. Sinyal simetrik çalışıyor: sayfanız güvenilir kaynaklara atıf yapıyorsa, dil modelleri de sayfanızı güvenilir kaynak olarak değerlendiriyor.",
          "Ortak nokta: Üçü birbirini dışlamıyor. 2026 ölçümlerinin en net bulgusu, klasik SEO'nun hâlâ gerekli ama tek başına yetersiz olduğu; onu temel şart (table stakes) sayıp asıl eforu GEO tarafına ayırmak gerektiği yönünde.",
        ],
      },

      { type: "h2", text: "5. Hem SEO, hem AEO, hem GEO dostu hâli" },
      { type: "h3", text: "SEO Yeterli mi? AEO ve GEO Farkı (2026 Rehberi)" },
      {
        type: "p",
        text: "Meta açıklama: SEO, AEO ve GEO nedir, farkları neler? Yapay zeka sohbetlerinde önerilen içerik nasıl yazılır — veriye dayalı kısa rehber.",
      },
      {
        type: "p",
        text: "Soru: Yapay zeka çağında sadece SEO yapmak yeterli mi? Yanıt: Hayır. SEO hâlâ gerekli, ama artık tek başına görünürlük getirmiyor. Kullanıcılar sorularını yapay zeka asistanlarına sorduğunda, sıralamanız değil, alıntılanıp alıntılanmadığınız belirleyici oluyor. Bu yüzden içeriğinizi üç katmanlı yazmanız gerekiyor: SEO, AEO ve GEO.",
      },
      { type: "h3", text: "SEO nedir ve hâlâ neden gerekli?" },
      {
        type: "p",
        text: "SEO (arama motoru optimizasyonu), doğru anahtar kelimelerle arama sonuçlarında öne çıkmanızı sağlar. Yapay zeka motorları da büyük ölçüde aynı dizinlerden (index) besleniyor — yani sayfanız taranabilir ve dizinlenmiş değilse, hiçbir GEO taktiği işe yaramaz. SEO'yu temel şart olarak görün.",
      },
      { type: "h3", text: "AEO nedir ve nasıl yazılır?" },
      {
        type: "p",
        text: "AEO (yanıt motoru optimizasyonu), hedef kitlenizin en çok sorduğu soruyu ve yanıtını yazının en başına koymanızdır. Yanıt kısa, net ve tek başına anlaşılır olmalı. Kural basit: önce cevap, sonra bağlam.",
      },
      { type: "h3", text: "GEO nedir ve neden ayrıca gerekiyor?" },
      {
        type: "p",
        text: "GEO (üretken motor optimizasyonu), yapay zeka yanıtlarında kaynak olarak gösterilme olasılığınızı artırma pratiğidir. Google'ın üst sıralarındaki bağlantılar ile yapay zekanın alıntıladığı kaynaklar arasındaki örtüşme %70'ten %20'nin altına düştü. Princeton, Georgia Tech ve Allen Institute ortak çalışmasında en iyi sonucu veren yöntemler kaynak gösterme, alıntı ekleme ve istatistik ekleme oldu; bunlar %30-40 arası görünürlük artışı sağladı.",
      },
      {
        type: "p",
        text: "Somut örnek: dijital pazarlama eğitimi satıyorsanız ve hedef kitleniz Claude Chat'e \"hangi eğitimi almalıyım\" diye soruyorsa, Claude'un sizi önerebilmesi için içeriğinizde net tanımlar, tarihli veriler ve dış kaynak referansları bulunmalıdır.",
      },
      { type: "h3", text: "Üçü birlikte nasıl kurgulanır?" },
      {
        type: "list",
        items: [
          "Başlık ve alt başlıklar: hedef anahtar kelimeyi taşısın (SEO)",
          "İlk paragraf: en çok sorulan soru + 40-60 kelimelik net yanıt (AEO)",
          "Gövde: her bölüm tek konu, doğrudan cevapla başlasın (AEO + GEO)",
          "Kanıt: en az bir istatistik, bir tarih, bir dış kaynak (GEO)",
          "Kapanış: SSS bölümü (AEO)",
        ],
      },
      { type: "h3", text: "Sıkça sorulan sorular" },
      {
        type: "list",
        items: [
          "SEO öldü mü? — Hayır. Klasik SEO gerekli ama yetersiz — temel şart olarak korunmalı, ek efor GEO'ya ayrılmalı.",
          "Anahtar kelime yığmak yapay zekada işe yarar mı? — Hayır. Araştırmada anahtar kelime yığma gibi klasik SEO yöntemleri üretken motorlarda başarı göstermedi.",
          "Nereden başlamalıyım? — İlk paragrafınızı soru-yanıt formatına çevirin ve yazınıza bir istatistik + bir kaynak ekleyin. En düşük maliyetli iki hamle bunlar.",
        ],
      },

      { type: "h2", text: "Uygulama kontrol listesi" },
      {
        type: "p",
        text: "Kendi metnini yazarken bu listeyi kullanabilirsin.",
      },
      { type: "h3", text: "SEO katmanı" },
      {
        type: "list",
        items: [
          "Hedef anahtar kelime belirlendi",
          "Anahtar kelime başlıkta geçiyor",
          "Anahtar kelime ilk 100 kelimede geçiyor",
          "Alt başlıklar H2/H3 hiyerarşisinde",
          "Meta açıklama yazıldı (150-160 karakter)",
        ],
      },
      { type: "h3", text: "AEO katmanı" },
      {
        type: "list",
        items: [
          "En çok sorulan soru belirlendi",
          "Soru yazının en başında",
          "Yanıt 40-60 kelime ve bağımsız anlaşılır",
          "Her bölüm cevapla başlıyor, bağlamla devam ediyor",
          "SSS bölümü var",
        ],
      },
      { type: "h3", text: "GEO katmanı" },
      {
        type: "list",
        items: [
          "En az bir istatistik var",
          "En az bir dış kaynak referansı var",
          "Tarih / sayı / kurum adı geçiyor",
          "Net tanım cümlesi var (\"X şudur:\")",
          "Paragraflar tek başına alıntılanabilir",
          "İddialar kanıtsız bırakılmamış",
        ],
      },

      { type: "h2", text: "Bir dürüstlük notu (eğitmen için)" },
      {
        type: "p",
        text: "AEO ve GEO ayrımı bu materyalde net çizildi, ama literatürde bu kadar net değil. 2026 başı itibarıyla akademik literatürde bu terimleri birbirinden ayıran bir uzlaşı tanımı yok; GEO, AEO, LLMO ve AI SEO çoğu zaman birbirinin yerine kullanılıyor.",
      },
      {
        type: "p",
        text: "Bu ayrımı derste pedagojik bir sadeleştirme olarak kullanmak sorun değil — üç farklı okuyucu tipini ayırt etmek öğrenmeyi kolaylaştırıyor. Ancak katılımcılara \"sektörde yerleşmiş kesin kategoriler\" gibi sunmamak gerekir. Bir cümlelik uyarı yeterli: \"Bu üçlü ayrım öğrenmeyi kolaylaştırmak için; kaynaklarda çoğu zaman iç içe geçmiş halde göreceksiniz.\"",
      },
      {
        type: "p",
        text: "Ayrıca alanın hızlı değiştiğini unutma: buradaki oranlar 2025-2026 çalışmalarına dayanıyor ve altı ayda değişebilir. Materyali her dönem başında güncellemek gerekiyor.",
      },

      { type: "h2", text: "Kaynaklar" },
      {
        type: "links",
        items: [
          {
            label: "Aggarwal, P. ve ark. — GEO: Generative Engine Optimization (Princeton / Georgia Tech / Allen Institute)",
            url: "https://arxiv.org/pdf/2311.09735",
          },
          {
            label: "Optimizing Visibility in Generative Engines: A Critical Survey (2023–2026)",
            url: "https://arxiv.org/html/2607.14035v1",
          },
          {
            label: "What Gets Cited: Competitive GEO in AI Answer Engines (SIGIR '26)",
            url: "https://arxiv.org/pdf/2605.25517",
          },
          {
            label: "LLM Pulse — Generative Engine Optimization: The Complete Guide for 2026",
            url: "https://llmpulse.ai/blog/geo-guide/",
          },
          {
            label: "LLMrefs — GEO: The 2026 Guide to AI Search Visibility",
            url: "https://llmrefs.com/generative-engine-optimization",
          },
          {
            label: "Wikipedia — Generative engine optimization",
            url: "https://en.wikipedia.org/wiki/Generative_engine_optimization",
          },
        ],
      },
    ],
    instagramUrl: "https://www.instagram.com/p/DcmGjUVAZsj/",
  },
  {
    slug: "6-sapkali-konsey-claude-skill",
    title: "Evden Çalışırken Karar Veremiyorsan: Claude'da 6 Şapkalı Konsey Kurdum",
    excerpt:
      "de Bono'nun Altı Şapkalı Düşünme tekniğini Claude Skill'e çevirdim. Kuruluşu, üç aşamalı akışı, dürüst sınırları ve tam promptu bu yazıda.",
    category: "kadin-uzmanlar-icin-sistemler",
    date: "2026-08-31",
    blocks: [
      {
        type: "p",
        text: "Evden çalışan bir anne-girişimsen büyük ihtimalle şu hâli biliyorsun: bir karar var önünde, iki seçenek var, ikisini de düşünmekten kafan dağılıyor ve elinde ne zamanın ne de yanına danışacak birinin var. Ben bu boşluk için Claude içinde bir 'karar konseyi' kurdum. Bu yazı, o konseyin ne olduğunu, nasıl kurulduğunu ve arkasındaki tam promptu içeriyor.",
      },
      { type: "h2", text: "Bu skill ne yapıyor?" },
      {
        type: "p",
        text: "Edward de Bono'nun 1985'te tanımladığı Altı Şapkalı Düşünme tekniğini aldım, Claude'da çalışan bir Skill'e (beceriye) çevirdim. Bir kararı — \"bütçemi reklama mı içeriğe mi harcayayım\" gibi net, seçenekli bir kararı — altı ayrı bakış açısından inceletiyor: beyaz şapka veriye bakar, kırmızı şapka sezgiye, siyah şapka riske, sarı şapka faydaya, yeşil şapka masadaki iki seçeneğin dışına, mavi şapka da sonunda toparlar.",
      },
      {
        type: "p",
        text: "Amaç senin yerine karar vermek değil. Amaç, tek başına düşünürken göremeyeceğin açıları görünür kılmak — sonra kararı yine sana bırakmak.",
      },
      { type: "h2", text: "Neden buna ihtiyaç duydum" },
      {
        type: "p",
        text: "Evden çalışırken en çok eksik olan şey zaman değil, çoğu zaman netlik. Kararı düşünecek 40 dakikan olsa bile, o 40 dakikada tek bir bakış açısından bakıp duruyorsun — genelde ya korkudan (\"ya olmazsa\") ya da alışkanlıktan. Bu skill, o tek açıyı zorla altıya bölüyor. Kırmızı şapka sezgini yazmana izin veriyor, siyah şapka nazik olmak zorunda değil, yeşil şapka hiç düşünmediğin bir seçeneği masaya koyuyor.",
      },
      { type: "h2", text: "Nasıl kurulur" },
      {
        type: "list",
        items: [
          "Önce Claude'un beceri kaydetme özelliğinin açık olduğundan emin ol: Settings → Capabilities → \"Code execution and file creation\" açık olmalı. Skills, bu açık olmadan çalışmıyor.",
          "Aynı sayfada \"Skills\" seçeneğini de aç.",
          "Bir sohbete altı şapkalı konsey becerisini oluşturacak promptu (aşağıdaki tam SKILL.md metnini) yapıştır.",
          "Claude beceriyi oluşturur. Oluşan dosyayı sağ paneldeki artifact üzerinden okuyabilirsin; istersen içeriği burada güncelleyebilirsin.",
          "\"Kaydet\" de. Beceri artık hesabına kayıtlı.",
        ],
      },
      {
        type: "p",
        text: "Sonrasında ayrı bir sohbette karar veremediğin bir konuyu yazdığında Claude, altı şapkalı konsey becerisini kullanması gerektiğini kendisi anlıyor ve devreye sokuyor. Adını söylemene gerek yok.",
      },
      { type: "h2", text: "Üç aşamalı akış" },
      { type: "h3", text: "Aşama 1 — Bağımsız görüşler" },
      {
        type: "p",
        text: "Her şapka sırayla ve diğerlerini görmeden yazar, en fazla 5 madde. Beyaz şapka her zaman ilk sıradadır çünkü veri olmadan diğer şapkalar havada konuşur. Bilinmeyen bir veri varsa uydurulmaz, \"bilinmiyor\" diye yazılır ve nasıl öğrenilebileceği eklenir — skill'in en sık bozulduğu nokta tam olarak burası.",
      },
      { type: "h3", text: "Aşama 2 — Çapraz itiraz" },
      {
        type: "p",
        text: "Şimdi her şapka diğerlerinin yazdığını görüyor ve tam olarak bir itiraz yazıyor: hangi maddeye katılmıyor, neden. Bu aşama konseyin kendi kendini onaylayan bir yankı odasına dönmesini engelleyen tek mekanizma.",
      },
      { type: "h3", text: "Aşama 3 — Mavi şapka sentezi" },
      {
        type: "p",
        text: "Mavi şapka kapatır ama görevi uzlaşma üretmek değildir. Gerçek anlaşmazlığın nerede olduğunu örtmeden yazar, kararın hangi tek bilgiye bağlı olduğunu söyler, kararı sana bırakır ve kararın kendisi değil, kararı vermek için gereken bir sonraki somut adımı verir.",
      },
      { type: "h2", text: "Yöntemin sınırı — buna dürüst olmak gerek" },
      {
        type: "quote",
        text: "de Bono'nun orijinal tekniği bir paralel düşünme yöntemi: grupta herkes aynı anda aynı şapkayı takar, amaç tartışmayı önlemektir. Bu skill yöntemi uyarlar, birebir uygulamaz — burada her şapka ayrı bir role verilir ve roller kasten çarpıştırılır. Ayrıca tek bir model altı rolü de oynuyor; bu altı bağımsız uzman görüşü değil, yapılandırılmış bir bakış açısı çeşitliliği. \"Konsey daha doğru karar verir\" gibi bir iddia kanıtlanmış değil.",
      },
      {
        type: "p",
        text: "Skill'i çıktının sonunda bu farkı belirtecek şekilde kurdum çünkü yöntemi bilen ya da çıktıyı bir yerde paylaşacak biri için bunu gizlemek yanıltıcı olurdu. Ayrıca sağlık, hukuk, vergi ve yatırım kararlarında konsey çalıştırılabilir ama sonunda ilgili uzmana yönlendirir — teşhis koymaz, hukuki ya da finansal tavsiye vermez.",
      },
      { type: "h2", text: "Tam prompt — SKILL.md" },
      {
        type: "p",
        text: "Aşağıdaki metnin tamamı, benim gerçekten kullandığım skill dosyası. Kopyala, Claude'a Skill olarak ekle.",
      },
      {
        type: "prompt",
        text: `---
name: alti-sapkali-konsey
description: Bir karar veya fikri, Edward de Bono'nun Altı Şapkalı Düşünme tekniğine dayanan üç aşamalı bir yapay zeka konseyinde test eder. Beyaz, kırmızı, siyah, sarı, yeşil ve mavi şapkalar bağımsız görüş yazar, birbirine itiraz eder, mavi şapka sentezler. Kullanıcı "şu fikrimi test et", "altı şapka", "konsey", "bu kararı nasıl vereceğimi bilmiyorum", "artılarını eksilerini göster", "ikisi arasında kaldım", "bunu bana eleştir", "karar veremiyorum" gibi bir şey söylediğinde bu beceriyi kullan. Kullanıcı "altı şapka" veya "konsey" kelimelerini kullanmasa bile, önünde iki veya daha fazla seçenek olan ve hangisini seçeceğini soran her durumda bu beceriyi kullanmayı ciddi biçimde değerlendir. Karar zaten verilmişse ve kullanıcı sadece uygulama soruyorsa kullanma.
---

# Altı Şapkalı Konsey

Bir kararı, altı ayrı bakış açısını birbirine çarpıştırarak inceler. Amaç kullanıcı yerine karar vermek değil; kullanıcının kendi başına göremeyeceği açıları görünür kılmaktır.

## Yöntemin sınırı — bunu gizleme

Edward de Bono'nun orijinal Altı Şapkalı Düşünme tekniği (1985) bir paralel düşünme yöntemidir. Grupta herkes aynı anda aynı şapkayı takar; amacı tartışmayı önlemektir.

Bu beceri yöntemi uyarlar, birebir uygulamaz. Burada her şapka ayrı bir role verilir ve roller kasten çarpıştırılır.

Kullanıcı yöntemi bilen biriyse veya çıktıyı bir yerde paylaşacağını söylüyorsa, bu farkı çıktının sonunda bir cümleyle belirt.

Ayrıca: tek bir model altı rolü de oynuyor. Bu, altı bağımsız uzman görüşü değildir. Elde edilen şey yapılandırılmış bakış açısı çeşitliliğidir. "Konsey daha doğru karar verir" gibi bir iddiada bulunma — bu kanıtlanmış değil.

## Başlamadan önce

Kararı netleştirmeden konseyi kurma. Şu üçü elde yoksa kullanıcıya sor, tahmin etme:

1. Karar nedir? Tek cümlede, seçenekleriyle. "Pazarlama yapmalı mıyım" karar değil; "bütçemi reklamla mı içerikle mi harcayayım" karardır.
2. Bağlayıcı kısıt ne? Zaman, para, enerji, ekip, takvim. En az bir tane olmalı.
3. Ne zaman kararlaştırılacak? Tarih varsa siyah ve mavi şapka bunu kullanır.

Eğer kullanıcı kararını zaten vermiş ve sadece onay arıyorsa bunu nazikçe söyle. Konsey, verilmiş kararı doğrulamak için kullanılırsa işe yaramaz.

## Aşama 1 — Bağımsız görüşler

Her şapka sırayla ve diğerlerini görmeden yazar. Beyaz şapka her zaman ilk sırada; veri olmadan diğer şapkalar havada konuşur.

Her şapka en fazla 5 madde yazar. Uzunluk değil keskinlik aranır.

Beyaz — Veri
Elde ne var, ne yok. Sayı, tarih, geçmiş sonuç, gözlem. Yorum yok, tavsiye yok.
Bilinmeyeni uydurma. Bilinmeyeni "bilinmiyor" diye yaz ve nasıl öğrenilebileceğini ekle. Bu becerinin en sık bozulduğu yer burasıdır: eksik veriyi makul görünen bir tahminle doldurmak, konseyin geri kalanını çürütür.

Kırmızı — Sezgi
Gerekçe istenmez, istenmemeli. "İçime sinmiyor", "bu beni yoruyor", "bunu düşününce rahatlıyorum" geçerli girdilerdir.
Kullanıcı duygusunu ifade ettiyse onu kullan. Etmediyse, ifade ettiği şeylerden çıkarım yapmaya çalış ve çıkarım olduğunu belirt.

Siyah — Risk
Ne ters gidebilir. Hangi varsayım çürük. En kötü senaryo ne.
Bu şapka nazik olmakla yükümlü değil. Yumuşatılmış bir siyah şapka konseyin tamamını değersizleştirir.
Ama korku üretme, risk göster. Genel felaket cümleleri ("başarısız olabilirsin") yasak; belirli ve takip edilebilir riskler yaz ("üçüncü haftada katılım düşerse geri kalan üç hafta boşa gider").

Sarı — Fayda
Bu işe yararsa neden yarar. Hangi mekanizma çalışır.
İyimserlik değil, gerekçe. "Harika olur" değil, "şu yüzden işe yarar".

Yeşil — Alternatif
Masadaki iki seçeneğin dışında ne var. Hibrit, erteleme, küçültme, sıralamayı değiştirme, başkasına devretme.
En az bir tane, kullanıcının hiç düşünmediği seçenek üret.

Mavi — Süreç (bu aşamada sadece çerçeve)
Bu karar aslında hangi soruya bağlı. Hangi kısıt gerçekten bağlayıcı, hangisi sadece alışkanlık veya korku.
Henüz sentez yapma.

## Aşama 2 — Çapraz itiraz

Şimdi her şapka diğerlerinin yazdıklarını görür.

Her şapka tam olarak bir itiraz yazar: başka bir şapkanın hangi maddesine katılmıyor ve neden.

Kural: itiraz somut bir maddeye olmalı. "Siyah şapka fazla karamsar" itiraz değil. "Siyah şapkanın üçüncü maddesi, kullanıcının daha önce benzer bir şeyi yaptığını göz ardı ediyor" itirazdır.

Bir şapkanın gerçekten itirazı yoksa "itirazım yok" yazması serbesttir. Zorlama itiraz üretme.

Bu aşama, konseyin yankı odasına dönmesini engelleyen tek mekanizmadır. Atlama.

## Aşama 3 — Mavi şapka sentezi

Mavi şapka kapatır. Görevi uzlaşma üretmek değil.

- Nerede gerçek anlaşmazlık var, açıkça yaz. Örtme.
- Kararın hangi tek bilgiye bağlı olduğunu söyle. Çoğu karar tek bir bilinmeyene bağlıdır.
- Kullanıcıya karar verdirme. Kararı netleştir, sonra bırak.
- Bir sonraki somut adımı yaz — kararın kendisini değil, kararı vermek için gereken adımı.

## Çıktı biçimi

Bu şablonu kullan:

## Karar
[tek cümle, seçenekleriyle]

## Kısıt
[bağlayıcı olan]

---

### Beyaz — Veri
### Kırmızı — Sezgi
### Siyah — Risk
### Sarı — Fayda
### Yeşil — Alternatif
### Mavi — Çerçeve

---

## Çapraz itirazlar
[şapka → hangi maddeye → neden]

---

## Mavi şapka sentezi

Gerçek anlaşmazlık:
Karar şuna bağlı:
Duyulması zor olan:
Bir sonraki adım:

"Duyulması zor olan" bölümü, siyah veya kırmızı şapkanın söylediği, kullanıcının muhtemelen duymak istemediği tek cümledir. Bu bölümü yumuşatma. Ama tek cümle olsun — dövmeye dönüşmesin.

## Dil ve sınırlar

- Türkçe yaz. İngilizce terim kullanırsan parantez içinde Türkçesini ver.
- Samimi ve resmi arası, sakin bir ton. Motivasyon dili yok.
- Uydurma sayı, uydurma araştırma, uydurma referans yok. Kaynaksız iddiayı ya kaynakla ya da yazma.
- Suçlayıcı ve utandırıcı dil yok. Siyah şapka sert olabilir, aşağılayıcı olamaz.
- "Kesin sonuç", "mutlaka yap", "bu kesin işe yarar" gibi garanti cümleleri yok.
- Sağlık, hukuk, vergi ve yatırım kararlarında konseyi çalıştırabilirsin ama sonunda ilgili uzmana yönlendir. Teşhis koyma, hukuki veya finansal tavsiye verme.
- Kullanıcı çok kişisel veya kriz içeren bir karar getirdiyse (ilişki, sağlık, güvenlik) konseyi mekanik biçimde çalıştırma. Önce insanı dinle.

## Kısa mod

Kullanıcı "kısa tut" veya "hızlı bak" derse: her şapka tek madde, çapraz itiraz aşaması atlanır, mavi şapka üç cümle. Bunun dışında tam akış çalışır.`,
      },
      { type: "h2", text: "Nasıl kullanılır — örnek" },
      {
        type: "p",
        text: "Skill kurulduktan sonra Claude'a şöyle bir şey yazman yeterli: \"Bütçemi reklama mı içerik üretimine mi harcayayım, bilemiyorum, altı şapka ile bak.\" Claude önce kararı ve kısıtı netleştirmek için sana soru sorar — atlamaz. Sonra altı şapka sırayla yazar, birbirine itiraz eder, mavi şapka kapatır. Sonunda kararı sana bırakır ama hangi tek bilgiye bağlı olduğunu söyler.",
      },
      {
        type: "p",
        text: "Bu beceriyi Claude'una eklemek istersen yukarıdaki promptu doğrudan kopyalayabilirsin. İstersen Instagram'daki gönderiye yorumla, DM'den de gönderirim.",
      },
      { type: "h2", text: "Kaynaklar" },
      {
        type: "links",
        items: [
          {
            label: "Edward de Bono — Six Thinking Hats (1985)",
            url: "https://en.wikipedia.org/wiki/Six_Thinking_Hats",
          },
          {
            label: "Anthropic — Claude Skills Documentation",
            url: "https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview",
          },
        ],
      },
    ],
    instagramUrl: "https://www.instagram.com/reel/DctoQf0hdER/",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getPostsByCategory(categorySlug?: string): Post[] {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  if (!categorySlug) return sorted;
  return sorted.filter((p) => p.category === categorySlug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
