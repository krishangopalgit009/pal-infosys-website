import { technologyGroups } from '../../data/technology'
import { Icon } from '../ui/Icon'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function TechnologySection() {
  return (
    <Section>
      <div className="grid gap-10 xl:grid-cols-[0.68fr_1.32fr] xl:gap-16">
        <div className="xl:pt-3"><SectionHeading as="h2" eyebrow="Technology capability" title="Technology Choices Evaluated Against Business Needs" description="Technology decisions are evaluated against maintainability, operational reliability, scalability, team capability, integration requirements, and long-term cost—not simply what is currently popular." /><div className="mt-8 border-l-2 border-brand-red pl-5"><p className="type-card-body text-text-muted">The stack is supporting evidence for a sound solution—not the starting point for one.</p></div></div>
        <div className="motion-stagger grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {technologyGroups.map((group) => <article className="interactive-panel group bg-white p-6 transition-colors hover:bg-surface md:p-7" key={group.title}><div className="flex items-center justify-between"><Icon className="motion-icon text-brand-red" name={group.icon} /><span aria-hidden="true" className="h-px w-10 bg-brand-red/35 transition-all group-hover:w-16" /></div><h3 className="type-card mt-7 text-ink">{group.title}</h3><p className="type-card-body mt-3 text-text-muted">{group.description}</p><ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">{group.items.map((item) => <li className="type-nav border border-border bg-white px-3 py-1.5 text-ink" key={item}>{item}</li>)}</ul></article>)}
        </div>
      </div>
    </Section>
  )
}
