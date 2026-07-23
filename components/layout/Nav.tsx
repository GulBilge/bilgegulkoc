import Link from "next/link";
import { primaryNav, upcomingNav } from "@/lib/site";

export function Nav() {
  return (
    <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {primaryNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-stone-700 hover:text-stone-950"
        >
          {item.label}
        </Link>
      ))}
      {upcomingNav.map((item) => (
        <span
          key={item.label}
          aria-disabled="true"
          className="text-sm font-medium text-stone-400 cursor-default"
        >
          {item.label} <span className="text-xs">(yakında)</span>
        </span>
      ))}
    </nav>
  );
}
