"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<
  Record<
    | "adSoyad"
    | "email"
    | "meslek"
    | "konu"
    | "zorluk"
    | "aiDuzeyi"
    | "uygunZaman"
    | "kvkk",
    string
  >
>;

const MESLEK_OPTIONS = [
  "Koç",
  "Diyetisyen",
  "Eğitmen / atölye sahibi",
  "Danışman",
  "Terapist",
  "Diğer",
];

const AI_DUZEYI_OPTIONS = ["Hiç kullanmadım", "Ara sıra", "Düzenli kullanıyorum"];

const UYGUN_ZAMAN_OPTIONS = [
  "Hafta içi gündüz",
  "Hafta içi akşam",
  "Hafta sonu",
  "Farketmez",
];

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}

export function DanismanlikForm() {
  const [adSoyad, setAdSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [meslek, setMeslek] = useState("");
  const [konu, setKonu] = useState("");
  const [zorluk, setZorluk] = useState("");
  const [aiDuzeyi, setAiDuzeyi] = useState("");
  const [uygunZaman, setUygunZaman] = useState("");
  const [kvkk, setKvkk] = useState(false);

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate(): Errors {
    const next: Errors = {};
    if (!adSoyad.trim()) next.adSoyad = "Ad soyad gerekli.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Geçerli bir e-posta adresi gir.";
    if (!meslek) next.meslek = "Bir seçenek seç.";
    if (!konu.trim()) next.konu = "Bu alanı boş bırakma.";
    if (!zorluk.trim()) next.zorluk = "Bu alanı boş bırakma.";
    if (!aiDuzeyi) next.aiDuzeyi = "Bir seçenek seç.";
    if (!uygunZaman) next.uygunZaman = "Bir seçenek seç.";
    if (!kvkk) next.kvkk = "Devam etmek için onay vermen gerekiyor.";
    return next;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "danismanlik",
          "ad-soyad": adSoyad,
          email,
          instagram,
          meslek,
          konu,
          zorluk,
          "ai-duzeyi": aiDuzeyi,
          "uygun-zaman": uygunZaman,
          kvkk: kvkk ? "Evet" : "",
        }),
      });

      if (!response.ok) {
        throw new Error("Bir şeyler ters gitti.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Bir şeyler ters gitti."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-2 rounded-2xl bg-stone-100 p-8 text-center sm:p-10">
        <p className="text-lg font-semibold text-stone-950">Teşekkürler!</p>
        <p className="text-sm leading-relaxed text-stone-600">
          Talebini aldım. İnceleyip en kısa sürede dönüş yapacağım.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-6"
    >
      {/* Honeypot: gerçek kullanıcılar görmez, botlar genelde doldurur. */}
      <p className="hidden">
        <label>
          Bu alanı boş bırak
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <Field label="Ad Soyad" htmlFor="ad-soyad" error={errors.adSoyad} required>
        <input
          id="ad-soyad"
          name="ad-soyad"
          type="text"
          value={adSoyad}
          onChange={(e) => setAdSoyad(e.target.value)}
          aria-invalid={Boolean(errors.adSoyad)}
          aria-describedby={errors.adSoyad ? "ad-soyad-error" : undefined}
          className={inputClass(Boolean(errors.adSoyad))}
        />
      </Field>

      <Field label="E-posta" htmlFor="email" error={errors.email} required>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass(Boolean(errors.email))}
        />
      </Field>

      <Field label="Instagram veya web adresi" htmlFor="instagram">
        <input
          id="instagram"
          name="instagram"
          type="text"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          placeholder="isteğe bağlı"
          className={inputClass(false)}
        />
      </Field>

      <Field label="Ne iş yapıyorsun?" htmlFor="meslek" error={errors.meslek} required>
        <select
          id="meslek"
          name="meslek"
          value={meslek}
          onChange={(e) => setMeslek(e.target.value)}
          aria-invalid={Boolean(errors.meslek)}
          aria-describedby={errors.meslek ? "meslek-error" : undefined}
          className={inputClass(Boolean(errors.meslek))}
        >
          <option value="">Seç</option>
          {MESLEK_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Danışmanlıkta konuşmak istediğin tek konu"
        htmlFor="konu"
        error={errors.konu}
        required
      >
        <textarea
          id="konu"
          name="konu"
          value={konu}
          onChange={(e) => setKonu(e.target.value)}
          rows={3}
          aria-invalid={Boolean(errors.konu)}
          aria-describedby={errors.konu ? "konu-error" : undefined}
          className={inputClass(Boolean(errors.konu))}
        />
      </Field>

      <Field
        label="Şu an işinde en çok neyde zorlanıyorsun?"
        htmlFor="zorluk"
        error={errors.zorluk}
        required
      >
        <textarea
          id="zorluk"
          name="zorluk"
          value={zorluk}
          onChange={(e) => setZorluk(e.target.value)}
          rows={3}
          aria-invalid={Boolean(errors.zorluk)}
          aria-describedby={errors.zorluk ? "zorluk-error" : undefined}
          className={inputClass(Boolean(errors.zorluk))}
        />
      </Field>

      <fieldset className="flex flex-col gap-2">
        <legend className="text-sm font-medium text-stone-900">
          Yapay zeka araçlarını kullanma düzeyin{" "}
          <span aria-hidden="true" className="text-stone-400">
            *
          </span>
        </legend>
        <div
          className="flex flex-col gap-2"
          role="radiogroup"
          aria-invalid={Boolean(errors.aiDuzeyi)}
          aria-describedby={errors.aiDuzeyi ? "ai-duzeyi-error" : undefined}
        >
          {AI_DUZEYI_OPTIONS.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 text-sm text-stone-700"
            >
              <input
                type="radio"
                name="ai-duzeyi"
                value={option}
                checked={aiDuzeyi === option}
                onChange={(e) => setAiDuzeyi(e.target.value)}
                className="h-4 w-4 border-stone-300 text-stone-900 focus:ring-stone-500"
              />
              {option}
            </label>
          ))}
        </div>
        {errors.aiDuzeyi && (
          <p id="ai-duzeyi-error" className="text-sm text-red-600">
            {errors.aiDuzeyi}
          </p>
        )}
      </fieldset>

      <Field
        label="Görüşme için uygun zaman"
        htmlFor="uygun-zaman"
        error={errors.uygunZaman}
        required
      >
        <select
          id="uygun-zaman"
          name="uygun-zaman"
          value={uygunZaman}
          onChange={(e) => setUygunZaman(e.target.value)}
          aria-invalid={Boolean(errors.uygunZaman)}
          aria-describedby={
            errors.uygunZaman ? "uygun-zaman-error" : undefined
          }
          className={inputClass(Boolean(errors.uygunZaman))}
        >
          <option value="">Seç</option>
          {UYGUN_ZAMAN_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-2 text-sm text-stone-700">
          <input
            type="checkbox"
            name="kvkk"
            checked={kvkk}
            onChange={(e) => setKvkk(e.target.checked)}
            aria-invalid={Boolean(errors.kvkk)}
            aria-describedby={errors.kvkk ? "kvkk-error" : undefined}
            className="mt-0.5 h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-500"
          />
          Verilerimin bu talebin değerlendirilmesi amacıyla işlenmesine onay
          veriyorum.
        </label>
        {errors.kvkk && (
          <p id="kvkk-error" className="text-sm text-red-600">
            {errors.kvkk}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Gönderiliyor..." : "Talebi Gönder"}
      </button>
    </form>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-stone-500 ${
    hasError ? "border-red-400" : "border-stone-300"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-stone-900">
        {label}{" "}
        {required && (
          <span aria-hidden="true" className="text-stone-400">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
