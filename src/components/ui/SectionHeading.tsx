import type { ReactNode } from 'react'
import { Badge } from './Badge'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  inverse?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Heading = 'h2',
  inverse = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-170 flex-col gap-4 ${alignment}`}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <Heading className={`type-section ${inverse ? 'text-white' : 'text-ink'}`}>
        {title}
      </Heading>
      {description ? <div className={`type-body max-w-2xl ${inverse ? 'text-white/70' : 'text-text-muted'}`}>{description}</div> : null}
    </div>
  )
}
