import { Fragment } from "react"

/** Renders `**word**` as bold; everything else stays plain text. */
function RichText({ value }: { value: string }) {
  return value.split("**").map((part, index) => (
    <Fragment key={index}>{index % 2 === 1 ? <strong className="font-semibold">{part}</strong> : part}</Fragment>
  ))
}

export { RichText }
