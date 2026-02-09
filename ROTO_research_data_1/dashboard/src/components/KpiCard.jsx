import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, Lightbulb, AlertTriangle } from 'lucide-react'

const iconMap = {
  users: Users,
  messageCircle: MessageCircle,
  lightbulb: Lightbulb,
  alertTriangle: AlertTriangle,
}

const KpiCard = ({ label, value, suffix, icon, index }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1200
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplayValue(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  const Icon = iconMap[icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-2xl bg-bg-card border border-border p-6 lg:p-7 cursor-pointer
                 transition-all duration-300 hover:bg-bg-card-hover hover:border-border-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent-dim flex items-center justify-center">
          {Icon && <Icon className="w-5 h-5 text-accent" />}
        </div>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-text-primary tabular-nums">
          {displayValue}
        </span>
        <span className="text-lg text-text-secondary font-medium">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </motion.div>
  )
}

export default KpiCard
