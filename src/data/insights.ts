import type { PageHeroContent } from '../types/secondary'

export type InsightArticle = {
  slug: string
  category: string
  title: string
  summary: string
  author: string
  publishedOn: string
  readingTime: string
  ctaLabel: string
  relatedLink: { label: string; to: string }
  introduction: string
  sections: { title: string; paragraphs: string[]; points?: string[] }[]
  takeaways: string[]
}

export const insightsHero: PageHeroContent = {
  eyebrow: 'Insights',
  title: 'Practical Perspectives for Better Software Decisions',
  description: 'Focused guidance for business and technology leaders evaluating modernization, SaaS foundations, integration, and operational software.',
  cta: { label: 'Discuss Your Software Decision', to: '/contact' },
  secondaryCta: { label: 'Explore Services', to: '/services' },
}

export const insightFocusAreas = [
  'Enterprise software architecture',
  'SaaS engineering and product foundations',
  'Application modernization',
  'Logistics technology and connected operations',
  'Data, integration, AI, and automation',
]

export const insightArticles: InsightArticle[] = [
  {
    slug: 'modernizing-legacy-business-applications',
    category: 'Application Modernization',
    title: 'Modernizing Legacy Business Applications',
    summary: 'A practical way to reduce operational risk while evolving the systems teams rely on every day.',
    author: 'PAL INFOSYS Editorial',
    publishedOn: '2026-09-28',
    readingTime: '6 min read',
    ctaLabel: 'Review Your Existing Application',
    relatedLink: { label: 'Explore Application Modernization', to: '/services/application-modernization' },
    introduction: 'Legacy applications are often difficult not because they are old, but because they support critical workflows, carry years of business rules, and connect to systems that cannot simply be switched off. Modernization should begin with operational understanding, not a technology replacement decision.',
    sections: [
      {
        title: 'Start with the work the system protects',
        paragraphs: [
          'Before choosing a new platform or framework, identify the business processes that depend on the current application. This includes the people who use it, the decisions it supports, the data it owns, and the integrations that move information in and out.',
          'That view separates genuinely critical behaviour from screens, reports, or routines that can be simplified. It also gives stakeholders a clearer way to discuss risk: which operations must continue without interruption, and which areas can change first.',
        ],
        points: [
          'Map core workflows, users, data ownership, and integration boundaries.',
          'Identify manual workarounds and the business rules they are compensating for.',
          'Prioritize areas where reliability, maintainability, or visibility is constrained.',
        ],
      },
      {
        title: 'Choose an evolution path that matches the risk',
        paragraphs: [
          'A full replacement can be appropriate in some situations, but it is not the only option. A measured approach can separate a stable part of the existing application from a workflow that needs to be rebuilt, then introduce a clear integration boundary between them.',
          'This incremental pattern can help teams validate new behaviour with real operational context while reducing the pressure to recreate every historical feature at once. The right sequence depends on process criticality, data complexity, and the dependencies surrounding the application.',
        ],
        points: [
          'Retain stable capabilities when they are still fit for purpose.',
          'Replace high-friction workflows in controlled stages.',
          'Plan data migration and reconciliation as operational work, not a final technical task.',
        ],
      },
      {
        title: 'Make the modernized system easier to change',
        paragraphs: [
          'Modernization has value when it improves the ability to adapt. Clear domain boundaries, dependable APIs, transparent data flows, and maintainable interfaces make future enhancements less disruptive.',
          'Validation should include workflow scenarios, integration failures, data quality checks, security considerations, and performance under realistic use. A launch is the beginning of a managed transition, not the end of the engineering work.',
        ],
      },
    ],
    takeaways: [
      'Treat modernization as an operational change programme as well as a software initiative.',
      'Use business workflow and data dependencies to decide the implementation sequence.',
      'Design new boundaries so future change does not recreate the same constraints.',
    ],
  },
  {
    slug: 'multi-tenant-saas-architecture',
    category: 'SaaS Product Engineering',
    title: 'Multi-Tenant SaaS Architecture',
    summary: 'Architecture decisions that help a SaaS platform support multiple customers without losing clarity, control, or room to evolve.',
    author: 'PAL INFOSYS Editorial',
    publishedOn: '2026-09-28',
    readingTime: '7 min read',
    ctaLabel: 'Discuss Your SaaS Platform',
    relatedLink: { label: 'Explore SaaS Product Engineering', to: '/services/saas-product-engineering' },
    introduction: 'Multi-tenant SaaS architecture is not simply a database choice. It is the set of decisions that define how customer data, configuration, access, workflows, and operational responsibilities remain separated while the product can be managed as one platform.',
    sections: [
      {
        title: 'Define the tenancy boundary before scaling it',
        paragraphs: [
          'Every SaaS platform needs a clear answer to a basic question: what belongs to a tenant, and what belongs to the shared product? Identity, authorization, customer configuration, data access, and audit history all depend on that answer.',
          'The appropriate isolation model varies by product, risk profile, and operational needs. Shared infrastructure can be efficient, while stronger separation may be appropriate for certain data or customer requirements. The important part is making that model explicit and testable.',
        ],
        points: [
          'Apply tenant context consistently across user access, data queries, jobs, and integrations.',
          'Keep authorization decisions separate from simple user-interface visibility rules.',
          'Record audit-relevant actions where business workflows require traceability.',
        ],
      },
      {
        title: 'Build shared capabilities as product foundations',
        paragraphs: [
          'Customer onboarding, roles, configuration, notifications, reporting, and integration settings are recurring platform capabilities. Treating them as deliberate foundations helps product teams avoid rebuilding similar logic inside every new module.',
          'This does not mean making everything generic on day one. It means identifying the repeatable needs that are already visible and keeping their responsibilities clear enough to evolve as the product learns from customers.',
        ],
        points: [
          'Use configuration for controlled variation, not as a substitute for product decisions.',
          'Keep domain workflows separate from tenant-management and platform-administration concerns.',
          'Design integration contracts that identify tenant ownership and failure handling.',
        ],
      },
      {
        title: 'Plan for observability and change from the beginning',
        paragraphs: [
          'A multi-tenant platform needs operational visibility that helps teams understand behaviour without exposing customer data across boundaries. Useful monitoring considers application errors, integration health, background processing, latency, and the quality of important data flows.',
          'As a product expands, modular boundaries and clear APIs make it easier to introduce new capabilities without coupling every customer-facing change to the entire system.',
        ],
      },
    ],
    takeaways: [
      'Tenancy is an access, data, workflow, and operational design decision—not only a storage decision.',
      'Shared platform capabilities should be deliberate, with clear responsibilities and controls.',
      'Observability and tenant-aware integration design help the product evolve responsibly.',
    ],
  },
  {
    slug: 'connecting-transport-operations-software',
    category: 'Logistics Technology',
    title: 'Connecting Booking, Dispatch, Delivery and Billing in Transport Software',
    summary: 'Why transport operations benefit when each stage of a movement is connected through dependable workflows and data.',
    author: 'PAL INFOSYS Editorial',
    publishedOn: '2026-09-28',
    readingTime: '6 min read',
    ctaLabel: 'Discuss Your Operational Workflow',
    relatedLink: { label: 'Explore Transportation & Logistics', to: '/industries' },
    introduction: 'Transport operations move through a chain of decisions: a booking is accepted, a vehicle or partner is assigned, dispatch is coordinated, delivery activity is recorded, and billing is prepared. When those stages live in disconnected systems, teams spend time reconciling information instead of managing the movement.',
    sections: [
      {
        title: 'Treat the movement as one connected operational record',
        paragraphs: [
          'A useful transport platform connects the stages of an order without forcing every team into the same screen. Booking, LR or bilty information, dispatch, arrival, delivery, proof records, freight calculation, billing, and accounting integration can each have their own workflow while referring to dependable shared operational data.',
          'The goal is not a larger collection of forms. It is a clear sequence where the status, responsibility, and next action are visible to the people who need them.',
        ],
        points: [
          'Keep booking and consignment information consistent through dispatch and delivery.',
          'Make status changes and exceptions visible to the relevant branch or operations team.',
          'Connect billing preparation to verified operational events rather than repeated manual entry.',
        ],
      },
      {
        title: 'Design for exceptions as well as the expected route',
        paragraphs: [
          'Arrivals change, documents are delayed, quantities need correction, and delivery details may require follow-up. A platform should give teams a controlled way to record these events, understand what changed, and continue the workflow without losing traceability.',
          'That requires clear permissions, reliable timestamps, validation around key fields, and integration patterns that can recover when a connected system is unavailable or returns incomplete data.',
        ],
        points: [
          'Model operational exceptions and approvals explicitly.',
          'Preserve the source and timing of important status or billing changes.',
          'Use integration monitoring so failed exchanges can be identified and handled.',
        ],
      },
      {
        title: 'Use data to improve coordination, not just reporting',
        paragraphs: [
          'Connected data can help teams review pending deliveries, billing readiness, branch activity, and workflow bottlenecks from the same operational foundation. Reporting is more useful when it is based on data that the workflow itself maintains.',
          'As transport operations grow across branches, partners, routes, and customers, this foundation makes it easier to introduce new process controls or integrations without creating another disconnected spreadsheet layer.',
        ],
      },
    ],
    takeaways: [
      'Connect booking, dispatch, delivery, and billing through shared operational records.',
      'Design exceptions, approvals, and integration failures into the workflow.',
      'Use reliable workflow data as the basis for reporting and coordination.',
    ],
  },
]
