export type SeoFaq = {
  question: string
  answer: string
}

export const HOME_SEO = {
  title: "Sanctrum Voice - Microsoft TTS Alternative for Windows",
  description:
    "Sanctrum Voice is an open-source Microsoft TTS alternative for Windows with Whisper STT dictation, Kokoro neural TTS, read aloud, and global hotkeys.",
  keywords: [
    "Sanctrum Voice",
    "Sanctrum",
    "Microsoft TTS alternative",
    "Microsoft text to speech alternative",
    "TTS Microsoft Windows",
    "Windows text to speech",
    "Windows TTS app",
    "Open source TTS Windows",
    "Text to Speech Windows",
    "Speech to Text Windows",
    "Voice Dictation Windows",
    "Read Aloud Windows",
    "Selection to Speech",
    "Whisper STT Windows",
    "Kokoro TTS Windows",
    "Kokoro Neural TTS",
    "Offline STT TTS",
    "Open Source Voice AI",
    "Windows Voice Layer",
    "Windows 11 Voice Assistant",
    "Windows 10 Voice Layer",
    "Desktop Voice Companion",
    "Push to Talk Windows",
    "Global Hotkeys Voice App",
    "Web Audio DSP",
    "Electron Desktop App",
  ],
} as const

export const HOME_SEARCH_INTENTS = [
  "Microsoft TTS alternative",
  "Windows text-to-speech",
  "Open-source TTS for Windows",
  "Whisper STT dictation",
  "Kokoro neural TTS",
  "Selection read aloud",
] as const

export const SANCTRUM_SEO_FAQS: SeoFaq[] = [
  {
    question: "Is Sanctrum Voice a Microsoft TTS alternative?",
    answer:
      "Yes. Sanctrum Voice is an open-source Windows voice app for text-to-speech, read aloud, voice dictation, and desktop hotkeys. It is built for users who want a lightweight alternative to Microsoft TTS workflows.",
  },
  {
    question: "What can Sanctrum Voice do on Windows?",
    answer:
      "Sanctrum Voice turns selected text into speech, captures voice dictation with Whisper STT, runs Kokoro neural TTS, and routes voice commands through global Windows hotkeys.",
  },
  {
    question: "Does Sanctrum Voice work offline?",
    answer:
      "Sanctrum Voice is designed around local voice workflows. Whisper STT, Kokoro TTS, and Web Audio DSP can run on the Windows desktop so private audio does not need to be uploaded for the core voice layer.",
  },
  {
    question: "Who should use Sanctrum Voice?",
    answer:
      "Developers, writers, streamers, accessibility-minded users, and Windows power users can use Sanctrum Voice for fast speech-to-text, text-to-speech, read aloud, and hands-free desktop control.",
  },
  {
    question: "Is Sanctrum Voice open source?",
    answer:
      "Yes. Sanctrum Voice is distributed as an open-source Windows desktop application with releases available from the project repository and a direct Windows installer link.",
  },
]

export const SANCTRUM_DEMO_VIDEO_SEO = {
  name: "Sanctrum Voice Windows TTS and dictation demo",
  description:
    "A product demo showing Sanctrum Voice as an open-source Windows voice companion for Microsoft TTS alternative workflows, selection read aloud, Whisper STT dictation, Kokoro neural TTS, and desktop hotkeys.",
  contentUrl: "/videos/sanctrum-demo.mp4",
  thumbnailUrl: "/videos/sanctrum-demo-poster.webp",
  uploadDate: "2026-09-03",
  duration: "PT1M23S",
} as const
