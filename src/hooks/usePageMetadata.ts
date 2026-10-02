import { useEffect } from 'react'
import { company } from '../data/company'
import type { PageMetadata } from '../types/page'

export function usePageMetadata({ article, description, indexable = true, label, path, title }: PageMetadata) {
  useEffect(() => {
    document.title = title
    const origin = company.origin
    const pageUrl = `${origin}${path || window.location.pathname}`
    const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.append(element)
      }
      element.content = content
    }
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (indexable) {
      const canonicalLink = canonical ?? document.createElement('link')
      canonicalLink.rel = 'canonical'
      canonicalLink.href = pageUrl
      if (!canonicalLink.parentNode) document.head.append(canonicalLink)
    } else {
      canonical?.remove()
    }

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', pageUrl)
    upsertMeta('property', 'og:site_name', 'PAL INFOSYS')
    upsertMeta('name', 'twitter:card', 'summary')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'robots', indexable ? 'index, follow' : 'noindex, follow')

    let structuredData = document.head.querySelector<HTMLScriptElement>('#pal-structured-data')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.id = 'pal-structured-data'
      structuredData.type = 'application/ld+json'
      document.head.append(structuredData)
    }
    const organizationId = `${origin}/#organization`
    const graph: Record<string, unknown>[] = [
      { '@type': 'Organization', '@id': organizationId, name: company.name, url: origin, email: company.email, telephone: company.phone, address: { '@type': 'PostalAddress', streetAddress: company.address.streetAddress, addressLocality: company.address.addressLocality }, description: 'Enterprise software and digital product engineering company.' },
      { '@type': 'WebSite', '@id': `${origin}/#website`, name: company.name, url: origin, publisher: { '@id': organizationId } },
    ]
    if (path && path !== '/') {
      graph.push({ '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
        { '@type': 'ListItem', position: 2, name: label, item: pageUrl },
      ] })
    }
    if (article) {
      graph.push({
        '@type': 'Article',
        headline: title.replace(' | PAL INFOSYS Insights', ''),
        description,
        author: { '@type': 'Organization', '@id': organizationId, name: article.author },
        publisher: { '@id': organizationId },
        datePublished: article.publishedOn,
        mainEntityOfPage: pageUrl,
      })
    }
    structuredData.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
  }, [article, description, indexable, label, path, title])
}
