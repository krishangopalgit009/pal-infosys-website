import type { PageMetadata } from '../types/page'

export const pageMeta = {
  home: {
    title: 'PAL INFOSYS | Enterprise Software Development & SaaS Solutions',
    description: 'PAL INFOSYS designs enterprise software, SaaS platforms, and digital solutions around real business operations.',
    path: '/',
    label: 'Home',
  },
  about: {
    title: 'About PAL INFOSYS | Enterprise Software Engineering',
    description: 'Learn how PAL INFOSYS approaches enterprise software engineering, business workflows, and long-term technology partnership.',
    path: '/about',
    label: 'About',
  },
  services: {
    title: 'Software Development Services | PAL INFOSYS',
    description: 'Explore custom software development, enterprise applications, SaaS engineering, integrations, modernization, and support services.',
    path: '/services',
    label: 'Services',
  },
  solutions: {
    title: 'Business Software & SaaS Solutions | PAL INFOSYS',
    description: 'Explore business software and SaaS solution directions for connected workflows, integrations, modernization, and operational systems.',
    path: '/solutions',
    label: 'Solutions',
  },
  industries: {
    title: 'Industry-Specific Software Solutions | PAL INFOSYS',
    description: 'Explore software solutions shaped for transportation, workforce management, healthcare, finance, manufacturing, retail, and SaaS.',
    path: '/industries',
    label: 'Industries',
  },
  work: {
    title: 'Representative Platform Expertise | PAL INFOSYS',
    description: 'Explore representative platform expertise for operational software, enterprise workflows, SaaS engineering, and system architecture.',
    path: '/platform-expertise',
    label: 'Platform Expertise',
  },
  technology: {
    title: 'Software Engineering Technologies & Architecture | PAL INFOSYS',
    description: 'Explore the software engineering technologies, architecture principles, integration patterns, and data foundations used by PAL INFOSYS.',
    path: '/technology',
    label: 'Technology',
  },
  insights: {
    title: 'Enterprise Software, SaaS & AI Insights | PAL INFOSYS',
    description: 'Read practical PAL INFOSYS insights on enterprise software architecture, SaaS engineering, application modernization, logistics systems, and integration.',
    path: '/insights',
    label: 'Insights',
  },
  contact: {
    title: 'Contact PAL INFOSYS | Software Project Consultation',
    description: 'Contact PAL INFOSYS to discuss a software project, business workflow, SaaS product, integration, or modernization need.',
    path: '/contact',
    label: 'Contact',
  },
  notFound: {
    title: 'Page Not Found | PAL INFOSYS',
    description: 'The requested PAL INFOSYS page could not be found.',
    path: '',
    label: 'Page Not Found',
    indexable: false,
  },
} satisfies Record<string, PageMetadata>
