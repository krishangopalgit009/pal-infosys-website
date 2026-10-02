import { Link, useParams } from 'react-router'
import { insightArticles } from '../data/insights'
import { pageMeta } from '../data/page-meta'
import { NotFoundPage } from './NotFoundPage'
import { CTASection } from '../components/ui/CTASection'
import { PageHero } from '../components/sections/PageHero'
import { Section } from '../components/ui/Section'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function InsightArticlePage() {
  const { slug } = useParams()
  const article = insightArticles.find((item) => item.slug === slug)

  usePageMetadata(article ? {
    title: `${article.title} | PAL INFOSYS Insights`,
    description: article.summary,
    path: `/insights/${article.slug}`,
    label: article.title,
    article: { author: article.author, publishedOn: article.publishedOn },
  } : pageMeta.notFound)

  if (!article) return <NotFoundPage />

  return <>
    <PageHero content={{ eyebrow: article.category, title: article.title, description: article.summary, cta: { label: article.ctaLabel, to: '/contact' } }} />
    <Section>
      <article className="mx-auto max-w-3xl">
        <div className="type-nav flex flex-wrap gap-x-4 gap-y-2 border-b border-border pb-6 text-text-muted"><span>{article.author}</span><time dateTime={article.publishedOn}>{new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${article.publishedOn}T00:00:00`))}</time><span>{article.readingTime}</span></div>
        <p className="type-body mt-8 text-ink">{article.introduction}</p>
        <div className="mt-12 space-y-12">{article.sections.map((section) => <section key={section.title}><h2 className="type-card text-ink md:text-[1.75rem]">{section.title}</h2><div className="mt-4 space-y-4 text-[1rem] leading-[1.75] text-text-muted">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{section.points ? <ul className="mt-6 space-y-3 border-l-2 border-brand-red pl-5 text-[1rem] leading-[1.65] text-text-muted">{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}</section>)}</div>
        <aside className="mt-14 border border-border bg-surface p-6 md:p-8"><p className="type-kicker text-brand-red">Key takeaways</p><h2 className="type-card mt-4 text-ink">What to Carry Into the Conversation</h2><ul className="mt-5 space-y-3 text-[1rem] leading-[1.65] text-text-muted">{article.takeaways.map((takeaway) => <li className="flex gap-3" key={takeaway}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />{takeaway}</li>)}</ul></aside>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3"><Link className="type-nav inline-flex min-h-11 items-center text-ink underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red" to={article.relatedLink.to}>{article.relatedLink.label}</Link><Link className="type-nav inline-flex min-h-11 items-center text-ink underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red" to="/insights">Back to Insights</Link></div>
      </article>
    </Section>
    <CTASection cta={article.ctaLabel} description="Bring the system constraint, workflow, or product question to a practical engineering conversation." title="Apply the Insight to Your Context." to="/contact" />
  </>
}
