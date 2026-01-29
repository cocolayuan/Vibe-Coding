import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  MessageSquare,
  Bug,
  FileSearch,
  Wand2,
  GitBranch,
  TestTube,
  Lightbulb,
  RefreshCw,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  const icons = [MessageSquare, Bug, FileSearch, Wand2, GitBranch, TestTube, Lightbulb, RefreshCw]
  const colors = [
    'from-primary to-primary/60',
    'from-secondary to-secondary/60',
    'from-accent to-accent/60',
    'from-primary to-secondary',
    'from-secondary to-accent',
    'from-accent to-primary',
    'from-primary to-accent',
    'from-secondary to-primary',
  ]

  return (
    <section id="features" className="py-32 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-text mb-6">
            {t.features.title1}{' '}
            <span className="bg-gradient-to-r from-[#00897B] to-[#4CAF50] bg-clip-text text-transparent">
              {t.features.title2}
            </span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.features.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.items.map((feature, index) => {
            const Icon = icons[index]
            const color = colors[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative glass-card p-6 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0`}
                  animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="relative font-heading text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="relative text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
