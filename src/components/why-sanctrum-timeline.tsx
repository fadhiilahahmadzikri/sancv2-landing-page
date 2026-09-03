"use client"

import React, { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import { GsapStaggerGroup, GsapTextReveal } from "@/components/gsap"

interface WhyCard {
  id: string
  title: string
  subtitle: string
  description: string
  metric: string
  kanjiChar: string
  kanjiRotate: number
  kanjiFill: string
  accentColor: string
}

const WHY_CARDS: WhyCard[] = [
  {
    id: "dsp",
    title: "Sub-millisecond DSP.",
    subtitle: "Zero-Latency Audio",
    description:
      "Direct Web Audio FFT buffer analysis running at native 60 FPS without cloud lag or IPC latency.",
    metric: "< 0.8ms DSP Loop",
    kanjiChar: "速",
    kanjiRotate: -7,
    kanjiFill: "#f59e0b",
    accentColor: "bg-amber-400 dark:bg-amber-500",
  },
  {
    id: "privacy",
    title: "100% Local Privacy.",
    subtitle: "On-Device Neural STT",
    description:
      "On-device Whisper STT & neural synthesis. Your private audio never leaves your Windows PC.",
    metric: "Zero Cloud Upload",
    kanjiChar: "守",
    kanjiRotate: 6,
    kanjiFill: "#38bdf8",
    accentColor: "bg-sky-400 dark:bg-sky-500",
  },
  {
    id: "mascot",
    title: "Living Mascot Interface.",
    subtitle: "Bloub Sphere Math",
    description:
      "Procedural blinking, cursor gaze tracking, and 16 dynamic emotional states reflecting real-time voice activity.",
    metric: "16 Emotion Poses",
    kanjiChar: "心",
    kanjiRotate: -5,
    kanjiFill: "#c084fc",
    accentColor: "bg-purple-400 dark:bg-purple-500",
  },
  {
    id: "hotkeys",
    title: "OS-Wide Global Hotkeys.",
    subtitle: "Native Windows Hooks",
    description:
      "Selection-to-speech, instant voice-to-clipboard, and native Microsoft Windows automation across any application.",
    metric: "System-Level Win32",
    kanjiChar: "鍵",
    kanjiRotate: 7,
    kanjiFill: "#34d399",
    accentColor: "bg-emerald-400 dark:bg-emerald-500",
  },
]

const CYCLE_DURATION_MS = 5000

export function WhySanctrumTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  // Auto-play timer with smooth progress bar
  useEffect(() => {
    if (isPaused) return

    const intervalTime = 50 // 50ms tick
    const step = (intervalTime / CYCLE_DURATION_MS) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % WHY_CARDS.length)
          return 0
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isPaused])

  const handleCardHover = (index: number) => {
    setIsPaused(true)
    setActiveIndex(index)
    setProgress(100)
  }

  const handleCardLeave = () => {
    setIsPaused(false)
    setProgress(0)
  }

  return (
    <section
      id="why-sanctrum"
      className="relative w-full scroll-mt-14 overflow-hidden border-b border-line bg-background text-foreground select-none"
    >
      {/* Centered Rail Container */}
      <div className="relative mx-auto max-w-6xl border-x border-line bg-background">
        {/* Top Header Area */}
        <div className="flex flex-col justify-between gap-6 border-b border-line px-6 pt-14 pb-10 sm:pt-18 sm:pb-12 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-4">
            {/* Playful Japanese Kanji Tag */}
            <div className="relative inline-flex items-center select-none">
              <svg
                viewBox="0 0 210 44"
                className="h-8 w-auto overflow-visible sm:h-9"
              >
                {/* 1. Neobrutalist Shadow */}
                <g
                  transform="translate(0, 4)"
                  fill="none"
                  stroke="#d8b4fe"
                  strokeWidth="11"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="22"
                  fontWeight="900"
                >
                  <text transform="translate(14, 27) rotate(-6)">選</text>
                  <text transform="translate(42, 26) rotate(5)">ば</text>
                  <text transform="translate(70, 28) rotate(-4)">れ</text>
                  <text transform="translate(98, 26) rotate(6)">る</text>
                  <text transform="translate(126, 27) rotate(-5)">理</text>
                  <text transform="translate(154, 26) rotate(5)">由</text>
                  <path
                    transform="translate(178, 15) rotate(6) scale(0.85)"
                    d="M 16 7 C 16 1, 7 -4, 2 2 C -3 -4, -12 1, -12 7 C -12 14, 2 21, 2 21 C 2 21, 16 14, 16 7 Z"
                  />
                </g>
                {/* 2. White Sticker */}
                <g
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="11"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="22"
                  fontWeight="900"
                >
                  <text transform="translate(14, 27) rotate(-6)">選</text>
                  <text transform="translate(42, 26) rotate(5)">ば</text>
                  <text transform="translate(70, 28) rotate(-4)">れ</text>
                  <text transform="translate(98, 26) rotate(6)">る</text>
                  <text transform="translate(126, 27) rotate(-5)">理</text>
                  <text transform="translate(154, 26) rotate(5)">由</text>
                  <path
                    transform="translate(178, 15) rotate(6) scale(0.85)"
                    d="M 16 7 C 16 1, 7 -4, 2 2 C -3 -4, -12 1, -12 7 C -12 14, 2 21, 2 21 C 2 21, 16 14, 16 7 Z"
                  />
                </g>
                {/* 3. Pastel Fills */}
                <g
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="22"
                  fontWeight="900"
                >
                  <text transform="translate(14, 27) rotate(-6)" fill="#c4b5fd">
                    選
                  </text>
                  <text transform="translate(42, 26) rotate(5)" fill="#fbcfe8">
                    ば
                  </text>
                  <text transform="translate(70, 28) rotate(-4)" fill="#93c5fd">
                    れ
                  </text>
                  <text transform="translate(98, 26) rotate(6)" fill="#60a5fa">
                    る
                  </text>
                  <text
                    transform="translate(126, 27) rotate(-5)"
                    fill="#c084fc"
                  >
                    理
                  </text>
                  <text transform="translate(154, 26) rotate(5)" fill="#f472b6">
                    由
                  </text>
                  <path
                    transform="translate(178, 15) rotate(6) scale(0.85)"
                    d="M 16 7 C 16 1, 7 -4, 2 2 C -3 -4, -12 1, -12 7 C -12 14, 2 21, 2 21 C 2 21, 16 14, 16 7 Z"
                    fill="#f472b6"
                  />
                </g>
              </svg>
            </div>

            {/* Headline with GSAP Masked Stagger Reveal */}
            <GsapTextReveal
              as="h2"
              text="Engineered for builders who live by voice."
              className="text-3xl leading-[1.15] font-medium tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl"
            />

            <p className="text-sm leading-relaxed text-balance text-muted-foreground sm:text-base">
              Compare it with built-in TTS or cloud-heavy voice assistants:
              Sanctrum keeps Windows text-to-speech, dictation, and read aloud
              close to your desktop.
            </p>
          </div>

          {/* GitHub Action Button matching Demo Button Style */}
          <div className="shrink-0">
            <a
              href="https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-foreground bg-foreground px-4 py-2.5 text-xs font-semibold text-background shadow-xs transition-all hover:bg-foreground/90 active:scale-[0.99] sm:text-sm"
            >
              <span>View on GitHub</span>
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* 4-Card Interactive Timeline Grid with GSAP Stagger Entrance */}
        <GsapStaggerGroup className="grid grid-cols-1 divide-y divide-line bg-background sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {WHY_CARDS.map((card, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={card.id}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                className={`group relative flex min-h-[300px] cursor-pointer flex-col justify-between p-6 transition-colors duration-200 sm:min-h-[340px] sm:p-7 ${
                  isActive
                    ? "bg-zinc-100/40 dark:bg-zinc-900/50"
                    : "bg-background hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30"
                }`}
              >
                {/* 1. Time-alive Progress Bar at Top */}
                <div className="absolute top-0 right-0 left-0 h-1 overflow-hidden bg-transparent">
                  {isActive && (
                    <motion.div
                      className={`h-full ${card.accentColor}`}
                      style={{ width: isPaused ? "100%" : `${progress}%` }}
                      transition={{
                        ease: "linear",
                        duration: isPaused ? 0.2 : 0.05,
                      }}
                    />
                  )}
                </div>

                {/* Top Row: Playful Japanese Kanji Sticker + Metric Tag */}
                <div className="flex items-start justify-between">
                  {/* Playful 3D Neobrutalist Kanji Icon Sticker */}
                  <div className="relative inline-flex items-center filter transition-transform duration-300 select-none group-hover:scale-110">
                    <svg
                      viewBox="0 0 44 44"
                      className="size-9 overflow-visible sm:size-10"
                    >
                      {/* 1. Neobrutalist 3D Shadow */}
                      <g
                        transform="translate(0, 3)"
                        fill="none"
                        stroke="#d8b4fe"
                        strokeWidth="8"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fontFamily="var(--font-mochiy), sans-serif"
                        fontSize="25"
                        fontWeight="900"
                      >
                        <text
                          transform={`translate(10, 31) rotate(${card.kanjiRotate})`}
                        >
                          {card.kanjiChar}
                        </text>
                      </g>
                      {/* 2. White Sticker Border */}
                      <g
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="8"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        fontFamily="var(--font-mochiy), sans-serif"
                        fontSize="25"
                        fontWeight="900"
                      >
                        <text
                          transform={`translate(10, 31) rotate(${card.kanjiRotate})`}
                        >
                          {card.kanjiChar}
                        </text>
                      </g>
                      {/* 3. Pastel Color Fill */}
                      <g
                        fontFamily="var(--font-mochiy), sans-serif"
                        fontSize="25"
                        fontWeight="900"
                      >
                        <text
                          transform={`translate(10, 31) rotate(${card.kanjiRotate})`}
                          fill={card.kanjiFill}
                        >
                          {card.kanjiChar}
                        </text>
                      </g>
                    </svg>
                  </div>

                  <span className="border border-line bg-muted/40 px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                    {card.metric}
                  </span>
                </div>

                {/* Bottom Content with Slide-Up / Push Animation */}
                <div className="flex flex-col justify-end gap-2 overflow-hidden pt-12">
                  {/* Title (Always Visible) */}
                  <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-foreground sm:text-xl">
                    {card.title}
                  </h3>

                  {/* Description (Pushes Up From Bottom on Hover / Active) */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 12,
                    }}
                    transition={{
                      duration: 0.28,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {card.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            )
          })}
        </GsapStaggerGroup>
      </div>
    </section>
  )
}
