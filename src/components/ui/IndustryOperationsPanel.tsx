import { Link } from 'react-router'
import type { DetailCardContent } from '../../types/secondary'
import { Icon } from './Icon'

type IndustryOperationsPanelProps = { content: DetailCardContent; index: number }

export function IndustryOperationsPanel({ content, index }: IndustryOperationsPanelProps) {
  const dark = index % 2 === 1
  const text = dark ? 'text-white/70' : 'text-text-muted'
  return (
    <article className={`interactive-panel group grid overflow-hidden border ${dark ? 'border-white/15 bg-ink text-white' : 'border-border bg-white text-ink'} xl:grid-cols-[0.55fr_1.45fr]`} id={content.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}>
      <div className={`relative p-7 md:p-9 ${dark ? 'bg-ink-subtle' : 'bg-surface'}`}>
        <div aria-hidden="true" className="absolute right-0 top-0 h-24 w-px bg-brand-red" />
        <p className="type-kicker text-brand-red">Industry operations / 0{index + 1}</p>
        {content.icon ? <Icon className="motion-icon mt-10 text-brand-red" name={content.icon} /> : null}
        <h2 className="type-section mt-6">{content.title}</h2>
        <p className={`type-card-body mt-5 ${text}`}>Operational software should reflect the information, handoffs, and responsibilities that shape everyday work in this domain.</p>
      </div>
      <div className="grid gap-px bg-border md:grid-cols-2">
        {content.groups.map((group) => <div className={`p-6 md:p-8 ${dark ? 'bg-ink' : 'bg-white'}`} key={group.label}><p className="type-kicker text-brand-red">{group.label}</p><ul className={`mt-4 space-y-2 type-card-body ${text}`}>{group.items.map((item) => <li className="flex gap-2" key={item}><span aria-hidden="true" className="text-brand-red">—</span><span>{item}</span></li>)}</ul></div>)}
        {content.cta?.to ? <div className={`flex items-end p-6 md:p-8 ${dark ? 'bg-ink' : 'bg-white'}`}><Link className={`motion-link type-nav inline-flex min-h-11 items-center underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red ${dark ? 'text-white' : 'text-ink'}`} to={content.cta.to}>{content.cta.label}<span aria-hidden="true" className="motion-link-arrow">&nbsp;→</span></Link></div> : null}
      </div>
    </article>
  )
}
