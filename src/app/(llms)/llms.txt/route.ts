import { getWindowsDownloadUrl } from "@/config/download"
import { SITE_INFO } from "@/config/site"

const windowsDownloadUrl = getWindowsDownloadUrl(SITE_INFO.url)

const content = `# Sanctrum Voice — The Open-Source Windows Voice Layer & AI Companion

> Sanctrum Voice is a modern, high-performance, open-source Windows voice layer and desktop AI companion designed for zero-latency speech input, local Whisper STT, Kokoro neural TTS synthesis, Web Audio FFT DSP spectrum visualization, and living 3D mascot interactions.

- **Website:** ${SITE_INFO.url}
- **GitHub Repository:** https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2
- **Latest Windows Installer:** ${windowsDownloadUrl}
- **License:** MIT License
- **Author:** Fadhiilah Ahmad Zikri

---

## ⚡ Core Capabilities & User Intent Keywords

1. **Local Speech-to-Text (STT) & Voice Dictation:**
   - High-accuracy offline transcription powered by local OpenAI Whisper models (Tiny, Base, Small, Medium).
   - Instant voice-to-text typing directly into any Windows software, browser, Discord, VS Code, or document editor.
   - Zero cloud audio streaming for 100% offline privacy.

2. **Neural Text-to-Speech (TTS) & Read Aloud:**
   - Ultra low-latency natural human speech synthesis using Kokoro-82M ONNX neural models.
   - Selection-to-speech screen reader functionality: highlight any text on Windows and listen to crystal-clear voice narration.

3. **Live Voice Translation & Multilingual Audio:**
   - Real-time spoken language transcription and translation pipeline.
   - Seamless speech translation for cross-language meetings, gaming, and content creation.

4. **Microphone Voice Agent & AI Conversation:**
   - System microphone agent layer enabling hands-free conversation with local or API-backed AI models.
   - Intelligent command routing, voice prompt execution, and desktop assistant capabilities.

5. **Desktop Overlay HUD & Global Push-to-Talk:**
   - Minimalist floating desktop HUD overlay.
   - Global system hotkeys (Push-to-Talk, Hold-to-Dictate, Quick TTS Trigger) configurable across Windows 11 and Windows 10.

6. **Web Audio DSP & Dynamic Living Mascot:**
   - Real-time Web Audio FFT (Fast Fourier Transform) spectrum visualizer.
   - Dynamic 3D viscous fluid orbs and procedural SVG facial liveliness that reacts to user voice amplitude and cadence.

---

## 🔍 Common Search Keywords & Equivalents
- **Speech-to-Text:** STT, voice dictation, Whisper offline, speech typing, transcribe audio, voice to text Windows.
- **Text-to-Speech:** TTS, Kokoro neural voice, read aloud, screen reader, text to voice, natural AI speech synthesis.
- **Voice Agent:** Microphone agent, talk to AI, voice overlay, Windows AI companion, voice assistant open source.
- **Technical:** Web Audio DSP, FFT spectrum analyzer, Electron voice layer, Bun desktop app, WebGL fluid mascot.

---

## 🚀 Navigation & Key URLs

- [Overview](${SITE_INFO.url}/#overview): Architectural breakdown of the voice engine and audio pipeline.
- [Live Interactive Demo](${SITE_INFO.url}/#demo): Interactive voice visualizer and mascot demo in the browser.
- [Tech Stack](${SITE_INFO.url}/#tech-stack): Bun runtime, Web Audio DSP, Kokoro TTS, Whisper STT, and WebGL.
- [Why Sanctrum](${SITE_INFO.url}/#why-sanctrum): Comparison of zero-cloud local voice processing vs cloud assistants.
- [Download Release](${windowsDownloadUrl}): Latest Windows 64-bit installer (.exe).
- [GitHub App Repository](https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2): Source code for the desktop application.
- [GitHub Landing Repository](https://github.com/fadhiilahahmadzikri/sancv2-landing-page): Source code for the official landing page.
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
