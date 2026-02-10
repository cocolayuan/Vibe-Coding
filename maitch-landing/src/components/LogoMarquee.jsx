import { motion } from 'framer-motion'

const logos = [
  { src: '/logos/1.png', alt: 'Brand 1' },
  { src: '/logos/2.png', alt: 'Brand 2' },
  { src: '/logos/3.png', alt: 'Brand 3' },
  { src: '/logos/4.png', alt: 'Brand 4' },
  { src: '/logos/5.png', alt: 'Brand 5' },
  { src: '/logos/6.png', alt: 'Brand 6' },
  { src: '/logos/7.png', alt: 'Brand 7' },
  { src: '/logos/8.png', alt: 'Brand 8' },
  { src: '/logos/9.png', alt: 'Brand 9' },
  { src: '/logos/10.jpg', alt: 'Brand 10' },
  { src: '/logos/11.png', alt: 'Brand 11' },
  { src: '/logos/12.png', alt: 'Brand 12' },
  { src: '/logos/13.png', alt: 'Brand 13' },
  { src: '/logos/14.webp', alt: 'Brand 14' },
  { src: '/logos/15.webp', alt: 'Brand 15' },
]

function LogoTrack() {
  return (
    <div className="flex items-center gap-16 shrink-0">
      {logos.map((logo, i) => (
        <div
          key={i}
          className="flex items-center justify-center shrink-0"
          style={{ width: '120px', height: '48px' }}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-w-full max-h-full object-contain opacity-40 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0"
            draggable={false}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="relative z-10 w-full overflow-hidden py-6"
    >
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #FAF5FF 0%, transparent 100%)' }}
      />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #FAF5FF 0%, transparent 100%)' }}
      />

      {/* Scrolling track */}
      <div className="marquee-track flex items-center">
        <LogoTrack />
        <div className="w-16 shrink-0" />
        <LogoTrack />
        <div className="w-16 shrink-0" />
      </div>
    </motion.section>
  )
}
