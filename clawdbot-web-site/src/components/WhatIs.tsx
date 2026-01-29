import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bot, Code, Zap, Brain } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const WhatIs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()

  const icons = [Bot, Code, Zap, Brain]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="what-is" className="py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-6">
            {t.whatIs.title1}{' '}
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#00897B] bg-clip-text text-transparent">
              {t.whatIs.title2}
            </span>
            ?
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.whatIs.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {t.whatIs.cards.map((card, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                className="group glass-card p-8 cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-heading text-xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{card.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/20 bg-white/10">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-sm text-text-muted font-mono">{t.whatIs.example}</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <div className="text-text-muted">
              <span className="text-secondary">$</span> clawdbot fix "TypeError: Cannot read property 'map' of undefined"
            </div>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/30">
              <p className="text-primary font-semibold mb-2">{t.whatIs.foundIssue}</p>
              <p className="text-text">
                {t.whatIs.issueDesc} <code className="px-2 py-0.5 bg-white/30 rounded">users</code> {t.whatIs.issueDesc2}{' '}
                <code className="px-2 py-0.5 bg-white/30 rounded">.map()</code> {t.whatIs.issueDesc3}
              </p>
              <p className="text-text mt-2">
                {t.whatIs.solution} <code className="px-2 py-0.5 bg-white/30 rounded">users?.map()</code> {t.whatIs.solution2}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIs
