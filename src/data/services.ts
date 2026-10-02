import type { DecisionFrameContent, PageHeroContent } from '../types/secondary'

export type ServiceGroup = {
  number: string
  title: string
  description: string
  services: string[]
}

export const servicesHero: PageHeroContent = {
  eyebrow: 'Services',
  title: 'Software Capabilities for Building, Changing, and Supporting Systems',
  description: 'From new product development to modernization, integration, data engineering, and support, PAL INFOSYS brings together the engineering capabilities needed for the work in front of your team.',
  cta: { label: 'Discuss Your Software Requirement', to: '/contact' },
  secondaryCta: { label: 'Explore Solutions', to: '/solutions' },
}

export const servicesDecisionFrame: DecisionFrameContent = {
  eyebrow: 'Service navigator',
  title: 'Choose the Capability That Fits the Work Ahead',
  description: 'A programme may need more than one service. Start with the operational change in front of the team, then shape the engineering response around it.',
  items: [
    { label: 'Build', description: 'For a new business system, enterprise application, or SaaS product that needs a deliberate foundation.' },
    { label: 'Modernize & connect', description: 'For a critical application, data flow, or integration landscape that needs to become easier to change and manage.' },
    { label: 'Operate & improve', description: 'For active systems that need focused automation, planned enhancement, and careful ongoing engineering support.' },
  ],
}

export const serviceGroups: ServiceGroup[] = [
  {
    number: '01',
    title: 'Build',
    description: 'For new business systems and product platforms that need a deliberate engineering foundation from the start.',
    services: ['Custom Software Development', 'Enterprise Applications', 'SaaS Product Engineering'],
  },
  {
    number: '02',
    title: 'Modernize & Connect',
    description: 'For critical applications and data flows that need to evolve, connect, or become easier to manage.',
    services: ['Application Modernization', 'Cloud & API Integration', 'Data & Database Engineering'],
  },
  {
    number: '03',
    title: 'Operate & Improve',
    description: 'For teams improving repeatable work and making careful, sustained changes to systems that remain important after launch.',
    services: ['AI & Business Automation', 'Maintenance & Support'],
  },
]

export const servicesContext = {
  eyebrow: 'Engagement context',
  title: 'Start With the Business Problem, Then Shape the Right Engineering Response',
  description: 'A single programme may need product engineering, data work, integrations, modernization, and support. We help establish the right response before treating any individual technology as the answer.',
}
