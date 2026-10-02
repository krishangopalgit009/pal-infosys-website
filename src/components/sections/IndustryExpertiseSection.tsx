import { industryDetails } from '../../data/industries'
import { Icon } from '../ui/Icon'
import { Section } from '../ui/Section'

export function IndustryExpertiseSection() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-card border border-black/8 bg-surface p-7 md:p-9 lg:p-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[linear-gradient(270deg,rgb(222_20_29_/_0.14),rgb(222_20_29_/_0.035),transparent)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-22 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgb(222_20_29_/_0.18),transparent_68%)]" />
        <div className="relative max-w-205">
          <div className="mb-4 flex items-center gap-3"><span aria-hidden="true" className="h-px w-8 bg-brand-red" /><p className="type-kicker text-brand-red">Industry expertise</p></div>
          <h2 className="type-section text-ink">Software Built With <span className="text-brand-red">Industry Understanding</span></h2>
          <p className="type-body mt-4 max-w-180 text-text-muted">We design software around the realities of day-to-day operations, helping businesses improve workflows, integrations, visibility, and long-term scalability.</p>
        </div>
      </div>
      <div className="motion-stagger mt-10 grid gap-5">
        {industryDetails.map((industry) => (
          <article className="interactive-panel group grid border border-border bg-white lg:grid-cols-[0.68fr_1.32fr]" key={industry.title}>
            <div className="bg-surface p-6 lg:p-8">{industry.icon ? <Icon className="motion-icon text-brand-red" name={industry.icon} /> : null}<h3 className="type-card mt-8 text-ink">{industry.title}</h3><p className="type-card-body mt-4 text-text-muted">Systems and workflows shaped around the operational pressure points in this sector.</p></div>
            <div className="grid gap-6 p-6 sm:grid-cols-2 lg:p-8">{industry.groups.map((group) => <div key={group.label}><p className="type-kicker text-brand-red">{group.label}</p><ul className="mt-3 space-y-2">{group.items.map((item) => <li className="type-card-body text-text-muted" key={item}>{item}</li>)}</ul></div>)}</div>
          </article>
        ))}
      </div>
    </Section>
  )
}
