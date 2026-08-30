import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";
import { ProofPoints } from "@/components/sections/ProofPoints";
import { CTA } from "@/components/sections/CTA";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section className="border-t border-stone-200">
        <ProofPoints />
      </Section>
      <Section className="border-t border-stone-200">
        <CTA
          title="Yazılım otomasyon projen için bir proje keşfi görüşmesi ayarla."
          href="/proje-kesfi"
          label="Uygun bir zaman seç"
        />
      </Section>
      <Section className="border-t border-stone-200">
        <CTA
          title="Bir sonraki adımı birlikte atalım."
          href={siteConfig.instagram}
          label="Instagram'da DM'e CLAUDE yaz"
        />
      </Section>
    </>
  );
}
