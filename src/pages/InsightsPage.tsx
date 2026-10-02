import { insightArticles, insightFocusAreas, insightsHero } from '../data/insights'
import { pageMeta } from '../data/page-meta'
import { PageHero } from '../components/sections/PageHero'
import { ArticleCard } from '../components/ui/ArticleCard'
import { CTASection } from '../components/ui/CTASection'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function InsightsPage() {
  usePageMetadata(pageMeta.insights)

  return <>
    <PageHero content={insightsHero} />
    <Section tone="muted">
      <SectionHeading as="h2" eyebrow="Latest articles" title="Focused Guidance for Complex Software Decisions" description="Three practical articles for leaders evaluating a legacy application, a SaaS product foundation, or a connected transport platform." />
      <div className="mt-10 grid gap-4 md:gap-5 xl:grid-cols-3 xl:gap-6">{insightArticles.map((article) => <ArticleCard insight={article} key={article.slug} />)}</div>
    </Section>
    <Section tone="dark">
      <div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-end">
        <SectionHeading as="h2" inverse eyebrow="Knowledge areas" title="Built Around Real Engineering Decisions" description="The library focuses on the choices that shape operational software, not generic technology commentary." />
        <ul className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 xl:grid-cols-3">{insightFocusAreas.map((item, index) => <li className="type-card-body bg-ink p-6 text-white/70" key={item}><span className="mb-5 block font-heading text-brand-red">0{index + 1}</span>{item}</li>)}</ul>
      </div>
    </Section>
    <CTASection cta="Discuss Your Software Decision" description="Bring a software decision, product question, or operational constraint to the conversation." title="Put Practical Engineering Insight to Work." to="/contact" />
  </>
}
