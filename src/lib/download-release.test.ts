import { describe, expect, it } from "vitest"

import { SANCTRUM_WINDOWS_DOWNLOAD } from "@/config/download"
import { findWindowsInstallerAsset } from "@/lib/download-release"

describe("findWindowsInstallerAsset", () => {
  it("prefers the configured Windows installer asset", () => {
    const release = {
      assets: [
        {
          name: "latest.yml",
          browser_download_url: "https://example.com/latest.yml",
        },
        {
          name: SANCTRUM_WINDOWS_DOWNLOAD.fileName,
          browser_download_url: SANCTRUM_WINDOWS_DOWNLOAD.fallbackUrl,
        },
      ],
    }

    expect(findWindowsInstallerAsset(release)).toEqual({
      name: SANCTRUM_WINDOWS_DOWNLOAD.fileName,
      browserDownloadUrl: SANCTRUM_WINDOWS_DOWNLOAD.fallbackUrl,
    })
  })

  it("falls back to any versioned Sanctrum Windows installer", () => {
    const release = {
      assets: [
        {
          name: "Sanctrum-Setup-3.1.7-x64.exe",
          browser_download_url: "https://example.com/Sanctrum-Setup-3.1.7.exe",
        },
      ],
    }

    expect(findWindowsInstallerAsset(release)).toEqual({
      name: "Sanctrum-Setup-3.1.7-x64.exe",
      browserDownloadUrl: "https://example.com/Sanctrum-Setup-3.1.7.exe",
    })
  })

  it("ignores non-installer release assets", () => {
    const release = {
      assets: [
        {
          name: "Sanctrum-Setup-3.1.7-x64.exe.blockmap",
          browser_download_url: "https://example.com/blockmap",
        },
      ],
    }

    expect(findWindowsInstallerAsset(release)).toBeNull()
  })
})
