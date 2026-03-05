import { motion } from 'framer-motion'
import { Search, Megaphone, BarChart3, Globe, Palette, Video } from 'lucide-react'

const services = [
  { icon: Megaphone, title: '广告投放', desc: '全渠道精准投放，覆盖主流平台', color: '#2DFF7A' },
  { icon: Palette, title: '创意设计', desc: '品牌视觉、UI/UX、包装设计', color: '#9FAFFF' },
  { icon: Video, title: '内容制作', desc: '短视频、直播、KOL内容创作', color: '#EFDDAC' },
  { icon: BarChart3, title: '数据分析', desc: '营销效果追踪与深度洞察', color: '#2DFF7A' },
  { icon: Globe, title: '出海营销', desc: '跨境品牌建设与本地化运营', color: '#9FAFFF' },
  { icon: Search, title: 'SEO/SEM', desc: '搜索引擎优化与竞价推广', color: '#EFDDAC' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function SupplyLibrary() {
  return (
    <section id="supply" className="relative py-32 px-4">
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-10 bg-purple pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs tracking-[0.3em] text-green/70 uppercase">Supply Library</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-5">
            <span className="text-white">服务供应</span>
            <span className="text-purple">库</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            大小品牌都能快速找到靠谱的第三方服务商，从创意到投放，一站搞定
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${service.color}08, transparent 60%)`,
                }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${service.color}11`, border: `1px solid ${service.color}22` }}
              >
                <service.icon className="w-5 h-5" style={{ color: service.color }} />
              </div>
              <h3 className="font-heading text-base font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating search bar visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
            <Search className="w-5 h-5 text-white/20" />
            <span className="text-white/20 text-sm">搜索服务商、行业、技能...</span>
            <div className="ml-auto px-3 py-1 rounded-lg bg-green/10 text-green text-xs font-heading">
              ⌘K
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
