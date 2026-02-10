import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoMarquee from './components/LogoMarquee'
import CategoriesSection from './components/CategoriesSection'
import HowItWorksSection from './components/HowItWorksSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Global grid background */}
      <div className="grid-background" />

      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <CategoriesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
