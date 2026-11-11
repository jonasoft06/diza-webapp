"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGIN_LABEL, navLinks } from "@/content/landing";
import { useFooterInView } from "@/hooks/use-footer-in-view";
import { useScrolled } from "@/hooks/use-scrolled";
import { APP_LOGIN_URL } from "@/lib/constants";

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
        className={`mx-auto w-full max-w-5xl rounded-3xl border transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
          isSolid
            ? "border-line bg-surface/95 shadow-card backdrop-blur-md"
            : "border-white/40 bg-surface/70 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3">
          <Link
            href="/"
            aria-label="Diza, inicio"
            className="rounded-lg text-xl font-bold tracking-[-0.03em] text-primary sm:text-2xl"
          >
            diza
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <nav aria-label="Navegación principal" className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg text-sm font-medium text-ink transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <Button href={APP_LOGIN_URL} size="sm">
              {LOGIN_LABEL}
            </Button>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex size-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-tint md:hidden"
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* grid-rows transition instead of `hidden` so opening/closing is not a jump;
            `inert` keeps the collapsed menu out of the a11y tree and tab order. */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out md:hidden ${
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
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
