import { motion } from 'framer-motion'

const FloatingOrbs = () => {
  const orbs = [
    { size: 300, x: '10%', y: '20%', color: 'rgba(168, 217, 104, 0.3)', delay: 0 },
    { size: 200, x: '80%', y: '10%', color: 'rgba(125, 211, 192, 0.3)', delay: 2 },
    { size: 250, x: '70%', y: '60%', color: 'rgba(240, 230, 140, 0.3)', delay: 4 },
    { size: 180, x: '20%', y: '70%', color: 'rgba(125, 211, 192, 0.25)', delay: 1 },
    { size: 150, x: '50%', y: '40%', color: 'rgba(168, 217, 104, 0.2)', delay: 3 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingOrbs
