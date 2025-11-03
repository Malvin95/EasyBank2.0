# Architecture Documentation

Comprehensive overview of the EasyBank 2.0 project architecture, design patterns, and technical decisions.

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture Principles](#architecture-principles)
- [Directory Structure](#directory-structure)
- [Design Patterns](#design-patterns)
- [Technology Stack](#technology-stack)
- [Component Architecture](#component-architecture)
- [State Management](#state-management)
- [Styling Approach](#styling-approach)
- [Routing](#routing)
- [Performance Optimizations](#performance-optimizations)

---

## Project Overview

EasyBank 2.0 is a modern Next.js application built with React 19 and TypeScript, following atomic design principles for component organization. The project emphasizes:

- **Component Reusability** - Atomic design methodology
- **Type Safety** - Full TypeScript implementation
- **Responsive Design** - Mobile-first approach
- **Developer Experience** - Storybook for component development
- **Performance** - Next.js optimizations and image handling

---

## Architecture Principles

### 1. Atomic Design

The project follows **Atomic Design** principles, organizing components into three main categories:

- **Atoms**: Basic, indivisible components (buttons, inputs, icons)
- **Molecules**: Simple combinations of atoms (form fields, navigation items)
- **Organisms**: Complex UI sections (headers, forms, product listings)

### 2. Component Composition

Components are designed to be composable, allowing complex UIs to be built from smaller, reusable pieces.

### 3. Separation of Concerns

- **Presentation**: Components handle UI rendering
- **Logic**: Custom hooks and utilities handle business logic
- **Data**: Static data separated into dedicated files
- **Styles**: CSS Modules for component-specific styles, Tailwind for utilities

### 4. Type Safety

All components, props, and data structures are typed with TypeScript for compile-time error checking.

---

## Directory Structure

```
EasyBank2.0/
├── .storybook/              # Storybook configuration
├── docs/                    # Project documentation
├── public/                  # Static assets
│   └── images/             # Image assets
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── components/     # React components
│   │   │   ├── atoms/      # Basic components
│   │   │   ├── molecules/  # Component groups
│   │   │   ├── organisms/ # Complex sections
│   │   │   └── shadcn/    # UI library components
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   └── stories/            # Storybook example stories
├── tests/                  # Test files
├── next.config.js          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

### Component Organization

```
components/
├── atoms/
│   ├── card/
│   │   ├── Card.tsx
│   │   ├── Card.stories.tsx
│   │   └── CardContent.ts
│   ├── container-wrapper/
│   ├── container-template/
│   ├── invite-button/
│   ├── menu-item/
│   ├── large-menu/
│   ├── small-menu/
│   ├── link-list/
│   └── icon-bar/
├── molecules/
│   ├── collapsible-navbar/
│   ├── footer/
│   └── sectionContainer/
├── organisms/
│   ├── hero-section/
│   ├── why-section/
│   └── latest-section/
└── shadcn/
    ├── lib/
    └── ui/
```

---

## Design Patterns

### 1. Container/Presentational Pattern

- **ContainerWrapper**: Handles layout and responsive behavior
- **ContainerTemplate**: Handles content structure
- Presentational components focus on rendering

### 2. Template Pattern

Components use `TemplateFormat` enum to apply different styles and behaviors:

```typescript
enum TemplateFormat {
  HERO = 'Hero',
  WHY = 'Why',
  LATEST = 'Latest'
}
```

### 3. Composition Pattern

Complex components are built by composing simpler ones:

```tsx
<SectionContainer>
  <ContainerWrapper>
    <ContainerTemplate>
      <Card />
    </ContainerTemplate>
  </ContainerWrapper>
</SectionContainer>
```

### 4. Data-Driven Rendering

Components receive data as props and render accordingly:

```tsx
{infoContent.map((item, key) => (
  <Card key={key} {...item} />
))}
```

---

## Technology Stack

### Core Framework
- **Next.js 15.5.4**: React framework with App Router
- **React 19.2.0**: UI library
- **TypeScript 5.0.2**: Type safety

### Styling
- **Tailwind CSS 4.1.16**: Utility-first CSS
- **PostCSS**: CSS processing
- **CSS Modules**: Component-scoped styles
- **tw-animate-css**: Animation utilities

### UI Libraries
- **Radix UI**: Accessible primitives (Popover)
- **Lucide React**: Icon library
- **shadcn/ui**: Component library

### Development Tools
- **Storybook 9.1.10**: Component development
- **Chromatic**: Visual testing
- **ESLint**: Code linting
- **Playwright**: E2E testing

---

## Component Architecture

### Component Hierarchy

```
Page
├── NavBar (Molecule)
├── ResponsiveHeroSection (Organism)
│   ├── ContainerWrapper (Atom)
│   ├── ContainerTemplate (Atom)
│   └── InviteButton (Atom)
├── WhySection (Organism)
│   ├── SectionContainer (Molecule)
│   │   ├── ContainerWrapper (Atom)
│   │   └── ContainerTemplate (Atom)
│   └── Card (Atom) × 4
├── LatestSection (Organism)
│   ├── SectionContainer (Molecule)
│   └── Card (Atom) × 4
└── Footer (Molecule)
    ├── IconBar (Atom)
    ├── LinkList (Atom) × 2
    └── InviteButton (Atom)
```

### Component Props Pattern

All components use TypeScript interfaces for props:

```typescript
interface ComponentProps {
  required: string;
  optional?: number;
  children?: React.ReactNode;
}
```

### Export Pattern

Components export both the component and related types:

```typescript
export enum CardFormat { ... }
export type CardData = { ... }
export default function Card({ ... }: CardData) { ... }
```

---

## State Management

### Client-Side State

- **React Hooks**: `useState`, `useEffect`, `useRef`
- **Custom Hooks**: `useMediaQuery` from `usehooks-ts`
- **No Global State**: Components are self-contained

### Responsive State

Navigation uses `useMediaQuery` hook for responsive behavior:

```tsx
const matches = useMediaQuery('(min-width:769px)');
```

---

## Styling Approach

### 1. Tailwind CSS (Primary)

Utility-first CSS for rapid development:

```tsx
<div className="flex w-full max-w-6xl mx-auto">
```

### 2. CSS Modules (Component-Specific)

For component-specific styles that need isolation:

```tsx
import styles from './component.module.css';
<div className={styles.container}>
```

### 3. Global Styles

Defined in `globals.css`:
- CSS custom properties (variables)
- Tailwind imports
- Theme configuration

### 4. Responsive Design

Mobile-first approach with Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- Custom breakpoints in `globals.css`

---

## Routing

### Next.js App Router

The project uses Next.js 15 App Router:

```
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page (/)
└── api/
    └── hello/      # API route
```

### Path Aliases

TypeScript path aliases configured in `tsconfig.json`:

```json
{
  "paths": {
    "@components/*": ["src/app/components/*"],
    "@images/*": ["public/images/*"]
  }
}
```

Usage:
```tsx
import Card from '@components/atoms/card/Card';
import logo from '@images/logo.svg';
```

---

## Performance Optimizations

### 1. Next.js Image Optimization

All images use Next.js `Image` component:

```tsx
<Image
  src={imageUrl}
  alt={alt}
  width={288}
  height={192}
/>
```

### 2. Code Splitting

Next.js automatically code-splits by route and component.

### 3. Static Generation

Pages are statically generated at build time.

### 4. Font Optimization

Using `next/font` for automatic font optimization:

```tsx
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '700']
});
```

### 5. CSS Optimization

- Tailwind CSS purges unused styles
- PostCSS optimizes CSS output
- CSS Modules scope styles locally

---

## Build Process

### Development
```bash
npm run dev  # Next.js dev server with Turbopack
```

### Production Build
```bash
npm run build  # Optimized production build
npm run start  # Production server
```

### Storybook
```bash
npm run storybook  # Component development environment
```

---

## Testing Strategy

### Visual Testing
- **Chromatic**: Visual regression testing
- **Storybook**: Component isolation

### E2E Testing
- **Playwright**: End-to-end tests in `tests/`

### Component Testing
- Storybook stories serve as component tests

---

## Future Considerations

### Potential Enhancements
1. State management library (if needed)
2. API integration layer
3. Internationalization (i18n)
4. Dark mode support
5. Animation library integration
6. Performance monitoring
7. Accessibility auditing

### Scalability
- Current architecture supports:
  - Additional pages
  - More complex components
  - API integration
  - State management addition

---

## Best Practices

1. **Component Naming**: PascalCase for components, camelCase for files
2. **Type Safety**: Always define TypeScript interfaces
3. **Prop Validation**: Use TypeScript for compile-time validation
4. **Responsive Design**: Mobile-first approach
5. **Accessibility**: ARIA labels and semantic HTML
6. **Performance**: Optimize images and use Next.js features
7. **Documentation**: Storybook stories for all components

---

For more details, see:
- [Component API](./COMPONENT_API.md)
- [Development Guide](./DEVELOPMENT.md)
- [Component Catalog](./COMPONENT_CATALOG.md)

