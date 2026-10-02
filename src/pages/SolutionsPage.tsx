import { pageMeta } from '../data/page-meta'
import { solutionDiscussions, solutionsDecisionFrame, solutionsHero } from '../data/solutions'
import { PageHero } from '../components/sections/PageHero'
import { CTASection } from '../components/ui/CTASection'
import { SolutionBlueprint } from '../components/ui/SolutionBlueprint'
import { Section } from '../components/ui/Section'
import { PageDecisionFrame } from '../components/ui/PageDecisionFrame'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function SolutionsPage() {
  usePageMetadata(pageMeta.solutions)

  return <>
    <PageHero content={solutionsHero} />
    <Section tone="muted">
      <PageDecisionFrame content={solutionsDecisionFrame} />
      <ol aria-label="Solution capability areas" className="solution-journey motion-stagger mx-auto mt-10 grid max-w-310 gap-5 sm:grid-cols-5 sm:gap-3">
        {solutionDiscussions.map((solution, index) => <li className="solution-journey-item relative text-center" key={solution.title}>
          <span className="relative z-10 mx-auto grid h-10 w-10 place-items-center rounded-full border-2 border-brand-red bg-white font-heading text-sm font-bold text-brand-red">{solution.number}</span>
          <p className="type-card mt-4 text-ink">{solution.title}</p>
          {index < solutionDiscussions.length - 1 ? <span aria-hidden="true" className="solution-journey-arrow hidden sm:block">&rarr;</span> : null}
        </li>)}
      </ol>
    </Section>
    <Section><div className="grid gap-6">{solutionDiscussions.map((solution, index) => <SolutionBlueprint content={solution} index={index} key={solution.title} />)}</div></Section>
    <CTASection cta="Discuss Your Platform Requirements" description="Explore a platform direction in the context of your workflows, systems, data, and operating constraints." title="Find the Right System Foundation." to="/contact" />
  </>
}
