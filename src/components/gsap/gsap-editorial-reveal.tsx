"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"

import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

export interface GsapEditorialRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"
  stagger?: number
  duration?: number
  delay?: number
  start?: string
  ease?: string
  once?: boolean
  className?: string
  innerClassName?: string
}

export function GsapEditorialReveal({
  text,
  as: Component = "h2",
  stagger = 0.035,
  duration = 1.0,
  delay = 0.1,
  start = "top 82%",
  ease = "power4.out",
  once = true,
  className,
  innerClassName,
  ...props
}: GsapEditorialRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      const words = containerRef.current.querySelectorAll(".editorial-word")
      if (!words.length) return

      gsap.fromTo(
        words,
        {
          y: 48,
          opacity: 0,
          rotateX: 40,
          scale: 0.94,
          filter: "blur(8px)",
          transformOrigin: "50% 100% -20px",
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration,
          stagger,
          delay,
          ease,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      )
    },
    { scope: containerRef }
  )

  const words = text.split(" ")

  return (
    <Component
      ref={containerRef}
      className={cn("transform-gpu perspective-[1000px]", className)}
      {...props}
    >
      {words.map((word, idx) => (
        <span
          key={`word-${idx}`}
          className="mr-[0.25em] inline-block overflow-visible align-top last:mr-0"
        >
          <span
            className={cn(
              "editorial-word will-change-filter inline-block will-change-transform",
              innerClassName
            )}
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  )
}
