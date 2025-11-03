# Development Guide

Complete guide for setting up, developing, and working with the EasyBank 2.0 project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Initial Setup](#initial-setup)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Code Standards](#code-standards)
- [Component Development](#component-development)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Software

- **Node.js**: Version 18.15.11 or higher
- **npm**: Comes with Node.js (or use yarn/pnpm)
- **Git**: For version control

### Recommended Tools

- **VS Code**: Code editor
- **Browser DevTools**: For debugging
- **Storybook**: For component development

---

## Initial Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd EasyBank2.0
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

No environment variables required for basic development.

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3001](http://localhost:3001)

### 5. Start Storybook (Optional)

```bash
npm run storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006)

---

## Development Workflow

### Daily Development

1. **Pull latest changes**
   ```bash
   git pull origin main
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Make changes**
   - Edit files in `src/app/`
   - View changes in browser (hot reload enabled)

5. **Test changes**
   - Visual inspection in browser
   - Run Storybook for component testing
   - Run linter: `npm run lint`

6. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: your commit message"
   ```

### Component Development Workflow

1. **Create component file**
   ```
   src/app/components/atoms/your-component/YourComponent.tsx
   ```

2. **Create Storybook story**
   ```
   src/app/components/atoms/your-component/YourComponent.stories.tsx
   ```

3. **Develop in Storybook**
   ```bash
   npm run storybook
   ```

4. **Test in application**
   - Import and use in pages or other components
   - Test responsive behavior

5. **Add types**
   - Define TypeScript interfaces
   - Export types if needed

---

## Project Structure

### Key Directories

```
src/app/
├── components/        # React components
│   ├── atoms/       # Basic components
│   ├── molecules/   # Component groups
│   ├── organisms/   # Complex sections
│   └── shadcn/     # UI library
├── globals.css      # Global styles
├── layout.tsx       # Root layout
└── page.tsx        # Home page
```

### File Naming Conventions

- **Components**: PascalCase (`Card.tsx`, `NavBar.tsx`)
- **Stories**: PascalCase with `.stories.tsx` (`Card.stories.tsx`)
- **CSS Modules**: camelCase with `.module.css` (`card.module.css`)
- **Types/Enums**: PascalCase (`CardData.ts`, `CardFormat.ts`)

### Import Paths

Use TypeScript path aliases:

```tsx
// ✅ Good
import Card from '@components/atoms/card/Card';
import logo from '@images/logo.svg';

// ❌ Avoid
import Card from '../../components/atoms/card/Card';
```

---

## Code Standards

### TypeScript

- Always define interfaces for props
- Use explicit types, avoid `any`
- Export types that are used elsewhere

```tsx
// ✅ Good
interface CardProps {
  title: string;
  content: string;
}

export default function Card({ title, content }: CardProps) {
  // ...
}

// ❌ Avoid
export default function Card(props: any) {
  // ...
}
```

### React

- Use functional components
- Prefer named exports for types, default for components
- Use React 19 features appropriately

```tsx
// ✅ Good
export type CardData = { ... };
export default function Card({ ... }: CardData) { ... }

// ❌ Avoid
export class Card extends React.Component { ... }
```

### Component Structure

```tsx
// 1. Imports
import React from 'react';
import Image from 'next/image';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
}

// 3. Component
export default function Component({ title }: ComponentProps) {
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

---

## Component Development

### Creating a New Atom

1. **Create directory**
   ```bash
   mkdir src/app/components/atoms/my-component
   ```

2. **Create component**
   ```tsx
   // MyComponent.tsx
   interface MyComponentProps {
     title: string;
   }
   
   export default function MyComponent({ title }: MyComponentProps) {
     return <div>{title}</div>;
   }
   ```

3. **Create story**
   ```tsx
   // MyComponent.stories.tsx
   import type { Meta, StoryObj } from '@storybook/nextjs/*';
   import MyComponent from './MyComponent';
   
   const meta: Meta<typeof MyComponent> = {
     title: 'Atoms/MyComponent',
     component: MyComponent,
   };
   
   export default meta;
   type Story = StoryObj<typeof MyComponent>;
   
   export const Default: Story = {
     args: {
       title: 'Example',
     },
   };
   ```

### Component Best Practices

1. **Single Responsibility**: Each component should do one thing
2. **Reusability**: Design for reuse
3. **Props Interface**: Always define TypeScript interface
4. **Accessibility**: Use semantic HTML and ARIA labels
5. **Responsive**: Design mobile-first

---

## Styling Guidelines

### Tailwind CSS

Primary styling method:

```tsx
<div className="flex w-full max-w-6xl mx-auto p-4">
  <h1 className="text-2xl font-bold text-gray-900">
    Title
  </h1>
</div>
```

### CSS Modules

For component-specific styles:

```tsx
// component.module.css
.container {
  display: flex;
  width: 100%;
}

// Component.tsx
import styles from './component.module.css';

<div className={styles.container}>
```

### Responsive Design

Mobile-first approach:

```tsx
<div className="
  w-full          // Mobile
  md:w-1/2        // Tablet
  lg:w-1/3        // Desktop
  xl:w-1/4        // Large desktop
">
```

### Color Usage

Use design system colors:

```tsx
// Primary colors
className="text-[hsl(233,26%,24%)]"
className="bg-gray-100"

// Hover states
className="hover:text-lime-400"
```

---

## Testing

### Visual Testing

1. **Storybook**: Component isolation
   ```bash
   npm run storybook
   ```

2. **Chromatic**: Visual regression
   ```bash
   npm run chromatic
   ```

### Manual Testing

1. **Responsive Testing**
   - Test on mobile (375px)
   - Test on tablet (768px)
   - Test on desktop (1024px+)

2. **Browser Testing**
   - Chrome/Edge
   - Firefox
   - Safari (if available)

3. **Accessibility Testing**
   - Keyboard navigation
   - Screen reader compatibility
   - ARIA labels

### Linting

```bash
npm run lint
```

Fix auto-fixable issues:
```bash
npm run lint -- --fix
```

---

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Development server
lsof -ti:3001 | xargs kill -9

# Storybook
lsof -ti:6006 | xargs kill -9
```

#### Module Not Found

1. Clear `.next` directory
   ```bash
   rm -rf .next
   npm run dev
   ```

2. Reinstall dependencies
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

#### TypeScript Errors

1. Restart TypeScript server (VS Code)
2. Check `tsconfig.json` paths
3. Verify imports use correct paths

#### Tailwind Styles Not Applying

1. Check `globals.css` imports
2. Verify `postcss.config.mjs` exists
3. Restart dev server

#### Build Errors

1. Check for TypeScript errors
2. Verify all imports are correct
3. Check for missing dependencies

---

## Development Tools

### VS Code Extensions (Recommended)

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Tailwind CSS IntelliSense**: Tailwind autocomplete
- **TypeScript**: Type checking

### Browser Extensions

- **React Developer Tools**: React debugging
- **Accessibility Insights**: A11y testing

---

## Git Workflow

### Branch Naming

- `feature/feature-name`: New features
- `fix/bug-name`: Bug fixes
- `docs/documentation`: Documentation updates
- `refactor/component-name`: Refactoring

### Commit Messages

Follow conventional commits:

```
feat: add new card component
fix: resolve navbar overflow issue
docs: update component API documentation
refactor: simplify container wrapper
style: format code with prettier
test: add storybook stories
```

---

## Performance Tips

1. **Image Optimization**: Always use Next.js `Image` component
2. **Code Splitting**: Let Next.js handle automatic splitting
3. **Bundle Size**: Monitor with `npm run build`
4. **Lazy Loading**: Use dynamic imports for heavy components

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

For more information:
- [Component API](./COMPONENT_API.md)
- [Architecture](./ARCHITECTURE.md)
- [Contributing](./CONTRIBUTING.md)

