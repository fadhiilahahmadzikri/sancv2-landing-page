"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import { SiInstagram } from "@icons-pack/react-simple-icons"

import { LICENSE, SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { gsap } from "@/lib/gsap"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/base/ui/separator"
import { GitHubIcon } from "@/components/icons"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { SOCIAL } from "@/features/portfolio/data/social-links"

import { SanctrumMark } from "./chanhdai-mark"

const OPENPANEL_URL = "https://openpanel.dev"

const SITE_TITLE = "Sanctrum Voice"
const SITE_SUBTITLE = "The open-source Windows voice layer & companion"

/** Footer laid out as the title block of a technical drawing. */
export function SiteFooterCad() {
  const instagramLink = SOCIAL.instagram
  const githubLink = SOCIAL.github
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!footerRef.current) return

      // 1. Title Block Header Row Reveal
      const headerRow = footerRef.current.querySelector(".cad-header-row")
      if (headerRow) {
        gsap.fromTo(
          headerRow,
          {
            y: -18,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // 2. Technical Grid Fields Staggered Entrance
      const fields = footerRef.current.querySelectorAll(".cad-field-item")
      if (fields.length) {
        gsap.fromTo(
          fields,
          {
            y: 28,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.045,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // 3. Bottom Signature Bar Reveal
      const bottomBar = footerRef.current.querySelector(".cad-bottom-bar")
      if (bottomBar) {
        gsap.fromTo(
          bottomBar,
          {
            y: 18,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.8)",
            scrollTrigger: {
              trigger: bottomBar,
              start: "top 95%",
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
      className="max-w-screen overflow-x-clip select-none"
    >
      <div className="mx-auto max-w-6xl border-x border-line">
        <div className="screen-line-bottom">
          <div className="stripe-divider h-10" />
        </div>

        <div className="relative">
          <div className="cad-header-row screen-line-bottom flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 font-mono text-sm">
            <span className="font-medium text-foreground">{SITE_TITLE}</span>
            <span className="font-sans text-muted-foreground">
              {SITE_SUBTITLE}
            </span>
          </div>

          <dl className="grid grid-cols-2 gap-px bg-line font-mono md:grid-cols-4">
            <Field className="cad-field-item" label="Crafted by">
              <a
                className="link-underline"
                href={instagramLink.href}
                target="_blank"
                rel="noopener"
              >
                {instagramLink.handle}
              </a>
            </Field>

            <Field className="cad-field-item" label="Build">
              <span className="text-foreground">v3.1.2</span>
            </Field>

            <Field className="cad-field-item" label="Date">
              <time dateTime="2026-09-02">2026-09-02</time>
            </Field>

            <Field className="cad-field-item" label="Platform">
              Windows 11 / 10 x64
            </Field>

            <Field className="cad-field-item" label="Deployed on">
              <span className="inline-flex items-center gap-1">
                <span className="font-sans" aria-hidden>
                  ▲
                </span>
                <span>Vercel</span>
              </span>
            </Field>

            <Field className="cad-field-item" label="Source code">
              <a
                className="link-underline"
                href={SOURCE_CODE_GITHUB_URL}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </Field>

            <Field className="cad-field-item" label="License">
              <a
                className="link-underline"
                href={LICENSE.url}
                target="_blank"
                rel="noopener"
              >
                {LICENSE.name}
              </a>
            </Field>

            <Field className="cad-field-item" label="Typeface">
              Geist
            </Field>

            <Field className="cad-field-item col-span-2" label="Stack">
              <ul className="flex flex-col gap-0.5">
                <li>next@16.3.3</li>
                <li>react@19.2.8</li>
                <li>tailwindcss@4.3.3</li>
              </ul>
            </Field>

            <Field className="cad-field-item col-span-2" label="Analytics">
              <ul className="flex flex-col gap-0.5">
                <li>
                  <a
                    className="link-underline"
                    href={OPENPANEL_URL}
                    target="_blank"
                    rel="noopener"
                  >
                    OpenPanel
                  </a>
                </li>
                <li>Google Analytics</li>
              </ul>
            </Field>
          </dl>
        </div>

        <div className="cad-bottom-bar screen-line-top flex items-center gap-3 px-4 py-3 text-muted-foreground">
          <Link
            href="/"
            className="mr-auto flex items-center transition-opacity hover:opacity-80"
            aria-label="Sanctrum"
          >
            <SanctrumMark className="size-5.5" showLabel />
          </Link>

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={instagramLink.href}
            target="_blank"
            rel="noopener"
            aria-label="Instagram Profile"
          >
            <SiInstagram className="size-4 fill-current" />
          </a>

          <Separator
            orientation="vertical"
            className="data-vertical:h-4 data-vertical:self-center"
          />

          <a
            className="flex items-center transition-[color] hover:text-foreground"
            href={githubLink.href}
            target="_blank"
            rel="noopener"
            aria-label="GitHub Repository"
          >
            <GitHubIcon className="size-4" />
          </a>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}

function Field({
  className,
  label,
  children,
}: {
  className?: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1 bg-background px-4 py-3",
        className
      )}
    >
      <dt className="text-[0.625rem]/4 font-medium tracking-wider text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="text-sm">{children}</dd>
    </div>
  )
}
