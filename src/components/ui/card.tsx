import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva("rounded-3xl border", {
  variants: {
    variant: {
      // Neutral surface card: white, hairline border, very soft shadow.
      surface: "border-line bg-surface shadow-card",
      // Flat panel without elevation, for nested or tinted blocks.
      flat: "border-line bg-surface",
      // The one highlighted block per page.
      primary: "border-transparent bg-primary text-white",
    },
    interactive: {
      true: "transition-[box-shadow,transform,border-color] duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover motion-reduce:hover:translate-y-0",
      false: "",
    },
  },
  defaultVariants: {
    variant: "surface",
    interactive: false,
  },
})

function Card({
  className,
  variant,
  interactive,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, interactive, className }))}
      {...props}
    />
  )
}

export { Card, cardVariants }
