import { useState, useEffect } from 'react'
import { Header } from '@/components/Layout/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { MapView } from '@/components/Map/MapView'
import { loadShapefile } from '@/utils/loadShapefile'
import type { FilterState } from '@/types'

export default function App() {
  const [filters, setFilters] = useState<FilterState>({
    quadras: true,
    lotes: true,
    logradouros: true,
  })

  const [quadrasData, setQuadrasData] = useState<GeoJSON.FeatureCollection | null>(null)
  const [lotesData, setLotesData] = useState<GeoJSON.FeatureCollection | null>(null)
  const [logradourosData, setLogradourosData] = useState<GeoJSON.FeatureCollection | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAll() {
      const [quadras, lotes, logradouros] = await Promise.all([
        loadShapefile('quadras.zip'),
        loadShapefile('lotes.zip'),
        loadShapefile('logradouros.zip'),
      ])
      setQuadrasData(quadras)
      setLotesData(lotes)
      setLogradourosData(logradouros)
      setLoading(false)
    }
    loadAll()
  }, [])

  const featureCounts = {
    quadras: quadrasData?.features.length ?? 0,
    lotes: lotesData?.features.length ?? 0,
    logradouros: logradourosData?.features.length ?? 0,
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header title="WebGIS" showLogin />

      <div className="flex flex-1 overflow-hidden">
        {/* Mapa — área principal */}
        <main className="flex-1 relative">
          {loading && (
            <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-white/70">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-4 border-brand-yellow border-t-transparent rounded-full animate-spin" />
                <span className="text-sm text-gray-600 font-medium">Carregando shapefiles…</span>
              </div>
            </div>
          )}
          <MapView
            filters={filters}
            quadrasData={quadrasData}
            lotesData={lotesData}
            logradourosData={logradourosData}
          />
        </main>

        {/* Sidebar — painel lateral */}
        <Sidebar
          filters={filters}
          onFiltersChange={setFilters}
          featureCounts={featureCounts}
        />
      </div>
    </div>
  )
}
