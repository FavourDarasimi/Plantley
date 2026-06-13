'use client'

import { createContext, useCallback, useState } from 'react'
import type { ReactNode } from 'react'
import type { DetectionResult } from '@/types/detection'
import { detectDisease } from '@/lib/api'

interface DetectionContextValue {
  result: DetectionResult | null
  isLoading: boolean
  error: string | null
  isDialogOpen: boolean
  detect: (file: File) => Promise<void>
  closeDialog: () => void
  reset: () => void
}

export const DetectionContext = createContext<DetectionContextValue | null>(null)

export function DetectionProvider({ children }: { children: ReactNode }) {
  const [result, setResult] = useState<DetectionResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const detect = useCallback(async (file: File) => {
    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await detectDisease(file)
      setResult(res)
      setIsDialogOpen(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false)
  }, [])

  const reset = useCallback(() => {
    setResult(null)
    setIsLoading(false)
    setError(null)
    setIsDialogOpen(false)
  }, [])

  return (
    <DetectionContext.Provider value={{ result, isLoading, error, isDialogOpen, detect, closeDialog, reset }}>
      {children}
    </DetectionContext.Provider>
  )
}
