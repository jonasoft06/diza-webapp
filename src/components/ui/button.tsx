import type { ComponentProps } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/btn inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full font-sans font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none active:scale-[0.97] active:duration-100 motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-dark",
        secondary:
          "border border-line bg-surface text-ink hover:border-ink/20 hover:bg-tint",
        link: "text-primary hover:text-primary-dark",
      },
      size: {
        sm: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-[0.9375rem] sm:px-8 sm:text-base",
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

/** Renders an `<a>` when given `href`, otherwise a `<button>`. */
function Button({ className, variant, size, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (props.href !== undefined) {
    return <a className={classes} {...(props as ComponentProps<"a">)} />
  }

  const { type = "button", ...buttonProps } = props as ComponentProps<"button">
  return <button type={type} className={classes} {...buttonProps} />
}

export { Button, buttonVariants }
