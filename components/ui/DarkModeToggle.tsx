'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Sun03Icon, Moon02Icon } from 'hugeicons-react'
import { useTheme } from '@/hooks/useTheme'

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[var(--bg-pill)] border border-[var(--border-pill)] text-[var(--text-secondary)] hover:bg-[var(--bg-pill-hover)] transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Sun03Icon size={20} strokeWidth={2} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Moon02Icon size={20} strokeWidth={2} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
