import type { Person, SoftwareApplication, WithContext } from "schema-dts"

import {
  getWindowsDownloadUrl,
  SANCTRUM_WINDOWS_DOWNLOAD,
} from "@/config/download"
import { SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"

/**
 * Stable @id anchors so Google can merge JSON-LD nodes across separate
 * <script> blocks (and pages) into a single entity in the Knowledge Graph.
 * The "#fragment" keeps each node id distinct from the page URL itself.
 */
export const JSON_LD_ID = {
  website: `${SITE_INFO.url}/#website`,
  person: `${SITE_INFO.url}/#person`,
  app: `${SITE_INFO.url}/#app`,
} as const

export const personJsonLd: Person = {
  "@type": "Person",
  "@id": JSON_LD_ID.person,
  name: "Fadhiilah Ahmad Zikri",
  alternateName: ["Ahmad Zikri", "fadhiilahahmadzikri"],
  identifier: "fadhiilahahmadzikri",
  image: USER.avatar,
  url: SITE_INFO.url,
  sameAs: [
    "https://github.com/fadhiilahahmadzikri",
    "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2",
  ],
}

export const softwareAppJsonLd: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": JSON_LD_ID.app,
  name: "Sanctrum Voice",
  softwareVersion: SANCTRUM_WINDOWS_DOWNLOAD.appVersion,
  operatingSystem: "Windows 10, Windows 11",
  applicationCategory: "MultimediaApplication",
  description:
    "The open-source Windows voice layer & AI companion. Featuring local Whisper Speech-to-Text (STT), Kokoro neural Text-to-Speech (TTS), Read Aloud selection-to-speech, real-time voice translation, desktop overlay HUD, and interactive 3D living mascot companion.",
  url: SITE_INFO.url,
  downloadUrl: getWindowsDownloadUrl(SITE_INFO.url),
  featureList: [
    "Local Whisper Speech-to-Text (STT) Voice Dictation",
    "Kokoro Neural Text-to-Speech (TTS) & Selection Read Aloud",
    "Real-time Live Audio Voice Translation",
    "Microphone Voice Agent & AI Conversational Assistant",
    "Desktop Overlay HUD with Global System Push-to-Talk Hotkeys",
    "Zero-Latency Web Audio FFT DSP Spectrum Visualizer",
    "Interactive 3D Living Mascot & Thinking Orb Companion",
    "100% Offline Zero-Cloud Privacy Architecture",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: personJsonLd,
}
