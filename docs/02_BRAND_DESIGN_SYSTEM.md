# Brand & Design System

This document defines the approved visual baseline. Apply it with the content rules in [03_CONTENT_STRATEGY.md](03_CONTENT_STRATEGY.md) and component guidance in [04_FRONTEND_ARCHITECTURE.md](04_FRONTEND_ARCHITECTURE.md).

## Brand personality

Professional, trustworthy, technically credible, enterprise-focused, modern, confident, and clean. The visual system should feel deliberately engineered, not like a generic IT template.

## Logo

- Always use the actual approved PAL INFOSYS logo asset; never redraw, trace, stretch, recolor, or substitute it.
- Preserve aspect ratio and reserve clear space on every side at least equal to the logo mark's smallest visible dimension.
- Use a legible approved light/dark variant where available. Do not place the logo on visually busy backgrounds.
- Header: compact, prominent, consistently aligned. Footer: clear but secondary to navigation and legal information.
- **FUTURE:** derive and record the exact brand red from the approved logo asset when it is provided.

## Color system

| Token | Value | Use |
| --- | --- | --- |
| `color-ink` | `#1F1F1F` | Primary dark, headings, dark surfaces |
| `color-ink-subtle` | `#2B2B2B` | Secondary dark surfaces |
| `color-white` | `#FFFFFF` | Light surfaces and inverse text |
| `color-surface` | `#F6F6F6` | Soft page background |
| `color-border` | `#E5E5E5` | Dividers and card borders |
| `color-text` | `#1F1F1F` | Primary text |
| `color-text-muted` | `#666666` | Supporting text |
| `color-brand-red` | **TBD from logo** | CTA, active state, labels, arrows, icons, highlights |

Use red deliberately, not as a large default surface or decorative gradient. Prefer charcoal, white, and restrained light gray structure.

## Typography

Use Manrope or Plus Jakarta Sans for headings, and Inter for body text, subject to licensing and final asset approval. Use system fallbacks while fonts are unavailable.

| Role | Desktop starting scale | Guidance |
| --- | --- | --- |
| Display / H1 | 48–64px | Tight, clear, 1.05–1.15 line-height |
| H2 | 36–44px | Section headline |
| H3 | 24–30px | Card or subsection headline |
| Body | 16–18px | 1.5–1.7 line-height |
| Eyebrow / label | 12–14px | Uppercase only when useful; tracked and concise |

## Layout and spacing

- Maximum content width: approximately 1280px.
- Horizontal padding: 32px desktop, 24px tablet, 16px mobile.
- Section spacing: 96–120px desktop, 72–96px tablet, 56–72px mobile.
- Use a 12-column desktop grid, 8-column tablet grid, and single-column mobile flow. Align headings, cards, and CTA edges to the grid.
- Use a small consistent spacing scale (for example 4, 8, 12, 16, 24, 32, 48, 64, 96, 120px); avoid one-off spacing.

## Components

- **Buttons:** primary is brand red with accessible contrasting text; secondary is outlined or dark according to surface. Include visible keyboard focus and clear hover/pressed/disabled states.
- **Cards:** white or dark restrained surfaces, border-first definition, comfortable padding, one clear hierarchy. Do not overload cards with decoration.
- **Badges:** compact contextual labels; red is reserved for meaningful emphasis.
- **Icons:** consistent stroke weight and style; functional rather than ornamental; paired with labels where clarity requires it.
- **Section headings:** eyebrow (optional), concise outcome-led headline, supporting copy, and optional contextual link or CTA.

## Surfaces, shape, and elevation

Use light and dark sections to create rhythm. Dark surfaces use white text and retain accessible contrast. Keep corner radii modest and consistent (generally 8–16px). Use subtle shadows only where separation cannot be achieved with layout and borders.

## Interaction and motion

Support only subtle fade/slide entrances, small card lift, arrow movement, and slight image scaling. Respect reduced-motion preferences. Do not use heavy parallax, 3D effects, particle backgrounds, continuous decorative animation, or excessive gradients.

## Responsive and accessibility requirements

- Reflow rather than shrink: preserve readable typography, tap targets, and content order on every breakpoint.
- Meet WCAG 2.2 AA contrast expectations, keyboard navigation, visible focus, semantic landmarks, descriptive links, and meaningful alt text.
- Never use color alone to communicate state. Ensure controls have at least practical touch-target sizing and forms have explicit labels and errors.
- Test at mobile, tablet, desktop, keyboard-only, zoomed, reduced-motion, and screen-reader-friendly semantic levels before release.
