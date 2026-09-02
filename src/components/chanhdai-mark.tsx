import React from "react"

export function SanctrumMark({
  className = "size-6",
  showLabel = true,
  ...props
}: React.ComponentProps<"img"> & { showLabel?: boolean }) {
  return (
    <div className="flex items-center gap-2 font-bold tracking-tight text-foreground select-none">
      <img
        src="/logo.png"
        alt="Sanctrum"
        className={`size-6 shrink-0 object-contain ${className}`}
        {...props}
      />
      {showLabel && (
        <span className="text-[14px] font-bold tracking-tight text-foreground">
          Sanctrum
        </span>
      )}
    </div>
  )
}

export const ChanhDaiMark = SanctrumMark

export function getMarkSVG() {
  return `<img src="/logo.png" alt="Sanctrum" class="h-6 w-auto" />`
}
