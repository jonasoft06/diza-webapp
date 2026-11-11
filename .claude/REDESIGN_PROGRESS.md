# Progreso del rediseño "Petróleo + arena"

Rama: `redesign/petroleo-arena` (sin push). Reglas para subagentes: `.claude/REDESIGN_BRIEF.md`. Fuente de verdad visual: `DESIGN.md`.

Flujo: 0 preparación → 1 propuesta de estructura → 2 tokens + footer → 3 secciones → 4 SEO → 5 cierre. Cada paso espera aprobación del usuario (✋).

## Aprobado
- **Paso 0** (2026-11-11) — rama, skills, `PRODUCT.md`, `DESIGN.md`, brief y este archivo. Con commit.

- **Paso 1** (2026-11-11) — estructura en `.claude/REDESIGN_STRUCTURE.md` (8 bloques, orden de construcción y decisiones al final). Con commit.

- **Paso 2** (2026-11-11) — tokens nuevos en `globals.css`, clases renombradas en 14 componentes, `icon.svg` en petróleo, footer `#0F2A35`. Efecto del footer medido antes/después: solo cambian colores. Con commit.

## En curso
- **Paso 3, entrega 1 — Header + Hero**: construida, con 1 ronda de corrección y QA en 390/768/1440 aprobado por el director. **Espera aprobación del usuario; sin commit todavía.**
  - Hero nuevo sin foto ni apilado: texto + escena de repisa en código (`src/components/product/`: `BookCover`, `PinCard`, `ShelfScene`, reutilizables en entregas 3 y 5). Fraunces solo en la portada.
  - Header: transparente arriba (wordmark y acciones alineados con el contenido mediante `transform`), píldora al hacer scroll; escritorio desde `lg`; "Ya tengo cuenta" + "Activar mi libro".
  - `ACTIVATE_CTA_LABEL` / `ACTIVATE_CTA_SHORT_LABEL` en `landing.ts`; `TUTOR_URL` y `SUPPORT_EMAIL` en `constants.ts` con TODO.
  - Temporal hasta entregas posteriores: el enlace "Para alumnos" (`#alumnos`) no tiene destino hasta la entrega 3; las secciones viejas siguen debajo del hero.
  - Para el paso 5 (review-animations): el menú móvil anima `grid-template-rows` (ya existía).

## Siguiente
- **Paso 3, entrega 2** — Cómo funciona (demo): conversación animada dentro de un teléfono en código + 3 anotaciones sincronizadas.

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
- Scripts de QA en el scratchpad de la sesión: `qa-section.cjs <url> <outDir> <label> <selector>` (métricas + capturas por sección) y `header-align.cjs <url> <outDir>` (alineación, áreas táctiles y menú del header).
- Script de medición del footer (antes/después): `footer-effect.cjs` en el scratchpad de la sesión; si se pierde, se reescribe (mide position/z-index/radios/alturas y la opacidad del contenedor del header en 6 posiciones de scroll).
- `review-animations` tiene `disable-model-invocation`: se aplica leyendo `.agents/skills/review-animations/{SKILL,STANDARDS}.md`.
- Placeholders actuales: `ACTIVATE_URL` y `APP_LOGIN_URL` = `https://tutor.diza.com.mx` (raíz, con TODO); enlaces legales `#`; WhatsApp "Próximamente".
- Colores fuera de tokens a migrar en el paso 4: `src/app/opengraph-image.tsx` (6 hex vino).
- `hero_background.jpg` ya se borró; `libro.png`, `tarjeta-pin.png` y `celular.png` siguen en uso por la sección vieja de pasos hasta la entrega 3.
- El acordeón anima `height` (excepción documentada en `DESIGN.md`).
