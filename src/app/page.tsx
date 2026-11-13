import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/layout/page-shell";
import { ChoosePath } from "@/components/sections/choose-path";
import { Comparison } from "@/components/sections/comparison";
import { FAQ } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Moments } from "@/components/sections/moments";
import { PrivacyStrip } from "@/components/sections/privacy-strip";
import { finalCta } from "@/content/landing";
import { faqPageJsonLd, organizationJsonLd } from "@/lib/structured-data";

// ForTeachers moves to /maestros; ForStudents already lives on /alumnos.
export default function Home() {
  return (
    <>
      <JsonLd schema={organizationJsonLd} />
      <JsonLd schema={faqPageJsonLd} />
      <PageShell cta={<FinalCta content={finalCta} />}>
        <Hero />
        <Moments />
        <HowItWorks />
        <Comparison />
        <ChoosePath />
        <PrivacyStrip />
        <FAQ />
      </PageShell>
    </>
  );
}
