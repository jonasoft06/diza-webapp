import type { ComponentProps } from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type ChipProps = ComponentProps<"span"> & {
  icon?: LucideIcon
}

function Chip({ icon: Icon, className, children, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-tint px-2.5 py-1 text-xs font-semibold text-primary",
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
