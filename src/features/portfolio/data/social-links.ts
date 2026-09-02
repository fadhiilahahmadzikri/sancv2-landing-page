import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  instagram: {
    title: "Instagram",
    handle: "@fdhlhzkri",
    href: "https://instagram.com/fdhlhzkri",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "fadhiilahahmadzikri",
    href: "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2",
    sameAs: true,
  },
  x: {
    title: "X",
    handle: "@fdhlhzkri",
    href: "https://x.com/fdhlhzkri",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "",
    href: "",
    sameAs: false,
  },
  dailydotdev: {
    title: "daily.dev",
    handle: "",
    href: "",
    sameAs: false,
  },
  discord: {
    title: "Discord",
    handle: "",
    href: "",
  },
  youtube: {
    title: "YouTube",
    handle: "",
    href: "",
    sameAs: false,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
