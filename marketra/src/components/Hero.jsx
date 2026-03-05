import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react'

function TypewriterLine({ text, delay, color }) {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    let intervalId = null
    let cursorTimeout = null
    const startTimeout = setTimeout(() => {
      setShowCursor(true)
      let i = 0
      intervalId = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalId)
          cursorTimeout = setTimeout(() => setShowCursor(false), 400)
        }
      }, 1300 / text.length)
    }, delay * 1000)
    return () => {
      clearTimeout(startTimeout)
      if (intervalId) clearInterval(intervalId)
      if (cursorTimeout) clearTimeout(cursorTimeout)
    }
  }, [text, delay])

  return (
    <span className="block">
      <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {displayed}
      </span>
      {showCursor && (
        <span className="inline-block w-[3px] h-[0.8em] bg-green ml-1 align-middle animate-pulse" />
      )}
      {!displayed && !showCursor && <span className="invisible">{text}</span>}
    </span>
  )
}

const brands = [
  { name: 'Nike', color: '#FF6B35' },
  { name: 'Apple', color: '#A2AAAD' },
  { name: 'Tesla', color: '#CC0000' },
  { name: 'Gucci', color: '#DAA520' },
  { name: 'Sony', color: '#003087' },
  { name: 'Adobe', color: '#FF0000' },
  { name: 'Spotify', color: '#1DB954' },
  { name: 'Netflix', color: '#E50914' },
  { name: 'Xiaomi', color: '#FF6700' },
  { name: 'Huawei', color: '#CF0A2C' },
]

function BrandOrb({ brand, index, activeIndex, totalBrands, row }) {
  const angle = ((index - activeIndex) / totalBrands) * Math.PI * 2
  const radius = 320
  const x = Math.sin(angle) * radius
  const z = Math.cos(angle) * radius
  const scale = (z + radius) / (2 * radius) * 0.6 + 0.4
  const opacity = (z + radius) / (2 * radius) * 0.7 + 0.3
  const y = row * 140 - 70

  return (
    <motion.div
      animate={{
        x,
        y,
        scale,
        opacity,
        zIndex: Math.round(z + radius),
      }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ zIndex: Math.round(z + radius) }}
    >
      <div
        className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all duration-300 hover:border-green/50 hover:shadow-[0_0_30px_rgba(45,255,122,0.3)]"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${brand.color}33, ${brand.color}11)`,
        }}
      >
        <span className="text-white font-heading text-xs md:text-sm font-bold tracking-wide">
          {brand.name}
        </span>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  const navigate = useCallback((dir) => {
    setActiveIndex((prev) => {
      if (dir === 'left') return (prev - 1 + brands.length) % brands.length
      if (dir === 'right') return (prev + 1) % brands.length
      return prev
    })
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') navigate('left')
      if (e.key === 'ArrowRight') navigate('right')
      if (e.key === 'ArrowUp') navigate('left')
      if (e.key === 'ArrowDown') navigate('right')
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [navigate])

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => navigate('right'), 3000)
    return () => clearInterval(timer)
  }, [navigate])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
      {/* Aurora BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-30%] left-[-20%] w-[80vw] h-[60vh] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(ellipse, #2DFF7A44, transparent 70%)', animation: 'aurora 8s ease-in-out infinite' }}
        />
        <div
          className="absolute top-[10%] right-[-10%] w-[60vw] h-[50vh] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(ellipse, #9FAFFF44, transparent 70%)', animation: 'aurora 10s ease-in-out infinite 2s' }}
        />
        <div
          className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[40vh] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(ellipse, #EFDDAC33, transparent 70%)', animation: 'aurora 12s ease-in-out infinite 4s' }}
        />
        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="w-full h-[2px] bg-gradient-to-r from-transparent via-green/20 to-transparent"
            style={{ animation: 'scan-line 6s linear infinite' }}
          />
        </div>
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Title with typewriter */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center mb-8 px-4"
      >
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
          <TypewriterLine text="More Revenue." delay={0.5} color="from-green to-[#a8ff50]" />
          <TypewriterLine text="More Scale." delay={2.0} color="from-purple to-[#d4dbff]" />
          <TypewriterLine text="Less Work." delay={3.5} color="from-gold via-gold/80 to-white" />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 0.8 }}
          className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light"
        >
          连接品牌与顶级服务商，一站式完成从创意到投放的全部链路
        </motion.p>
      </motion.div>

      {/* 3D Brand Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 w-full max-w-3xl h-[250px] md:h-[300px]"
        style={{ perspective: '1000px' }}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {brands.map((brand, i) => (
            <BrandOrb
              key={brand.name}
              brand={brand}
              index={i}
              activeIndex={activeIndex}
              totalBrands={brands.length}
              row={i % 2}
            />
          ))}
        </div>
      </motion.div>

      {/* Arrow controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 flex items-center gap-4 mt-6"
      >
        <button
          onClick={() => navigate('left')}
          className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-green/10 hover:border-green/30 transition-all duration-200 cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-white/70" />
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => navigate('left')}
            className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-green/10 hover:border-green/30 transition-all duration-200 cursor-pointer"
            aria-label="Up"
          >
            <ChevronUp className="w-4 h-4 text-white/70" />
          </button>
          <button
            onClick={() => navigate('right')}
            className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-green/10 hover:border-green/30 transition-all duration-200 cursor-pointer"
            aria-label="Down"
          >
            <ChevronDown className="w-4 h-4 text-white/70" />
          </button>
        </div>
        <button
          onClick={() => navigate('right')}
          className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-green/10 hover:border-green/30 transition-all duration-200 cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-white/70" />
        </button>
      </motion.div>

      {/* Hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 text-white/30 text-xs mt-4 tracking-widest font-heading"
      >
        ← → ↑ ↓ 键盘控制浏览
      </motion.p>
    </section>
  )
}
