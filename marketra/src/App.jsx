import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SupplyLibrary from './components/SupplyLibrary'
import Ranking from './components/Ranking'
import Platform from './components/Platform'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark relative">
      {/* Subtle ambient gradient blurs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vh] rounded-full blur-[200px] opacity-20 bg-green" />
        <div className="absolute top-[50%] right-[-10%] w-[40vw] h-[40vh] rounded-full blur-[200px] opacity-20 bg-purple" />
        <div className="absolute bottom-[10%] left-[30%] w-[45vw] h-[35vh] rounded-full blur-[200px] opacity-20 bg-gold" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SupplyLibrary />
        <Ranking />
        <Platform />
        <Footer />
      </div>
    </div>
  )
}
