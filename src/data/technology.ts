import type { DecisionFrameContent, DetailCardContent, PageHeroContent } from '../types/secondary'
import type { IconName } from '../types/home'

export const technologyHero: PageHeroContent = {
  eyebrow: 'Technology',
  title: 'Technology Choices Grounded in Engineering Needs',
  description: 'Technology is evaluated through system boundaries, data responsibilities, integration requirements, security, and the choices that make change manageable—not simply what is currently popular.',
  cta: { label: 'Discuss Your System Architecture', to: '/contact' },
  secondaryCta: { label: 'Explore Services', to: '/services' },
}

export const technologyDecisionFrame: DecisionFrameContent = {
  eyebrow: 'Technology decision lens',
  title: 'Choose Technology Through the System It Must Support',
  description: 'The right technology direction follows the responsibilities, data, integrations, operational risk, and rate of change that shape a business system.',
  items: [
    { label: 'System responsibilities', description: 'Make clear what belongs in the experience, application, workflow, data, and platform layers.' },
    { label: 'Data & integration', description: 'Treat reliable records, transactions, interfaces, and failure paths as connected engineering decisions.' },
    { label: 'Change readiness', description: 'Evaluate maintainability, observability, performance, security, and scalability before complexity grows.' },
  ],
}

export const technologyGroups: { title: string; description: string; icon: IconName; items: string[] }[] = [
  { title: 'Backend Engineering', description: '.NET, ASP.NET Core, C#, Python, and FastAPI support business rules, reliable APIs, integrations, transactions, and service layers for enterprise applications.', icon: 'enterprise', items: ['.NET', 'ASP.NET Core', 'C#', 'Python', 'FastAPI'] },
  { title: 'Frontend Engineering', description: 'React and TypeScript support responsive, maintainable business applications designed around the workflows and decisions people need to make.', icon: 'software', items: ['React', 'TypeScript'] },
  { title: 'Data Platforms', description: 'SQL Server, PostgreSQL, and Redis support transactional integrity, reporting, performance, and scalable access to operational data.', icon: 'database', items: ['SQL Server', 'PostgreSQL', 'Redis'] },
  { title: 'Cloud & Platform', description: 'Azure and Docker support deployment consistency, operational reliability, scalable environments, and modernization work.', icon: 'cloud', items: ['Azure', 'Docker'] },
  { title: 'Architecture & Integration', description: 'REST APIs, microservices, and integration patterns establish clear boundaries between systems that need to exchange information reliably.', icon: 'integration', items: ['REST APIs', 'Microservices', 'Integration patterns'] },
  { title: 'AI & Business Automation', description: 'Python, FastAPI, and integration services support AI-assisted workflows, process automation, and carefully scoped intelligent services within enterprise systems.', icon: 'automation', items: ['Python', 'FastAPI', 'Integration services'] },
]

export const architectureLayers: { number: string; label: string; technologies: string; description: string; icon: IconName }[] = [
  { number: '01', label: 'Experience layer', technologies: 'React / TypeScript', description: 'Business interfaces shaped around the workflows, decisions, and information people need to use.', icon: 'software' },
  { number: '02', label: 'Application services', technologies: 'ASP.NET Core / FastAPI', description: 'APIs and service layers that expose defined application behavior and integration boundaries.', icon: 'enterprise' },
  { number: '03', label: 'Domain & workflow layer', technologies: 'Business rules / approvals / process logic', description: 'The operational rules, states, permissions, and handoffs that give the system its business meaning.', icon: 'workflow' },
  { number: '04', label: 'Data foundation', technologies: 'SQL Server / PostgreSQL / Redis', description: 'Transactional data, reporting foundations, and performance-aware access to operational information.', icon: 'database' },
  { number: '05', label: 'Platform & connections', technologies: 'Azure / Docker / Integrations', description: 'Deployment, runtime, and well-defined connections to the systems a business already relies on.', icon: 'integration' },
]

export const crossCuttingConcerns = ['Security', 'Observability', 'Auditability', 'Performance', 'Scalability', 'Data Integrity']

export const technologyPrinciples: DetailCardContent[] = [
  { title: 'Architecture Principles', icon: 'enterprise', description: 'Define clear system boundaries and responsibilities before implementation complexity grows.', groups: [] },
  { title: 'Security & Maintainability', icon: 'security', description: 'Consider access, auditability, APIs, data protection, and future support as part of the foundation.', groups: [] },
  { title: 'Performance & Scalability', icon: 'modernization', description: 'Shape data access, transactions, caching, and operational visibility around real system demand and growth needs.', groups: [] },
  { title: 'Data & Integration', icon: 'integration', description: 'Create dependable data foundations and well-defined connections between important systems.', groups: [] },
  { title: 'Modernization', icon: 'workflow', description: 'Evolve constrained applications through assessment, phased change, and maintainable foundations.', groups: [] },
]

export const technologyDecisionAreas = [
  { title: 'Architecture', description: 'Define system boundaries, responsibilities, and the path for change before implementation complexity grows.' },
  { title: 'Security', description: 'Consider access, auditability, APIs, and data protection as part of the foundation—not an afterthought.' },
  { title: 'Performance', description: 'Shape data access, transaction behavior, caching, and operational visibility around real system demand.' },
  { title: 'Modernization', description: 'Evolve constrained applications through deliberate assessment, phased change, and maintainable foundations.' },
]
