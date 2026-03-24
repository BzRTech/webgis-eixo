import React, { useId } from 'react'
import type { FilterToggleProps } from '@/types'

export function FilterToggle({ label, count, checked, color, onChange }: FilterToggleProps) {
  const id = useId()

  return (
    <label
      htmlFor={id}
      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
    >
      <div className="flex items-center gap-3">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300 text-brand-yellow focus:ring-brand-yellow cursor-pointer"
          style={{ accentColor: '#FCD34D' }}
        />
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: color }}
          />
          <span className="text-sm font-medium text-gray-700 group-hover:text-brand-dark">
            {label}
          </span>
        </div>
      </div>
      <span
        className="text-xs font-semibold px-2 py-0.5 rounded-full"
        style={{ backgroundColor: color + '33', color: color === '#FCD34D' ? '#92400e' : color }}
      >
        {count.toLocaleString('pt-BR')}
      </span>
    </label>
  )
}
