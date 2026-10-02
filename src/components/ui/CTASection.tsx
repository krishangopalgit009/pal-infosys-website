import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { Button } from './Button'
import { Container } from './Container'

type CTASectionProps = { title: string; description: ReactNode; cta: string; to: string }

export function CTASection({ title, description, cta, to }: CTASectionProps) {
  const { ref, isMotionReady, isVisible } = useReveal()
  return (
    <section className={`motion-section relative overflow-hidden bg-ink py-14 text-white md:py-18 xl:py-22 ${isMotionReady ? 'motion-ready' : ''} ${isVisible ? 'is-visible' : ''}`} ref={ref}>
      <div aria-hidden="true" className="absolute inset-0 enterprise-grid opacity-20" />
      <div aria-hidden="true" className="absolute -right-24 -bottom-40 h-100 w-100 rounded-full border-[48px] border-brand-red/20" />
      <Container className="relative grid gap-8 xl:grid-cols-[1fr_auto] xl:items-end">
        <div className="max-w-3xl">
          <p className="type-kicker text-brand-red">Start the conversation</p>
          <h2 className="type-section text-white">{title}</h2>
          <p className="type-body mt-6 max-w-2xl text-white/75">{description}</p>
          <Button className="mt-8" to={to}>{cta}</Button>
        </div>
        <p className="type-card-body max-w-xs border-l border-white/15 pl-5 text-white/65">A useful first conversation can cover the business outcome, systems involved, and operational constraint in front of your team.</p>
      </Container>
    </section>
  )
}
