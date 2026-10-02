import type { IconName } from './home'
import type { ProductVisualVariant } from './product-visual'

export type PageHeroContent = {
  eyebrow: string
  title: string
  titleHighlight?: string
  description: string
  align?: 'left' | 'center'
  cta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
}

export type DecisionFrameContent = {
  eyebrow: string
  title: string
  description: string
  items: { label: string; description: string }[]
}

export type DetailGroup = {
  label: string
  items: string[]
}

export type DetailCardContent = {
  title: string
  description?: string
  icon?: IconName
  label?: string
  isMock?: boolean
  visual?: ProductVisualVariant
  groups: DetailGroup[]
  cta?: { label: string; to?: string }
}

