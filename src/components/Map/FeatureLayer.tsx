import React, { useEffect, useRef } from 'react'
import { useMap } from 'react-leaflet'
import L from 'leaflet'
import type { FeatureLayerProps } from '@/types'

export function FeatureLayer({ data, color, secretaria, visible, onFeatureClick }: FeatureLayerProps) {
  const map = useMap()
  const layerRef = useRef<L.GeoJSON | null>(null)

  useEffect(() => {
    layerRef.current = L.geoJSON(data, {
      style: {
        color,
        weight: 2,
        opacity: 0.9,
        fillColor: color,
        fillOpacity: 0.25,
      },
      onEachFeature(feature, layer) {
        // Popup com border amarela
        const props = feature.properties ?? {}
        const rows = Object.entries(props)
          .filter(([, v]) => v !== null && v !== undefined)
          .map(([k, v]) => `<tr><td style="padding:2px 8px 2px 0;color:#6b7280;font-size:12px">${k}</td><td style="padding:2px 0;font-size:12px;font-weight:600">${v}</td></tr>`)
          .join('')

        layer.bindPopup(
          `<div style="min-width:180px">
            <div style="background:#1F2937;color:#FCD34D;padding:8px 12px;margin:-13px -19px 10px;border-radius:4px 4px 0 0;font-weight:700;font-size:13px">
              ${secretaria}
            </div>
            <table>${rows || '<tr><td style="color:#9ca3af;font-size:12px">Sem atributos</td></tr>'}</table>
          </div>`,
          { maxWidth: 280 }
        )

        // Hover highlight
        layer.on('mouseover', function (this: L.Path) {
          this.setStyle({ fillOpacity: 0.5, weight: 3 })
        })
        layer.on('mouseout', function (this: L.Path) {
          layerRef.current?.resetStyle(this)
        })

        // Click callback
        if (onFeatureClick) {
          layer.on('click', () => onFeatureClick(feature))
        }
      },
    })

    if (visible) {
      layerRef.current.addTo(map)
    }

    return () => {
      layerRef.current?.remove()
    }
  }, [data, color, secretaria, map, onFeatureClick])

  // Toggle visibility sem recriar a layer
  useEffect(() => {
    if (!layerRef.current) return
    if (visible) {
      layerRef.current.addTo(map)
    } else {
      layerRef.current.remove()
    }
  }, [visible, map])

  return null
}
