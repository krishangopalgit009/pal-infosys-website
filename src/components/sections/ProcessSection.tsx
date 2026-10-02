import { useEffect, useRef, useState } from 'react'
import { developmentProcess } from '../../data/home'
import { Icon } from '../ui/Icon'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

const processIcons = ['people', 'enterprise', 'software', 'software', 'security', 'modernization'] as const
const routeCoordinates = [
  { left: '8%', top: '33%', side: 'top' }, { left: '25%', top: '58%', side: 'bottom' },
  { left: '43%', top: '29%', side: 'top' }, { left: '61%', top: '64%', side: 'bottom' },
  { left: '79%', top: '28%', side: 'top' }, { left: '92%', top: '61%', side: 'bottom' },
] as const
const routeProgress = [0.02, 0.2, 0.4, 0.6, 0.8, 0.98]
const routePath = 'M96 120 C170 120,205 210,300 210 C375 210,425 105,516 105 C595 105,645 230,732 230 C810 230,860 100,948 100 C1025 100,1060 220,1104 220'
const journeyStages = [
  { label: 'Business Challenge', icon: 'business' },
  { label: 'Discovery', icon: 'people' },
  { label: 'Architecture', icon: 'enterprise' },
  { label: 'Engineering', icon: 'software' },
  { label: 'Validation', icon: 'security' },
  { label: 'Production', icon: 'modernization' },
] as const
const journeyStageByProcessStep = [1, 2, 2, 3, 4, 5]

export function ProcessSection() {
  const pathRef = useRef<SVGPathElement>(null)
  const vehicleRef = useRef<SVGGElement>(null)
  const directionRef = useRef<SVGGElement>(null)
  const routeMapRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const tourTimerRef = useRef<number | null>(null)
  const tourStoppedRef = useRef(false)
  const currentProgress = useRef(routeProgress[0])
  const [activeStep, setActiveStep] = useState(0)

  const positionVehicle = (progress: number, direction = 1) => {
    const path = pathRef.current
    const vehicle = vehicleRef.current
    if (!path || !vehicle) return
    const totalLength = path.getTotalLength()
    const length = totalLength * progress
    const point = path.getPointAtLength(length)
    const before = path.getPointAtLength(Math.max(0, length - 4))
    const after = path.getPointAtLength(Math.min(totalLength, length + 4))
    const rawAngle = Math.atan2(after.y - before.y, after.x - before.x) * (180 / Math.PI)
    const angle = Math.max(-28, Math.min(28, rawAngle))
    vehicle.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle})`)
    directionRef.current?.setAttribute('transform', `scale(${direction} 1)`)
  }

  const moveVehicle = (targetProgress: number, onComplete?: () => void) => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current)
    const startProgress = currentProgress.current
    const difference = targetProgress - startProgress
    const direction = difference >= 0 ? 1 : -1
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || Math.abs(difference) < 0.001) {
      currentProgress.current = targetProgress
      positionVehicle(targetProgress, direction)
      onComplete?.()
      return
    }

    const startedAt = performance.now()
    const duration = 650 + (Math.abs(difference) * 2200)
    const animate = (now: number) => {
      const raw = Math.min((now - startedAt) / duration, 1)
      const eased = raw < 0.5 ? 2 * raw * raw : 1 - (Math.pow(-2 * raw + 2, 2) / 2)
      const progress = startProgress + (difference * eased)
      currentProgress.current = progress
      positionVehicle(progress, direction)
      if (raw < 1) animationRef.current = requestAnimationFrame(animate)
      else onComplete?.()
    }
    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    positionVehicle(currentProgress.current)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      if (tourTimerRef.current) window.clearTimeout(tourTimerRef.current)
    }
  }, [])

  useEffect(() => {
    const routeMap = routeMapRef.current
    if (!routeMap || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting || tourStoppedRef.current) return
      tourStoppedRef.current = true
      let stageIndex = 0

      const continueTour = () => {
        if (stageIndex >= routeProgress.length) return
        setActiveStep(stageIndex)
        moveVehicle(routeProgress[stageIndex], () => {
          stageIndex += 1
          if (stageIndex < routeProgress.length) tourTimerRef.current = window.setTimeout(continueTour, 220)
        })
      }

      continueTour()
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(routeMap)
    return () => observer.disconnect()
  }, [])

  const pauseGuidedTour = () => {
    tourStoppedRef.current = true
    if (tourTimerRef.current) window.clearTimeout(tourTimerRef.current)
  }

  return (
    <Section contained={false} className="process-section relative overflow-hidden !bg-transparent !py-16 md:!py-22 xl:!py-26">
      <div aria-hidden="true" className="process-section-glow pointer-events-none absolute inset-0" />
      <Container className="relative max-w-340">
        <div className="mx-auto max-w-240 text-center">
          <div className="mb-4 flex items-center justify-center gap-3"><span aria-hidden="true" className="h-px w-10 bg-brand-red" /><p className="type-kicker text-brand-red">Consultative delivery process</p></div>
          <h2 className="type-section text-ink">From Business Challenge to <span className="text-brand-red">Production Software</span></h2>
          <p className="type-body mx-auto mt-4 max-w-205 text-text-muted">Our delivery process combines business discovery, architecture, product thinking, engineering, and validation so that technology decisions remain connected to real operational needs.</p>
        </div>

        <div className="process-route-desktop relative mt-14 hidden min-h-170 xl:block">
          <ol aria-label="Route progression" className="process-route-journey grid grid-cols-6 gap-4">
            {journeyStages.map((stage, index) => {
              const isActive = activeStep !== null && journeyStageByProcessStep[activeStep] === index
              return <li className={`process-route-stage min-w-0 ${isActive ? 'is-active' : ''}`} key={stage.label}>
                <span aria-hidden="true" className="process-route-stage-number-area"><span className="process-route-stage-watermark">0{index + 1}</span><span className="process-icon-badge"><Icon name={stage.icon} /></span></span>
                <p className="process-route-stage-label type-kicker mt-3 text-center text-text-muted"><span className="mr-1 font-heading text-brand-red">0{index + 1}</span>{stage.label}</p>
              </li>
            })}
          </ol>
          <div className="process-route-map relative mt-44 h-70" ref={routeMapRef}>
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 360">
              <path className="process-route-line" d={routePath} ref={pathRef} />
              <path className="process-route-arrow" d="M1104 220 L1085 208 M1104 220 L1089 236" />
              <g className="process-route-svg-vehicle" ref={vehicleRef}><g ref={directionRef}><ellipse cx="0" cy="18" fill="rgb(0 0 0 / 0.14)" rx="34" ry="5" /><rect fill="#202020" height="22" rx="3" width="42" x="-38" y="-10" /><rect fill="#de141d" height="6" rx="1.5" width="42" x="-38" y="6" /><path d="M 4 -6 L 18 -6 L 26 0 L 26 12 L 4 12 Z" fill="#2b2b2b" /><path d="M 4 7 L 26 7 L 26 12 L 4 12 Z" fill="#de141d" /><rect fill="#393939" height="5" rx="1" width="8" x="18" y="1" /><path d="M 7 -3 L 16 -3 L 21 1 L 7 1 Z" fill="#e8eef1" /><circle cx="26" cy="5" fill="#ff646a" r="2" /><rect fill="#6b6b6b" height="3" rx="1" width="4" x="-42" y="8" /><g><circle cx="-24" cy="13" fill="#111" r="6.5" /><circle cx="-24" cy="13" fill="#777" r="2.6" /></g><g><circle cx="-2" cy="13" fill="#111" r="6.5" /><circle cx="-2" cy="13" fill="#777" r="2.6" /></g><g><circle cx="18" cy="13" fill="#111" r="6.5" /><circle cx="18" cy="13" fill="#777" r="2.6" /></g></g></g>
            </svg>
            <ol className="motion-stagger absolute inset-0">
              {developmentProcess.map((step, index) => {
                const coordinate = routeCoordinates[index]
                const activateStep = () => { pauseGuidedTour(); setActiveStep(index); moveVehicle(routeProgress[index]) }
                return <li className={`process-route-step process-route-step-${coordinate.side}`} key={step.number} style={{ left: coordinate.left, top: coordinate.top }}><button aria-label={`Highlight ${step.title} on the delivery route`} aria-pressed={activeStep === index} className="process-route-node grid h-16 w-16 place-items-center rounded-full border-2 border-brand-red bg-white font-heading text-[0.875rem] font-bold text-brand-red" onClick={activateStep} onFocus={activateStep} onMouseEnter={activateStep} type="button">{step.number}</button><article className="process-route-content"><span aria-hidden="true" className="process-icon-badge"><Icon name={processIcons[index]} /></span><p className="type-kicker !text-[0.625rem] !tracking-[0.11em] text-brand-red">{step.label}</p><h3 className="type-card mt-2 text-ink">{step.title}</h3><p className="type-card-body mt-3 text-text-muted">{step.description}</p></article></li>
              })}
            </ol>
          </div>
        </div>

        <div className="relative mt-12 xl:hidden">
          <div aria-hidden="true" className="process-route-mobile-line absolute bottom-0 left-7 top-0 border-l-2 border-dotted border-brand-red/50" />
          <ol className="process-route-mobile motion-stagger space-y-8">
            {developmentProcess.map((step, index) => <li className="relative grid grid-cols-[3.75rem_1fr] gap-5" key={step.number}><div aria-hidden="true" className="process-mobile-marker relative z-10 flex flex-col items-center gap-2"><span className="process-icon-badge"><Icon name={processIcons[index]} /></span><span className="process-mobile-number type-kicker text-brand-red">{step.number}</span></div><article className="pb-4"><p className="type-kicker !text-[0.625rem] !tracking-[0.11em] text-brand-red">{step.label}</p><h3 className="type-card mt-2 text-ink">{step.title}</h3><p className="type-card-body mt-3 text-text-muted">{step.description}</p></article></li>)}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
