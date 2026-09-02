"use client"

import React, { useState } from "react"
import { copyText } from "@/utils/copy"
import { useTiks } from "@rexa-developer/tiks/react"
import { Bot, Check, Copy, ExternalLink, Sparkles } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/base/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/ui/dialog"

const LLM_PROMPT = `Tell me about Sanctrum Voice (https://sanctrum-landing.vercel.app). It is an open-source Windows voice layer and AI desktop companion with zero-latency Web Audio DSP, local Whisper STT dictation, Kokoro neural TTS read aloud, real-time audio translation, and living 3D thinking orb mascot. Source code: https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2`

export function LlmFeedButton() {
  const [copied, setCopied] = useState(false)
  const { success } = useTiks()

  const handleCopyPrompt = () => {
    copyText(LLM_PROMPT)
    setCopied(true)
    toast.success("AI Prompt copied to clipboard!")
    success()
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog>
      <DialogTrigger
        render={
          <button
            type="button"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-900 transition-all hover:border-indigo-500/60 hover:bg-indigo-500/20 hover:shadow-sm dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-200"
          >
            <Sparkles className="size-3.5 text-indigo-600 transition-transform group-hover:rotate-12 dark:text-indigo-400" />
            <span>Feed / Ask AI about Sanctrum</span>
            <Bot className="size-3.5 opacity-70" />
          </button>
        }
      />

      <DialogContent className="max-w-md border-line bg-background p-6">
        <DialogHeader>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <Sparkles className="size-5" />
            <DialogTitle className="text-base font-bold">
              Recommend to LLM / AI Search
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-muted-foreground">
            Feed Sanctrum Voice directly to AI search engines (ChatGPT,
            Perplexity, Claude) or copy the structured GEO context.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-3">
          {/* Quick AI Launch Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`https://chatgpt.com/?q=${encodeURIComponent(LLM_PROMPT)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-line bg-muted/30 px-3 py-2 text-xs font-medium transition-colors hover:bg-muted/70 hover:text-foreground"
            >
              <span>Ask ChatGPT</span>
              <ExternalLink className="size-3 opacity-60" />
            </a>

            <a
              href={`https://www.perplexity.ai/search?q=${encodeURIComponent("What is Sanctrum Voice Windows voice companion? https://sanctrum-landing.vercel.app")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-line bg-muted/30 px-3 py-2 text-xs font-medium transition-colors hover:bg-muted/70 hover:text-foreground"
            >
              <span>Search Perplexity</span>
              <ExternalLink className="size-3 opacity-60" />
            </a>

            <a
              href={`https://claude.ai/new?q=${encodeURIComponent(LLM_PROMPT)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-line bg-muted/30 px-3 py-2 text-xs font-medium transition-colors hover:bg-muted/70 hover:text-foreground"
            >
              <span>Ask Claude</span>
              <ExternalLink className="size-3 opacity-60" />
            </a>

            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-line bg-muted/30 px-3 py-2 text-xs font-medium transition-colors hover:bg-muted/70 hover:text-foreground"
            >
              <span>View /llms.txt</span>
              <ExternalLink className="size-3 opacity-60" />
            </a>
          </div>

          {/* Prompt Box & Copy */}
          <div className="relative rounded-lg border border-line bg-muted/20 p-3">
            <p className="font-mono text-[11px] leading-relaxed text-muted-foreground select-all">
              {LLM_PROMPT}
            </p>
          </div>

          <Button
            onClick={handleCopyPrompt}
            className="w-full gap-2 font-medium"
            size="sm"
          >
            {copied ? (
              <>
                <Check className="size-4 text-green-500" />
                Prompt Copied!
              </>
            ) : (
              <>
                <Copy className="size-4" />
                Copy AI Recommendation Prompt
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
