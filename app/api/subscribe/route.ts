import { NextRequest, NextResponse } from "next/server";
import https from "node:https";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Apps Script'in /exec adresi genelde script.googleusercontent.com'a 302 ile
// yönlendirir. fetch'in redirect: "manual" modu Node'da opak (durum kodu 0,
// header'sız) bir cevap döndürdüğü için yönlendirmeyi takip edemiyor; bu
// yüzden düşük seviye https modülüyle POST + body'yi koruyarak elle takip
// ediyoruz.
function postJson(
  targetUrl: string,
  payload: string,
  redirectsLeft = 3
): Promise<{ status: number; body: string }> {
  return new Promise((resolve, reject) => {
    const attempt = (currentUrl: string, remaining: number) => {
      const parsed = new URL(currentUrl);
      const req = https.request(
        {
          hostname: parsed.hostname,
          path: `${parsed.pathname}${parsed.search}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(payload),
          },
        },
        (res) => {
          const status = res.statusCode ?? 0;
          const location = res.headers.location;

          if (status >= 300 && status < 400 && location && remaining > 0) {
            res.resume();
            attempt(new URL(location, currentUrl).toString(), remaining - 1);
            return;
          }

          let body = "";
          res.on("data", (chunk) => {
            body += chunk;
          });
          console.log("body",body);
          res.on("end", () => resolve({ status, body }));
        }
      );

      req.on("error", reject);
      req.write(payload);
      req.end();
    };

    attempt(targetUrl, redirectsLeft);
  });
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
    const payload = JSON.stringify({
      email,
      date: new Date().toISOString(),
    });
console.log("payload",payload);
    const result = await postJson(webhookUrl, payload);

    if (result.status < 200 || result.status >= 300) {
      throw new Error(
        `Sheets webhook ${result.status} döndürdü: ${result.body.slice(0, 300)}`
      );
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
