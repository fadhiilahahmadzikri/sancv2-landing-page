import { SITE_INFO } from "@/config/site"

const content = `# Sanctrum Voice — The Open-Source Windows Voice Layer & AI Companion

> Sanctrum Voice is a modern, high-performance, open-source Windows voice layer and desktop AI companion designed for zero-latency speech input, local Whisper STT, Kokoro neural TTS synthesis, Web Audio FFT DSP spectrum visualization, and living 3D mascot interactions.

- **Website:** ${SITE_INFO.url}
- **GitHub Repository:** https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2
- **Latest Windows Installer:** https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2/releases/latest
- **License:** MIT License
- **Author:** Fadhiilah Ahmad Zikri

---

## ⚡ Core Capabilities & Architecture

1. **Local Speech-to-Text (STT):**
   - High-accuracy offline transcription powered by local OpenAI Whisper models (Tiny, Base, Small, Medium).
   - Zero cloud audio streaming for absolute user privacy and offline operability.

2. **Neural Text-to-Speech (TTS):**
   - Ultra low-latency natural human speech synthesis using Kokoro-82M ONNX neural models.
   - High-fidelity voice styles with dynamic prosody and pitch calibration.

3. **Web Audio DSP & Spectrum Visualizer:**
   - Real-time Web Audio FFT (Fast Fourier Transform) frequency analysis.
   - Live spectrum frame buffers feeding dynamic viscous WebGL fluid orbs and procedural SVG facial liveliness.

4. **Living Mascot & Thinking Orbs:**
   - Procedural eye gazes, organic wander noise, deterministic blinking, and 16 emotive facial expressions.
   - Audio-reactive animation velocity scaling directly tied to user speech amplitude.

5. **Windows 11 Integration:**
   - Global system hotkeys, push-to-talk, desktop overlay HUD, and seamless clipboard injection.
   - Built on native Bun runtime, Electron, TypeScript, and Tailwind CSS.

---

## 🚀 Navigation & Key URLs

- [Overview](${SITE_INFO.url}/#overview): Architectural breakdown of the voice engine and audio pipeline.
- [Live Interactive Demo](${SITE_INFO.url}/#demo): Interactive voice visualizer and mascot demo in the browser.
- [Tech Stack](${SITE_INFO.url}/#tech-stack): Bun runtime, Web Audio DSP, Kokoro TTS, Whisper STT, and WebGL.
- [Why Sanctrum](${SITE_INFO.url}/#why-sanctrum): Comparison of zero-cloud local voice processing vs cloud assistants.
- [Download Release](${SITE_INFO.url}/#overview): Latest Windows 64-bit installer (.exe).
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
