export type IconName =
  | 'automation'
  | 'business'
  | 'cloud'
  | 'database'
  | 'enterprise'
  | 'finance'
  | 'healthcare'
  | 'integration'
  | 'logistics'
  | 'manufacturing'
  | 'modernization'
  | 'partnership'
  | 'people'
  | 'retail'
  | 'saas'
  | 'security'
  | 'software'
  | 'workflow'

import type { ProductVisualVariant } from './product-visual'

export type Capability = {
  title: string
  description: string
  icon: IconName
}

export type BuildArea = {
  number: string
  title: string
  description: string
  systemLabel: string
  focus: string[]
  icon: IconName
  visual: ProductVisualVariant
}

export type CapabilityPanelContent = {
  title: string
  label: string
  description: string
  problem: string
  deliverables: string
  useCases: string[]
  engineeringConsiderations: string
  suitableFor: string
  technologies: string[]
  icon: IconName
}

export type EngagementModel = {
  title: string
  description: string
  icon: IconName
}

export type Industry = {
  title: string
  description: string
  icon: IconName
}

export type CaseStudy = {
  title: string
  category: string
  summary: string
  technologies: string[]
  modules: string[]
  architecture: string
  visual: ProductVisualVariant
  isShowcase: true
}

export type ValuePoint = {
  title: string
  description: string
  icon: IconName
}

export type ProcessStep = {
  number: string
  title: string
  description: string
  label: string
}

export type Testimonial = {
  quote: string
  attribution: string
  isMock: true
}

export type Insight = {
  category: string
  title: string
  summary: string
  isMock: true
}
