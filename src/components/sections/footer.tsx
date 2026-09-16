import { APP_LOGIN_URL, NAV_LINKS } from "@/lib/links";

const legalLinks = [
  // TODO: apuntar a las páginas reales de aviso de privacidad y términos y condiciones
  { label: "Aviso de privacidad", href: "#" },
  { label: "Términos y condiciones", href: "#" },
];

const footerLinkClass =
  "flex min-h-11 items-center text-sm text-white/75 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer
      id="site-footer"
      className="paper-grain sticky bottom-0 z-0 bg-footer px-4 pb-8 pt-14 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Oversized wordmark: brand presence without adding another block of copy. */}
        <span
          aria-hidden="true"
          className="block select-none text-[clamp(6rem,18vw,16rem)] font-bold leading-[0.8] tracking-[-0.04em] text-white/8"
        >
          diza
        </span>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xs sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              aria-label="Diza, inicio"
              className="text-2xl font-bold tracking-[-0.03em] text-white"
            >
              diza
            </a>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Tu libro, ahora con quien te explica.
            </p>
          </div>

          <nav aria-label="Producto">
            <p className="text-eyebrow text-white/60">Producto</p>
            <ul className="mt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={footerLinkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={APP_LOGIN_URL} className={footerLinkClass}>
                  Ya tengo cuenta
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-eyebrow text-white/60">Contacto</p>
            <ul className="mt-2">
              <li>
                {/* TODO: confirmar correo de soporte real */}
                <a href="mailto:contacto@diza.com" className={footerLinkClass}>
                  contacto@diza.com
                </a>
              </li>
              <li>
                {/* TODO: agregar número de WhatsApp cuando esté disponible */}
                <span className="flex min-h-11 items-center text-sm text-white/75">
                  WhatsApp — Próximamente
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/15 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-6">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className={`${footerLinkClass} text-xs`}>
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/75">
            © 2026 Distribuidora Educativa (DIS). Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
