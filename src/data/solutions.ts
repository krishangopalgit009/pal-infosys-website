import type { IconName } from '../types/home'
import type { DecisionFrameContent, PageHeroContent } from '../types/secondary'

export const solutionsHero: PageHeroContent = {
  eyebrow: 'Our Solutions',
  title: 'Digital Systems Designed for',
  titleHighlight: 'Complex Operations',
  description: 'We shape software foundations that coordinate workflows, information, users, and integrations across the business.',
  align: 'center',
  cta: { label: 'Discuss Your Platform Requirements', to: '/contact' },
  secondaryCta: { label: 'Explore Services', to: '/services' },
}

export const solutionsDecisionFrame: DecisionFrameContent = {
  eyebrow: 'Solution lens',
  title: 'Evaluate the Complete Operating System',
  description: 'A solution is more than a service or feature list. It brings together the business problem, the way work moves, the system foundation, and the decision the business needs to make next.',
  items: [
    { label: 'Business problem', description: 'Identify the operational constraint, fragmented information, or manual handoff that needs to be addressed.' },
    { label: 'System foundation', description: 'Define the workflows, roles, data, interfaces, and integration boundaries the system must hold together.' },
    { label: 'Practical direction', description: 'Use the platform discussion to clarify a viable path without assuming a client outcome or one-size-fits-all product.' },
  ],
}

export type SolutionDiscussionContent = {
  number: string
  title: string
  icon: IconName
  businessProblem: string
  process: string
  foundation: string
  outcome: string
  capabilities: string[]
}

export const solutionDiscussions: SolutionDiscussionContent[] = [
  {
    number: '01',
    title: 'Enterprise Applications',
    icon: 'enterprise',
    businessProblem: 'Critical work is split across tools, people, and manual handoffs, making ownership and operational visibility harder to maintain.',
    process: 'Map the decisions, records, roles, and handoffs that define the operation before shaping the system workflow.',
    foundation: 'A role-aware enterprise application with controlled workflows, connected business data, reporting, and integration boundaries.',
    outcome: 'A clearer operational foundation for teams that need dependable processes and information in one system.',
    capabilities: ['Role-aware workflows', 'Operational dashboards', 'Connected business data'],
  },
  {
    number: '02',
    title: 'SaaS Products',
    icon: 'saas',
    businessProblem: 'A product must support different customer organizations and evolving requirements without losing control of the core platform.',
    process: 'Define the tenant model, user journeys, configuration needs, and product rules that should remain consistent as the service evolves.',
    foundation: 'A multi-tenant platform with product configuration, secure access, APIs, and deliberate data boundaries.',
    outcome: 'A product foundation that can support deliberate iteration across customer experiences, workflows, and integrations.',
    capabilities: ['Tenant-aware platform design', 'Configurable workflows', 'API-ready product foundations'],
  },
  {
    number: '03',
    title: 'AI & Business Automation',
    icon: 'automation',
    businessProblem: 'Repeatable work, approvals, and information handling consume time when the process is unclear or dependent on manual follow-up.',
    process: 'Identify the rule-based steps, data sources, review points, and exceptions before selecting the right automation opportunity.',
    foundation: 'A structured workflow layer with automation, decision-support touchpoints, process visibility, and human review where needed.',
    outcome: 'A more consistent approach to repeatable operational work without separating automation from business accountability.',
    capabilities: ['Workflow automation', 'Structured approval paths', 'Practical AI-assisted processes'],
  },
  {
    number: '04',
    title: 'Cloud & API Integration',
    icon: 'integration',
    businessProblem: 'Essential customer, operational, and financial information sits in separate applications and requires manual reconciliation.',
    process: 'Clarify the systems of record, information flows, ownership, validation rules, and failure paths before connecting platforms.',
    foundation: 'Well-defined APIs and integration workflows with controlled data exchange, validation, error handling, and traceability.',
    outcome: 'A more dependable connected-system foundation for information that needs to move between essential platforms.',
    capabilities: ['REST API design', 'System integration workflows', 'Traceable data exchange'],
  },
  {
    number: '05',
    title: 'Application Modernization',
    icon: 'modernization',
    businessProblem: 'An important application still supports daily work but constrains change, maintainability, integration, or user experience.',
    process: 'Assess business-critical rules, data, dependencies, and risks to define a measured modernization sequence instead of a disruptive rewrite.',
    foundation: 'An incremental modernization path with maintainable architecture, integration-ready boundaries, and protected operational knowledge.',
    outcome: 'A practical direction for evolving critical software while keeping the work it supports in view.',
    capabilities: ['Architecture assessment', 'Phased modernization planning', 'Maintainable system boundaries'],
  },
]
