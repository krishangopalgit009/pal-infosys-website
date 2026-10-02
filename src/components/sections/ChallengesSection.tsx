import { businessChallenges } from '../../data/home'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

export function ChallengesSection() {
  return (
    <Section contained={false} tone="muted" className="relative overflow-hidden !py-16 md:!py-20 xl:!py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-105 w-105 rounded-full bg-[radial-gradient(circle,rgb(222_20_29_/_0.13)_0%,rgb(222_20_29_/_0.04)_42%,transparent_72%)]" />
        <div className="absolute -bottom-40 -left-32 h-120 w-120 rounded-full bg-[radial-gradient(circle,rgb(31_31_31_/_0.08)_0%,rgb(31_31_31_/_0.025)_45%,transparent_72%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-3"><span aria-hidden="true" className="h-px w-8 bg-brand-red" /><p className="type-kicker text-brand-red">Business challenges</p></div>
            <h2 className="business-challenges-title text-ink"><span className="business-challenges-title-main">Technology Should Simplify Operations</span><span className="business-challenges-title-accent">— Not Create More Complexity</span></h2>
          </div>
          <p className="type-body max-w-155 text-text-muted lg:justify-self-end">Growing businesses rarely struggle because they lack software. The real challenge is having systems that <strong className="font-semibold text-ink">work together</strong>, support real operational workflows, and continue performing as the organization grows.</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-card border border-black/7 bg-ink shadow-[0_18px_50px_rgb(0_0_0_/_0.08)] md:mt-12">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative overflow-hidden border-b border-white/10 p-7 md:p-9 lg:border-r lg:border-b-0 lg:p-10">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(222_20_29_/_0.22),transparent_38%)]" />
              <div className="relative"><p className="type-kicker text-brand-red">The real problem</p><p className="mt-4 max-w-110 font-heading text-[clamp(1.5rem,1.2vw+1.2rem,1.75rem)] font-semibold leading-[1.35] tracking-[-0.025em] text-white">When technology becomes another operational burden, <span className="text-brand-red">the business pays the price.</span></p></div>
            </div>
            <div className="grid gap-px bg-white/8 sm:grid-cols-3">
              {[
                { label: 'Information', statement: 'Teams spend more time moving information than acting on it.' },
                { label: 'Workflow', statement: 'Business rules become dependent on spreadsheets and manual knowledge.' },
                { label: 'Foundation', statement: 'Growth exposes weaknesses in architecture, integrations, and visibility.' },
              ].map(({ label, statement }, index) => <div className="bg-ink p-6 md:p-7" key={label}><span className="font-heading text-[1.75rem] font-bold text-brand-red">0{index + 1}</span><p className="type-kicker mt-3 !text-[0.625rem] !tracking-[0.11em] text-white/45">{label}</p><p className="type-card-body mt-2 text-white/65">{statement}</p></div>)}
            </div>
          </div>
        </div>

        <div className="motion-stagger mt-8 grid gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {businessChallenges.map((challenge) => (
            <article className="interactive-panel group relative overflow-hidden rounded-card border border-black/8 bg-white p-6 md:p-7" key={challenge.number}>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"><div className="absolute right-0 top-0 h-36 w-36 bg-[radial-gradient(circle_at_top_right,rgb(222_20_29_/_0.1),transparent_70%)]" /></div>
              <div className="relative"><div className="flex items-start justify-between"><span className="font-heading text-[0.8125rem] font-bold tracking-[0.08em] text-brand-red">{challenge.number}</span><span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-red/25 transition-all duration-300 group-hover:bg-brand-red group-hover:shadow-[0_0_14px_rgb(222_20_29_/_0.5)]" /></div><h3 className="type-card mt-7 text-ink">{challenge.title}</h3><p className="type-card-body mt-3 text-text-muted">{challenge.description}</p><div className="mt-6 flex items-center gap-2 border-t border-black/7 pt-4"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-red" /><span className="type-kicker !text-[0.6875rem] !tracking-[0.08em] text-ink">{challenge.highlight}</span></div></div>
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-card border border-brand-red/15 bg-white">
          <div className="grid gap-6 p-6 md:p-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-10">
            <div><p className="type-kicker text-brand-red">A clearer path forward</p><h3 className="type-card mt-3 text-ink">Move from operational friction to a deliberate software foundation.</h3><p className="type-card-body mt-3 text-text-muted">The next step is not more tools. It is understanding the work, the information, and the decisions the system must support.</p></div>
            <ol aria-label="From challenge to software foundation" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['01', 'Map the work'], ['02', 'Set boundaries'], ['03', 'Connect data'], ['04', 'Plan for change'],
              ].map(([number, label], index) => <li className="relative border-l border-border pl-4" key={label}><span className="font-heading text-sm font-bold text-brand-red">{number}</span><p className="type-card-body mt-1 font-semibold text-ink">{label}</p>{index < 3 ? <span aria-hidden="true" className="absolute -right-2 top-1/2 hidden h-px w-4 bg-brand-red/40 lg:block" /> : null}</li>)}
            </ol>
          </div>
          <div className="flex flex-col gap-4 border-t border-border bg-surface px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7"><p className="type-card-body text-text-muted">Explore the capabilities and delivery decisions behind a stronger operational system.</p><Button className="shrink-0" to="/services" variant="dark">Explore Our Capabilities</Button></div>
        </div>
      </Container>
    </Section>
  )
}
