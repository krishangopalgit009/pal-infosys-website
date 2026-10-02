import { buildAreas } from '../../data/home'
import { Icon } from '../ui/Icon'
import { ProductInterfaceVisual } from '../ui/ProductInterfaceVisual'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function WhatWeBuildSection() {
  return (
    <Section>
      <div className="grid gap-8 xl:grid-cols-[0.74fr_1.26fr] xl:items-end">
        <SectionHeading as="h2" eyebrow="What we build" title="Software Systems Shaped Around Real Operations" description="PAL INFOSYS engineers platforms where people, workflows, data, and essential integrations need to work together with more clarity and control." />
        <div className="max-w-3xl border-l-2 border-brand-red pl-5"><p className="type-kicker text-brand-red">Choose the system by the work it must support</p><p className="type-body mt-3 text-text-muted">The system type follows the work that needs to happen: managing an operation, serving product customers, controlling a workflow, or connecting critical business platforms.</p></div>
      </div>

      <div className="motion-stagger mt-10 grid gap-5 xl:gap-6">
        {buildAreas.map((area, index) => {
          const dark = index % 2 === 1
          const visualOrder = index % 2 === 1 ? 'xl:order-first' : ''

          return <article className={`interactive-panel group overflow-hidden border ${dark ? 'border-white/15 bg-ink text-white' : 'border-border bg-white text-ink'}`} key={area.title}>
            <div className="grid xl:grid-cols-[0.22fr_0.93fr_0.85fr]">
              <div className={`flex items-start justify-between p-6 md:p-8 ${dark ? 'bg-ink-subtle' : 'bg-surface'}`}>
                <span className={`font-heading text-[clamp(3.75rem,5vw,5.5rem)] font-bold leading-none tracking-[-0.08em] ${dark ? 'text-white/15' : 'text-ink/10'}`}>{area.number}</span>
                <span className="mt-1 grid h-10 w-10 place-items-center border border-brand-red/35 bg-brand-red/5 text-brand-red"><Icon name={area.icon} /></span>
              </div>
              <div className="p-7 md:p-9">
                <p className="type-kicker text-brand-red">{area.systemLabel}</p>
                <h3 className="type-section mt-5">{area.title}</h3>
                <p className={`type-body mt-5 ${dark ? 'text-white/70' : 'text-text-muted'}`}>{area.description}</p>
                <ul className={`mt-7 grid gap-3 border-t pt-6 type-card-body sm:grid-cols-3 ${dark ? 'border-white/15 text-white/70' : 'border-border text-text-muted'}`}>
                  {area.focus.map((item) => <li className="flex gap-3" key={item}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />{item}</li>)}
                </ul>
              </div>
              <div className={`relative min-h-60 border-t p-7 md:p-9 xl:border-t-0 xl:border-l ${visualOrder} ${dark ? 'border-white/15 bg-ink-subtle' : 'border-border bg-surface'}`}>
                <ProductInterfaceVisual className="h-full" dark={dark} variant={area.visual} />
              </div>
            </div>
          </article>
        })}
      </div>
    </Section>
  )
}
