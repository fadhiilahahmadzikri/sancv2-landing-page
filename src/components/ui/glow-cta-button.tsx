"use client"

import React from "react"
import { ChevronRight } from "lucide-react"

export interface GlowCtaButtonProps {
  children: React.ReactNode
  href?: string
  target?: string
  rel?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  type?: "button" | "submit" | "reset"
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function GlowCtaButton({
  children,
  href,
  target,
  rel,
  onClick,
  type = "button",
  leadingIcon,
  trailingIcon = (
    <ChevronRight className="size-3.5 text-white/90 transition-transform duration-200 group-hover:translate-x-0.5" />
  ),
  className = "",
  style,
}: GlowCtaButtonProps) {
  const defaultStyle: React.CSSProperties = {
    backgroundColor: "rgba(168, 85, 247, 0.1)",
    backgroundImage:
      "linear-gradient(125deg, rgb(124, 58, 237), rgb(168, 85, 247), rgb(217, 70, 239), rgb(168, 85, 247), rgb(124, 58, 237))",
    border: "4.8px solid rgba(255, 255, 255, 0.08)",
    boxShadow:
      "rgba(168, 85, 247, 0.7) 0px 0px 24px 0px, rgba(168, 85, 247, 0.35) 0px 0px 56px 0px",
    ...style,
  }

  const commonClasses = `group relative inline-flex items-center gap-2 rounded-[10px] px-5 py-2 text-[13.5px] font-semibold text-white tracking-normal transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 select-none overflow-hidden cursor-pointer ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        onClick={onClick}
        className={commonClasses}
        style={defaultStyle}
      >
        {leadingIcon}
        <span className="font-semibold text-white">{children}</span>
        {trailingIcon}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
      style={defaultStyle}
    >
      {leadingIcon}
      <span className="font-semibold text-white">{children}</span>
      {trailingIcon}
    </button>
  )
}

export default GlowCtaButton
