import type { DecisionFrameContent, PageHeroContent } from '../types/secondary'

export type ServiceLandingPageContent = {
  slug: string
  serviceTitle: string
  metadata: { title: string; description: string; path: string; label: string }
  hero: PageHeroContent
  decisionFrame: DecisionFrameContent
  relatedLink: { label: string; to: string }
}

export const serviceLandingPages: ServiceLandingPageContent[] = [
  {
    slug: 'custom-software-development',
    serviceTitle: 'Custom Software Development',
    metadata: { title: 'Custom Software Development | PAL INFOSYS', description: 'Explore custom software development for operational workflows, enterprise systems, and connected business applications.', path: '/services/custom-software-development', label: 'Custom Software Development' },
    hero: { eyebrow: 'Custom Software Development', title: 'Software Built Around the Work Your Business Actually Does', description: 'PAL INFOSYS designs custom applications for teams that have outgrown disconnected tools, manual coordination, and systems that do not reflect the operation.', cta: { label: 'Discuss Your Software Requirement', to: '/contact' }, secondaryCta: { label: 'Explore Solutions', to: '/solutions' } },
    decisionFrame: { eyebrow: 'When custom software is the right direction', title: 'Start With the Workflow, Not a Generic Product Category', description: 'Custom software becomes relevant when the work, decisions, records, and handoffs that matter to the business need a clearer system foundation.', items: [
      { label: 'Clarify the operation', description: 'Map the people, responsibilities, business rules, information, and exceptions the system must support.' },
      { label: 'Design the foundation', description: 'Shape role-aware workflows, reliable records, reporting, and integration boundaries around that operational context.' },
      { label: 'Plan for change', description: 'Use maintainable components and clear decisions so the system can evolve as requirements become clearer.' },
    ] },
    relatedLink: { label: 'Explore Enterprise Applications', to: '/solutions' },
  },
  {
    slug: 'saas-product-engineering',
    serviceTitle: 'SaaS Product Engineering',
    metadata: { title: 'SaaS Product Engineering | PAL INFOSYS', description: 'Explore SaaS product engineering for multi-tenant platforms, customer workflows, APIs, and evolving product foundations.', path: '/services/saas-product-engineering', label: 'SaaS Product Engineering' },
    hero: { eyebrow: 'SaaS Product Engineering', title: 'Product Foundations That Can Evolve With Customers', description: 'PAL INFOSYS helps product teams shape tenant-aware platforms, customer workflows, APIs, and data boundaries around the product decisions ahead.', cta: { label: 'Discuss Your SaaS Platform', to: '/contact' }, secondaryCta: { label: 'Explore Platform Expertise', to: '/platform-expertise' } },
    decisionFrame: { eyebrow: 'SaaS platform lens', title: 'Treat Product Architecture as a Business Decision', description: 'A SaaS platform needs more than a responsive interface. It needs clear tenancy, product workflow, operational, and integration decisions that can support deliberate change.', items: [
      { label: 'Set tenant boundaries', description: 'Make customer data, access, configuration, and operational responsibilities explicit and testable.' },
      { label: 'Build shared foundations', description: 'Treat roles, configuration, APIs, reporting, and recurring product capabilities as deliberate platform decisions.' },
      { label: 'Support product evolution', description: 'Keep product and integration boundaries clear enough to introduce capability without creating fragile complexity.' },
    ] },
    relatedLink: { label: 'Explore Business SaaS Platforms', to: '/solutions' },
  },
  {
    slug: 'application-modernization',
    serviceTitle: 'Application Modernization',
    metadata: { title: 'Application Modernization Services | PAL INFOSYS', description: 'Explore application modernization for business-critical systems that need maintainability, integration, and a safer path for change.', path: '/services/application-modernization', label: 'Application Modernization' },
    hero: { eyebrow: 'Application Modernization', title: 'Evolve Critical Software Without Losing the Work It Protects', description: 'PAL INFOSYS helps teams assess constrained applications and shape a measured path toward maintainable, integration-ready software foundations.', cta: { label: 'Review Your Existing Application', to: '/contact' }, secondaryCta: { label: 'Read Modernization Insights', to: '/insights/modernizing-legacy-business-applications' } },
    decisionFrame: { eyebrow: 'Modernization planning', title: 'Begin With the Risks and Dependencies of the Existing System', description: 'Modernization decisions should protect critical business rules, data, and integrations while creating a viable route for change.', items: [
      { label: 'Assess what matters', description: 'Identify essential workflows, information, dependencies, and constraints before choosing a replacement path.' },
      { label: 'Sequence the change', description: 'Prioritize the areas that need to improve while keeping operational continuity and data responsibilities visible.' },
      { label: 'Create better boundaries', description: 'Use maintainable architecture and defined interfaces so future change does not recreate the original constraint.' },
    ] },
    relatedLink: { label: 'Read the Modernization Guide', to: '/insights/modernizing-legacy-business-applications' },
  },
]

export const serviceDetailPaths = Object.fromEntries(serviceLandingPages.map((page) => [page.serviceTitle, `/services/${page.slug}`])) as Record<string, string>
