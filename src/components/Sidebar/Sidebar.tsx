import React, { useState } from 'react'
import { FilterToggle } from './FilterToggle'
import { SearchBar } from './SearchBar'
import { Button } from '@/components/common/Button'
import type { FilterState, Secretaria } from '@/types'

const SECRETARIAS: Secretaria[] = [
  { id: 'planejamento', label: 'Planejamento', color: '#FCD34D', count: 2450 },
  { id: 'tributos',     label: 'Tributos',     color: '#FBBF24', count: 1890 },
  { id: 'ambiental',   label: 'Ambiental',    color: '#F59E0B', count: 876 },
]

interface SidebarProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export function Sidebar({ filters, onFiltersChange }: SidebarProps) {
  const [search, setSearch] = useState('')
  const [pending, setPending] = useState<FilterState>(filters)

  function toggleFilter(id: keyof FilterState, value: boolean) {
    setPending((prev) => ({ ...prev, [id]: value }))
  }

  function applyFilters() {
    onFiltersChange(pending)
  }

  function resetFilters() {
    const all: FilterState = { planejamento: true, tributos: true, ambiental: true }
    setPending(all)
    onFiltersChange(all)
  }

  const totalVisible = SECRETARIAS.filter((s) => pending[s.id]).reduce((acc, s) => acc + s.count, 0)

  return (
    <aside className="w-80 bg-white border-l border-gray-200 flex flex-col shadow-lg h-full overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 bg-brand-dark">
        <h2 className="text-xl font-bold text-white">Filtros</h2>
        <p className="text-xs text-gray-400 mt-1">
          {totalVisible.toLocaleString('pt-BR')} registros visíveis
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
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Secretarias</p>
          <div className="space-y-1">
            {SECRETARIAS.map((s) => (
              <FilterToggle
                key={s.id}
                label={s.label}
                count={s.count}
                color={s.color}
                checked={pending[s.id]}
                onChange={(v) => toggleFilter(s.id, v)}
              />
            ))}
          </div>
        </div>

        {/* Info panel */}
        <div className="bg-yellow-50 border border-brand-yellow rounded-lg p-4">
          <p className="text-xs font-semibold text-yellow-800 mb-1">Dica</p>
          <p className="text-xs text-yellow-700">
            Clique em qualquer feição no mapa para ver detalhes do imóvel ou lote.
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
