"use client"

import { copyText } from "@/utils/copy"
import { useTiks } from "@rexa-developer/tiks/react"
import { Download, Type } from "lucide-react"
import { toast } from "sonner"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/base/ui/context-menu"
import { GitHubIcon } from "@/components/icons"

import { getMarkSVG, SanctrumMark } from "./chanhdai-mark"
import { getWordmarkSVG } from "./chanhdai-wordmark"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { success } = useTiks()

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem
          onClick={() => {
            copyText(getMarkSVG())
            toast.success("Sanctrum Mark copied as SVG")
            success()
          }}
        >
          <SanctrumMark className="size-4" showLabel={false} />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            copyText(getWordmarkSVG())
            toast.success("Sanctrum Logotype copied as SVG")
            success()
          }}
        >
          <Type className="size-4" />
          Copy Logotype as SVG
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem
          render={
            <a
              href="https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="size-4" />
              Download Windows Release (.exe)
            </a>
          }
        />

        <ContextMenuItem
          render={
            <a
              href="https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="size-4" />
              GitHub Repository
            </a>
          }
        />
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default BrandContextMenu
