import { motion } from 'framer-motion'
import { Trophy, Star, Users, TrendingUp, MessageCircle, Shield } from 'lucide-react'

const topProviders = [
  { rank: 1, name: '星辰数字营销', score: 98.5, projects: 326, badge: 'S+', specialty: '全案策划' },
  { rank: 2, name: '浪潮创意工作室', score: 97.2, projects: 281, badge: 'S+', specialty: '视觉设计' },
  { rank: 3, name: '极光传媒', score: 96.8, projects: 254, badge: 'S', specialty: '短视频' },
  { rank: 4, name: '云端数据科技', score: 95.1, projects: 198, badge: 'S', specialty: '数据分析' },
  { rank: 5, name: '跨界联盟', score: 93.6, projects: 167, badge: 'A+', specialty: '出海营销' },
]

const features = [
  { icon: Shield, title: '信任体系', desc: '基于真实合作的评分与评价' },
  { icon: MessageCircle, title: '社交连接', desc: '合作后可成为互联网好友' },
  { icon: TrendingUp, title: '成长轨迹', desc: '服务商能力持续追踪与展示' },
]

function getRankColor(rank) {
  if (rank === 1) return '#EFDDAC'
  if (rank === 2) return '#C0C0C0'
  if (rank === 3) return '#CD7F32'
  return '#9FAFFF'
}

export default function Ranking() {
  return (
    <section id="ranking" className="relative py-32 px-4">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10 bg-gold pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs tracking-[0.3em] text-gold/70 uppercase">Ranking</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-5">
            <span className="text-white">信誉排行</span>
            <span className="text-gold">榜</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            合作完成后获得真实评价，靠谱的服务商自然脱颖而出，还能结交行业好友
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-white/[0.06] flex items-center gap-3">
              <Trophy className="w-5 h-5 text-gold" />
              <span className="font-heading text-sm text-white/80">本月服务商排行</span>
            </div>
            <div className="divide-y divide-white/[0.04]">
              {topProviders.map((provider, i) => (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors cursor-pointer group"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-heading text-sm font-bold"
                    style={{
                      color: getRankColor(provider.rank),
                      border: `1px solid ${getRankColor(provider.rank)}33`,
                      background: `${getRankColor(provider.rank)}11`,
                    }}
                  >
                    {provider.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-medium truncate">{provider.name}</span>
                      <span
                        className="text-[10px] font-heading font-bold px-1.5 py-0.5 rounded"
                        style={{
                          color: getRankColor(provider.rank),
                          background: `${getRankColor(provider.rank)}15`,
                        }}
                      >
                        {provider.badge}
                      </span>
                    </div>
                    <span className="text-white/30 text-xs">{provider.specialty}</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-gold" />
                      <span className="text-white text-sm font-mono">{provider.score}</span>
                    </div>
                    <span className="text-white/30 text-xs">{provider.projects} 项目</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-5"
          >
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-gold/20 transition-all duration-300 cursor-pointer"
              >
                <feat.icon className="w-8 h-8 text-gold/70 mb-3" />
                <h3 className="font-heading text-sm font-semibold text-white mb-1">{feat.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}

            {/* Social stat */}
            <div className="p-5 rounded-2xl border border-green/10 bg-green/[0.03] text-center">
              <Users className="w-6 h-6 text-green mx-auto mb-2" />
              <div className="font-heading text-2xl font-bold text-green">12,847</div>
              <div className="text-white/40 text-xs mt-1">已建立合作关系</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
