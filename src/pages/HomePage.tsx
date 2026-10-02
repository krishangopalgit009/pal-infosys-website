import { pageMeta } from '../data/page-meta'
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection'
import { ChallengesSection } from '../components/sections/ChallengesSection'
import { FeaturedWorkSection } from '../components/sections/FeaturedWorkSection'
import { HeroSection } from '../components/sections/HeroSection'
import { IndustryExpertiseSection } from '../components/sections/IndustryExpertiseSection'
import { EngagementModelSection } from '../components/sections/EngagementModelSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { TechnologySection } from '../components/sections/TechnologySection'
import { WhyPalSection } from '../components/sections/WhyPalSection'
import { WhatWeBuildSection } from '../components/sections/WhatWeBuildSection'
import { CTASection } from '../components/ui/CTASection'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function HomePage() {
  usePageMetadata(pageMeta.home)

  return (
    <>
      <HeroSection />
      <ChallengesSection />
      <WhatWeBuildSection />
      <CapabilitiesSection />
      <FeaturedWorkSection />
      <IndustryExpertiseSection />
      <WhyPalSection />
      <TechnologySection />
      <ProcessSection />
      <EngagementModelSection />
      <CTASection
        cta="Discuss Your Project"
        description="Whether you are replacing a legacy system, building a SaaS platform, connecting essential applications, or digitizing a complex workflow, start with the outcome your team needs to achieve."
        title="Move From Operational Friction to Clearer Outcomes"
        to="/contact"
      />
    </>
  )
}
