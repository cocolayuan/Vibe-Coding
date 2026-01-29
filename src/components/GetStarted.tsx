import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Copy, Check, Terminal, Package, Settings } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const GetStarted = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState<number | null>(null)
  const { t } = useLanguage()

  const icons = [Package, Settings, Terminal]

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="get-started" className="py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-6">
            {t.getStarted.title1}{' '}
            <span className="bg-gradient-to-r from-[#4CAF50] to-[#00897B] bg-clip-text text-transparent">
              {t.getStarted.title2}
            </span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.getStarted.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {t.getStarted.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative glass-card p-6"
                whileHover={{ scale: 1.02 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                <div className="pt-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  <h3 className="font-heading text-xl font-semibold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-4">{step.description}</p>

                  {/* Command Box */}
                  <div className="relative group">
                    <div className="flex items-center justify-between p-3 bg-text/5 rounded-lg font-mono text-sm">
                      <code className="text-text">{step.command}</code>
                      <motion.button
                        onClick={() => copyToClipboard(step.command, index)}
                        className="p-1.5 rounded-md hover:bg-white/30 cursor-pointer transition-colors"
                        whileTap={{ scale: 0.9 }}
                        aria-label="Copy command"
                      >
                        {copied === index ? (
                          <Check className="w-4 h-4 text-primary" />
                        ) : (
                          <Copy className="w-4 h-4 text-text-muted" />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-12 text-center glow"
        >
          <h3 className="font-heading text-3xl font-bold text-text mb-4">
            {t.getStarted.ctaTitle}
          </h3>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            {t.getStarted.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://github.com/clawdbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg rounded-2xl cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(76, 175, 80, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t.getStarted.viewGithub}
            </motion.a>
            <motion.a
              href="https://docs.clawdbot.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card text-text font-semibold text-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t.getStarted.readDocs}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GetStarted
