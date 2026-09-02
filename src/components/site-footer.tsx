"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { SiInstagram } from "@icons-pack/react-simple-icons"

import { LICENSE } from "@/config/site"
import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"
import { GitHubIcon } from "@/components/icons"
import { LlmFeedButton } from "@/components/llm-feed-button"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { SOCIAL } from "@/features/portfolio/data/social-links"

export function SiteFooter() {
  const instagramLink = SOCIAL.instagram
  const githubLink = SOCIAL.github
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!footerRef.current) return

      // 1. Definition List Rows Staggered Slide In
      const items = footerRef.current.querySelectorAll(".footer-dl-item")
      if (items.length) {
        gsap.fromTo(
          items,
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.045,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // 2. Social Media Bar Spring Pop In
      const socialBar = footerRef.current.querySelector(".footer-social-bar")
      if (socialBar) {
        gsap.fromTo(
          socialBar,
          {
            scale: 0.85,
            opacity: 0,
            y: 20,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: socialBar,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        )
      }
    },
    { scope: footerRef }
  )

  return (
    <footer
      ref={footerRef}
      className="max-w-screen overflow-x-clip px-2 select-none"
    >
      <div className="mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom">
          <div className="stripe-divider h-12" />
        </div>

        <dl className="flex flex-col gap-4 py-8 font-mono [&_dd]:text-sm [&_dt]:text-right [&_dt]:text-sm [&_dt]:text-muted-foreground [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
          <Item className="footer-dl-item">
            <dt>Crafted by</dt>
            <dd>
              <a
                className="link-underline"
                href={instagramLink.href}
                target="_blank"
                rel="noopener"
              >
                {instagramLink.handle}
              </a>
            </dd>
          </Item>

          <Item className="footer-dl-item">
            <dt>Version</dt>
            <dd>v3.1.3</dd>
          </Item>

          <Item className="footer-dl-item">
            <dt>Platform</dt>
            <dd>Windows 11 / 10 x64</dd>
          </Item>

          <Item className="footer-dl-item">
            <dt>Deployed on</dt>
            <dd>
              <a
                className="link-underline"
                href="https://sanctrum-landing.vercel.app"
                target="_blank"
                rel="noopener"
              >
                Vercel (sanctrum-landing.vercel.app)
              </a>
            </dd>
          </Item>

          <Item className="footer-dl-item">
            <dt>Stack</dt>
            <dd>
              <ul>
                <li>Bun & Electron Core</li>
                <li>Whisper STT & Kokoro TTS</li>
                <li>Next.js 16 & Tailwind v4</li>
              </ul>
            </dd>
          </Item>

          <Item className="footer-dl-item">
            <dt>Electron App Repo</dt>
            <dd>
              <a
                className="link-underline"
                href="https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2"
                target="_blank"
                rel="noopener"
              >
                sanctrum-voice-v2
              </a>
            </dd>
          </Item>

          <Item className="footer-dl-item">
            <dt>Landing Page Repo</dt>
            <dd>
              <a
                className="link-underline"
                href="https://github.com/fadhiilahahmadzikri/sancv2-landing-page"
                target="_blank"
                rel="noopener"
              >
                sancv2-landing-page
              </a>
            </dd>
          </Item>

          <Item className="footer-dl-item">
            <dt>License</dt>
            <dd>
              <a
                className="link-underline"
                href={LICENSE.url}
                target="_blank"
                rel="noopener"
              >
                {LICENSE.name}
              </a>
            </dd>
          </Item>

          <Item className="footer-dl-item">
            <dt>AI Discovery (GEO)</dt>
            <dd className="pt-1">
              <LlmFeedButton />
            </dd>
          </Item>
        </dl>

        <div className="footer-social-bar screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={instagramLink.href}
              target="_blank"
              rel="noopener"
              aria-label="Instagram Profile"
            >
              <SiInstagram className="size-4 fill-current" />
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={githubLink.href}
              target="_blank"
              rel="noopener"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}

function Item({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("grid grid-cols-2 gap-4", className)} {...props} />
}
