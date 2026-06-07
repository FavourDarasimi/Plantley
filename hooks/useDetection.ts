'use client'

import { useContext } from 'react'
import { DetectionContext } from '@/context/DetectionContext'

export function useDetection() {
  const context = useContext(DetectionContext)
  if (!context) throw new Error('useDetection must be used within DetectionProvider')
  return context
}
