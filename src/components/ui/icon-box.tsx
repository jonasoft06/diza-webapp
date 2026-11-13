import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

/** 44px rounded square holding an outline icon — the one icon treatment. */
function IconBox({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl bg-tint text-primary", className)}
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  )
}

export { IconBox }
