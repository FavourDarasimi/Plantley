import { CheckmarkCircle01Icon } from 'hugeicons-react'

export function PreventionList({ tips }: { tips: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">Prevention</h3>
      <ul className="space-y-2">
        {tips.map((tip, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckmarkCircle01Icon size={18} className="text-green-500 shrink-0 mt-0.5" strokeWidth={2} />
            <span className="text-sm text-[var(--text-secondary)]">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
