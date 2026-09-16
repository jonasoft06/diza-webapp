import { BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * The recurring brand motif: every answer is anchored to a page of the printed
 * book. Reused in the hero, the conversation mockup and the closing CTA.
 */
function PageChip({
  page = 42,
  tone = "tint",
  className,
}: {
  page?: number
  tone?: "tint" | "onTint"
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        tone === "tint" ? "bg-accent-tint text-accent" : "bg-surface text-accent",
        className
      )}
    >
      <BookOpen className="size-3.5" strokeWidth={2} aria-hidden="true" />
      Pág. {page}
    </span>
  )
}

export { PageChip }
