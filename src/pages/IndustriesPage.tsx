import { industryDetails, industriesDecisionFrame, industriesHero } from '../data/industries'
import { pageMeta } from '../data/page-meta'
import { PageHero } from '../components/sections/PageHero'
import { CTASection } from '../components/ui/CTASection'
import { IndustryOperationsPanel } from '../components/ui/IndustryOperationsPanel'
import { Section } from '../components/ui/Section'
import { PageDecisionFrame } from '../components/ui/PageDecisionFrame'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function IndustriesPage() {
  usePageMetadata(pageMeta.industries)
  return <>
    <PageHero content={industriesHero} />
    <Section tone="muted"><PageDecisionFrame content={industriesDecisionFrame} /></Section>
    <Section><div className="grid gap-6">{industryDetails.map((industry, index) => <IndustryOperationsPanel content={industry} index={index} key={industry.title} />)}</div></Section>
    <CTASection cta="Discuss Your Operational Workflow" description="Talk through the operational workflows, systems, and information flows that shape your industry and organization." title="Make Technology Fit the Work." to="/contact" />
  </>
}
