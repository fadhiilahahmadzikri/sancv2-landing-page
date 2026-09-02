"use client"

import React, { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { ArrowUpRight, Terminal } from "lucide-react"
import { motion } from "motion/react"

import { gsap } from "@/lib/gsap"

interface MeshStackCard {
  id: string
  name: string
  rotation: number
  yOffset: number
  hoverY: number
  sizeClass: string
  isCenter?: boolean
  pixelIcon: React.ReactNode
}

const MESH_STACK_CARDS: MeshStackCard[] = [
  // 1. Retro PC Monitor (Left - Tilted Left)
  {
    id: "win32",
    name: "WIN32 C++",
    rotation: -12,
    yOffset: 60,
    hoverY: -15,
    sizeClass: "size-28 sm:size-36 md:size-44",
    pixelIcon: (
      <svg
        className="size-11 md:size-15"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        {/* Computer Screen Frame */}
        <rect x="2" y="2" width="12" height="9" fill="#fde68a" />
        <rect x="3" y="3" width="10" height="7" fill="#18181b" />
        {/* Glowing Screen Content */}
        <rect x="5" y="5" width="2" height="3" fill="#f59e0b" />
        <rect x="7" y="6" width="4" height="2" fill="#ef4444" />
        {/* Stand Base */}
        <rect x="6" y="11" width="4" height="2" fill="#d97706" />
        <rect x="4" y="13" width="8" height="1" fill="#b45309" />
      </svg>
    ),
  },

  // 2. Terminal Window `>S` (Left Mid - Large Tilted Right)
  {
    id: "terminal",
    name: "DAEMON CLI",
    rotation: 4,
    yOffset: 85,
    hoverY: -20,
    sizeClass: "size-40 sm:size-50 md:size-60",
    pixelIcon: (
      <svg className="size-16 md:size-22" viewBox="0 0 16 16" fill="none">
        {/* Outer Window Frame */}
        <rect
          x="1"
          y="1"
          width="14"
          height="14"
          rx="1"
          fill="#1e3a8a"
          stroke="#3b82f6"
          strokeWidth="1"
        />
        <rect x="2" y="2" width="12" height="3" fill="#f8fafc" />
        {/* Top Buttons */}
        <circle cx="4" cy="3.5" r="0.75" fill="#ef4444" />
        <circle cx="6" cy="3.5" r="0.75" fill="#f59e0b" />
        <circle cx="8" cy="3.5" r="0.75" fill="#10b981" />
        {/* Console Terminal > S */}
        <path
          d="M4 8l2 2-2 2"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8h3v2H8v2h3"
          stroke="#60a5fa"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  // 3. Fast Turbo Sneaker (Left Inner - Medium Tilted Left)
  {
    id: "turbo",
    name: "TURBO DSP",
    rotation: -14,
    yOffset: 65,
    hoverY: -15,
    sizeClass: "size-32 sm:size-40 md:size-48",
    pixelIcon: (
      <svg className="size-13 md:size-16" viewBox="0 0 16 16" fill="none">
        {/* Sneaker Upper */}
        <path d="M3 5h3v4l4 1v2H2V7l1-2z" fill="#0284c7" />
        <rect x="6" y="6" width="3" height="3" fill="#38bdf8" />
        <rect x="3" y="10" width="10" height="2" fill="#ea580c" />
        {/* Sole */}
        <rect x="2" y="12" width="12" height="1.5" fill="#f8fafc" />
        {/* Star / Speed detail */}
        <circle cx="5" cy="7" r="0.75" fill="#ffffff" />
      </svg>
    ),
  },

  // 4. Hero Sanctrum Mascot Blossom (Centerpiece - Extra Large Hero)
  {
    id: "bloom",
    name: "SANCTRUM AI",
    rotation: 5,
    yOffset: 105,
    hoverY: -25,
    isCenter: true,
    sizeClass: "size-48 sm:size-60 md:size-72",
    pixelIcon: (
      <svg className="size-22 md:size-30" viewBox="0 0 16 16" fill="none">
        {/* Pink Petals */}
        <rect x="4" y="2" width="3" height="5" rx="1" fill="#ec4899" />
        <rect x="9" y="2" width="3" height="5" rx="1" fill="#ec4899" />
        <rect x="6" y="3" width="4" height="5" rx="1" fill="#f472b6" />
        {/* Flower Center Mascot Face */}
        <circle cx="6" cy="5.5" r="0.75" fill="#18181b" />
        <circle cx="10" cy="5.5" r="0.75" fill="#18181b" />
        {/* Stem & Big Green Leaves */}
        <rect x="7.5" y="8" width="1" height="5" fill="#059669" />
        <rect x="3" y="10" width="4" height="2.5" rx="1" fill="#10b981" />
        <rect x="9" y="10" width="4" height="2.5" rx="1" fill="#10b981" />
      </svg>
    ),
  },

  // 5. Pixel Notebook / Docs (Right Inner - Medium-Large Tilted Left)
  {
    id: "typescript",
    name: "TYPESCRIPT",
    rotation: -9,
    yOffset: 75,
    hoverY: -15,
    sizeClass: "size-34 sm:size-44 md:size-52",
    pixelIcon: (
      <svg className="size-14 md:size-18" viewBox="0 0 16 16" fill="none">
        {/* Book Cover */}
        <rect
          x="3"
          y="2"
          width="10"
          height="12"
          rx="1"
          fill="#2563eb"
          stroke="#3b82f6"
          strokeWidth="0.8"
        />
        <rect x="4" y="4" width="8" height="8" fill="#1d4ed8" />
        {/* Letter TS / S */}
        <path
          d="M6 6h4M8 6v4"
          stroke="#ffffff"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Red Bookmark */}
        <path d="M5 12v3l1.5-1 1.5 1v-3" fill="#ef4444" />
      </svg>
    ),
  },

  // 6. Vintage Studio Mic `S` (Right Mid - Large Tilted Right)
  {
    id: "dsp",
    name: "WEB AUDIO DSP",
    rotation: 3,
    yOffset: 90,
    hoverY: -20,
    sizeClass: "size-42 sm:size-52 md:size-62",
    pixelIcon: (
      <svg className="size-17 md:size-22" viewBox="0 0 16 16" fill="none">
        {/* Mic Capsule Grill */}
        <rect x="5" y="2" width="6" height="7" rx="3" fill="#38bdf8" />
        <rect x="6" y="3" width="4" height="5" fill="#0284c7" />
        {/* Shockmount Ring */}
        <path
          d="M4 7v2a4 4 0 0 0 8 0V7"
          stroke="#60a5fa"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Stand Base */}
        <rect x="7.5" y="11" width="1" height="3" fill="#93c5fd" />
        <rect x="5" y="13.5" width="6" height="1.5" fill="#3b82f6" />
        {/* Red Live Indicator Dot */}
        <circle cx="8" cy="10" r="0.75" fill="#ef4444" />
      </svg>
    ),
  },

  // 7. Golden Privacy Lock (Right - Medium-Large Tilted Left)
  {
    id: "privacy",
    name: "ZERO CLOUD",
    rotation: -7,
    yOffset: 78,
    hoverY: -15,
    sizeClass: "size-36 sm:size-46 md:size-54",
    pixelIcon: (
      <svg className="size-15 md:size-20" viewBox="0 0 16 16" fill="none">
        {/* Shackle */}
        <path
          d="M5 6V4a3 3 0 0 1 6 0v2"
          stroke="#60a5fa"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Gold Body */}
        <rect
          x="3"
          y="6"
          width="10"
          height="8"
          rx="1.5"
          fill="#f59e0b"
          stroke="#d97706"
          strokeWidth="0.8"
        />
        {/* Keyhole S */}
        <circle cx="8" cy="9.5" r="1.2" fill="#18181b" />
        <path
          d="M8 10.5v1.5"
          stroke="#18181b"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export function TechStackMeshDock() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      // 1. Japanese Kanji Stagger Drop
      const kanjiChars =
        sectionRef.current.querySelectorAll(".stack-kanji-char")
      if (kanjiChars.length) {
        gsap.fromTo(
          kanjiChars,
          {
            y: -24,
            opacity: 0,
            scale: 0.6,
            rotate: (i) => (i % 2 === 0 ? -12 : 12),
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.65,
            stagger: 0.05,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // 2. Headline & Subtitle Smooth Slide-in
      const textBlock = sectionRef.current.querySelectorAll(".stack-text-item")
      if (textBlock.length) {
        gsap.fromTo(
          textBlock,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // 3. Staggering Spring Bounce for the 7 Dock Cards (One-by-One on Outer Wrapper)
      const dockWrappers = sectionRef.current.querySelectorAll(
        ".stack-deck-wrapper"
      )
      if (dockWrappers.length) {
        gsap.fromTo(
          dockWrappers,
          {
            y: 160,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.07,
            ease: "back.out(1.8)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="tech-stack"
      className="relative flex min-h-[460px] w-full scroll-mt-14 flex-col items-center justify-between overflow-hidden border-b border-line bg-gradient-to-b from-[#fbcfe8] via-[#fce7f3] to-background pt-10 pb-0 text-foreground select-none sm:min-h-[500px] sm:pt-14 md:min-h-[560px] md:pt-16 dark:from-[#260e20] dark:via-[#1e0a19] dark:to-[#170813]"
    >
      {/* Light Mode Soft Pink Blend with Crisp White Large Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80 dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.9) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 1.5px, transparent 1.5px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Dark Mode Deep Dark Pink with White Large Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-25 dark:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Light Mode: Cinematic Pure White Radial Vignette on Card Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredCard !== null ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-2 dark:hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 65%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.94) 100%)",
        }}
      />

      {/* Dark Mode: Cinematic Deep Black Radial Vignette on Card Hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredCard !== null ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-2 hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse at 50% 65%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.88) 100%)",
        }}
      />

      {/* Centered Content Rail Container for Title & Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        <div className="flex flex-col items-center gap-3.5 sm:gap-4.5">
          {/* Playful Japanese Kanji Tag */}
          <div className="relative inline-flex items-center justify-center select-none">
            <svg
              viewBox="0 0 226 52"
              className="h-9 w-auto overflow-visible sm:h-10"
            >
              {/* 1. 最 */}
              <g className="stack-kanji-char">
                <text
                  transform="translate(16, 37) rotate(-6)"
                  fill="none"
                  stroke="#d8b4fe"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  最
                </text>
                <text
                  transform="translate(16, 32) rotate(-6)"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  最
                </text>
                <text
                  transform="translate(16, 32) rotate(-6)"
                  fill="#c4b5fd"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  最
                </text>
              </g>

              {/* 2. 先 */}
              <g className="stack-kanji-char">
                <text
                  transform="translate(50, 36) rotate(5)"
                  fill="none"
                  stroke="#d8b4fe"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  先
                </text>
                <text
                  transform="translate(50, 31) rotate(5)"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  先
                </text>
                <text
                  transform="translate(50, 31) rotate(5)"
                  fill="#fbcfe8"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  先
                </text>
              </g>

              {/* 3. 端 */}
              <g className="stack-kanji-char">
                <text
                  transform="translate(84, 38) rotate(-4)"
                  fill="none"
                  stroke="#d8b4fe"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  端
                </text>
                <text
                  transform="translate(84, 33) rotate(-4)"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  端
                </text>
                <text
                  transform="translate(84, 33) rotate(-4)"
                  fill="#93c5fd"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  端
                </text>
              </g>

              {/* 4. 技 */}
              <g className="stack-kanji-char">
                <text
                  transform="translate(118, 36) rotate(6)"
                  fill="none"
                  stroke="#d8b4fe"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  技
                </text>
                <text
                  transform="translate(118, 31) rotate(6)"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  技
                </text>
                <text
                  transform="translate(118, 31) rotate(6)"
                  fill="#60a5fa"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  技
                </text>
              </g>

              {/* 5. 術 */}
              <g className="stack-kanji-char">
                <text
                  transform="translate(152, 37) rotate(-5)"
                  fill="none"
                  stroke="#d8b4fe"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  術
                </text>
                <text
                  transform="translate(152, 32) rotate(-5)"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  術
                </text>
                <text
                  transform="translate(152, 32) rotate(-5)"
                  fill="#c084fc"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  術
                </text>
              </g>

              {/* 6. Heart */}
              <g className="stack-kanji-char">
                <path
                  transform="translate(184, 23) rotate(6) scale(0.98)"
                  d="M 16 7 C 16 1, 7 -4, 2 2 C -3 -4, -12 1, -12 7 C -12 14, 2 21, 2 21 C 2 21, 16 14, 16 7 Z"
                  fill="none"
                  stroke="#d8b4fe"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  transform="translate(184, 18) rotate(6) scale(0.98)"
                  d="M 16 7 C 16 1, 7 -4, 2 2 C -3 -4, -12 1, -12 7 C -12 14, 2 21, 2 21 C 2 21, 16 14, 16 7 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="13"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <path
                  transform="translate(184, 18) rotate(6) scale(0.98)"
                  d="M 16 7 C 16 1, 7 -4, 2 2 C -3 -4, -12 1, -12 7 C -12 14, 2 21, 2 21 C 2 21, 16 14, 16 7 Z"
                  fill="#f472b6"
                />
              </g>
            </svg>
          </div>

          {/* Main Big Headline */}
          <h2 className="stack-text-item text-2xl leading-[1.15] font-medium tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            It starts with native desktop speed.
          </h2>

          {/* Subtitle */}
          <p className="stack-text-item max-w-2xl text-xs leading-relaxed font-normal text-balance text-muted-foreground sm:text-sm md:text-base">
            High-performance voice stack combining Bun, Electron, Web Audio DSP,
            and neural models from cloud to local edge.
          </p>

          {/* CTA & Engine Badge Action Row */}
          <div className="stack-text-item flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="inline-flex h-9 items-center gap-2 border border-line bg-muted/60 px-3.5 font-mono text-xs font-semibold tracking-wider text-foreground backdrop-blur-xs">
              <Terminal className="size-3.5 text-muted-foreground" />
              <span>SANCTRUM ENGINE v3.1.3</span>
            </div>

            <a
              href="https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center gap-1.5 border border-foreground bg-foreground px-4 text-xs font-semibold text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-95 sm:text-sm"
            >
              <span>Explore Architecture</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 7-Card Submerged Mesh Deck with Clean Independent Hover Physics */}
      <div className="relative z-20 mt-auto flex w-full items-end justify-center overflow-visible pt-4">
        <div className="no-scrollbar flex w-full items-end justify-center overflow-x-auto sm:overflow-visible">
          {MESH_STACK_CARDS.map((card, idx) => {
            const isCenter = card.isCenter
            const isHovered = hoveredCard === card.id
            const baseZ = isCenter ? 25 : 10 + (idx % 4)

            return (
              <div
                key={card.id}
                className="stack-deck-wrapper relative -ml-6 flex shrink-0 items-end justify-center sm:-ml-10 md:-ml-14"
                style={{
                  zIndex: isHovered ? 100 : baseZ,
                }}
              >
                <motion.div
                  initial={{ y: card.yOffset, rotate: card.rotation }}
                  animate={{
                    y: isHovered ? card.hoverY - 8 : card.yOffset,
                    rotate: isHovered ? 0 : card.rotation,
                    scale: isHovered ? 1.08 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 450, damping: 24 }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group/model relative flex cursor-pointer flex-col items-center justify-center rounded-none border border-line bg-card bg-gradient-to-t from-black/[0.05] to-card p-4 shadow-xl shadow-zinc-900/5 transition-colors duration-200 hover:border-foreground/50 hover:shadow-2xl sm:p-5 md:p-6 dark:border-zinc-700/80 dark:from-white/[0.04] dark:to-zinc-900 dark:shadow-2xl dark:shadow-black/70 dark:hover:border-zinc-300 ${card.sizeClass} ${
                    isCenter
                      ? "shadow-2xl ring-1 ring-border dark:ring-zinc-600"
                      : ""
                  } ${isHovered ? "shadow-2xl ring-2 ring-foreground/40" : ""}`}
                >
                  {/* Floating Monospace Tooltip Badge */}
                  <div className="pointer-events-none absolute -top-8 left-1/2 z-50 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover/model:-top-10 group-hover/model:opacity-100">
                    <div className="border border-foreground/30 bg-foreground px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider whitespace-nowrap text-background uppercase shadow-2xl sm:text-xs">
                      {card.name}
                    </div>
                  </div>

                  {/* Centered Pixel Art Graphic ONLY */}
                  <div className="flex size-full items-center justify-center">
                    {card.pixelIcon}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
