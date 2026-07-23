import { Button } from "@/components/ui/Button";

export function CTA({
  title,
  href,
  label,
}: {
  title: string;
  href: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl bg-stone-100 p-8 sm:p-10">
      <p className="text-lg font-medium text-stone-950">{title}</p>
      <Button href={href}>{label}</Button>
    </div>
  );
}
