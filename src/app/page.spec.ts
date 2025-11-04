// src/app/page.test.tsx
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock next/font/google Inter to return a stable className
jest.mock('next/font/google', () => ({
  Inter: () => ({ className: 'test-inter' }),
}));

// Mock organisms and molecules imported by src/app/page.tsx
jest.mock('@components/organisms/hero-section/HeroSectionOrg', () => ({
  __esModule: true,
  ResponsiveHeroSection: () => <div>HeroOrgMock</div>,
}));

jest.mock('@components/organisms/why-section/WhySectionOrg', () => ({
  __esModule: true,
  default: () => <section>WhyOrgMock</section>,
}));

jest.mock('@components/organisms/latest-section/LatestArticlesOrg', () => ({
  __esModule: true,
  default: () => <section>LatestOrgMock</section>,
}));

jest.mock('@components/molecules/footer/FooterComponent', () => ({
  __esModule: true,
  default: () => <footer>FooterMock</footer>,
}));

jest.mock('@components/molecules/collapsible-navbar/NavBar', () => ({
  __esModule: true,
  default: () => <nav>NavBarMock</nav>,
}));

// Import the page under test after mocks
import Home from './page';

describe('src/app/page', () => {
  it('renders main with Inter className and all organisms/molecules', () => {
    const { container } = render(<Home />);

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main.className).toContain('test-inter');

    expect(screen.getByText('NavBarMock')).toBeInTheDocument();
    expect(screen.getByText('HeroOrgMock')).toBeInTheDocument();
    expect(screen.getByText('WhyOrgMock')).toBeInTheDocument();
    expect(screen.getByText('LatestOrgMock')).toBeInTheDocument();
    expect(screen.getByText('FooterMock')).toBeInTheDocument();

    // optional snapshot for regression
    expect(container).toMatchSnapshot();
  });
});


// tests/organisms.spec.ts
// Playwright template (save under your Playwright tests folder if using Playwright)
import { test, expect } from '@playwright/test';

test.describe('Organisms smoke tests (app folder)', () => {
  test('home page displays navbar, hero, why, latest sections and footer', async ({ page }) => {
    await page.goto('http://localhost:3000'); // ensure dev server is running

    // navbar and footer visibility
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();

    // main should exist
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // count section elements inside main (expect at least hero, why, latest)
    const sections = main.locator('section');
    const count = await sections.count();
    expect(count).toBeGreaterThanOrEqual(3);

    // examples of checking for known text; adjust to your components' real text if needed
    // await expect(page.locator('text=Get Started')).toBeVisible();
    // await expect(page.locator('text=Why Easybank')).toBeVisible();
  });
});