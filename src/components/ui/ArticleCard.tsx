import { Link } from 'react-router'
import type { InsightArticle } from '../../data/insights'
import type { Insight } from '../../types/home'
import { Badge } from './Badge'

type ArticleCardProps = { insight: Insight | InsightArticle }

export function ArticleCard({ insight }: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-card border border-border bg-white p-6 transition duration-200 hover:-translate-y-px hover:border-brand-red/40 hover:shadow-card">
      <div className="flex items-center justify-between gap-4">
        <p className="type-kicker text-brand-red">{insight.category}</p>
        {'isMock' in insight && insight.isMock ? <Badge>Mock</Badge> : null}
      </div>
      <h3 className="type-card mt-8 text-ink">{insight.title}</h3>
      <p className="type-card-body mt-3 flex-1 text-text-muted">{insight.summary}</p>
      <Link className="type-nav mt-7 inline-flex min-h-11 items-center gap-2 text-ink underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red" to={'slug' in insight ? `/insights/${insight.slug}` : '/insights'}>
        Read Article <span aria-hidden="true">-&gt;</span>
      </Link>
    </article>
  )
}
