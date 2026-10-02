# Content Validation & Release Preparation

## Purpose

This audit separates approved positioning and capability content from MOCK layout material and business inputs that must be supplied before a production release. The approved production domain, public company contact details, and three initial Insights articles are recorded below; client evidence, legal text, social links, OG image, and hosting configuration remain pending.

## Content status

| Page | Section | Current status | Classification | Required business input | Release blocker? |
| --- | --- | --- | --- | --- | --- |
| Home | Hero, challenges, capabilities | Clear enterprise software positioning and approved capability themes. | Approved | None for current overview copy. | No |
| Home | Industries, why PAL INFOSYS, technology, process | Uses approved sectors, engineering themes, technology examples, and process stages without proof claims. | Approved | Confirm final wording only if business language changes. | No |
| Home | Solution showcase | Three representative platform concepts are positioned as solution expertise, not client case studies. No clients, metrics, or outcomes are claimed. | Approved presentation / non-client proof | Approved case-study inputs only if these are later presented as real work. | No |
| Home | Testimonials | Deferred from the production homepage until verified testimonials are approved. The reusable section and source data are retained for future restoration. | Future | Written client permission, exact quote, attribution, and verification source. | No |
| Home | Insights | Published articles are available on the Insights route; a homepage preview remains intentionally omitted to preserve the approved homepage flow. | Approved | None. | No |
| Home | Final CTA | Normalized to the approved primary CTA: `Discuss Your Project`. | Approved | None. | No |
| About | Who we are, mission, vision, values | Positioning and working principles use the approved founding year: PAL INFOSYS has been serving businesses since 2013. No size, awards, or client claims are made. | Approved | Additional company-history detail only if later approved. | No |
| About | Engineering approach and why PAL INFOSYS | Business-first engineering, maintainability, integration, and partnership themes align with approved messaging. | Approved | None. | No |
| Services | Service overview and nine service cards | Approved service taxonomy with concise business use cases and capabilities. | Approved | Service-specific proof or examples only when approved. | No |
| Solutions | Solution categories | Framed as systems PAL INFOSYS can build, distinct from the services taxonomy. | Approved | Approved solution proof only if later added. | No |
| Industries | Industry challenges and systems | Uses approved sectors and credible operational problem themes without claiming client experience. | Approved | Industry evidence or approved examples only if later added. | No |
| Work | Transport Management Platform | Representative platform expertise, not a client case study or delivered-project claim. | Approved presentation / non-client proof | Project title; client permission; problem; scope; capabilities; technology; measurable outcome; screenshots; confidentiality restrictions, if later published as real work. | No |
| Work | Enterprise HRMS | Representative platform expertise, not a client case study or delivered-project claim. | Approved presentation / non-client proof | Project title; client permission; problem; scope; capabilities; technology; measurable outcome; screenshots; confidentiality restrictions, if later published as real work. | No |
| Work | Business SaaS Platform | Representative platform expertise, not a client case study or delivered-project claim. | Approved presentation / non-client proof | Project title; client permission; problem; scope; capabilities; technology; measurable outcome; screenshots; confidentiality restrictions, if later published as real work. | No |
| Technology | Technology groups and engineering principles | Uses only approved technologies and positions them as supporting evidence rather than a catalogue. | Approved | Confirm technology list against current delivery capability before launch. | No |
| Insights | Initial article library | Three approved original articles are published under the PAL INFOSYS Editorial byline: Modernizing Legacy Business Applications; Multi-Tenant SaaS Architecture; and Connecting Booking, Dispatch, Delivery and Billing in Transport Software. No client claims, metrics, or outcomes are included. | Approved | Approved OG image remains pending. | No |
| Contact | Inquiry form | Approved ASP.NET Core endpoint validates enquiries server-side, rate limits requests, uses a honeypot, and sends a notification email when runtime SMTP configuration is available. It does not store enquiries. | Approved implementation / deployment pending | Approved SMTP provider credentials, sender mailbox, and API hosting/reverse-proxy configuration. | Yes for a live production form |
| Contact | Direct contact details | Public contact configuration uses `info@palinfosys.com`, `+91 99880 03197`, and Flat 18 A, Gobind Enclave, Sector 117, Mohali. No response-time claim is shown. | Configuration pending mailbox activation | Confirm that the domain mailbox is live and approved for public use; configure the SMTP sender and recipient through deployment secrets. | Yes |
| Footer | Tagline and navigation | Uses approved positioning and current approved public routes. | Approved | None. | No |
| Footer | Copyright and contact details | Legal company name and copyright owner are approved as `PAL INFOSYS`; public contact configuration is displayed. Social and legal links remain unpublished. | Approved / Missing | Approved social links, if any; approved legal links/content. | Yes for legal content if required for launch |
| Legal/footer links | Privacy, terms, cookie policy | No approved legal policy content is available. Public legal placeholder routes and footer links are removed until authoritative content is supplied. | Missing | Legally approved content and publishing decision. | Yes if required for the intended launch |
| SEO/release | Production domain | `https://palinfosys.com` is approved and used for canonical URLs, Open Graph URLs, schema, sitemap, and robots. | Approved | None. | No |
| SEO/release | OG image | No approved social-share image exists. | Missing | One approved 1200 x 630 OG image. | Yes |
| Hosting/release | Unknown-route HTTP status | The branded SPA 404 page exists, but the deployment host must return an actual HTTP 404 for unknown routes. | Missing | Approved hosting target and server/platform configuration. | Yes |

## Release content cleanup decision

- Testimonials are deferred until verified testimonials, attribution, and written permission are approved. No testimonial section is rendered on the production homepage.
- Three initial original Insights articles are published with corporate byline, date, summary, body, category, and article routes. Future articles require the same editorial review; no draft or fictional article cards are published.
- Transport Management Platform, Enterprise HRMS, and Business SaaS Platform are retained only as representative platform expertise. They are not presented as client case studies, delivered projects, or evidence of outcomes.

## Critical release content

- Approved production domain: `https://palinfosys.com`.
- Approved legal company and copyright owner: `PAL INFOSYS`.
- Approved founding year: `2013`; use the restrained wording `Serving businesses since 2013` or `More than a decade of software engineering experience`.
- Public contact configuration: `info@palinfosys.com`; mailbox activation and ownership confirmation are still required.
- Approved public phone: `+91 99880 03197`.
- Approved office address: Flat 18 A, Gobind Enclave, Sector 117, Mohali.
- Production SMTP provider credentials, an approved sender mailbox, and API hosting/reverse-proxy configuration for the live contact form.
- Real social links, if any.
- Verified testimonials with written permission and attribution, only if a production testimonial section is later approved.
- Real case studies with required approvals and confidentiality review, only if project work is later presented as client evidence.
- Real statistics, if any, with verifiable sources.
- Approved Privacy Policy, Terms, and Cookie Policy content if required for launch.
- Approved Open Graph image.

## Non-blocking future content

- Additional approved insight articles and their detail pages.
- Additional approved case studies.
- Optional industry, service, article, and case-study detail pages.
- Optional social, newsletter, or other conversion features only after separate approval.

## Work-item intake requirements

Before publishing any real client case study, collect:

1. Approved project title and category.
2. Client permission and permitted attribution.
3. Business problem and approved scope.
4. Delivered capabilities and approved technology list.
5. Measurable outcome only when verifiable and approved.
6. Approved screenshots or visual substitutes.
7. Confidentiality restrictions, review owner, and expiry/removal requirements.

## Insight publishing requirements

Every additional published insight requires an approved title, slug, author, publish date, summary, full body, category, and OG image. The three approved initial articles use the PAL INFOSYS Editorial byline and have dedicated routes; their page-level OG metadata is present, while a shared approved OG image remains pending.

## Open Graph image requirement

Do not generate a share image automatically. The future approved asset should be 1200 x 630 pixels and use PAL INFOSYS branding, the approved logo, concise company positioning, and the charcoal, white, and red brand system.

## Production-domain and hosting requirements

The approved production domain is `https://palinfosys.com`. Canonical URLs, Open Graph URLs, structured data, sitemap loc values, and the robots sitemap directive use this origin. Do not change it without explicit approval.

The deployment host or server must return a real HTTP 404 status for unknown routes while still serving the branded SPA Not Found page. This needs hosting-target approval; no deployment configuration is included in this repository.

The approved contact API must be hosted behind HTTPS and receive `/api/contact` requests from the production site. Its host must configure the approved origin and provide SMTP settings through secrets. If it runs behind a reverse proxy, its known proxy IP must be configured so rate limiting uses the actual visitor IP without trusting spoofed forwarded headers. Until those settings exist, the API responds with `503 Service Unavailable` rather than claiming that an enquiry was sent.

## Trust-readiness update

- Representative platform templates now use the transparent framework: Business Context, Challenge, System Designed, Key Capabilities, Architecture, Technology, and Outcome Direction. They remain platform expertise only, not client case studies or reported outcomes.
- The About page foregrounds the verified PAL INFOSYS establishment year of 2013 and current engineering direction. No unverified milestones, leadership biographies, team names, awards, or client achievements are published.
- The public contact configuration now uses `info@palinfosys.com` as the intended PAL INFOSYS domain mailbox. Confirm that this mailbox is live and approved before launch, then configure it as the SMTP sender and recipient through deployment secrets.
- Privacy Policy, Terms & Conditions, and Cookie Policy routes and footer links are unpublished until approved legal content is supplied. Authoritative policy text remains a legal-content release blocker and must not be fabricated.

## Growth-readiness update

- Three substantive service SEO landing pages are published for Custom Software Development, SaaS Product Engineering, and Application Modernization. They use approved capability content, unique metadata, and internal links; they do not claim client outcomes or rankings.
- The published Insights articles now include justified Article structured data and contextual internal links. No additional articles have been invented.
- Analytics remains pending provider, site identifier, consent approach, and data-retention approval. No third-party analytics code, cookies, or visitor-data transmission is enabled.
