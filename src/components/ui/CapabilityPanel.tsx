import type { CapabilityPanelContent } from '../../types/home'
import { Icon } from './Icon'

type CapabilityPanelProps = {
  capability: CapabilityPanelContent
  index: number
}

export function CapabilityPanel({ capability, index }: CapabilityPanelProps) {
  return (
    <article className="interactive-panel group grid overflow-hidden border border-border bg-white lg:grid-cols-[0.72fr_1.28fr]">
      <div className="relative border-b border-border bg-ink p-7 text-white lg:border-r lg:border-b-0 lg:p-8">
        <div aria-hidden="true" className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full border-[24px] border-brand-red/20 transition-transform duration-300 group-hover:scale-110" />
        <div className="relative flex h-12 w-12 items-center justify-center border border-white/15 bg-white/5 text-brand-red"><Icon className="motion-icon" name={capability.icon} /></div>
        <p className="type-kicker relative mt-10 text-brand-red">0{index + 1} / {capability.label}</p>
        <h3 className="type-card relative mt-4 text-white">{capability.title}</h3>
        <p className="type-card-body relative mt-4 text-white/70">{capability.description}</p>
      </div>
      <div className="p-7 lg:p-8">
        <div className="grid gap-7 md:grid-cols-2">
          <div>
            <p className="type-kicker text-brand-red">Business problem</p>
            <p className="type-card-body mt-3 text-text-muted">{capability.problem}</p>
          </div>
          <div>
            <p className="type-kicker text-brand-red">What we deliver</p>
            <p className="type-card-body mt-3 text-text-muted">{capability.deliverables}</p>
          </div>
        </div>
        <div className="mt-7 grid gap-6 border-t border-border pt-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="type-nav text-ink">Typical use cases</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {capability.useCases.map((useCase) => <li className="type-nav border border-border bg-surface px-3 py-1.5 text-text" key={useCase}>{useCase}</li>)}
            </ul>
          </div>
          <div>
            <p className="type-nav text-ink">Relevant technologies</p>
            <p className="type-card-body mt-3 text-text-muted">{capability.technologies.join(' · ')}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
