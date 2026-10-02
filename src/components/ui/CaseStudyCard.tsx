import { Link } from 'react-router'
import type { CaseStudy } from '../../types/home'
import { Badge } from './Badge'
import { ProductInterfaceVisual } from './ProductInterfaceVisual'

type CaseStudyCardProps = { caseStudy: CaseStudy }

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col border border-white/15 bg-ink-subtle p-5 transition duration-200 hover:-translate-y-px hover:border-brand-red/60 hover:shadow-[0_14px_32px_rgb(0_0_0_/_0.2)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <p className="type-kicker text-white/65">{caseStudy.category}</p>
        {caseStudy.isShowcase ? <Badge className="shrink-0 border-brand-red/40 bg-brand-red/15 text-white">Platform expertise</Badge> : null}
      </div>
      <ProductInterfaceVisual className="mt-7 min-h-42" variant={caseStudy.visual} />
      <h3 className="type-card mt-7 text-white">{caseStudy.title}</h3>
      <p className="type-card-body mt-4 flex-1 text-white/70">{caseStudy.summary}</p>
      <div className="mt-7 border-t border-white/10 pt-5">
        <p className="type-kicker text-brand-red">Key modules</p>
        <p className="type-card-body mt-2 text-white/75">{caseStudy.modules.join(' · ')}</p>
        <p className="type-kicker mt-5 text-brand-red">Architecture approach</p>
        <p className="type-card-body mt-2 text-white/75">{caseStudy.architecture}</p>
      </div>
      <ul aria-label="Technology tags" className="mt-6 flex flex-wrap gap-2">
        {caseStudy.technologies.map((technology) => <li className="type-nav border border-white/20 px-3 py-1 text-white/80" key={technology}>{technology}</li>)}
      </ul>
      <Link className="type-nav mt-7 inline-flex min-h-11 items-center gap-2 text-white underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red" to="/solutions">View Solution <span aria-hidden="true">-&gt;</span></Link>
    </article>
  )
}
