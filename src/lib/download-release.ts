import { SANCTRUM_WINDOWS_DOWNLOAD } from "@/config/download"

export type GitHubReleaseAsset = {
  name: string
  browserDownloadUrl: string
}

type GitHubReleaseAssetResponse = {
  name: string
  browser_download_url: string
}

const WINDOWS_INSTALLER_ASSET_PATTERN =
  /^Sanctrum-Setup-\d+\.\d+\.\d+-x64\.exe$/

export function findWindowsInstallerAsset(
  release: unknown
): GitHubReleaseAsset | null {
  const assets = getReleaseAssets(release)

  return (
    assets.find(isConfiguredWindowsInstallerAsset) ??
    assets.find(isVersionedWindowsInstallerAsset) ??
    null
  )
}

function getReleaseAssets(release: unknown): GitHubReleaseAsset[] {
  if (!isRecord(release) || !Array.isArray(release.assets)) {
    return []
  }

  return release.assets.filter(isGitHubReleaseAsset).map(toReleaseAsset)
}

function isConfiguredWindowsInstallerAsset(asset: GitHubReleaseAsset): boolean {
  return asset.name === SANCTRUM_WINDOWS_DOWNLOAD.fileName
}

function isVersionedWindowsInstallerAsset(asset: GitHubReleaseAsset): boolean {
  return WINDOWS_INSTALLER_ASSET_PATTERN.test(asset.name)
}

function isGitHubReleaseAsset(
  value: unknown
): value is GitHubReleaseAssetResponse {
  if (!isRecord(value)) {
    return false
  }

  return (
    typeof value.name === "string" &&
    typeof value.browser_download_url === "string"
  )
}

function toReleaseAsset(asset: GitHubReleaseAssetResponse): GitHubReleaseAsset {
  return {
    name: asset.name,
    browserDownloadUrl: asset.browser_download_url,
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}
