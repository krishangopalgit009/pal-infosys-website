import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'

type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'text'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
  to?: string
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-red text-white hover:bg-brand-red/90 hover:shadow-[0_8px_20px_rgb(222_20_29_/_0.16)]',
  secondary: 'border border-ink bg-white text-ink hover:bg-surface',
  dark: 'bg-ink text-white hover:bg-ink-subtle',
  text: 'text-ink underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red',
}

export function Button({ children, className = '', to, variant = 'primary', ...props }: ButtonProps) {
  const classes = `motion-button group type-button inline-flex min-h-11 items-center justify-center gap-2 rounded-card px-5 py-3 transition duration-200 hover:-translate-y-px ${variantClasses[variant]} ${className}`
  const content = <><span>{children}</span><span aria-hidden="true" className="button-arrow">→</span></>

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  )
}
