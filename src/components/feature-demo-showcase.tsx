"use client"

import React, { useState } from "react"
import {
  Check,
  Copy,
  DownloadIcon,
  Maximize2,
  Terminal,
  Video,
  XIcon,
} from "lucide-react"

import { SANCTRUM_WINDOWS_DOWNLOAD } from "@/config/download"
import { SANCTRUM_DEMO_VIDEO_SEO } from "@/config/seo"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const DEMO_VIDEO = {
  title: "Sanctrum live demo",
  fileName: "sanctrum-demo.mp4",
  src: SANCTRUM_DEMO_VIDEO_SEO.contentUrl,
  poster: SANCTRUM_DEMO_VIDEO_SEO.thumbnailUrl,
  meta: "1280x720 - 30 FPS - 01:23",
} as const

export function FeatureDemoShowcase() {
  const [copied, setCopied] = useState(false)
  const installCmd =
    "irm https://raw.githubusercontent.com/fadhiilahahmadzikri/sanctrum-voice-v2/main/install.ps1 | iex"

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="demo"
      className="relative w-full scroll-mt-14 overflow-hidden border-b border-line bg-background text-foreground select-none"
    >
      {/* 1. Main Grid Rail Container with Rail Borders */}
      <div className="relative mx-auto max-w-6xl border-x border-line bg-background">
        {/* Main Content Area */}
        <div className="relative flex flex-col lg:flex-row lg:items-stretch">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Punchy Headline, Terminal Copy, & CTA           */}
          {/* ============================================================ */}
          <div className="z-20 flex w-full flex-col justify-center gap-7 border-b border-line bg-background/90 p-8 backdrop-blur-xs sm:p-10 lg:w-[45%] lg:border-r lg:border-b-0 lg:bg-transparent lg:p-12 lg:backdrop-blur-none">
            {/* Top Area */}
            <div className="flex flex-col gap-5">
              {/* Playful Japanese Kanji Tag */}
              <div className="relative inline-flex items-center select-none">
                <svg
                  viewBox="0 0 190 44"
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
                    <text transform="translate(14, 27) rotate(-6)">未</text>
                    <text transform="translate(42, 26) rotate(5)">来</text>
                    <text transform="translate(70, 28) rotate(-4)">の</text>
                    <text transform="translate(98, 26) rotate(6)">音</text>
                    <text transform="translate(126, 27) rotate(-5)">声</text>
                    <path
                      transform="translate(152, 15) rotate(6) scale(0.85)"
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
                    <text transform="translate(14, 27) rotate(-6)">未</text>
                    <text transform="translate(42, 26) rotate(5)">来</text>
                    <text transform="translate(70, 28) rotate(-4)">の</text>
                    <text transform="translate(98, 26) rotate(6)">音</text>
                    <text transform="translate(126, 27) rotate(-5)">声</text>
                    <path
                      transform="translate(152, 15) rotate(6) scale(0.85)"
                      d="M 16 7 C 16 1, 7 -4, 2 2 C -3 -4, -12 1, -12 7 C -12 14, 2 21, 2 21 C 2 21, 16 14, 16 7 Z"
                    />
                  </g>
                  {/* 3. Pastel Fills */}
                  <g
                    fontFamily="var(--font-mochiy), sans-serif"
                    fontSize="22"
                    fontWeight="900"
                  >
                    <text
                      transform="translate(14, 27) rotate(-6)"
                      fill="#c4b5fd"
                    >
                      未
                    </text>
                    <text
                      transform="translate(42, 26) rotate(5)"
                      fill="#fbcfe8"
                    >
                      来
                    </text>
                    <text
                      transform="translate(70, 28) rotate(-4)"
                      fill="#93c5fd"
                    >
                      の
                    </text>
                    <text
                      transform="translate(98, 26) rotate(6)"
                      fill="#60a5fa"
                    >
                      音
                    </text>
                    <text
                      transform="translate(126, 27) rotate(-5)"
                      fill="#c084fc"
                    >
                      声
                    </text>
                    <path
                      transform="translate(152, 15) rotate(6) scale(0.85)"
                      d="M 16 7 C 16 1, 7 -4, 2 2 C -3 -4, -12 1, -12 7 C -12 14, 2 21, 2 21 C 2 21, 16 14, 16 7 Z"
                      fill="#f472b6"
                    />
                  </g>
                </svg>
              </div>

              {/* Massive Headline Statement */}
              <h2 className="text-2xl leading-[1.18] font-medium tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl">
                A Microsoft TTS alternative built for the modern Windows
                desktop.
              </h2>

              <p className="text-xs leading-relaxed text-balance text-muted-foreground sm:text-sm">
                Full-system voice dictation, Kokoro neural text-to-speech,
                selection read aloud, interactive companion mascot, and global
                hotkey control in one unified Windows app.
              </p>
            </div>

            {/* Bottom Action Rows (Install Command + Get Demo CTA) */}
            <div className="flex flex-col gap-2.5">
              {/* Terminal 1-Click Copy Box */}
              <button
                type="button"
                onClick={handleCopy}
                title="Click to copy PowerShell installation command"
                className="group relative flex cursor-pointer items-center justify-between gap-3 border border-line bg-card px-4 py-2.5 text-left transition-colors hover:border-foreground/40 active:scale-[0.99]"
              >
                <div className="flex min-w-0 flex-1 items-center gap-2.5 font-mono text-xs text-foreground sm:text-xs">
                  <span className="shrink-0 text-muted-foreground select-none">
                    &gt;
                  </span>
                  <span className="truncate">{installCmd}</span>
                </div>
                <div className="flex shrink-0 items-center text-muted-foreground group-hover:text-foreground">
                  {copied ? (
                    <Check className="size-4 text-emerald-500" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </div>
              </button>

              {/* Download Windows CTA */}
              <a
                href={SANCTRUM_WINDOWS_DOWNLOAD.path}
                download={SANCTRUM_WINDOWS_DOWNLOAD.fileName}
                className="group flex items-center justify-between border border-foreground bg-foreground px-4 py-2.5 text-background transition-all hover:bg-foreground/90 active:scale-[0.99]"
              >
                <span className="text-xs font-semibold tracking-wide sm:text-sm">
                  Download Windows Installer
                </span>
                <DownloadIcon className="size-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          <DemoVideoWindow />
        </div>
      </div>
    </section>
  )
}

function DemoVideoWindow() {
  const previewVideoRef = React.useRef<HTMLVideoElement>(null)
  const [expandedStartTime, setExpandedStartTime] = React.useState(0)

  const prepareExpandedPlayback = () => {
    const previewVideo = previewVideoRef.current

    if (!previewVideo) {
      return
    }

    setExpandedStartTime(previewVideo.currentTime)
    previewVideo.pause()
  }

  const handleExpandedVideoMetadata = (
    event: React.SyntheticEvent<HTMLVideoElement>
  ) => {
    event.currentTarget.currentTime = expandedStartTime
  }

  return (
    <Dialog>
      <div className="relative flex w-full flex-1 flex-col overflow-hidden bg-card lg:w-[55%]">
        <div className="flex h-10 shrink-0 items-center justify-between gap-3 border-b border-line bg-muted/60 px-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-rose-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5 font-mono text-xs text-muted-foreground">
            <Terminal className="size-3.5 shrink-0" />
            <span className="truncate">{DEMO_VIDEO.fileName}</span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              LIVE DEMO
            </span>
            <DialogTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                className="bg-background/80"
                aria-label="Expand demo video"
                title="Expand demo video"
                onClick={prepareExpandedPlayback}
              >
                <Maximize2 data-icon="inline-start" />
              </Button>
            </DialogTrigger>
          </div>
        </div>

        <div className="relative flex min-h-[320px] w-full flex-1 items-center justify-center overflow-hidden bg-zinc-950">
          <video
            ref={previewVideoRef}
            className="size-full bg-zinc-950 object-contain"
            controls
            playsInline
            preload="metadata"
            poster={DEMO_VIDEO.poster}
          >
            <source src={DEMO_VIDEO.src} type="video/mp4" />
          </video>
        </div>
      </div>

      <DialogContent
        showCloseButton={false}
        className="max-w-[min(96vw,1280px)] gap-0 overflow-hidden bg-zinc-950 p-0 text-white ring-white/15"
      >
        <DialogHeader className="border-b border-white/10 bg-zinc-950 px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <Video className="size-4 shrink-0 text-emerald-300" />
              <DialogTitle className="truncate text-sm text-white">
                {DEMO_VIDEO.title}
              </DialogTitle>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-zinc-400 max-sm:hidden">
                {DEMO_VIDEO.meta}
              </span>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  className="text-white hover:bg-white/10 hover:text-white"
                  aria-label="Close demo video"
                >
                  <XIcon data-icon="inline-start" />
                </Button>
              </DialogClose>
            </div>
          </div>
          <DialogDescription className="sr-only">
            Full-size playback of the Sanctrum Voice product demo.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-black">
          <video
            className="max-h-[82vh] w-full bg-black object-contain"
            controls
            autoPlay
            playsInline
            preload="metadata"
            poster={DEMO_VIDEO.poster}
            onLoadedMetadata={handleExpandedVideoMetadata}
          >
            <source src={DEMO_VIDEO.src} type="video/mp4" />
          </video>
        </div>
      </DialogContent>
    </Dialog>
  )
}
