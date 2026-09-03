import type { NavItem } from "@/types/nav"
import { HOME_SEO } from "@/config/seo"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: "Sanctrum Voice",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://sanctrum-landing.vercel.app",
  ogImage: USER.ogImage,
  title: HOME_SEO.title,
  description: HOME_SEO.description,
  keywords: [...HOME_SEO.keywords, "Fadhiilah Ahmad Zikri"],
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
