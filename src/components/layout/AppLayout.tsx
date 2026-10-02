import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-card focus:bg-white focus:px-4 focus:py-3 focus:text-ink" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main className="flex-1" id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
