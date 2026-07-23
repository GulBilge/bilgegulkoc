import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
        İşini büyütürken kendine de yer aç ☘️
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-stone-600">
        Uzman kadınlar için yapay zeka çözümleri — yazılımcı anne olarak
        içeriden anlatıyorum.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button href="/ne-yapiyorum">Ne Yapıyorum</Button>
        <Button href="/hakkimda" variant="secondary">
          Hakkımda
        </Button>
      </div>
    </div>
  );
}
