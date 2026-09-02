import {
  Caveat,
  DynaPuff,
  IBM_Plex_Serif,
  Mochiy_Pop_One,
} from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { cn } from "@/lib/utils"

const fontSans = GeistSans
const fontMono = GeistMono

const fontSerif = IBM_Plex_Serif({
  weight: ["400"],
  display: "swap",
  variable: "--font-serif",
})

const fontHandwritten = Caveat({
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-handwritten",
})

export const fontMochiy = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mochiy",
})

export const fontDynaPuff = DynaPuff({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dynapuff",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontSerif.variable,
  fontHandwritten.variable,
  fontMochiy.variable,
  fontDynaPuff.variable,
  "[--font-sans:var(--font-geist-sans)]",
  "[--font-mono:var(--font-geist-mono)]"
)
