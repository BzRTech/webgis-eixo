/// <reference types="vite/client" />

declare module '*.png'
declare module '*.jpg'
declare module '*.svg'

declare module 'shpjs' {
  function shp(
    buffer: ArrayBuffer | string
  ): Promise<GeoJSON.FeatureCollection | GeoJSON.FeatureCollection[]>
  export default shp
}
