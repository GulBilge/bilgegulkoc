import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let email: string | undefined;

  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim() : undefined;
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Geçerli bir e-posta adresi gir." },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GOOGLE_SHEETS_WEBHOOK_URL ortam değişkeni tanımlı değil.");
    return NextResponse.json(
      { error: "Sunucu şu anda kayıt alamıyor, daha sonra tekrar dene." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        date: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Sheets webhook ${response.status} döndürdü`);
    }
  } catch (error) {
    console.error("E-posta Sheets'e kaydedilemedi:", error);
    return NextResponse.json(
      { error: "Kaydedilemedi, tekrar dener misin?" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
