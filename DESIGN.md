---
name: Diza
description: Tutor académico con IA para bachillerato mexicano, anclado al libro físico. Sistema "Petróleo + arena", compartido con el tutor.
colors:
  bg: "#F9F8F6"
  surface: "#FFFFFF"
  line: "#E7E4DF"
  ink: "#1E2B33"
  muted: "#59646B"
  primary: "#1D5C75"
  primary-dark: "#154558"
  tint: "#E4EEF2"
  sand: "#F1EADF"
  sand-2: "#E9DFCF"
  shelf: "#E3D9C8"
  sand-line: "#CBBBA0"
  footer: "#0F2A35"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 700
  heading:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 600
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 400
  body-medium:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 500
  body-strong:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontWeight: 600
  book-cover:
    fontFamily: "Fraunces, Georgia, serif"
    fontWeight: 600
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "#FFFFFF"
  button-secondary:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.line}"
    textColor: "{colors.ink}"
  button-link:
    textColor: "{colors.primary}"
  accordion-item:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.line}"
    radius: "1.375rem"
  highlight-panel:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    radius: "2rem"
---

# Design System: Diza

Este documento es la fuente de verdad visual de la landing (`diza.com.mx`). Si el código y este documento no coinciden, se corrige el código o se actualiza este documento en el mismo cambio.

## Overview

**Creative North Star: "El libro sobre el pupitre, y alguien que te explica"**

La landing y el tutor (`tutor.diza.com.mx`) son un solo producto: quien pasa de una al otro no debe notar el cambio. Por eso comparten sistema. El petróleo es la voz de Diza (acciones, citas de página, marca). La arena es el mundo físico del libro (papel, repisa, pupitre, tarjeta). Lo demás es neutro y deja leer.

Este sistema reemplaza (2026-11-11) al anterior de base neutra + acento vino, que no coincidía con el tutor.

**Key Characteristics:**
- Base neutra cálida (`bg` / `surface` / `line`), petróleo como único color de acción.
- Arena como material: aparece donde hay libro, tarjeta, repisa o pupitre, no como decoración.
- Elementos derivados del producto real: chip de página, tarjeta con PIN, escenas de repisa/pupitre y mockups del tutor hechos en código.
- Una sola familia tipográfica. Fraunces solo dentro de portadas de libro ilustradas.

## Colors

Los nombres de token son los del tutor, en inglés. En código se exponen como utilidades de Tailwind (`bg-primary`, `text-muted`, `border-line`, `bg-sand`…) desde `src/app/globals.css`. Ningún componente escribe un hex.

### Base
- **bg** (`#F9F8F6`): fondo de página y de las secciones neutras.
- **surface** (`#FFFFFF`): ítems del acordeón, header, burbujas de Diza, pantallas de mockup.
- **line** (`#E7E4DF`): bordes de 1px y separadores sobre `bg` y `surface`.

### Texto
- **ink** (`#1E2B33`): títulos y texto principal.
- **muted** (`#59646B`): texto secundario.

### Petróleo (acción y marca)
- **primary** (`#1D5C75`): botones primarios, enlaces, iconos, eyebrows, chip de página, burbuja del alumno, bloque destacado.
- **primary-dark** (`#154558`): hover y estado activo de lo que es `primary`.
- **tint** (`#E4EEF2`): fondo de iconos y chips, hover del botón secundario, selección de texto.

### Arena (material)
- **sand** (`#F1EADF`): bandas y paneles cálidos; el "papel" de una sección.
- **sand-2** (`#E9DFCF`): superficie anidada sobre `sand` y fondo de los huecos de imagen.
- **shelf** (`#E3D9C8`): el plano de la repisa o del pupitre dentro de una escena.
- **sand-line** (`#CBBBA0`): borde de superficies arena, canto de la repisa y borde punteado de los huecos de imagen.

### Footer
- **footer** (`#0F2A35`): fondo exclusivo del footer. Es el mismo tono del petróleo llevado casi a negro.

### Contraste verificado (WCAG 2.1)

| Texto | bg | surface | tint | sand | sand-2 | shelf |
| --- | --- | --- | --- | --- | --- | --- |
| ink | 13.66 | 14.50 | 12.30 | 12.13 | 10.99 | 10.37 |
| muted | 5.72 | 6.07 | 5.15 | 5.08 | 4.60 | **4.34 ✗** |
| primary | 6.97 | 7.39 | 6.27 | 6.19 | 5.61 | 5.29 |
| primary-dark | 9.78 | 10.38 | 8.80 | 8.68 | 7.87 | 7.42 |

| Texto blanco | sobre primary | sobre primary-dark | sobre footer |
| --- | --- | --- | --- |
| white | 7.39 | 10.38 | 14.97 |
| white/85 | 5.86 | 7.99 | — |
| white/75 | 4.96 | 6.62 | 9.00 |
| white/60 | — | — | 6.29 |

`sand-line` y `line` son bordes decorativos (1.6:1 y 1.2:1): nunca son el único indicador de un control ni se usan como color de texto.

### Named Rules

**The One Action Color Rule.** Petróleo es el único color de acción. Si algo es petróleo sólido, se puede pulsar o es la voz de Diza. `primary-dark` es un estado, no un segundo color.

**The Sand Is Material Rule.** La arena representa lo físico (papel, tarjeta, repisa, pupitre). No se usa para botones, texto ni estados. Una sección arena necesita un motivo: contiene el libro, la tarjeta o una escena.

**The One Highlight Rule.** Como máximo un bloque con fondo `primary` por página. El footer no cuenta: es su propio color.

**The No-Gradient Rule.** Sin gradientes de color en fondos, botones ni tarjetas. Excepciones: un difuminado neutro para unir una fotografía con el fondo (`transparent → bg`) y el grano de papel, que es ruido y no mezcla de color.

**The AA Floor Rule.** Todo texto cumple 4.5:1 (3:1 en texto grande). Sobre `primary`, el texto secundario no baja de `white/85`. Sobre `footer`, no baja de `white/75` (los eyebrows del footer usan `white/60`, 6.29:1). `muted` no se usa sobre `shelf`: ahí va `ink`. Cualquier opacidad o par nuevo se verifica antes de usarse y se agrega a la tabla.

## Typography

**Familia:** Plus Jakarta Sans (400/500/600/700), cargada con `next/font/google` y expuesta como `--font-jakarta`.

> La variable de fuente se declara en `<html>`, no en `<body>`. Declararla en `<body>` deja a `html { font-sans }` sin resolver y el documento cae a un serif del sistema.

**Fraunces** (600) se aplica solo dentro de la portada ilustrada (`BookCover`, utilidad `font-book-cover`). Nunca en títulos, texto ni interfaz.

**Imagen Open Graph:** `ImageResponse` no puede usar `next/font`; lee los `.ttf` de Plus Jakarta Sans (400/600/700) de `src/assets/fonts/` (licencia `OFL.txt` incluida).

### Escala
- **h1** (`text-hero`): `clamp(2.5rem, 5vw, 4.5rem)`, peso 700. Uno solo por página.
- **h2** (`text-section`): `clamp(2rem, 3.5vw, 3rem)`, peso 600.
- **h3** (títulos de paso, de anotación y de lista): 1.125rem–1.25rem, peso 600.
- **body**: 1rem–1.125rem, peso 400, `line-height: 1.6`. Nunca menos de 16px en texto de lectura.
- **body-sm** (`text-body-sm`): 0.9375rem. Texto de apoyo, respuestas del acordeón y botón `lg` en móvil.
- **eyebrow** (`text-eyebrow`): 0.75rem, peso 600, mayúsculas, `letter-spacing: 0.12em`.
- **wordmark** (`text-wordmark`, `clamp(6rem, 18vw, 16rem)`): solo el `diza` gigante del footer. El wordmark pequeño usa `tracking-wordmark` (`-0.03em`).

Los encabezados llevan `letter-spacing: -0.02em`, `line-height: 1.1` y `text-wrap: balance` desde la capa base. El texto de lectura no pasa de ~70 caracteres por línea.

### Named Rules

**The Single Family Rule.** La jerarquía se construye con peso, tamaño y color, no con una segunda tipografía.

**The Eyebrow Exception.** Los eyebrows se mantienen por decisión de producto: orientan en una landing larga de una sola página.

## Layout

- Mobile-first: los estilos base son para 360px y se agrega complejidad con `sm` / `md` / `lg`. Se verifica en 360, 390, 768, 1024, 1280 y 1440, sin scroll horizontal.
- Contenedor: `max-w-6xl` centrado.
- Padding de sección: `py-20` / `lg:py-24`, `px-4` / `sm:px-6` / `lg:px-8`.
- Radios: ítems del acordeón, píldora del header y anotaciones `rounded-3xl` (1.375rem), paneles y escenas `rounded-panel` (2rem), pantallas de mockup `rounded-screen` (1.5rem), pastillas `rounded-full`, cuadros de icono `rounded-xl`, unión de secciones `rounded-seam` (2.5rem / 3rem).
- Objetivos táctiles de 44×44px como mínimo.
- `scroll-margin-top: 6rem` en todo elemento con `id`, para que el header fijo no tape los títulos.
- Semántica: un `h1`, cada sección es un `<section>` con su `h2`, los pasos y las listas usan `h3`. `lang="es-MX"`.
- Landmarks: `header` (banner), `main#contenido` (del hero a las preguntas frecuentes), el cierre como `region` con nombre (`aria-labelledby`) y `footer` (contentinfo). El cierre queda fuera de `main` porque comparte contenedor con el footer (ver "Footer (contrato)").
- Enlace "Saltar al contenido": primer elemento enfocable, visible solo con foco, por encima del header.

### Bloques de la página (orden final)

| # | Bloque | Ancla | Fondo | Composición |
| --- | --- | --- | --- | --- |
| 0 | Header | — | transparente arriba, píldora `surface` al hacer scroll | wordmark, navegación (desde `lg`), "Ya tengo cuenta", "Activar mi libro"; menú desplegable en móvil |
| 1 | Hero | — | `bg` | `min-h-svh` (cuenta el header), sin relleno inferior; `h1` + dos CTA centrados en vertical; `HeroScene`: la mano con el libro directo sobre el fondo, anclada al borde inferior (la manga toca la base), con burbujas del alumno y de Diza (con `Chip` de página), chip de materia y tarjeta con PIN flotando alrededor. «Cómo funciona» empieza justo en la base |
| 2 | Cómo funciona | `#como-funciona` | `bg` | `ConversationDemo`: celular con la conversación y tres anotaciones que se resaltan |
| 3 | Para alumnos | `#alumnos` | `sand` | tres pasos con objetos sobre un tablón (tarjeta, inicio de sesión, conversación) + CTA |
| 4 | Para maestros | `#para-maestros` | `bg` | lista de tres con `IconBox`, maqueta `GeneratorScreen`, aviso de beta y "Solicitar acceso" |
| 5 | Privacidad | `#privacidad` | panel `primary` | el único bloque destacado de la página |
| 6 | Preguntas frecuentes | `#preguntas-frecuentes` | `bg` | título a 4/12 y acordeón de ocho preguntas a 8/12 |
| 7 | Cierre | `#activar` | `sand` | pregunta + CTA + escena de repisa reducida; es la sección que destapa el footer |
| 8 | Footer | `#site-footer` | `footer` | wordmark gigante, enlaces de producto, contacto y legales |

Los anclajes viven en `SECTION_IDS` (`src/lib/constants.ts`) y los textos en `src/content/landing.ts`, incluidos los `aria-label` (`a11y`) y los textos de metadata e imagen Open Graph (`seo`).

## Elevation & Depth

Sombras neutras y muy suaves, derivadas de `ink`. Nunca tintadas de petróleo ni duras.

- **shadow-card**: `0 1px 2px rgb(30 43 51 / 0.04), 0 8px 24px rgb(30 43 51 / 0.05)`.
- **shadow-card-hover**: `0 2px 4px rgb(30 43 51 / 0.05), 0 14px 34px rgb(30 43 51 / 0.09)`. Hoy solo la usa el ítem del acordeón en hover.
- **drop-shadow-object**: `0 10px 18px rgb(30 43 51 / 0.18)`, para objetos recortados (libro, tarjeta, celular) apoyados en una escena.
- **drop-shadow-object-soft**: `0 18px 28px rgb(30 43 51 / 0.14)`, para la foto grande del libro en la mano del hero, que flota en lugar de apoyarse.

**The Hairline Rule.** La definición de una superficie viene del borde de 1px, no de la sombra.

## Components

### Base (`src/components/ui`)

- **Button** — pastilla completa; `<a>` si recibe `href`, `<button>` si no.
  - `primary`: fondo `primary`, texto blanco, hover `primary-dark`.
  - `secondary`: fondo `surface`, borde `line`, texto `ink`, hover `tint`.
  - `link`: solo texto `primary`, hover `primary-dark`. Para la acción secundaria junto a un botón ("Ya tengo cuenta", "Escríbenos", "Solicitar acceso" en el cierre).
  - Tamaños: `sm` 44px (nav), `lg` 48px (CTA). `active:scale-[0.97]` y anillo de foco `primary`.
  - `ButtonArrow`: flecha final que avanza 2px en hover. Va solo en el CTA principal de una sección.
- **IconBox** — cuadro de 44px, `rounded-xl`, fondo `tint`, icono Lucide `primary` con `strokeWidth 1.75`. Único tratamiento de icono.
- **Chip** — pastilla `tint` con texto `primary` e icono opcional. Con el icono de libro y "Pág. N" es el motivo de marca: resume que toda respuesta se ancla a una página. También marca "Beta" en Para maestros.
- **Eyebrow** — etiqueta en mayúsculas sobre un título.
- **Accordion** (Base UI, apertura múltiple) — ítem `surface` con borde `line`, `rounded-3xl` y `shadow-card`; el icono `+` gira 45° al abrir.
- **Container / Section** (`src/components/layout`).

No existe un componente `Card`: la página no se apoya en tarjetas.

### Derivados del producto (`src/components/product`)

Se construyen en código, con tokens, a partir de lo que el alumno y el maestro ven de verdad. Su contenido es ilustrativo y no nombra libros reales.

- **BookCover** — portada ilustrada 3:4 en `primary`, con lomo y título en Fraunces. Sustituye a la foto del libro.
- **PinCard** — la tarjeta impresa 3:2 que viene aparte del libro, con el PIN en puntos. Sustituye a la foto de la tarjeta.
- **ShelfScene** — panel `sand` con un plano `shelf` y canto `sand-line` donde se apoyan libro, tarjeta o celular.
- **PhoneFrame** — marco de celular 3:5 para una pantalla del tutor; `compact` para los pasos de Para alumnos.
- **LoginScreen** y **ChatScreen** — pantallas mínimas (inicio de sesión con correo institucional y PIN; conversación con chip de página) para los pasos 2 y 3 de Para alumnos.
- **GeneratorScreen** — maqueta del generador del maestro (`role="img"` con descripción).
- **HeroScene** (`src/components/sections/hero-scene.tsx`) — el visual del hero. Usa las fotos `public/images/hero/hero_hand_book.webp` (608×1309) y `pin_card.webp` (fondo transparente, ya inclinada ~12° en el archivo) con `next/image`; el libro lleva `preload` y la tarjeta carga diferida. Todo se posiciona en porcentajes de la mano, que mide 78% del alto del hero en escritorio (máx. 54rem), de modo que el libro arranca a la altura del eyebrow y 68svh (mín. 28rem) debajo de `lg`. Las burbujas son `surface` con borde `line`, `rounded-2xl` y `shadow-card`. Debajo de `md` (móvil) las dos burbujas quedan a los lados del libro (máx. 58vw, texto de 14px, sin tapar los dedos) y no hay chip de materia ni tarjeta con PIN. `BookCover`, `PinCard` y `ShelfScene` siguen en Para alumnos y en el cierre.
- **ConversationDemo** (`src/components/sections`) — la conversación de "Cómo funciona": se reproduce una sola vez al entrar en pantalla y resalta la anotación que corresponde a cada turno.

### Otros

- **Reveal / Stagger / RevealItem** (`src/components/motion`) — ver Motion.
- **JsonLd** (`src/components/json-ld.tsx`) — datos estructurados `Organization` y `FAQPage`; el segundo se genera desde `faq.entries`, así que la página y el JSON-LD no pueden divergir.

### Huecos de imagen

Donde falta una imagen real, la página muestra un sustituto dibujado en código (misma proporción, mismos tokens) y el hueco se registra aquí con su contenido, proporción, texto alternativo y un prompt sugerido para Recraft. Un bloque punteado visible no se usa: en el tamaño de estos objetos no caben el alt ni el prompt, y rompería la escena de la repisa.

Al llegar la imagen real: se exporta con fondo removido (PNG o WebP con transparencia), se coloca en `public/images/` y reemplaza al sustituto con `next/image`, `alt` de la tabla y `sizes` ajustado al ancho pintado.

| Hueco | Dónde va | Proporción | Sustituto actual | Texto alternativo | Prompt sugerido para Recraft |
| --- | --- | --- | --- | --- | --- |
| Tarjeta con PIN real | Para alumnos, paso 1 (el hero ya usa foto) | 3:2, objeto con fondo removido | `PinCard` | "Tarjeta de activación de Diza con el PIN impreso" | "Fotografía de producto fotorrealista de una tarjeta impresa de cartulina blanca mate, tamaño tarjeta de crédito, vista frontal con una inclinación mínima, con un código PIN de seis caracteres impreso en tinta oscura y un detalle en azul petróleo (#1D5C75). Luz de estudio suave, sombra de contacto sutil, fondo transparente, sin manos ni otros objetos, sin logotipos inventados." |
| Portada real del libro | Cierre (el hero ya usa foto) | 3:4, objeto con fondo removido | `BookCover` | "Portada del libro de bachillerato que incluye acceso a Diza" | "Fotografía de producto fotorrealista de un libro de texto de bachillerato de pasta blanda, de pie, visto de frente con el lomo apenas visible a la izquierda, portada en azul petróleo (#1D5C75) con tipografía serif clara. Luz de estudio suave, sombra de contacto sutil, fondo transparente, sin texto legible de editoriales reales ni logotipos." |

La foto de la tarjeta debe ser la tarjeta verdadera en cuanto exista: el alumno tiene que reconocerla. El prompt sirve solo como imagen provisional.

## Footer (contrato)

El comportamiento del footer no se cambia sin aprobación explícita.

- `sticky`, `z-0`. La sección anterior (hoy el cierre, `#activar`) lleva `relative z-10` y esquinas inferiores `rounded-b-seam`, y lo destapa al hacer scroll. Si esa sección cambia, la nueva hereda esas clases y el efecto queda igual.
- El cierre y el footer comparten un contenedor `relative` propio en `page.tsx`. Ese contenedor limita el tramo en el que el footer queda fijo: no se quita ni se amplía, y el footer no entra en `main`. Si el contenedor abarcara toda la página, `use-footer-in-view` vería siempre el footer y el navbar no aparecería.
- Mientras cabe en pantalla, queda fijo por su borde inferior (`bottom: 0`). Si es más alto que la pantalla (móviles bajos), queda fijo por su borde superior para que el wordmark se destape primero y el resto se recorra después: `bottom: min(0px, calc(100dvh - var(--footer-height)))`. `FooterHeightObserver` (cliente, `ResizeObserver`) publica `--footer-height`; sin JavaScript vale 0 y el footer se comporta como `bottom-0`. Aprobado el 2026-11-11 (opción B).
- Conserva el wordmark gigante `diza` (`text-wordmark`, `white/8`, decorativo) y el grano de papel (`paper-grain`).
- Fondo `footer`. Texto principal blanco, secundario `white/75`, encabezados de columna `white/60`, separador `white/15`. El anillo de foco es blanco (el `primary` global no contrasta sobre `footer`).
- `use-footer-in-view` observa `#site-footer` y oculta el navbar cuando el footer entra en vista.

## Motion

Librería: Motion (`motion/react`). No se instala ninguna otra. `MotionConfig reducedMotion="user"` envuelve la app en el layout raíz.

- **Revelado al hacer scroll**: fundido o fundido + 16px hacia arriba, `viewport={{ once: true }}`. `Reveal` / `Stagger` / `RevealItem` en `src/components/motion/reveal.tsx` centralizan variantes y viewport. Los títulos entran con fundido; las piezas (maquetas, pasos, ítems del acordeón) con fundido + 16px.
- **Curva en Motion**: `EASE_OUT_STRONG` (`src/components/motion/easing.ts`), la misma que `--ease-out-strong`.
- **Stagger**: 60ms entre hijos (rango permitido: 30–80ms).
- **Hero**: el subrayado del titular se dibuja una sola vez (`animate-underline`). Cada pieza de la escena lleva tres envoltorios para que los transforms no choquen: parallax (externo, Motion), entrada (intermedio, CSS `animate-hero-enter`) y flotado (interno, CSS `animate-hero-float`). Entrada: el libro sube 56px desde abajo y después burbujas, chip y tarjeta con PIN (fundido + 12px, 500ms, ~70ms entre piezas). Es CSS para no esperar a la hidratación.
- **Flotado en reposo**: tras su entrada, cada burbuja, el chip y la tarjeta con PIN flotan en bucle (±4–6px, 4.4–6s, `ease-in-out`, `alternate`), cada una con duración y retraso propios. La tarjeta además gira ±1°. El libro no flota.
- **Parallax del hero** (solo desde `md`): `useScroll` + `useTransform` mueven cada pieza flotante entre 8 y 20px según su velocidad, respecto al libro, que no se mueve. En móvil se apaga con `max-md:transform-none!`.
- **Sin hover en el hero**: burbujas, chip y tarjeta no son interactivos, así que no reaccionan al cursor.
- **Wrappers animados sin `display`**: ningún wrapper con animación de entrada alterna `display: none ↔ block` (reinicia la animación CSS y la pieza reaparecía desde `opacity: 0` al cruzar `md`). Lo exclusivo de escritorio (chip, tarjeta PIN) oculta su propio contenido. La entrada usa `animation-fill-mode: backwards`, no `both`.
- **Movimiento reducido en el hero**: sin flotado ni parallax, solo el fundido de entrada (`hero-fade`, 200ms).
- **Interacción**: press 100–160ms, hover 200ms, acordeón y navbar hasta 250ms, con `--ease-out-strong` (`cubic-bezier(0.23, 1, 0.32, 1)`).
- **Ligado al scroll**: `useScroll` / `useTransform` sobre `transform` y `opacity`, o CSS (`position: sticky`). Sin listeners de scroll propios para animar.
- **Animación explicativa** (por ejemplo el mockup de conversación): puede durar más de 300ms porque enseña cómo funciona el producto.

### Named Rules

**The Purpose Rule.** Cada animación responde "¿por qué se anima esto?": explica, da feedback, orienta o evita un cambio brusco. Si no hay respuesta, se quita.

**The Under-300ms Rule.** Toda animación de interfaz se resuelve en menos de 300ms. Solo la animación explicativa de marketing puede durar más.

**The Entering Ease Rule.** Lo que entra o sale usa `ease-out` fuerte. Lo que se mueve en pantalla, `ease-in-out`. Nunca `ease-in`.

**The GPU Rule.** Solo se animan `transform` y `opacity`. En Motion se escribe la cadena completa (`transform: "translateY(16px)"`), no los atajos `x` / `y` / `scale`. Nunca `transition: all` ni entradas desde `scale(0)`. Dos excepciones, ambas de altura: el panel del acordeón (`height`), porque su contenido debe empujar el resto de la página, y el menú móvil del header (`grid-template-rows`), que al ser `fixed` no recalcula el layout de la página.

**The Hover Gate Rule.** El movimiento en hover solo ocurre donde hay hover real. Tailwind v4 ya envuelve `hover:` y `group-hover:` en `@media (hover: hover)`; fuera de Tailwind se escribe esa media query a mano. Nada depende de hover para funcionar.

**The Reduced-Motion Rule.** Con `prefers-reduced-motion: reduce` se elimina el movimiento y se conservan las transiciones de opacidad y color (200ms). El contenido se ve completo sin animación. Nunca un apagado global de 0.01ms sobre las transiciones. En Motion, `MotionConfig reducedMotion="user"` solo neutraliza los atajos (`x`, `y`…), no la cadena `transform`: cada componente que anima `transform` consulta `useReducedMotion()` y deja esa transición en 0.

## Do's and Don'ts

### Do:
- **Do** usar petróleo solo para acción y para la voz de Diza.
- **Do** usar arena donde hay libro, tarjeta, repisa o pupitre.
- **Do** definir las superficies elevadas (ítems del acordeón, píldora del header) con borde de 1px + sombra suave.
- **Do** usar `IconBox` para todo icono y `Chip` para reforzar el ancla al libro.
- **Do** verificar el contraste de cualquier par u opacidad nueva y agregarlo a la tabla.
- **Do** alternar composición entre secciones (escena, mockup, lista, acordeón, bloque destacado).

### Don't:
- **Don't** escribir colores fuera de tokens.
- **Don't** usar `muted` sobre `shelf`, ni arena como color de texto o de botón.
- **Don't** usar gradientes de color ni sombras tintadas.
- **Don't** usar más de un bloque con fondo `primary` por página.
- **Don't** apoyar la página en rejillas de tarjetas idénticas.
- **Don't** inventar testimonios, cifras, escuelas ni nombres de libros, tampoco dentro de un mockup.
- **Don't** tocar el comportamiento del footer.
