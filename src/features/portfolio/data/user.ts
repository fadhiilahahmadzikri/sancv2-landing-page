import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Ahmad",
  lastName: "Zikri",
  displayName: "Sanctrum Voice",
  username: "fadhiilahahmadzikri",
  gender: "male",
  pronouns: "he/him",
  bio: "Open-source Microsoft TTS alternative and Windows voice companion.",
  flipSentences: [
    "Microsoft TTS Alternative for Windows.",
    "Zero-Latency Local DSP.",
    "Whisper STT & Kokoro Neural TTS.",
    "Interactive 3D Mascot Companion.",
  ],
  address: "Indonesia",
  phoneNumberB64: "", // E.164 format, base64 encoded
  emailB64: "ZmFkaGlpbGFoYWhtYWR6aWtyaUBnbWFpbC5jb20=", // base64 encoded
  website: "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2",
  jobTitle: "Creator of Sanctrum Voice",
  jobs: [
    {
      title: "Core Engineer",
      company: "Sanctrum",
      website: "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2",
      experienceId: "sanctrum",
    },
  ],
  about: `- Creator of Sanctrum Voice — an open-source Microsoft TTS alternative and Windows desktop voice layer.
- Engineered with Web Audio FFT DSP buffers, local Whisper STT, and Kokoro neural TTS.
- Built for builders, developers, and writers who live by voice.
`,
  avatar: "/logo.png",
  avatarVariants: {
    lightOff: "/logo.png",
    lightOn: "/logo.png",
    darkOff: "/logo.png",
    darkOn: "/logo.png",
  },
  ogImage: "/logo.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Jakarta",
  keywords: [
    "sanctrum",
    "sanctrum voice",
    "voice layer",
    "whisper stt",
    "kokoro tts",
    "windows voice",
    "microsoft tts alternative",
    "windows text to speech",
    "ahmad zikri",
    "fadhiilahahmadzikri",
  ],
  dateCreated: "2026-01-01",
}
