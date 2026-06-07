export type Severity = 'mild' | 'moderate' | 'severe' | 'healthy'

export interface DetectionResult {
  disease_name: string
  scientific_name: string
  crop: string
  severity: Severity
  confidence: number
  causes: string[]
  treatment_steps: string[]
  prevention_tips: string[]
}

export interface DetectionError {
  error: string
  code?: string
}

export type DetectionResponse = DetectionResult | DetectionError

export function isDetectionError(r: DetectionResponse): r is DetectionError {
  return 'error' in r
}
