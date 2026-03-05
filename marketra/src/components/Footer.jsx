import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-green" />
          <span className="font-heading text-sm font-bold tracking-wider text-white/60">MARKETRA</span>
        </div>
        <p className="text-white/20 text-xs">
          &copy; 2026 Marketra. 全链路营销解决方案平台
        </p>
        <div className="flex gap-6">
          <span className="text-white/30 text-xs hover:text-white/50 cursor-pointer transition-colors">关于我们</span>
          <span className="text-white/30 text-xs hover:text-white/50 cursor-pointer transition-colors">隐私政策</span>
          <span className="text-white/30 text-xs hover:text-white/50 cursor-pointer transition-colors">联系我们</span>
        </div>
      </div>
    </footer>
  )
}
