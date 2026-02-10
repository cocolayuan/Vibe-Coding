import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, Sparkles } from 'lucide-react'
import TextType from './TextType'

// 4 color themes that rotate together per group
const colorThemes = [
  'linear-gradient(90deg, #7E3FEE 0%, #A688F9 100%)', // purple gradient
  '#EF54DF',                                            // pink
  '#48BFD9',                                            // cyan
  '#8680FF',                                            // blue-purple
]

// Position A: 地域
const regionWords = ['上海本地', '北京周边', '深圳地区', '杭州本地']
// Position B: 行业
const industryWords = ['食品', '美妆', '科技', '时尚']
// Position C: 产出类型
const typeWords = ['社交媒体', '品牌策略', '内容创作', '数据分析']
// Position D: 供应商性质
const vendorWords = ['代运营', '代理商', '咨询公司', 'Freelancer']

const PAUSE_DURATION = 5000 // 静止5秒

function RotatingWord({ words, wordIndex, colorIndex, minWidth = '4.5em' }) {
  const bgStyle = colorThemes[colorIndex % colorThemes.length]
  const isGradient = bgStyle.includes('gradient')

  return (
    <span className="inline-flex relative overflow-y-clip" style={{ minWidth, height: '1.4em' }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={wordIndex}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute top-0 left-0 right-0 h-full flex items-center justify-center whitespace-nowrap font-bold"
          style={
            isGradient
              ? {
                  background: bgStyle,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }
              : {
                  color: bgStyle,
                }
          }
        >
          {words[wordIndex % words.length]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function HeroSection() {
  // Word indices for each group
  const [abWordIndex, setAbWordIndex] = useState(0)
  const [cdWordIndex, setCdWordIndex] = useState(0)
  // Color indices for each group
  const [abColorIndex, setAbColorIndex] = useState(0)
  const [cdColorIndex, setCdColorIndex] = useState(0)
  // Typewriter loop: cycleKey forces remount to restart typing
  const [showLine2, setShowLine2] = useState(false)
  const [cycleKey, setCycleKey] = useState(0)

  useEffect(() => {
    // Sequence: AB滚动 → 静止5s → CD滚动 → 静止5s → repeat
    // Each "滚动" is instant (600ms animation), then wait PAUSE_DURATION
    let timeout

    function cycleAB() {
      // AB group: advance word + color
      setAbWordIndex((prev) => prev + 1)
      setAbColorIndex((prev) => (prev + 1) % colorThemes.length)
      // Wait 5s, then fire CD
      timeout = setTimeout(cycleCD, PAUSE_DURATION)
    }

    function cycleCD() {
      // CD group: advance word + color
      setCdWordIndex((prev) => prev + 1)
      setCdColorIndex((prev) => (prev + 1) % colorThemes.length)
      // Wait 5s, then fire AB again
      timeout = setTimeout(cycleAB, PAUSE_DURATION)
    }

    // Start: wait 5s then first AB rotation
    timeout = setTimeout(cycleAB, PAUSE_DURATION)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative flex flex-col items-center justify-center pt-16 pb-10 sm:pt-24 sm:pb-16 px-4 overflow-hidden" style={{ minHeight: 'calc(100vh - 80px)' }}>
      {/* Animated ambient background mesh */}
      <div className="ambient-mesh" />
      {/* Background orbs with color-shift */}
      <div className="gradient-orb gradient-orb-1 orb-drift-1" />
      <div className="gradient-orb gradient-orb-2 orb-drift-2" />
      <div className="gradient-orb gradient-orb-3 orb-drift-3" />
      <div className="hero-gradient-band" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <span className="glass-badge">
            <Sparkles size={15} className="text-primary" />
            AI-Powered Vendor Intelligence
          </span>
        </motion.div>

        {/* Dynamic rotating line (small) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium tracking-widest text-text-secondary mb-5 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap"
        >
          <span>寻找</span>
          <RotatingWord words={regionWords} wordIndex={abWordIndex} colorIndex={abColorIndex} minWidth="4em" />
          <span style={{ margin: '0 1px', color: '#D2D9E4' }}>|</span>
          <RotatingWord words={industryWords} wordIndex={abWordIndex} colorIndex={abColorIndex} minWidth="2em" />
          <span style={{ margin: '0 1px', color: '#D2D9E4' }}>|</span>
          <RotatingWord words={typeWords} wordIndex={cdWordIndex} colorIndex={cdColorIndex} minWidth="4.5em" />
          <span>的</span>
          <RotatingWord words={vendorWords} wordIndex={cdWordIndex} colorIndex={cdColorIndex} minWidth="5em" />
          <span>？</span>
        </motion.div>

        {/* Main headline (large bold) - Typewriter effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.3] tracking-wide text-text-primary mb-8 sm:mb-12"
        >
          <TextType
            key={`line1-${cycleKey}`}
            as="span"
            className="block !tracking-wide"
            text="Maitch 强大的 Agent"
            typingSpeed={150}
            deletingSpeed={50}
            pauseDuration={2400}
            cursorCharacter="|"
            cursorBlinkDuration={0.5}
            showCursor={!showLine2}
            loop={false}
            onTypingComplete={() => setShowLine2(true)}
          />
          <span className="block" style={{ marginTop: '10px', minHeight: '1.3em' }}>
            {showLine2 && (
              <TextType
                key={`line2-${cycleKey}`}
                as="span"
                className="!tracking-wide"
                text="跳出传统的供应商搜索"
                typingSpeed={150}
                deletingSpeed={50}
                pauseDuration={2400}
                cursorCharacter="|"
                cursorBlinkDuration={0.5}
                showCursor={true}
                loop={false}
                onTypingComplete={() => {
                  setTimeout(() => {
                    setShowLine2(false)
                    setCycleKey(prev => prev + 1)
                  }, 5000)
                }}
              />
            )}
          </span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="liquid-glass-btn px-8 py-3.5 text-base flex items-center gap-2.5 group">
            <Search size={18} />
            开始智能对话
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button className="glass-btn-secondary px-8 py-3.5 text-base flex items-center gap-2.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            浏览供应商库
          </button>
        </motion.div>
      </div>
    </section>
  )
}
