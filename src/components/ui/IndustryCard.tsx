import { Link } from 'react-router'
import type { Industry } from '../../types/home'
import { Icon } from './Icon'

type IndustryCardProps = { industry: Industry }

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-card border border-border bg-white p-6 transition duration-200 hover:-translate-y-px hover:border-brand-red/40 hover:shadow-card">
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-ink text-white">
          <Icon name={industry.icon} />
        </div>
        <Link aria-label={`Explore ${industry.title}`} className="flex h-11 w-11 items-center justify-center rounded-card text-brand-red transition-transform group-hover:translate-x-1" to="/industries">
          <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
      <h3 className="type-card mt-8 text-ink">{industry.title}</h3>
      <p className="type-card-body mt-3 flex-1 text-text-muted">{industry.description}</p>
    </article>
  )
}
