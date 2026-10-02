import type { CapabilityPanelContent } from '../../types/home'
import { Link } from 'react-router'
import { Icon } from './Icon'

type ServiceCapabilityRowProps = { content: CapabilityPanelContent; detailPath?: string; index: number; headingLevel?: 'h2' | 'h3' }

export function ServiceCapabilityRow({ content, detailPath, headingLevel = 'h2', index }: ServiceCapabilityRowProps) {
  const reversed = index % 2 === 1
  const Heading = headingLevel
  const secondaryText = reversed ? 'text-white/70' : 'text-text-muted'
  const border = reversed ? 'border-white/15' : 'border-border'

  return (
    <article className={`interactive-panel group grid overflow-hidden border border-border ${reversed ? 'bg-ink text-white' : 'bg-white text-ink'} lg:grid-cols-2`}>
      <div className={`relative p-7 md:p-9 ${reversed ? 'lg:order-2' : ''}`}>
        <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-brand-red" />
        <p className="type-kicker text-brand-red">0{index + 1} / {content.label}</p>
        <div className="mt-8 flex items-start justify-between gap-6"><div><Heading className="type-section">{content.title}</Heading><p className={`type-body mt-5 max-w-xl ${secondaryText}`}>{content.description}</p></div><Icon className="motion-icon shrink-0 text-brand-red" name={content.icon} /></div>
        <div className={`mt-8 border-t pt-6 ${border}`}><p className="type-kicker text-brand-red">What problem does this solve?</p><p className={`type-card-body mt-3 ${secondaryText}`}>{content.problem}</p></div>
      </div>
      <div className={`grid gap-7 p-7 md:grid-cols-2 md:p-9 ${reversed ? 'bg-ink-subtle' : 'bg-surface'}`}>
        <div><p className="type-kicker text-brand-red">What PAL INFOSYS delivers</p><p className={`type-card-body mt-3 ${secondaryText}`}>{content.deliverables}</p></div>
        <div><p className="type-kicker text-brand-red">Typical systems</p><ul className={`mt-3 space-y-2 type-card-body ${secondaryText}`}>{content.useCases.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className={`border-t pt-5 ${border}`}><p className="type-kicker text-brand-red">Engineering considerations</p><p className={`type-card-body mt-3 ${secondaryText}`}>{content.engineeringConsiderations}</p></div>
        <div className={`border-t pt-5 ${border}`}><p className="type-kicker text-brand-red">Who this is suitable for</p><p className={`type-card-body mt-3 ${secondaryText}`}>{content.suitableFor}</p></div>
        <div className={`col-span-full border-t pt-5 ${border}`}><p className="type-kicker text-brand-red">Relevant technologies</p><p className={`type-card-body mt-3 ${secondaryText}`}>{content.technologies.join(' · ')}</p>{detailPath ? <Link className={`motion-link type-nav mt-5 inline-flex min-h-11 items-center underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red ${reversed ? 'text-white' : 'text-ink'}`} to={detailPath}>Explore this capability <span aria-hidden="true" className="motion-link-arrow">&nbsp;→</span></Link> : null}</div>
      </div>
    </article>
  )
}
