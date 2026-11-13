import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/layout/page-shell";
import { AccessSteps } from "@/components/sections/access-steps";
import { BackingStrip } from "@/components/sections/backing-strip";
import { ClassPlan } from "@/components/sections/class-plan";
import { FAQ } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ForTeachers } from "@/components/sections/for-teachers";
import { MaestrosHero } from "@/components/sections/maestros-hero";
import { TeacherApproach } from "@/components/sections/teacher-approach";
import {
  maestrosFaq,
  maestrosFinalCta,
  maestrosSeo,
  maestrosToolsHeading,
} from "@/content/maestros";
import { MAESTROS_PATH, SITE_NAME } from "@/lib/constants";
import { buildFaqPageJsonLd, organizationJsonLd } from "@/lib/structured-data";

// The page's own title, description and social cards. `openGraph` and `twitter` replace the root
// layout's objects whole (they are not merged field by field), so they are complete here.
export const metadata: Metadata = {
  title: maestrosSeo.title,
  description: maestrosSeo.description,
  alternates: { canonical: MAESTROS_PATH },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: MAESTROS_PATH,
    siteName: SITE_NAME,
    title: maestrosSeo.title,
    description: maestrosSeo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: maestrosSeo.title,
    description: maestrosSeo.description,
  },
};

export default function MaestrosPage() {
  return (
    <>
      <JsonLd schema={organizationJsonLd} />
      <JsonLd schema={buildFaqPageJsonLd(maestrosFaq.entries)} />
      <PageShell cta={<FinalCta content={maestrosFinalCta} />}>
        <MaestrosHero />
        <BackingStrip />
        <TeacherApproach />
        <ForTeachers heading={maestrosToolsHeading} />
        <ClassPlan />
        <AccessSteps />
        <FAQ content={maestrosFaq} />
      </PageShell>
    </>
  );
}
