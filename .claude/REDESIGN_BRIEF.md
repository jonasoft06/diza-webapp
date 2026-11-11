# Brief de rediseño — landing DIZA "Petróleo + arena"

Para subagentes. Lee esto y `DESIGN.md`; no cargues skills. Trabaja solo en los archivos que se te asignan.

## Producto (hechos; no agregues otros)
- Diza: tutor académico con IA para bachillerato mexicano, anclado a un libro físico. No lo reemplaza, lo respalda.
- Guía con preguntas, no da respuestas. Cada respuesta cita la página del libro.
- Alumno: gratis, incluido en el libro. Activa con el PIN de una tarjeta impresa aparte. Entra con correo institucional.
- Maestro: en beta; el administrador lo da de alta y le asigna libros. Genera actividades, cuestionarios y planeación por unidad; exporta a PDF/Word.
- Nadie lee las conversaciones. Hay límites diarios de uso. No hay reporte por alumno.
- Se nombra "tutor académico con IA" o "Diza". Sin género: nunca "la tutora".
- CTA del alumno: "Activar mi libro" (`ACTIVATE_URL`). CTA del maestro: "Solicitar acceso" (`mailto:` armado en `constants.ts`). Las URLs son constantes con TODO: no las cambies.
- Prohibido inventar testimonios, cifras, escuelas o nombres de libros.

## Stack y convenciones
- Next 16 (con cambios incompatibles): antes de usar una API de Next, lee su guía en `node_modules/next/dist/docs/`. Tailwind v4 con tokens en `src/app/globals.css`.
- Todo el texto vive en `src/content/landing.ts`. Código en inglés, textos en español de México (alumno de tú, maestro de usted).
- Reutiliza `src/components/ui` antes de crear algo. No instales dependencias.
- Solo tokens: ningún hex ni color arbitrario en componentes.
- No leas `node_modules` (salvo la guía de Next), `.next`, `.agents`, `.codex`, `.impeccable`, lockfiles.

## Diseño y accesibilidad
- Mobile-first: estilos base para 360 px, se agrega complejidad con `sm`/`md`/`lg`. Sin scroll horizontal de 360 a 1440.
- Un solo `h1` (hero). Cada sección: `<section>` con `h2`; tarjetas con `h3`. Landmarks correctos.
- Contraste AA (4.5:1 texto, 3:1 texto grande). Pares permitidos en `DESIGN.md`; no uses `muted` sobre `shelf`.
- Objetivos táctiles ≥ 44×44 px. Foco visible siempre. Nada depende de hover.
- `next/image` con `alt` útil, `sizes` correcto y dimensiones reservadas (sin layout shift). `priority` solo en la imagen del primer viewport.
- Petróleo es el único color de acción. Arena es material (superficies y escenas), nunca texto ni botón. Sin gradientes de color.
- No apoyes la página en rejillas de tarjetas idénticas: alterna composición.
- Hueco de imagen: bloque `sand-2` con borde punteado `sand-line` que muestra contenido, proporción, alt y prompt de Recraft; sus datos van en `landing.ts`.

## Animación (solo `motion/react` o CSS)
- Cada animación tiene un porqué (explicar, dar feedback, orientar). Si no lo tiene, no va.
- Interfaz < 300 ms: press 100–160 ms, hover 200 ms, acordeón/menú ≤ 250 ms. Solo la animación explicativa de marketing puede durar más.
- Entradas y salidas con `ease-out` fuerte (`--ease-out-strong`); nunca `ease-in`. Movimiento en pantalla: `ease-in-out`.
- Anima solo `transform` y `opacity`. En Motion usa la cadena completa (`transform: "translateY(16px)"`), no `x`/`y`/`scale`. Nunca `transition: all` ni `scale(0)`.
- Revelado al scroll con `Reveal`/`Stagger` existentes, `once: true`, stagger 30–80 ms.
- Ligado al scroll: `useScroll`/`useTransform` sobre `transform`/`opacity`, o CSS. Sin listeners de scroll propios.
- Hover con movimiento solo bajo `@media (hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion`: se quita el movimiento, se conservan opacidad y color. El contenido debe verse completo sin animación.
- Botones: `active:scale-[0.97]`.

## Intocable
- Footer: `sticky bottom-0`, wordmark gigante, grano de papel, y la sección anterior (z-index mayor, esquinas redondeadas) que lo destapa. `use-footer-in-view` sigue ocultando el navbar. No lo modifiques salvo que tu tarea lo diga.

## Código limpio
- Sin nombres genéricos (`data`, `result`, `temp`, `item`, `handleData`). Nombra por lo que es.
- Comenta el porqué, nunca el qué. Sin comentarios que repiten el código.
- Sin abstracciones, props ni componentes "por si acaso". Sin código muerto ni imports sin uso.
- Server Components por defecto; `"use client"` solo donde hay estado, efectos o Motion.

## Entrega
Al terminar: `npm run lint` sin errores y un reporte de máx. 15 líneas con archivos tocados, decisiones no obvias, huecos de imagen dejados y dudas. No hagas commit ni push.
