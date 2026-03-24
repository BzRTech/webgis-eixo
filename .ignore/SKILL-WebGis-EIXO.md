---
name: webgis-eixo
description: "Gerar componentes React para WebGIS integrado de prefeituras com identidade visual BZR Tech. Use esta skill quando precisar de componentes Leaflet + TailwindCSS prontos (MapContainer, Sidebar, Header, FeatureLayer) com cores Amarelo #FCD34D + Cinza #1F2937. Trigger: 'gerar componentes WebGIS', 'criar mockup mapa', 'boilerplate React GIS', 'código React para Leaflet', ou quando quer arquivos .tsx prontos para integrar."
compatibility: "React 18+, TypeScript, Leaflet, react-leaflet, TailwindCSS"
---

# WebGis-EIXO — Gerador de Componentes React

Gera **componentes React prontos** para WebGIS integrado com identidade visual BZR Tech.

## O Que Faz

Cria código TypeScript/JSX completo para 4 componentes principais:
- **Header** — Navegação com logo amarela e botões CTA
- **MapContainer** — Leaflet com OpenStreetMap base pronto
- **Sidebar** — Filtros com checkboxes, busca, info panel
- **FeatureLayer** — Camadas GeoJSON com cores distintas

Tudo **estilizado com TailwindCSS** e cores brand (Amarelo #FCD34D, Cinza #1F2937, Branco #FFFFFF).

## Como Usar

1. **Peça para gerar os componentes:**
   ```
   "Gere os componentes React principais para o WebGIS"
   "Crie o código do MapContainer, Header e Sidebar com as cores da empresa"
   "Faça um boilerplate dos componentes para meu projeto"
   ```

2. **Customize conforme necessário:**
   - Mude cores em `tailwind.config.js`
   - Adicione mais filtros/secretarias
   - Expanda lógica de estado com Zustand

3. **Integre ao seu projeto:**
   - Copie os componentes para `src/components/`
   - Siga o Quick Start em `WebGIS-Conclusao-Guia-Pratico.md`
   - Rode com `npm run dev`

## Componentes Gerados

### 1. Header.tsx
```
┌──────────────────────────────────────────────────┐
│ [◊] WebGIS        Mapa    Dados    Docs  [Entrar]│
│ Amarelo           Hover = Amarelo         Button  │
└──────────────────────────────────────────────────┘
  Background: #1F2937 (Cinza Escuro)
```
- Logo com ícone amarelo (#FCD34D)
- Navigation links com hover amarelo
- CTA button "Entrar" (amarelo)
- Background cinza escuro (#1F2937)
- Responsive (flex, sticky em mobile)

### 2. MapContainer.tsx
```
┌─────────────────────────────────────────────────┐
│          🗺️ MAPA LEAFLET (OpenStreetMap)        │
│                                                 │
│  Controles: +/- (zoom), ⛶ (fullscreen)        │
│  3 Feature Layers (Planejamento, Tributos, etc)│
│  Popups com border amarelo ao clicar            │
└─────────────────────────────────────────────────┘
```
- Leaflet MapContainer com OpenStreetMap base
- TileLayer padrão (OSM)
- Zoom inicial + centro configurável
- Ready para adicionar FeatureLayers dinamicamente
- Fullscreen + zoom controls

### 3. Sidebar.tsx
```
┌────────────────────────────┐
│ FILTROS                    │
├────────────────────────────┤
│ 🔍 Buscar imóvel...        │
├────────────────────────────┤
│ ☑ Planejamento             │
│   [2.450]   (amarelo)      │ ← Badge
│                            │
│ ☑ Tributos                 │
│   [1.890]   (amarelo-dark) │ ← Badge
│                            │
│ ☑ Ambiental                │
│   [876]     (âmbar)        │ ← Badge
├────────────────────────────┤
│ [Aplicar Filtros]          │ ← Button amarelo
└────────────────────────────┘
```
- SearchBar com input
- FilterToggle para cada secretaria
- Badges com contagem (cores das secretarias)
- Buttons com brand colors
- Responsive drawer em mobile

### 4. FeatureLayer.tsx
```tsx
// Importar dados GeoJSON
import planejamentoData from '@/data/planejamento.geojson'

// Renderizar com cores
<FeatureLayer
  data={planejamentoData}
  color="#FCD34D"           // Amarelo
  secretaria="Planejamento"
  visible={filters.planejamento}
/>
```
- Renderiza GeoJSON no mapa Leaflet
- Customizável: cor, opacidade, label
- Popups informativos ao clicar
- Hover effects com highlight
- Detecta cliques em features

## Paleta de Cores (Integrada em Todos)

```javascript
// Use essas classes TailwindCSS nos componentes
'bg-brand-yellow'    → #FCD34D  (Primária - Buttons, highlights)
'bg-brand-dark'      → #1F2937  (Header, backgrounds escuros)
'bg-white'           → #FFFFFF  (Cards, containers)

// Secretarias (camadas do mapa)
'bg-planejamento'    → #FCD34D  (Amarelo puro)
'bg-tributos'        → #FBBF24  (Amarelo escuro)
'bg-ambiental'       → #F59E0B  (Âmbar/terra)
```

**Todas as cores já estão no código gerado** — mude em um lugar (`tailwind.config.js`), aplica em tudo.

## Estrutura de Arquivos Esperada

```
src/
├── components/
│   ├── Map/
│   │   ├── MapContainer.tsx       ← Gerado aqui
│   │   ├── FeatureLayer.tsx       ← Gerado aqui
│   │   └── MapControls.tsx
│   │
│   ├── Sidebar/
│   │   ├── Sidebar.tsx            ← Gerado aqui
│   │   ├── FilterToggle.tsx       ← Gerado aqui
│   │   ├── SearchBar.tsx
│   │   └── InfoPanel.tsx
│   │
│   ├── Layout/
│   │   └── Header.tsx             ← Gerado aqui
│   │
│   └── common/
│       └── Button.tsx             ← Gerado aqui
│
├── data/
│   ├── planejamento.geojson
│   ├── tributos.geojson
│   └── ambiental.geojson
│
├── hooks/
├── stores/
├── types/
└── App.tsx                        ← Integra tudo
```

## Código Exemplo (Pronto para Copiar)

### Header.tsx
```typescript
import React from 'react'

export function Header() {
  return (
    <header className="bg-brand-dark text-white h-16 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center">
            <span className="text-brand-dark font-bold">✕</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">WebGIS</h1>
            <p className="text-xs text-gray-400">Prefeitura Integrada</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex gap-8">
          <a href="#" className="hover:text-brand-yellow transition">Mapa</a>
          <a href="#" className="hover:text-brand-yellow transition">Dados</a>
          <a href="#" className="hover:text-brand-yellow transition">Docs</a>
        </nav>

        {/* CTA */}
        <button className="bg-brand-yellow text-brand-dark px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Entrar
        </button>
      </div>
    </header>
  )
}
```

### MapContainer.tsx
```typescript
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export function MapContainer() {
  return (
    <MapContainer
      center={[-15.8267, -48.0516]}  // Brasília
      zoom={13}
      style={{ width: '100%', height: '100%' }}
      className="rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
    </MapContainer>
  )
}
```

### Sidebar.tsx (Resumido)
```typescript
import { useState } from 'react'
import { FilterToggle } from './FilterToggle'
import { SearchBar } from './SearchBar'

export function Sidebar() {
  const [filters, setFilters] = useState({
    planejamento: true,
    tributos: true,
    ambiental: true,
  })

  return (
    <aside className="w-80 bg-white border-l border-gray-200 flex flex-col shadow-lg">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-brand-dark">Filtros</h2>
      </div>

      <div className="p-6 space-y-4">
        <SearchBar />

        <FilterToggle
          label="Planejamento"
          count={2450}
          checked={filters.planejamento}
          onChange={(v) => setFilters({...filters, planejamento: v})}
        />
        {/* Mais filtros aqui */}
      </div>

      <div className="p-6 border-t">
        <button className="w-full bg-brand-yellow text-brand-dark py-3 rounded-lg font-semibold hover:bg-yellow-400">
          Aplicar Filtros
        </button>
      </div>
    </aside>
  )
}
```

## TypeScript Types (Inclusos)

```typescript
interface FeatureLayerProps {
  data: GeoJSON.FeatureCollection
  color: string
  secretaria: string
  visible: boolean
  onFeatureClick?: (feature: GeoJSON.Feature) => void
}

interface FilterToggleProps {
  label: string
  count: number
  checked: boolean
  onChange: (checked: boolean) => void
}

interface HeaderProps {
  title?: string
  showLogin?: boolean
}
```

## Próximos Passos Após Gerar

1. **Crie pastas:**
   ```bash
   mkdir -p src/components/{Map,Sidebar,Layout,common}
   ```

2. **Copie componentes** — Cada arquivo gerado vira um `.tsx`

3. **Rode localmente:**
   ```bash
   npm install
   npm run dev
   ```

4. **Coloque dados GeoJSON:**
   ```bash
   mkdir public/data
   # Copie seus .geojson files aqui
   ```

5. **Configure TailwindCSS** — Atualize `tailwind.config.js` com as cores brand

6. **Deploy em Vercel:**
   ```bash
   npm run build
   # Ou use git push com auto-deploy ativado
   ```

## Troubleshooting

**Erro: "leaflet is not defined"**
→ Rode: `npm install leaflet react-leaflet`
→ Verifique import: `import 'leaflet/dist/leaflet.css'`

**Cores não aparecem**
→ Confirme TailwindCSS está em `tailwind.config.js`
→ Rode: `npm run dev` (rebuild)

**Mapa está vazio**
→ Verifique altura do container (parent com `height: '100vh'`)
→ Confirme coordenadas (lat -90 a 90, lng -180 a 180)

**Componentes não importam**
→ Verifique paths em `tsconfig.json` (use `@/components/...`)
→ Rode: `npm run dev` (Vite recompila)

## Customizando Tudo

### Mudar Cores

**Em `tailwind.config.js`:**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FCD34D',    // Mude aqui
        'brand-dark': '#1F2937',      // Mude aqui
        'planejamento': '#FCD34D',    // Mude aqui
        'tributos': '#FBBF24',        // Mude aqui
        'ambiental': '#F59E0B',       // Mude aqui
      }
    }
  }
}
```

Todos os componentes usam essas classes — 1 mudança, aplica em tudo.

### Adicionar Mais Secretarias

No `Sidebar.tsx`, adicione:
```typescript
<FilterToggle
  label="Nova Secretaria"
  count={999}
  checked={filters.novaSecretaria}
  onChange={(v) => setFilters({...filters, novaSecretaria: v})}
/>
```

No `App.tsx`, adicione a layer:
```typescript
<FeatureLayer
  data={novaSecretariaData}
  color="#seu-hex"
  secretaria="Nova Secretaria"
  visible={filters.novaSecretaria}
/>
```

## Stack Assumido

- React 18+ (TypeScript)
- Vite (bundler)
- TailwindCSS (styling)
- Leaflet + react-leaflet (mapping)
- Zustand (opcional — state management)

**Se você usa outro stack** (Next.js, styled-components, etc), o código é facilmente adaptável — a lógica React é a mesma.

## Outputs Que Você Recebe

Quando pede para gerar:
- ✅ `Header.tsx` — Navegação + logo + CTA
- ✅ `MapContainer.tsx` — Mapa Leaflet pronto
- ✅ `Sidebar.tsx` — Filtros + search + info
- ✅ `FeatureLayer.tsx` — Layers dinâmicas
- ✅ `FilterToggle.tsx` — Toggle com badges
- ✅ `Button.tsx` — Button com brand colors
- ✅ `tailwind.config.js` — Config com cores brand
- ✅ `App.tsx` exemplo — Como integrar tudo
- ✅ `types.ts` — TypeScript interfaces

**Total:** ~400 linhas de código React **100% funcional**, pronto para copiar/colar.

## Exemplo de Requisição

```
"Gere os componentes React para o WebGIS:
 - Header com logo amarela e navegação
 - Mapa Leaflet inteiro com OpenStreetMap
 - Sidebar com filtros para 3 secretarias (Planejamento, Tributos, Ambiental)
 - Todos os styles usando TailwindCSS
 - Cores: Amarelo #FCD34D, Cinza #1F2937, Branco
 - Código TypeScript pronto para copiar"
```

**Você recebe:** Código completo, estruturado, com tipos, pronto para colar em `src/components/`.

## Links Úteis

- **Documentação geral:** `WebGIS-Conclusao-Guia-Pratico.md`
- **Design system:** `DESIGN-SYSTEM-BrandIdentity.md`
- **Mockups visuais:** `VISUAL-MOCKUP-ASCII.md`
- **Arquitetura:** `ADR-001-WebGIS-Architecture.md`

---

**Skill Version:** 1.0
**Última atualização:** 2026-03-24
**Status:** ✅ Production Ready
**Autor:** Claude (Architecture + Engineering Skills)
