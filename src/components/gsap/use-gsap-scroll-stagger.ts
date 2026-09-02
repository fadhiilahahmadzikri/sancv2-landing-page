"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"

import { gsap } from "@/lib/gsap"

export interface UseGsapScrollStaggerOptions {
  selector?: string
  stagger?: number
  duration?: number
  delay?: number
  y?: number | string
  scale?: number
  start?: string
  ease?: string
  once?: boolean
}

export function useGsapScrollStagger<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapScrollStaggerOptions = {}
) {
  const containerRef = useRef<T>(null)
  const {
    selector = ".gsap-stagger-item",
    stagger = 0.06,
    duration = 0.8,
    delay = 0,
    y = 40,
    scale = 0.95,
    start = "top 85%",
    ease = "power3.out",
    once = true,
  } = options

  useGSAP(
    () => {
      if (!containerRef.current) return

      const targets = containerRef.current.querySelectorAll(selector)
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

  return containerRef
}
