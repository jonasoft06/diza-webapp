"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ACTIVATE_CTA_LABEL, ACTIVATE_CTA_SHORT_LABEL, LOGIN_LABEL, navLinks } from "@/content/landing";
import { useFooterInView } from "@/hooks/use-footer-in-view";
import { useScrolled } from "@/hooks/use-scrolled";
import { ACTIVATE_URL, APP_LOGIN_URL } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrolled();
  const isFooterInView = useFooterInView(() => setIsMenuOpen(false));

  const isSolid = isScrolled || isMenuOpen;

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-[opacity,transform] duration-250 ease-out sm:px-6 sm:pt-6 lg:px-8 ${
        isFooterInView ? "pointer-events-none -translate-y-2 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <header
        className={`mx-auto w-full max-w-6xl rounded-3xl border transition-[background-color,border-color,box-shadow] duration-200 ease-out ${
          isMenuOpen
            ? "border-line bg-surface shadow-card"
            : isScrolled
              ? "border-line bg-surface/95 shadow-card backdrop-blur-md"
              : "border-transparent bg-transparent"
        }`}
      >
        {/* The pill is invisible at the top, so wordmark and actions shift outward by
            padding + border to align with the page content; once the surface appears
            they move back in to give it breathing room. */}
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3">
          <Link
            href="/"
            aria-label="Diza, inicio"
            className={`flex min-h-11 min-w-11 items-center rounded-lg text-xl font-bold tracking-[-0.03em] text-primary transition-transform duration-200 ease-out sm:text-2xl ${
              isSolid ? "translate-x-0" : "-translate-x-[17px] sm:-translate-x-[21px]"
            }`}
          >
            diza
          </Link>

          <div
            className={`flex items-center gap-2 transition-transform duration-200 ease-out sm:gap-4 ${
              isSolid ? "translate-x-0" : "translate-x-[17px] sm:translate-x-[21px]"
            }`}
          >
            <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex min-h-11 items-center rounded-lg text-sm font-medium text-ink transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={APP_LOGIN_URL}
              className="hidden min-h-11 items-center rounded-lg text-sm font-medium text-ink transition-colors hover:text-primary lg:ml-4 lg:flex"
            >
              {LOGIN_LABEL}
            </a>

            <Button href={ACTIVATE_URL} size="sm">
              <span className="lg:hidden">{ACTIVATE_CTA_SHORT_LABEL}</span>
              <span className="hidden lg:inline">{ACTIVATE_CTA_LABEL}</span>
            </Button>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex size-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-tint lg:hidden"
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* grid-rows transition instead of `hidden` so opening/closing is not a jump;
            `inert` keeps the collapsed menu out of the a11y tree and tab order. */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out lg:hidden ${
            isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav
            id="mobile-nav"
            aria-label="Navegación principal móvil"
            inert={!isMenuOpen}
            className="min-h-0 overflow-hidden"
          >
            <ul className="border-t border-line px-4 pb-3 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex min-h-11 items-center rounded-xl px-2 text-sm font-medium text-ink transition-colors hover:bg-tint hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={APP_LOGIN_URL}
                  className="flex min-h-11 items-center rounded-xl px-2 text-sm font-medium text-ink transition-colors hover:bg-tint hover:text-primary"
                >
                  {LOGIN_LABEL}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
