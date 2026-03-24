import React, { useState } from 'react'
import { Header } from '@/components/Layout/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { MapView } from '@/components/Map/MapView'
import type { FilterState } from '@/types'

// Dados de exemplo (substitua por fetch real ou imports de .geojson)
const EXEMPLO_GEOJSON: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { inscricao: '001.002.003', area: '250m²', uso: 'Residencial' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-48.0550, -15.8250],
          [-48.0540, -15.8250],
          [-48.0540, -15.8260],
          [-48.0550, -15.8260],
          [-48.0550, -15.8250],
        ]],
      },
    },
    {
      type: 'Feature',
      properties: { inscricao: '001.002.004', area: '320m²', uso: 'Comercial' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-48.0530, -15.8270],
          [-48.0520, -15.8270],
          [-48.0520, -15.8280],
          [-48.0530, -15.8280],
          [-48.0530, -15.8270],
        ]],
      },
    },
  ],
}

export default function App() {
  const [filters, setFilters] = useState<FilterState>({
    planejamento: true,
    tributos: true,
    ambiental: true,
  })

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header title="WebGIS" showLogin />

      <div className="flex flex-1 overflow-hidden">
        {/* Mapa — área principal */}
        <main className="flex-1 relative">
          <MapView
            filters={filters}
            planejamentoData={EXEMPLO_GEOJSON}
            tributosData={EXEMPLO_GEOJSON}
            ambientalData={EXEMPLO_GEOJSON}
          />
        </main>

        {/* Sidebar — painel lateral */}
        <Sidebar filters={filters} onFiltersChange={setFilters} />
      </div>
    </div>
  )
}
