import type { ReactNode } from "react"

/** Sand panel with a shelf strip at the bottom; children rest on the shelf. */
function ShelfScene({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-panel bg-sand">
      <div className="flex flex-col items-center justify-end px-6 pt-8 sm:px-10 sm:pt-12">
        {children}
      </div>
      <div className="h-10 border-t border-sand-line bg-shelf sm:h-12" />
    </div>
  )
}

export { ShelfScene }
