import { enterpriseCapabilities } from '../data/home'
import { pageMeta } from '../data/page-meta'
import { serviceGroups, servicesContext, servicesDecisionFrame, servicesHero } from '../data/services'
import { serviceDetailPaths } from '../data/service-landing-pages'
import { PageHero } from '../components/sections/PageHero'
import { CTASection } from '../components/ui/CTASection'
import { ServiceCapabilityRow } from '../components/ui/ServiceCapabilityRow'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PageDecisionFrame } from '../components/ui/PageDecisionFrame'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function ServicesPage() {
  usePageMetadata(pageMeta.services)
  return <>
    <PageHero content={servicesHero} />
    <Section tone="muted"><PageDecisionFrame content={servicesDecisionFrame} /></Section>
    <Section><div className="grid gap-20 xl:gap-24">{serviceGroups.map((group, groupIndex) => {
      const groupedServices = group.services.map((title) => enterpriseCapabilities.find((service) => service.title === title)).filter((service) => service !== undefined)
      return <section aria-labelledby={`service-group-${group.number}`} className={`grid gap-10 ${groupIndex > 0 ? 'border-t border-border pt-16 xl:pt-20' : ''}`} key={group.title}>
        <div className="grid gap-6 xl:grid-cols-[0.22fr_0.78fr_1fr] xl:items-end">
          <p aria-hidden="true" className="font-heading text-[clamp(3.75rem,5vw,5.5rem)] font-bold leading-none tracking-[-0.08em] text-brand-red/20">{group.number}</p>
          <div><p className="type-kicker text-brand-red">Service group</p><h2 className="type-section mt-4 text-ink" id={`service-group-${group.number}`}>{group.title}</h2></div>
          <p className="type-body max-w-3xl border-l-2 border-brand-red pl-5 text-text-muted">{group.description}</p>
        </div>
        <div className="motion-stagger grid gap-6">{groupedServices.map((service) => <ServiceCapabilityRow content={service} detailPath={serviceDetailPaths[service.title]} headingLevel="h3" index={enterpriseCapabilities.findIndex((capability) => capability.title === service.title)} key={service.title} />)}</div>
      </section>
    })}</div></Section>
    <Section tone="dark"><div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-end"><SectionHeading as="h2" inverse {...servicesContext} /><p className="type-card-body border-l border-white/15 pl-5 text-white/65">An engagement may combine product engineering, data work, integrations, modernization, and support. The service model should follow the business context—not force it into a single category.</p></div></Section>
    <CTASection cta="Discuss Your Software Requirement" description="Bring the system, workflow, product question, or modernization constraint you need to address." title="Start With the Business Need." to="/contact" />
  </>
}
