import type { ResourceItem } from "./kaynaklar";

export type SortOption = "date-desc" | "date-asc" | "title-asc" | "title-desc";

export const SORT_OPTIONS: SortOption[] = ["date-desc", "date-asc", "title-asc", "title-desc"];

export const RESOURCE_PAGE_SIZE = 8;

export const MIN_QUERY_LENGTH = 3;

export function isSortOption(value: string | undefined): value is SortOption {
  return !!value && (SORT_OPTIONS as string[]).includes(value);
}

export function filterResourcesByQuery(items: ResourceItem[], query: string): ResourceItem[] {
  if (query.length < MIN_QUERY_LENGTH) return items;
  const needle = query.toLocaleLowerCase("tr");
  return items.filter((item) => item.title.toLocaleLowerCase("tr").includes(needle));
}

export function sortResources(items: ResourceItem[], sort: SortOption): ResourceItem[] {
  const sorted = [...items];
  switch (sort) {
    case "date-asc":
      sorted.sort((a, b) => a.date.localeCompare(b.date));
      break;
    case "title-asc":
      sorted.sort((a, b) => a.title.localeCompare(b.title, "tr"));
      break;
    case "title-desc":
      sorted.sort((a, b) => b.title.localeCompare(a.title, "tr"));
      break;
    default:
      sorted.sort((a, b) => b.date.localeCompare(a.date));
  }
  return sorted;
}

export function paginate<T>(items: T[], page: number, pageSize: number = RESOURCE_PAGE_SIZE) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    currentPage,
    totalPages,
  };
}
