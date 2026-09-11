import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export interface HeroProps {
  titlePrefix?: string
  titleEmphasis?: string
  description?: string
  ctaLabel?: string
  ctaCaption?: string
  chatBubbleText?: string
  bookLabel?: string
  pin?: string
  progressLabel?: string
  progressCaption?: string
}

export function Hero({
  titlePrefix = "La tutora que vive dentro de tu",
  titleEmphasis = "Libro",
  description = "Diza no te da las respuestas. Te hace las preguntas correctas hasta que encuentres tú mismo — siempre apoyada en las páginas del libro que ya tienes en las manos.",
  ctaLabel = "Activar mi libro",
  ctaCaption = "Con el PIN de tu tarjeta · incluido con tu libro, sin costo extra",
  chatBubbleText = "¡Hola! Soy Diza, ¿en qué página estás?",
  bookLabel = "Mi Libro",
  pin = "4821",
  progressLabel = "Página 42",
  progressCaption = "vas por buen camino",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-(--papel-landing) px-6 py-24 sm:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="font-heading text-5xl font-bold leading-tight text-(--tinta) sm:text-6xl md:text-[4rem]">
          {titlePrefix} <em className="text-(--vino)">{titleEmphasis}</em>
        </h1>

        <p className="mt-6 max-w-[600px] font-sans text-base text-(--tinta-secundaria) sm:text-lg">
          {description}
        </p>

        <Button variant="primary" size="lg" className="mt-8">
          {ctaLabel}
        </Button>

        <p className="mt-4 font-sans text-sm text-(--tinta-terciaria-texto)">
          {ctaCaption}
        </p>
      </div>

      {/* Chat bubble, top-right */}
      <div className="absolute right-8 top-10 hidden items-center gap-3 md:flex">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-(--vino) font-heading text-base font-bold text-white">
          D
        </div>
        <Card
          variant="raised"
          className="max-w-[220px] rounded-2xl px-4 py-2.5 text-left font-sans text-sm text-(--tinta)"
        >
          {chatBubbleText}
        </Card>
      </div>

      {/* Book spine + PIN card, bottom-left */}
      <div className="absolute bottom-10 left-8 hidden md:block">
        <div className="relative">
          <div
            className="flex h-56 w-20 items-center justify-center rounded-lg bg-(--vino) shadow-[0_4px_16px_-2px_rgba(138,59,46,0.12)]"
            style={{ writingMode: "vertical-rl" }}
          >
            <span className="font-heading text-lg font-semibold tracking-wide text-white">
              {bookLabel}
            </span>
          </div>

          <Card
            variant="raised"
            className="absolute -right-8 top-1/2 w-24 -translate-y-1/2 rotate-6 rounded-md border border-(--borde) px-3 py-2.5 text-center"
          >
            <p className="font-sans text-[0.65rem] font-medium uppercase tracking-wide text-(--tinta-terciaria-texto)">
              PIN
            </p>
            <p className="font-sans text-2xl font-bold text-(--tinta)">
              {pin}
            </p>
          </Card>
        </div>
      </div>

      {/* Progress card, bottom-right */}
      <Card
        variant="raised"
        className="absolute bottom-10 right-8 hidden rounded-xl border-t-2 border-(--dorado) px-5 py-3 md:block"
      >
        <p className="font-sans text-sm font-bold text-(--tinta)">
          {progressLabel}
        </p>
        <p className="font-sans text-xs italic text-(--tinta-terciaria-texto)">
          {progressCaption}
        </p>
      </Card>
    </section>
  )
}
