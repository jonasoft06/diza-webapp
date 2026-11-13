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
  primary-light: "#8FC3D6"
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
- Una sola familia tipográfica: Plus Jakarta Sans.

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
- **primary-light** (`#8FC3D6`): solo texto pequeño o iconos sueltos (el eyebrow, el ojo de la franja de privacidad) sobre `primary-dark`; 5.4:1 ahí. No se usa sobre fondos claros.
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
| white/70 | — | 5.99 | — |
| white/60 | — | — | 6.29 |

`sand-line` y `line` son bordes decorativos (1.6:1 y 1.2:1): nunca son el único indicador de un control ni se usan como color de texto.

### Named Rules

**The One Action Color Rule.** Petróleo es el único color de acción. Si algo es petróleo sólido, se puede pulsar o es la voz de Diza. `primary-dark` es un estado, no un segundo color.

**The Sand Is Material Rule.** La arena representa lo físico (papel, tarjeta, repisa, pupitre). No se usa para botones, texto ni estados. Una sección arena necesita un motivo: contiene el libro, la tarjeta o una escena.

**The One Highlight Rule.** Como máximo un bloque con fondo `primary` sólido por página (las franjas y tarjetas `primary-dark` son oscuras, no el bloque destacado). El footer no cuenta: es su propio color.

**The No-Gradient Rule.** Sin gradientes de color en fondos, botones ni tarjetas. Excepciones: un difuminado neutro para unir una fotografía con el fondo (`transparent → bg`), el grano de papel (ruido, no mezcla de color) y el halo radial `primary-light` al 20% detrás de la tarjeta PIN del CTA final, pedido expresamente en su brief.

**The AA Floor Rule.** Todo texto cumple 4.5:1 (3:1 en texto grande). Sobre `primary`, el texto secundario no baja de `white/85`. Sobre `footer`, no baja de `white/75` (los eyebrows del footer usan `white/60`, 6.29:1). `muted` no se usa sobre `shelf`: ahí va `ink`. Cualquier opacidad o par nuevo se verifica antes de usarse y se agrega a la tabla.

## Typography

**Familia:** Plus Jakarta Sans (400/500/600/700), cargada con `next/font/google` y expuesta como `--font-jakarta`.

> La variable de fuente se declara en `<html>`, no en `<body>`. Declararla en `<body>` deja a `html { font-sans }` sin resolver y el documento cae a un serif del sistema.

Fraunces ya no se carga: la portada ilustrada (`BookCover`) se sustituyó por fotos.

**Imagen Open Graph:** `ImageResponse` no puede usar `next/font`; lee los `.ttf` de Plus Jakarta Sans (400/600/700) de `src/assets/fonts/` (licencia `OFL.txt` incluida).

### Escala
- **h1** (`text-hero`): `clamp(2.5rem, 5vw, 4.5rem)`, peso 700. Uno solo por página.
- **h2** (`text-section`): `clamp(2rem, 3.5vw, 3rem)`, peso 600.
- **h3** (títulos de paso, de anotación y de lista): 1.125rem–1.25rem, peso 600.
- **body**: 1rem–1.125rem, peso 400, `line-height: 1.6`. Nunca menos de 16px en texto de lectura.
- **body-sm** (`text-body-sm`): 0.9375rem. Texto de apoyo, respuestas del acordeón y botón `lg` en móvil.
- **eyebrow** (`text-eyebrow`): 0.75rem, peso 600, mayúsculas, `letter-spacing: 0.12em`.
- **wordmark** (`text-wordmark`, `clamp(6rem, 18vw, 16rem)`): solo el `Diza` gigante del footer. El wordmark pequeño usa `tracking-wordmark` (`-0.03em`).

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
- Landmarks: `header` (banner), `main#contenido` (del hero a las preguntas frecuentes), el CTA final como `region` con nombre (`aria-labelledby`) y `footer` (contentinfo). El CTA final queda fuera de `main` porque comparte contenedor con el footer (ver "Footer (contrato)").
- Enlace "Saltar al contenido": primer elemento enfocable, visible solo con foco, por encima del header.
- **Dominio del sitio**: `SITE_URL` (`src/lib/constants.ts`) sale de la variable de entorno `NEXT_PUBLIC_SITE_URL` (ver `.env.example`; se lee al compilar y, si falta o no es una URL, vale `https://diza.com.mx`). Alimenta `metadataBase` (imágenes sociales, `og:url`, canónicas), el sitemap, `robots` y los datos estructurados. En `next dev` Next usa el origen del servidor local para `og:image` aunque `metadataBase` esté definido; en producción respeta la variable.

### Bloques de la página (orden final)

| # | Bloque | Ancla | Fondo | Composición |
| --- | --- | --- | --- | --- |
| 0 | Header | — | transparente arriba, píldora `surface` al hacer scroll | wordmark, navegación (desde `lg`: Cómo funciona, La diferencia, Alumnos → `/alumnos`, Maestros → `/maestros`, Preguntas), "Ya tengo cuenta", "Activar mi libro"; menú desplegable en móvil. Los enlaces a rutas usan `next/link`; los de ancla de la principal van como `/#ancla` (`<a>`), para que funcionen desde cualquier página. El enlace de la página actual lleva `aria-current="page"` y se pinta `primary`. El footer reutiliza la misma lista salvo «La diferencia» |
| 1 | Hero | — | `bg` | `min-h-svh` (cuenta el header), sin relleno inferior; `h1` + «Activar mi libro» (→ tutor) y, debajo, un enlace de texto discreto («¿Es usted maestro? Conozca Diza para su clase →», `muted`, → `/maestros`); `HeroScene`: la mano con el libro directo sobre el fondo, anclada al borde inferior (la manga toca la base), con burbujas del alumno («¿Qué es una metáfora?») y de Diza (con `Chip` «Pág. 34»), chip de materia y tarjeta con PIN flotando alrededor. Momentos empieza justo en la base |
| 2 | Momentos | `#momentos` | panel `sand` con `rounded-t-seam` que sube 48px sobre la base del hero | eyebrow «Para alumnos» + título, y tres tarjetas blancas `rounded-3xl`: chip de contexto con icono, la situación en voz del alumno y, al pie, la respuesta de Diza (burbuja `tint` con avatar «D», da una pista además de preguntar) tras tres puntitos. Desde `md` van en tres columnas; debajo, carrusel horizontal con `scroll-snap` (tarjeta al 85%, asoma la siguiente) y puntos que siguen el scroll y saltan al tocarlos |
| 3 | Cómo funciona | `#como-funciona` | `surface` a todo el ancho | `ConversationDemo`: foto de celular (`public/images/como-funciona/phone_frame.webp`) con la conversación (siete mensajes; el hilo se desplaza solo) y tres pasos alrededor; se activan en secuencia y el tercero con el último mensaje |
| 4 | La diferencia | `#diferencia` | `bg` | título «En el examen no hay IA.» y subtítulo sobre el examen y la memoria, centrados y dos tarjetas con la misma pregunta («¿Qué es un texto argumentativo?»): «Otras IA» (blanca, atenuada, definición completa que se escribe rápido y se desvanece) y «Diza» (`primary-dark`, escala 1.02 desde `md`, respuesta con pregunta y chip «p. 41», ✓ escalonados; el tercer punto, «Tu libro es la fuente principal; si hace falta, complementa con otras fuentes», ocupa dos líneas y el subgrid mantiene alineadas las filas; el cuarto, «Te pide comprobarlo en tu libro»). Comparten seis filas por subgrid, así que cada punto queda alineado. En móvil van apiladas y sin escala extra |
| 5 | Elige tu camino | `#elige-tu-camino` | `sand` a todo el ancho (contiene el libro y el escritorio) | título «Sigue por aquí» y dos tarjetas `surface` con borde `line`, `rounded-3xl` y `shadow-card`, lado a lado desde `md` y apiladas debajo. Cada una es un solo enlace (`/alumnos`, `/maestros`): panel 4:3 arriba (el libro recortado sobre `tint`; la foto del escritorio a sangre), título («Activa tu libro» / «Soy maestro»), descripción y un botón circular `primary` con flecha. Hover: sube 4px, pasa a `shadow-card-hover` y la flecha avanza 4px; con movimiento reducido no se mueve nada. Imágenes decorativas (`alt=""`) |
| 6 | Privacidad | `#privacidad` | franja `primary-dark` a todo el ancho | franja breve y centrada: icono de ojo tachado (`primary-light`, sin caja), «Nadie lee tus conversaciones.» y «Ni tu maestro, ni tu escuela, ni otros alumnos.» a `white/70` (5.99:1) |
| 7 | Preguntas frecuentes | `#preguntas-frecuentes` | `bg` | una sola columna centrada (`max-w-3xl`): encabezado, acordeón de seis filas con separador fino (varias pueden estar abiertas a la vez) y la tarjeta `sand` «¿Otra duda?» con «Escríbenos» debajo |
| 8 | CTA final | `#activar` | `bg` (envoltorio) | bloque `primary-dark` `rounded-[2.5rem]` dentro del ancho del layout: título «Tu próxima duda ya tiene a quién preguntarle.», subtítulo, «Activar mi libro» y «Soy maestro» (→ `/maestros`) a la izquierda; `pin_card.webp` grande, rotada y flotando a la derecha (arriba y más chica en móvil). El envoltorio es la sección que destapa el footer |
| 9 | Footer | `#site-footer` | `footer` | wordmark gigante, enlaces de producto, contacto y legales; bajo la frase de marca, en `text-xs` `white/75`, «Contenido validado por la editorial, un equipo pedagógico, autores y maestros.» |

`ForStudents` (tres pasos con sus ilustraciones) vive ahora en `/alumnos`, donde es la cabecera de la página (ver «Páginas internas») y `ForTeachers` (el bento de maestros con su tarjeta de privacidad) se conserva, sin cambios, para `/maestros`, que todavía no existe (la landing solo enlaza a ella; las rutas viven en `ALUMNOS_PATH` y `MAESTROS_PATH`, `src/lib/constants.ts`).

### Páginas internas

Comparten con la principal el `PageShell` (`src/components/layout/page-shell.tsx`: enlace de salto, header, `main`, y el CTA final sobre el footer fijo) y todos los tokens. Cada una exporta su propia `metadata` (título, descripción, canónica, `openGraph` y `twitter` completos, porque Next no los fusiona con los del layout raíz) y repite `opengraph-image.tsx` para conservar la imagen social. El `h1` de una página interna puede ir un escalón por debajo de `text-hero` cuando el titular es largo (`clamp(2.25rem, 4.2vw, 3.5rem)`).

**`/alumnos`** (`src/app/alumnos/page.tsx`, texto en `src/content/alumnos.ts`; todo en tú). El hero de dos columnas con teléfono (`alumnos-hero.tsx`) ya no está en la página y queda sin uso; su teléfono pasó a «Así te responde Diza»:

| # | Bloque | Ancla | Fondo | Composición |
| --- | --- | --- | --- | --- |
| 1 | Activa tu libro en 3 pasos | `#alumnos` | franja `primary-dark` | abre la página (lleva el `h1`, y el navbar se dibuja sólido desde el primer píxel, `PageShell solidHeader`, porque el transparente se perdería sobre la franja): `h1` «Activa tu libro en 3 pasos» (`text-hero`), «Activar mi libro» (`onDark`) y, debajo, «¿Ya tienes cuenta? Entra aquí» (enlace subrayado); tres tarjetas con sus ilustraciones (el paso 3 muestra «¿Cómo empiezo un texto si no se me ocurre nada?» y la pista de Diza con chip «p. 15»); debajo, bajo un filete `white/10`, dos datos con icono (`IconBox` sobre `white/10`): el límite diario de preguntas y «¿Perdiste tu tarjeta o tu PIN? Escribe a contacto@diza.com con tu nombre, tu escuela y una foto de tu libro» (enlace `mailto:`). El FAQ repite esas dos redacciones |
| 2 | Privacidad | `#privacidad` | `bg` | tarjeta `primary-dark` `rounded-[2.5rem]` centrada (`max-w-3xl`): ojo tachado `primary-light`, «Lo que preguntas es tuyo.» y el párrafo a `white/70` |
| 3 | ¿De qué le puedes preguntar? | `#temas` | `sand` | título, subtítulo, seis chips grandes (`TopicChips`) en 1 / 2 / 3 columnas, cada uno con una duda en voz de alumno y su tema en letra chica, y debajo la respuesta corta de Diza (burbuja `tint` con chip de página); nota «Por ahora, Lengua y Comunicación…» |
| 4 | Así te responde Diza | `#ejemplo` | `surface` | el ejemplo del acento: texto a la izquierda y el teléfono con el chat de cuatro mensajes (`AlumnosChat`) a la derecha; en móvil el texto va arriba |
| 5 | Preguntas frecuentes | `#preguntas-frecuentes` | `bg` | el mismo `FAQ` en una columna con ocho preguntas de alumno (incluye «¿Diza usa solo mi libro?») (el contenido llega por la prop `content`); el JSON-LD `FAQPage` se arma con esas mismas entradas |
| 6 | CTA final | `#activar` | `bg` (envoltorio) | el bloque existente con un solo botón |

**`/maestros`** (`src/app/maestros/page.tsx`, texto en `src/content/maestros.ts`; todo en usted; todos los «Solicitar acceso» y «Quiero enterarme» abren el mismo `mailto:` prellenado, `TEACHER_ACCESS_MAILTO`):

| # | Bloque | Ancla | Fondo | Composición |
| --- | --- | --- | --- | --- |
| 1 | Hero | — | `bg` | dos columnas desde `lg`: eyebrow «Para maestros» + `Chip` «Acceso exclusivo», `h1` (mismo escalón reducido que `/alumnos`), descripción y «Solicitar acceso» + «Ver herramientas» (`#herramientas`); a la derecha `teacher_desk.webp` en `rounded-3xl` con tres `Chip` flotantes encima (entrada y flotado CSS como los del hero de la principal, sin parallax; en móvil solo dos). Decorativos (`aria-hidden`) |
| 2 | Respaldo | — | `bg` entre dos filetes `line` | franja discreta justo después del hero (`BackingStrip`): `BadgeCheck` `primary` y una línea `muted` «Contenido académico validado por la editorial, un equipo pedagógico, autores y maestros.» Sin título ni acción; una línea desde `md`, y en móvil el texto se envuelve junto al icono |
| 3 | Cómo trabaja con sus alumnos | `#como-trabaja` | `surface` | título centrado y tres columnas bajo un filete `line`: `IconBox` al lado del título, y una línea. Sin cajas |
| 4 | Herramientas | `#herramientas` | `bg` | `ForTeachers` tal cual (bento de 4 columnas), con el encabezado «Herramientas para su clase.» sin eyebrow (el hero ya dice «Para maestros» y repite el titular); la tarjeta grande dice «Acceso exclusivo para maestros. Un administrador le da de alta y le asigna sus libros.» |
| 5 | Plan de clase | `#plan-de-clase` | `sand` (contiene la hoja de papel) | `Chip` «Próximamente», título, subtítulo; a la izquierda cuatro pasos numerados con hilo entre los números, y a la derecha una hoja blanca (`ClassPlanDemo`) con los campos de un plan: título, encabezado «Unidad 1 · Gramática · Semana 1 · 3 horas», Aprendizaje esperado, Apertura (p. 3), Desarrollo (p. 4), Cierre, «Evaluación: diagnóstica · formativa · sumativa» y Evidencia, con barras grises donde va el contenido. Al entrar en pantalla los pasos se encienden en secuencia (y se quedan encendidos) y cada uno cambia la hoja: 1 escribe el plan base, 2 llena los datos del grupo (el encabezado y los tipos de evaluación se escriben), 3 reescribe «Desarrollo» (se resalta en `tint` con `ring` y aparece «Ajustado con Diza»), 4 sella «Word». Con movimiento reducido todo aparece terminado. En escritorio el grupo pasos + botón queda centrado respecto a la hoja; en móvil: pasos, hoja y botón |
| 6 | Cómo obtener acceso | `#como-obtener-acceso` | `surface` | título centrado, tres pasos en fila (apilados en móvil), cada uno con título y descripción («Escríbanos» con la dirección como enlace `mailto:`, «Le contactamos», «Empiece con guía»), un filete que une cada número con el siguiente y «Solicitar acceso» centrado (abre el correo prellenado con el asunto «Solicitud de acceso para maestros») |
| 7 | Preguntas frecuentes | `#preguntas-frecuentes` | `bg` | el mismo `FAQ` con ocho preguntas de maestro (incluye «¿Quién valida el contenido?» y «¿Hay capacitación?») y «Escríbanos» |
| 8 | CTA final | `#activar` | `bg` (envoltorio) | el bloque existente: «Prepare su próxima clase con Diza.», la nota de acceso (`forTeachers.accessNote`) y un solo botón |

Los anclajes viven en `SECTION_IDS` (`src/lib/constants.ts`) y los textos en `src/content/landing.ts`, incluidos los `aria-label` (`a11y`) y los textos de metadata e imagen Open Graph (`seo`).

## Elevation & Depth

Sombras neutras y muy suaves, derivadas de `ink`. Nunca tintadas de petróleo ni duras.

- **shadow-card**: `0 1px 2px rgb(30 43 51 / 0.04), 0 8px 24px rgb(30 43 51 / 0.05)`.
- **shadow-card-hover**: `0 2px 4px rgb(30 43 51 / 0.05), 0 14px 34px rgb(30 43 51 / 0.09)`. La usan las tarjetas de «Elige tu camino» al pasar el cursor.
- **drop-shadow-object**: `0 10px 18px rgb(30 43 51 / 0.18)`, para objetos recortados (libro, tarjeta, celular) apoyados en una escena.
- **drop-shadow-object-soft**: `0 18px 28px rgb(30 43 51 / 0.14)`, para la foto grande del libro en la mano del hero, que flota en lugar de apoyarse.

**The Hairline Rule.** La definición de una superficie viene del borde de 1px, no de la sombra.

## Components

### Base (`src/components/ui`)

- **Button** — pastilla completa; `next/link` si recibe un `href` de ruta (`/…`), `<a>` para anclas, `mailto:` y URLs externas, `<button>` si no recibe `href`.
  - `primary`: fondo `primary`, texto blanco, hover `primary-dark`.
  - `secondary`: fondo `surface`, borde `line`, texto `ink`, hover `tint`.
  - `link`: solo texto `primary`, hover `primary-dark`. Para la acción secundaria junto a un botón ("Escríbenos" en Preguntas frecuentes).
  - `onDark` y `outlineOnDark`: solo para la franja `primary-dark`. Sólido blanco con texto `primary-dark` (hover `tint`) y contorno `white/30` con texto blanco (hover `white/10`); el anillo de foco es blanco.
  - Tamaños: `sm` 44px (nav), `lg` 48px (CTA). `active:scale-[0.97]` y anillo de foco `primary`.
  - `ButtonArrow`: flecha final que avanza 2px en hover. Va solo en el CTA principal de una sección.
- **IconBox** — cuadro de 44px, `rounded-xl`, fondo `tint`, icono Lucide `primary` con `strokeWidth 1.75`. Único tratamiento de icono.
- **Chip** — pastilla `tint` con texto `primary` e icono opcional. Con el icono de libro y "Pág. N" es el motivo de marca: resume que toda respuesta se ancla a una página. También marca «Acceso exclusivo» (hero de `/maestros`) y «Próximamente» (plan de clase).
- **Eyebrow** — etiqueta en mayúsculas sobre un título.
- **Accordion** (propio, con Motion) — filas sin caja con separador `line`; botón real con `aria-expanded` y `aria-controls`, panel `region` siempre en el DOM y `inert` al cerrar, varias preguntas abiertas a la vez, flechas / Inicio / Fin entre preguntas. La altura se anima a `auto` (300ms al abrir, 220ms al cerrar) y el `+` gira 45° hasta ser `×`.
- **Container / Section** (`src/components/layout`).

No existe un componente `Card`: la página no se apoya en tarjetas.

### Derivados del producto (`src/components/product`)

Se construyen en código, con tokens, a partir de lo que el alumno y el maestro ven de verdad. Su contenido es ilustrativo y no nombra libros reales.

- **Ilustraciones de Para alumnos** (`student-step-visuals.tsx`) — tres, sobre un panel `sand` de 224px (escritorio): `BookPinVisual` (foto `public/images/alumnos/book_pin.webp`: entra con desplazamiento y escala 0.96→1, sin flotar), `LoginFormVisual` (mini formulario que escribe solo el correo y luego el PIN y marca el botón) y `ChatExchangeVisual` (pregunta del alumno, puntitos, respuesta de Diza y chip de página). Cada una se reproduce una vez al entrar en pantalla y, con movimiento reducido, se dibuja terminada.
- **FinalCta** (`src/components/sections/final-cta.tsx`) — recibe su texto y botones por la prop `content` (`FinalCtaContent`: título, subtítulo opcional, botón principal y secundario opcional); cada página pasa el suyo; el bloque `primary-dark` contiene el entrado (fundido + escala 0.98→1), el parallax de la tarjeta (±10px, solo desde `md`) y su flotado en bucle (±6px, ±1.5°, CSS); cada efecto va en su propio envoltorio y con movimiento reducido todo queda estático.
- **ComparisonCards** (`comparison-cards.tsx`) — «Otras IA» y «Diza». «Otras IA» se reproduce primero (respuesta tecleada con `setInterval` y cola desvanecida con máscara); «Diza» entra unos 2s después en escritorio (al llegar, en móvil) con puntitos, respuesta, chip y ✓ escalonados. La escala 1.02 usa la propiedad `scale` de CSS, que se compone con el `transform` de la entrada.
- **PhoneChat** (`phone-chat.tsx`) — el teléfono con el chat detrás del marco, compartido por «Cómo funciona» y el hero de `/alumnos`. `usePhoneChatPlayback(script)` reproduce el guion una vez al entrar en pantalla (y devuelve cuántos turnos van, para que quien lo use encienda otras cosas); `PhoneChat` lo dibuja y recibe el ancho por `className`. El chip de página de un mensaje es `pageChip` del turno.
- **ClassPlanDemo** (`class-plan-demo.tsx`) — los cuatro pasos y la hoja del plan de clase de `/maestros`. Una sola reproducción con `useOneShot`: los pasos se encienden a 0.6, 2.0, 3.4 y 5.2s tras entrar en pantalla; el color del paso (`muted` → `ink`) y del número (blanco con borde → `primary`) cambia en 300ms, y la hoja reacciona con barras que se «escriben» (`clip-path`) o un fundido con escala desde 0.95.
- **TopicChips** (`topic-chips.tsx`) — dudas de alumno como botones de dos estados (`aria-pressed`, siempre uno activo, el primero por defecto; la duda en `text-base` semibold y su tema en `text-xs`) y, debajo, la respuesta de Diza (`DizaMessage` + `Chip` de página) en una región `aria-live="polite"`: sale y entra con un fundido de 100/200ms (sin movimiento) y el hueco tiene alto mínimo para que la página no salte.
- **DizaMessage** y **TypingDots** (`diza-message.tsx`) — el mensaje de Diza de las ilustraciones pequeñas (burbuja `tint` con el avatar «D» al pie) y sus tres puntitos. Los usan Para alumnos, La diferencia y Momentos; el chat grande de Cómo funciona dimensiona todo en `cqw` y conserva el suyo.
- **MomentsCarousel** (`moments-carousel.tsx`) — las tres tarjetas de Momentos. Cada una, al entrar en pantalla, espera, muestra los puntitos y luego la burbuja (se escalonan 350ms entre tarjetas); el espacio de la burbuja está reservado y la tarjeta no cambia de alto. El indicador de puntos solo existe bajo `md`.
- **DocSheet** (`teacher-doc-sheets.tsx`) — mini hoja blanca con barras grises y una etiqueta (actividad, cuestionario con casillas, planeación con bloques); al entrar en pantalla las barras se «escriben» de izquierda a derecha con `clip-path`.
- **ExportFileTiles** y **PrivacyList** — los dos archivos (PDF y Word) que caen con un rebote leve, y los tres «Ni…» que aparecen uno por uno con su ojo tachado. Ambos y `DocSheet` usan `useOneShot` (`src/hooks`): se reproducen una vez y, con movimiento reducido, se dibujan terminados.
- **HeroScene** (`src/components/sections/hero-scene.tsx`) — el visual del hero. Usa las fotos `public/images/hero/hero_hand_book.webp` (608×1309) y `pin_card.webp` (fondo transparente, ya inclinada ~12° en el archivo) con `next/image`; el libro lleva `preload` y la tarjeta carga diferida. Todo se posiciona en porcentajes de la mano, que mide 78% del alto del hero en escritorio (máx. 54rem), de modo que el libro arranca a la altura del eyebrow y 68svh (mín. 28rem) debajo de `lg`. Las burbujas son `surface` con borde `line`, `rounded-2xl` y `shadow-card`. Debajo de `md` (móvil) las dos burbujas quedan a los lados del libro (máx. 58vw, texto de 14px, sin tapar los dedos) y no hay chip de materia ni tarjeta con PIN.
- **ConversationDemo** (`src/components/sections`) — «Cómo funciona»: el chat, con el estilo de la plataforma (encabezado con flecha, título, íconos e avatar; chip de unidad; burbujas `tint` de Diza con avatar cuadrado "D" y burbujas `ink` del alumno; campo con botón de enviar), va detrás del marco (posicionado en % del contenedor) y su tipografía y espacios están en `cqw` del ancho del celular (320px desde `md`, 260px en móvil; texto mínimo de 11px). Se reproduce una sola vez al entrar en pantalla: el celular entra con fundido, los mensajes salen cada ~0.7s (con puntitos antes de cada respuesta de Diza) y cada tarjeta de paso pasa de opacidad 0.45 a 1 con borde `primary` cuando aparece su mensaje. Las posiciones verticales de las tarjetas (`STEP_LAYOUT`) se miden sobre el chat ya terminado: hay que recalcularlas si cambian el texto o la escala tipográfica. Con siete mensajes el hilo no cabe en ningún ancho: se desplaza solo para seguir el mensaje más nuevo (encabezado, chip y campo quedan fijos), y la tarjeta del paso 3 se enciende con el último. Con movimiento reducido todo aparece de inmediato.

### Otros

- **Reveal / Stagger / RevealItem** (`src/components/motion`) — ver Motion. `Stagger` y `RevealItem` aceptan `div`, `ol`, `ul` y `li`.
- **JsonLd** (`src/components/json-ld.tsx`) — datos estructurados `Organization` y `FAQPage`; el segundo se genera desde `faq.entries`, así que la página y el JSON-LD no pueden divergir.

### Huecos de imagen

Donde falta una imagen real, la página muestra un sustituto dibujado en código (misma proporción, mismos tokens) y el hueco se registra aquí con su contenido, proporción, texto alternativo y un prompt sugerido para Recraft. Un bloque punteado visible no se usa: en el tamaño de estos objetos no caben el alt ni el prompt, y rompería la escena de la repisa.

Al llegar la imagen real: se exporta con fondo removido (PNG o WebP con transparencia), se coloca en `public/images/` y reemplaza al sustituto con `next/image`, `alt` de la tabla y `sizes` ajustado al ancho pintado.

| Hueco | Dónde va | Proporción | Sustituto actual | Texto alternativo | Prompt sugerido para Recraft |
| --- | --- | --- | --- | --- | --- |

La foto de la tarjeta debe ser la tarjeta verdadera en cuanto exista: el alumno tiene que reconocerla. El prompt sirve solo como imagen provisional.

## Footer (contrato)

El comportamiento del footer no se cambia sin aprobación explícita.

- `sticky`, `z-0`. La sección anterior (hoy `FinalCta`, `#activar`) lleva `relative z-10`, fondo opaco `bg` y esquinas inferiores `rounded-b-seam`, y lo destapa al hacer scroll. Si esa sección cambia, la nueva hereda esas clases y el efecto queda igual.
- El CTA final y el footer comparten un contenedor `relative` propio en `page.tsx`. Ese contenedor limita el tramo en el que el footer queda fijo: no se quita ni se amplía, y el footer no entra en `main`. Si el contenedor abarcara toda la página, `use-footer-in-view` vería siempre el footer y el navbar no aparecería.
- Mientras cabe en pantalla, queda fijo por su borde inferior (`bottom: 0`). Si es más alto que la pantalla (móviles bajos), queda fijo por su borde superior para que el wordmark se destape primero y el resto se recorra después: `bottom: min(0px, calc(100dvh - var(--footer-height)))`. `FooterHeightObserver` (cliente, `ResizeObserver`) publica `--footer-height`; sin JavaScript vale 0 y el footer se comporta como `bottom-0`. Aprobado el 2026-11-11 (opción B).
- Conserva el wordmark gigante `Diza` (`text-wordmark`, `white/8`, decorativo) y el grano de papel (`paper-grain`).
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
- **Scroll al cambiar de ruta**: `globals.css` pone `scroll-behavior: smooth` en `html` y el layout raíz lleva `data-scroll-behavior="smooth"`. Next 16 ya no apaga el scroll suave durante el cambio de ruta por su cuenta: sin ese atributo, sus llamadas a `scrollIntoView` (una por cada bloque de la página, del último al primero) arrancaban un scroll suave hacia el último (el CTA y el footer) que la llamada al primero no cancelaba, y la página nueva abría hasta el fondo. Con el atributo Next fuerza scroll instantáneo solo mientras dura la navegación y los anclas (`#…`, `/#…`) siguen siendo suaves.
- **«Atrás» y «adelante»**: el navegador restaura la posición guardada con el mismo `scroll-behavior: smooth` de `html`, así que se veía la página recorrerse desde arriba. `InstantHistoryScroll` (`src/components/layout/instant-history-scroll.tsx`, en el layout raíz) pone `scroll-behavior: auto` durante 1.2s en cada `popstate`, de modo que la restauración es instantánea y exacta; un clic en un ancla de la misma página también dispara `popstate`, así que ese clic se reconoce antes y se ignora (los anclas siguen siendo suaves). Los enlaces internos del footer usan `next/link` (antes recargaban la página entera).
- **Anclaje de scroll**: un texto que se «escribe» no debe poder ser el ancla del navegador. En «Otras IA» la respuesta se reparte entre un `span` escrito y otro transparente; al moverse el corte, el navegador elegía ese texto como ancla y la página se desplazaba sola unos 90px al leerla. El contenedor de esa respuesta lleva `overflow-anchor: none`. Si se agrega otra animación que reparta texto así, hay que hacer lo mismo.
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
