import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { promptResources } from "@/lib/kaynaklar";
import { ResourceListPage } from "@/components/kaynaklar/ResourceListPage";
import { isSortOption } from "@/lib/resource-list";

export const metadata: Metadata = pageMetadata(
  "Promptlar",
  "21 Gün 21 Claude Özelliği ve Claude Cowork serilerinden kopyala-yapıştır hazır tüm promptlar, tek listede."
);

export default async function PromptlarPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string; page?: string }>;
}) {
  const { q, sort, page } = await searchParams;
  const pageNumber = Number(page);

  return (
    <ResourceListPage
      basePath="/promptlar"
      title="Promptlar"
      description="21 Gün 21 Claude Özelliği ve Claude Cowork serilerinden kopyala-yapıştır hazır tüm promptlar, tarihe göre sıralı."
      items={promptResources}
      q={q}
      sort={isSortOption(sort) ? sort : undefined}
      page={Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : undefined}
    />
  );
}
