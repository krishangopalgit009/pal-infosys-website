import { featuredWork } from '../../data/home'
import { CaseStudyCard } from '../ui/CaseStudyCard'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function FeaturedWorkSection() {
  return (
    <Section tone="dark">
      <SectionHeading as="h2" eyebrow="Solution showcase" description="Representative platform expertise for connected operations, workflow automation opportunities, and the engineering choices PAL INFOSYS can bring together. These are not client case studies." inverse title="Platform Thinking for Complex Operations." />
      <div className="motion-stagger mt-10 grid gap-5 xl:grid-cols-12 xl:gap-6">
        {featuredWork.map((caseStudy, index) => <div className={index === 0 ? 'xl:col-span-5' : index === 1 ? 'xl:col-span-7' : 'xl:col-span-12'} key={caseStudy.title}><CaseStudyCard caseStudy={caseStudy} /></div>)}
      </div>
    </Section>
  )
}
