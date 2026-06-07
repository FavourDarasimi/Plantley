'use client'

import { motion } from 'framer-motion'
import { UploadZone } from '@/components/upload/UploadZone'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-4 py-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md mx-auto text-center"
      >
        <motion.p
          variants={item}
          className="text-xs uppercase tracking-widest text-green-600 mb-4"
        >
          AI-Powered Crop Care
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-display italic text-[var(--text-primary)] leading-tight mb-4"
        >
          Detect plant disease
          <br />
          in seconds
        </motion.h1>
        <motion.p
          variants={item}
          className="text-base text-[var(--text-secondary)] mb-8"
        >
          Upload or take a photo of a plant leaf and receive an instant
          diagnosis — powered by AI.
        </motion.p>
        <motion.div variants={item}>
          <UploadZone />
        </motion.div>
      </motion.div>
    </section>
  )
}
