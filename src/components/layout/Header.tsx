import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import palLogo from '../../assets/logo/PAL LOGO.png'
import palLogoWebp from '../../assets/logo/pal-logo-160.webp'
import { megaNavigation, primaryNavigation } from '../../data/navigation'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState<keyof typeof megaNavigation | null>(null)
  const location = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const megaCloseTimerRef = useRef<number | null>(null)

  const cancelMegaClose = () => {
    if (megaCloseTimerRef.current !== null) {
      window.clearTimeout(megaCloseTimerRef.current)
      megaCloseTimerRef.current = null
    }
  }

  const scheduleMegaClose = () => {
    cancelMegaClose()
    megaCloseTimerRef.current = window.setTimeout(() => {
      setOpenMegaMenu(null)
      megaCloseTimerRef.current = null
    }, 180)
  }

  useEffect(() => { cancelMegaClose(); setIsMenuOpen(false); setOpenMegaMenu(null) }, [location.pathname])
  useEffect(() => () => cancelMegaClose(), [])
  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > 16)
    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })
    return () => window.removeEventListener('scroll', updateHeaderState)
  }, [])
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isMenuOpen) { setIsMenuOpen(false); menuButtonRef.current?.focus() }
        if (openMegaMenu) { cancelMegaClose(); setOpenMegaMenu(null) }
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen, openMegaMenu])
  useEffect(() => {
    if (!isMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [isMenuOpen])

  const navigationLinkClass = ({ isActive }: { isActive: boolean }) => `type-nav inline-flex min-h-11 items-center border-b-2 border-transparent px-2.5 py-2 transition-colors hover:border-brand-red/50 hover:text-brand-red ${isActive ? 'border-brand-red text-brand-red' : 'text-text'}`
  const menuButtonClass = (isActive: boolean) => `type-nav inline-flex min-h-11 items-center gap-1 border-b-2 border-transparent px-2.5 py-2 transition-colors hover:border-brand-red/50 hover:text-brand-red ${isActive ? 'border-brand-red text-brand-red' : 'text-text'}`
  const activeMegaMenu = openMegaMenu ? megaNavigation[openMegaMenu] : undefined

  return (
    <header className={`sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm transition-[background-color,box-shadow] duration-200 ${isScrolled ? 'shadow-[0_6px_18px_rgb(31_31_31_/_0.08)]' : 'shadow-[0_1px_0_rgb(31_31_31_/_0.04)]'}`}>
      <Container className={`relative flex items-center justify-between gap-4 transition-[min-height] duration-200 ${isScrolled ? 'min-h-18' : 'min-h-20'}`}>
        <Link aria-label="PAL INFOSYS home" className="header-logo relative inline-flex shrink-0 items-center justify-center" to="/"><picture><source srcSet={palLogoWebp} type="image/webp" /><img alt="PAL INFOSYS" className="header-logo-image h-11 w-11 object-contain md:h-12 md:w-12 xl:h-[52px] xl:w-[52px]" decoding="async" fetchPriority="high" height="160" src={palLogo} width="160" /></picture></Link>
        <div className="static hidden xl:block" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) { cancelMegaClose(); setOpenMegaMenu(null) } }} onMouseEnter={cancelMegaClose} onMouseLeave={scheduleMegaClose}>
        <nav aria-label="Primary navigation" className="flex items-center gap-0.5">{primaryNavigation.map((item) => {
          const megaMenu = megaNavigation[item.label]
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(`${item.path}/`))
          if (!megaMenu) return <NavLink className={navigationLinkClass} key={item.path} to={item.path}>{item.label}</NavLink>
          const expanded = openMegaMenu === item.label
          return <button aria-controls={`mega-menu-${item.label.toLowerCase()}`} aria-expanded={expanded} className={menuButtonClass(isActive)} key={item.path} onClick={() => { cancelMegaClose(); setOpenMegaMenu((open) => open === item.label ? null : item.label) }} onFocus={() => { cancelMegaClose(); setOpenMegaMenu(item.label) }} onMouseEnter={() => { cancelMegaClose(); setOpenMegaMenu(item.label) }} type="button">{item.label}<span aria-hidden="true" className="text-brand-red transition-transform duration-200">{expanded ? '−' : '+'}</span></button>
        })}</nav>
        {activeMegaMenu && openMegaMenu ? <div aria-label={`${openMegaMenu} navigation`} className="mega-menu-panel absolute left-1/2 top-full z-50 w-[min(1100px,calc(100vw-48px))] -translate-x-1/2 border border-border bg-white shadow-[0_20px_44px_rgb(31_31_31_/_0.14)]" id={`mega-menu-${openMegaMenu.toLowerCase()}`} onMouseEnter={cancelMegaClose}><div className="grid xl:grid-cols-[0.8fr_2.2fr]"><div className="bg-surface p-7"><p className="type-kicker text-brand-red">{openMegaMenu}</p><p className="type-card-body mt-4 text-text-muted">{activeMegaMenu.summary}</p><Link className="motion-link type-nav mt-7 inline-flex min-h-11 items-center text-ink underline decoration-brand-red decoration-2 underline-offset-4 hover:text-brand-red" onClick={() => setOpenMegaMenu(null)} to={activeMegaMenu.path}>{activeMegaMenu.exploreLabel}<span aria-hidden="true" className="motion-link-arrow">&nbsp;→</span></Link></div><div className="grid md:grid-cols-3">{activeMegaMenu.columns.map((column, index) => <div className={`p-7 ${index > 0 ? 'border-l border-border' : ''}`} key={column.title}><p className="type-kicker text-brand-red">{column.title}</p><ul className="mt-5 space-y-2">{column.items.map((link) => <li key={link.label}><Link className="type-nav inline-flex min-h-9 text-ink transition-colors hover:text-brand-red" onClick={() => setOpenMegaMenu(null)} to={link.path}>{link.label}</Link></li>)}</ul></div>)}</div></div></div> : null}
        </div>
        <div className="hidden xl:block"><Button to="/contact">Discuss Your Project</Button></div>
        <button aria-controls="mobile-navigation" aria-expanded={isMenuOpen} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border bg-white text-ink xl:hidden" onClick={() => setIsMenuOpen((open) => !open)} ref={menuButtonRef} type="button"><span aria-hidden="true" className="text-xl leading-none">{isMenuOpen ? '×' : '☰'}</span></button>
      </Container>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-border bg-white shadow-[0_16px_28px_rgb(31_31_31_/_0.08)] xl:hidden`} id="mobile-navigation">
        <Container className="py-5"><nav aria-label="Mobile navigation" className="flex flex-col gap-1" onClick={() => setIsMenuOpen(false)}>{primaryNavigation.map((item) => <NavLink className={navigationLinkClass} key={item.path} to={item.path}>{item.label}</NavLink>)}<Button className="mt-2 w-full" to="/contact">Discuss Your Project</Button></nav></Container>
      </div>
    </header>
  )
}
