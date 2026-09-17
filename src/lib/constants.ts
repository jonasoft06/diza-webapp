/**
 * Single source of truth for in-page anchors and external app URLs.
 * The navbar, the footer and the section elements all read from here.
 */
export const SECTION_IDS = {
  howItWorks: "como-funciona",
  benefits: "beneficios",
  forTeachers: "para-maestros",
  faq: "preguntas-frecuentes",
  activate: "activar",
  testimonials: "testimonios",
} as const;

/** Observed by the header to hide the navbar once the footer is revealed. */
export const FOOTER_ID = "site-footer";

// ---------------------------------------------------------------------------
// Placeholders — replace before launch
// ---------------------------------------------------------------------------

/** TODO: URL real de la app (activación de PIN). */
export const ACTIVATE_URL = "#";

/** TODO: URL real de la app (inicio de sesión). */
export const APP_LOGIN_URL = "#";

/** TODO: confirmar correo de soporte real. */
export const SUPPORT_EMAIL = "contacto@diza.com";
