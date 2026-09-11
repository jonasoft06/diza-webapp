"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const SCROLL_THRESHOLD = 20

export interface HeaderNavLink {
  label: string
  href: string
}

export interface HeaderProps {
  logo?: string
  navLinks?: HeaderNavLink[]
  ctaLabel?: string
}

const defaultNavLinks: HeaderNavLink[] = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Para maestros", href: "#para-maestros" },
]

export function Header({
  logo = "DIZA",
  navLinks = defaultNavLinks,
  ctaLabel = "Ya tengo cuenta",
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [placeholderHeight, setPlaceholderHeight] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > SCROLL_THRESHOLD
      setScrolled((wasScrolled) => {
        if (!wasScrolled && isScrolled && wrapperRef.current) {
          setPlaceholderHeight(wrapperRef.current.offsetHeight)
        }
        return isScrolled
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={scrolled ? { height: placeholderHeight } : undefined}
      className="flex w-full justify-center py-6"
    >
      <nav
        className={cn(
          "flex items-center gap-8 rounded-full px-6 py-3 transition-shadow duration-300",
          scrolled
            ? "fixed top-4 left-1/2 z-50 -translate-x-1/2 bg-white shadow-[0_8px_24px_-4px_rgba(138,59,46,0.14)]"
            : "bg-(--papel-landing)"
        )}
      >
        <span className="font-heading text-xl font-bold text-(--vino)">
          {logo}
        </span>

        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-(--tinta) transition-colors hover:text-(--dorado-texto)"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button variant="secondary" size="sm">
          {ctaLabel}
        </Button>
      </nav>
    </div>
  )
}
