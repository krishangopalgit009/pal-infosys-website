import { engagementModels } from '../../data/home'
import { Icon } from '../ui/Icon'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function EngagementModelSection() {
  return (
    <Section>
      <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
        <SectionHeading as="h2" eyebrow="Engagement model" title="The Right Level of Engineering Partnership" description="Start with the business need, then shape the working model around the product, platform, or operational change ahead." />
        <div className="motion-stagger grid border-t border-border sm:grid-cols-2 sm:border-l">
          {engagementModels.map((model) => (
            <article className="interactive-panel border-b border-border py-6 sm:border-r sm:px-6" key={model.title}>
              <Icon className="motion-icon text-brand-red" name={model.icon} />
              <h3 className="type-card mt-5 text-ink">{model.title}</h3>
              <p className="type-card-body mt-3 text-text-muted">{model.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
