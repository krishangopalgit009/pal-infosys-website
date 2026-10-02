import type { IconName } from '../../types/home'

type IconProps = { name: IconName; className?: string }

const paths: Record<IconName, string[]> = {
  automation: ['M12 3v3', 'M12 18v3', 'M3 12h3', 'M18 12h3', 'm5.6 5.6 2.1 2.1', 'm16.3 16.3 2.1 2.1', 'm18.4 5.6-2.1 2.1', 'm7.7 16.3-2.1 2.1', 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z'],
  business: ['M4 20V8l8-4 8 4v12', 'M2 20h20', 'M8 20v-5h8v5', 'M8 10h.01', 'M12 10h.01', 'M16 10h.01'],
  cloud: ['M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7 8.5 4.5 4.5 0 0 0 7 18Z'],
  database: ['M4 6c0 1.7 3.6 3 8 3s8-1.3 8-3-3.6-3-8-3-8 1.3-8 3Z', 'M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6', 'M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6'],
  enterprise: ['M3 21h18', 'M5 21V5h14v16', 'M9 9h.01', 'M12 9h.01', 'M15 9h.01', 'M9 13h.01', 'M12 13h.01', 'M15 13h.01'],
  finance: ['M4 19V9', 'M10 19V5', 'M16 19v-8', 'M22 19H2'],
  healthcare: ['M12 4v16', 'M4 12h16'],
  integration: ['M8 7H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h3', 'M16 7h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3', 'M8 10h8', 'M12 6v8'],
  logistics: ['M3 17h12V7H3v10Z', 'M15 11h3l3 3v3h-6v-6Z', 'M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'],
  manufacturing: ['M3 21V9l6 4V9l6 4V5l6 4v12', 'M3 21h18'],
  modernization: ['M20 11a8 8 0 1 0 2 5', 'M20 4v7h-7'],
  partnership: ['m8 12 3 3 5-6', 'M4 6h5l2 3', 'M20 6h-5l-2 3', 'M4 18h5l2-3', 'M20 18h-5l-2-3'],
  people: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  retail: ['m3 4 2 2 2 11h10l2-8H7', 'M10 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', 'M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'],
  saas: ['m12 2 8 4-8 4-8-4 8-4Z', 'm4 12 8 4 8-4', 'm4 17 8 4 8-4'],
  security: ['M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z', 'm9 12 2 2 4-4'],
  software: ['M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z', 'M8 8h.01', 'M12 8h.01', 'M7 13h10', 'M7 17h6'],
  workflow: ['M5 5h6v4H5z', 'M13 15h6v4h-6z', 'M11 7h2c2 0 3 1 3 3v5', 'M13 17h-2c-2 0-3-1-3-3V9'],
}

export function Icon({ name, className = '' }: IconProps) {
  return (
    <svg aria-hidden="true" className={`h-5 w-5 ${className}`} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24">
      {paths[name].map((path) => <path d={path} key={path} />)}
    </svg>
  )
}
