import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  children: ReactNode
}

export function Badge({ children, className = '', ...props }: BadgeProps) {
  return (
    <span
      className={`type-kicker inline-flex items-center rounded-full border border-brand-red/30 bg-brand-red/10 px-3 py-1 text-brand-red ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
