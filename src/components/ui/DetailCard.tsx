import { Link } from 'react-router'
import type { DetailCardContent } from '../../types/secondary'
import { Badge } from './Badge'
import { Icon } from './Icon'

type DetailCardProps = { content: DetailCardContent; tone?: 'light' | 'dark' }

export function DetailCard({ content, tone = 'light' }: DetailCardProps) {
  const dark = tone === 'dark'
  const cardClasses = dark
    ? 'border-white/15 bg-ink-subtle text-white hover:border-brand-red/60 hover:shadow-[0_10px_24px_rgb(0_0_0_/_0.16)]'
    : 'border-border bg-white text-ink hover:border-brand-red/40 hover:shadow-card'
  const mutedText = dark ? 'text-white/70' : 'text-text-muted'

  return (
    <article className={`flex h-full flex-col border p-6 transition duration-200 hover:-translate-y-px ${cardClasses}`}>
      <div className="flex items-start justify-between gap-4">
        {content.icon ? <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-card ${dark ? 'bg-white/10 text-white' : 'bg-surface text-brand-red'}`}><Icon name={content.icon} /></div> : null}
        {content.isMock ? <Badge className={dark ? 'border-brand-red/40 bg-brand-red/15 text-white' : ''}>Mock</Badge> : null}
      </div>
      {content.label ? <p className={`type-kicker mt-6 ${dark ? 'text-white/65' : 'text-brand-red'}`}>{content.label}</p> : null}
      <h3 className="type-card mt-5">{content.title}</h3>
      {content.description ? <p className={`type-card-body mt-3 ${mutedText}`}>{content.description}</p> : null}
      {content.groups.length ? <div className="mt-7 space-y-5">{content.groups.map((group) => <div key={group.label}><h4 className="type-nav">{group.label}</h4><ul className={`mt-2 space-y-1.5 text-sm leading-6 ${mutedText}`}>{group.items.map((item) => <li className="flex gap-2" key={item}><span aria-hidden="true" className="text-brand-red">•</span><span>{item}</span></li>)}</ul></div>)}</div> : null}
      {content.cta ? content.cta.to ? <Link className={`type-nav mt-7 inline-flex min-h-11 items-center gap-2 underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red ${dark ? 'text-white' : 'text-ink'}`} to={content.cta.to}>{content.cta.label}<span aria-hidden="true">-&gt;</span></Link> : <p className={`type-nav mt-7 ${mutedText}`}>{content.cta.label}</p> : null}
    </article>
  )
}
