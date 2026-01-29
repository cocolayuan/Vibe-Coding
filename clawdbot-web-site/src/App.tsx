import { motion } from 'framer-motion'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import Features from './components/Features'
import BestPractices from './components/BestPractices'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import FloatingOrbs from './components/FloatingOrbs'

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen animated-bg">
        <FloatingOrbs />
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <WhatIs />
          <Features />
          <BestPractices />
          <GetStarted />
        </motion.main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
