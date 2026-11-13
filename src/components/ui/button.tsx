import type { ComponentProps } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn, isInternalRoute } from "@/lib/utils"

const buttonVariants = cva(
  "group/btn inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full font-sans font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform,scale] duration-200 ease-out-strong outline-none select-none active:scale-[0.97] active:duration-100 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-dark",
        secondary:
          "border border-line bg-surface text-ink hover:border-ink/20 hover:bg-tint",
        link: "text-primary hover:text-primary-dark",
        /** For dark bands (primary-dark): a light solid button and its outlined sibling. */
        onDark: "bg-white text-primary-dark hover:bg-tint focus-visible:outline-white",
        outlineOnDark:
          "border border-white/30 text-white hover:border-white/50 hover:bg-white/10 focus-visible:outline-white",
      },
      size: {
        sm: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-body-sm sm:px-8 sm:text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
)

type ButtonStyleProps = VariantProps<typeof buttonVariants>

type ButtonProps = ButtonStyleProps &
  (
    | ({ href: string } & Omit<ComponentProps<"a">, "href">)
    | ({ href?: undefined } & ComponentProps<"button">)
  )

function Button({ className, variant, size, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (props.href !== undefined) {
    // Routes of this site go through `Link` (client-side navigation); anchors, mailto: and external URLs stay plain.
    if (isInternalRoute(props.href)) {
      return <Link className={classes} {...(props as ComponentProps<"a">)} href={props.href} />
    }
    return <a className={classes} {...(props as ComponentProps<"a">)} />
  }

  const { type = "button", ...buttonProps } = props as ComponentProps<"button">
  return <button type={type} className={classes} {...buttonProps} />
}

/** Trailing arrow of a button; it nudges forward on hover through the button's `group/btn`. */
function ButtonArrow() {
  return (
    <ArrowRight
      className="size-4 transition-transform duration-200 ease-out-strong group-hover/btn:translate-x-0.5"
      strokeWidth={2.25}
      aria-hidden="true"
    />
  )
}

export { Button, ButtonArrow }
