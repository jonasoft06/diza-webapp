import type { ComponentProps } from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type ChipProps = ComponentProps<"span"> & {
  icon?: LucideIcon
  /** `tint` sits on white surfaces, `surface` sits on tinted ones. */
  tone?: "tint" | "surface"
}

function Chip({ icon: Icon, tone = "tint", className, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-accent",
        tone === "tint" ? "bg-accent-tint" : "bg-surface",
        className
      )}
      {...props}
    >
      {Icon ? <Icon className="size-3.5" strokeWidth={2} aria-hidden="true" /> : null}
      {children}
    </span>
  )
}

export { Chip }
