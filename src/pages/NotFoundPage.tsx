import { pageMeta } from '../data/page-meta'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/ui/SectionHeading'

export function NotFoundPage() {
  usePageMetadata(pageMeta.notFound)

  return (
    <Section tone="muted">
      <SectionHeading as="h1" eyebrow="404" title="Page Not Found" description="The page you requested is not available or may have moved." />
      <Button className="mt-8" to="/">Back to Home</Button>
    </Section>
  )
}
