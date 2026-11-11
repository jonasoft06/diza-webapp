import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Sand panel (`className` can swap the tone for nested use) with a shelf strip at the bottom; children rest on the shelf. */
function ShelfScene({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-panel bg-sand", className)}>
      <div className="flex flex-col items-center justify-end px-6 pt-8 sm:px-10 sm:pt-12">
        {children}
      </div>
      <div className="h-10 border-t border-sand-line bg-shelf sm:h-12" />
    </div>
  )
}

export { ShelfScene }
