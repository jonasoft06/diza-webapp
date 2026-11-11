import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

/** Small uppercase label above a heading. */
function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("text-eyebrow text-primary", className)} {...props} />
}

export { Eyebrow }
