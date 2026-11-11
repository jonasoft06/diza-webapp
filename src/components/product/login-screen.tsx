import { Mail } from "lucide-react"
import { PhoneFrame } from "@/components/product/phone-frame"
import { PIN_DOTS } from "@/components/product/pin-card"
import { cn } from "@/lib/utils"

const FIELD_CLASSES =
  "flex items-center gap-1 rounded-md border border-line bg-surface p-1 md:gap-1.5 md:p-1.5"

/** Compact sign-in screen: institutional email, the PIN from the card, and the button. Text is drawn as bars. */
function LoginScreen() {
  return (
    <PhoneFrame compact>
      <div className="flex flex-1 flex-col justify-center gap-1.5 md:gap-2">
        <span className="text-center text-xs font-bold tracking-[-0.03em] text-primary md:text-sm">diza</span>
        <div className={FIELD_CLASSES}>
          <Mail className="size-2.5 shrink-0 text-primary md:size-3" strokeWidth={2} />
          <span className="h-1 flex-1 rounded-full bg-ink/20" />
        </div>
        <div className={cn(FIELD_CLASSES, "justify-center")}>
          {Array.from({ length: PIN_DOTS }, (_, position) => (
            <span key={position} className="size-1 rounded-full bg-ink md:size-1.5" />
          ))}
        </div>
        <span className="h-3 rounded-full bg-primary md:h-4" />
      </div>
    </PhoneFrame>
  )
}

export { LoginScreen }
