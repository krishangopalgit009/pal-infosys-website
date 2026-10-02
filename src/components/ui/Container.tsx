import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-310 px-4 md:px-6 xl:px-8 ${className}`} {...props}>
      {children}
    </div>
  )
}
