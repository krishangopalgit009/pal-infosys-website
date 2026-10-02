import { enterpriseCapabilities } from '../../data/home'
import { CapabilityPanel } from '../ui/CapabilityPanel'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function CapabilitiesSection() {
  return (
    <Section tone="muted">
      <SectionHeading as="h2" eyebrow="Core capabilities" title="Engineering Capability for the Systems Your Business Relies On" description="Each capability starts with the operational challenge, then brings together product thinking, architecture, data, AI-assisted automation, and delivery around a practical business need." />
      <div className="motion-stagger mt-10 grid gap-5 xl:gap-6">
        {enterpriseCapabilities.map((capability, index) => <CapabilityPanel capability={capability} index={index} key={capability.title} />)}
      </div>
    </Section>
  )
}
