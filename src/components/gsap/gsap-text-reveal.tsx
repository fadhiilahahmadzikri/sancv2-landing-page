"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"

import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

export interface GsapTextRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"
  mode?: "words" | "chars"
  stagger?: number
  duration?: number
  delay?: number
  start?: string
  ease?: string
  once?: boolean
  className?: string
  innerClassName?: string
}

export function GsapTextReveal({
  text,
  as: Component = "div",
  mode = "words",
  stagger = 0.04,
  duration = 0.85,
  delay = 0,
  start = "top 88%",
  ease = "power3.out",
  once = true,
  className,
  innerClassName,
  ...props
}: GsapTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      const targets = containerRef.current.querySelectorAll(".gsap-reveal-item")
      if (!targets.length) return

      gsap.fromTo(
        targets,
        {
          y: "115%",
          opacity: 0,
          rotateX: -15,
        },
        {
          y: "0%",
          opacity: 1,
          rotateX: 0,
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

  const renderContent = () => {
    if (mode === "chars") {
      const words = text.split(" ")
      return words.map((word, wordIdx) => (
        <span
          key={`word-${wordIdx}`}
          className="mr-[0.28em] inline-block whitespace-nowrap"
        >
          {Array.from(word).map((char, charIdx) => (
            <span
              key={`char-${wordIdx}-${charIdx}`}
              className="inline-block overflow-hidden align-top"
            >
              <span
                className={cn(
                  "gsap-reveal-item inline-block will-change-transform",
                  innerClassName
                )}
              >
                {char}
              </span>
            </span>
          ))}
        </span>
      ))
    }

    // Default "words" mode
    const words = text.split(" ")
    return words.map((word, idx) => (
      <span
        key={`word-${idx}`}
        className="mr-[0.25em] inline-block overflow-hidden align-top last:mr-0"
      >
        <span
          className={cn(
            "gsap-reveal-item inline-block will-change-transform",
            innerClassName
          )}
        >
          {word}
        </span>
      </span>
    ))
  }

  return (
    <Component
      ref={containerRef}
      className={cn("perspective-[800px]", className)}
      {...props}
    >
      {renderContent()}
    </Component>
  )
}
