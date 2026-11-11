import { BookOpen } from "lucide-react"
import { PhoneFrame } from "@/components/product/phone-frame"
import { Chip } from "@/components/ui/chip"
import { PAGE_CHIP_LABEL } from "@/content/landing"

/** Compact chat screen: the student's question, Diza's reply and the page it cites. Text is drawn as bars. */
function ChatScreen() {
  return (
    <PhoneFrame compact>
      <div className="ml-auto flex w-3/4 flex-col gap-1 rounded-lg rounded-br-sm bg-primary p-1.5 md:p-2">
        <span className="h-1 rounded-full bg-white/80" />
        <span className="h-1 w-2/3 rounded-full bg-white/80" />
      </div>
      <div className="flex flex-col items-start gap-1 rounded-lg rounded-bl-sm border border-line bg-surface p-1 md:gap-1.5 md:p-2">
        <span className="h-1 w-full rounded-full bg-ink/20" />
        <span className="h-1 w-3/4 rounded-full bg-ink/20" />
        <Chip
          icon={BookOpen}
          className="gap-1 whitespace-nowrap px-1.5 py-0.5 text-[0.625rem] md:gap-1.5 md:px-2.5 md:py-1 md:text-xs"
        >
          {PAGE_CHIP_LABEL}
        </Chip>
      </div>
      <span className="mt-auto h-3 rounded-full border border-line bg-surface md:h-4" />
    </PhoneFrame>
  )
}

export { ChatScreen }
