import type { DetectionResult } from '@/types/detection'

export const MOCK_RESULT: DetectionResult = {
  disease_name: 'Northern Leaf Blight',
  scientific_name: 'Exserohilum turcicum',
  crop: 'Maize',
  severity: 'moderate',
  confidence: 0.82,
  causes: [
    'High humidity above 80% during growth stage',
    'Poor air circulation between crop rows',
    'Infected crop debris from previous season',
  ],
  treatment_steps: [
    'Remove and destroy all infected leaves immediately',
    'Apply mancozeb fungicide at 2g/litre, repeat every 7 days',
    'Widen row spacing to improve airflow around plants',
  ],
  prevention_tips: [
    'Use disease-resistant maize varieties next season',
    'Rotate crops — avoid planting maize in the same plot consecutively',
    'Clear field debris after harvest to reduce fungal spore load',
  ],
}

export async function detectDisease(
  file: File,
  crop?: string,
): Promise<DetectionResult> {
  const useMock = !process.env.NEXT_PUBLIC_DJANGO_API_URL

  if (useMock) {
    await new Promise((r) => setTimeout(r, 2000))
    return MOCK_RESULT
  }

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
