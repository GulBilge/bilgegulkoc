"use client";

import { FormEvent, useEffect, useState } from "react";

const SUBSCRIBED_KEY = "bilgegulkoc_subscribed";
const DISMISSED_KEY = "bilgegulkoc_popup_dismissed";
const SHOW_DELAY_MS = 4000;

type Status = "idle" | "submitting" | "success" | "error";

export function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const alreadySubscribed = localStorage.getItem(SUBSCRIBED_KEY);
    const dismissedThisSession = sessionStorage.getItem(DISMISSED_KEY);
    if (alreadySubscribed || dismissedThisSession) return;

    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, "true");
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "abone");
      formData.append("email", email);

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (!response.ok) {
        throw new Error("Bir şeyler ters gitti.");
      }

      setStatus("success");
      localStorage.setItem(SUBSCRIBED_KEY, "true");
      setTimeout(() => setVisible(false), 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Bir şeyler ters gitti."
      );
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-popup-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center"
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={close}
          aria-label="Kapat"
          className="absolute right-4 top-4 text-stone-400 hover:text-stone-700"
        >
          ✕
        </button>

        {status === "success" ? (
          <div className="flex flex-col gap-2 py-4 text-center">
            <p className="text-lg font-semibold text-stone-950">
              Teşekkürler!
            </p>
            <p className="text-sm text-stone-600">
              Kaydoldun, seni haberdar edeceğim.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h2
                id="email-popup-title"
                className="text-lg font-semibold text-stone-950"
              >
                Ücretsiz Abone Ol
              </h2>
              <p className="text-sm text-stone-600">
                Yeni yazılar ve kaynaklar yayınlandığında haberdar ol.
              </p>
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="E-posta adresin"
              className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-stone-500"
            />
            {status === "error" && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full bg-stone-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-stone-700 disabled:opacity-60"
            >
              {status === "submitting" ? "Gönderiliyor..." : "Abone Ol"}
            </button>
            <p className="text-center text-xs text-stone-400">
              İstediğin zaman ayrılabilirsin.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
