"use client"

import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import { Volume2, VolumeX } from "lucide-react"

import { SANCTRUM_WINDOWS_DOWNLOAD } from "@/config/download"
import { gsap } from "@/lib/gsap"
import { GlowCtaButton } from "@/components/ui/glow-cta-button"
import { SanctrumIridescentLogo } from "@/components/sanctrum-iridescent-logo"

export function ProfileHeader() {
  const heroRef = useRef<HTMLDivElement>(null)
  const lightVideoRef = useRef<HTMLVideoElement>(null)
  const darkVideoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev
      if (lightVideoRef.current) lightVideoRef.current.muted = next
      if (darkVideoRef.current) darkVideoRef.current.muted = next
      return next
    })
  }

  // Serialized Fairy Anime Pop-Up Choreography (Per-Character & Per-Word)
  useGSAP(
    () => {
      if (!heroRef.current) return

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.08,
      })

      // 1. Top Japanese Navy Tag
      tl.fromTo(
        ".hero-top-tag",
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )

      // 2. Main Latin Letters (S-a-n-c-t-r-u-m) Fairy Anime Pop-Up
      tl.fromTo(
        ".hero-char-group",
        {
          scale: 0,
          opacity: 0,
          y: 40,
          transformOrigin: "50% 50%",
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.045,
          duration: 0.65,
          ease: "back.out(2.5)",
        },
        "-=0.2"
      )

      // 3. Bottom-Left Katakana Characters (サ-ン-ク-ト-ラ-ム) Stagger Pop-Up
      tl.fromTo(
        ".hero-kana-group",
        {
          scale: 0,
          opacity: 0,
          y: 25,
          transformOrigin: "50% 50%",
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.035,
          duration: 0.55,
          ease: "back.out(2.4)",
        },
        "-=0.35"
      )

      // 4. Sparkles, Star, Heart & TS Badge Twinkle Pop-In
      tl.fromTo(
        ".hero-decor-group",
        {
          scale: 0,
          opacity: 0,
          rotate: 90,
          transformOrigin: "50% 50%",
        },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          stagger: 0.05,
          duration: 0.6,
          ease: "back.out(3.0)",
        },
        "-=0.4"
      )

      // 5. Subtitle Word-by-Word Masked Stagger Reveal
      tl.fromTo(
        ".hero-sub-word",
        {
          y: "115%",
          opacity: 0,
          rotateX: -20,
        },
        {
          y: "0%",
          opacity: 1,
          rotateX: 0,
          stagger: 0.028,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.2"
      )

      // 6. Master CTA Button Pop-In
      tl.fromTo(
        ".hero-cta-btn",
        {
          scale: 0.82,
          y: 20,
          opacity: 0,
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "back.out(2.2)",
        },
        "-=0.25"
      )

      // 7. Bottom Japanese Micro-Tag
      tl.fromTo(
        ".hero-bottom-tag",
        {
          y: 12,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )
    },
    { scope: heroRef }
  )

  const subtitleWords =
    "A Windows desktop voice layer for hands-free dictation, command routing, and selection-to-speech".split(
      " "
    )

  return (
    <section
      id="overview"
      ref={heroRef}
      className="relative w-full scroll-mt-14 border-b border-line bg-background select-none"
    >
      {/* Full Viewport Width Video Hero Container */}
      <div className="relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-white pt-8 pb-12 sm:min-h-[85vh] sm:py-16 md:min-h-[90vh] lg:min-h-[94vh] dark:bg-black">
        {/* Light Mode Hero Video (Seamless Hardware Ping-Pong Loop) */}
        <video
          ref={lightVideoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 size-full object-cover dark:hidden"
        >
          <source src="/videos/hero-mascot.mp4" type="video/mp4" />
        </video>

        {/* Dark Mode Hero Video (Seamless Hardware Ping-Pong Loop) */}
        <video
          ref={darkVideoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 hidden size-full object-cover dark:block"
        >
          <source src="/videos/hero-mascot-dark.mp4" type="video/mp4" />
        </video>

        {/* Full Bottom-to-Top Balanced White Gradient Mask Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/50 to-transparent dark:from-background/70 dark:via-background/50 dark:to-transparent" />

        {/* Centered Hero Content Overlay */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center sm:px-10">
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            {/* Top Japanese Micro-Copy (Navy in light mode, soft indigo in dark mode) */}
            <div className="hero-top-tag mb-1 flex flex-col items-center text-xs font-semibold tracking-widest text-indigo-950 dark:text-indigo-200/90">
              <span>声で、つながる新しい日常</span>
              <span className="mt-1.5 h-0.5 w-6 rounded-full bg-indigo-500/80 dark:bg-indigo-400/80" />
            </div>

            {/* Main Big Iridescent Sanctrum Typography (Centered) */}
            <div className="hero-logo-wrapper relative mx-auto mb-1 flex justify-center will-change-transform sm:mb-2">
              <SanctrumIridescentLogo />
            </div>

            {/* Subtitle / Tagline (Serialized Masked Word Stagger) */}
            <p className="hero-subtitle mx-auto max-w-xl text-base leading-relaxed font-medium text-balance text-indigo-950 sm:text-lg md:text-xl dark:text-[#e8e8e8]">
              {subtitleWords.map((word, idx) => (
                <span
                  key={idx}
                  className="mr-[0.25em] inline-block overflow-hidden align-top last:mr-0"
                >
                  <span className="hero-sub-word inline-block will-change-transform">
                    {word}
                  </span>
                </span>
              ))}
            </p>

            {/* CTA Button: Get Sanctrum with Master GlowCtaButton (Centered) */}
            <div className="hero-cta-btn flex justify-center pt-2">
              <GlowCtaButton
                href={SANCTRUM_WINDOWS_DOWNLOAD.path}
                download={SANCTRUM_WINDOWS_DOWNLOAD.fileName}
                leadingIcon={
                  <svg
                    className="size-3.5 text-white"
                    viewBox="0 0 88 88"
                    fill="currentColor"
                  >
                    <path d="M0 0h41.6v41.6H0zM46.4 0H88v41.6H46.4zM0 46.4h41.6V88H0zM46.4 46.4H88V88H46.4z" />
                  </svg>
                }
              >
                Get Sanctrum
              </GlowCtaButton>
            </div>

            {/* Bottom Micro-Copy Under Button (Japanese Centered) */}
            <div className="hero-bottom-tag mt-2 flex flex-col items-center text-xs font-semibold tracking-widest text-indigo-900/80 dark:text-indigo-200/90">
              <span>声で動く、次世代の知能。</span>
              <span className="mt-1 h-0.5 w-6 rounded-full bg-indigo-400/70" />
            </div>
          </div>
        </div>

        {/* Minimal Audio Toggle Overlay */}
        <div className="absolute right-4 bottom-4 z-10 sm:right-6 sm:bottom-6">
          <button
            type="button"
            onClick={toggleMute}
            className="flex cursor-pointer items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur-md transition-all hover:bg-black/80"
            title={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="size-3.5" />
            ) : (
              <Volume2 className="size-3.5" />
            )}
            <span>{isMuted ? "Muted" : "Sound on"}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
