import Link from "next/link";
import { Section } from "@/components/ui/Section";
import type { ResourceItem } from "@/lib/kaynaklar";
import {
  MIN_QUERY_LENGTH,
  filterResourcesByQuery,
  paginate,
  sortResources,
  type SortOption,
} from "@/lib/resource-list";

const SORT_LABELS: Record<SortOption, string> = {
  "date-desc": "Tarih (yeni → eski)",
  "date-asc": "Tarih (eski → yeni)",
  "title-asc": "İsim (A → Z)",
  "title-desc": "İsim (Z → A)",
};

function buildHref(basePath: string, params: Record<string, string | number | undefined>) {
  const usp = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") usp.set(key, String(value));
  }
  const qs = usp.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

export function ResourceListPage({
  basePath,
  title,
  description,
  items,
  q,
  sort = "date-desc",
  page = 1,
}: {
  basePath: string;
  title: string;
  description: string;
  items: ResourceItem[];
  q?: string;
  sort?: SortOption;
  page?: number;
}) {
  const trimmedQuery = q?.trim() ?? "";
  const filtered = filterResourcesByQuery(items, trimmedQuery);
  const sorted = sortResources(filtered, sort);
  const { items: pageItems, currentPage, totalPages } = paginate(sorted, page);

  return (
    <Section>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-stone-950">{title}</h1>
          <p className="max-w-xl text-base leading-relaxed text-stone-600">{description}</p>
        </div>

        <form action={basePath} method="get" className="flex flex-wrap items-center gap-3">
          <input
            type="search"
            name="q"
            defaultValue={q ?? ""}
            placeholder={`İsme göre ara (en az ${MIN_QUERY_LENGTH} harf)`}
            className="w-full max-w-xs rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-500 focus:outline-none sm:w-64"
          />
          <input type="hidden" name="sort" value={sort} />
          <button
            type="submit"
            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
          >
            Ara
          </button>
          {trimmedQuery && (
            <Link
              href={buildHref(basePath, { sort })}
              className="text-sm font-medium text-stone-500 hover:text-stone-900"
            >
              Aramayı temizle
            </Link>
          )}
        </form>

        <div className="flex flex-wrap gap-2">
          {(Object.keys(SORT_LABELS) as SortOption[]).map((option) => (
            <Link
              key={option}
              href={buildHref(basePath, { q: trimmedQuery || undefined, sort: option })}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                sort === option
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 text-stone-700 hover:bg-stone-100"
              }`}
            >
              {SORT_LABELS[option]}
            </Link>
          ))}
        </div>

        {trimmedQuery && trimmedQuery.length < MIN_QUERY_LENGTH && (
          <p className="text-sm text-stone-500">
            Arama için en az {MIN_QUERY_LENGTH} harf yazmalısın — tüm sonuçlar gösteriliyor.
          </p>
        )}

        {sorted.length === 0 ? (
          <p className="text-sm text-stone-500">Aramanla eşleşen bir sonuç bulunamadı.</p>
        ) : (
          <div className="flex flex-col divide-y divide-stone-200">
            {pageItems.map((item) => (
              <Link key={item.slug} href={item.href} className="flex flex-col gap-2 py-6 first:pt-0">
                <time dateTime={item.date} className="text-xs font-medium text-stone-500">
                  {new Date(item.date).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="text-lg font-semibold text-stone-950">{item.title}</h2>
                <p className="text-sm leading-relaxed text-stone-600">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Sayfalama">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={buildHref(basePath, { q: trimmedQuery || undefined, sort, page: p })}
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                  p === currentPage
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-300 text-stone-700 hover:bg-stone-100"
                }`}
                aria-current={p === currentPage ? "page" : undefined}
              >
                {p}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </Section>
  );
}
