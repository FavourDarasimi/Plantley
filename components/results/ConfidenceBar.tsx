'use client'

import { motion } from 'framer-motion'

export function ConfidenceBar({ confidence }: { confidence: number }) {
  const percent = Math.round(confidence > 1 ? confidence : confidence * 100)

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[var(--text-tertiary)]">AI confidence</span>
        <span className="text-xl font-mono font-medium text-[var(--text-primary)]">
          {percent}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-green-100 dark:bg-green-900 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-green-500"
        />
      </div>
    </div>
  )
}
