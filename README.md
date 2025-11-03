# EasyBank 2.0

A modern, responsive banking landing page built with Next.js 15, React 19, and Tailwind CSS v4. This project demonstrates a component-based architecture following atomic design principles.

**🌐 Live Demo:** [View Production Build](https://easy-bank2-0.vercel.app/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd EasyBank2.0

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) to view the application.

## 📚 Project Overview

EasyBank 2.0 is a Frontend Mentor challenge implementation featuring:

- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS v4** with PostCSS
- **Storybook** for component documentation and testing
- **Atomic Design** component architecture
- **Responsive Design** for mobile, tablet, and desktop

## 📁 Project Structure

```
src/app/
├── components/
│   ├── atoms/          # Basic building blocks (buttons, cards, menus)
│   ├── molecules/       # Simple component groups (navbar, footer, sections)
│   ├── organisms/       # Complex page sections (hero, why, latest)
│   └── shadcn/         # UI component library utilities
├── globals.css         # Global styles and Tailwind configuration
├── layout.tsx          # Root layout component
└── page.tsx            # Home page
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start dev server with Turbopack (port 3001)
npm run build            # Build for production
npm run start            # Start production server
npm run lint              # Run ESLint

# Storybook
npm run storybook        # Start Storybook (port 6006)
npm run build-storybook  # Build static Storybook

# Testing
npm run chromatic        # Run Chromatic visual tests
```

## 🎨 Tech Stack

### Core Technologies
- **Next.js 15.5.4** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5.0.2** - Type safety

### Styling
- **Tailwind CSS 4.1.16** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **tw-animate-css** - Animation utilities

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **shadcn/ui** - Component library

### Development Tools
- **Storybook 9.1.10** - Component development environment
- **Chromatic** - Visual testing
- **Playwright** - E2E testing
- **ESLint** - Code linting

## 📖 Documentation

Comprehensive documentation is available in the `/docs` directory:

- [Component API](./docs/COMPONENT_API.md) - Complete component reference
- [Architecture](./docs/ARCHITECTURE.md) - Project structure and patterns
- [Development Guide](./docs/DEVELOPMENT.md) - Setup and workflows
- [Component Catalog](./docs/COMPONENT_CATALOG.md) - Component hierarchy
- [Contributing](./docs/CONTRIBUTING.md) - Contribution guidelines
- [Deployment](./docs/DEPLOYMENT.md) - Build and deployment

## 🧩 Component Architecture

This project follows **Atomic Design** principles:

- **Atoms**: Basic components (Button, Card, MenuItem)
- **Molecules**: Component groups (Navbar, Footer, SectionContainer)
- **Organisms**: Page sections (HeroSection, WhySection, LatestSection)

All components include Storybook stories for documentation and testing.

## 🎯 Key Features

- ✅ Fully responsive design (mobile-first)
- ✅ Accessible components (ARIA compliant)
- ✅ Type-safe with TypeScript
- ✅ Component-driven development with Storybook
- ✅ Optimized images with Next.js Image
- ✅ Server-side rendering with Next.js
- ✅ Modern CSS with Tailwind v4

## 🚢 Deployment

The project is configured for deployment on Vercel. See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for detailed instructions.

## 📝 License

This project is a Frontend Mentor challenge solution.

## 🙏 Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/) for the design challenge
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS

---

For detailed documentation, see the `/docs` directory.
