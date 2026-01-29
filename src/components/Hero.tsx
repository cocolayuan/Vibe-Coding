import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-text-muted">{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-bold text-text mb-6 leading-tight"
        >
          {t.hero.title1}{' '}
          <span className="bg-gradient-to-r from-[#4CAF50] via-[#00897B] to-[#D4A017] bg-clip-text text-transparent">
            {t.hero.title2}
          </span>
          <br />
          {t.hero.title3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#get-started"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg rounded-2xl cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(76, 175, 80, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#what-is"
            className="flex items-center gap-2 px-8 py-4 glass-card text-text font-semibold text-lg cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.learnMore}
          </motion.a>
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="glass-card overflow-hidden glow">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/20">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-4 text-sm text-text-muted font-mono">{t.hero.terminal}</span>
            </div>
            <div className="p-6 font-mono text-sm text-left">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-secondary">$</span>{' '}
                <span className="text-text">clawdbot --help</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-4 text-text-muted"
              >
                <p className="text-primary">{t.hero.version}</p>
                <p className="mt-2">{t.hero.commands}</p>
                <p className="ml-4">{t.hero.cmdChat}</p>
                <p className="ml-4">{t.hero.cmdFix}</p>
                <p className="ml-4">{t.hero.cmdReview}</p>
                <p className="ml-4">{t.hero.cmdGenerate}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
