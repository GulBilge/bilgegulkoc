import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <div className="mx-auto w-full max-w-3xl px-6 py-10 text-sm text-stone-500">
        <p>{siteConfig.bio}</p>
        <p className="mt-4">
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.handle}
        </p>
      </div>
    </footer>
  );
}
