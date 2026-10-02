import heroPoster from '../../assets/images/enterprise-dashboard-hero-1280.webp'
import { company } from '../../data/company'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const credibilityItems = [
  { label: 'Established', detail: `Serving businesses since ${company.establishedYear}` },
  { label: 'Focus', detail: 'Enterprise software systems' },
  { label: 'Product', detail: 'SaaS engineering' },
  { label: 'Change', detail: 'Modernization & integration' },
]

// Set this only when an approved, optimized production video is supplied.
const heroVideoSource: string | undefined = undefined

export function HeroSection() {
  return (
    <>
      <section className="hero-video-section relative isolate overflow-hidden bg-ink py-16 text-white md:py-22 xl:py-26">
      <div aria-hidden="true" className="hero-video-poster absolute inset-0" style={{ backgroundImage: `url(${heroPoster})` }} />
      {heroVideoSource ? <video aria-hidden="true" autoPlay className="hero-video-media absolute inset-0 h-full w-full object-cover" loop muted playsInline poster={heroPoster} preload="metadata"><source src={heroVideoSource} type="video/mp4" /></video> : null}
      <div aria-hidden="true" className="hero-video-overlay absolute inset-0" />
      <div aria-hidden="true" className="hero-video-red-glow absolute inset-0" />
      <div aria-hidden="true" className="hero-video-grid absolute inset-0" />

      <Container className="relative flex min-h-130 items-center justify-center text-center md:min-h-150 xl:min-h-165">
        <div className="w-full min-w-0 max-w-245">
          <p className="hero-video-eyebrow type-kicker text-brand-red">Enterprise Software, AI &amp; Digital Solutions</p>
          <h1 className="hero-video-title type-hero mt-6"><span>We Build Software That Moves Businesses Forward</span></h1>
          <div aria-hidden="true" className="hero-video-interaction"><span className="hero-video-pulse" /></div>
          <p className="hero-video-description type-body mx-auto mt-6 max-w-205 text-white/85">PAL INFOSYS helps teams replace fragmented tools, reduce manual handoffs, and build software that gives people clearer information for everyday decisions.</p>
          <div className="hero-video-actions mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Button className="w-full sm:w-auto" to="/contact">Discuss Your Project</Button>
            <Button className="w-full border-white/45 bg-white/8 !text-white hover:!border-white hover:!bg-white hover:!text-ink sm:w-auto" to="/platform-expertise" variant="secondary">Explore Platform Expertise</Button>
          </div>
        </div>
      </Container>
      <div aria-hidden="true" className="hero-video-bottom-fade absolute inset-x-0 bottom-0 h-24" />
      </section>
      <section aria-label="PAL INFOSYS credibility" className="border-b border-border bg-white">
        <Container>
          <div className="grid border-x border-border lg:grid-cols-[0.9fr_3.1fr]">
            <div className="flex min-h-20 items-center border-b border-border px-5 py-4 lg:border-r lg:border-b-0 lg:px-6">
              <div><p className="type-kicker text-brand-red">PAL INFOSYS foundation</p><p className="type-card-body mt-1 text-text-muted">Built for operational software decisions.</p></div>
            </div>
            <dl className="grid divide-x divide-y divide-border sm:grid-cols-2 md:grid-cols-4 md:divide-y-0">
              {credibilityItems.map((item) => <div className="flex min-h-20 flex-col justify-center px-5 py-4" key={item.label}><dt className="type-kicker !text-[0.625rem] !tracking-[0.11em] text-brand-red">{item.label}</dt><dd className="type-nav mt-2 text-ink">{item.detail}</dd></div>)}
            </dl>
          </div>
        </Container>
      </section>
    </>
  )
}
