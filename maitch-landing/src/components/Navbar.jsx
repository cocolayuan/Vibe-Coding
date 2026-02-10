import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogIn, Globe, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-4 left-4 right-4 z-50 glass-nav rounded-2xl transition-all duration-300 ${
        scrolled ? 'shadow-lg !bg-white/40' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center cursor-pointer">
          <img src="/maitch-logo.png" alt="Maitch" className="h-9 w-9 object-cover" style={{ borderRadius: '10px' }} />
        </a>

        {/* Desktop Nav — all items grouped right */}
        <div className="hidden md:flex items-center gap-5">
          <a href="#categories" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors cursor-pointer">
            高级搜索
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors cursor-pointer">
            价格
          </a>
          <button className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-primary transition-colors cursor-pointer bg-transparent border-none">
            <Globe size={15} />
            EN
          </button>
          <button className="liquid-glass-btn px-5 py-2.5 text-sm flex items-center gap-2">
            <LogIn size={15} />
            登录
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/20"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#categories" className="text-sm font-medium text-text-secondary py-2 cursor-pointer">高级搜索</a>
              <a href="#how-it-works" className="text-sm font-medium text-text-secondary py-2 cursor-pointer">价格</a>
              <button className="liquid-glass-btn px-5 py-2.5 text-sm mt-2 flex items-center justify-center gap-2 cursor-pointer">
                <LogIn size={15} />
                登录
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
