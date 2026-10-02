import type { IconName } from '../../types/home'
import { Icon } from './Icon'

type TechItemProps = { label: string; icon: IconName }

export function TechItem({ label, icon }: TechItemProps) {
  return (
    <li className="type-nav flex items-center gap-3 rounded-card border border-border bg-white px-4 py-3 text-ink">
      <Icon className="h-5 w-5 text-brand-red" name={icon} />
      {label}
    </li>
  )
}
