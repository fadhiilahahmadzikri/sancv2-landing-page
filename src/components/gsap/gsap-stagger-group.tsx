"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"

import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

export interface GsapStaggerGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  itemSelector?: string
  stagger?: number
  duration?: number
  delay?: number
  y?: number | string
  scale?: number
  start?: string
  ease?: string
  once?: boolean
  className?: string
}

export function GsapStaggerGroup({
  children,
  itemSelector = "> *",
  stagger = 0.08,
  duration = 0.75,
  delay = 0,
  y = 35,
  scale = 0.96,
  start = "top 85%",
  ease = "power3.out",
  once = true,
  className,
  ...props
}: GsapStaggerGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      const targets =
        itemSelector === "> *"
          ? Array.from(containerRef.current.children)
          : containerRef.current.querySelectorAll(itemSelector)

      if (!targets.length) return

      gsap.fromTo(
        targets,
        {
          y,
          opacity: 0,
          scale,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
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

  return (
    <div ref={containerRef} className={cn(className)} {...props}>
      {children}
    </div>
  )
}
