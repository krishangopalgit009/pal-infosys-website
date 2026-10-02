import type { PageHeroContent } from '../../types/secondary'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

type PageHeroProps = { content: PageHeroContent }

export function PageHero({ content }: PageHeroProps) {
  const isCentered = content.align === 'center'

  return (
    <section className={`page-hero relative overflow-hidden bg-ink py-16 text-white md:py-20 xl:py-24 ${isCentered ? 'page-hero-centered' : ''}`}>
      <div aria-hidden="true" className="absolute inset-0 enterprise-grid opacity-25" />
      <div aria-hidden="true" className="hero-geometry hero-geometry-one absolute -right-24 -top-36 h-100 w-100 rounded-full border-[36px] border-white/5" />
      <div aria-hidden="true" className="absolute right-[12%] bottom-0 h-20 w-px bg-brand-red" />
      <Container className={`relative ${isCentered ? 'mx-auto max-w-245 text-center' : 'grid gap-10 xl:grid-cols-[1fr_0.42fr] xl:items-end'}`}>
        <div className={isCentered ? 'mx-auto max-w-245' : 'max-w-4xl'}>
          <p className="hero-reveal hero-delay-1 type-kicker text-brand-red">{content.eyebrow}</p>
          <h1 className="hero-reveal hero-delay-2 type-hero mt-6">{content.title}{content.titleHighlight ? <> <span className="text-brand-red">{content.titleHighlight}</span></> : null}</h1>
          <p className={`hero-reveal hero-delay-3 type-body mt-6 text-white/75 ${isCentered ? 'mx-auto max-w-205' : 'max-w-3xl'}`}>{content.description}</p>
          {content.cta || content.secondaryCta ? <div className={`hero-reveal hero-delay-4 mt-9 flex flex-col gap-3 sm:flex-row ${isCentered ? 'justify-center' : ''}`}>{content.cta ? <Button to={content.cta.to}>{content.cta.label}</Button> : null}{content.secondaryCta ? <Button to={content.secondaryCta.to} variant="secondary">{content.secondaryCta.label}</Button> : null}</div> : null}
        </div>
        {!isCentered ? <div className="hero-reveal hero-delay-5 hidden border-l border-white/15 pl-6 xl:block"><p className="type-kicker text-brand-red">PAL INFOSYS</p><p className="type-card-body mt-3 text-white/65">Enterprise software and digital product engineering for business-critical operations.</p></div> : null}
      </Container>
    </section>
  )
}
