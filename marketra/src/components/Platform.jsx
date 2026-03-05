import { motion } from 'framer-motion'
import { Building2, User, Camera, Briefcase, ArrowRight } from 'lucide-react'

const ecosystem = [
  {
    icon: Building2,
    title: '品牌方',
    desc: '大小品牌在此发布需求，寻找最合适的服务伙伴',
    color: '#2DFF7A',
    items: ['国际品牌', '新消费品牌', 'DTC品牌', '本地商家'],
  },
  {
    icon: Briefcase,
    title: '广告公司',
    desc: '4A及本土广告公司，提供全案策划与执行服务',
    color: '#9FAFFF',
    items: ['全案策划', '媒介采买', '品牌战略', '公关传播'],
  },
  {
    icon: User,
    title: 'Freelancer',
    desc: '独立营销人才，灵活高效的专业服务',
    color: '#EFDDAC',
    items: ['设计师', '文案', '投放优化师', '数据分析师'],
  },
  {
    icon: Camera,
    title: '内容创作者',
    desc: '小红书、抖音、B站等平台的优质创作者',
    color: '#2DFF7A',
    items: ['KOL', 'KOC', 'OPC', 'MCN机构'],
  },
]

export default function Platform() {
  return (
    <section id="platform" className="relative py-32 px-4">
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[200px] opacity-10 bg-green pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-heading text-xs tracking-[0.3em] text-purple/70 uppercase">Ecosystem</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-5">
            <span className="text-white">聚合</span>
            <span className="text-purple">生态</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            打通品牌与服务商的连接壁垒，构建互信、高效的营销生态
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ecosystem.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ background: item.color }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${item.color}11`, border: `1px solid ${item.color}22` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-white/40 text-sm mb-5 leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.items.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs border"
                      style={{
                        color: `${item.color}cc`,
                        borderColor: `${item.color}20`,
                        background: `${item.color}08`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA with background image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-20 rounded-2xl overflow-hidden"
        >
          <img
            src="/cta-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center gap-6 text-center pt-[346px] pb-24 px-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
              准备好加入了吗？
            </h3>
            <p className="text-white/60 max-w-md">
              无论你是品牌方还是服务商，Marketra 都能帮你找到最合适的合作伙伴
            </p>
            <div className="flex gap-4">
              <button className="group flex items-center gap-2 px-8 py-3 rounded-full bg-green text-dark font-heading font-bold text-sm hover:shadow-[0_0_40px_rgba(45,255,122,0.3)] transition-all duration-300 cursor-pointer">
                免费注册
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 text-white/80 text-sm font-heading hover:border-white/40 hover:text-white transition-all duration-200 cursor-pointer">
                了解更多
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
