import { Link } from 'react-router'
import type { DetailCardContent } from '../../types/secondary'
import { Icon } from './Icon'

type EnterpriseFeatureProps = { content: DetailCardContent; index: number; tone?: 'light' | 'dark' }

export function EnterpriseFeature({ content, index, tone = 'light' }: EnterpriseFeatureProps) {
  const dark = tone === 'dark'
  const panel = dark ? 'border-white/15 bg-ink-subtle text-white' : 'border-border bg-white text-ink'
  const text = dark ? 'text-white/70' : 'text-text-muted'
  return (
    <article className={`group grid border transition duration-200 hover:-translate-y-px ${dark ? 'hover:border-brand-red/60 hover:shadow-[0_14px_32px_rgb(0_0_0_/_0.2)]' : 'hover:border-brand-red/40 hover:shadow-[0_16px_36px_rgb(31_31_31_/_0.08)]'} ${panel} lg:grid-cols-[0.5fr_1.5fr]`}>
      <div className={`relative overflow-hidden p-6 lg:p-8 ${dark ? 'border-b border-white/15 lg:border-r lg:border-b-0' : 'border-b border-border bg-surface lg:border-r lg:border-b-0'}`}>
        <span aria-hidden="true" className="absolute left-0 top-0 h-16 w-1 bg-brand-red transition-all duration-200 group-hover:h-24" />
        {content.icon ? <Icon className="text-brand-red" name={content.icon} /> : <p className="font-heading text-xl text-brand-red">0{index + 1}</p>}
        {content.label ? <p className={`type-kicker mt-8 ${dark ? 'text-white/60' : 'text-brand-red'}`}>{content.label}</p> : null}
        <h3 className="type-card mt-4">{content.title}</h3>
        {content.description ? <p className={`type-card-body mt-4 ${text}`}>{content.description}</p> : null}
      </div>
      <div className="grid gap-6 p-6 sm:grid-cols-2 lg:p-8">
        {content.groups.map((group) => <div key={group.label}><p className="type-kicker text-brand-red">{group.label}</p><ul className={`mt-3 space-y-2 type-card-body ${text}`}>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
        {content.cta ? content.cta.to ? <Link className={`type-nav inline-flex min-h-11 items-center self-end underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red ${dark ? 'text-white' : 'text-ink'}`} to={content.cta.to}>{content.cta.label}<span aria-hidden="true">&nbsp;-&gt;</span></Link> : <p className={`type-nav self-end ${text}`}>{content.cta.label}</p> : null}
      </div>
    </article>
  )
}
