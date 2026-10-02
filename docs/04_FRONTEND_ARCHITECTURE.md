# Frontend Architecture

## Approved scope and stack

Phase 1 uses React, TypeScript, Vite, React Router, and Tailwind CSS. It began as a static frontend foundation. The only approved backend departure is the Phase 8 contact-enquiry endpoint: the form posts to `/api/contact`, which is implemented in ASP.NET Core and documented in `server/README.md`. No database, CMS, authentication, or fake data service is permitted. See [the roadmap](06_DEVELOPMENT_ROADMAP.md) for sequencing.

## Target structure

```text
src/
  assets/
    logo/
    images/
    icons/
  components/
    layout/
    ui/
    sections/
  pages/
  data/
  routes/
  styles/
  types/
```

Keep approved logo files in `assets/logo`, optimized image assets in `assets/images`, and only necessary reusable icons in `assets/icons`.

## Components and composition

Shared primitives: `Header`, `Footer`, `Container`, `Section`, `SectionHeading`, `Button`, `Badge`, and `CTASection`. Reusable content components: `ServiceCard`, `IndustryCard`, `CaseStudyCard`, `StatCard`, `TechItem`, `TestimonialCard`, and `ArticleCard`.

Pages compose sections; they must not become oversized all-in-one components. Extract a section when it has independent structure, reuse value, or substantial content. Keep presentation components separate from page content and use `data/` for repeated static collections. Do not duplicate inline arrays or configuration across pages.

## Routing foundation

Current route set:

```text
/
/about
/services
/services/custom-software-development
/services/saas-product-engineering
/services/application-modernization
/solutions
/industries
/platform-expertise
/technology
/insights
/contact
```

The approved service landing pages use centralized content and a reusable page component. **FUTURE** detail routes may include additional service, industry, and platform pages only when they have substantive approved content; do not add thin pages simply to fill routes.

## SEO, semantics, and accessibility

- Give every route a unique title, meta description, canonical URL strategy, and share metadata when production URLs/assets are approved.
- Use semantic landmarks and heading order: one `h1`, descriptive `h2`/`h3` hierarchy, `nav`, `main`, `footer`, lists, buttons, and links according to function.
- Preserve the accessibility requirements in [the design system](02_BRAND_DESIGN_SYSTEM.md); accessible behavior is a component acceptance criterion, not a final polish step.

## Performance and assets

- Prefer optimized, correctly sized modern images; reserve layout space to prevent shift.
- Lazy-load non-critical imagery and route code when it benefits the experience without harming primary content.
- Keep dependencies minimal, avoid heavyweight animation libraries unless specifically approved, and measure performance before adding optimization complexity.
- Do not load third-party trackers, fonts, widgets, or embeds without approval.

## Conventions

- Components and types: `PascalCase`; hooks: `useCamelCase`; variables/functions: `camelCase`; route/data filenames: clear kebab-case or project-consistent naming.
- Type component props and content data explicitly; prefer narrow, reusable domain types over `any`.
- Keep content objects normalized enough for reuse, with stable slugs and optional fields only where legitimate.
- Tailwind classes may live with markup, but recurring visual rules belong in tokens, shared primitives, or styles—not copy-pasted configuration.

## Approved contact backend and future backend

The approved contact endpoint performs server-side validation, a hidden-field honeypot check, fixed-window IP rate limiting, and SMTP notification. It does not persist enquiries. SMTP secrets and API hosting are runtime/deployment concerns and must never be committed to the frontend repository.

If other dynamic features are approved later, the recommended option is ASP.NET Core Web API with C#, EF Core, and SQL Server. Potential approved-later work could include a blog CMS, careers, administration, case-study management, or lead management. None is part of current implementation.
