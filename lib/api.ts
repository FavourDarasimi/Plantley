import type { DetectionResult } from '@/types/detection'

export async function detectDisease(
  file: File,
  crop?: string
): Promise<DetectionResult> {
  const formData = new FormData()
  formData.append('image', file)
  if (crop) formData.append('crop', crop)

  const res = await fetch('/api/detect', {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error ?? 'Detection failed')
  }

  return res.json()
}
