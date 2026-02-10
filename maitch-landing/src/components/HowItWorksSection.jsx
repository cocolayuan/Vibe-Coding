import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Brain, ListChecks, Handshake, Send, Bot, User } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: '多轮态对话',
    subtitle: '与 AI 自然对话，描述您的需求',
    description: '通过多轮智能对话，AI 深度理解您的项目背景、行业特点、预算范围及具体需求偏好。',
    color: '#7C3AED',
  },
  {
    icon: Brain,
    number: '02',
    title: '智能解构',
    subtitle: 'AI 深度解析项目需求',
    description: '利用 AI 技术深度解构项目底层需求，从行业经验、能力匹配、资源覆盖等维度进行多层交叉分析。',
    color: '#EC4899',
  },
  {
    icon: ListChecks,
    number: '03',
    title: '精准匹配',
    subtitle: '推荐最合适的合作伙伴',
    description: '在 1k+ 核心合作伙伴中，为你编织最高效的协作网络，每一次推荐都基于深度数据支撑。',
    color: '#06B6D4',
  },
  {
    icon: Handshake,
    number: '04',
    title: '高效对接',
    subtitle: '一键发起合作，快速开始',
    description: '查看详细的供应商简介、案例作品和报价方案，一键发起合作意向，快速启动项目。',
    color: '#10B981',
  },
]

const chatMessages = [
  { type: 'user', text: '我需要为一款新的美妆产品做社交媒体推广，预算大概 50 万左右' },
  { type: 'ai', text: '好的，我来帮您拆解一下需求。请问您的目标平台是小红书、抖音还是全渠道？主要面向什么年龄段的消费者？' },
  { type: 'user', text: '主要是小红书和抖音，面向 18-30 岁的年轻女性' },
  { type: 'ai', text: '了解了。根据您的需求，我推荐以下 3 家合作伙伴，他们在美妆领域有丰富的小红书和抖音推广经验：\n\n1. 星辰传媒 — 美妆类 KOL 资源丰富\n2. 花漾创意 — 爆款内容制作团队\n3. 数据增长社 — 精准投放优化' },
]

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      <div className="gradient-orb gradient-orb-3 animate-float-slow" />
      <div className="section-orb section-orb-1" style={{ top: '20%', left: '-10%', opacity: 0.4 }} />
      <div className="section-orb section-orb-2" style={{ bottom: '10%', right: '-5%', opacity: 0.4 }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mb-4">
            Maitch 如何为您工作
          </h2>
          <p className="text-base text-text-secondary max-w-xl mx-auto">
            从对话到匹配，四步高效完成
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActiveStep(i)}
                className={`relative flex items-start gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeStep === i
                    ? 'glass-card shadow-lg'
                    : 'hover:bg-white/20 hover:backdrop-blur-sm'
                }`}
              >
                {/* Step number circle */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: activeStep === i
                      ? `linear-gradient(135deg, ${step.color}, ${step.color}cc)`
                      : `${step.color}15`,
                  }}
                >
                  <step.icon
                    size={20}
                    style={{ color: activeStep === i ? 'white' : step.color }}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-text-muted">{step.number}</span>
                    <h3 className={`text-base font-bold transition-colors ${
                      activeStep === i ? 'text-text-primary' : 'text-text-secondary'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted mb-1">{step.subtitle}</p>
                  <AnimatePresence mode="wait">
                    {activeStep === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-text-secondary leading-relaxed"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Active indicator bar */}
                {activeStep === i && (
                  <motion.div
                    layoutId="activeStepIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-full"
                    style={{ background: `linear-gradient(180deg, ${step.color}, ${step.color}88)` }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card iridescent-border p-6 sm:p-8"
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 pb-4 mb-5 border-b border-white/30">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Maitch AI</p>
                <p className="text-xs text-text-muted flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  在线
                </p>
              </div>
            </div>

            {/* Chat messages */}
            <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.type === 'ai' && (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center mr-2 shrink-0 mt-1"
                      style={{ background: 'rgba(124, 58, 237, 0.1)' }}>
                      <Bot size={14} className="text-primary" />
                    </div>
                  )}
                  <div className={msg.type === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}>
                    {msg.text.split('\n').map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < msg.text.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  {msg.type === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center ml-2 shrink-0 mt-1">
                      <User size={14} className="text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Input bar */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex-1 rounded-xl px-4 py-3 border border-white/40 text-sm text-text-muted"
                style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)' }}>
                输入您的需求...
              </div>
              <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center cursor-pointer border-none hover:shadow-lg transition-shadow"
                style={{ boxShadow: '0 4px 16px rgba(124, 58, 237, 0.2)' }}>
                <Send size={16} className="text-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
