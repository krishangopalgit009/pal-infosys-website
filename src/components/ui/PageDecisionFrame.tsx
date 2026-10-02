import type { DecisionFrameContent } from '../../types/secondary'

type PageDecisionFrameProps = {
  content: DecisionFrameContent
}

export function PageDecisionFrame({ content }: PageDecisionFrameProps) {
  return (
    <div className="relative overflow-hidden border border-border bg-white">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_100%_0%,rgb(222_20_29_/_0.1),transparent_62%)]" />
      <div className="relative grid gap-8 p-7 md:p-9 xl:grid-cols-[0.74fr_1.26fr] xl:items-end xl:p-10">
        <div>
          <p className="type-kicker text-brand-red">{content.eyebrow}</p>
          <h2 className="type-section mt-4 text-ink">{content.title}</h2>
        </div>
        <p className="type-body max-w-3xl border-l-2 border-brand-red pl-5 text-text-muted">{content.description}</p>
      </div>
      <ol className="relative grid border-t border-border md:grid-cols-3">
        {content.items.map((item, index) => <li className={`p-6 md:p-7 ${index > 0 ? 'border-t border-border md:border-t-0 md:border-l' : ''}`} key={item.label}>
          <p className="font-heading text-sm font-bold text-brand-red">0{index + 1}</p>
          <h3 className="type-card mt-4 text-ink">{item.label}</h3>
          <p className="type-card-body mt-3 text-text-muted">{item.description}</p>
        </li>)}
      </ol>
    </div>
  )
}
