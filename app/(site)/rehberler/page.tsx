import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { guideResources } from "@/lib/kaynaklar";
import { ResourceListPage } from "@/components/kaynaklar/ResourceListPage";
import { isSortOption } from "@/lib/resource-list";

export const metadata: Metadata = pageMetadata(
  "Rehberler",
  "Adım adım, ücretsiz rehberler — tarihe göre sıralı tek liste."
);

export default async function RehberlerPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string; page?: string }>;
}) {
  const { q, sort, page } = await searchParams;
  const pageNumber = Number(page);

  return (
    <ResourceListPage
      basePath="/rehberler"
      title="Rehberler"
      description="Adım adım, ücretsiz rehberler — tarihe göre sıralı tek liste."
      items={guideResources}
      q={q}
      sort={isSortOption(sort) ? sort : undefined}
      page={Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : undefined}
    />
  );
}
