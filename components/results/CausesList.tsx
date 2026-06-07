import { AlertCircleIcon } from 'hugeicons-react'

export function CausesList({ causes }: { causes: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <AlertCircleIcon size={18} className="text-red-500" strokeWidth={2} />
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Causes</h3>
      </div>
      <ul className="space-y-2">
        {causes.map((cause, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
            <span className="text-sm text-[var(--text-secondary)]">{cause}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
