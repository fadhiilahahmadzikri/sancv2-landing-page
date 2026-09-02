"use client"

import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from "@bprogress/next/app"
import { SiInstagram } from "@icons-pack/react-simple-icons"
import {
  CornerDownLeftIcon,
  Cpu,
  DownloadIcon,
  ExternalLink,
  Flame,
  LayersIcon,
  MonitorIcon,
  MoonStarIcon,
  Sparkles,
  SunMediumIcon,
  Terminal,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useHotkeys } from "react-hotkeys-hook"

import { trackEvent } from "@/lib/events"
import { useClickSound } from "@/hooks/soundcn/use-click-sound"
import { useMutationObserver } from "@/hooks/use-mutation-observer"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { GitHubIcon } from "@/components/icons"
import { SOCIAL } from "@/features/portfolio/data/social-links"

import { SanctrumMark } from "./chanhdai-mark"
import { SearchIcon } from "./icons"
import { Button } from "./ui/button"
import { Kbd, KbdGroup } from "./ui/kbd"

type CommandKind = "command" | "page" | "link"

type CommandLinkItem = {
  title: string
  href: string
  kind: CommandKind
  icon?: React.ReactElement
  shortcut?: string
  keywords?: string[]
  openInNewTab?: boolean
}

const SANCTRUM_NAV_LINKS: CommandLinkItem[] = [
  {
    title: "Home",
    href: "/",
    kind: "page",
    icon: <SanctrumMark className="size-4.5" showLabel={false} />,
    shortcut: "GH",
    keywords: ["home", "main", "top", "hero"],
  },
  {
    title: "Overview",
    href: "/#overview",
    kind: "page",
    icon: <Terminal className="size-4 text-sky-500" />,
    shortcut: "GO",
    keywords: ["overview", "introduction", "features", "audio"],
  },
  {
    title: "Live Interactive Demo",
    href: "/#demo",
    kind: "page",
    icon: <Sparkles className="size-4 text-pink-500" />,
    shortcut: "GD",
    keywords: ["demo", "interactive", "mascot", "sound", "spectrum"],
  },
  {
    title: "Tech Stack & Neural Engine",
    href: "/#tech-stack",
    kind: "page",
    icon: <LayersIcon className="size-4 text-purple-500" />,
    shortcut: "GT",
    keywords: ["stack", "technology", "bun", "electron", "webgl", "dsp"],
  },
  {
    title: "Why Sanctrum",
    href: "/#why-sanctrum",
    kind: "page",
    icon: <Flame className="size-4 text-amber-500" />,
    shortcut: "GW",
    keywords: ["why", "architecture", "privacy", "zero cloud", "performance"],
  },
]

const SANCTRUM_DOWNLOAD_LINKS: CommandLinkItem[] = [
  {
    title: "Download Windows Installer (.exe)",
    href: "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2/releases/latest",
    kind: "link",
    icon: <DownloadIcon className="size-4 text-emerald-500" />,
    shortcut: "DL",
    keywords: ["download", "install", "windows", "setup", "release", "exe"],
    openInNewTab: true,
  },
  {
    title: "View All GitHub Releases",
    href: "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2/releases",
    kind: "link",
    icon: <ExternalLink className="size-4 text-muted-foreground" />,
    shortcut: "GR",
    keywords: ["releases", "changelog", "versions", "github"],
    openInNewTab: true,
  },
]

const SANCTRUM_COMMUNITY_LINKS: CommandLinkItem[] = [
  {
    title: "GitHub Repository",
    href: "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2",
    kind: "link",
    icon: <GitHubIcon className="size-4" />,
    shortcut: "GG",
    keywords: ["github", "repo", "source", "code", "open-source"],
    openInNewTab: true,
  },
  {
    title: "Instagram",
    href: SOCIAL.instagram.href,
    kind: "link",
    icon: <SiInstagram className="size-4 fill-current text-pink-500" />,
    keywords: ["instagram", "creator", "social"],
    openInNewTab: true,
  },
  {
    title: "Report an Issue / Request Feature",
    href: "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2/issues",
    kind: "link",
    icon: <Cpu className="size-4 text-rose-500" />,
    keywords: ["issue", "bug", "feature", "help", "support"],
    openInNewTab: true,
  },
]

export function CommandMenu({
  enabledHotkeys = false,
}: {
  docs?: unknown[]
  blocks?: unknown[]
  enabledHotkeys?: boolean
}) {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [selectedCommandKind, setSelectedCommandKind] =
    useState<CommandKind | null>(null)
  const [click] = useClickSound()

  useHotkeys(
    "mod+k, slash",
    (e) => {
      e.preventDefault()

      setOpen((open) => {
        if (!open) {
          trackEvent({
            name: "open_command_menu",
            properties: {
              method: "keyboard",
              key: e.key === "/" ? "/" : e.metaKey ? "cmd+k" : "ctrl+k",
            },
          })
        }
        return !open
      })
    },
    { enabled: enabledHotkeys }
  )

  const handleOpenLink = useCallback(
    (href: string, openInNewTab = false) => {
      setOpen(false)

      trackEvent({
        name: "command_menu_action",
        properties: {
          action: "navigate",
          href: href,
          open_in_new_tab: openInNewTab,
        },
      })

      if (openInNewTab) {
        window.open(href, "_blank", "noopener")
      } else {
        router.push(href)
      }
    },
    [router]
  )

  const createThemeHandler = useCallback(
    (theme: "light" | "dark" | "system") => () => {
      click()
      setOpen(false)

      trackEvent({
        name: "command_menu_action",
        properties: {
          action: "change_theme",
          theme: theme,
        },
      })

      setTheme(theme)
    },
    [click, setTheme]
  )

  const handleLinkHighlight = useCallback((link: CommandLinkItem) => {
    setSelectedCommandKind(link.kind)
  }, [])

  const handleCommandHighlight = useCallback(() => {
    setSelectedCommandKind("command")
  }, [])

  return (
    <>
      <CommandMenuTrigger
        onClick={() => {
          setOpen(true)
          trackEvent({
            name: "open_command_menu",
            properties: {
              method: "click",
            },
          })
        }}
      />

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandMenuInput />

        <div className="rounded-xl bg-background ring-1 ring-border">
          <CommandList className="min-h-72 scroll-fade">
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandLinkGroup
              heading="Navigation"
              links={SANCTRUM_NAV_LINKS}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />

            <CommandLinkGroup
              heading="Releases & Downloads"
              links={SANCTRUM_DOWNLOAD_LINKS}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />

            <CommandLinkGroup
              heading="Open Source & Community"
              links={SANCTRUM_COMMUNITY_LINKS}
              onLinkHighlight={handleLinkHighlight}
              onLinkSelect={handleOpenLink}
            />

            <CommandGroup heading="Theme">
              <CommandMenuItem
                keywords={["theme", "light", "white"]}
                onHighlight={handleCommandHighlight}
                onSelect={createThemeHandler("light")}
              >
                <SunMediumIcon className="size-4 text-amber-500" />
                Light
              </CommandMenuItem>
              <CommandMenuItem
                keywords={["theme", "dark", "night", "black"]}
                onHighlight={handleCommandHighlight}
                onSelect={createThemeHandler("dark")}
              >
                <MoonStarIcon className="size-4 text-indigo-400" />
                Dark
              </CommandMenuItem>
              <CommandMenuItem
                keywords={["theme", "system", "device", "auto"]}
                onHighlight={handleCommandHighlight}
                onSelect={createThemeHandler("system")}
              >
                <MonitorIcon className="size-4 text-muted-foreground" />
                System
              </CommandMenuItem>
            </CommandGroup>
          </CommandList>
        </div>

        <CommandMenuFooter selectedCommandKind={selectedCommandKind} />
      </CommandDialog>
    </>
  )
}

export default CommandMenu

function CommandMenuTrigger({ ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="command-menu-trigger"
      className="gap-1.5 border-none px-1.5 text-muted-foreground will-change-[scale] select-none"
      variant="ghost"
      size="sm"
      {...props}
    >
      <SearchIcon />

      <span className="font-sans text-sm/4 font-medium sm:hidden">Search…</span>

      <KbdGroup className="hidden gap-0.75 sm:in-[.os-macos_&]:flex">
        <Kbd className="w-5 min-w-auto">⌘</Kbd>
        <Kbd className="w-5 min-w-auto">K</Kbd>
      </KbdGroup>

      <KbdGroup className="hidden gap-0.75 sm:not-[.os-macos_&]:flex">
        <Kbd>Ctrl</Kbd>
        <Kbd className="w-5 min-w-auto">K</Kbd>
      </KbdGroup>
    </Button>
  )
}

function CommandMenuInput() {
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    if (searchValue.length >= 2) {
      const timeoutId = setTimeout(() => {
        trackEvent({
          name: "command_menu_search",
          properties: {
            query: searchValue,
            query_length: searchValue.length,
          },
        })
      }, 500)

      return () => clearTimeout(timeoutId)
    }
  }, [searchValue])

  return (
    <CommandInput
      placeholder="Search Sanctrum documentation, stack, or downloads…"
      value={searchValue}
      onValueChange={setSearchValue}
    />
  )
}

function CommandMenuItem({
  children,
  onHighlight,
  ...props
}: React.ComponentProps<typeof CommandItem> & {
  onHighlight?: () => void
  "data-selected"?: string
  "aria-selected"?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  useMutationObserver(ref, (mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-selected" &&
        ref.current?.getAttribute("aria-selected") === "true"
      ) {
        onHighlight?.()
      }
    })
  })

  return (
    <CommandItem ref={ref} {...props}>
      {children}
    </CommandItem>
  )
}

function CommandLinkGroup({
  heading,
  links,
  onLinkHighlight,
  onLinkSelect,
}: {
  heading: string
  links: CommandLinkItem[]
  onLinkHighlight: (link: CommandLinkItem) => void
  onLinkSelect: (href: string, openInNewTab?: boolean) => void
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link, idx) => {
        return (
          <CommandMenuItem
            key={`${heading}-${link.title}-${link.href || idx}`}
            keywords={link.keywords}
            onHighlight={() => onLinkHighlight(link)}
            onSelect={() => onLinkSelect(link.href, link.openInNewTab)}
          >
            {link.icon}

            <p className="line-clamp-1">{link.title}</p>

            {link.shortcut && (
              <CommandShortcut className="font-mono tracking-[0.2em] max-sm:hidden">
                {link.shortcut}
              </CommandShortcut>
            )}
          </CommandMenuItem>
        )
      })}
    </CommandGroup>
  )
}

const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
  command: "Run command",
  page: "Go to page",
  link: "Open link",
}

function CommandMenuFooter({
  selectedCommandKind,
}: {
  selectedCommandKind: CommandKind | null
}) {
  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 rounded-b-2xl px-4 text-xs font-medium">
        <SanctrumMark
          className="size-5 text-muted-foreground"
          showLabel={false}
        />

        <div className="flex items-center gap-2 max-sm:hidden">
          <span>{ENTER_ACTION_LABELS[selectedCommandKind ?? "page"]}</span>
          <Kbd>
            <CornerDownLeftIcon />
          </Kbd>
        </div>
      </div>
    </>
  )
}
