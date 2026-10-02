import { Link } from 'react-router'
import type { Capability } from '../../types/home'
import { Icon } from './Icon'

type ServiceCardProps = { capability: Capability }

export function ServiceCard({ capability }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-card border border-border bg-white p-6 transition duration-200 hover:-translate-y-px hover:border-brand-red/40 hover:shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-card bg-surface text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
        <Icon name={capability.icon} />
      </div>
      <h3 className="type-card mt-7 text-ink">{capability.title}</h3>
      <p className="type-card-body mt-3 flex-1 text-text-muted">{capability.description}</p>
      <Link className="type-nav mt-6 inline-flex min-h-11 items-center gap-2 text-ink underline decoration-brand-red decoration-2 underline-offset-4 transition-colors hover:text-brand-red" to="/services">
        Learn More <span aria-hidden="true">-&gt;</span>
      </Link>
    </article>
  )
}
