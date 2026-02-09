import { motion } from 'framer-motion'
import { ArrowRight, Database, Sparkles } from 'lucide-react'

const InsightsView = ({ data, onNavigate }) => {
  const cards = [
    {
      label: '摘要维度',
      value: data.summary.overview.length,
      tip: '总结概览条目',
    },
    {
      label: '核心发现',
      value: data.summary.coreFindings.length,
      tip: '关键问题与机会点',
    },
    {
      label: '经验片段',
      value: data.summary.creatorExperience.length,
      tip: '创作策略沉淀',
    },
  ]

  return (
    <div className="space-y-6">
      <section className="glass-panel p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">洞察导航视图</h2>
            <p className="mt-2 text-sm text-text-secondary">Sabrina 的结构化详细洞察已放到「原始数据」页底部，便于和逐条问答联动查看。</p>
          </div>
          <Sparkles className="w-5 h-5 text-accent shrink-0 mt-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.08 }}
              className="glass-card p-4"
            >
              <p className="text-xs text-text-muted uppercase tracking-[0.12em]">{card.label}</p>
              <p className="text-2xl font-semibold text-text-primary mt-2">{card.value}</p>
              <p className="text-xs text-text-secondary mt-1">{card.tip}</p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => onNavigate(2)}
          className="mt-6 inline-flex items-center gap-2 px-4 h-10 rounded-xl border border-accent/35 bg-accent/10 text-accent text-sm hover:opacity-85 transition-opacity"
        >
          <Database className="w-4 h-4" />
          前往原始数据查看 Sabrina 洞察结构
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  )
}

export default InsightsView
