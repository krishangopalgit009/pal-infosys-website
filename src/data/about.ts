import type { DecisionFrameContent, DetailCardContent, PageHeroContent } from '../types/secondary'

export const aboutHero: PageHeroContent = {
  eyebrow: 'About PAL INFOSYS · Serving businesses since 2013',
  title: 'A Thoughtful Approach to Business Software',
  description: 'PAL INFOSYS has been building business software since 2013. Our approach starts with how people make decisions, where information moves, and which trade-offs matter before a technical direction is chosen.',
  cta: { label: 'Discuss Your Engineering Priorities', to: '/contact' },
  secondaryCta: { label: 'Explore Services', to: '/services' },
}

export const aboutDecisionFrame: DecisionFrameContent = {
  eyebrow: 'How to evaluate our approach',
  title: 'A Company Philosophy Grounded in Clear Decisions',
  description: 'PAL INFOSYS approaches business software through the operating context first, then makes the technical decisions and trade-offs visible throughout delivery.',
  items: [
    { label: 'Start with the operation', description: 'Clarify the people, workflows, information, risks, and responsibilities the system needs to support.' },
    { label: 'Keep decisions visible', description: 'Connect architecture, data, integration, security, and delivery choices to the business context behind them.' },
    { label: 'Build for the next change', description: 'Use practical boundaries and maintainable foundations so future requirements can be approached responsibly.' },
  ],
}

export const aboutIntro = {
  eyebrow: 'Who we are',
  title: 'An Engineering Philosophy Grounded in Clear Decisions',
  description: 'Our focus is straightforward: make software decisions understandable, connect delivery to the work at hand, and leave teams with a foundation they can own and improve.',
}

export const aboutHubItems = [
  { id: 'who', label: 'Who We Are', description: 'A software engineering company focused on turning business processes, data, and integration needs into reliable digital systems.', position: 'top-left' },
  { id: 'purpose', label: 'Our Purpose', description: 'Help businesses simplify complex work through software with clear ownership and practical boundaries.', position: 'top-right' },
  { id: 'values', label: 'Core Values', description: 'Understand before building, engineer for the long term, communicate clearly, and protect business reliability.', position: 'right' },
  { id: 'work', label: 'How We Work', description: 'A consultative process that keeps business discovery, architecture, engineering, and validation connected.', position: 'bottom-right' },
  { id: 'approach', label: 'Engineering Mindset', description: 'Business-first engineering with practical technology choices, clear boundaries, and maintainable foundations.', position: 'bottom-left' },
  { id: 'why', label: 'Why PAL INFOSYS', description: 'Software decisions are shaped around operational needs, enterprise workflows, and long-term change readiness.', position: 'left' },
]

export const companyTimeline = {
  year: '2013',
  milestone: 'PAL INFOSYS established',
  description: 'PAL INFOSYS began with a focus on business software development. The capability areas below describe the engineering direction offered today.',
  currentFocus: ['Business Software Development', 'Enterprise Applications', 'SaaS Engineering', 'Integration & Automation', 'Modern Application Architecture'],
}

export const engineeringCulture = [
  { number: '01', title: 'Understand Before Deciding', description: 'Engineering starts with the users, workflow, information, risks, and decision points the system needs to support.' },
  { number: '02', title: 'Keep Trade-Offs Visible', description: 'Architecture, data, integration, security, and delivery choices are connected to the business context rather than treated as isolated technical decisions.' },
  { number: '03', title: 'Build for the Next Change', description: 'Clear boundaries, maintainable components, and practical documentation help a system remain useful as requirements evolve.' },
]

export const missionVision: DetailCardContent[] = [
  { title: 'Mission', icon: 'business', description: 'Help businesses simplify complex work through software with clear ownership and practical boundaries.', groups: [{ label: 'Our focus', items: ['Understand the business problem before the technology', 'Build systems that remain useful beyond the first release'] }] },
  { title: 'Vision', icon: 'enterprise', description: 'Be a trusted technology partner for organizations that depend on software to operate, grow, and adapt.', groups: [{ label: 'What guides us', items: ['Clear collaboration around real operational needs', 'Foundations that can change without unnecessary disruption'] }] },
]

export const coreValues: DetailCardContent[] = [
  { title: 'Understand Before Building', icon: 'workflow', description: 'We start with the operation, decisions, risks, and constraints before proposing a technical direction.', groups: [] },
  { title: 'Engineer for the Long Term', icon: 'software', description: 'Architecture, data, and user experience are considered together so the system can support future change.', groups: [] },
  { title: 'Communicate Clearly', icon: 'modernization', description: 'We make technical decisions understandable, keep assumptions visible, and connect delivery to the business need.', groups: [] },
  { title: 'Protect Business Reliability', icon: 'partnership', description: 'We approach delivery as an ongoing responsibility to the work the system needs to support.', groups: [] },
]

export const howWeWork = [
  { title: 'Understand the operation', description: 'Clarify users, workflows, data, risks, and the decisions the system needs to support.' },
  { title: 'Shape the right foundation', description: 'Define solution boundaries, architecture, integrations, and a delivery approach that fits the actual need.' },
  { title: 'Build, validate, and improve', description: 'Develop in focused increments, validate critical workflows, and make the next step clear for the business and technology team.' },
]

export const whyPal: DetailCardContent[] = [
  { title: 'Business-first engineering', icon: 'business', description: 'Technology is selected in service of operational needs, the people doing the work, and useful business decisions.', groups: [] },
  { title: 'Enterprise workflow understanding', icon: 'integration', description: 'Approvals, role-based access, audit trails, data flows, and cross-team handoffs are treated as connected parts of one operating environment.', groups: [] },
  { title: 'Long-term foundations', icon: 'security', description: 'Security, maintainability, and change readiness are part of the engineering conversation from the start.', groups: [] },
]

export const engineeringMindset = {
  eyebrow: 'Engineering mindset',
  title: 'Technology Should Make the Next Business Decision Easier',
  description: 'We balance present-day delivery needs with the operational and technical decisions a system will need to support over time. That means clear boundaries, thoughtful data design, practical integrations, and software that teams can confidently maintain.',
}
