import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const severityColorMap: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
  mild: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    darkBg: 'dark:bg-green-900',
    darkText: 'dark:text-green-200',
  },
  moderate: {
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    darkBg: 'dark:bg-amber-900',
    darkText: 'dark:text-amber-200',
  },
  severe: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    darkBg: 'dark:bg-red-900',
    darkText: 'dark:text-red-200',
  },
  healthy: {
    bg: 'bg-cyan-100',
    text: 'text-cyan-800',
    darkBg: 'dark:bg-cyan-900',
    darkText: 'dark:text-cyan-200',
  },
}
