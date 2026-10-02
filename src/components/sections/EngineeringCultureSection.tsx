import { engineeringCulture } from '../../data/about'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function EngineeringCultureSection() {
  return (
    <Section tone="dark">
      <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-end">
        <SectionHeading as="h2" inverse eyebrow="Leadership & engineering culture" title="The Standards Behind Reliable Software" description="A business system is only as dependable as the care applied to its operational context, technical decisions, and long-term change." />
        <p className="type-body max-w-3xl border-l-2 border-brand-red pl-5 text-white/65">PAL INFOSYS approaches engineering as a connected discipline: understand the work, make deliberate decisions, and leave the system in a state that can be supported and improved.</p>
      </div>
      <ol className="motion-stagger mt-10 grid border-y border-white/15 md:grid-cols-3">
        {engineeringCulture.map((item, index) => <li className={`p-7 md:p-8 ${index > 0 ? 'border-t border-white/15 md:border-t-0 md:border-l' : ''}`} key={item.title}><p className="font-heading text-[clamp(2.5rem,3vw,3.75rem)] font-bold leading-none tracking-[-0.06em] text-brand-red/75">{item.number}</p><h3 className="type-card mt-7 text-white">{item.title}</h3><p className="type-card-body mt-4 text-white/65">{item.description}</p></li>)}
      </ol>
    </Section>
  )
}
