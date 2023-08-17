import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from './components/navbar/navbar'
import HeroSection from './components/sections/herosec/heroSection'
import WhySection from './components/sections/whysec/whySection'
import LatestSection from './components/sections/latestsec/latestArticlesSection'
import Footer from './components/footer/footer'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '700']
 })

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
  )
}
