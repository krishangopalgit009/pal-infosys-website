import { useState } from 'react'
import { aboutHubItems } from '../../data/about'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

export function AboutPointerHub() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const active = aboutHubItems.find((item) => item.id === activeItem)

  const closeHub = () => { setIsOpen(false); setActiveItem(null) }

  return (
    <Section contained={false} tone="muted" className="about-hub-section relative overflow-hidden !bg-transparent">
      <Container className="relative">
        <div className="mx-auto max-w-205 text-center">
          <p className="type-kicker text-brand-red">About PAL INFOSYS</p>
          <h2 className="type-section mt-4 text-ink">Built Around Business <span className="text-brand-red">Understanding</span></h2>
          <p className="type-body mt-4 text-text-muted">Explore how we think, work, and build software around real business operations.</p>
        </div>

        <div className={`about-hub ${isOpen ? 'is-open' : ''}`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={closeHub}>
          <div aria-hidden="true" className="about-hub-ring" />
          <button aria-expanded={isOpen} aria-label="Explore PAL INFOSYS" className="about-hub-center" onClick={() => setIsOpen((open) => !open)} type="button"><span>Explore</span><strong>About</strong></button>
          {aboutHubItems.map((item, index) => <button aria-label={`Explore ${item.label}`} aria-pressed={activeItem === item.id} className={`about-hub-pointer about-hub-pointer-${item.position} ${activeItem === item.id ? 'is-active' : ''}`} key={item.id} onClick={() => { setIsOpen(true); setActiveItem(item.id) }} onFocus={() => { setIsOpen(true); setActiveItem(item.id) }} onMouseEnter={() => setActiveItem(item.id)} style={{ transitionDelay: isOpen ? `${index * 70}ms` : '0ms' }} tabIndex={isOpen ? 0 : -1} type="button"><span aria-hidden="true" className="about-hub-pointer-dot" /><span>{item.label}</span></button>)}
          <div aria-live="polite" className={`about-hub-detail ${active ? 'is-visible' : ''}`}>{active ? <><span className="type-kicker text-brand-red">{active.label}</span><p className="type-card-body mt-3 text-text-muted">{active.description}</p></> : <p className="type-card-body text-text-muted">Select a point to explore the PAL INFOSYS approach.</p>}</div>
        </div>
      </Container>
    </Section>
  )
}
