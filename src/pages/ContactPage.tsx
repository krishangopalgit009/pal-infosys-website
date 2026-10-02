import { ContactForm } from '../components/sections/ContactForm'
import { PageHero } from '../components/sections/PageHero'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'
import { company } from '../data/company'
import {
  contactCapabilityStrip,
  contactDetails,
  contactExpectationSteps,
  contactHero,
} from '../data/contact'
import { pageMeta } from '../data/page-meta'
import { usePageMetadata } from '../hooks/usePageMetadata'

export function ContactPage() {
  usePageMetadata(pageMeta.contact)

  return (
    <>
      <PageHero content={contactHero} />

      <Section tone="muted">
        <div className="relative overflow-hidden border border-border bg-white p-6 sm:p-8 xl:grid xl:grid-cols-[0.78fr_1.22fr] xl:gap-0 xl:p-0">
          <div
            className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgb(222_20_29_/_0.11),transparent_68%)]"
            aria-hidden="true"
          />

          <div className="relative xl:border-r xl:border-border xl:p-10">
            <SectionHeading
              as="h2"
              eyebrow="Project consultation"
              title="Let’s Talk About What You’re Building"
              description="Share the business outcome, workflow, product direction, or system constraint in front of your team. The first conversation begins with the context—not a predetermined technical answer."
            />

            <ol className="mt-10 grid gap-5 border-y border-border py-6">
              {contactExpectationSteps.map((step, index) => (
                <li
                  className="grid grid-cols-[2.5rem_1fr] gap-4"
                  key={step.title}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-red/40 bg-brand-red/5 font-heading text-xs font-bold text-brand-red">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="type-card text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 border border-border bg-surface p-6">
              <h3 className="type-card text-ink">
                {contactDetails.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">
                {contactDetails.description}
              </p>
              <address className="mt-5 grid gap-3 not-italic">
                <a
                  className="type-nav w-fit text-ink underline decoration-brand-red/45 underline-offset-4 transition-colors hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red"
                  href={`mailto:${company.email}`}
                >
                  {company.email}
                </a>
                <a
                  className="type-nav w-fit text-ink underline decoration-brand-red/45 underline-offset-4 transition-colors hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red"
                  href={company.phoneHref}
                >
                  {company.phone}
                </a>
                <span className="text-sm leading-6 text-text-muted">
                  {company.address.lines[0]}
                  <br />
                  {company.address.lines[1]}
                </span>
              </address>
            </div>
          </div>

          <div className="relative mt-10 xl:mt-0 xl:p-10">
            <div className="border border-border bg-white p-6 shadow-[0_16px_36px_rgb(31_31_31_/_0.07)] md:p-8">
              <p className="type-kicker text-brand-red">Project enquiry</p>
              <h2 className="type-section mt-3 text-ink !text-[clamp(1.75rem,2.2vw,2.25rem)]">
                Tell Us About Your Project
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted sm:text-base">
                Tell us what needs to work better. We will use the details you
                share to prepare for a more useful conversation.
              </p>
              <ContactForm />
            </div>

            <div className="mt-6 border border-border bg-surface p-5">
              <p className="type-kicker text-brand-red">Areas we can discuss</p>
              <ul className="mt-4 grid gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {contactCapabilityStrip.map((capability) => (
                  <li
                    className="flex items-center gap-2 text-sm font-semibold text-ink"
                    key={capability}
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red"
                      aria-hidden="true"
                    />
                    {capability}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-text-muted">
                {contactDetails.note}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
