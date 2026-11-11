import { JsonLd } from "@/components/json-ld";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Closing } from "@/components/sections/closing";
import { FAQ } from "@/components/sections/faq";
import { ForStudents } from "@/components/sections/for-students";
import { ForTeachers } from "@/components/sections/for-teachers";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Privacy } from "@/components/sections/privacy";
import { a11y } from "@/content/landing";
import { MAIN_ID } from "@/lib/constants";
import { faqPageJsonLd, organizationJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd schema={organizationJsonLd} />
      <JsonLd schema={faqPageJsonLd} />
      {/* Also transparent while parked above the viewport: iOS overscroll would otherwise drag it into view. */}
      <a
        href={`#${MAIN_ID}`}
        className="fixed left-4 top-4 z-60 -translate-y-24 rounded-full bg-primary px-5 py-3 text-body-sm font-semibold text-white opacity-0 transition-[opacity,transform] duration-150 ease-out-strong focus-visible:translate-y-0 focus-visible:opacity-100"
      >
        {a11y.skipToContent}
      </a>
      <Header />
      <main id={MAIN_ID}>
        <Hero />
        <HowItWorks />
        <ForStudents />
        <ForTeachers />
        <Privacy />
        <FAQ />
      </main>
      {/* Closing masks the pinned Footer as it scrolls away, so it shares the footer's container instead of living in <main>. */}
      <div className="relative">
        <Closing />
        <Footer />
      </div>
    </>
  );
}
