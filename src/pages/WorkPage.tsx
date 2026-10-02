import { caseStudyFramework, platformShowcases, workHero } from '../data/work'
import { pageMeta } from '../data/page-meta'
import { CaseStudyTemplate } from '../components/sections/CaseStudyTemplate'
import { PageHero } from '../components/sections/PageHero'
import { CTASection } from '../components/ui/CTASection'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function WorkPage() {
  usePageMetadata(pageMeta.work)
  return <>
    <PageHero content={workHero} />
    <Section tone="muted">
      <p className="type-card-body mb-8 border-l-2 border-brand-red pl-5 text-text-muted">Representative solution examples; not published client case studies.</p>
      <div className="grid gap-8 xl:grid-cols-[0.74fr_1.26fr] xl:items-end"><SectionHeading as="h2" eyebrow={caseStudyFramework.eyebrow} title={caseStudyFramework.title} /><p className="type-body max-w-3xl border-l-2 border-brand-red pl-5 text-text-muted">{caseStudyFramework.description}</p></div>
      <ol className="motion-stagger mt-10 grid border border-border md:grid-cols-5">
        {caseStudyFramework.steps.map((step, index) => <li className={`bg-white p-6 ${index > 0 ? 'border-t border-border md:border-t-0 md:border-l' : ''}`} key={step.label}><p className="font-heading text-sm font-bold text-brand-red">0{index + 1}</p><h3 className="type-card mt-4 text-ink">{step.label}</h3><p className="type-card-body mt-3 text-text-muted">{step.description}</p></li>)}
      </ol>
    </Section>
    {platformShowcases.map((showcase, index) => <CaseStudyTemplate content={showcase} index={index} key={showcase.title} />)}
    <CTASection cta="Discuss a Similar System" description="If your organization is working through a similar operational challenge, let’s discuss the context, system boundaries, and practical next step." title="Build the Next System Around Real Work." to="/contact" />
  </>
}
