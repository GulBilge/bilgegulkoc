"use client";

import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/bilgegulkoc/30min";

export function CalendlyEmbed({ height = 700 }: { height?: number }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: 320, height }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
