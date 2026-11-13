import { faq } from "@/content/landing";
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/lib/constants";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: SUPPORT_EMAIL,
};

/** FAQPage data built from the same entries the page shows, so page and JSON-LD cannot diverge. */
export function buildFaqPageJsonLd(entries: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export const faqPageJsonLd = buildFaqPageJsonLd(faq.entries);
