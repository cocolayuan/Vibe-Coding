import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X, AlertTriangle, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const BestPractices = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  return (
    <section id="best-practices" className="py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-6">
            {t.bestPractices.title1}{' '}
            <span className="bg-gradient-to-r from-[#D4A017] to-[#4CAF50] bg-clip-text text-transparent">
              {t.bestPractices.title2}
            </span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.bestPractices.description}
          </p>
        </motion.div>

        {/* Practice Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {t.bestPractices.categories.map((practice, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-6 cursor-pointer"
              whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              <h3 className="font-heading text-xl font-semibold text-text mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" />
                {practice.name}
              </h3>
              <ul className="space-y-3">
                {practice.tips.map((tip, tipIdx) => (
                  <motion.li
                    key={tipIdx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.15 + tipIdx * 0.05 + 0.3 }}
                  >
                    {tip.type === 'do' ? (
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </span>
                    ) : (
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-400/20 flex items-center justify-center mt-0.5">
                        <X className="w-3 h-3 text-red-400" />
                      </span>
                    )}
                    <span className={`text-sm ${tip.type === 'do' ? 'text-text' : 'text-text-muted'}`}>
                      {tip.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8 glow"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-text">{t.bestPractices.proTips}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.bestPractices.tips.map((tip, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="p-4 bg-white/20 rounded-xl cursor-pointer hover:bg-white/30 transition-colors"
                whileHover={{ x: 5 }}
              >
                <p className="text-sm text-text font-mono">{tip}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BestPractices
