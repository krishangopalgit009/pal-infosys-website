import type {
  BuildArea,
  Capability,
  CapabilityPanelContent,
  CaseStudy,
  EngagementModel,
  IconName,
  Industry,
  ProcessStep,
  ValuePoint,
} from '../types/home'

export const buildAreas: BuildArea[] = [
  {
    number: '01',
    title: 'Enterprise Operations Platforms',
    description: 'Operational systems that bring business rules, roles, records, reporting, and day-to-day work into one clearer foundation.',
    systemLabel: 'Operational system',
    focus: ['Role-aware workflows', 'Business records and reporting', 'Integration-ready foundations'],
    icon: 'enterprise',
    visual: 'reports',
  },
  {
    number: '02',
    title: 'SaaS Products',
    description: 'Product platforms for teams building software services that need tenant-aware experiences, evolving workflows, and dependable data boundaries.',
    systemLabel: 'Product platform',
    focus: ['Multi-tenant product foundations', 'Customer and team experiences', 'APIs and product configuration'],
    icon: 'saas',
    visual: 'saas',
  },
  {
    number: '03',
    title: 'Workflow & Automation Systems',
    description: 'Structured systems for approvals, handoffs, repeatable work, and operational decisions that should not depend on email or spreadsheets.',
    systemLabel: 'Workflow engine',
    focus: ['Approval and routing flows', 'Process visibility', 'Automation opportunities'],
    icon: 'workflow',
    visual: 'workflow',
  },
  {
    number: '04',
    title: 'Integrated Business Platforms',
    description: 'Connected application foundations for organizations that need operational, customer, and financial systems to exchange information reliably.',
    systemLabel: 'Connected platform',
    focus: ['REST API integration', 'Reliable data exchange', 'Clear system boundaries'],
    icon: 'integration',
    visual: 'integration',
  },
]

export const businessChallenges = [
  { number: '01', title: 'Disconnected Systems', description: 'Critical business information can be spread across separate applications, spreadsheets, and manual processes, making operations harder to manage.', highlight: 'Disconnected systems' },
  { number: '02', title: 'Manual Workflows', description: 'Repetitive approvals, data entry, and operational tasks consume valuable time and increase the risk of avoidable errors.', highlight: 'Manual workflows' },
  { number: '03', title: 'Legacy Software', description: 'Older applications can restrict growth, integrations, and user experience while becoming increasingly difficult to maintain.', highlight: 'Legacy software' },
  { number: '04', title: 'Limited Operational Visibility', description: 'Without connected systems and reliable data, teams struggle to understand what is happening across departments, branches, and workflows.', highlight: 'Operational visibility' },
  { number: '05', title: 'Integration Challenges', description: 'Business platforms, APIs, and third-party systems need to communicate reliably without creating fragile point-to-point integrations.', highlight: 'Integration challenges' },
  { number: '06', title: 'Systems That Cannot Scale', description: 'Applications designed for yesterday’s workload can struggle as users, transactions, locations, and business requirements increase.', highlight: 'Scalability' },
]

export const capabilities: Capability[] = [
  { title: 'Custom Software Development', description: 'Purpose-built applications shaped around the workflows your business depends on.', icon: 'software' },
  { title: 'SaaS Product Engineering', description: 'Reliable product foundations for teams building and evolving software services.', icon: 'saas' },
  { title: 'Enterprise Applications', description: 'Connected internal systems designed for clarity, control, and long-term maintainability.', icon: 'enterprise' },
  { title: 'Cloud & API Integration', description: 'Practical connections between platforms, teams, data, and business processes.', icon: 'integration' },
  { title: 'AI & Business Automation', description: 'Practical AI-assisted workflows and automation for repeatable work, approvals, and operational decisions.', icon: 'automation' },
  { title: 'Application Modernization', description: 'A measured path from constrained legacy systems to maintainable software foundations.', icon: 'modernization' },
]

export const enterpriseCapabilities: CapabilityPanelContent[] = [
  { title: 'Custom Software Development', label: 'Build around the operation', description: 'Purpose-built applications for processes that outgrow disconnected tools and manual coordination.', problem: 'Critical work is split across spreadsheets, email, and systems that do not reflect how teams actually operate.', deliverables: 'Workflow-led applications, business rules, roles, reporting foundations, and integrations that give teams one dependable place to work.', useCases: ['Operational platforms', 'Internal business systems', 'Customer and partner portals'], engineeringConsiderations: 'Workflow boundaries, role design, transaction data, and integration contracts should be clear before the system expands.', suitableFor: 'Teams replacing fragmented manual coordination with software shaped around a defined business operation.', technologies: ['.NET', 'React', 'SQL Server'], icon: 'software' },
  { title: 'Enterprise Applications', label: 'Create an operational backbone', description: 'Systems for complex processes, controlled access, and clearer cross-team oversight.', problem: 'Important decisions and handoffs depend on manual follow-up or information spread across multiple teams.', deliverables: 'Role-aware applications, approvals, dashboards, audit-ready workflows, and data foundations that support accountable operations.', useCases: ['Business management systems', 'Workflow platforms', 'Branch and team operations'], engineeringConsiderations: 'Access control, dependable records, workflow states, reporting, and integrations need to work as one operational foundation.', suitableFor: 'Organizations coordinating structured work across functions, teams, branches, or responsibility levels.', technologies: ['ASP.NET Core', 'TypeScript', 'PostgreSQL'], icon: 'enterprise' },
  { title: 'SaaS Product Engineering', label: 'Design for product evolution', description: 'Product foundations for organizations creating subscription-based services that need to evolve with customers.', problem: 'Product teams must support multiple organizations, changing workflows, and integrations without building fragile complexity.', deliverables: 'Multi-tenant foundations, role-aware experiences, APIs, and data architecture that support deliberate product growth.', useCases: ['B2B SaaS products', 'Customer platforms', 'Subscription workflows'], engineeringConsiderations: 'Tenant boundaries, product configuration, secure access, data design, and change-ready APIs shape how the platform can evolve.', suitableFor: 'Product teams building or improving a software service for multiple customer organizations.', technologies: ['React', 'FastAPI', 'Azure'], icon: 'saas' },
  { title: 'Cloud & API Integration', label: 'Connect the essential systems', description: 'Practical interfaces and integrations for the platforms business teams already rely on.', problem: 'Teams repeat work because essential business data is isolated between applications and third-party services.', deliverables: 'REST APIs, integration patterns, data exchange workflows, and system boundaries that reduce avoidable reconciliation.', useCases: ['System integration', 'Data synchronization', 'Partner connections'], engineeringConsiderations: 'Stable interfaces, validation rules, error handling, security, and traceability help connected systems remain dependable.', suitableFor: 'Organizations linking internal, customer-facing, financial, or third-party applications.', technologies: ['REST APIs', 'Azure', 'Docker'], icon: 'integration' },
  { title: 'AI & Business Automation', label: 'Make repeat work more deliberate', description: 'Practical AI-assisted workflows and automation for repetitive, rules-based work and better-supported operational decisions.', problem: 'Routine work consumes time, creates inconsistent execution, and leaves teams with less capacity for higher-value work.', deliverables: 'Workflow automation, approval routing, process digitization, decision-support foundations, and applied-AI opportunities evaluated against the real process.', useCases: ['Approval workflows', 'Operational automation', 'Decision support'], engineeringConsiderations: 'The business rules, review points, source data, and exception paths must be understood before automation is introduced.', suitableFor: 'Teams with repeatable, rules-based work that needs greater consistency, visibility, or decision support.', technologies: ['Python', 'FastAPI', 'REST APIs'], icon: 'automation' },
  { title: 'Application Modernization', label: 'Evolve without losing business logic', description: 'A measured route from constrained legacy applications to software that can support the next stage of change.', problem: 'Existing systems still support important work but limit integration, performance, maintainability, or new requirements.', deliverables: 'Modernization planning, incremental replacement paths, updated architecture, and integration-ready applications that protect operational continuity.', useCases: ['Legacy renewal', 'Platform re-architecture', 'System migration planning'], engineeringConsiderations: 'Critical business rules, data migration, integration dependencies, and operational risk must guide the modernization sequence.', suitableFor: 'Organizations evolving important software without committing to an unnecessarily disruptive rewrite.', technologies: ['.NET', 'React', 'Docker'], icon: 'modernization' },
  { title: 'Data & Database Engineering', label: 'Make business data dependable', description: 'Data foundations for reliable transactions, reporting, performance, and system integration.', problem: 'Data quality and operational reporting suffer when database design and system boundaries are unclear.', deliverables: 'Data modelling, transactional design, reporting-ready structures, caching, and database engineering shaped around how information is used.', useCases: ['Operational reporting', 'Data consolidation', 'Database modernization'], engineeringConsiderations: 'Data models, transaction integrity, access patterns, reporting needs, and integration flows should be designed together.', suitableFor: 'Teams improving the reliability of operational data, reporting, or application-to-application exchange.', technologies: ['SQL Server', 'PostgreSQL', 'Redis'], icon: 'database' },
  { title: 'Maintenance & Support', label: 'Improve the systems that matter', description: 'Ongoing engineering support for applications that require careful evolution after launch.', problem: 'Business-critical software needs planned improvements without turning routine changes into unnecessary risk.', deliverables: 'Issue triage, planned enhancement, technical assessment, and sustainable change management that keeps systems useful over time.', useCases: ['Application support', 'Feature evolution', 'Technical improvement'], engineeringConsiderations: 'Change priorities, regression risk, technical debt, operational context, and maintainable release practices need ongoing attention.', suitableFor: 'Organizations with active applications that require considered improvement alongside day-to-day business use.', technologies: ['.NET', 'TypeScript', 'Azure'], icon: 'partnership' },
]

export const engagementModels: EngagementModel[] = [
  { title: 'Dedicated Product Development', description: 'For organizations turning a new enterprise platform or digital product into a deliberate engineering programme.', icon: 'saas' },
  { title: 'Application Modernization', description: 'For teams improving critical legacy software while protecting the business logic it already supports.', icon: 'modernization' },
  { title: 'Extended Engineering Team', description: 'For companies that need focused engineering capacity alongside an internal product or technology team.', icon: 'people' },
  { title: 'Long-Term Technology Partnership', description: 'For businesses that need steady enhancement, operational support, and technical decisions tied to changing requirements.', icon: 'partnership' },
]


export const industries: Industry[] = [
  { title: 'Transportation & Logistics', description: 'Booking, Bilty/LR, dispatch, arrival, delivery, freight, billing, accounting, and branch operations.', icon: 'logistics' },
  { title: 'HR & Workforce Management', description: 'Employees, attendance, shifts, leave, workflows, payroll, assets, and employee lifecycle.', icon: 'people' },
  { title: 'Healthcare', description: 'Operational workflows, coordinated records, visibility, and practical system integrations.', icon: 'healthcare' },
  { title: 'Finance & Accounting', description: 'Controlled workflows, business data, billing processes, and operational reporting foundations.', icon: 'finance' },
  { title: 'Manufacturing', description: 'Production operations, business workflows, connected data, and process visibility.', icon: 'manufacturing' },
  { title: 'Retail & E-commerce', description: 'Commerce operations, inventory-facing workflows, customer experiences, and integrations.', icon: 'retail' },
]

export const featuredWork: CaseStudy[] = [
  { title: 'Transport Management Platform', category: 'Transportation & Logistics', summary: 'Representative platform expertise for organizations coordinating booking, Bilty/LR, dispatch, freight, delivery, billing, branch work, and workflow automation opportunities.', technologies: ['ASP.NET Core', 'React', 'SQL Server'], modules: ['Dispatch', 'Freight', 'Billing'], architecture: 'A role-aware workflow and operational-data foundation designed to connect movement with financial processes', visual: 'logistics', isShowcase: true },
  { title: 'Enterprise HRMS', category: 'HR & Workforce Management', summary: 'Representative platform expertise for bringing employee lifecycle, attendance, shifts, leave, approvals, and process digitization into one operating system.', technologies: ['.NET', 'TypeScript', 'PostgreSQL'], modules: ['Employee lifecycle', 'Attendance', 'Workflows'], architecture: 'A role-aware workforce foundation with clear records, controlled actions, and integration-ready boundaries', visual: 'hrms', isShowcase: true },
  { title: 'Business SaaS Platform', category: 'SaaS Product Engineering', summary: 'Representative platform expertise for product teams supporting subscription workflows, multiple customer organizations, and essential integrations.', technologies: ['React', 'FastAPI', 'Azure'], modules: ['Tenants', 'Subscriptions', 'Integrations'], architecture: 'A multi-tenant product foundation shaped for evolving roles, workflows, data, and integrations', visual: 'saas', isShowcase: true },
]

export const valuePoints: ValuePoint[] = [
  { title: 'Business-First Engineering', description: 'We understand workflows, operational requirements, and decision points before selecting a technology direction.', icon: 'business' },
  { title: 'Architecture Built to Scale', description: 'Foundations are shaped to accommodate more users, transactions, locations, integrations, and future functionality without routine rework.', icon: 'enterprise' },
  { title: 'Security by Design', description: 'Role-aware workflows, secure APIs, auditability, and data protection are considered as part of the system foundation.', icon: 'security' },
  { title: 'Strong Backend & Data Engineering', description: 'APIs, database integrity, transactions, caching, and reporting are treated as connected decisions behind reliable business systems.', icon: 'database' },
  { title: 'Integration-Ready Systems', description: 'Clear interfaces and practical integration patterns help essential systems exchange information reliably.', icon: 'integration' },
  { title: 'Maintainable Applications', description: 'Clear boundaries, practical documentation, and understandable components help teams support and extend the system over time.', icon: 'workflow' },
  { title: 'Operational Resilience', description: 'Thoughtful error handling, recoverability, and long-term support help systems remain dependable over time.', icon: 'partnership' },
  { title: 'Long-Term Technology Partnership', description: 'We support the next decision and iteration—not only the first release.', icon: 'partnership' },
]

export const technologies = ['.NET / ASP.NET Core', 'C#', 'React', 'TypeScript', 'Python', 'FastAPI', 'SQL Server', 'PostgreSQL', 'Redis', 'Azure', 'Docker', 'REST APIs']

export const developmentProcess: ProcessStep[] = [
  { number: '01', title: 'Discovery', description: 'Understand business goals, users, workflows, pain points, and the existing technology environment.', label: 'Understand the business' },
  { number: '02', title: 'Solution Architecture', description: 'Define system boundaries, data structure, integrations, security, scalability, and the delivery approach.', label: 'Design the foundation' },
  { number: '03', title: 'Experience Design', description: 'Create clear workflows and interfaces around the people who will actually use the software.', label: 'Shape the experience' },
  { number: '04', title: 'Engineering', description: 'Build incrementally with maintainable architecture, reusable patterns, and disciplined development practices.', label: 'Build with confidence' },
  { number: '05', title: 'Quality Engineering', description: 'Validate business workflows, integrations, edge cases, reliability, security, and performance.', label: 'Validate the system' },
  { number: '06', title: 'Launch & Evolve', description: 'Support rollout, monitor production behavior, and continue improving the system as business needs evolve.', label: 'Improve over time' },
]

export const technologyIcons: Record<string, IconName> = {
  '.NET / ASP.NET Core': 'enterprise',
  'C#': 'software',
  React: 'software',
  TypeScript: 'software',
  Python: 'automation',
  FastAPI: 'integration',
  'SQL Server': 'database',
  PostgreSQL: 'database',
  Redis: 'database',
  Azure: 'cloud',
  Docker: 'cloud',
  'REST APIs': 'integration',
}
