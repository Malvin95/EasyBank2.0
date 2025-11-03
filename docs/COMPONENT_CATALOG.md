# Component Catalog

Complete catalog of all components organized by atomic design hierarchy.

## Table of Contents

- [Component Hierarchy](#component-hierarchy)
- [Atoms](#atoms)
- [Molecules](#molecules)
- [Organisms](#organisms)
- [Component Relationships](#component-relationships)
- [Usage Patterns](#usage-patterns)

---

## Component Hierarchy

```
Page (src/app/page.tsx)
│
├── NavBar (Molecule)
│   ├── Logo (Image)
│   ├── LargeMenu (Atom) [Desktop]
│   │   └── MenuItem (Atom) × 5
│   └── SmallMenu (Atom) [Mobile]
│       └── MenuItem (Atom) × 5
│
├── ResponsiveHeroSection (Organism)
│   ├── ContainerWrapper (Atom)
│   └── ContainerTemplate (Atom)
│       └── InviteButton (Atom)
│
├── WhySection (Organism)
│   ├── SectionContainer (Molecule)
│   │   ├── ContainerWrapper (Atom)
│   │   └── ContainerTemplate (Atom)
│   └── Card (Atom) × 4
│       └── Image (Next.js) × 1
│
├── LatestSection (Organism)
│   ├── SectionContainer (Molecule)
│   │   ├── ContainerWrapper (Atom)
│   │   └── ContainerTemplate (Atom)
│   └── Card (Atom) × 4
│       └── Image (Next.js) × 1
│
└── Footer (Molecule)
    ├── Logo (Image)
    ├── IconBar (Atom)
    │   └── Image (Next.js) × 5
    ├── LinkList (Atom) × 2
    │   └── Button × N
    └── InviteButton (Atom)
```

---

## Atoms

Basic, indivisible components that serve as building blocks.

### Card

**Location:** `src/app/components/atoms/card/Card.tsx`

**Purpose:** Flexible card component for displaying information or blog posts.

**Variants:**
- `CardFormat.INFO` - Information card with icon
- `CardFormat.BLOG` - Blog card with featured image

**Props:**
```typescript
{
  cardType: CardFormat;
  imageUrl: string;
  author?: string;
  title: string;
  content: string;
  alt: string;
}
```

**Used By:**
- WhySection (4x INFO cards)
- LatestSection (4x BLOG cards)

---

### ContainerWrapper

**Location:** `src/app/components/atoms/container-wrapper/ContainerWrapper.tsx`

**Purpose:** Provides responsive container styling and background images.

**Props:**
```typescript
{
  templateFormat?: TemplateFormat;
  children: React.ReactNode;
}
```

**Features:**
- Responsive width constraints
- Background image handling
- Template-specific styling

**Used By:**
- SectionContainer (molecule)
- ResponsiveHeroSection (organism)

---

### ContainerTemplate

**Location:** `src/app/components/atoms/container-template/ContainerTemplate.tsx`

**Purpose:** Template for consistent section layouts with title and subtitle.

**Props:**
```typescript
{
  templateFormat?: TemplateFormat;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}
```

**Used By:**
- SectionContainer (molecule)
- ResponsiveHeroSection (organism)

---

### InviteButton

**Location:** `src/app/components/atoms/invite-button/InviteButtonComponent.tsx`

**Purpose:** Call-to-action button for requesting invites.

**Props:** None

**Styling:** CSS Modules

**Used By:**
- ResponsiveHeroSection
- Footer

---

### MenuItem

**Location:** `src/app/components/atoms/menu-item/MenuItem.tsx`

**Purpose:** Individual menu item with hover effects.

**Props:**
```typescript
{
  title: string;
}
```

**Used By:**
- LargeMenu
- SmallMenu

---

### LargeMenu

**Location:** `src/app/components/atoms/large-menu/LargeMenu.tsx`

**Purpose:** Desktop menu displaying menu items horizontally.

**Props:**
```typescript
{
  menuStrings: string[];
}
```

**Used By:**
- NavBar (desktop view)

---

### SmallMenu

**Location:** `src/app/components/atoms/small-menu/SmallMenu.tsx`

**Purpose:** Mobile menu with popover functionality.

**Props:**
```typescript
{
  menuStrings: string[];
}
```

**Features:**
- Radix UI Popover
- Hamburger icon
- Responsive design

**Used By:**
- NavBar (mobile view)

---

### LinkList

**Location:** `src/app/components/atoms/link-list/LinkList.tsx`

**Purpose:** Vertical list of links for footer navigation.

**Props:**
```typescript
{
  list: string[];
}
```

**Used By:**
- Footer (2x instances)

---

### IconBar

**Location:** `src/app/components/atoms/icon-bar/IconBar.tsx`

**Purpose:** Social media icon bar.

**Props:** None

**Icons:**
- Facebook
- YouTube
- Twitter
- Pinterest
- Instagram

**Used By:**
- Footer

---

## Molecules

Simple combinations of atoms that form functional groups.

### NavBar

**Location:** `src/app/components/molecules/collapsible-navbar/NavBar.tsx`

**Purpose:** Responsive navigation bar with mobile and desktop variants.

**Components:**
- Logo (Image)
- LargeMenu (desktop)
- SmallMenu (mobile)

**Features:**
- Responsive breakpoint at 769px
- Fixed positioning
- Media query-based rendering

**Used By:**
- Page (root)

---

### Footer

**Location:** `src/app/components/molecules/footer/FooterComponent.tsx`

**Purpose:** Footer with logo, links, and social icons.

**Components:**
- Logo (Image)
- IconBar (Atom)
- LinkList (Atom) × 2
- InviteButton (Atom)

**Layout:**
- Responsive grid
- 4-column on desktop
- Stacked on mobile

**Used By:**
- Page (root)

---

### SectionContainer

**Location:** `src/app/components/molecules/sectionContainer/SectionContainer.tsx`

**Purpose:** High-level container combining ContainerWrapper and ContainerTemplate.

**Components:**
- ContainerWrapper (Atom)
- ContainerTemplate (Atom)

**Props:**
```typescript
{
  templateFormat?: TemplateFormat;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}
```

**Template Formats:**
- `TemplateFormat.HERO`
- `TemplateFormat.WHY`
- `TemplateFormat.LATEST`

**Used By:**
- WhySection
- LatestSection

---

## Organisms

Complex UI sections composed of molecules and atoms.

### ResponsiveHeroSection

**Location:** `src/app/components/organisms/hero-section/HeroSectionOrg.tsx`

**Purpose:** Main hero section with responsive layout and background images.

**Components:**
- ContainerWrapper (Atom)
- ContainerTemplate (Atom)
- InviteButton (Atom)
- Image (Next.js) - Mockup image

**Features:**
- Responsive flex layout
- Background images (mobile/desktop)
- Responsive image positioning
- Title, subtitle, and CTA

**Content:**
- Title: "Next generation digital banking"
- Subtitle: "Take your financial life online..."
- CTA: InviteButton

**Used By:**
- Page (root)

---

### WhySection

**Location:** `src/app/components/organisms/why-section/WhySectionOrg.tsx`

**Purpose:** "Why choose Easybank?" section with feature cards.

**Components:**
- SectionContainer (Molecule)
- Card (Atom) × 4 (INFO format)

**Content:**
- Title: "Why choose Easybank?"
- Subtitle: "We leverage Open Banking..."
- 4 Info Cards:
  1. Online Banking
  2. Simple Budgeting
  3. Fast Onboarding
  4. Open API

**Used By:**
- Page (root)

---

### LatestSection

**Location:** `src/app/components/organisms/latest-section/LatestArticlesOrg.tsx`

**Purpose:** Latest articles/blog posts section.

**Components:**
- SectionContainer (Molecule)
- Card (Atom) × 4 (BLOG format)

**Content:**
- Title: "Latest Articles"
- 4 Blog Cards with images and author info

**Used By:**
- Page (root)

---

## Component Relationships

### Composition Tree

```
Page
├── NavBar
│   ├── LargeMenu → MenuItem × 5
│   └── SmallMenu → MenuItem × 5
│
├── ResponsiveHeroSection
│   ├── ContainerWrapper
│   └── ContainerTemplate
│       └── InviteButton
│
├── WhySection
│   └── SectionContainer
│       ├── ContainerWrapper
│       └── ContainerTemplate
│           └── Card × 4 (INFO)
│
├── LatestSection
│   └── SectionContainer
│       ├── ContainerWrapper
│       └── ContainerTemplate
│           └── Card × 4 (BLOG)
│
└── Footer
    ├── IconBar
    ├── LinkList × 2
    └── InviteButton
```

### Data Flow

```
CardContent.ts
  ├── infoContent → WhySection → Card (INFO)
  └── blogContent → LatestSection → Card (BLOG)
```

---

## Usage Patterns

### Pattern 1: Section with Cards

```tsx
<SectionContainer
  templateFormat={TemplateFormat.WHY}
  title="Section Title"
  subtitle="Section subtitle"
>
  {data.map((item) => (
    <Card
      cardType={CardFormat.INFO}
      {...item}
    />
  ))}
</SectionContainer>
```

### Pattern 2: Container Composition

```tsx
<ContainerWrapper templateFormat={TemplateFormat.HERO}>
  <ContainerTemplate
    templateFormat={TemplateFormat.HERO}
    title="Title"
    subtitle="Subtitle"
  >
    <InviteButton />
  </ContainerTemplate>
</ContainerWrapper>
```

### Pattern 3: Responsive Navigation

```tsx
const matches = useMediaQuery('(min-width:769px)');

{matches ? (
  <LargeMenu menuStrings={items} />
) : (
  <SmallMenu menuStrings={items} />
)}
```

---

## Component Statistics

### Total Components

- **Atoms**: 9 components
- **Molecules**: 3 components
- **Organisms**: 3 components
- **Total**: 15 components

### Reusability

- **Most Reused**: Card (8 instances)
- **Most Versatile**: ContainerWrapper (used in 3 organisms)
- **Most Specialized**: ResponsiveHeroSection (single use)

---

## Component Dependencies

### External Dependencies

- **Next.js**: Image component
- **Radix UI**: Popover component
- **usehooks-ts**: useMediaQuery hook
- **React**: Core framework

### Internal Dependencies

- **CardContent.ts**: Data source for cards
- **TemplateFormat**: Enum for template types
- **CardFormat**: Enum for card types

---

## Storybook Coverage

All components have Storybook stories:

- ✅ All Atoms (9/9)
- ✅ All Molecules (3/3)
- ✅ All Organisms (3/3)

**Total Coverage**: 100%

---

## Component Guidelines

### When to Create New Components

1. **Reusability**: Component used in multiple places
2. **Complexity**: Logic or styling justifies separation
3. **Atomic Design**: Fits atom/molecule/organism structure
4. **Storybook**: Component benefits from isolated testing

### Component Naming

- **Atoms**: Single purpose (Card, Button, Icon)
- **Molecules**: Plural if contains multiple items (LargeMenu, LinkList)
- **Organisms**: Section-based (HeroSection, WhySection)

---

For detailed API documentation, see [COMPONENT_API.md](./COMPONENT_API.md).

For architecture details, see [ARCHITECTURE.md](./ARCHITECTURE.md).

