import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/layout/page-shell";
import { ChatExample } from "@/components/sections/chat-example";
import { FAQ } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ForStudents } from "@/components/sections/for-students";
import { PrivacyCard } from "@/components/sections/privacy-card";
import { Topics } from "@/components/sections/topics";
import { alumnosFaq, alumnosFinalCta, alumnosSeo } from "@/content/alumnos";
import { ALUMNOS_PATH, SITE_NAME } from "@/lib/constants";
import { buildFaqPageJsonLd, organizationJsonLd } from "@/lib/structured-data";

// The page's own title, description and social cards. `openGraph` and `twitter` replace the root
// layout's objects whole (they are not merged field by field), so they are complete here.
export const metadata: Metadata = {
  title: alumnosSeo.title,
  description: alumnosSeo.description,
  alternates: { canonical: ALUMNOS_PATH },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: ALUMNOS_PATH,
    siteName: SITE_NAME,
    title: alumnosSeo.title,
    description: alumnosSeo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: alumnosSeo.title,
    description: alumnosSeo.description,
  },
};

export default function AlumnosPage() {
  return (
    <>
      <JsonLd schema={organizationJsonLd} />
      <JsonLd schema={buildFaqPageJsonLd(alumnosFaq.entries)} />
      <PageShell solidHeader cta={<FinalCta content={alumnosFinalCta} />}>
        <ForStudents />
        <PrivacyCard />
        <Topics />
        <ChatExample />
        <FAQ content={alumnosFaq} />
      </PageShell>
    </>
  );
}
