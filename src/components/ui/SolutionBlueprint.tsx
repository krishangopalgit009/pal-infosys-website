import { Link } from 'react-router'
import type { SolutionDiscussionContent } from '../../data/solutions'
import { Icon } from './Icon'

type SolutionBlueprintProps = { content: SolutionDiscussionContent; index: number }

const flowLabels = ['Business problem', 'Process', 'Software foundation', 'Business outcome']

export function SolutionBlueprint({ content, index }: SolutionBlueprintProps) {
  const dark = index % 2 === 0
  const text = dark ? 'text-white/70' : 'text-text-muted'
  const border = dark ? 'border-white/15' : 'border-border'
  const flow = [content.businessProblem, content.process, content.foundation, content.outcome]

  return (
    <article className={`solution-system-flow relative overflow-hidden border-y ${border} ${dark ? 'bg-ink text-white' : 'bg-surface text-ink'}`}>
      <div aria-hidden="true" className={`absolute inset-0 enterprise-grid ${dark ? 'opacity-30' : 'opacity-[0.045]'}`} />
      <div className="relative grid xl:grid-cols-[0.36fr_1fr]">
        <div className={`relative p-7 md:p-9 xl:p-11 ${dark ? 'bg-ink-subtle/80' : 'bg-white/70'}`}>
          <span aria-hidden="true" className={`font-heading text-[clamp(4.5rem,8vw,8rem)] font-bold leading-none tracking-[-0.1em] ${dark ? 'text-white/10' : 'text-ink/8'}`}>{content.number}</span>
          <div className="relative -mt-10"><span className="grid h-12 w-12 place-items-center border border-brand-red/45 bg-brand-red/10 text-brand-red"><Icon className="h-6 w-6" name={content.icon} /></span><p className="type-kicker mt-8 text-brand-red">Complete system direction</p><h2 className="type-section mt-4">{content.title}</h2></div>
          <ul className={`mt-8 space-y-3 border-t pt-6 type-card-body ${border} ${text}`}>{content.capabilities.map((capability) => <li className="flex gap-3" key={capability}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />{capability}</li>)}</ul>
          <Link className={`motion-link type-nav mt-8 inline-flex min-h-11 items-center underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red ${dark ? 'text-white' : 'text-ink'}`} to="/contact">Discuss this solution <span aria-hidden="true" className="motion-link-arrow">&nbsp;&rarr;</span></Link>
        </div>

        <div className="relative p-7 md:p-9 xl:p-11">
          <div aria-hidden="true" className="solution-system-diagram absolute right-0 top-0 hidden h-full w-[34%] xl:block"><span className="solution-diagram-node solution-diagram-node-one">Workflow</span><span className="solution-diagram-node solution-diagram-node-two">Data</span><span className="solution-diagram-node solution-diagram-node-three">Integration</span></div>
          <ol aria-label={`${content.title} solution flow`} className="relative grid gap-0 md:grid-cols-2">
            {flow.map((detail, flowIndex) => <li className={`solution-flow-step relative p-6 md:p-8 ${flowIndex % 2 === 0 ? `border ${border}` : `border-x border-b ${border}`}`} key={flowLabels[flowIndex]}>
              <div className="flex items-center gap-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-red/45 bg-brand-red/5 font-heading text-xs font-bold text-brand-red">0{flowIndex + 1}</span><p className="type-kicker text-brand-red">{flowLabels[flowIndex]}</p></div>
              <p className={`type-card-body mt-6 max-w-xl ${text}`}>{detail}</p>
              {flowIndex < flow.length - 1 ? <span aria-hidden="true" className="solution-flow-arrow hidden md:block">&rarr;</span> : null}
            </li>)}
          </ol>
          <div className={`relative mt-8 flex items-center gap-3 border-t pt-6 ${border}`}><span className="h-1.5 w-1.5 rounded-full bg-brand-red" /><span className={`h-px flex-1 ${dark ? 'bg-white/20' : 'bg-border'}`} /><span className="type-kicker text-brand-red">From operating context to system foundation</span></div>
        </div>
      </div>
    </article>
  )
}
