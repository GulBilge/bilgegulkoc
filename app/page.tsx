import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/sections/Hero";
import { ProofPoints } from "@/components/sections/ProofPoints";
import { CTA } from "@/components/sections/CTA";

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
          title="[CTA metni buraya gelecek]"
          href="/ne-yapiyorum"
          label="Ne Yapıyorum"
        />
      </Section>
    </>
  );
}
