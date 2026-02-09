import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Sparkles, Users } from 'lucide-react'

const statCards = (metrics) => [
  { label: '受访创作者', value: `${metrics.activeRespondents}/${metrics.totalRespondents}`, icon: Users },
  { label: '访谈问题', value: String(metrics.totalQuestions), icon: BarChart3 },
  { label: '核心洞察', value: String(metrics.findingsCount), icon: Sparkles },
]

const DashboardView = ({ data, onNavigate }) => {
  const { summary, metrics } = data
  const [selectedCreator, setSelectedCreator] = useState('Sabrina（受访者1）')
  const creatorTabs = ['Sabrina（受访者1）', '受访者2', '受访者3', '受访者4', '受访者5']

  return (
    <div className="space-y-7">
      <section className="glass-panel p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-text-primary">快速洞察摘要</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {statCards(metrics).map((card, index) => {
            const Icon = card.icon
            return (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.15em] text-text-muted">{card.label}</p>
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <p className="text-2xl sm:text-3xl font-semibold text-text-primary mt-4">{card.value}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="glass-panel p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4 mb-5">
          <h3 className="text-base sm:text-lg font-semibold text-text-primary">核心发现</h3>
          <button
            onClick={() => onNavigate(1)}
            className="text-xs sm:text-sm text-accent inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            查看原始数据 <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {summary.coreFindings.slice(0, 4).map((item, i) => (
            <motion.div
              key={`${item}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.08 }}
              whileHover={{ scale: 1.01 }}
              className="glass-card p-4"
            >
              <p className="text-sm leading-relaxed text-text-secondary">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="glass-panel p-6 sm:p-8">
        <h3 className="text-base sm:text-lg font-semibold text-text-primary">个人创作经验</h3>

        <div className="mt-4 flex flex-wrap gap-2">
          {creatorTabs.map((name) => (
            <button
              key={name}
              onClick={() => setSelectedCreator(name)}
              className={`h-10 px-4 rounded-full border text-sm transition-all ${
                selectedCreator === name
                  ? 'border-accent/45 bg-accent/15 text-accent'
                  : 'border-border bg-white/5 text-text-secondary hover:border-border-hover'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-border/70 bg-white/5 p-4 sm:p-5">
          {selectedCreator === 'Sabrina（受访者1）' ? (
            <div className="space-y-3">
              {summary.creatorExperience.map((item, index) => (
                <motion.p
                  key={`${item}-${index}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.06 }}
                  className="text-sm text-text-secondary leading-relaxed"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          ) : (
            <p className="text-sm text-text-muted">该受访者个人创作经验：敬请期待</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default DashboardView
