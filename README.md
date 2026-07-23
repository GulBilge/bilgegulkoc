# bilgegulkoc

@teknikbilgekoc kişisel marka web sitesi — Next.js (App Router) + TypeScript + Tailwind CSS.

## Site mimarisi

Vitrin Katmanı (bu iskelette kurulu, içerik zamanla eklenecek):

- `/` — Ana Sayfa
- `/hakkimda` — Hakkımda
- `/ne-yapiyorum` — Ne Yapıyorum
- `/vaka-calismasi` — Vaka Çalışması (şimdilik "yakında")

Dünya Katmanı (henüz kurulmadı, navigasyonda "yakında" olarak görünüyor):

- Yazılar
- Kaynaklar

## Geliştirme

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) adresinde açılır.

## Deploy

Netlify'a bağlı; `main` branch'ine push edildiğinde otomatik deploy olur.

`lib/site.ts` içindeki `siteConfig.url` alanını gerçek Netlify subdomain'i belirlenince güncelle.
