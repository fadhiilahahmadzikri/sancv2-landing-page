import { NextResponse } from "next/server"

import { SANCTRUM_WINDOWS_DOWNLOAD } from "@/config/download"
import {
  findWindowsInstallerAsset,
  type GitHubReleaseAsset,
} from "@/lib/download-release"

const RELEASE_FETCH_REVALIDATE_SECONDS = 300
const DOWNLOAD_REDIRECT_CACHE_CONTROL = "public, max-age=60, s-maxage=300"
const GITHUB_RELEASE_HEADERS = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "sanctrum-landing",
} as const

export const dynamic = "force-dynamic"

export async function GET(): Promise<NextResponse> {
  return redirectToLatestWindowsInstaller()
}

export async function HEAD(): Promise<NextResponse> {
  return redirectToLatestWindowsInstaller()
}

async function redirectToLatestWindowsInstaller(): Promise<NextResponse> {
  const asset = await getLatestWindowsInstallerAsset()

  return createDownloadRedirect(asset.browserDownloadUrl, asset.name)
}

async function getLatestWindowsInstallerAsset(): Promise<GitHubReleaseAsset> {
  try {
    const response = await fetch(SANCTRUM_WINDOWS_DOWNLOAD.releaseApiUrl, {
      headers: GITHUB_RELEASE_HEADERS,
      next: { revalidate: RELEASE_FETCH_REVALIDATE_SECONDS },
    })

    if (!response.ok) {
      return getConfiguredWindowsInstallerAsset()
    }

    const release = (await response.json()) as unknown
    const asset = findWindowsInstallerAsset(release)

    return asset ?? getConfiguredWindowsInstallerAsset()
  } catch {
    return getConfiguredWindowsInstallerAsset()
  }
}

function getConfiguredWindowsInstallerAsset(): GitHubReleaseAsset {
  return {
    name: SANCTRUM_WINDOWS_DOWNLOAD.fileName,
    browserDownloadUrl: SANCTRUM_WINDOWS_DOWNLOAD.fallbackUrl,
  }
}

function createDownloadRedirect(
  downloadUrl: string,
  fileName: string
): NextResponse {
  const response = NextResponse.redirect(downloadUrl, 302)

  response.headers.set("Cache-Control", DOWNLOAD_REDIRECT_CACHE_CONTROL)
  response.headers.set(
    "Content-Disposition",
    `attachment; filename="${fileName}"`
  )

  return response
}
