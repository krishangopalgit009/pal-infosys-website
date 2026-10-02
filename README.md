# PAL INFOSYS Website

The corporate website for PAL INFOSYS, positioned as an enterprise software and digital product engineering company. The approved frontend foundation, public pages, and contact-enquiry API are in place.

## Current stack

- React, TypeScript, Vite, React Router, and Tailwind CSS (approved frontend stack for Phase 1)
- ASP.NET Core contact API for validated, rate-limited enquiry notification; it has no database, CMS, or authentication

## Project structure

```text
docs/       Approved product, content, design, architecture, page, and roadmap guidance
src/        React application source, shared components, routes, data, styles, and types
public/     Public files when approved assets require them
server/     ASP.NET Core contact API and its deployment/configuration guide
```

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` to run the production TypeScript and Vite build.

To run the local contact API alongside Vite, follow [the API guide](server/README.md). The API intentionally returns an unavailable response until SMTP secrets are supplied through the runtime environment.

## Documentation index

- [Project overview](docs/01_PROJECT_OVERVIEW.md)
- [Brand and design system](docs/02_BRAND_DESIGN_SYSTEM.md)
- [Content strategy](docs/03_CONTENT_STRATEGY.md)
- [Frontend architecture](docs/04_FRONTEND_ARCHITECTURE.md)
- [Page structure](docs/05_PAGE_STRUCTURE.md)
- [Development roadmap](docs/06_DEVELOPMENT_ROADMAP.md)
- [Content validation](docs/07_CONTENT_VALIDATION.md)
- [Production deployment](docs/09_PRODUCTION_DEPLOYMENT.md)

## Important developer instructions

Before making architectural, design, content, routing, or scope changes, review all files under `/docs`. These documents are the approved source of truth for the PAL INFOSYS website.

Do not invent new pages, business claims, technologies, services, design rules, backend features, client names, testimonials, certifications, statistics, or project outcomes unless explicitly approved.

Use actual approved assets and validated business information. Label temporary layout content as **MOCK** and future work as **FUTURE**.
