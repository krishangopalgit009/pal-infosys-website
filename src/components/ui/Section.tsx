import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { Container } from './Container'

type SectionTone = 'default' | 'muted' | 'dark'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  children: ReactNode
  contained?: boolean
  tone?: SectionTone
}

const toneClasses: Record<SectionTone, string> = {
  default: 'bg-white text-text',
  muted: 'border-y border-border/70 bg-surface text-text',
  dark: 'bg-ink text-white',
}

export function Section({
  children,
  contained = true,
  tone = 'default',
  className = '',
  ...props
}: SectionProps) {
  const { ref, isMotionReady, isVisible } = useReveal()
  const content = contained ? <Container>{children}</Container> : children

  return (
    <section className={`motion-section py-12 md:py-16 xl:py-20 ${toneClasses[tone]} ${isMotionReady ? 'motion-ready' : ''} ${isVisible ? 'is-visible' : ''} ${className}`} ref={ref} {...props}>
      {content}
    </section>
  )
}
