"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"

import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"

export interface GsapMagneticDockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  itemSelector?: string
  start?: string
  ease?: string
  once?: boolean
  className?: string
}

export function GsapMagneticDock({
  children,
  itemSelector = ".dock-card-item",
  start = "top 85%",
  ease = "power3.out",
  once = true,
  className,
  ...props
}: GsapMagneticDockProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      const cards = containerRef.current.querySelectorAll(itemSelector)
      if (!cards.length) return

      gsap.fromTo(
        cards,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
          rotateY: -10,
          transformPerspective: 800,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.9,
          stagger: 0.05,
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
    <div
      ref={containerRef}
      className={cn("perspective-[1200px]", className)}
      {...props}
    >
      {children}
    </div>
  )
}
