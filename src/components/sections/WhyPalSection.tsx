import { valuePoints } from '../../data/home'
import { Icon } from '../ui/Icon'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function WhyPalSection() {
  return (
    <Section tone="dark">
      <div className="grid gap-10 xl:grid-cols-[0.7fr_1.3fr] xl:gap-16">
        <div className="xl:pt-3"><SectionHeading as="h2" eyebrow="Engineering credibility" inverse title="Engineering Decisions That Support the Business Over Time" description="Reliable software depends on deliberate choices around workflows, architecture, security, data, integrations, and the next change the operation will need to make." /><div className="mt-8 border-l-2 border-brand-red pl-5"><p className="type-card-body text-white/65">Credibility is demonstrated through the questions a system can answer: how work is controlled, where data moves, and how the next change can be made responsibly.</p></div><Button className="mt-8 border-white/35 bg-transparent !text-white hover:!border-white hover:!bg-white hover:!text-ink" to="/technology" variant="secondary">Explore Our Engineering Approach</Button></div>
        <div className="motion-stagger grid gap-px border border-white/15 bg-white/15 md:grid-cols-2">
          {valuePoints.map((point, index) => <article className="interactive-panel group bg-ink p-6 transition-colors hover:bg-ink-subtle md:p-7" key={point.title}><div className="flex items-center justify-between"><Icon className="motion-icon text-brand-red" name={point.icon} /><span className="font-heading text-sm text-white/25">0{index + 1}</span></div><h3 className="type-card mt-7 text-white">{point.title}</h3><p className="type-card-body mt-3 text-white/65">{point.description}</p></article>)}
        </div>
      </div>
    </Section>
  )
}
