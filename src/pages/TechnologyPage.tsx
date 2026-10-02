import { technologyDecisionAreas, technologyDecisionFrame, technologyGroups, technologyHero, technologyPrinciples } from '../data/technology'
import { ArchitectureSystemSection } from '../components/sections/ArchitectureSystemSection'
import { pageMeta } from '../data/page-meta'
import { PageHero } from '../components/sections/PageHero'
import { CTASection } from '../components/ui/CTASection'
import { DetailCard } from '../components/ui/DetailCard'
import { Icon } from '../components/ui/Icon'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PageDecisionFrame } from '../components/ui/PageDecisionFrame'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function TechnologyPage() {
  usePageMetadata(pageMeta.technology)
  return <>
    <PageHero content={technologyHero} />
    <Section tone="muted"><PageDecisionFrame content={technologyDecisionFrame} /></Section>
    <ArchitectureSystemSection />
    <Section><div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-end"><SectionHeading as="h2" eyebrow="Technology groups" title="A Focused, Practical Technology Foundation" description="Technology choices support the application, data, integration, and operational requirements of the system—not a generic tool catalogue." /><p className="type-body border-l-2 border-brand-red pl-5 text-text-muted">Each category supports a different part of the operating system: the services, the user experience, the data, the platform, and the connections between them.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2">{technologyGroups.map((group) => <article className="border border-border bg-white p-6 md:p-8" key={group.title}><Icon className="text-brand-red" name={group.icon} /><h3 className="type-card mt-7 text-ink">{group.title}</h3><p className="type-card-body mt-3 text-text-muted">{group.description}</p><ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">{group.items.map((item) => <li className="type-nav border border-border bg-surface px-3 py-1.5 text-ink" key={item}>{item}</li>)}</ul></article>)}</div></Section>
    <Section tone="dark"><div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-end"><SectionHeading as="h2" inverse eyebrow="Architecture decisions" title="Technology Is Only Useful When the Foundation Holds" description="Architecture, security, performance, and modernization are the engineering decisions that determine how a system behaves after launch." /><div className="grid border border-white/15 sm:grid-cols-2">{technologyDecisionAreas.map((area) => <article className="border-b border-white/15 p-6 sm:border-r sm:p-7" key={area.title}><p className="type-kicker text-brand-red">{area.title}</p><p className="type-card-body mt-4 text-white/70">{area.description}</p></article>)}</div></div></Section>
    <Section tone="muted"><SectionHeading as="h2" eyebrow="Engineering approach" title="Technology in Service of the System" description="These principles keep implementation choices connected to the work the system must support over time." /><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{technologyPrinciples.map((principle) => <DetailCard content={principle} key={principle.title} />)}</div></Section>
    <CTASection cta="Discuss Your System Architecture" description="Talk through the architecture, integration, data, or modernization decisions in front of your team." title="Choose Technology for the Work It Needs to Support." to="/contact" />
  </>
}
