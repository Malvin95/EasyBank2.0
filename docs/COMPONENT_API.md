# Component API Documentation

Complete reference for all components in the EasyBank 2.0 project.

## Table of Contents

- [Atoms](#atoms)
- [Molecules](#molecules)
- [Organisms](#organisms)

---

## Atoms

### Card

A flexible card component that supports both info and blog card formats.

**Location:** `src/app/components/atoms/card/Card.tsx`

**Props:**

```typescript
interface CardData {
  cardType: CardFormat;      // 'InfoCard' | 'BlobCard'
  imageUrl: string;           // Image source URL
  author?: string;            // Author name (for blog cards)
  title: string;              // Card title
  content: string;            // Card content/description
  alt: string;               // Image alt text
}
```

**Usage:**

```tsx
import Card, { CardFormat } from '@components/atoms/card/Card';

<Card
  cardType={CardFormat.INFO}
  imageUrl="/images/icon-online.svg"
  title="Online Banking"
  content="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
  alt="Online banking icon"
/>
```

**Variants:**
- `CardFormat.INFO` - Information card with icon
- `CardFormat.BLOG` - Blog card with featured image

---

### ContainerWrapper

Wrapper component that provides responsive container styling and background images.

**Location:** `src/app/components/atoms/container-wrapper/ContainerWrapper.tsx`

**Props:**

```typescript
interface ContainerWrapperProps {
  templateFormat?: TemplateFormat;  // 'Hero' | 'Why' | 'Latest'
  children: React.ReactNode;        // Child components
}
```

**Usage:**

```tsx
import ContainerWrapper from '@components/atoms/container-wrapper/ContainerWrapper';
import { TemplateFormat } from '@components/molecules/sectionContainer/SectionContainer';

<ContainerWrapper templateFormat={TemplateFormat.HERO}>
  <div>Your content here</div>
</ContainerWrapper>
```

**Features:**
- Responsive width constraints
- Background image handling for Hero sections
- Template-specific styling

---

### ContainerTemplate

Template component for consistent section layouts with title and subtitle.

**Location:** `src/app/components/atoms/container-template/ContainerTemplate.tsx`

**Props:**

```typescript
interface ContainerType {
  templateFormat?: TemplateFormat;  // 'Hero' | 'Why' | 'Latest'
  title: string;                    // Section title
  subtitle?: string;                // Optional subtitle
  children: React.ReactNode;        // Child components
}
```

**Usage:**

```tsx
import ContainerTemplate from '@components/atoms/container-template/ContainerTemplate';
import { TemplateFormat } from '@components/molecules/sectionContainer/SectionContainer';

<ContainerTemplate
  templateFormat={TemplateFormat.HERO}
  title="Next generation digital banking"
  subtitle="Take your financial life online..."
>
  <InviteButton />
</ContainerTemplate>
```

---

### InviteButton

Call-to-action button component for requesting invites.

**Location:** `src/app/components/atoms/invite-button/InviteButtonComponent.tsx`

**Props:** None (self-contained component)

**Usage:**

```tsx
import InviteButton from '@components/atoms/invite-button/InviteButtonComponent';

<InviteButton />
```

**Styling:** Uses CSS modules (`inviteButton.module.css`)

---

### MenuItem

Individual menu item component with hover effects.

**Location:** `src/app/components/atoms/menu-item/MenuItem.tsx`

**Props:**

```typescript
interface menuItemProps {
  title: string;  // Menu item text
}
```

**Usage:**

```tsx
import MenuItem from '@components/atoms/menu-item/MenuItem';

<MenuItem title="Home" />
<MenuItem title="About" />
```

**Styling:** Uses CSS modules (`menuItem.module.css`)

---

### LargeMenu

Desktop menu component displaying menu items horizontally.

**Location:** `src/app/components/atoms/large-menu/LargeMenu.tsx`

**Props:**

```typescript
interface LargeMenuProps {
  menuStrings: string[];  // Array of menu item labels
}
```

**Usage:**

```tsx
import LargeMenu from '@components/atoms/large-menu/LargeMenu';

<LargeMenu menuStrings={['Home', 'About', 'Contact', 'Blog', 'Careers']} />
```

---

### SmallMenu

Mobile menu component with popover functionality.

**Location:** `src/app/components/atoms/small-menu/SmallMenu.tsx`

**Props:**

```typescript
interface SmallMenuProps {
  menuStrings: string[];  // Array of menu item labels
}
```

**Usage:**

```tsx
import SmallMenu from '@components/atoms/small-menu/SmallMenu';

<SmallMenu menuStrings={['Home', 'About', 'Contact', 'Blog', 'Careers']} />
```

**Features:**
- Uses Radix UI Popover for mobile menu
- Hamburger icon for toggle
- Responsive design

---

### LinkList

Vertical list of links for footer navigation.

**Location:** `src/app/components/atoms/link-list/LinkList.tsx`

**Props:**

```typescript
interface LinkListProps {
  list: string[];  // Array of link labels
}
```

**Usage:**

```tsx
import LinkList from '@components/atoms/link-list/LinkList';

<LinkList list={['About Us', 'Contact', 'Blog']} />
```

**Features:**
- Hover effects (lime-400 color)
- Responsive text alignment

---

### IconBar

Social media icon bar component.

**Location:** `src/app/components/atoms/icon-bar/IconBar.tsx`

**Props:** None (self-contained component)

**Usage:**

```tsx
import IconBar from '@components/atoms/icon-bar/IconBar';

<IconBar />
```

**Included Icons:**
- Facebook
- YouTube
- Twitter
- Pinterest
- Instagram

**Features:**
- Hover effects on icons
- Accessible image alt text

---

## Molecules

### NavBar

Responsive navigation bar with mobile and desktop variants.

**Location:** `src/app/components/molecules/collapsible-navbar/NavBar.tsx`

**Props:** None (self-contained component)

**Usage:**

```tsx
import Navbar from '@components/molecules/collapsible-navbar/NavBar';

<Navbar />
```

**Features:**
- Responsive design (mobile < 769px, desktop >= 769px)
- Fixed positioning
- Logo and menu items
- Uses `useMediaQuery` hook for responsive behavior

**Menu Items:**
- Home
- About
- Contact
- Blog
- Careers

---

### Footer

Footer component with logo, links, and social icons.

**Location:** `src/app/components/molecules/footer/FooterComponent.tsx`

**Props:** None (self-contained component)

**Usage:**

```tsx
import Footer from '@components/molecules/footer/FooterComponent';

<Footer />
```

**Features:**
- Responsive grid layout
- Logo and social icons
- Multiple link lists
- Copyright notice
- Invite button

---

### SectionContainer

High-level container component that combines ContainerWrapper and ContainerTemplate.

**Location:** `src/app/components/molecules/sectionContainer/SectionContainer.tsx`

**Props:**

```typescript
interface ContainerType {
  templateFormat?: TemplateFormat;  // 'Hero' | 'Why' | 'Latest'
  title: string;                    // Section title
  subtitle?: string;                // Optional subtitle
  children: React.ReactNode;        // Child components
}
```

**Usage:**

```tsx
import SectionContainer, { TemplateFormat } from '@components/molecules/sectionContainer/SectionContainer';

<SectionContainer
  templateFormat={TemplateFormat.WHY}
  title="Why choose Easybank?"
  subtitle="We leverage Open Banking..."
>
  {/* Card components */}
</SectionContainer>
```

**Template Formats:**
- `TemplateFormat.HERO` - Hero section with background images
- `TemplateFormat.WHY` - Why section with gray background
- `TemplateFormat.LATEST` - Latest articles section

---

## Organisms

### ResponsiveHeroSection

Main hero section component with responsive layout.

**Location:** `src/app/components/organisms/hero-section/HeroSectionOrg.tsx`

**Props:** None (self-contained component)

**Usage:**

```tsx
import { ResponsiveHeroSection } from '@components/organisms/hero-section/HeroSectionOrg';

<ResponsiveHeroSection />
```

**Features:**
- Responsive flex layout
- Background images (mobile and desktop)
- Mockup image with responsive positioning
- Title, subtitle, and CTA button

**Content:**
- Title: "Next generation digital banking"
- Subtitle: "Take your financial life online..."
- CTA: InviteButton

---

### WhySection

"Why choose Easybank?" section with feature cards.

**Location:** `src/app/components/organisms/why-section/WhySectionOrg.tsx`

**Props:** None (self-contained component)

**Usage:**

```tsx
import WhySection from '@components/organisms/why-section/WhySectionOrg';

<WhySection />
```

**Features:**
- Uses SectionContainer with TemplateFormat.WHY
- Displays 4 info cards from CardContent
- Gray background
- Responsive grid layout

**Cards:**
1. Online Banking
2. Simple Budgeting
3. Fast Onboarding
4. Open API

---

### LatestSection

Latest articles/blog posts section.

**Location:** `src/app/components/organisms/latest-section/LatestArticlesOrg.tsx`

**Props:** None (self-contained component)

**Usage:**

```tsx
import LatestSection from '@components/organisms/latest-section/LatestArticlesOrg';

<LatestSection />
```

**Features:**
- Uses SectionContainer with TemplateFormat.LATEST
- Displays blog cards from CardContent
- Responsive grid layout
- Article previews with images

---

## Type Definitions

### CardFormat

```typescript
enum CardFormat {
  INFO = 'InfoCard',
  BLOG = 'BlobCard'
}
```

### TemplateFormat

```typescript
enum TemplateFormat {
  HERO = 'Hero',
  WHY = 'Why',
  LATEST = 'Latest'
}
```

---

## Data Sources

### CardContent

Card data is stored in:
- `src/app/components/atoms/card/CardContent.ts`

**Exports:**
- `infoContent` - Array of info card data
- `blogContent` - Array of blog card data

---

## Styling Conventions

- **Tailwind CSS** for utility classes
- **CSS Modules** for component-specific styles (`.module.css`)
- **Responsive Design** using Tailwind breakpoints
- **Custom Colors** defined in `globals.css`

---

## Storybook Stories

All components have corresponding Storybook stories located in:
- `src/app/components/[category]/[component]/[Component].stories.tsx`

View stories by running:
```bash
npm run storybook
```

