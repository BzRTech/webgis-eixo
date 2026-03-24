import shp from 'shpjs'

const EMPTY_COLLECTION: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [],
}

/**
 * Carrega um shapefile (.zip) da pasta public/data/ e converte para GeoJSON.
 * O arquivo deve ser um .zip contendo .shp, .dbf, .shx (e opcionalmente .prj/.cpg).
 */
export async function loadShapefile(filename: string): Promise<GeoJSON.FeatureCollection> {
  const url = `${import.meta.env.BASE_URL}data/${filename}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.warn(`[loadShapefile] Arquivo não encontrado: ${url} (${response.status})`)
      return EMPTY_COLLECTION
    }

    const buffer = await response.arrayBuffer()
    const geojson = await shp(buffer)

    // shpjs pode retornar um array de FeatureCollections ou uma única
    if (Array.isArray(geojson)) {
      return {
        type: 'FeatureCollection',
        features: geojson.flatMap((fc) => fc.features),
      }
    }

    return geojson as GeoJSON.FeatureCollection
  } catch (err) {
    console.warn(`[loadShapefile] Erro ao carregar ${filename}:`, err)
    return EMPTY_COLLECTION
  }
}
