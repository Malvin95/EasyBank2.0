import { Inter } from 'next/font/google';
import { ResponsiveHeroSection } from '@components/organisms/hero-section/HeroSectionOrg';
import WhySection from '@components/organisms/why-section/WhySectionOrg';
import LatestSection from '@components/organisms/latest-section/LatestArticlesOrg';
import Footer from '@components/molecules/footer/FooterComponent';
import Navbar from '@components/molecules/collapsible-navbar/NavBar';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '700']
});

export default function Home() {
  return (
    <main className={inter.className}>
      <Navbar />
      <ResponsiveHeroSection />
      <WhySection />
      <LatestSection />
      <Footer />
    </main>
  );
};
