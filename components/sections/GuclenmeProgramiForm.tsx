"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<
  Record<
    "adSoyad" | "email" | "telefon" | "meslek" | "aiDuzeyi" | "beklenti" | "kvkk",
    string
  >
>;

const AI_DUZEYI_OPTIONS = ["Hiç kullanmadım", "Ara sıra", "Düzenli kullanıyorum"];

export function GuclenmeProgramiForm() {
  const [adSoyad, setAdSoyad] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [meslek, setMeslek] = useState("");
  const [aiDuzeyi, setAiDuzeyi] = useState("");
  const [beklenti, setBeklenti] = useState("");
  const [kvkk, setKvkk] = useState(false);
  const [botField, setBotField] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate(): Errors {
    const next: Errors = {};
    if (!adSoyad.trim()) next.adSoyad = "Ad soyad gerekli.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Geçerli bir e-posta adresi gir.";
    if (!telefon.trim()) next.telefon = "Telefon numarası gerekli.";
    if (!meslek.trim()) next.meslek = "Bu alanı boş bırakma.";
    if (!aiDuzeyi) next.aiDuzeyi = "Bir seçenek seç.";
    if (!beklenti.trim()) next.beklenti = "Bu alanı boş bırakma.";
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
      const response = await fetch("/api/guclenme-programi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          adSoyad,
          email,
          telefon,
          meslek,
          aiDuzeyi,
          beklenti,
          kvkk,
          botField,
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
          Ön kaydını aldım. Program detayları netleştiğinde sana e-posta ile
          haber vereceğim.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot: gerçek kullanıcılar görmez, botlar genelde doldurur. */}
      <p className="hidden">
        <label>
          Bu alanı boş bırak
          <input
            name="bot-field"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
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

      <Field label="Telefon" htmlFor="telefon" error={errors.telefon} required>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          aria-invalid={Boolean(errors.telefon)}
          aria-describedby={errors.telefon ? "telefon-error" : undefined}
          className={inputClass(Boolean(errors.telefon))}
        />
      </Field>

      <Field label="Ne iş yapıyorsun?" htmlFor="meslek" error={errors.meslek} required>
        <input
          id="meslek"
          name="meslek"
          type="text"
          value={meslek}
          onChange={(e) => setMeslek(e.target.value)}
          aria-invalid={Boolean(errors.meslek)}
          aria-describedby={errors.meslek ? "meslek-error" : undefined}
          className={inputClass(Boolean(errors.meslek))}
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
        label="Bu programdan ne bekliyorsun?"
        htmlFor="beklenti"
        error={errors.beklenti}
        required
      >
        <textarea
          id="beklenti"
          name="beklenti"
          value={beklenti}
          onChange={(e) => setBeklenti(e.target.value)}
          rows={3}
          aria-invalid={Boolean(errors.beklenti)}
          aria-describedby={errors.beklenti ? "beklenti-error" : undefined}
          className={inputClass(Boolean(errors.beklenti))}
        />
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
          Verilerimin bu ön kaydın değerlendirilmesi amacıyla işlenmesine onay
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
        {status === "submitting" ? "Gönderiliyor..." : "Ön Kayıt Ol"}
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
