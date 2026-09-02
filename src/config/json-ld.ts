import type { Person, SoftwareApplication, WithContext } from "schema-dts"

import { SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"

/**
 * Stable @id anchors so Google can merge JSON-LD nodes across separate
 * <script> blocks (and pages) into a single entity in the Knowledge Graph.
 * The "#fragment" keeps each node id distinct from the page URL itself.
 */
export const JSON_LD_ID = {
  website: `${SITE_INFO.url}/#website`,
  person: `${SITE_INFO.url}/#person`,
  app: `${SITE_INFO.url}/#app`,
} as const

export const personJsonLd: Person = {
  "@type": "Person",
  "@id": JSON_LD_ID.person,
  name: "Fadhiilah Ahmad Zikri",
  alternateName: ["Ahmad Zikri", "fadhiilahahmadzikri"],
  identifier: "fadhiilahahmadzikri",
  image: USER.avatar,
  url: SITE_INFO.url,
  sameAs: [
    "https://github.com/fadhiilahahmadzikri",
    "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2",
  ],
}

export const softwareAppJsonLd: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": JSON_LD_ID.app,
  name: "Sanctrum Voice",
  operatingSystem: "Windows 10, Windows 11",
  applicationCategory: "MultimediaApplication",
  description: SITE_INFO.description,
  url: SITE_INFO.url,
  downloadUrl:
    "https://github.com/fadhiilahahmadzikri/sanctrum-voice-v2/releases/latest",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: personJsonLd,
}
