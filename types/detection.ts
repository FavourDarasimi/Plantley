export interface DetectionResult {
  predicted_class: string
  confidence: number
}

export interface DetectionError {
  error: string
  code?: string
}

export type DetectionResponse = DetectionResult | DetectionError

export function isDetectionError(r: DetectionResponse): r is DetectionError {
  return 'error' in r
}
