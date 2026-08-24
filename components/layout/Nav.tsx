import Link from "next/link";
import { primaryNav } from "@/lib/site";

export function Nav() {
  return (
    <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
      {primaryNav.map((item) =>
        "items" in item ? (
          <details key={item.label} className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-stone-700 hover:text-stone-950 [&::-webkit-details-marker]:hidden">
              {item.label}
              <span aria-hidden="true" className="text-xs text-stone-400">
                ▾
              </span>
            </summary>
            <div className="absolute left-0 top-full z-10 mt-2 flex min-w-[200px] flex-col gap-1 rounded-xl border border-stone-200 bg-white p-2 shadow-lg">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100 hover:text-stone-950"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </details>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-stone-700 hover:text-stone-950"
          >
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
