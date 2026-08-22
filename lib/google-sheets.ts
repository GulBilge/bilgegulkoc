export async function submitToSheet(formName: string, data: Record<string, string>) {
  const url = process.env.GOOGLE_APPS_SCRIPT_URL;
  const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET;

  if (!url || !secret) {
    throw new Error(
      "Google Apps Script ortam değişkenleri eksik: GOOGLE_APPS_SCRIPT_URL, GOOGLE_APPS_SCRIPT_SECRET"
    );
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, form_name: formName, data }),
  });

  if (!response.ok) {
    throw new Error(`Google Sheets'e yazılamadı: ${await response.text()}`);
  }
}
