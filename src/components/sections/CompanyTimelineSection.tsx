import { companyTimeline } from '../../data/about'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function CompanyTimelineSection() {
  return (
    <Section tone="default">
      <div className="grid gap-8 xl:grid-cols-[0.74fr_1.26fr] xl:items-end">
        <SectionHeading as="h2" eyebrow="Company story" title="Serving Businesses Since 2013" description="PAL INFOSYS has developed business software since 2013. Our current direction brings that foundation into enterprise applications, product engineering, connected systems, and modern architecture." />
        <p className="type-body max-w-3xl border-l-2 border-brand-red pl-5 text-text-muted">Today, PAL INFOSYS brings that foundation into enterprise applications, product engineering, connected systems, and modern architecture.</p>
      </div>

      <div className="relative mt-12 grid gap-8 border-y border-border py-8 md:grid-cols-[0.3fr_1fr] md:gap-12 md:py-10">
        <div className="relative md:pr-12">
          <span aria-hidden="true" className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_0_6px_rgb(222_20_29_/_0.08)]" />
          <p className="font-heading text-[clamp(3rem,4vw,4.5rem)] font-bold leading-none tracking-[-0.07em] text-ink">{companyTimeline.year}</p>
          <p className="type-kicker mt-4 text-brand-red">{companyTimeline.milestone}</p>
          <p className="type-card-body mt-4 text-text-muted">{companyTimeline.description}</p>
        </div>
        <div className="relative md:border-l md:border-border md:pl-12">
          <div aria-hidden="true" className="absolute -left-px top-0 hidden h-full w-px bg-gradient-to-b from-brand-red via-brand-red/35 to-transparent md:block" />
          <p className="type-kicker text-brand-red">Current engineering direction</p>
          <ol className="timeline-focus mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {companyTimeline.currentFocus.map((focus, index) => <li className="relative border-t border-border pt-5" key={focus}><span aria-hidden="true" className="absolute -top-1 left-0 h-2 w-2 rounded-full bg-brand-red" /><span className="font-heading text-sm font-bold text-brand-red">0{index + 1}</span><p className="type-card mt-3 text-ink">{focus}</p></li>)}
          </ol>
        </div>
      </div>
    </Section>
  )
}
