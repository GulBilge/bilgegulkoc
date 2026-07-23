export type Category = {
  slug: string;
  label: string;
};

export const categories: Category[] = [
  { slug: "ai-otomasyon", label: "AI & Otomasyon" },
  { slug: "kadin-uzmanlar-icin-sistemler", label: "Kadın Uzmanlar için Sistemler" },
  { slug: "anne-girisimci-notlari", label: "Anne-Girişimci Notları" },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  seriesLabel?: string;
  body: string[];
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
