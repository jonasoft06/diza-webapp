import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva("rounded-xl bg-white", {
  variants: {
    variant: {
      flat: "",
      raised: "shadow-[0_4px_16px_-2px_rgba(138,59,46,0.12)]",
    },
  },
  defaultVariants: {
    variant: "flat",
  },
})

function Card({
  className,
  variant,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Card, cardVariants }
