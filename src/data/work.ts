import type { DetailCardContent, PageHeroContent } from '../types/secondary'

export const caseStudyFramework = {
  eyebrow: 'Representative platform framework',
  title: 'A Clear Way to Evaluate Platform Expertise',
  description: 'Each example separates the operating context from the system direction, technology choices, and intended operational value.',
  steps: [
    { label: 'Business context', description: 'The operating environment, people, records, and work the system needs to support.' },
    { label: 'Challenge', description: 'The coordination, information, workflow, or change constraint to resolve.' },
    { label: 'System designed', description: 'A representative platform direction and the capabilities it brings together.' },
    { label: 'Architecture & technology', description: 'The system boundaries and approved technology choices that can support the direction.' },
    { label: 'Outcome direction', description: 'The operational direction the system is intended to support.' },
  ],
}

export const workHero: PageHeroContent = {
  eyebrow: 'Platform expertise',
  title: 'Platform Thinking for Complex Business Operations',
  description: 'Explore how PAL INFOSYS approaches systems behind complex operations, from workflow and data design to integration and platform architecture.',
  cta: { label: 'Discuss a Similar System', to: '/contact' },
  secondaryCta: { label: 'Explore Services', to: '/services' },
}

// RELEASE DECISION: These are representative system templates only. Replace the outcome direction with an approved, measurable project outcome only after client permission and content review.
export const platformShowcases: DetailCardContent[] = [
  {
    title: 'Transport Operations Platform',
    label: 'Transportation & Logistics',
    description: 'A representative system template for transportation organizations that need movement, documents, commercial events, and branch activity to work together.',
    groups: [
      { label: 'Business Context', items: ['Transportation teams coordinate booking, LR/Bilty, dispatch, arrival, delivery, freight, billing, accounting integration, and branch operations'] },
      { label: 'Challenge', items: ['Movement and financial processes become difficult to coordinate when records, responsibilities, and updates are fragmented'] },
      { label: 'System Designed', items: ['A transport operations platform that connects workflow stages with controlled, reporting-ready operational data'] },
      { label: 'Key Capabilities', items: ['Dispatch and delivery workflows', 'Freight, billing, branch operations, and exception visibility'] },
      { label: 'Architecture', items: ['Role-aware actions, transaction integrity, integration boundaries, and a clear operating view'] },
      { label: 'Technology', items: ['ASP.NET Core', 'React', 'SQL Server'] },
      { label: 'Outcome Direction', items: ['A clearer view of movement, documents, responsibilities, and financial events'] },
    ],
    visual: 'logistics',
    cta: { label: 'Discuss a Similar System', to: '/contact' },
  },
  {
    title: 'Enterprise HRMS',
    label: 'HR & Workforce Management',
    description: 'A representative system template for organizations that need workforce information and people processes to remain coordinated as they evolve.',
    groups: [
      { label: 'Business Context', items: ['Employee lifecycle, attendance, roster planning, leave, payroll, assets, approvals, and exit management require clear ownership'] },
      { label: 'Challenge', items: ['Manual follow-up and fragmented records make it difficult to coordinate workforce processes across teams'] },
      { label: 'System Designed', items: ['A unified HRMS foundation for structured records, workflows, controlled actions, and reporting'] },
      { label: 'Key Capabilities', items: ['Employee lifecycle, attendance, roster, leave, payroll, and approval workflows'] },
      { label: 'Architecture', items: ['Role-based access, auditable changes, reliable workforce data, and integration-ready boundaries'] },
      { label: 'Technology', items: ['.NET', 'TypeScript', 'PostgreSQL'] },
      { label: 'Outcome Direction', items: ['More consistent workforce processes and clearer record ownership'] },
    ],
    visual: 'hrms',
    cta: { label: 'Discuss a Similar System', to: '/contact' },
  },
  {
    title: 'Business SaaS Platform',
    label: 'SaaS Product Engineering',
    description: 'A representative system template for teams creating subscription-based products with evolving customer, workflow, and integration needs.',
    groups: [
      { label: 'Business Context', items: ['A product must support multiple customer organizations, roles, subscription workflows, and connected services'] },
      { label: 'Challenge', items: ['Product teams need to add capability without turning tenant-specific needs into fragile platform complexity'] },
      { label: 'System Designed', items: ['A multi-tenant SaaS foundation built around product workflows, APIs, and deliberate data boundaries'] },
      { label: 'Key Capabilities', items: ['Tenant-aware experiences, subscription workflows, roles, and integrations'] },
      { label: 'Architecture', items: ['Secure tenant boundaries, scalable data access, maintainable services, and change-ready product structure'] },
      { label: 'Technology', items: ['React', 'FastAPI', 'Azure'] },
      { label: 'Outcome Direction', items: ['Deliberate product evolution across workflows, roles, and integrations'] },
    ],
    visual: 'saas',
    cta: { label: 'Discuss a Similar System', to: '/contact' },
  },
]
