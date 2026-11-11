import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Page-wide measure. Every section aligns to this width. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl", className)} {...props} />;
}

export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("bg-bg px-4 py-20 sm:px-6 lg:px-8 lg:py-24", className)} {...props} />;
}
