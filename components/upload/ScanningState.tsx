'use client'

import { motion } from 'framer-motion'
import { Leaf01Icon } from 'hugeicons-react'

export function ScanningState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <div className="relative flex items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-green-500"
          animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          style={{ width: 64, height: 64, margin: -32, top: '50%', left: '50%' }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        >
          <Leaf01Icon size={48} className="text-green-500" strokeWidth={1.5} />
        </motion.div>
      </div>
      <div className="text-center">
        <p className="text-base text-[var(--text-secondary)]">
          Analysing your tomato leaf...
        </p>
        <p className="text-sm text-[var(--text-tertiary)] mt-1">
          This usually takes 3–5 seconds
        </p>
      </div>
    </div>
  )
}
