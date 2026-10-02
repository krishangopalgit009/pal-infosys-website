import { useParams } from 'react-router'
import { enterpriseCapabilities } from '../data/home'
import { serviceLandingPages } from '../data/service-landing-pages'
import { pageMeta } from '../data/page-meta'
import { NotFoundPage } from './NotFoundPage'
import { PageHero } from '../components/sections/PageHero'
import { CTASection } from '../components/ui/CTASection'
import { PageDecisionFrame } from '../components/ui/PageDecisionFrame'
import { ServiceCapabilityRow } from '../components/ui/ServiceCapabilityRow'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function ServiceLandingPage() {
  const { slug } = useParams()
  const page = serviceLandingPages.find((item) => item.slug === slug)
  const capability = enterpriseCapabilities.find((item) => item.title === page?.serviceTitle)
  usePageMetadata(page?.metadata ?? pageMeta.notFound)

  if (!page || !capability) return <NotFoundPage />

  return <>
    <PageHero content={page.hero} />
    <Section tone="muted"><PageDecisionFrame content={page.decisionFrame} /></Section>
    <Section>
      <ServiceCapabilityRow content={capability} headingLevel="h2" index={0} />
      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between"><p className="type-card-body max-w-3xl text-text-muted">Continue the discussion through a related system direction, or bring the operational context to PAL INFOSYS directly.</p><Button className="shrink-0" to={page.relatedLink.to} variant="text">{page.relatedLink.label}</Button></div>
    </Section>
    <CTASection cta={page.hero.cta?.label ?? 'Discuss Your Project'} description="Bring the business process, system constraint, or product question to a practical engineering conversation." title="Start With the Operational Context." to="/contact" />
  </>
}
