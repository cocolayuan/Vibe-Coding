import { motion } from 'framer-motion'
import {
  Target,
  Palette,
  Radio,
  BarChart3,
  TrendingUp,
  Users,
} from 'lucide-react'

const categories = [
  {
    icon: Target,
    title: '品牌与战略',
    subtitle: 'Brands & Strategy',
    description: '品牌定位、市场调研、竞品分析、品牌架构设计与战略规划',
    gradient: 'from-violet-500/10 to-purple-500/5',
    iconBg: 'rgba(124, 58, 237, 0.08)',
    iconColor: '#7C3AED',
  },
  {
    icon: Palette,
    title: '创意与内容',
    subtitle: 'Creative & Content',
    description: '视觉设计、视频制作、文案创作、KOL/KOC 内容合作',
    gradient: 'from-pink-500/10 to-rose-500/5',
    iconBg: 'rgba(236, 72, 153, 0.08)',
    iconColor: '#EC4899',
  },
  {
    icon: Radio,
    title: '传播与资源',
    subtitle: 'Media & Resources',
    description: '媒体投放、公关传播、渠道合作、线下活动与资源对接',
    gradient: 'from-cyan-500/10 to-blue-500/5',
    iconBg: 'rgba(6, 182, 212, 0.08)',
    iconColor: '#06B6D4',
  },
  {
    icon: BarChart3,
    title: '技术与数据',
    subtitle: 'Tech & Data',
    description: '数据分析、MarTech 工具、CRM 系统、自动化营销技术支持',
    gradient: 'from-amber-500/10 to-orange-500/5',
    iconBg: 'rgba(245, 158, 11, 0.08)',
    iconColor: '#F59E0B',
  },
  {
    icon: TrendingUp,
    title: '增长与运营',
    subtitle: 'Growth & Operations',
    description: '用户增长、社群运营、电商运营、私域流量与转化优化',
    gradient: 'from-emerald-500/10 to-green-500/5',
    iconBg: 'rgba(16, 185, 129, 0.08)',
    iconColor: '#10B981',
  },
  {
    icon: Users,
    title: '组织与管理',
    subtitle: 'Org & Management',
    description: '团队搭建、人才招聘、项目管理、外包团队管理与协调',
    gradient: 'from-indigo-500/10 to-violet-500/5',
    iconBg: 'rgba(99, 102, 241, 0.08)',
    iconColor: '#6366F1',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function CategoriesSection() {
  return (
    <section id="categories" className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Ambient orbs */}
      <div className="section-orb section-orb-1" />
      <div className="section-orb section-orb-2" />
      <div className="section-orb section-orb-3" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
            在这里，找到能为您完成
            <br className="hidden sm:block" />
            任何具体营销任务的伙伴
          </h2>
          <p className="text-base text-text-secondary max-w-xl mx-auto">
            Maitch 将营销生态拆解为六大核心板块，为你精准定位最匹配的合作伙伴
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="glass-card iridescent-border p-5"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: cat.iconBg }}
              >
                <cat.icon size={20} style={{ color: cat.iconColor }} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-text-primary mb-0.5">
                {cat.title}
              </h3>
              <p className="text-xs font-medium text-text-muted mb-2 tracking-wide uppercase">
                {cat.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {cat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
