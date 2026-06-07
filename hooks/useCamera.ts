'use client'

import { useRef } from 'react'

export function useCamera() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  function openFilePicker() {
    fileInputRef.current?.click()
  }

  function openCamera() {
    cameraInputRef.current?.click()
  }

  return {
    fileInputRef,
    cameraInputRef,
    openFilePicker,
    openCamera,
  }
}
