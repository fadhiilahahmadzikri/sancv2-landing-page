"use client"

import React, { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"

import { gsap } from "@/lib/gsap"

export type Vec3 = [number, number, number]

const EYE_SPLIT = 15.46

export function spin(u: Vec3, v: Vec3, angle: number): [Vec3, Vec3] {
  const c = Math.cos(angle)
  const s = Math.sin(angle)
  return [
    [u[0] * c + v[0] * s, u[1] * c + v[1] * s, u[2] * c + v[2] * s],
    [v[0] * c - u[0] * s, v[1] * c - u[1] * s, v[2] * c - u[2] * s],
  ]
}

export function deg(d: number): number {
  return (d * Math.PI) / 180
}

export function clamp(v: number, min = 0, max = 1): number {
  return v < min ? min : v > max ? max : v
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export const loopNoise = (t: number, period: number, phase = 0): number => {
  const x = (t / period + phase) * Math.PI * 2
  return (
    (Math.sin(x) + 0.5 * Math.sin(x * 2.3) + 0.25 * Math.sin(x * 4.1)) / 1.75
  )
}

export function eyePoses(
  yaw: number,
  pitch: number,
  roll: number,
  scale = 100,
  split = EYE_SPLIT
) {
  let f: Vec3 = [0, 0, 1]
  let right: Vec3 = [1, 0, 0]
  let down: Vec3 = [0, 1, 0]

  ;[f, right] = spin(f, right, deg(yaw))
  ;[down, f] = spin(down, f, deg(pitch))
  ;[right, down] = spin(right, down, deg(roll))

  const build = (side: number) => {
    const [ef, er] = spin(f, right, deg(split * side))
    return {
      x: ef[0] * scale,
      y: ef[1] * scale,
      a: er[0],
      b: er[1],
      c: down[0],
      d: down[1],
      depth: ef[2],
    }
  }

  return [build(-1), build(1)]
}

const BLINK_DUR = 0.18

function blinkLid(t: number): number {
  const cycle = t % 3.6
  if (cycle < BLINK_DUR) {
    const k = cycle / BLINK_DUR
    return k < 0.45 ? 1 - k / 0.45 : (k - 0.45) / 0.55
  }
  return 1
}

// Authentic Bloub Capsule Eye Path from Repository
const BLOUB_CAPSULE_PATH =
  "M -9.3 -11.3 A 9.3 9.3 0 0 1 0 -20.6 L 0 -20.6 A 9.3 9.3 0 0 1 9.3 -11.3 L 9.3 11.3 A 9.3 9.3 0 0 1 0 20.6 L 0 20.6 A 9.3 9.3 0 0 1 -9.3 11.3 Z"

export function BloubFooterMascot({ size = 260 }: { size?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pointerRef = useRef<{ x: number; y: number } | null>(null)
  const aimRef = useRef<{ yaw: number; pitch: number }>({ yaw: 0, pitch: 26 })

  const [frame, setFrame] = useState({
    leftEye: {
      matrix: "matrix(0.86, -0.32, 0.45, 0.84, -23.09, -43.79)",
      depth: 1,
    },
    rightEye: {
      matrix: "matrix(0.62, -0.05, 0.45, 0.84, 24.11, -43.11)",
      depth: 1,
    },
    breathScale: 1,
    driftX: 0,
    driftY: 0,
  })

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height * 0.5

      const dx = clamp(
        (e.clientX - centerX) / (window.innerWidth * 0.45),
        -1,
        1
      )
      const rawDy = e.clientY - centerY
      const dy =
        rawDy < 0 ? clamp(rawDy / 320, -1, 0) : clamp(rawDy / 160, 0, 1)

      pointerRef.current = { x: dx, y: dy }
    }

    const onPointerLeave = () => {
      pointerRef.current = null
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    document.addEventListener("pointerleave", onPointerLeave)

    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("pointerleave", onPointerLeave)
    }
  }, [])

  useEffect(() => {
    let rafId = 0
    let lastTime = performance.now()
    let clock = 0

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.064)
      lastTime = now
      clock += dt

      const dYaw = loopNoise(clock, 11.3, 0.4) * 3
      const dPitch = loopNoise(clock, 9.1, 1.3) * 2.5
      const lid = blinkLid(clock)
      const lidS = 0.08 + 0.92 * clamp(lid)
      const breath = 1 + Math.sin((clock / 3.2) * Math.PI * 2) * 0.012

      if (pointerRef.current) {
        const targetYaw = pointerRef.current.x * 48
        const targetPitch =
          -pointerRef.current.y * (pointerRef.current.y < 0 ? 50 : 38)
        aimRef.current.yaw = lerp(aimRef.current.yaw, targetYaw, dt * 7.5)
        aimRef.current.pitch = lerp(aimRef.current.pitch, targetPitch, dt * 7.5)
      } else {
        aimRef.current.yaw = lerp(aimRef.current.yaw, 0, dt * 3)
        aimRef.current.pitch = lerp(aimRef.current.pitch, 18, dt * 3)
      }

      const totalYaw = aimRef.current.yaw + dYaw
      const totalPitch = aimRef.current.pitch + dPitch

      const poses = eyePoses(totalYaw, totalPitch, 0, 100, EYE_SPLIT)

      const buildRenderedEye = (pose: (typeof poses)[0]) => {
        const a = pose.a
        const b = pose.b * lidS
        const c = pose.c
        const d = pose.d * lidS
        const x = pose.x
        const y = pose.y

        return {
          matrix: `matrix(${a.toFixed(4)}, ${b.toFixed(4)}, ${c.toFixed(4)}, ${d.toFixed(4)}, ${x.toFixed(2)}, ${y.toFixed(2)})`,
          depth: pose.depth,
        }
      }

      setFrame({
        leftEye: buildRenderedEye(poses[0]),
        rightEye: buildRenderedEye(poses[1]),
        breathScale: breath,
        driftX: loopNoise(clock, 7.9, 1.9) * 1.5,
        driftY: loopNoise(clock, 5.3, 0.3) * 1.5,
      })

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none relative flex items-center justify-center select-none"
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="-125 -125 250 250"
        className="overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="bloub-circle-clip">
            <circle cx="0" cy="0" r="100" />
          </clipPath>
        </defs>
        <g
          transform={`scale(${frame.breathScale}) translate(${frame.driftX}, ${frame.driftY})`}
        >
          {/* Perfect Circle Body (Authentic Bloub 100-radius sphere) */}
          <circle
            cx="0"
            cy="0"
            r="100"
            className="fill-zinc-900 shadow-2xl transition-colors duration-300 dark:fill-white"
          />

          {/* Authentic Bloub Living Eyes clipped cleanly to circle */}
          <g
            clipPath="url(#bloub-circle-clip)"
            className="fill-white dark:fill-zinc-950"
          >
            {frame.leftEye.depth > 0.05 && (
              <path
                d={BLOUB_CAPSULE_PATH}
                transform={frame.leftEye.matrix}
                opacity={
                  frame.leftEye.depth > 0.1 ? 1 : frame.leftEye.depth * 10
                }
              />
            )}
            {frame.rightEye.depth > 0.05 && (
              <path
                d={BLOUB_CAPSULE_PATH}
                transform={frame.rightEye.matrix}
                opacity={
                  frame.rightEye.depth > 0.1 ? 1 : frame.rightEye.depth * 10
                }
              />
            )}
          </g>
        </g>
      </svg>
    </div>
  )
}

export function SiteFooterInteractiveLogotype() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      // 1. Giant Japanese Katakana Outline Smooth Rise
      const kanaSvg = containerRef.current.querySelector(".footer-kana-bg")
      if (kanaSvg) {
        gsap.fromTo(
          kanaSvg,
          {
            y: 50,
            opacity: 0,
            scale: 0.94,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // 2. Living Bloub Mascot Spring Pop-Up
      const bloubMascot = containerRef.current.querySelector(
        ".footer-bloub-mascot"
      )
      if (bloubMascot) {
        gsap.fromTo(
          bloubMascot,
          {
            scale: 0.3,
            opacity: 0,
            y: 80,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.0,
            delay: 0.15,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        )
      }
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      className="relative w-full border-t border-b border-line"
    >
      <div className="relative overflow-hidden">
        {/* Japanese Submerged Background Outline */}
        <div className="footer-kana-bg flex w-full translate-y-[38%] items-center justify-center">
          <svg
            className="container size-full overflow-hidden select-none"
            viewBox="0 0 1400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="250"
              textAnchor="middle"
              fontFamily="var(--font-mochiy), 'Hiragino Sans', 'Yu Gothic', 'Noto Sans JP', sans-serif"
              fontSize="270"
              fontWeight="900"
              letterSpacing="-0.035em"
              fill="none"
              stroke="currentColor"
              className="stroke-foreground/10 dark:stroke-foreground/15"
              strokeWidth="1.2"
            >
              サンクトラム
            </text>
          </svg>
        </div>

        {/* Living Submerged Bloub Mascot Centered Over the Japanese Text */}
        <div className="footer-bloub-mascot pointer-events-none absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-[50%]">
          <BloubFooterMascot size={260} />
        </div>
      </div>

      {/* Subtle Silhouette Center Glow Line */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[60%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.45) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
