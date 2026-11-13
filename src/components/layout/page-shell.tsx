import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { a11y } from "@/content/landing";
import { MAIN_ID } from "@/lib/constants";

/**
 * What every page of the site shares: the skip link, the header, `<main>` and, below it,
 * the closing block (`cta`) sitting on the pinned footer. `cta` shares the footer's
 * container instead of living in `<main>`, because it is what masks the footer as it
 * scrolls away (see "Footer (contrato)" in DESIGN.md).
 */
export function PageShell({
  children,
  cta,
  solidHeader = false,
}: {
  children: ReactNode;
  cta: ReactNode;
  /** The page opens with a dark band, so the navbar is drawn solid from the start. */
  solidHeader?: boolean;
}) {
  return (
    <>
      {/* Also transparent while parked above the viewport: iOS overscroll would otherwise drag it into view. */}
      <a
        href={`#${MAIN_ID}`}
        className="fixed left-4 top-4 z-60 -translate-y-24 rounded-full bg-primary px-5 py-3 text-body-sm font-semibold text-white opacity-0 transition-[opacity,transform] duration-150 ease-out-strong focus-visible:translate-y-0 focus-visible:opacity-100"
      >
        {a11y.skipToContent}
      </a>
      <Header solid={solidHeader} />
      <main id={MAIN_ID}>{children}</main>
      <div className="relative">
        {cta}
        <Footer />
      </div>
    </>
  );
}
