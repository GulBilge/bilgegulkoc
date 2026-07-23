import Link from "next/link";
import { Nav } from "./Nav";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-stone-200">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-base font-semibold text-stone-950">
          {siteConfig.handle}
        </Link>
        <Nav />
      </div>
    </header>
  );
}
