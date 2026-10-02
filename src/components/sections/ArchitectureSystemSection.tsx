import { architectureLayers, crossCuttingConcerns } from '../../data/technology'
import { Icon } from '../ui/Icon'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function ArchitectureSystemSection() {
  return (
    <Section tone="dark">
      <div className="grid gap-10 xl:grid-cols-[1.24fr_0.76fr] xl:gap-16">
        <div>
          <SectionHeading as="h2" inverse eyebrow="Reference system architecture" title="A System Is More Than a Technology Stack" description="This representative architecture shows how interface, application, workflow, data, platform, and integration decisions can work together as one engineering foundation." />
          <ol aria-label="Representative system architecture" className="architecture-system-map mt-10 grid gap-3">
            {architectureLayers.map((layer, index) => <li className="relative" key={layer.label}>
              <div className="relative grid gap-5 border border-white/15 bg-white/[0.035] p-5 sm:grid-cols-[3.75rem_1fr_auto] sm:items-center sm:p-6">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-brand-red/50 bg-brand-red/10 font-heading text-sm font-bold text-brand-red">{layer.number}</span>
                <div><p className="type-kicker text-brand-red">{layer.label}</p><h3 className="type-card mt-2 text-white">{layer.technologies}</h3><p className="type-card-body mt-3 text-white/65">{layer.description}</p></div>
                <Icon className="hidden text-brand-red sm:block" name={layer.icon} />
              </div>
              {index < architectureLayers.length - 1 ? <span aria-hidden="true" className="architecture-system-arrow">&darr;</span> : null}
            </li>)}
          </ol>
        </div>
        <aside className="relative border border-white/15 bg-white/[0.035] p-7 md:p-9 xl:mt-2" aria-labelledby="cross-cutting-title">
          <div aria-hidden="true" className="absolute inset-0 enterprise-grid opacity-30" />
          <div className="relative"><p className="type-kicker text-brand-red">Cross-cutting engineering concerns</p><h2 className="type-section mt-4 text-white" id="cross-cutting-title">Quality Built Into Every Layer</h2><p className="type-body mt-5 text-white/65">These concerns are considered across the system—not deferred to a single technology or the final delivery stage.</p>
            <ul className="mt-8 grid border-l border-t border-white/15 sm:grid-cols-2">
              {crossCuttingConcerns.map((concern, index) => <li className="type-card-body flex min-h-18 items-center gap-3 border-r border-b border-white/15 p-4 text-white/75" key={concern}><span className="font-heading text-brand-red">0{index + 1}</span>{concern}</li>)}
            </ul>
            <p className="type-card-body mt-8 border-l-2 border-brand-red pl-5 text-white/60">The architecture is selected to support the work, operational risk, integration needs, and rate of change in front of the business.</p>
          </div>
        </aside>
      </div>
    </Section>
  )
}
