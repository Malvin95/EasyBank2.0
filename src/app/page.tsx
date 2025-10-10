import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Navbar from '@components/molecules/navbar/NavbarComponent';
import HeroSection from '@components/organisms/herosec/HeroSectionOrg';
import WhySection from '@components/organisms/whySec/WhySectionOrg';
import LatestSection from '@components/organisms/latestSec/LatestArticlesOrg';
import Footer from '@components/molecules/footer/FooterComponent';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '700']
});

export default function Home() {
  return (
    <main className={inter.className}>
      <div className={styles.main}>
        <Navbar />
        <HeroSection />
        <WhySection />
        <LatestSection />
        <Footer />
      </div>
    </main>
  );
};
