import { Link } from 'react-router'
import { useReveal } from '../../hooks/useReveal'
import type { DetailCardContent } from '../../types/secondary'
import { Container } from '../ui/Container'
import { ProductInterfaceVisual } from '../ui/ProductInterfaceVisual'

type CaseStudyTemplateProps = { content: DetailCardContent; index: number }

export function CaseStudyTemplate({ content, index }: CaseStudyTemplateProps) {
  const { ref, isMotionReady, isVisible } = useReveal()
  const dark = index % 2 === 0
  const text = dark ? 'text-white/70' : 'text-text-muted'
  const background = dark ? 'bg-ink text-white' : 'bg-surface text-ink'

  return (
    <section className={`work-showcase overflow-hidden py-14 md:py-18 xl:py-22 ${background} ${isMotionReady ? 'motion-ready' : ''} ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <Container><article className="interactive-panel grid gap-10 xl:grid-cols-[1.08fr_0.92fr] xl:items-center xl:gap-16">
        <div className={`showcase-content ${index % 2 === 1 ? 'xl:order-2' : ''}`}>
          <p className="type-kicker text-brand-red">Representative system template / 0{index + 1}</p>
          <h2 className="type-section mt-5">{content.title}</h2>
          {content.label ? <p className={`type-nav mt-4 ${dark ? 'text-white/60' : 'text-text-muted'}`}>{content.label}</p> : null}
          {content.description ? <p className={`type-body mt-6 ${text}`}>{content.description}</p> : null}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">{content.groups.map((group) => <div className={`border-t pt-5 ${dark ? 'border-white/15' : 'border-border'}`} key={group.label}><p className="type-kicker text-brand-red">{group.label}</p><ul className={`mt-3 space-y-2 type-card-body ${text}`}>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
          {content.cta?.to ? <Link className={`motion-link type-nav mt-8 inline-flex min-h-11 items-center underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red ${dark ? 'text-white' : 'text-ink'}`} to={content.cta.to}>{content.cta.label} <span aria-hidden="true" className="motion-link-arrow">&rarr;</span></Link> : null}
        </div>
        <div className={`showcase-visual relative min-h-80 p-5 sm:p-7 ${dark ? 'bg-ink-subtle' : 'bg-surface'}`}>
          <ProductInterfaceVisual className="min-h-64" dark={dark} variant={content.visual ?? 'reports'} />
          <div className={`relative ml-auto -mt-5 w-[78%] border p-4 ${dark ? 'border-white/15 bg-ink' : 'border-border bg-white'}`}><p className="type-kicker text-brand-red">System foundation</p><p className={`type-card-body mt-2 ${text}`}>Workflow, data, roles, and integration boundaries considered together as one platform direction.</p></div>
        </div>
      </article></Container>
    </section>
  )
}
