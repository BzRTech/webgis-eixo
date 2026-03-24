import type { GeoJSON } from 'leaflet'

export interface FeatureLayerProps {
  data: GeoJSON.FeatureCollection
  color: string
  secretaria: string
  visible: boolean
  onFeatureClick?: (feature: GeoJSON.Feature) => void
}

export interface FilterToggleProps {
  label: string
  count: number
  checked: boolean
  color: string
  onChange: (checked: boolean) => void
}

export interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export interface HeaderProps {
  title?: string
  showLogin?: boolean
}

export interface FilterState {
  planejamento: boolean
  tributos: boolean
  ambiental: boolean
}

export interface Secretaria {
  id: keyof FilterState
  label: string
  color: string
  count: number
}
