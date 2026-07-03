import { LangProvider } from './context/LangContext'
import TopBar from './components/TopBar'
import Header from './components/Header'
import CategoryTabs from './components/CategoryTabs'
import HeroBanner from './components/HeroBanner'
import CategoryGrid from './components/CategoryGrid'
import ProductSections from './components/ProductSections'
import Footer from './components/Footer'
import ArticlesPage from './components/ArticlesPage'
import Brends from './components/Brends'
import WhyMediaPark from './components/WhyMediapark'
import AppBanner from './components/AppBanner'


export default function Home() {
  return (
    <LangProvider>
      <main className="min-h-screen bg-white pb-16">
        {/* <TopBar /> */}
        <Header />
        <CategoryTabs />
        <HeroBanner />
        <CategoryGrid />
        <ProductSections />
        <ArticlesPage />
        <Brends />
        <WhyMediaPark />
        <AppBanner />
        <Footer />
        
        
      </main>
    </LangProvider>
  )
}