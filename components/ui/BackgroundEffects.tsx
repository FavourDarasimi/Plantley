'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Leaf01Icon, Leaf02Icon, Leaf03Icon, Leaf04Icon } from 'hugeicons-react'

const leafIcons = [Leaf01Icon, Leaf02Icon, Leaf03Icon, Leaf04Icon]

interface LeafParticle {
  Icon: typeof Leaf01Icon
  x: number
  y: number
  size: number
  duration: number
  delay: number
  driftX: number
}

const leaves: LeafParticle[] = [
  { Icon: leafIcons[0], x: 8, y: 15, size: 100, duration: 28, delay: 0, driftX: 12 },
  { Icon: leafIcons[1], x: 78, y: 55, size: 70, duration: 32, delay: 6, driftX: -8 },
  { Icon: leafIcons[2], x: 88, y: 8, size: 90, duration: 26, delay: 12, driftX: 15 },
  { Icon: leafIcons[3], x: 15, y: 65, size: 55, duration: 35, delay: 18, driftX: -10 },
  { Icon: leafIcons[0], x: 50, y: 40, size: 80, duration: 30, delay: 24, driftX: 6 },
]

export function BackgroundEffects() {
  const shouldReduce = useReducedMotion()

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div
        className="absolute inset-0 animate-gradient-drift opacity-[0.18] dark:opacity-[0.04]"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 20%, #86efac 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0 animate-gradient-drift-reverse opacity-[0.14] dark:opacity-[0.03]"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 70% 70%, #4ade80 0%, transparent 100%)',
        }}
      />

      {!shouldReduce &&
        leaves.map((leaf, i) => {
          const Icon = leaf.Icon
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${leaf.x}%`, top: `${leaf.y}%` }}
              initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
              animate={{
                opacity: [0, 0.18, 0.25, 0.18, 0],
                y: [0, -20, -50, -80, -120],
                x: [0, leaf.driftX * 0.5, leaf.driftX, leaf.driftX * 0.3, 0],
                rotate: [0, 10, -8, 6, -4],
                scale: [0.6, 1, 1.1, 0.9, 0.6],
              }}
              transition={{
                duration: leaf.duration,
                repeat: Infinity,
                delay: leaf.delay,
                ease: 'easeInOut',
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
            >
              <Icon
                size={leaf.size}
                className="text-green-500 dark:text-green-400"
                strokeWidth={1}
              />
            </motion.div>
          )
        })}
    </div>
  )
}
