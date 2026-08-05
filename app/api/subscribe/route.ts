import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Apps Script'in /exec adresi genelde script.googleusercontent.com'a 302 ile
// yönlendirir. fetch'in varsayılan "follow" davranışı bu yönlendirmede POST'u
// GET'e çevirip 405 aldırıyor, o yüzden yönlendirmeyi elle POST olarak takip
// ediyoruz.
async function postWithRedirect(
  url: string,
  init: RequestInit,
  maxRedirects = 3
): Promise<Response> {
  let response = await fetch(url, { ...init, redirect: "manual" });

  let redirectCount = 0;
  while (
    response.status >= 300 &&
    response.status < 400 &&
    redirectCount < maxRedirects
  ) {
    const location = response.headers.get("location");
    if (!location) break;
    response = await fetch(location, { ...init, redirect: "manual" });
    redirectCount += 1;
  }

  return response;
}

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
    const response = await postWithRedirect(webhookUrl, {
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
