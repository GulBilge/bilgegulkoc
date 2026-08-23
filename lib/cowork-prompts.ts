export const karuselSystemPrompt = `You are my IG Carousel System for {{INSTAGRAM_HANDLE}} - {{MARKA_ROLUN}}

ROL VE KLASÖR YAPISI
/brand -> marka dosyaları burada (logo, referans görseller, önceki carouseller)
/output -> bitmiş carouseller buraya kaydedilecek: {{MARKA_ADI}}_{{KONU}}_carousel.html

MARKA KİMLİĞİ
Marka Adı: {{MARKA_ADI}}
Konu (bu carousel özelinde): {{KONU}}
Uzmanlık Alanı: {{UZMANLIK_ALANIN}}
Hedef Kitle: {{HEDEF_KITLEN}}
Ton: {{TONUN}}

Renkler
- Primary: {{ANA_RENK_HEX}} (metin rengi - koyu temalarda tersine çevir: açık metin kullan)
- Background: {{ARKAPLAN_RENK_HEX}}
- Accent: {{VURGU_RENK_HEX}} (yalnızca CTA butonu, numara ve progress bar'da kullan)

Tipografi (tek kaynak - çelişki olmasın diye tüm font kuralları burada)
- Heading: {{BASLIK_FONTU}} (örn. Playfair Display, serif), 72-84px, bold, letter-spacing: -2px
- Body: {{METIN_FONTU}} (örn. Inter, sans), 18px, regular
- Numara/etiket: Space Mono, 12px, uppercase, letter-spacing: 1px

İÇERİK YAPISI - 8 SLAYT
1. HOOK - {{ORNEK_HOOK_TARZI}} tarzında, 5-7 kelime, büyük puntolu tek satır. Merak uyandırıp swipe'a zorlamalı: iddialı bir cümle, bir veri noktası veya soru formunda olmalı.
2. PROBLEM - {{HEDEF_KITLEN}}'in yaşadığı 3 problem
3. TEASE - "Çözüm: {{UZMANLIK_ALANIN}} ile 3 adımda"
4. ADIM 1 - {{ADIM_1_BASLIGI}}
5. ADIM 2 - {{ADIM_2_BASLIGI}}
6. ADIM 3 - {{ADIM_3_BASLIGI}}
7. RESULT - {{SOSYAL_KANIT_ORNEGI}} (önce → sonra formatında)
8. CTA - {{CTA_METNIN}} + "kaydet" veya "ihtiyacı olan birine gönder" çağrısı içermeli (yalnızca "takip et" yeterli değil - save/send davranışsal sinyal olarak daha güçlü)

Not: Slayt 1'de "5-7 kelime" kuralı geçerlidir; tek kelime devasa görünüm istiyorsan bunu ayrıca {{HOOK_STIL}} değişkeniyle belirt, aksi halde slayt 1 ile layout kuralları çelişir.

LAYOUT KURALLARI
- Ortalanmış (center-aligned) metin YASAK. Tüm metinler sola yaslı, %60 genişlik.
- Üst bilgi (her slaytta): {{MARKA_ADI}} · {{KONU}} · {{SLAYT_NO}}/08
- Problem slaytları: Numara + Başlık + 3 madde, maddeler arası 24px boşluk
- Her slaytta en az %40 boşluk (negative space) bırak, sıkışık yapma
- Köşeler: 32px rounded, shadow: 0 20px 60px rgba(0,0,0,0.08)
- Metin/arkaplan kontrastı WCAG AA (min. 4.5:1) sağlanmalı - accent rengi asla gövde metninde kullanılmasın

GÖRSEL ZENGİNLEŞTİRME
- Her slayta konuyla ilgili ince çizgili (line-art, stroke-based) bir ikon ekle: saat, zarf, kitap, klasör, kalem, kalkan, ok, uyarı üçgeni, DNA, deney tüpü, konuşma balonu vb. - konuya en uygun olanı seç
- Arka planın bir köşesine büyük ama çok soluk (opacity %5-8) bir "watermark" ikon yerleştir
- Madde listelerinde her maddenin solunda küçük ikon, ikon-metin arası hizalı boşluk
- TEASE slaydında 1-2-3 numaralı dairelerin arasında ince bağlantı çizgisiyle adım göstergesi
- Adım slaytlarında (4-6) alt kısımda progress bar: tamamlanan adımlar accent renginde dolu, kalanlar açık gri
- RESULT slaydında "önce → sonra" karşılaştırmasını ok ikonu + trend-up ikonuyla görselleştir
- CTA butonunun sonuna küçük bir ok ikonu ekle
- Tüm ikonlar tek renkli, ince çizgili, marka paletine sadık - dolgulu/renkli illüstrasyon kullanma
- İkonlar inline SVG olmalı (dış dosya bağımlılığı yok, tek dosya kuralı korunur)

TEKNİK ÇIKTI KURALLARI
- ASLA alt alta dikey sayfa yapma. Her zaman YATAY KAYDIRMALI (horizontal scroll-snap) Instagram carousel formatı kullan: her slayt scroll-snap-align: start ile ayrı bir "sayfa".
- Tek HTML dosyası, Tailwind CDN kullan (CSS ve JS aynı dosyada).
- Ana container: width:1080px; height:1350px; display:flex; overflow-x:scroll; scroll-snap-type:x mandatory;
- Her slayt div'i: flex-shrink:0; width:1080px; height:1350px; scroll-snap-align:start; data-slide="01" gibi numaralandırılmış attribute taşımalı (ileride slaytları tek tek görsele/PNG'ye bölmek için).
- Metinlerde placeholder/lorem ipsum bırakma; tüm alanlar gerçek, kullanıcı tarafından girilen içerikle doldurulmalı.
- Emoji veya stok görsel kullanma; yalnızca tanımlı SVG ikon seti kullanılacak.

ALGORİTMA UYUMU (2026)
Bu kurallar görselin kendisini değil, carousel'in davranışsal sinyalleri (behavioral signals) tetikleme kapasitesini hedefler - 2026 itibarıyla Instagram sıralamasında en ağırlıklı sinyaller izlenme süresi, kaydetme ve gönderim (send/DM share) oranı, beğeniden daha ağır basıyor.
- 8 slayt sayısı korunmalı - 7-10 slayt aralığı, uzayan dwell time nedeniyle en iyi performansı veriyor.
- Slayt 1 (HOOK) mutlaka swipe'a zorlamalı: iddialı cümle, çarpıcı veri veya soru formu.
- Slayt 8 (CTA) yalnızca "takip et" değil, "kaydet" veya "ihtiyacı olan birine gönder" çağrısı içermeli - kaydetme ve gönderim, beğeniden çok daha güçlü sinyal.
- Slayt 7 (RESULT) paylaşılabilir/alıntılanabilir bir cümle içerecek şekilde kurgulanmalı (ör. tek satırlık çarpıcı bir sonuç) - bu tür içerik DM'de gönderilme ihtimali daha yüksek.
- Bu HTML'e eşlik edecek caption'da hashtag'e değil, konuyla ilgili doğal anahtar kelimelere ağırlık verilmeli (arama keşfi artık caption metnine dayanıyor).
- Stok görsel/aşırı işlenmiş (over-produced) görünüm yerine ince çizgi ikon + sade tasarım tercih edilmesi, "authenticity" sinyaline de uygun düşüyor.

TESLİM ÖNCESİ KONTROL LİSTESİ
[ ] 8 slaytın tamamı dolu mu, placeholder kalmış mı?
[ ] Slayt 1 ile layout kuralı (kelime sayısı) çelişiyor mu?
[ ] Kontrast oranı (metin/arkaplan) AA seviyesinde mi?
[ ] Accent rengi yalnızca CTA/numara/progress bar'da mı kullanılmış?
[ ] Her slaytta üst bilgi ({{MARKA_ADI}} · {{KONU}} · {{SLAYT_NO}}/08) doğru mu?
[ ] Dosya /output klasörüne doğru isimle kaydedildi mi?
[ ] CTA slaydında save/send çağrısı var mı, sadece "takip et" mi kaldı?
[ ] HOOK slaydı gerçekten swipe'a zorluyor mu (iddia/veri/soru)?`;

export const newsletterIntelligencePrompt = `GÖREV: Newsletter Intelligence — bültenlerimi istihbarata dönüştür

BEN KİMİM
[KİM OLDUĞUN]. [KİTLEN] için içerik üretiyorum.
İlgi alanlarım: [İLGİ ALANLARIN].
İçerik ürettiğim yerler: [PLATFORMLAR].

---

ADIM 1 — BÜLTENLERİ BUL

Gmail'de önce şunu ara:

is:unread (newsletter OR bülten OR "weekly digest" OR "product update"
OR "dev news") newer_than:[DÖNEM] -in:spam

ÖNEMLİ: Bu sorgu neredeyse her zaman az sonuç verir. 10'dan az sonuç
gelirse mutlaka geniş sorguyla tekrar ara:

newer_than:[DÖNEM] -in:spam -in:sent -in:draft (category:promotions OR
category:updates OR unsubscribe OR newsletter OR bülten OR digest)

Neden: Bültenlerin çoğu okunmuş olabilir, Promotions sekmesine düşmüş
olabilir veya konu satırında "newsletter" geçmeyebilir. "unsubscribe"
kelimesi en güvenilir bülten işaretidir.

Maksimum 50 mail al. Değeri yüksek olanların tam metnini çek
(PLAIN_TEXT formatında, HTML değil). Alakasız olanlarda snippet yeter.

---

ADIM 2 — HER BÜLTENİ ANALİZ ET

Her biri için şunları çıkar:

- Gönderen ve konu
- 2 cümle özet
- Kategori (benim ilgi alanlarıma göre grupla)
- Önem puanı 1-10 (ilgi alanlarıma yakınsa yüksek ver)
- Aksiyon: hemen oku / sonra oku / etkinlik / araç güncellemesi / arşivle
- Varsa tarih/deadline
- Bu bültenden çıkacak 1 içerik fikri

KRİTİK: Somut rakamları mutlaka çıkar — fiyatlar, yüzdeler, tarihler,
sürüm numaraları. "Fiyatlar düştü" zayıf; "%80 indi, 0,20 $ oldu" güçlü.
Raporun tüm değeri buradan gelir.

---

ADIM 3 — ÖRÜNTÜ ARA

1. Hangi konu 2+ bültende geçiyor? Kaç bültende geçtiğini SAY ve tablo yap.
   Sayı, iddianın kanıtıdır.
2. Fiyat değişimi var mı? Rakamları yan yana koy.
3. Yaklaşan etkinlik veya deadline var mı? Geçmiş olanları ❌,
   yaklaşanları ⏰ ile işaretle.
4. EN ÖNEMLİSİ: Örüntüler arasında bağlantı kur. İki ayrı haberi
   birleştirip "bu ikisi neden aynı anda oldu" sorusunu cevapla.
   Ayrı ayrı listelemek haber; bağlantı kurmak analizdir.
5. Bonus: Abonelik/ödeme maili görürsen (iptal, yenileme, deneme bitişi)
   ayrı bir bölümde uyar.

---

ADIM 4 — ÜÇ DOSYA ÜRET

Klasör yoksa oluştur. Dosya adlarında tarih YYYY-AA-GG formatında olsun.

📄 1. reports/newsletter_intel_[TARİH].md — ham analiz

   # Newsletter Intelligence - [Tarih]
   ## Bu Hafta Okuman Gereken 5 Bülten  (tablo: Gönderen|Konu|Önem|Aksiyon)
   ## Detaylı Analiz                     (her bülten: özet + rakamlar)
   ## Trend Radarı                       (kaç bültende geçtiği sayılarak)
   ## Takvime Eklenecekler
   ## Abonelik Uyarıları                 (varsa)
   ## Arşiv Önerileri                    (+ unsubscribe linkleri, SADECE liste)
   ## Genel Değerlendirme

📄 2. reports/kisisel_bulten_[TARİH].md — okunacak bülten

   Bu bir rapor değil, gerçek bir bülten olsun. Fark şu:
   rapor "hangi maili açmalısın" der, bülten "o mailde ne yazıyordu" der.

   Yapı:
   - Başlık + sayı numarası + tarih
   - "Bu sayıda" içindekiler
   - 4-5 tematik bölüm (kaynak ve tarih belirterek, içeriği ANLATARAK)
   - Son bölüm: "Bunlar benim için ne anlama geliyor" — kitleme çevirisi,
     3 somut örnek
   - Kaynak tablosu

📄 3. content_ideas/icerik_fikirleri_[TARİH].txt

   3 ana + 2 yedek kısa video hook'u. Her biri için:
   - Hook cümlesi (ilk 3 saniyede gerilim kuracak)
   - İlk 15 saniyenin devamı
   - Neden işe yaradığı
   - Görsel önerisi

   Artı 2 tam sosyal medya postu (170-220 kelime, sonunda soru).

   İyi hook formülleri:
   • somut rakam + merak boşluğu → "%94 ucuzladı, kimse konuşmuyor"
   • kişisel itiraf + kayıp        → "kaçırdım"
   • doğrudan hitap                → "sen hâlâ..."

---

KURALLAR

ASLA:
- Mail silme, arşivleme, okundu işaretleme, unsubscribe yapma.
  Unsubscribe linklerini sadece LİSTE olarak ver.
- Rakam uydurma. Bültende yoksa yazma.
- Şirket iddiasını doğrulanmış gerçek gibi sunma.
  "Kendi ölçümleri, bağımsız doğrulama yok" notunu ekle.

HER ZAMAN:
- Kaynak ve tarih göster.
- Şüpheli mailleri işaretle: "3 saatte bitiyor" tipi aciliyet baskısı,
  "para kazan" teklifleri, tanınmayan gönderenler.
- Hangi Gmail hesabının tarandığını raporun başında belirt.
- Rapor dili Türkçe olsun, tool ve model isimleri orijinal kalsın.
- İngilizce terimleri ilk geçtiğinde parantez içinde Türkçe karşılığıyla ver.

SON ADIM — DOĞRULAMA
Teslimden önce kontrol et:
□ Her sayısal iddianın kaynağı bir bültende geçiyor mu?
□ Şirket iddiaları temkinli notla verilmiş mi?
□ Geçmiş deadline'lar işaretlenmiş mi?
□ Hiçbir maile dokunulmadı mı?

Sonunda sohbette de kısa bir özet ver.

Şimdi başla.`;

export const instagramAnalyticsDashboardPrompt = `You are an expert Instagram Strategist and AI Business Consultant for my audience. Task: Do a full Instagram performance audit using the Windsor.ai connector. 1. Connect to my Windsor account and pull my last 50 Instagram posts (Reels, Carousels, Posts). 2. For each post, extract: views, likes, comments, shares, saves, average watch time, hook (first 3 seconds transcript), hook type (curiosity, bold claim, how-to), topic/pillar, format, CTA.3. Analyze and create an interactive HTML dashboard with these sections: Overview: Top 3 and Bottom 3 posts by engagement rate. What's Working: 3 patterns that get most saves/shares. What's Holding You Back: 3 critical mistakes (e.g., weak hooks, no CTA, inconsistent pillar).5 trending topic ideas to test right now based on top performers and current AI trends for small businesses. 3 format experiments for the next 30 days. Style: Direct, data-driven, no fluff. Output as a single HTML file with Tailwind CSS. Always allow the Windsor connector.`;

export const globalInstructionsInterviewPrompt = `ROLÜN:
Sen bir röportajcısın. Görevin, benim hakkımda kalıcı bir hafıza metni oluşturmak için beni tanımak.

YÖNTEM:
Bana tek seferde 1 soru sor. Cevabımı bekle. Sonra diğer soruya geç. 7 sorunun hepsini aynı anda sorma.

SORULACAK 7 SORU:

1. KİMLİK: Sen kimsin, ne iş yapıyorsun? Tek cümlede.
2. KİTLE: Kime yardım ediyorsun, müşterin kim?
3. DİL: Senin yerine nasıl konuşmalıyım? Tonun nasıl olsun?
4. YASAKLAR: Asla ne yapmamalıyım?
5. KELİMELER: Hangi kelimeleri, jargonları asla kullanmamalıyım? Yerine ne demeliyim?
6. FORMAT: Cevaplarımı nasıl vermeliyim? Kaç maddede, ne kadar uzunlukta?
7. HASSASİYET: Seni en çok ne sinir eder, ne olursa "bu olmadı" dersin?

ÇIKTI FORMATI:
7 cevabım bittikten sonra, tüm cevaplarımı birleştir ve aşağıdaki şablonda tek bir "KALICI TALIMAT" metni oluştur:

---
Ben [İsim]'im. [Ne iş yaptığın].
[Kitlen] için çalışıyorum.
Nasıl konuş: [Dil ve ton]
Asla yapma: [Yasaklar ve kelimeler]
Cevap şeklin: [Format]
Unutma: [Hassasiyet]
---

KURAL:
- Sade Türkçe kullan
- Teknik terim kullanma
- Metin 120 kelimeyi geçmesin`;

export const voiceInterviewPrompt = `Benimle bir röportaj yap.

Amacım, kendi yazı sesimi tanımlayan bir dosya çıkarmak. Bu dosyayı bundan sonra her metin yazdırmadan önce sana okutacağım.

KURALLAR:
- Bana tek seferde tek soru sor.
- Cevabımı aldıktan sonra bir sonraki soruya geç.
- Benim yerime cevap yazma, tahmin etme, boşluk doldurma.
- Cevabım muğlak kalırsa aynı konuda bir soru daha sor.

SIRASIYLA ŞUNLARI ÖĞRENMEK İSTİYORUM:
1. Ne iş yapıyorum ve kime hizmet ediyorum
2. Kitlem beni ilk okuduğunda ne hissetsin istiyorum
3. Hangi kelimeleri asla kullanmam ve neden
4. Onların yerine ne derim
5. Cümlelerim kısa mı uzun mu, hangi ritimde yazarım
6. Neyi asla vaat etmem
7. Metinlerimde hangi gerçek detaylar geçer (isim, süre, sayı, hata)
8. Beni ben yapan, kolay taklit edilemeyecek şey ne

Sorular bitince topladığın her şeyi "benim-sesim.md" başlıklı tek bir dosya halinde yaz. Dosyada beni övme, beni tarif et.`;

export const folderOrganizerPrompt = `Bu klasördeki dosyaları silmeden organize et.

Türüne göre alt klasörler oluştur. Anlaşılmaz dosya isimlerini anlaşılır olacak şekilde yeniden adlandır.

Başlamadan önce neleri değiştireceğini ve hangi klasörleri oluşturacağını liste olarak yaz, onayımı bekle.`;

export const gmailLabelingPrompt = `Gmail'imi [KAPSAM] tara ve şu 5 etikete göre sınıflandır: [ETİKET 1], [ETİKET 2], [ETİKET 3], [ETİKET 4], [ETİKET 5] (birden fazla kategoriye uyan mailde önceliği [ÖNCELİKLİ ETİKET]'e ver).

Hiçbir maili kalıcı olarak silme — sadece etiketle.

"[ARŞİVLENECEK ETİKET]" olarak işaretlenen ve tarihi bugünden [ARŞİV EŞİĞİ] eski olan mailleri arşivle (arşivleme geri alınabilir, silme değildir); [ARŞİV EŞİĞİ]'nden yeni olanları sadece etiketle, arşivleme.

[HASSAS KATEGORİLER] mailleri otomatik karar vermeden "[İNCELEME ETİKETİ]" etiketiyle ayır.

Önce etiketleme planını çıkar ve kaç mailin hangi etikete gideceğini, kaç mailin arşivleneceğini özetleyen bir rapor sun; benim onayımdan sonra uygula.`;

export const contentIdeasPrompts = [
  {
    baslik: "1. Prompt — Önce sesini tanımla",
    prompt: `Sen [uzmanlık alanın] alanında bir uzmansın.
[İdeal müşterin] için içerikler üretiyorsun.
Amacın onların [istediği sonuç] elde etmesine yardımcı olmak.
İçerik tonun: [3 kelime yaz: örn. samimi, net, cesaret verici]
Bundan sonra yazacağın tüm içerikleri bu bakış açısından üret.
Önce bana bu konumlandırmaya göre kısa bir marka sesi özeti çıkar.`,
  },
  {
    baslik: "2. Prompt — İçerik sütunlarını oluştur",
    prompt: `Benim nişim: [nişini yaz]
İdeal müşterim: [ideal müşterini yaz]
Sunduğum hizmet/ürün: [hizmetini yaz]
Bana bu niş için ideal müşterimin gerçekten önemsediği ve beni uzman olarak konumlandıracak 10 içerik konusu ver.
Her konu şu 3 şeye hizmet etsin:
Hedef kitlemin yaşadığı gerçek bir problemi göstersin
Benim uzmanlığımı görünür kılsın
Potansiyel müşteriyi bana bir adım yaklaştırsın
Cevabı tablo halinde ver: Konu | Hedef kitlenin problemi | Bu konu beni nasıl uzman gösterir?`,
  },
  {
    baslik: "3. Prompt — Her konuyu carousel fikrine dönüştür",
    prompt: `Aşağıdaki içerik konusunu al:
[KONUYU BURAYA YAPIŞTIR]
Bu konu için hedef kitlemin inandığı bir şeyi sorgulayan, dikkat çeken ve net bir dönüşüm gösteren 6 Instagram carousel fikri üret.
Her fikir için şunları yaz:
Carousel başlığı
Hangi inancı sorguluyor?
Okuyucu içerikten ne fark edecek?
İçeriğin sonunda hangi aksiyona yaklaşacak?
Fikirler sıradan olmasın. Merak uyandırsın, kaydedilmeye değer olsun ve beni uzman olarak konumlandırsın.`,
  },
  {
    baslik: "4. Prompt — Carousel taslağı oluştur",
    prompt: `Şu carousel fikrini 10 slaytlık Instagram carousel taslağına dönüştür:
[CAROUSEL FİKRİNİ BURAYA YAPIŞTIR]
Şu yapıyı kullan:
Kanca
Problem
Neden önemli?
Yanlış bilinen şey
Doğru bakış açısı
Nasıl uygulanır?
Örnek
Mini özet
Sonuç
CTA
Her slayt için kısa, net ve Instagram'da okunabilir metin yaz.
Dil sade, samimi ve uzmanlık hissi veren bir dil olsun.`,
  },
  {
    baslik: "5. Prompt — Kancayı güçlendir",
    prompt: `Aşağıdaki carousel ilk slayt kancasını daha güçlü hale getir:
[KANCAYI BURAYA YAPIŞTIR]
Bana 10 farklı versiyon yaz.
Kancalar:
Daha kısa olsun
Daha net olsun
Merak uyandırsın
Hedef kitlemin "bu benim problemim" demesini sağlasın
Abartılı clickbait gibi durmasın
Sonra bu 10 kanca içinden en güçlü 3 tanesini seç ve neden güçlü olduklarını açıkla.`,
  },
  {
    baslik: "6. Prompt — Açıklama/caption yaz",
    prompt: `Aşağıdaki carousel için Instagram açıklaması yaz:
[CAROUSEL TASLAĞINI BURAYA YAPIŞTIR]
Açıklama şu yapıda olsun:
İlk cümlede problemi net söyle
Sonra okuyucunun yaşadığı durumu anlat
Carousel'deki fikri biraz daha aç
Kaydetmeye teşvik et
Sonunda yorum CTA'sı ekle
CTA şu olsun:
"Hazır promptları istersen yorumlara PLAN yaz. Sana DM'den göndereyim."
Dil: samimi, sade, uzman ama kasıntı olmayan.`,
  },
  {
    baslik: "7. Prompt — Tek oturumda 60 fikir üret",
    prompt: `Şimdi benim için tek oturumda içerik planı üret.
Benim nişim: [nişini yaz]
İdeal müşterim: [ideal müşterini yaz]
Sunduğum hizmet/ürün: [hizmetini yaz]
Tonum: [3 kelime yaz]
Önce 10 içerik sütunu çıkar.
Sonra her içerik sütunu için 6 carousel fikri üret.
Toplam 60 carousel fikri olsun.
Cevabı tablo halinde ver:
İçerik sütunu | Carousel fikri | Hangi problemi çözüyor? | Kanca önerisi | CTA önerisi
Fikirler tekrara düşmesin. Her biri farklı bir açıdan gelsin.`,
  },
];
