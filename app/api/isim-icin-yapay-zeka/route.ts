import { NextResponse } from "next/server";
import { submitToSheet } from "@/lib/google-sheets";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  // Honeypot: gerçek kullanıcılar bu alanı hiç görmez, botlar genelde doldurur.
  if (typeof body.botField === "string" && body.botField.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const adSoyad = typeof body.adSoyad === "string" ? body.adSoyad.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const telefon = typeof body.telefon === "string" ? body.telefon.trim() : "";
  const meslek = typeof body.meslek === "string" ? body.meslek.trim() : "";
  const aiDuzeyi = typeof body.aiDuzeyi === "string" ? body.aiDuzeyi.trim() : "";
  const beklenti = typeof body.beklenti === "string" ? body.beklenti.trim() : "";
  const kvkk = Boolean(body.kvkk);

  if (
    !adSoyad ||
    !isValidEmail(email) ||
    !telefon ||
    !meslek ||
    !aiDuzeyi ||
    !beklenti ||
    !kvkk
  ) {
    return NextResponse.json({ error: "Eksik veya geçersiz alan var." }, { status: 400 });
  }

  try {
    await submitToSheet("preregistereds", {
      tarih: new Date().toISOString(),
      adSoyad,
      email,
      telefon,
      meslek,
      aiDuzeyi,
      beklenti,
      kvkk: kvkk ? "Evet" : "",
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Eğitim ön kaydı kaydedilemedi:", error);
    return NextResponse.json(
      { error: "Ön kayıt şu anda kaydedilemedi." },
      { status: 500 }
    );
  }
}
