import { Link } from 'react-router'
import palLogo from '../../assets/logo/PAL LOGO.png'
import palLogoWebp from '../../assets/logo/pal-logo-160.webp'
import { company } from '../../data/company'
import { footerColumns } from '../../data/navigation'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-14 md:py-16 xl:py-20">
        <div className="grid gap-10 border-b border-white/15 pb-12 xl:grid-cols-[1.35fr_repeat(3,0.86fr)_1fr] xl:gap-8">
          <div>
            <Link aria-label="PAL INFOSYS home" className="footer-logo inline-block" to="/"><picture><source srcSet={palLogoWebp} type="image/webp" /><img alt="PAL INFOSYS" className="h-14 w-14 object-contain" decoding="async" height="160" loading="lazy" src={palLogo} width="160" /></picture></Link>
            <h2 className="type-card mt-6 text-white">About PAL INFOSYS</h2>
            <p className="type-footer mt-4 max-w-xs text-white/65">PAL INFOSYS helps businesses design, build, modernize, and support reliable enterprise software and digital systems.</p>
            <p className="type-kicker mt-5 text-brand-red">Serving businesses since {company.establishedYear}</p>
          </div>
          {footerColumns.map((column) => <nav aria-label={`${column.title} footer links`} key={column.title}><h2 className="type-kicker text-brand-red">{column.title}</h2><ul className="mt-5 space-y-1">{column.items.map((item) => <li key={item.label}><Link className="footer-link type-footer inline-flex min-h-9 items-center text-white/65 hover:text-white" to={item.path}>{item.label}</Link></li>)}</ul></nav>)}
          <div>
            <h2 className="type-kicker text-brand-red">Contact</h2>
            <address className="type-footer mt-5 not-italic text-white/65"><span className="block">{company.address.lines[0]}</span><span className="block">{company.address.lines[1]}</span><a className="mt-4 block w-fit text-white transition-colors hover:text-brand-red" href={`mailto:${company.email}`}>{company.email}</a><a className="mt-2 block w-fit text-white transition-colors hover:text-brand-red" href={company.phoneHref}>{company.phone}</a></address>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-6 xl:flex-row xl:items-center xl:justify-between"><p className="type-footer text-white/55">© {new Date().getFullYear()} {company.name}. All rights reserved.</p><Link className="footer-link type-footer w-fit text-white/55 hover:text-white" to="/contact">Discuss Your Project</Link></div>
      </Container>
    </footer>
  )
}
