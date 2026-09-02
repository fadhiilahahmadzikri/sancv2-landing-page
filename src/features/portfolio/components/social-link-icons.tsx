import { SiInstagram } from "@icons-pack/react-simple-icons"

import {
  DailyDotDevIcon,
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons"
import type { SocialName } from "@/features/portfolio/data/social-links"

/**
 * Presentation binding for social profiles. Kept separate from the social
 * data so the data layer stays JSX-free. Keyed by `SocialName` so it stays
 * exhaustive with the registry.
 */
export const SOCIAL_ICONS: Record<SocialName, React.JSX.Element> = {
  instagram: <SiInstagram className="size-4 fill-current" />,
  x: <XIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  dailydotdev: <DailyDotDevIcon />,
  discord: <DiscordIcon />,
  youtube: <YouTubeIcon />,
}
