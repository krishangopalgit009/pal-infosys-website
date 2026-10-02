import type { NavigationItem } from '../types/navigation'

export const primaryNavigation: NavigationItem[] = [
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Platform Expertise', path: '/platform-expertise' },
  { label: 'Technology', path: '/technology' },
  { label: 'About', path: '/about' },
  { label: 'Insights', path: '/insights' },
]

type MegaMenuContent = {
  summary: string
  exploreLabel: string
  path: string
  columns: { title: string; items: NavigationItem[] }[]
}

export const megaNavigation: Partial<Record<(typeof primaryNavigation)[number]['label'], MegaMenuContent>> = {
  Services: {
    summary: 'Engineering capabilities arranged around the work to build, modernize, connect, and improve business systems.',
    exploreLabel: 'Explore all services',
    path: '/services',
    columns: [
      { title: 'Build', items: [{ label: 'Custom Software Development', path: '/services/custom-software-development' }, { label: 'Enterprise Applications', path: '/solutions' }, { label: 'SaaS Product Engineering', path: '/services/saas-product-engineering' }] },
      { title: 'Modernize & connect', items: [{ label: 'Application Modernization', path: '/services/application-modernization' }, { label: 'Cloud & API Integration', path: '/services' }, { label: 'Data & Database Engineering', path: '/services' }] },
      { title: 'Operate & improve', items: [{ label: 'AI & Business Automation', path: '/services' }, { label: 'Maintenance & Support', path: '/services' }, { label: 'Technology Approach', path: '/technology' }] },
    ],
  },
  Solutions: {
    summary: 'Representative system directions for organizations connecting workflows, information, roles, and integrations.',
    exploreLabel: 'Explore all solutions',
    path: '/solutions',
    columns: [
      { title: 'Operations', items: [{ label: 'Enterprise Applications', path: '/solutions' }, { label: 'Workflow & Automation', path: '/solutions' }, { label: 'Integrated Business Platforms', path: '/solutions' }] },
      { title: 'Products', items: [{ label: 'SaaS Platforms', path: '/solutions' }, { label: 'Platform Expertise', path: '/platform-expertise' }] },
      { title: 'Decision support', items: [{ label: 'Technology Architecture', path: '/technology' }, { label: 'Discuss Your Platform', path: '/contact' }] },
    ],
  },
  Industries: {
    summary: 'Operational software discussions grounded in the records, handoffs, and decision paths that shape each industry.',
    exploreLabel: 'Explore all industries',
    path: '/industries',
    columns: [
      { title: 'Operations', items: [{ label: 'Transportation & Logistics', path: '/industries#transportation-logistics' }, { label: 'HR & Workforce Management', path: '/industries#hr-workforce-management' }, { label: 'Healthcare', path: '/industries#healthcare' }] },
      { title: 'Business systems', items: [{ label: 'Finance & Accounting', path: '/industries#finance-accounting' }, { label: 'Manufacturing', path: '/industries#manufacturing' }, { label: 'Retail & E-commerce', path: '/industries#retail-e-commerce' }] },
      { title: 'Digital products', items: [{ label: 'SaaS / Digital Products', path: '/industries#saas-digital-products' }, { label: 'Discuss Your Workflow', path: '/contact' }] },
    ],
  },
}

export const footerColumns: { title: string; items: NavigationItem[] }[] = [
  { title: 'Company', items: [{ label: 'About PAL INFOSYS', path: '/about' }, { label: 'Insights', path: '/insights' }, { label: 'Contact', path: '/contact' }] },
  { title: 'Expertise', items: [{ label: 'Services', path: '/services' }, { label: 'Solutions', path: '/solutions' }, { label: 'Platform Expertise', path: '/platform-expertise' }, { label: 'Technology', path: '/technology' }] },
  { title: 'Industries', items: [{ label: 'Transportation & Logistics', path: '/industries' }, { label: 'HR & Workforce', path: '/industries' }, { label: 'Healthcare', path: '/industries' }, { label: 'Manufacturing & Retail', path: '/industries' }] },
]

