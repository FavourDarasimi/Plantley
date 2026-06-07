'use client'

import { motion } from 'framer-motion'

export function TreatmentSteps({ steps }: { steps: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-[var(--text-primary)] mb-3">Treatment</h3>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3, ease: 'easeOut' }}
            className="flex items-start gap-3"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 text-xs font-medium text-green-700 dark:text-green-300 shrink-0">
              {i + 1}
            </span>
            <span className="text-sm text-[var(--text-secondary)] pt-0.5">{step}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
