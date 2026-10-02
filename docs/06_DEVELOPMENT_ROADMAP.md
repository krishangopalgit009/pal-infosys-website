# Development Roadmap

Follow phases in order. Completion of a phase means its acceptance criteria are met, not merely that files exist.

| Phase | Goal and deliverables | Acceptance criteria | Do not do |
| --- | --- | --- | --- |
| 1. Foundation | Create Vite + React + TypeScript + Tailwind + routing; establish tokens, assets, and base components. | App builds; route foundation works; tokens and approved assets are centralized; docs reviewed. | Add backend, fake APIs, CMS, auth, or unapproved dependencies. |
| 2. Global layout | Build responsive Header, Footer, navigation, container, and shared page shell. | Keyboard-usable navigation; responsive layout; logo treatment follows design system. | Invent pages or use placeholder brand assets as final assets. |
| 3. Homepage | Build Hero, Challenges, Capabilities, Industries/Solutions, Case Studies, Why, Technology, Process, Testimonials, Insights, and CTA sections. | Complete approved flow; all content follows credibility labels; responsive and semantic. | Claim outcomes, clients, testimonials, or metrics without approval. |
| 4. Secondary pages | Build About, Services, Solutions, Industries, Work, Technology, Insights, and Contact. | Each page satisfies its purpose, CTA, internal links, and SEO direction in [05_PAGE_STRUCTURE.md](05_PAGE_STRUCTURE.md). | Create unapproved detail routes or feature expansion. |
| 5. Responsive + accessibility | Review layouts, interactions, content order, focus, contrast, forms, and reduced motion. | Tested across core breakpoints and keyboard navigation; material WCAG 2.2 AA issues resolved. | Treat accessibility as optional visual polish. |
| 6. SEO + performance | Add metadata foundation, semantic audit, image optimization, and performance review. | Unique metadata plan; no avoidable asset or dependency waste; no layout-shift-prone imagery. | Add trackers or third-party embeds without approval. |
| 7. Content validation | Replace temporary material with approved content. | No mock content remains unless visibly labeled; business claims are approved. | Publish inferred client data, statistics, results, or legal content. |
| 8. Optional dynamic backend | The contact API is explicitly approved and implemented with ASP.NET Core. Blog CMS, careers, admin, case-study, and lead management remain **FUTURE**. | Contact endpoint validates server-side, rate limits by IP, rejects honeypot submissions, sends an SMTP notification when configured, and does not persist data. | Add other backend features without separate approval; commit SMTP secrets; claim email delivery without runtime configuration. |
| 9. Production deployment | Prepare deployment, domain/metadata configuration, monitoring, and launch checks. | Production checklist, accessible live experience, approved content, and monitoring ownership confirmed. | Deploy unapproved copy, assets, legal pages, or data collection. |

## Ongoing controls

Review all `/docs` files before design, architecture, content, routing, or scope changes. Capture approved departures in these documents before implementing them. Use **FUTURE** for deferred ideas and **MOCK** for layout-only material.
