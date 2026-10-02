import { aboutDecisionFrame, aboutHero, coreValues, engineeringMindset, howWeWork, missionVision, whyPal } from '../data/about'
import { AboutPointerHub } from '../components/sections/AboutPointerHub'
import { CompanyTimelineSection } from '../components/sections/CompanyTimelineSection'
import { EngineeringCultureSection } from '../components/sections/EngineeringCultureSection'
import { pageMeta } from '../data/page-meta'
import { PageHero } from '../components/sections/PageHero'
import { CTASection } from '../components/ui/CTASection'
import { DetailCard } from '../components/ui/DetailCard'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { PageDecisionFrame } from '../components/ui/PageDecisionFrame'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function AboutPage() {
  usePageMetadata(pageMeta.about)
  return <>
    <PageHero content={aboutHero} />
    <Section tone="muted"><PageDecisionFrame content={aboutDecisionFrame} /></Section>
    <AboutPointerHub />
    <CompanyTimelineSection />
    <EngineeringCultureSection />
    <Section tone="muted"><div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-end"><SectionHeading as="h2" eyebrow="Purpose" title="A Clear Direction for the Work" description="Our mission and vision describe the role reliable software can play in the way an organization operates, grows, and adapts." /><p className="type-card-body border-l border-border pl-5 text-text-muted">The goal is not technology for its own sake. It is a clearer, more dependable foundation for the work a business needs to do.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2">{missionVision.map((item) => <DetailCard content={item} key={item.title} />)}</div></Section>
    <Section><SectionHeading as="h2" eyebrow="Core values" title="Principles That Shape Everyday Decisions" description="The choices made during discovery, architecture, implementation, and change determine whether a system remains useful over time." /><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{coreValues.map((item) => <DetailCard content={item} key={item.title} />)}</div></Section>
    <Section tone="dark"><div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:gap-16"><SectionHeading as="h2" inverse eyebrow="How we work" title="Collaborative by Design" description="A structured conversation keeps operational context, technical choices, and validation connected throughout delivery." /><div className="grid gap-px border border-white/15 bg-white/15 md:grid-cols-3">{howWeWork.map((item, index) => <article className="bg-ink p-6" key={item.title}><p className="type-kicker text-brand-red">0{index + 1}</p><h3 className="type-card mt-5 text-white">{item.title}</h3><p className="type-card-body mt-3 text-white/65">{item.description}</p></article>)}</div></div></Section>
    <Section><SectionHeading as="h2" eyebrow="Why PAL INFOSYS" title="Engineering With the Business in Mind" description="Our approach keeps software decisions connected to operational needs, maintainability, and the next change the business needs to make." /><div className="mt-10 grid gap-5 md:grid-cols-3">{whyPal.map((item) => <DetailCard content={item} key={item.title} />)}</div></Section>
    <Section tone="muted"><div className="border-l-2 border-brand-red pl-6"><SectionHeading as="h2" {...engineeringMindset} /></div></Section>
    <CTASection cta="Discuss Your Engineering Priorities" description="Bring the business challenge, workflow, or system constraint you need to address. We can begin with the operating context and a practical next step." title="Build a More Dependable Foundation." to="/contact" />
  </>
}
