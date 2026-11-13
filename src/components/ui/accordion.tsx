"use client"

import { useId, useRef, useState, type KeyboardEvent } from "react"
import { motion, useReducedMotion } from "motion/react"
import { Plus } from "lucide-react"
import { EASE_OUT_STRONG } from "@/components/motion/easing"
import { RevealItem, Stagger } from "@/components/motion/reveal"
import { Button, ButtonArrow } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type AccordionEntry = { question: string; answer: string; link?: { label: string; href: string } }

const OPEN_SECONDS = 0.3
/** Closing is quicker than opening: the user has already decided. */
const CLOSE_SECONDS = 0.22

/**
 * Any number of questions can be open at once. Each question is a real `<button>` with
 * `aria-expanded` and `aria-controls`; its answer is a labelled region that stays
 * in the DOM (so `aria-controls` always resolves) and is `inert` while closed.
 * Up / Down / Home / End move between the questions, Enter and Space toggle.
 * The panel animates `height` with Motion, to `auto`, so it never jumps. The
 * rows come in staggered when the list scrolls into view.
 */
function Accordion({ entries, className }: { entries: readonly AccordionEntry[]; className?: string }) {
  const baseId = useId()
  const prefersReducedMotion = useReducedMotion()
  const [openIndexes, setOpenIndexes] = useState<ReadonlySet<number>>(() => new Set())
  const triggers = useRef<(HTMLButtonElement | null)[]>([])

  function toggle(index: number) {
    setOpenIndexes((current) => {
      const next = new Set(current)
      if (!next.delete(index)) next.add(index)
      return next
    })
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = entries.length - 1
    const target =
      event.key === "ArrowDown"
        ? (index + 1) % entries.length
        : event.key === "ArrowUp"
          ? (index - 1 + entries.length) % entries.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null

    if (target === null) return
    event.preventDefault()
    triggers.current[target]?.focus()
  }

  return (
    <Stagger className={cn("border-t border-line", className)}>
      {entries.map((entry, index) => {
        const isOpen = openIndexes.has(index)
        const triggerId = `${baseId}-trigger-${index}`
        const panelId = `${baseId}-panel-${index}`

        return (
          <RevealItem key={entry.question} className="border-b border-line">
            <h3 className="text-base">
              <button
                ref={(node) => {
                  triggers.current[index] = node
                }}
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className="group flex min-h-16 w-full cursor-pointer items-center justify-between gap-6 rounded-lg py-5 text-left outline-none transition-colors duration-200 ease-out-strong hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="text-body-sm font-semibold text-ink transition-colors duration-200 group-hover:text-primary sm:text-lg">
                  {entry.question}
                </span>
                <Plus
                  className={cn(
                    "size-5 shrink-0 text-primary transition-transform duration-250 ease-out-strong motion-reduce:transition-none",
                    isOpen && "rotate-45"
                  )}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              inert={!isOpen}
              initial={false}
              animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : isOpen ? OPEN_SECONDS : CLOSE_SECONDS,
                ease: EASE_OUT_STRONG,
              }}
              className="overflow-hidden"
            >
              <div className="pb-6 pr-10">
                <p className="max-w-prose text-body-sm leading-relaxed text-pretty text-muted sm:text-base">
                  {entry.answer}
                </p>
                {entry.link ? (
                  <Button href={entry.link.href} variant="link" size="sm" className="-mb-2 mt-1 px-0">
                    {entry.link.label}
                    <ButtonArrow />
                  </Button>
                ) : null}
              </div>
            </motion.div>
          </RevealItem>
        )
      })}
    </Stagger>
  )
}

export { Accordion }
