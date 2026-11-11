# Progreso del rediseño "Petróleo + arena"

Rama: `redesign/petroleo-arena` (sin push). Reglas para subagentes: `.claude/REDESIGN_BRIEF.md`. Fuente de verdad visual: `DESIGN.md`.

Flujo: 0 preparación → 1 propuesta de estructura → 2 tokens + footer → 3 secciones → 4 SEO → 5 cierre. Cada paso espera aprobación del usuario (✋).

## Aprobado
- **Paso 0** (2026-11-11) — rama, skills, `PRODUCT.md`, `DESIGN.md`, brief y este archivo. Con commit.

- **Paso 1** (2026-11-11) — estructura en `.claude/REDESIGN_STRUCTURE.md` (8 bloques, orden de construcción y decisiones al final). Con commit.

## En curso
- **Paso 2** — aprobado por el usuario (2026-11-11). Con commit.
  - Tokens nuevos en `globals.css`; clases renombradas en 14 componentes (`accent → primary`, `accent-hover → primary-dark`, `accent-tint → tint`, `border-border → border-line`; variante `accent` de `Card` → `primary`); `icon.svg` en petróleo.
  - Efecto del footer medido antes/después a 390, 768 y 1440: solo cambian los colores de fondo. Lint y `tsc` limpios.
  - El hero y las secciones viejas se ven raras con la paleta nueva (texto petróleo sobre la foto): se rehacen en el paso 3.

## Siguiente
- **Paso 3, entrega 1** — Header + Hero (incluye portada de libro, tarjeta con PIN y repisa, que se reutilizan después).

## Decisiones tomadas
- Tokens con los nombres del tutor en inglés: `bg, surface, line, ink, muted, primary, primary-dark, tint, sand, sand-2, shelf, sand-line, footer`. El paso 2 renombra `accent* → primary*/tint` y `border → line` en el código.
- Footer `#0F2A35` (white/75 = 9.00:1, white/60 = 6.29:1).
- `muted` sobre `shelf` falla AA (4.34): ahí se usa `ink`.
- Sombras derivadas de `ink`.

- Botón de maestro: "Solicitar acceso" con `mailto:` prellenado (aprobado por el usuario).
- No existe reporte por alumno (confirmado por el usuario).
- Diza se nombra "tutor académico con IA", sin género (decisión del usuario).
- Las rutas del tutor aún no existen: `ACTIVATE_URL` y `APP_LOGIN_URL` quedan como constantes con TODO.

- Paso 1: se retiran las cuatro imágenes de stock; Fraunces en la portada; titular "Tu libro ya viene con tutor."; botones del alumno a `https://tutor.diza.com.mx` con TODO; correo `contacto@diza.com` provisional con TODO.

## Preguntas abiertas para el usuario
- Correo de contacto y dominio definitivos (paso 4).
- WhatsApp y páginas legales (hoy placeholders en el footer).

## Notas técnicas
- Playwright: `npx -y -p playwright@1.65.0 node <script>` lanzando con `channel: "msedge"`. El Chromium instalado (1243) no es la revisión que pide 1.65.0 (1254), así que se usa Edge del sistema sin descargar nada. No está en `package.json`. El script resuelve `playwright` desde la entrada `node_modules/.bin` del PATH de npx.
- Script de medición del footer (antes/después): `footer-effect.cjs` en el scratchpad de la sesión; si se pierde, se reescribe (mide position/z-index/radios/alturas y la opacidad del contenedor del header en 6 posiciones de scroll).
- `review-animations` tiene `disable-model-invocation`: se aplica leyendo `.agents/skills/review-animations/{SKILL,STANDARDS}.md`.
- Placeholders actuales: `ACTIVATE_URL` y `APP_LOGIN_URL` = `#`; enlaces legales `#`; WhatsApp "Próximamente".
- Colores fuera de tokens a migrar: `src/app/opengraph-image.tsx` (6 hex), `src/app/icon.svg` (vino).
- `libro.png` pesa 2 MB: optimizar en el paso 3.
- El acordeón anima `height` (excepción documentada en `DESIGN.md`).
