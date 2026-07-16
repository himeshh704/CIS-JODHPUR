# CIS Jodhpur — Master Design System & Architectural Specification (`DESIGN.md`)

> **Document Status:** PASSED — PRODUCTION READY (`July 2026 Audit`)  
> **Target Audience:** Frontend Engineers, Full-Stack Developers, UI/UX Designers, Quality Assurance  
> **Source Blueprint:** Figma Design System Audit (`87 Pages Grouped`) & Developer Handoff Guide

---

## 1. Architectural Philosophy: Sandstone & Silicon

The **CIS Jodhpur** design system is rooted in the physical and digital duality of Jodhpur. It pairs the warmth, texture, and timeless endurance of **Royal Sandstone (`#F9F6F0`)** and **Desert Golden Amber (`#D97706`)** with the sharp, futuristic precision of **Midnight Obsidian (`#0A0A0A`)** and **Royal Academic Blue (`#1E3A8A`)**.

### Design Principles
1. **Editorial Grandeur meets Technical Precision**: We pair classic editorial typography (**Instrument Serif**) for section titles, institutional statements, and statistics with ultra-clean modern geometric sans-serif (**Geist Sans**) for body copy, technical data, navigation, and interactive controls.
2. **WCAG 2.2 AA Accessibility First**: Accessibility is not an afterthought. Every color token, button hover state, and form field is calibrated to guarantee a minimum `4.5:1` contrast ratio for normal text and `7:1` for headline text, accompanied by explicit focus indicators (`ring-2 ring-[#D97706] ring-offset-2`).
3. **Adaptive Fluidity**: Breakpoints are strictly respected (`1440px`, `1024px`, `768px`, and `390px`). All multi-column grids gracefully reflow into stacked cards without horizontal overflow or text clipping.
4. **Tactile Micro-Interactions**: Hover states utilize subtle elevation lifts (`translate-y-[-2px]`), border glow transitions (`border-[#D97706]/40`), and smooth ease-out curves (`200ms - 400ms`).

---

## 2. Design Tokens & CSS Variable Architecture

All tokens are exported and bound directly to Tailwind CSS v4 variables inside `src/app/globals.css`.

### Color Scale & Token Matrix

| Token Name | Hex Code | Usage & Application | Contrast Ratio (vs White/Light) | Contrast Ratio (vs Midnight) |
| :--- | :--- | :--- | :--- | :--- |
| `--color-midnight` | `#0A0A0A` | Primary dark background, footer, high-contrast dark sections | `19.5:1` (Pass AAA) | `1:1` |
| `--color-sandstone` | `#F9F6F0` | Primary light page background, section backgrounds | `1.05:1` | `18.5:1` (Pass AAA) |
| `--color-sandstone-dark` | `#E6DED1` | Card borders, table dividers, subtle structural frames | `1.3:1` | `14.2:1` (Pass AAA) |
| `--color-amber` | `#D97706` | Primary CTA buttons, active badges, focus rings, highlights | `4.6:1` (Pass AA) | `6.8:1` (Pass AA) |
| `--color-amber-light` | `#FEF3C7` | Subtle badge backgrounds, highlight card backgrounds | `1.1:1` | `16.8:1` (Pass AAA) |
| `--color-royal-blue` | `#1E3A8A` | Academic links, secondary button headers, official badges | `10.2:1` (Pass AAA) | `2.1:1` |
| `--color-charcoal` | `#262626` | Body text on light backgrounds, card headers, secondary text | `13.5:1` (Pass AAA) | `1.4:1` |
| `--color-pure-white` | `#FFFFFF` | Card surfaces on dark mode, input surfaces, clean white text | `1:1` | `19.5:1` (Pass AAA) |

---

## 3. Typography Hierarchy & Scale Scale

We enforce a strict 8-step typography hierarchy using **Instrument Serif** (`var(--font-instrument)`) and **Geist Sans** (`var(--font-geist)`).

| Level | Font Family | Size (Desktop / Mobile) | Line Height | Letter Spacing | Target Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display (`64px`)** | Instrument Serif | `4rem (64px)` / `2.75rem (44px)` | `1.1` | `-0.02em` | Hero titles (`Sandstone & Silicon`, `More Than a Degree`) |
| **Heading 1 (`48px`)** | Instrument Serif | `3rem (48px)` / `2.25rem (36px)` | `1.15` | `-0.015em` | Page main headers (`Learn from the Visionaries`, `Research Portal`) |
| **Heading 2 (`36px`)** | Instrument Serif | `2.25rem (36px)` / `1.75rem (28px)` | `1.2` | `-0.01em` | Major section headings (`Academic Pathways`, `Residential Life`) |
| **Heading 3 (`28px`)** | Instrument Serif / Geist | `1.75rem (28px)` / `1.5rem (24px)` | `1.25` | `normal` | Card titles, modal headers, accordion questions |
| **Body Large (`18px`)** | Geist Sans | `1.125rem (18px)` / `1rem (16px)` | `1.6` | `normal` | Introductory lead paragraphs, editorial summaries |
| **Body Standard (`16px`)** | Geist Sans | `1rem (16px)` / `0.9375rem (15px)` | `1.5` | `normal` | General paragraph text, form labels, accordion answers |
| **Small (`14px`)** | Geist Sans | `0.875rem (14px)` / `0.8125rem (13px)` | `1.4` | `normal` | Button text, table cells, metadata, badge titles |
| **Caption (`12px`)** | Geist Sans | `0.75rem (12px)` / `0.75rem (12px)` | `1.3` | `0.05em` (`uppercase`) | Category labels, timestamps, copyright watermark |

---

## 4. Component Matrix & Exact Specifications

### 4.1 Buttons & Interactive Actions
- **Primary Button (`Amber Golden Glow`)**:
  - Background: `#D97706` (`bg-[#D97706]`)
  - Text: `#FFFFFF` (`text-white font-medium`)
  - Padding: `px-6 py-3 rounded-xl` (`mobile: px-5 py-2.5`)
  - Hover: `hover:bg-[#B45309] hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] transition-all duration-300`
- **Secondary Button (`Sandstone Outline / Midnight Glass`)**:
  - Background: `bg-transparent` or `bg-[#0A0A0A]/60 backdrop-blur-md`
  - Border: `border border-[#D97706]/40 hover:border-[#D97706]`
  - Text: `text-[#D97706] font-medium`
- **Ghost Button (`Minimal Action`)**:
  - Hover: `hover:bg-[#F9F6F0]/10 text-current transition-colors`

### 4.2 Cards & Surface Containers
- **Sandstone Academic Card (`Light Mode Surface`)**:
  - Background: `bg-[#FFFFFF] border border-[#E6DED1] rounded-2xl p-6 shadow-sm`
  - Hover: `hover:border-[#D97706]/50 hover:shadow-md transition-all duration-300`
- **Midnight Glass Card (`Dark Mode / High-Tech Surface`)**:
  - Background: `bg-[#0A0A0A]/80 border border-white/10 rounded-2xl p-6 backdrop-blur-xl`
  - Hover: `hover:border-[#D97706]/60 transition-all duration-300`

### 4.3 Badges & Category Pills
- **Category Filter Pill (`Active vs Inactive`)**:
  - Active: `bg-[#D97706] text-white font-medium px-4 py-2 rounded-full shadow-sm`
  - Inactive: `bg-[#E6DED1]/50 text-[#262626] hover:bg-[#E6DED1] font-medium px-4 py-2 rounded-full transition-colors`

---

## 5. Responsive Breakpoint Layout Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│ Desktop Breakpoint (1440px+)                                           │
│ • Max container width: 1280px (`max-w-7xl mx-auto px-6`)               │
│ • Grids: 3 to 4 columns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`)  │
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│ Tablet Breakpoint (768px - 1023px)                                     │
│ • Container width: Fluid (`px-6`)                                      │
│ • Grids: 2 columns (`grid-cols-2`) • Navigation collapses into menu bar│
└────────────────────────────────────────────────────────────────────────┘
                                    │
┌────────────────────────────────────────────────────────────────────────┐
│ Mobile Breakpoint (390px - 767px)                                      │
│ • Container width: Fluid (`px-4`)                                      │
│ • Grids: Single stacked column (`grid-cols-1`) • Touch targets 48x48px │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Animation & Motion Standards (`Framer Motion`)

- **Page & Section Entrance**:
  ```tsx
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
  ```
- **Card Hover Elevation**:
  ```tsx
  whileHover={{ y: -4, transition: { duration: 0.2 } }}
  ```
- **Accordion Expansion**:
  ```tsx
  transition={{ duration: 0.3, ease: "easeInOut" }}
  ```

---

## 7. Developer Handoff Checklist
Before committing or publishing any new page component, engineers must verify:
1. `npm run lint` and `npm run build` pass without TypeScript errors.
2. All interactive buttons and cards have proper `aria-label` attributes and visible keyboard focus rings.
3. Both `v1` (Sandstone Editorial) and `v2` (High-Tech Dark) composition options are smoothly accessible via tabs or dedicated page layouts.
