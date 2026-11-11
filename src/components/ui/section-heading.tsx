import type { ReactNode } from "react"
import { Eyebrow } from "@/components/ui/eyebrow"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
}

/** Centred eyebrow + title, shared by every section header. */
function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className={cn("text-section font-semibold text-ink", eyebrow && "mt-4")}>{title}</h2>
    </div>
  )
}

export { SectionHeading }
