import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/30" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center">
            <img src="/maitch-logo.png" alt="Maitch" className="h-8 w-8 object-cover" style={{ borderRadius: '10px' }} />
          </div>
          <p className="text-sm text-text-muted">
            &copy; 2025 Maitch. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors cursor-pointer">隐私政策</a>
            <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors cursor-pointer">服务条款</a>
            <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors cursor-pointer">联系我们</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
