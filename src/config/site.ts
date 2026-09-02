import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: "Sanctrum Voice",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://sanctrum-landing.vercel.app",
  ogImage: USER.ogImage,
  description:
    "The open-source Windows voice layer & companion. Ultra low-latency Web Audio DSP, local Whisper STT, Kokoro neural speech synthesis, and interactive living mascot.",
  keywords: [
    "Sanctrum",
    "Sanctrum Voice",
    "Windows Voice Layer",
    "AI Voice Companion",
    "Local STT",
    "Whisper STT",
    "Kokoro Neural TTS",
    "Web Audio DSP",
    "Speech to Text",
    "Text to Speech",
    "Voice Dictation",
    "Read Aloud",
    "Selection to Speech",
    "Screen Reader Voice",
    "Live Audio Translation",
    "Voice Translator Windows",
    "Talk to AI Agent",
    "Microphone Voice Agent",
    "Windows Microphone AI",
    "Desktop Overlay HUD",
    "Thinking Orb",
    "Living Mascot",
    "Hands Free Voice Control",
    "Push to Talk Windows",
    "Windows 11 Voice Assistant",
    "Windows 10 Voice Layer",
    "Electron Desktop App",
    "Bun JS",
    "Open Source Voice AI",
    "Offline STT TTS",
    "Zero Cloud Privacy",
    "Fadhiilah Ahmad Zikri",
  ],
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Overview",
    href: "#overview",
  },
  {
    title: "Live Demo",
    href: "#demo",
  },
  {
    title: "Tech Stack",
    href: "#tech-stack",
  },
  {
    title: "Why Sanctrum",
    href: "#why-sanctrum",
  },
]

export const MOBILE_NAV: NavItem[] = [...MAIN_NAV]

export const X_HANDLE = SOCIAL.x.handle
export const GITHUB_USERNAME = "fadhiilahahmadzikri"
export const SOURCE_CODE_GITHUB_REPO = "fadhiilahahmadzikri/sanctrum-voice-v2"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2"

export const SPONSORSHIP_URL =
  "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2"

export const UTM_PARAMS = {
  utm_source: "sanctrum",
}
