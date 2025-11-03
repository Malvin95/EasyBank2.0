# Contributing Guidelines

Thank you for your interest in contributing to EasyBank 2.0! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Component Guidelines](#component-guidelines)
- [Pull Request Process](#pull-request-process)
- [Commit Guidelines](#commit-guidelines)

---

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism
- Focus on what is best for the project
- Show empathy towards other contributors

---

## Getting Started

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/your-username/EasyBank2.0.git
cd EasyBank2.0
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Changes

Follow the [Development Guide](./DEVELOPMENT.md) for setup and workflow.

---

## Development Process

### Before Starting

1. Check existing issues and PRs
2. Discuss major changes in an issue first
3. Ensure you understand the architecture (see [ARCHITECTURE.md](./ARCHITECTURE.md))

### Development Steps

1. **Plan your changes**
   - Understand the component structure
   - Review similar components for patterns
   - Check Storybook stories for examples

2. **Develop locally**
   ```bash
   npm run dev        # Start dev server
   npm run storybook  # Start Storybook
   ```

3. **Test thoroughly**
   - Test in multiple browsers
   - Test responsive behavior
   - Verify accessibility
   - Check Storybook stories

4. **Lint and format**
   ```bash
   npm run lint
   ```

5. **Document changes**
   - Update component documentation
   - Add/update Storybook stories
   - Update relevant docs if needed

---

## Coding Standards

### TypeScript

- **Always use TypeScript** - No JavaScript files
- **Define interfaces** for all props
- **Avoid `any`** - Use proper types
- **Export types** that are used elsewhere

```tsx
// ✅ Good
interface CardProps {
  title: string;
  content: string;
}

// ❌ Avoid
function Card(props: any) { ... }
```

### Component Structure

```tsx
// 1. Imports (external first, then internal)
import React from 'react';
import Image from 'next/image';
import { CardFormat } from './Card';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
}

// 3. Component
export default function Component({ title }: ComponentProps) {
  // Component logic
  return (
    // JSX
  );
}
```

### Naming Conventions

- **Components**: PascalCase (`Card`, `NavBar`)
- **Files**: Match component name (`Card.tsx`)
- **Props interfaces**: PascalCase with `Props` suffix (`CardProps`)
- **CSS Modules**: camelCase (`card.module.css`)
- **Directories**: kebab-case (`container-wrapper`)

### File Organization

```
component-name/
├── ComponentName.tsx
├── ComponentName.stories.tsx
├── componentName.module.css (if needed)
└── ComponentName.types.ts (if complex types)
```

---

## Component Guidelines

### Atomic Design

Follow the atomic design structure:

- **Atoms**: Basic, indivisible components
- **Molecules**: Simple component combinations
- **Organisms**: Complex UI sections

### Component Requirements

1. **TypeScript Interface**: Define props interface
2. **Storybook Story**: Create story file
3. **Accessibility**: Semantic HTML and ARIA labels
4. **Responsive**: Mobile-first design
5. **Documentation**: Clear prop descriptions

### Example Component

```tsx
import type { Meta, StoryObj } from '@storybook/nextjs/*';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  label, 
  onClick, 
  variant = 'primary' 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant}`}
      aria-label={label}
    >
      {label}
    </button>
  );
}
```

### Storybook Story Template

```tsx
import type { Meta, StoryObj } from '@storybook/nextjs/*';
import Component from './Component';

const meta: Meta<typeof Component> = {
  title: 'Category/ComponentName',
  component: Component,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    // Default props
  },
};

export const Variant: Story = {
  args: {
    // Variant props
  },
};
```

---

## Pull Request Process

### Before Submitting

- [ ] Code follows project standards
- [ ] All tests pass
- [ ] Storybook stories added/updated
- [ ] Documentation updated
- [ ] No linting errors
- [ ] Responsive design tested
- [ ] Accessibility verified

### PR Checklist

1. **Title**: Clear, descriptive title
2. **Description**: Explain what and why
3. **Screenshots**: Visual changes include screenshots
4. **Tests**: Describe testing performed
5. **Breaking Changes**: Note any breaking changes

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested in browser
- [ ] Storybook stories updated
- [ ] Responsive design verified
- [ ] Accessibility checked

## Screenshots
(if applicable)
```

### Review Process

1. **Automated Checks**: Must pass CI/CD
2. **Code Review**: At least one approval required
3. **Feedback**: Address review comments
4. **Merge**: Squash and merge (preferred)

---

## Commit Guidelines

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, missing semicolons
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(card): add hover effect to blog cards
fix(navbar): resolve mobile menu overflow issue
docs(api): update component prop documentation
refactor(container): simplify wrapper logic
style: format code with prettier
test(card): add storybook stories for all variants
```

### Commit Best Practices

- **One logical change per commit**
- **Clear, descriptive messages**
- **Reference issues**: `fix: resolve #123`
- **Breaking changes**: `feat!: add new API`

---

## Style Guide

### Code Formatting

- Use Prettier (if configured)
- Follow ESLint rules
- Consistent indentation (2 spaces)

### CSS/Tailwind

- Use Tailwind utilities primarily
- CSS Modules for component-specific styles
- Mobile-first responsive design
- Consistent spacing scale

### Import Order

1. React/Next.js
2. Third-party libraries
3. Internal components
4. Types/Interfaces
5. Styles

```tsx
// ✅ Good
import React from 'react';
import Image from 'next/image';
import { CardFormat } from '@components/atoms/card/Card';
import styles from './component.module.css';
```

---

## Testing Requirements

### Component Testing

- Create Storybook stories for all components
- Test all prop variations
- Test responsive behavior
- Test edge cases

### Manual Testing

- Test in multiple browsers
- Test on different screen sizes
- Verify accessibility
- Check performance

---

## Documentation

### Required Documentation

1. **Component Props**: Document all props
2. **Usage Examples**: Show how to use component
3. **Storybook Stories**: Visual documentation
4. **API Changes**: Update [COMPONENT_API.md](./COMPONENT_API.md)

### Documentation Updates

When adding/modifying components:
- Update component API docs
- Update component catalog if needed
- Add/update Storybook stories

---

## Questions?

If you have questions:

1. Check existing documentation
2. Review similar components
3. Open an issue for discussion
4. Ask in PR comments

---

## Recognition

Contributors will be recognized in:
- README.md (if applicable)
- Release notes
- Project documentation

Thank you for contributing to EasyBank 2.0! 🎉

