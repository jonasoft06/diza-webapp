import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FooterHeightObserver } from "@/components/layout/footer-height-observer";
import { a11y, footer } from "@/content/landing";
import { FOOTER_ID, SUPPORT_MAILTO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const linkClass =
  "flex min-h-11 items-center text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-white";

export function Footer() {
  return (
    // Pinned by its bottom edge while it fits on screen. When it is taller than the screen the offset turns
    // negative and pins it by its top edge instead, so the wordmark is revealed and the rest scrolls into view.
    <footer
      id={FOOTER_ID}
      className="paper-grain sticky bottom-[min(0px,calc(100dvh-var(--footer-height,0px)))] z-0 bg-footer px-4 pb-8 pt-14 text-white sm:px-6 lg:px-8"
    >
      <FooterHeightObserver />
      <Container>
        {/* Oversized wordmark: brand presence without adding another block of copy. */}
        <span
          aria-hidden="true"
          className="block select-none text-wordmark font-bold leading-[0.8] tracking-[-0.04em] text-white/8"
        >
          diza
        </span>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xs sm:col-span-2 lg:col-span-1">
            {/* The extra height reaches the 44px touch target; the negative margin keeps the layout where it was. */}
            <Link
              href="/"
              aria-label={a11y.homeLabel}
              className="-my-1.5 flex min-h-11 w-fit items-center text-2xl font-bold tracking-wordmark text-white focus-visible:outline-white"
            >
              diza
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{footer.tagline}</p>
          </div>

          <nav aria-label={footer.productHeading}>
            <p className="text-eyebrow text-white/60">{footer.productHeading}</p>
            <ul className="mt-2">
              {footer.productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-eyebrow text-white/60">{footer.contactHeading}</p>
            <ul className="mt-2">
              <li>
                <a href={SUPPORT_MAILTO} className={linkClass}>
                  {footer.supportEmail}
                </a>
              </li>
              <li>
                <span className="flex min-h-11 items-center text-sm text-white/75">
                  {footer.whatsapp}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/15 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-6">
            {footer.legalLinks.map((link) => (
              <a key={link.label} href={link.href} className={cn(linkClass, "text-xs")}>
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/75">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
