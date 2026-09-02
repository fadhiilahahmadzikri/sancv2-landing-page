import type { Metadata } from "next"
import type { ProfilePage, WithContext } from "schema-dts"

import { JSON_LD_ID } from "@/config/json-ld"
import { JsonLdScript } from "@/lib/json-ld"
import { absoluteUrl } from "@/lib/utils"
import { CompanyDock } from "@/components/company-dock"
import { FeatureDemoShowcase } from "@/components/feature-demo-showcase"
import { TechStackMeshDock } from "@/components/tech-stack-mesh-dock"
import { WhySanctrumTimeline } from "@/components/why-sanctrum-timeline"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { USER } from "@/features/portfolio/data/user"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLdScript data={getProfilePageJsonLd()} />

      <div className="w-full [--separator-height:--spacing(8)] **:data-[slot=panel]:scroll-mt-[calc(var(--header-height)+var(--separator-height))]">
        {/* Full Viewport Width Hero Section */}
        <ProfileHeader />

        {/* Hatched Diagonal Stripe Rail Separator (Above Company Dock) */}
        <div className="relative w-full border-b border-line">
          <div className="mx-auto max-w-6xl border-x border-line">
            <div className="stripe-divider h-8 w-full" />
          </div>
        </div>

        {/* Bridging Statement & 7-Column Tech Trust Dock Section */}
        <CompanyDock />

        {/* Hatched Diagonal Stripe Rail Separator (Below Company Dock) */}
        <div className="relative w-full border-b border-line">
          <div className="mx-auto max-w-6xl border-x border-line">
            <div className="stripe-divider h-8 w-full" />
          </div>
        </div>

        {/* Section 3: Payload-style Showcase with Screen Record Placeholder */}
        <FeatureDemoShowcase />

        {/* Hatched Diagonal Stripe Rail Separator with Continuous Horizontal & Vertical Rails */}
        <div className="relative w-full border-b border-line">
          <div className="mx-auto max-w-6xl border-x border-line">
            <div className="stripe-divider h-8 w-full" />
          </div>
        </div>

        {/* Section 4: Frontier Science / Tech Stack Mesh Dock */}
        <TechStackMeshDock />

        {/* Hatched Diagonal Stripe Rail Separator */}
        <div className="relative w-full border-b border-line">
          <div className="mx-auto max-w-6xl border-x border-line">
            <div className="stripe-divider h-8 w-full" />
          </div>
        </div>

        {/* Section 5: Why Sanctrum Interactive Timeline Grid */}
        <WhySanctrumTimeline />
      </div>
    </>
  )
}

function getProfilePageJsonLd(): WithContext<ProfilePage> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": absoluteUrl("/"),
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    // Reference the Person defined in the WebSite node (rendered globally in
    // the root layout) so both blocks resolve to the same entity.
    mainEntity: { "@id": JSON_LD_ID.person },
  }
}
