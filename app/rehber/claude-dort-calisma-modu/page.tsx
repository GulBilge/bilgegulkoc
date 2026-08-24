import type { Metadata } from "next";
import Link from "next/link";
import { Archivo } from "next/font/google";
import { pageMetadata } from "@/lib/metadata";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = pageMetadata(
  "Claude'un Dört Çalışma Modu",
  "Chat, Cowork, Code ve Design. Hangisi ne işe yarıyor, sen ne zaman hangisini açmalısın — teknik terim yok, doğrudan senin işinden örneklerle."
);

type Meslek = "Koç" | "Diyetisyen" | "Akademi sahibi" | "Eğitmen" | "Danışman";

const MESLEKLER: { key: Meslek; slug: string }[] = [
  { key: "Koç", slug: "koc" },
  { key: "Diyetisyen", slug: "diyetisyen" },
  { key: "Akademi sahibi", slug: "akademi-sahibi" },
  { key: "Eğitmen", slug: "egitmen" },
  { key: "Danışman", slug: "danisman" },
];

const VERI: Record<Meslek, { chat: string[]; cowork: string[]; code: string[]; design: string[] }> = {
  Koç: {
    chat: [
      "Seans öncesi o danışan için 10 güçlü soru çıkart.",
      "Danışan notlarını temiz bir seans özetine çevir.",
      "Zor bir mesaja nazik ama net bir cevap yaz.",
    ],
    cowork: [
      "8 haftalık koçluk programını modül modül yaz.",
      "Tüm eski seans notlarını tarayıp tekrar eden temaları çıkar.",
      "Yeni danışan paketini hazırla: sözleşme, form, karşılama e-postası.",
    ],
    code: [
      "Danışan başvuru formunu tek tabloda toplayan bir düzen kur.",
      "Seans hatırlatma e-postalarını otomatik gönder.",
      "Danışan ilerlemesini gösteren basit bir takip ekranı.",
    ],
    design: [
      "Ücretsiz rehber PDF'i: 'Hedef belirlemede 5 hata'.",
      "Kurumsal koçluk teklifini sunum hâline getir.",
      "Programının tanıtım sayfası.",
    ],
  },
  Diyetisyen: {
    chat: [
      "Danışanın 3 günlük besin kaydını değerlendir, sorulacakları çıkar.",
      "Sık gelen soruya sade bir cevap metni yaz.",
      "Randevu iptal mesajına kibar bir şablon.",
    ],
    cowork: [
      "Dört haftalık örnek menü setini alerji notlarıyla birlikte hazırla.",
      "Danışan dosyalarını tek standart forma dönüştür.",
      "Kurum semineri için içerik, slayt ve el broşürünü birlikte çıkar.",
    ],
    code: [
      "Danışan takip tablonu otomatik özetleyen bir araç.",
      "Porsiyon/öğün hesaplayan küçük bir hesap makinesi.",
      "Randevu hatırlatmalarını otomatikleştir.",
    ],
    design: [
      "Danışana verilecek haftalık menü kartı.",
      "'İlk 7 gün' karşılama rehberi.",
      "Online paketlerinin fiyat ve kapsam sayfası.",
    ],
  },
  "Akademi sahibi": {
    chat: [
      "Yeni kursun için ders başlıklarını ve sıralamasını çıkart.",
      "Kayıt sorularına hazır cevap metinleri yaz.",
      "Eğitmen ilanı metnini yaz.",
    ],
    cowork: [
      "Tüm müfredatı ders ders çıkar: içerik, ödev, ölçme.",
      "Geçmiş kurs geri bildirimlerini tarayıp iyileştirme listesi hazırla.",
      "Sertifika, katılım listesi ve rapor setini birlikte üret.",
    ],
    code: [
      "Kayıt ve ödeme takibini tek yerde toplayan bir düzen.",
      "Sertifikaları isim listesinden toplu üret.",
      "Yoklama ve tamamlanma oranını otomatik raporla.",
    ],
    design: [
      "Kurs kataloğu ve program takvimi.",
      "Kurumsal eğitim teklifi sunumu.",
      "Kayıt sayfası ve tanıtım afişi.",
    ],
  },
  Eğitmen: {
    chat: [
      "Bir konuyu üç farklı seviyeye göre anlat.",
      "Ders sonu quiz sorularını üret.",
      "Öğrenci geri bildirimine yapıcı cevap yaz.",
    ],
    cowork: [
      "Dönemlik ders planını hafta hafta hazırla.",
      "Eski slaytlarını tek anlatım diline göre gözden geçir.",
      "Ödev setini yönergesi ve değerlendirme ölçütüyle üret.",
    ],
    code: [
      "Not hesaplama tablonu otomatiğe bağla.",
      "Quiz sonuçlarını tek raporda topla.",
      "Ders materyallerini isimlendirip düzenleyen bir araç.",
    ],
    design: [
      "Ders sunumlarını tek tasarım diline getir.",
      "Öğrenciye verilecek özet çalışma kağıdı.",
      "Atölye tanıtım sayfası.",
    ],
  },
  Danışman: {
    chat: [
      "Müşteri toplantısı öncesi soru listesi çıkart.",
      "Uzun bir raporu yönetici özetine indir.",
      "Teklif e-postasını yaz.",
    ],
    cowork: [
      "Müşteri verisini inceleyip bulguları rapora dönüştür.",
      "Tüm eski teklifleri tek şablona taşı.",
      "Proje kapanış paketini hazırla: rapor, sunum, eylem planı.",
    ],
    code: [
      "Aylık müşteri raporlarını otomatik üret.",
      "Teklif fiyatlandırma hesabını araca çevir.",
      "Veri tablolarını tek formata çeviren bir düzen.",
    ],
    design: [
      "Yönetime sunulacak bulgu sunumu.",
      "Hizmet kapsamı ve fiyat sayfası.",
      "Sektör içgörülerini tek sayfalık bir rapora dök.",
    ],
  },
};

const SECIM: [string, string][] = [
  ['"Aklımdaki şeyi düzgün cümlelere dökeyim."', "Chat"],
  ['"Bu iş bir oturuşta bitmez, çok parçası var."', "Cowork"],
  ['"Bunu her hafta aynı şekilde yapıyorum."', "Code"],
  ['"Müşteriye göstereceğim, güzel görünmeli."', "Design"],
  ['"Elimde uzun bir kayıt/PDF var, özeti lazım."', "Chat"],
  ['"Onlarca dosyayı tek tek elden geçirmek gerekiyor."', "Cowork"],
  ['"Kendime küçük bir hesaplama aracı istiyorum."', "Code"],
  ['"Yarın sunum yapacağım, slaytım yok."', "Design"],
];

const HAFTA: [string, string, string][] = [
  ["1 — 2. gün", "Sadece Chat", "Gün içinde birine soracağın her şeyi önce buraya sor. Alışmak için başka bir şey yapma."],
  ["3 — 4. gün", "Bir işi devret", "Cowork'te, ertelediğin çok parçalı bir işi ver. Küçük bir iş seç; güven böyle kurulur."],
  ["5. gün", "Bir şey tasarlat", "Design'da müşteriye gidecek tek bir parça üret: rehber, sunum ya da tanıtım sayfası."],
  ["Sonrası", "Code'u sakla", "Aynı işi kaçıncı kez yaptığını fark ettiğin gün aç. O güne kadar gerek yok."],
];

const MODE_SUMMARY: [string, string][] = [
  ["CHAT", "Sorarsın, cevap gelir. Yazma ve düşünme işleri."],
  ["COWORK", "İşi verirsin, adım adım yürütür. Uzun işler için."],
  ["CODE", "Tekrar eden işleri otomatiğe bağlar."],
  ["DESIGN", "Gösterilecek işleri üretir: sunum, rehber, sayfa."],
];

const COMPARISON: [string, string, string, string, string][] = [
  ["Chat", "Konuşarak düşünür, yazar, özetler", "Bir soru veya bir dosya", "Saniyeler", "Metin, fikir, cevap"],
  ["Cowork", "Çok adımlı işi baştan sona yürütür", "Bir görev ve malzemeler", "Dakikalar", "Bitmiş dosyalar"],
  ["Code", "Küçük araç ve otomasyon kurar", "Tekrar eden bir iş tarifi", "Bir kereye mahsus kurulum", "Çalışan bir araç"],
  ["Design", "Görünen işleri tasarlar", "İçerik ve kime gideceği", "Dakikalar", "Sunum, rehber, sayfa"],
];

export default async function ClaudeDortCalismaModuPage({
  searchParams,
}: {
  searchParams: Promise<{ meslek?: string }>;
}) {
  const { meslek } = await searchParams;
  const activeSlug = MESLEKLER.some((m) => m.slug === meslek) ? meslek! : "koc";
  const activeMeslek = MESLEKLER.find((m) => m.slug === activeSlug)!.key;
  const v = VERI[activeMeslek];

  const MODES = [
    {
      id: "chat",
      number: "01",
      title: "Chat",
      subtitle: "Yazışarak iş çıkarmak",
      body: [
        "En bilinen hâli. Bir şey sorarsın, cevabını alırsın. Metin yazdırırsın, uzun bir belgeyi yükleyip \"bunu bana özetle\" dersin. Konuşma devam ettikçe bağlamı hatırlar; beğenmediğin yeri söyler, düzelttirirsin.",
      ],
      examples: v.chat,
      prompt:
        "“Sana danışanımın notlarını yapıştırıyorum. Bir sonraki seans için 10 soru ve 3 odak başlığı çıkar.”",
    },
    {
      id: "cowork",
      number: "02",
      title: "Cowork",
      subtitle: "İşi devretmek",
      body: [
        "Chat'te soru sorarsın; burada iş verirsin. Claude işi parçalara ayırır, dosyalarla tek tek çalışır ve sonunda elinde bitmiş bir çıktı olur. Sen aradan bakar, \"şunu değiştir\" dersin. Bir asistana iş devretmeye en yakın hâli.",
      ],
      examples: v.cowork,
      prompt:
        "“Şu klasördeki tüm eski içeriklerimi incele ve tek bir programa dönüştür. Adım adım ilerle, her bölüm bitince bana göster.”",
    },
    {
      id: "code",
      number: "03",
      title: "Code",
      subtitle: "Tekrar edeni otomatiğe bağlamak",
      body: [
        "Adı korkutucu ama işi basit: her hafta elle yaptığın aynı işi bir kere kurup bir daha uğraşmamak. Kod yazmayı bilmen gerekmez — ne olmasını istediğini anlatırsın, kuran o olur.",
        "Dört moddan en az kullanacağın bu. Aylarca açmasan da olur — ama bir işi 20. kez elle yapıyorsan burası.",
      ],
      examples: v.code,
      prompt: "“Her ay elle yaptığım şu işi anlatıyorum; bunu benim yerime yapan basit bir araç kur.”",
    },
    {
      id: "design",
      number: "04",
      title: "Design",
      subtitle: "Müşterinin göreceği işler",
      body: [
        "Metin değil, görünen bir şey lazımsa burası. Sunum, indirilir rehber, tanıtım sayfası, program takvimi. Anlatırsın, tasarlanmış hâlini görürsün, \"başlık büyük olsun\" der düzelttirirsin. Bu sayfa da bu modda yapıldı.",
      ],
      examples: v.design,
      prompt: "“Danışanlarıma vereceğim 6 sayfalık bir rehber tasarla. İçerik bende, sade ve profesyonel dursun.”",
    },
  ];

  return (
    <div className={`${archivo.className} rcm-root`} style={{ background: "var(--color-bg)", color: "var(--color-text)", minHeight: "100vh" }}>
      <style>{`
        .rcm-root {
          --color-bg: #f3f2f2;
          --color-surface: #eae9e9;
          --color-text: #201e1d;
          --color-accent: #ec3013;
          --color-accent-600: #dd2b0f;
          --color-accent-700: #ae1800;
          --color-accent-100: #fff2ef;
          --color-neutral-100: #f8f4f4;
          --color-neutral-700: #605d5d;
          --color-divider: color-mix(in srgb, #201e1d 40%, transparent);
          --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px; --space-8: 32px;
        }
        .rcm-root, .rcm-root *, .rcm-root *::before, .rcm-root *::after { box-sizing: border-box; }
        .rcm-root h1, .rcm-root h2 { margin: 0; }
        .rcm-root .rcm-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          text-decoration: none; font-weight: 800; font-size: 14px;
          padding: 10px 16px; border: 1px solid transparent;
        }
        .rcm-root .rcm-btn-primary { background: var(--color-accent); color: var(--color-bg); }
        .rcm-root .rcm-btn-primary:hover { background: var(--color-accent-600); }
        .rcm-root .rcm-btn-secondary { border-color: var(--color-divider); color: var(--color-text); }
        .rcm-root .rcm-btn-secondary:hover { background: color-mix(in srgb, var(--color-text) 7%, transparent); }
        .rcm-root .rcm-card { display: flex; flex-direction: column; gap: var(--space-2); padding: var(--space-3); background: var(--color-surface); }
        .rcm-root .rcm-card-kicker { font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-accent); }
        .rcm-root .rcm-card-title { font-weight: 800; font-size: 17px; }
        .rcm-root .rcm-card-body { margin: 0; font-size: 13px; opacity: 0.8; }
        .rcm-root .rcm-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .rcm-root .rcm-table th {
          text-align: left; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
          color: color-mix(in srgb, var(--color-text) 60%, transparent);
          padding: var(--space-2); border-bottom: 2px solid var(--color-divider);
        }
        .rcm-root .rcm-table td { padding: var(--space-2); border-bottom: 1px solid var(--color-divider); }
        .rcm-root .rcm-meslek-btn {
          font: inherit; font-size: 14px; font-weight: 700; padding: 10px 18px;
          border: none; border-right: 2px solid var(--color-text); cursor: pointer;
          background: transparent; color: var(--color-text); text-decoration: none;
        }
        .rcm-root .rcm-meslek-btn:last-child { border-right: none; }
        .rcm-root .rcm-meslek-btn[data-active="true"] { background: var(--color-accent); color: #fff; }
      `}</style>

      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "var(--color-bg)",
          borderBottom: "2px solid var(--color-text)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-6)",
          padding: "var(--space-3) var(--space-8)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-3)" }}>
          <span style={{ width: 14, height: 14, background: "var(--color-accent)", display: "block" }} />
          <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Claude Rehberi
          </span>
        </div>
        <div style={{ display: "flex", gap: "var(--space-6)", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          <a href="#chat" style={{ color: "var(--color-text)" }}>Chat</a>
          <a href="#cowork" style={{ color: "var(--color-text)" }}>Cowork</a>
          <a href="#code" style={{ color: "var(--color-text)" }}>Code</a>
          <a href="#design" style={{ color: "var(--color-text)" }}>Design</a>
          <a href="#secim" style={{ color: "var(--color-accent-700)" }}>Hangisi bana uygun?</a>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", borderBottom: "2px solid var(--color-text)" }}>
        <div style={{ padding: "72px var(--space-8) 56px", borderRight: "2px solid var(--color-text)" }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent-700)", marginBottom: "var(--space-6)" }}>
            Kendi işini yürütenler için
          </div>
          <h1 style={{ fontWeight: 800, fontSize: 76, lineHeight: 0.94, letterSpacing: "-0.03em", marginBottom: "var(--space-6)" }}>
            Claude&apos;un dört<br />çalışma modu
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.5, maxWidth: "46ch", margin: "0 0 var(--space-8)" }}>
            Chat, Cowork, Code ve Design. Hangisi ne işe yarıyor, sen ne zaman hangisini açmalısın — teknik terim
            yok, doğrudan senin işinden örneklerle.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)" }}>
            <a className="rcm-btn rcm-btn-primary" href="#chat">Rehbere başla</a>
            <a className="rcm-btn rcm-btn-secondary" href="#secim">30 saniyede seç</a>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateRows: "repeat(4, 1fr)" }}>
          {MODE_SUMMARY.map(([label, text], i) => (
            <div
              key={label}
              style={{
                padding: "var(--space-6) var(--space-8)",
                borderBottom: i < MODE_SUMMARY.length - 1 ? "2px solid var(--color-divider)" : undefined,
                display: "flex",
                gap: "var(--space-4)",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontWeight: 800, fontSize: 13, color: "var(--color-accent)", minWidth: 68 }}>{label}</span>
              <span style={{ fontSize: 16, lineHeight: 1.4 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "var(--space-8)", borderBottom: "2px solid var(--color-text)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-4)" }}>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Örnekleri kime göre görmek istersin?
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", border: "2px solid var(--color-text)" }}>
          {MESLEKLER.map((m) => (
            <Link
              key={m.slug}
              href={`/rehber/claude-dort-calisma-modu?meslek=${m.slug}#secim-meslek`}
              className="rcm-meslek-btn"
              data-active={m.slug === activeSlug}
            >
              {m.key}
            </Link>
          ))}
        </div>
      </div>

      <div id="secim-meslek" style={{ padding: "64px var(--space-8) var(--space-8)" }}>
        <h2 style={{ fontWeight: 800, fontSize: 15, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "var(--space-6)" }}>
          Tek bakışta fark
        </h2>
        <table className="rcm-table">
          <thead>
            <tr>
              <th style={{ width: "16%" }}>Mod</th>
              <th style={{ width: "26%" }}>Ne yapar</th>
              <th style={{ width: "24%" }}>Sen ne verirsin</th>
              <th style={{ width: "20%" }}>Ne kadar sürer</th>
              <th style={{ width: "14%" }}>Sonuç</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map(([mode, does, give, time, result]) => (
              <tr key={mode}>
                <td style={{ fontWeight: 700 }}>{mode}</td>
                <td>{does}</td>
                <td>{give}</td>
                <td>{time}</td>
                <td>{result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {MODES.map((mode) => (
        <div key={mode.id} id={mode.id} style={{ borderTop: "2px solid var(--color-text)", display: "grid", gridTemplateColumns: "1fr 1.6fr" }}>
          <div style={{ padding: "56px var(--space-8)", borderRight: "2px solid var(--color-text)" }}>
            <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.18em", color: "var(--color-accent)" }}>
              {mode.number}
            </div>
            <h2 style={{ fontWeight: 800, fontSize: 52, lineHeight: 1, letterSpacing: "-0.02em", margin: "var(--space-3) 0 var(--space-4)" }}>
              {mode.title}
            </h2>
            <div style={{ fontSize: 18, fontWeight: 600, color: "var(--color-neutral-700)" }}>{mode.subtitle}</div>
            <div style={{ height: 2, margin: "var(--space-6) 0", background: "var(--color-divider)" }} />
            {mode.body.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: i === 0 ? 17 : 15,
                  lineHeight: 1.55,
                  margin: i === mode.body.length - 1 ? 0 : "0 0 var(--space-3)",
                  color: i === 0 ? undefined : "var(--color-neutral-700)",
                }}
              >
                {p}
              </p>
            ))}
          </div>
          <div style={{ padding: "56px var(--space-8)" }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "var(--space-4)" }}>
              Senin işinde
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "2px solid var(--color-divider)" }}>
              {mode.examples.map((ex, i) => (
                <div key={i} style={{ padding: "var(--space-6) var(--space-6) var(--space-6) 0", borderBottom: "2px solid var(--color-divider)", fontSize: 16, lineHeight: 1.45 }}>
                  {ex}
                </div>
              ))}
            </div>
            <div style={{ marginTop: "var(--space-8)", borderLeft: "4px solid var(--color-accent)", padding: "var(--space-4) var(--space-6)", background: "var(--color-neutral-100)" }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent-700)", marginBottom: "var(--space-2)" }}>
                Deneyeceğin ilk cümle
              </div>
              <div style={{ fontSize: 17, lineHeight: 1.5 }}>{mode.prompt}</div>
            </div>
          </div>
        </div>
      ))}

      <div id="secim" style={{ borderTop: "2px solid var(--color-text)", padding: "64px var(--space-8)" }}>
        <h2 style={{ fontWeight: 800, fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.02em", marginBottom: "var(--space-3)" }}>
          Hangisini açayım?
        </h2>
        <p style={{ fontSize: 17, margin: "0 0 var(--space-8)", color: "var(--color-neutral-700)" }}>
          Elindeki işe bak, satırı bul.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "2px solid var(--color-text)", borderLeft: "2px solid var(--color-divider)" }}>
          {SECIM.map(([quote, mode], i) => (
            <div key={i} style={{ padding: "var(--space-6)", borderRight: "2px solid var(--color-divider)", borderBottom: "2px solid var(--color-divider)" }}>
              <div style={{ fontSize: 15, lineHeight: 1.45, minHeight: 76 }}>{quote}</div>
              <div style={{ fontWeight: 800, fontSize: 22, color: "var(--color-accent)" }}>{mode}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "2px solid var(--color-text)", padding: "64px var(--space-8)" }}>
        <h2 style={{ fontWeight: 800, fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.02em", marginBottom: "var(--space-8)" }}>
          İlk haftan
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-6)" }}>
          {HAFTA.map(([kicker, title, body]) => (
            <div key={title} className="rcm-card">
              <div className="rcm-card-kicker">{kicker}</div>
              <div className="rcm-card-title">{title}</div>
              <div className="rcm-card-body">{body}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "2px solid var(--color-text)", background: "var(--color-accent)", color: "#fff", padding: "88px var(--space-8)" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "var(--space-6)" }}>
          Hatırlanacak tek şey
        </div>
        <div style={{ fontWeight: 800, fontSize: 64, lineHeight: 1, letterSpacing: "-0.03em", maxWidth: "20ch" }}>
          Soru sorarsan Chat. İş verirsen Cowork.
        </div>
        <div style={{ fontSize: 20, lineHeight: 1.5, maxWidth: "52ch", marginTop: "var(--space-6)" }}>
          Gösterilecek bir şey lazımsa Design, tekrar eden bir şey varsa Code. Gerisi kullandıkça gelir.
        </div>
      </div>

      <div style={{ padding: "var(--space-6) var(--space-8)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-2)", fontSize: 13, color: "var(--color-neutral-700)", borderTop: "2px solid var(--color-text)" }}>
        <span>Koçlar, diyetisyenler, akademi sahipleri, eğitmenler ve danışmanlar için hazırlanmıştır.</span>
        <span>Sürüm 1.0</span>
      </div>
    </div>
  );
}
