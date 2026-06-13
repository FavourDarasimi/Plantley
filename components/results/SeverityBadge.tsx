'use client'

import { motion } from 'framer-motion'

const severityStyles: Record<string, string> = {
  mild: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  moderate: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  severe: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  healthy: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
}

export function SeverityBadge({ severity }: { severity: string }) {
  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${severityStyles[severity]}`}
    >
      {severity}
    </motion.span>
  )
}
