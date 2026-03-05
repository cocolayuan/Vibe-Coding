import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function Navbar() {
  const links = [
    { label: '首页', href: '#hero' },
    { label: '供应库', href: '#supply' },
    { label: '排行榜', href: '#ranking' },
    { label: '生态', href: '#platform' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-6 py-3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl"
    >
      <a href="#hero" className="flex items-center gap-2 cursor-pointer">
        <Zap className="w-6 h-6 text-green" />
        <span className="font-heading text-lg font-bold tracking-wider text-white">
          MARKETRA
        </span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-white/60 hover:text-green transition-colors duration-200 cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#supply"
        className="px-5 py-2 rounded-full text-sm font-semibold bg-green/10 text-green border border-green/30 hover:bg-green/20 transition-all duration-200 cursor-pointer"
      >
        开始探索
      </a>
    </motion.nav>
  )
}
