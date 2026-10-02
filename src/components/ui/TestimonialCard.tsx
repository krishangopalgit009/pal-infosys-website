import type { Testimonial } from '../../types/home'
import { Badge } from './Badge'

type TestimonialCardProps = { testimonial: Testimonial }

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-border bg-white p-6 transition duration-200 hover:-translate-y-px hover:border-brand-red/40 hover:shadow-card md:p-7">
      {testimonial.isMock ? <Badge>Mock testimonial</Badge> : null}
      <blockquote className="type-card mt-6 text-ink">“{testimonial.quote}”</blockquote>
      <figcaption className="type-nav mt-8 text-text-muted">{testimonial.attribution}</figcaption>
    </figure>
  )
}
