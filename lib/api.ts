import type { DetectionResult } from '@/types/detection'

export async function detectDisease(
  file: File,
): Promise<DetectionResult> {
  const formData = new FormData()
  formData.append('image', file)

  const res = await fetch('http://localhost:8000/api/detect/', {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error ?? 'Detection failed')
  }

  const data: DetectionResult = await res.json()
  return data
}
