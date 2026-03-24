import React, { useState } from 'react'
import { FilterToggle } from './FilterToggle'
import { SearchBar } from './SearchBar'
import { Button } from '@/components/common/Button'
import type { FilterState, LayerInfo } from '@/types'

const LAYERS: Omit<LayerInfo, 'count'>[] = [
  { id: 'quadras',      label: 'Quadras',      color: '#FCD34D' },
  { id: 'lotes',        label: 'Lotes',        color: '#FBBF24' },
  { id: 'logradouros',  label: 'Logradouros',  color: '#F59E0B' },
]

interface SidebarProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  featureCounts?: Record<keyof FilterState, number>
}

export function Sidebar({ filters, onFiltersChange, featureCounts }: SidebarProps) {
  const [search, setSearch] = useState('')
  const [pending, setPending] = useState<FilterState>(filters)

  function toggleFilter(id: keyof FilterState, value: boolean) {
    setPending((prev) => ({ ...prev, [id]: value }))
  }

  function applyFilters() {
    onFiltersChange(pending)
  }

  function resetFilters() {
    const all: FilterState = { quadras: true, lotes: true, logradouros: true }
    setPending(all)
    onFiltersChange(all)
  }

  const totalVisible = LAYERS
    .filter((l) => pending[l.id])
    .reduce((acc, l) => acc + (featureCounts?.[l.id] ?? 0), 0)

  return (
    <aside className="w-80 bg-white border-l border-gray-200 flex flex-col shadow-lg h-full overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 bg-brand-dark">
        <h2 className="text-xl font-bold text-white">Camadas</h2>
        <p className="text-xs text-gray-400 mt-1">
          {totalVisible.toLocaleString('pt-BR')} feições visíveis
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Search */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Buscar</p>
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Layers */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Dados Geográficos</p>
          <div className="space-y-1">
            {LAYERS.map((l) => (
              <FilterToggle
                key={l.id}
                label={l.label}
                count={featureCounts?.[l.id] ?? 0}
                color={l.color}
                checked={pending[l.id]}
                onChange={(v) => toggleFilter(l.id, v)}
              />
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div className="bg-yellow-50 border border-brand-yellow rounded-lg p-4">
          <p className="text-xs font-semibold text-yellow-800 mb-1">Dica</p>
          <p className="text-xs text-yellow-700">
            Coloque seus shapefiles (.zip) na pasta <code className="bg-yellow-100 px-1 rounded">public/data/</code> como <strong>quadras.zip</strong>, <strong>lotes.zip</strong> e <strong>logradouros.zip</strong>.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100 space-y-3">
        <Button variant="primary" size="md" fullWidth onClick={applyFilters}>
          Aplicar Filtros
        </Button>
        <Button variant="ghost" size="sm" fullWidth onClick={resetFilters}>
          Limpar tudo
        </Button>
      </div>
    </aside>
  )
}
