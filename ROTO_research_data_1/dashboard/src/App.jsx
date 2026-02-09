import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Database } from 'lucide-react'
import PillNav from './components/PillNav'
import DashboardView from './components/DashboardView'
import RawDataExplorer from './components/RawDataExplorer'
import { useResearchData } from './hooks/useResearchData'
import './App.css'

const tabs = [
  { label: 'Dashboard 概览', icon: BarChart3 },
  { label: '原始数据', icon: Database },
]

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const { loading, error, data } = useResearchData()

  const renderView = () => {
    if (!data) return null
    if (activeTab === 0) return <DashboardView data={data} onNavigate={setActiveTab} />
    return <RawDataExplorer data={data} />
  }

  return (
    <div className="app-shell min-h-screen">
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-grid" />

      <header className="sticky top-0 z-40 glass-header border-b border-border/60 backdrop-blur-2xl">
        <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 py-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-accent/35 bg-accent/10 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <p className="text-[11px] tracking-[0.14em] text-accent uppercase">ROTO User Insights 2026</p>
                </div>
                <h1 className="text-lg sm:text-2xl font-semibold text-text-primary">ROTO创作者回访数据</h1>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/25">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-text-secondary">Live Dataset</span>
              </div>
            </div>

            <PillNav
              items={tabs}
              activeIndex={activeTab}
              onSelect={setActiveTab}
              baseColor="rgba(30, 41, 59, 0.68)"
              pillColor="rgba(255, 255, 255, 0.08)"
              hoveredPillTextColor="#22C55E"
              pillTextColor="#dbe3ef"
            />
          </div>
        </div>
      </header>

      <main className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14">
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass-panel min-h-[380px] flex flex-col items-center justify-center gap-4"
            >
              <div className="loader-ring" />
              <p className="text-sm text-text-secondary">正在解析访谈数据...</p>
            </motion.div>
          )}

          {!loading && error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass-panel min-h-[300px] flex flex-col items-center justify-center gap-3 text-center"
            >
              <p className="text-sm text-red-300">{error}</p>
              <p className="text-xs text-text-muted">请确认 `/public/data` 下的 CSV 文件是否可读。</p>
            </motion.div>
          )}

          {!loading && !error && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }}
              transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 1] }}
            >
              {renderView()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
