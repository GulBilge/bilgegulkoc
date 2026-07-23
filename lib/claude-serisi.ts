export type PromptItem = {
  day: number;
  slug: string;
  title: string;
  intro: string;
  prompt?: string;
  commands?: string[];
};

export type StoryItem = {
  day: number;
  slug: string;
  title: string;
  stories: string[];
};

export const promptItems: PromptItem[] = [
  {
    day: 1,
    slug: "gun-1-claude-hatirlar",
    title: "Claude nedir, ChatGPT'den farkı ne",
    intro: "Claude'u tanıtan ve mesleğine göre özelleşen bir başlangıç promptu.",
    prompt:
      "Sen benim yapay zeka öğrenme arkadaşımsın. Adım adım, sade bir dille Claude'u bana tanıt.\n\nÖnce şunu açıkla: Claude nedir ve ChatGPT'den temel farkı ne?\n\nSonra bana şunu sor: Ben [mesleğimi] yapıyorum ve en çok [hangi işimde] zaman kaybediyorum. Bu bilgiyle bana Claude'un o işi nasıl kolaylaştırabileceğini 3 maddeyle anlat.\n\nTeknik terim kullanma. Sanki benim gibiyim — zeki ama meşgul, meraklı ama zamanı kısıtlı bir kadın uzmana anlatır gibi konuş.",
  },
  {
    day: 2,
    slug: "gun-2-dosya-analizi",
    title: "Dosya analizi",
    intro:
      "Bu gün için tek bir prompt yerine, doğrudan kopyalayıp kullanabileceğin 5 hazır komut var.",
    commands: [
      "Bu dosyayı 5 maddeyle özetle",
      "Bu metindeki en önemli 3 sorunu bul",
      "Bu rapora göre bana 3 soru sor",
      "Bu içerikteki tutarsızlıkları göster",
      "Bu tablodaki verileri yorumla",
    ],
  },
  {
    day: 3,
    slug: "gun-3-teknik-bilgi-gerekmiyor",
    title: "Kod yazmadan Claude",
    intro: "Mesleğine özel, direkt kopyalayıp kullanabileceğin bir başlangıç promptu.",
    prompt:
      "Sen benim için çalışan, teknik bilgi gerektirmeyen bir yapay zeka asistanısın. Ben [mesleğini yaz — örneğin: yaşam koçu / diyetisyen / içerik üreticisi] olarak çalışıyorum.\n\nBana şu 3 şeyi göster:\n\n1. Bu meslekte Claude'u kullanabileceğim en kolay 3 görev\n2. Bu görevlerden biri için hazır bir prompt örneği\n3. Kullanırken bilmem gereken tek kural\n\nSade yaz. Teknik terim kullanma. Sanki hiç kod görmemiş, ama zeki ve meşgul bir kadına anlatır gibi.",
  },
  {
    day: 4,
    slug: "gun-4-claude-projects",
    title: "Claude Projects",
    intro: "Direkt kullanabileceğin bir Project Instructions şablonu.",
    prompt:
      "Ben [mesleğin] olarak çalışıyorum. Hedef kitlem [yaş aralığı, kim oldukları]. Ses tonum [sıcak/profesyonel/samimi vb.]. Çıktılarımda her zaman [ne olsun]. Asla [ne olmasın]. Benimle çalışırken önce [nasıl başlamasını istiyorsun — örn: konuyu özetle, sonra detaya gir].",
  },
  {
    day: 5,
    slug: "gun-5-iki-tur-hafiza",
    title: "Claude'un iki tür hafızası",
    intro: "Claude Projects'e yapıştıracağın, seni bir kez tanıtan hafıza kurulum promptu.",
    prompt:
      "Benim hakkımda şunları bil ve her konuşmada bunları hatırla:\n\nAdım: [adın]\nMesleğim: [mesleğin]\nHedef kitlem: [kiminle çalışıyorsun]\nSes tonum: [nasıl yazmak istiyorsun — sıcak, profesyonel, samimi vb.]\nÇıktılarımda her zaman şunu yap: [ne istiyorsun — madde madde yaz, başlık koy vb.]\nAsla şunu yapma: [ne istemiyorsun — jargon kullanma, çok uzun yazma vb.]\nBenimle çalışırken önce [nasıl başlamasını istiyorsun].\n\nBu bilgilerle bana bir özet çıkar ve 'Hazırım, başlayalım' de.",
  },
  {
    day: 6,
    slug: "gun-6-skills",
    title: "Claude Skills",
    intro: "Mesleğine göre doldurabileceğin, direkt kullanıma hazır bir skill kurulum şablonu.",
    prompt:
      "Bu skill aktif olduğunda şu kurallara göre çalış:\n\nGörev: [bu skill ne için — örn: caption yazmak, e-posta hazırlamak]\nÇıktı formatı: [nasıl görünsün — madde mi, paragraf mı, başlıklı mı]\nUzunluk: [kaç kelime, kaç cümle]\nTon: [nasıl — sıcak, profesyonel, samimi, direkt]\nHer zaman şunu ekle: [ne — CTA, kaynak, soru vb.]\nAsla şunu yapma: [ne — jargon, emoji, çok uzun cümle vb.]\nBaşlamadan önce şunu sor: [hangi bilgiyi almadan başlamamalısın]",
  },
  {
    day: 7,
    slug: "gun-7-karsilama-otomasyonu",
    title: "DM karşılama otomasyonu",
    intro: "DM karşılama metni yazdıracak hazır bir Claude promptu.",
    prompt:
      "Benim adıma bir Instagram DM karşılama metni yaz. Şu bilgileri kullan:\n\nMesleğim: [mesleğin]\nHedef kitlem: [kimlerle çalışıyorsun]\nSunduğum hizmetler: [ne sunuyorsun — kısaca]\nİlk adım ne olmalı: [keşif görüşmesi mi, form mu, link mi]\nTon: sıcak ama profesyonel, samimi ama güven veren\n\nMetin şunları içersin: karşılama, kim olduğumu anlatan 1 cümle, ne sunduğumu anlatan 1 cümle, bir sonraki adım için net yönlendirme.\n\nMaksimum 5 cümle. Emoji kullanma. Bana 2 farklı versiyon yaz.",
  },
  {
    day: 8,
    slug: "gun-8-artifacts",
    title: "Artifacts",
    intro: "Mesleğine özel bir Artifact üretecek hazır Claude promptu.",
    prompt:
      "Bana bir [belge türü — örn: danışan onboarding kontrol listesi / haftalık içerik planı / hizmet karşılaştırma tablosu] oluştur.\n\nArtifact olarak aç — sohbet penceresinin yanında görünsün.\n\nİçeriği şunlara göre düzenle: [ne dahil edilsin, kaç madde, hangi başlıklar]\n\nFormatı şöyle olsun: [tablo mu, liste mi, belge mi]\n\nTon: [profesyonel / sıcak / teknik]\n\nBitince bana 'Artifact hazır, indirebilirsin' de.",
  },
  {
    day: 9,
    slug: "gun-9-web-search",
    title: "Web Search",
    intro: "Web Search ile çalışan, kaynak bulan ve özetleyen hazır bir Claude promptu.",
    prompt:
      "Web Search'ü kullanarak şunu araştır: [araştırmak istediğin konu]\n\nHedefim: [ne için kullanacaksın — içerik mi, sunum mu, danışan için kaynak mı]\n\nBana şunları ver:\n\n1. Konuyla ilgili güncel 3 bilgi veya istatistik (kaynak linkiyle)\n2. Bu alanda öne çıkan 2-3 yaklaşım veya trend\n3. Benim [mesleğim] için bu bilgiyi nasıl kullanabileceğime dair 1 pratik öneri\n\nTürkçe yaz. Kaynaklara link ver.",
  },
  {
    day: 10,
    slug: "gun-10-bir-fikri-bes-formata-cevirmek",
    title: "1 fikirden 5 format",
    intro: "Direkt Claude'a yapıştırabileceğin, 1 fikirden 5 format üreten prompt.",
    prompt:
      "Ana fikrim: [fikrin — örn: 'tükenmişlikten çıkmak', 'danışana sınır koymak', 'evden verimli çalışmak']\nMesleğim: [mesleğin]\nHedef kitlem: [kimler]\n\nBana bu fikirden 5 farklı Instagram formatı üret:\n\n1. Reel senaryosu — kanca (3 seçenek) + 60 saniyelik içerik akışı\n2. Carousel planı — 8 slayt başlığı + her slayt için 1 cümle açıklama\n3. Feed görseli metni — tek güçlü cümle, kaydedilmelik\n4. Threads tweetleri — 4 farklı bakış açısı\n5. Story içeriği — anket sorusu + soru kutusu metni\n\nHer format için hedef: paylaşılmak, kaydedilmek, yorum aldırmak.",
  },
  {
    day: 11,
    slug: "gun-11-eksik-talimat",
    title: "Prompt şablonu",
    intro: "Mesleğine göre doldurabileceğin evrensel prompt şablonu.",
    prompt:
      "Ben [mesleğin] olarak çalışıyorum.\n\nGörev: [ne yapmasını istiyorsun — tek cümle, net]\nHedef kitle: [bu çıktı kim için — danışan mı, takipçi mi, müşteri mi]\nFormat: [nasıl olsun — madde mi, paragraf mı, tablo mu, kaç kelime]\nTon: [nasıl bir dil — sıcak, profesyonel, samimi, direkt]\nBağlam: [varsa ekstra bilgi — konu nedir, özel bir durum var mı]\nÇıktıda mutlaka şunu ekle: [ne olsun]\nÇıktıda asla şunu yapma: [ne olmasın]",
  },
  {
    day: 12,
    slug: "gun-12-drive-baglantisi",
    title: "Google Drive Connector",
    intro: "Google Drive Connector kurduktan sonra direkt kullanabileceğin bir Claude promptu.",
    prompt:
      "Google Drive'ımda [dosya adı veya konu] ile ilgili dosyayı bul.\n\nBu dosyayı şu amaçla analiz et: [ne yapmak istiyorsun — özetle, karşılaştır, güncelle, içinden belirli bilgiyi çıkar]\n\nÇıktı formatım: [nasıl olsun — madde, paragraf, tablo]\n\nVarsa şunlara özellikle dikkat et: [özel notlar]",
  },
  {
    day: 13,
    slug: "gun-13-ikinci-beyin",
    title: "Claude'u ikinci beyin olarak kullanmak",
    intro: "Aklındaki her şeyi boşaltıp Claude'un organize etmesini sağlayan hazır prompt.",
    prompt:
      "Şu an aklımda bunlar var — hepsini sana yazıyorum, sen organize et:\n\n[Aklındaki her şeyi yaz — fikirler, yapılacaklar, endişeler, sorular, planlar. Düzensiz olsun, önemli değil.]\n\nBunları şu şekilde organize et:\n\n1. Bu hafta yapılacaklar (öncelik sırasıyla)\n2. İlerleyen günler için bekleyebilecekler\n3. İçerik fikirleri (ayrı liste)\n4. Takipte olması gereken şeyler\n5. Bırakabileceğim / erteleyebileceğim şeyler\n\nSonunda bana şunu sor: 'Bugün enerjini en çok nereye vermek istiyorsun?'",
  },
  {
    day: 14,
    slug: "gun-14-sss-sistemi",
    title: "SSS + karşılama sistemi",
    intro: "Claude'a yapıştırınca SSS metinlerini yazan hazır prompt.",
    prompt:
      "Ben [mesleğin] olarak çalışıyorum. Hedef kitlem [kimler].\n\nBana en çok sorulan sorular şunlar:\n1. [soru]  2. [soru]  3. [soru]  4. [soru]  5. [soru]\n\nHer soru için şu kriterlere göre bir cevap yaz:\n\n— Sıcak ve samimi ama profesyonel\n— 3-4 cümleyi geçmesin\n— Güven vermeli, satış baskısı hissettirmemeli\n— Bir sonraki adımı net göstermeli\n\nSonunda bana bu metinleri nerede kullanabileceğimi de öner.",
  },
  {
    day: 15,
    slug: "gun-15-ses-kopyasi",
    title: "Ses kopyası",
    intro: "Claude'a sesini öğretecek ve bunu her seferinde kullanan hazır prompt.",
    prompt:
      "Sana bazı metinler göndereceğim. Bu metinleri okuyarak benim yazma stilimi ve ses tonumu öğren.\n\n[Buraya kendi yazdığın 3-5 caption, e-posta veya Threads tweeti yapıştır]\n\nBu metinlerden şunları analiz et:\n\n— Cümle uzunluğum nasıl (kısa mı, uzun mu, karışık mı)\n— Hangi kelimeleri sık kullanıyorum\n— Tonumun genel karakteri ne (sıcak mı, direkt mi, empatik mi)\n— Emoji kullanıyor muyum, nasıl\n— Nasıl başlıyor ve bitiriyorum\n\nAnalizi bana yaz. Sonra de ki: 'Artık bu tonda yazabilirim. Ne yazmamı istiyorsun?'",
  },
  {
    day: 16,
    slug: "gun-16-extended-thinking",
    title: "Extended Thinking",
    intro: "Extended Thinking ile çalışan, stratejik karar için hazır Claude promptu.",
    prompt:
      "Extended Thinking modunu kullan.\n\nKonu: [analiz etmek istediğin karar veya durum]\nBağlam: [ne işin var, ne yapmak istiyorsun, neyi değerlendiriyorsun]\n\nBenden şunları yap:\n\n1. Bu konuyu en az 3 farklı açıdan incele\n2. Her açının artılarını ve eksilerini göster\n3. Gözden kaçırabileceğim riskleri veya fırsatları belirt\n4. Sonunda bir öneri sun ama son kararı bana bırak\n\nAcele etme — derin düşün.",
  },
  {
    day: 17,
    slug: "gun-17-dusunce-bosaltma",
    title: "Düşünce boşaltma",
    intro: "Kafandaki karmaşayı netliğe çeviren yapılandırılmış bir Claude promptu.",
    prompt:
      "Şu an kafam karışık ve düşüncelerimi netleştirmek istiyorum. Sana her şeyi döküyorum — lütfen yargılamadan dinle ve sorularla beni netleştir.\n\n[Aklındaki her şeyi yaz — sorunlar, korkular, fikirler, belirsizlikler]\n\nBana şunu yap:\n\n1. Yazdıklarımı 3 ana temaya ayır\n2. Her temada şu soruyu sor: 'Burada seni en çok ne rahatsız ediyor?'\n3. En acil olan konuyu birlikte seç\n4. O konuda bana şunu sor: 'Şu an elinde ne var ve ne eksik?'\n\nAcele etme. Ben yazdıkça sen sorularla beni yönlendir.",
  },
  {
    day: 18,
    slug: "gun-18-deep-research",
    title: "Deep Research",
    intro: "Mesleğine özel Deep Research promptu.",
    prompt:
      "Deep Research yap: [araştırma konusu]\n\nMesleğim ve bağlamım: [ne işin var, bu araştırmayı neden yapıyorsun]\nOdaklan: [özellikle neyi öğrenmek istiyorsun]\nKapsam: [Türkiye odaklı mı, global mı, 2024-2026 dönemi mi]\nÇıktı formatı: [rapor mu, madde madde mi, karşılaştırmalı tablo mu]\n\nKaynakları göster. Türkçe yaz.",
  },
  {
    day: 19,
    slug: "gun-19-uc-kural",
    title: "Prompt kalitesi — 3 kural",
    intro: "3 kuralı otomatik olarak uygulayan, mesleğine göre doldurabileceğin prompt şablonu.",
    prompt:
      "ROL: Sen [spesifik rol ve deneyim — örn: '8 yıllık deneyimli bir beslenme uzmanısın, danışanlarınla sıcak ve bilimsel konuşursun'].\nGÖREV: [Ne yapmasını istiyorsun — net, tek cümle]\nFORMAT: [Nasıl görünsün — madde mi, paragraf mı, tablo mu / başlık var mı / kaç bölüm]\nSINIR: [Uzunluk sınırı — kaç kelime / cümle / madde. Ve ilk cümle nasıl başlamalı]\nBAĞLAM: [Varsa ekstra bilgi]",
  },
  {
    day: 20,
    slug: "gun-20-notion-sheets",
    title: "Notion + Sheets Connector",
    intro: "Connector kurulduktan sonra direkt kullanabileceğin Notion ve Sheets komutları.",
    commands: [
      "Notion'ımdaki [sayfa adı] sayfasına bak ve [ne yapmasını istiyorsun].",
      "Notion veritabanımdaki [konu] ile ilgili içerikleri listele ve özetle.",
      "Google Sheets'imdeki [dosya adı] tablosunu analiz et: [ne öğrenmek istiyorsun].",
      "[Dosya adı] tablosundaki verilere göre [ne yapmasını istiyorsun — karşılaştır, özetle, eksik bul].",
    ],
  },
  {
    day: 21,
    slug: "gun-21-seri-bitiyor-baslangic",
    title: "Kapanış + devam yol haritası",
    intro: "Claude ile devam etmek için kişisel bir yol haritası oluşturacak prompt.",
    prompt:
      "21 günlük Claude serisini tamamladım. Şimdiye kadar şunları öğrendim ve kullandım:\n\n[Öğrendiklerini listele — Projects, Skills, dosya analizi, web search, ses kopyası, SSS sistemi vb.]\n\nMesleğim: [mesleğin]\nŞu an en çok zorlandığım iş süreçleri: [3 madde yaz]\n\nBana şunları ver:\n\n1. Bu 3 sorunu çözmek için Claude'u nasıl kullanabilirim — spesifik, uygulanabilir 3 öneri\n2. Bir sonraki 30 günde geliştirmem gereken 2 Claude alışkanlığı\n3. Benim mesleğimde Claude'u kullananların sık yaptığı 1 hata ve nasıl kaçınırım\n\nSade yaz. Uygulanabilir ol. Bu bir başlangıç noktası.",
  },
];

export const storyItems: StoryItem[] = [
  {
    day: 1,
    slug: "gun-1-claude-hatirlar",
    title: "Claude nedir, ChatGPT'den farkı ne",
    stories: [
      "Teaser: Bugün başlıyoruz. 21 gün, 21 adım. Claude nedir, ne yapar, hayatına nasıl girer — hiçbir teknik bilgi olmadan.",
      "Soru: Yapay zeka söz konusu olunca aklına gelen ilk korku ne?",
      "Bilgi: Claude, Anthropic adlı bir şirket tarafından geliştirildi. Kurucular eski OpenAI çalışanları — güvenlik öncelikli yapay zeka odakları bu yüzden farklı.",
      "Kapanış: ChatGPT'den memnunsan da Claude'u hiç denemediysen, karşılaştırma yapmadan yeterli demiş oluyorsun. İkisi aynı değil.",
    ],
  },
  {
    day: 2,
    slug: "gun-2-dosya-analizi",
    title: "Dosya analizi",
    stories: [
      "Teaser: Claude'un en pratik özelliği: dosya yükleme. PDF, Word, Excel — yükle, sor, al.",
      "Soru: Belgelerini okumak için ne kadar zaman harcıyorsun — çok fazla, orta, pek değil?",
      "İpucu: Claude'a dosya yüklerken 'Bu dosyayı oku ve bana 3 soru sor' de. Claude'un soracağı sorular, o belgeden ne çıkarabileceğini gösteriyor.",
      "Kapanış: Danışan formu, müşteri brifing, seans notu — Claude'a yükleyip analiz ettirebilirsin. Tek şart: hassas kişisel bilgileri önce çıkar.",
    ],
  },
  {
    day: 3,
    slug: "gun-3-teknik-bilgi-gerekmiyor",
    title: "Kod yazmadan Claude",
    stories: [
      "Teaser: Yapay zeka = kod = benim için değil mi diyorsun? Bugünkü gönderi tam sana göre.",
      "Soru: Claude'u daha önce denedin mi — evet kullanıyorum, hayır henüz denemedim, denedim ama bıraktım?",
      "Sahne: Bir takipçi yazmıştı: 'Ben terapistim, Claude benim için değil sanıyordum.' Şimdi her seans notunu Claude ile özetliyor, seans aralarında 20 dakika kazanıyor.",
      "Kapanış: Claude'u kullanmak için mühendis olmak gerekmiyor. Türkçe yazabiliyorsan yeterli.",
    ],
  },
  {
    day: 4,
    slug: "gun-4-claude-projects",
    title: "Claude Projects",
    stories: [
      "Teaser: Claude kullanıyorsun ama her seferinde kendini yeniden mi tanıtıyorsun? Bugünkü carousel bunu bir kez çözüyor.",
      "Anket: Claude'da Projects özelliğini biliyor muydun — biliyordum / ilk kez duyuyorum?",
      "İpucu: Claude Projects'te birden fazla proje açabilirsin. İçerik, danışmanlık, kişisel gelişim, ev organizasyonu — her biri farklı bir asistan gibi davranıyor.",
      "Kapanış: Koçluk notların, ses tonun, müşteri şablonların — hepsi Claude'daki projende. Her konuşmada yeniden anlatmıyorsun.",
    ],
  },
  {
    day: 5,
    slug: "gun-5-iki-tur-hafiza",
    title: "Claude'un iki tür hafızası",
    stories: [
      "Teaser: Claude seni her seferinde unutuyor mu? Bugün bunun çözümünü anlatıyorum.",
      "Anket: Claude'a kendini kaç kez tanıttın bu hafta — 1-2 kez, 3-5 kez, saymayı unuttum?",
      "İpucu: Project Instructions'a sadece kim olduğunu değil, Claude'un nasıl davranmasını istediğini de yaz. Örnek: 'Bana her zaman 3 seçenek sun, seçimi bana bırak.'",
      "Kapanış: Claude'un hafızası iki türlü çalışır: Projects'te kalıcı, sohbette geçici. İkisini de doğru kullanmak saatler kazandırıyor.",
    ],
  },
  {
    day: 6,
    slug: "gun-6-skills",
    title: "Claude Skills",
    stories: [
      "Teaser: Claude'a her seferinde aynı talimatı tekrar mı yazıyorsun? Bugün bunun çözümü var.",
      "Anket: Claude'da Skills özelliğini biliyor muydun — biliyordum / ilk kez duyuyorum?",
      "İpucu: Skills'te ne kadar spesifik olursan Claude o kadar tutarlı çalışır. 'Kısa yaz' yerine '150 kelimeyi geçme' yaz.",
      "Kapanış: Yılda 16 saat — Skills kurmadan Claude kullananların kaybettiği süre bu.",
    ],
  },
  {
    day: 7,
    slug: "gun-7-karsilama-otomasyonu",
    title: "DM karşılama otomasyonu",
    stories: [
      "Teaser: Aynı DM'e kaçıncı kez aynı cevabı yazdın bu hafta? Bugün bunun çözümünü anlatıyorum.",
      "Anket: DM'lere günde ne kadar zaman harcıyorsun — 5 dakikadan az, 5-15 dk, 15 dakikadan fazla?",
      "Sahne: Bir koç şöyle anlatmıştı: her pazartesi sabahı 45 dakikasını DM cevaplamakla geçiriyordu. Şimdi o 45 dakika danışan seansı hazırlığına gidiyor.",
      "Kapanış: 'Kişisel dokunuş kaybolur' diye düşünebilirsin. Kaybolmaz — çünkü Claude senin sesinde yazar.",
    ],
  },
  {
    day: 8,
    slug: "gun-8-artifacts",
    title: "Artifacts",
    stories: [
      "Teaser: Claude sana belge, tablo, kontrol listesi üretebilir — doğrudan çalışma alanında.",
      "Anket: Claude'dan metin alıp başka bir yere yapıştırıyor musun — her zaman, bazen, hiç düşünmemiştim?",
      "İpucu: Artifacts'te Claude'a 'bunu düzenle' diyebilirsin. Tabloya sütun ekle, listeye madde ekle — hepsi aynı pencerede.",
      "Kapanış: Danışan onboarding formu, haftalık içerik planı, hizmet teklifi — Claude Artifacts ile yapılabilir. Kopyala-yapıştır yok.",
    ],
  },
  {
    day: 9,
    slug: "gun-9-web-search",
    title: "Web Search",
    stories: [
      "Teaser: Claude internet araması yapabiliyor. Büyük ihtimalle bu özelliği hiç aktif etmedin.",
      "Anket: İçerik yazarken araştırma için ne kadar zaman harcıyorsun — 10 dakikadan az, 10-30 dk, 30 dakikadan fazla?",
      "İpucu: Claude'a 'Web Search kullanarak' diye başlarsan internete bağlanıyor. Bu ibare olmadan sadece eğitim verisindeki bilgiyle yanıt veriyor.",
      "Kapanış: İçerik yazarken istatistik, kaynak, güncel bilgi — bunları Claude bulabilir, hem de kaynak göstererek.",
    ],
  },
  {
    day: 10,
    slug: "gun-10-bir-fikri-bes-formata-cevirmek",
    title: "1 fikirden 5 format",
    stories: [
      "Teaser: 1 fikir, 5 içerik, 10 dakika. Bugün sistemi paylaşıyorum.",
      "Anket: Haftada kaç içerik paylaşıyorsun — 1-2, 3-5, düzensiz?",
      "İpucu: Eski bir içeriğini Claude'a yapıştır ve 'Bu içeriği 5 farklı formata çevir' de. Sıfırdan başlamak zorunda değilsin.",
      "Kapanış: Haftada 1 saat Claude ile içerik hazırlığı → 5 günlük içerik.",
    ],
  },
  {
    day: 11,
    slug: "gun-11-eksik-talimat",
    title: "Prompt şablonu",
    stories: [
      "Teaser: Claude işe yaramıyor mu diyorsun? Büyük ihtimalle sorun soruda.",
      "Anket: Claude'dan aldığın cevapla ne sıklıkla memnun oluyorsun — her zaman, bazen, nadiren?",
      "İpucu: Promptuna 'Bana 3 farklı versiyon yaz' ekle. Tek cevap yerine seçenek sunuyor, en iyisini seçiyorsun.",
      "Kapanış: Claude'u verimli kullananlar daha zeki değil — daha net soruyorlar. Netlik öğrenilebilir.",
    ],
  },
  {
    day: 12,
    slug: "gun-12-drive-baglantisi",
    title: "Google Drive Connector",
    stories: [
      "Teaser: Claude artık Google Drive'ına bağlanabiliyor. Bu ne değiştirir?",
      "Anket: Google Drive'ı aktif kullanıyor musun — evet çok dosyam var, biraz, pek kullanmıyorum?",
      "İpucu: Drive Connector kurduktan sonra 'Drive'ımda geçen aya ait tüm içerik notlarımı bul ve bir özet çıkar' de.",
      "Kapanış: Kurulum 3 dakika. Kazanç her gün.",
    ],
  },
  {
    day: 13,
    slug: "gun-13-ikinci-beyin",
    title: "Claude'u ikinci beyin olarak kullanmak",
    stories: [
      "Teaser: Beynin doluysa her şey dağılıyor. Claude'u ikinci beyin olarak kullanmayı bugün anlatıyorum.",
      "Anket: Şu an aklında kaç 'unutmamalıyım' var — 1-3, 4-7, saymayı bıraktım?",
      "İpucu: Haftanın başında 5 dakika ayır. Aklındaki her şeyi Claude'a dök, 'organize et ve önceliklendir' de.",
      "Kapanış: Not uygulaması sadece saklar. Claude saklar ve işler.",
    ],
  },
  {
    day: 14,
    slug: "gun-14-sss-sistemi",
    title: "SSS + karşılama sistemi",
    stories: [
      "Teaser: Aynı soruları tekrar tekrar cevaplamak geride kaldı. Bugün sistemi anlatıyorum.",
      "Anket: Bu ay aynı soruyu kaç kez cevapladın tahminen — 1-5, 5-15, saymaktan vazgeçtim?",
      "İpucu: Claude'a SSS yazdırırken 'Her cevabın sonunda bir sonraki adım net olsun' ekle.",
      "Kapanış: SSS sayfası + DM otomasyonu + highlight yapısı = uyurken çalışan bir karşılama sistemi.",
    ],
  },
  {
    day: 15,
    slug: "gun-15-ses-kopyasi",
    title: "Ses kopyası",
    stories: [
      "Teaser: Claude senin gibi yazabiliyor — ama önce sesini öğrenmesi lazım.",
      "Anket: Claude'dan gelen metinleri ne sıklıkla düzenliyorsun — hep, çoğunlukla, nadiren?",
      "İpucu: Ses kopyasını Projects'e kaydet. 'Benim yazma stilim şöyle...' diye bir bölüm aç, orada anlat.",
      "Kapanış: Takipçin 'bu sen yazmış gibi' demeli. Bunun için önce Claude'a sesini öğretmen lazım.",
    ],
  },
  {
    day: 16,
    slug: "gun-16-extended-thinking",
    title: "Extended Thinking",
    stories: [
      "Teaser: Claude düşünebiliyor — sadece cevap vermiyor. Bu özellik önemli kararlar için her şeyi değiştiriyor.",
      "Anket: Önemli bir iş kararı alırken ne yapıyorsun — kendim düşünürüm, birine danışırım, ikisi de, erteliyorum?",
      "İpucu: Extended Thinking'i fiyat artışı, hizmet paketi değişikliği veya yeni hizmet lansmanı kararlarında dene.",
      "Kapanış: Hız her zaman değer değil. Bazen en verimli şey yavaşlamak ve derinlemesine düşünmek.",
    ],
  },
  {
    day: 17,
    slug: "gun-17-dusunce-bosaltma",
    title: "Düşünce boşaltma",
    stories: [
      "Teaser: Kafan karışık ama konuşacak kimse yok. Bugün Claude'u nasıl netleşme aracı olarak kullandığımı anlatıyorum.",
      "Anket: Kafan karışık olduğunda ne yapıyorsun — yazarım, birine anlatırım, uyurum, erteliyorum?",
      "Sınır hatırlatması: Claude bir terapist değil. Duygusal destek için insan bağlantısı ve uzman desteği her zaman daha değerli. Claude düşünce organize etmek için güçlü — ama bu onun rolü.",
      "Kapanış: Haftada bir kez 15 dakika: aklındaki her şeyi Claude'a dök, netleş.",
    ],
  },
  {
    day: 18,
    slug: "gun-18-deep-research",
    title: "Deep Research",
    stories: [
      "Teaser: Araştırma için sekme sekme gezmek geçmişte kaldı. Deep Research özelliğini bugün anlatıyorum.",
      "Anket: Bir konu araştırmak için ne kadar zaman harcıyorsun genelde — 30 dakikadan az, 30dk-2 saat, 2 saatten fazla?",
      "İpucu: Deep Research'e 'Türkiye odaklı' veya 'global karşılaştırmalı' gibi kapsam belirt. Belirsiz sorulara belirsiz cevaplar geliyor.",
      "Kapanış: Web Search tek soruya cevap verir. Deep Research kapsamlı analiz yapar. Farkı bilmek doğru aracı seçtiriyor.",
    ],
  },
  {
    day: 19,
    slug: "gun-19-uc-kural",
    title: "Prompt kalitesi — 3 kural",
    stories: [
      "Teaser: Claude'dan iyi sonuç alanlar daha zeki değil — 3 kuralı biliyor.",
      "Anket: Promptlarında genellikle ne eksik — rol vermek, format belirtmek, sınır koymak, hepsini yapıyorum?",
      "İpucu: Promptunu yazdıktan sonra sor: 'Bu promptu okuyan Claude, tam olarak ne üretmesi gerektiğini biliyor mu?' Cevap hayırsa daha net yaz.",
      "Kapanış: İyi prompt yazmak öğrenilebilir. Bir kez öğrenilince yapay zekayla çalışmanın tüm boyutu değişiyor.",
    ],
  },
  {
    day: 20,
    slug: "gun-20-notion-sheets",
    title: "Notion + Sheets Connector",
    stories: [
      "Teaser: Claude artık Notion ve Sheets'e bağlanabiliyor. Bu ne değiştirir?",
      "Anket: Hangisini kullanıyorsun — Notion, Google Sheets, ikisi de, hiçbiri?",
      "İpucu: Notion Connector'ı kurunca 'Notion'ımdaki içerik planı sayfasına bak, bu haftaki boşlukları gör' de.",
      "Kapanış: 21 gün içinde Claude'un en güçlü kombinasyonu: Projects + Skills + Connectors.",
    ],
  },
  {
    day: 21,
    slug: "gun-21-seri-bitiyor-baslangic",
    title: "Kapanış + devam yol haritası",
    stories: [
      "Teşekkür: 21 gün boyunca burada olduğun için teşekkürler. Her DM, her yorum, her kaydetme — hepsini gördüm. Bugün kapanış. Ama bu başlangıç.",
      "Anket: 21 günde Claude'u denedin mi — evet kullanmaya başladım, henüz denemek üzereyim, hâlâ düşünüyorum?",
      "Vizyon: Yapay zekayı öğrenmek bir trend takibi değil. Zamanını ve zihni geri almak. Bu araçları kullananlar ile kullanmayanlar arasındaki fark 1 yılda çok büyüyecek.",
      "Kapanış: Seri bitti ama bu başlangıç. Claude her gün yeni özellikler alıyor. Meraklı kal, denemeye devam et.",
    ],
  },
];
