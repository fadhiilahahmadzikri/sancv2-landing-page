export const SANCTRUM_WINDOWS_DOWNLOAD = {
  appVersion: "3.1.6",
  path: "/download/windows",
  fileName: "Sanctrum-Setup-3.1.6-x64.exe",
  releaseApiUrl:
    "https://api.github.com/repos/fadhiilahahmadzikri/sanctrum-voice-v2/releases/latest",
  fallbackUrl:
    "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2/releases/latest/download/Sanctrum-Setup-3.1.6-x64.exe",
} as const

export function getWindowsDownloadUrl(origin: string): string {
  return new URL(SANCTRUM_WINDOWS_DOWNLOAD.path, origin).toString()
}
