import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FeatureLayer } from './FeatureLayer'
import type { FilterState } from '@/types'
import type { GeoJSON } from 'leaflet'

// Fix ícones padrão do Leaflet com Vite/Webpack
import L from 'leaflet'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

L.Marker.prototype.options.icon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

interface MapViewProps {
  filters: FilterState
  quadrasData?: GeoJSON.FeatureCollection | null
  lotesData?: GeoJSON.FeatureCollection | null
  logradourosData?: GeoJSON.FeatureCollection | null
  center?: [number, number]
  zoom?: number
}

const LAYER_CONFIG = [
  { id: 'quadras'      as const, color: '#FCD34D', label: 'Quadras' },
  { id: 'lotes'        as const, color: '#FBBF24', label: 'Lotes' },
  { id: 'logradouros'  as const, color: '#F59E0B', label: 'Logradouros' },
]

export function MapView({
  filters,
  quadrasData,
  lotesData,
  logradourosData,
  center = [-15.8267, -48.0516], // Brasília
  zoom = 13,
}: MapViewProps) {
  const dataMap: Record<string, GeoJSON.FeatureCollection | null | undefined> = {
    quadras: quadrasData,
    lotes: lotesData,
    logradouros: logradourosData,
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ width: '100%', height: '100%' }}
      zoomControl={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={19}
      />

      {LAYER_CONFIG.map(({ id, color, label }) => {
        const data = dataMap[id]
        return data && data.features.length > 0 ? (
          <FeatureLayer
            key={id}
            data={data}
            color={color}
            secretaria={label}
            visible={filters[id]}
          />
        ) : null
      })}
    </MapContainer>
  )
}
