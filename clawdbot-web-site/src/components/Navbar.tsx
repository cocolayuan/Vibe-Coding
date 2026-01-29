import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Bot, Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { name: t.nav.whatIs, href: '#what-is' },
    { name: t.nav.features, href: '#features' },
    { name: t.nav.bestPractices, href: '#best-practices' },
    { name: t.nav.getStarted, href: '#get-started' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en')
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <div className="glass-card px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <motion.a
          href="#"
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <span className="font-heading font-bold text-xl text-text">ClawdBot</span>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.li key={item.href}>
              <motion.a
                href={item.href}
                className="text-text-muted font-medium cursor-pointer relative group"
                whileHover={{ color: '#1A2E1A' }}
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 glass-card text-text-muted font-medium cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-semibold">{language === 'en' ? 'EN' : '中'}</span>
          </motion.button>

          <motion.a
            href="#get-started"
            className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(76, 175, 80, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            {t.nav.startFree}
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={toggleLanguage}
            className="p-2 glass-card cursor-pointer"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle language"
          >
            <span className="text-sm font-semibold text-text-muted">{language === 'en' ? 'EN' : '中'}</span>
          </motion.button>
          <motion.button
            className="p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden mt-2"
      >
        <div className="glass-card p-4 max-w-6xl mx-auto">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 text-text-muted font-medium cursor-pointer hover:text-text transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#get-started"
                className="block w-full text-center py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.startFree}
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
