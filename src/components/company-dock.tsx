"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import {
  SiAnthropic,
  SiBun,
  SiDeepgram,
  SiElectron,
  SiGithub,
  SiMistralai,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons"

import { gsap } from "@/lib/gsap"
import { GsapEditorialReveal } from "@/components/gsap/gsap-editorial-reveal"
import { GsapMagneticDock } from "@/components/gsap/gsap-magnetic-dock"

interface TechLogo {
  name: string
  category: string
  logo: React.ReactNode
}

const TECH_LOGOS: TechLogo[] = [
  {
    name: "Deepgram",
    category: "Voice AI & Nova ASR",
    logo: <SiDeepgram className="size-8 fill-current md:size-10" />,
  },
  {
    name: "Mistral AI",
    category: "LLM & Reasoning",
    logo: <SiMistralai className="size-8 fill-current md:size-10" />,
  },
  {
    name: "Anthropic",
    category: "Claude Intelligence",
    logo: <SiAnthropic className="size-8 fill-current md:size-10" />,
  },
  {
    name: "Bun",
    category: "Fast Native Runtime",
    logo: <SiBun className="size-8 fill-current md:size-10" />,
  },
  {
    name: "Electron",
    category: "Desktop Architecture",
    logo: <SiElectron className="size-8 fill-current md:size-10" />,
  },
  {
    name: "TypeScript",
    category: "Strict Type Safety",
    logo: <SiTypescript className="size-8 fill-current md:size-10" />,
  },
  {
    name: "React",
    category: "Declarative UI",
    logo: <SiReact className="size-8 fill-current md:size-10" />,
  },
  {
    name: "Tailwind CSS",
    category: "Design System",
    logo: <SiTailwindcss className="size-8 fill-current md:size-10" />,
  },
  {
    name: "GitHub",
    category: "Open Distribution",
    logo: <SiGithub className="size-8 fill-current md:size-10" />,
  },
]

export function CompanyDock() {
  const badgeRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!badgeRef.current) return

      const chars = badgeRef.current.querySelectorAll(".section2-char")
      if (!chars.length) return

      gsap.fromTo(
        chars,
        {
          y: -24,
          opacity: 0,
          scale: 0.6,
          rotate: (i) => (i % 2 === 0 ? -15 : 15),
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "back.out(2.2)",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      )
    },
    { scope: badgeRef }
  )

  return (
    <section className="relative w-full overflow-hidden border-b border-line bg-background select-none">
      {/* 1. Wrapped Statement Area (with max-w-6xl and border-x rails) */}
      <div className="mx-auto max-w-6xl border-x border-line">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 pt-16 pb-14 text-center sm:pt-20 sm:pb-16 md:pt-24 md:pb-20">
          {/* Distinct Japanese Copy (音声の力で ♥) */}
          <div
            ref={badgeRef}
            className="relative inline-flex items-center justify-center select-none"
          >
            <svg
              viewBox="0 0 226 52"
              className="h-11 w-auto overflow-visible sm:h-12"
            >
              {/* 1. 音 */}
              <g className="section2-char">
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
                  音
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
                  音
                </text>
                <text
                  transform="translate(16, 32) rotate(-6)"
                  fill="#93c5fd"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  音
                </text>
              </g>

              {/* 2. 声 */}
              <g className="section2-char">
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
                  声
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
                  声
                </text>
                <text
                  transform="translate(50, 31) rotate(5)"
                  fill="#a5b4fc"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  声
                </text>
              </g>

              {/* 3. の */}
              <g className="section2-char">
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
                  の
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
                  の
                </text>
                <text
                  transform="translate(84, 33) rotate(-4)"
                  fill="#c4b5fd"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  の
                </text>
              </g>

              {/* 4. 力 */}
              <g className="section2-char">
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
                  力
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
                  力
                </text>
                <text
                  transform="translate(118, 31) rotate(6)"
                  fill="#c084fc"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  力
                </text>
              </g>

              {/* 5. で */}
              <g className="section2-char">
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
                  で
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
                  で
                </text>
                <text
                  transform="translate(152, 32) rotate(-5)"
                  fill="#f472b6"
                  fontFamily="var(--font-mochiy), sans-serif"
                  fontSize="27"
                  fontWeight="900"
                >
                  で
                </text>
              </g>

              {/* 6. Heart */}
              <g className="section2-char">
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

          {/* Big Bold Balanced Statement with 3D Editorial Perspective Reveal */}
          <GsapEditorialReveal
            as="h2"
            text="Sanctrum is the open-source Windows voice layer used in production by the most innovative builders on earth."
            className="text-2xl leading-[1.28] font-medium tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl lg:text-[2.65rem]"
          />
        </div>
      </div>

      {/* 2. Infinite Continuous Logo Marquee Track with GsapMagneticDock Cascade */}
      <GsapMagneticDock
        className="relative w-full overflow-hidden border-t border-line bg-background"
        itemSelector=".dock-card-item"
      >
        {/* Left & Right Edge Vignette Gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />

        {/* Marquee Track Container */}
        <div className="relative flex w-full overflow-hidden">
          <div className="animate-company-marquee flex hover:[animation-play-state:paused]">
            {/* First Set of Logo Cards */}
            {TECH_LOGOS.map((item, idx) => (
              <div
                key={`logo-1-${idx}`}
                className="dock-card-item group relative -ml-px flex aspect-square size-40 shrink-0 cursor-pointer flex-col items-center justify-center border border-line bg-background p-6 transition-all duration-300 hover:z-10 hover:bg-muted/40 md:size-68"
              >
                <div className="flex flex-col items-center justify-center gap-3 text-muted-foreground/60 grayscale transition-all duration-300 group-hover:scale-110 group-hover:text-foreground group-hover:grayscale-0">
                  <div className="flex h-10 items-center justify-center md:h-12">
                    {item.logo}
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-xs font-bold tracking-wider text-muted-foreground transition-colors group-hover:text-foreground md:text-sm">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] tracking-tight text-muted-foreground/60 transition-colors group-hover:text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicated Set for Seamless Infinite Loop */}
            {TECH_LOGOS.map((item, idx) => (
              <div
                key={`logo-2-${idx}`}
                className="dock-card-item group relative -ml-px flex aspect-square size-40 shrink-0 cursor-pointer flex-col items-center justify-center border border-line bg-background p-6 transition-all duration-300 hover:z-10 hover:bg-muted/40 md:size-68"
              >
                <div className="flex flex-col items-center justify-center gap-3 text-muted-foreground/60 grayscale transition-all duration-300 group-hover:scale-110 group-hover:text-foreground group-hover:grayscale-0">
                  <div className="flex h-10 items-center justify-center md:h-12">
                    {item.logo}
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-xs font-bold tracking-wider text-muted-foreground transition-colors group-hover:text-foreground md:text-sm">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] tracking-tight text-muted-foreground/60 transition-colors group-hover:text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GsapMagneticDock>

      {/* Embedded CSS for infinite smooth marquee */}
      <style jsx>{`
        @keyframes company-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-company-marquee {
          display: flex;
          width: max-content;
          animation: company-marquee 28s linear infinite;
        }
      `}</style>
    </section>
  )
}
