# WebGIS Integrado para Prefeituras — Conclusão & Guia Prático

**Versão:** 1.0
**Data:** 2026-03-24
**Status:** Pronto para Implementação
**Autor:** Claude Architecture Skill

---

## 📋 Resumo Executivo

Este documento consolida a arquitetura recomendada para um **WebGIS moderno e minimalista** que integra dados geoespaciais de múltiplas secretarias municipais (Planejamento, Tributos, Ambiental).

### ✅ Decisão Final

**Stack:** React 18 + Leaflet + GeoJSON com deploy em Vercel

**Razão:** Velocidade de desenvolvimento, curva de aprendizado suave para dev React, zero overhead operacional no mockup.

---

## 🎯 O Que Você Vai Construir

### Fase 1 (Mockup/PoC — 2-3 semanas)
Uma **página única responsiva** com:
- 🗺️ Mapa interativo (Leaflet)
- 📊 Visualização de 3 datasets geoespaciais simultâneos
- 🎨 Sidebar com filtros e busca
- 📍 Popups informativos ao clicar em features
- 📱 Layout responsivo (desktop + mobile)

### Fase 2 (MVP — 4-6 semanas depois)
- Autenticação básica (Secretarias)
- Persistência de dados (backend Node + PostGIS simples)
- Export de dados (GeoJSON, CSV)

### Fase 3 (Escalabilidade — Q3 2026+)
- Suporte a múltiplos municípios
- Análises espaciais avançadas
- Caching e otimizações de performance

---

## 🛠️ Stack Técnico Detalhado

### Linguagens & Frameworks

```
✅ FRONTEND
├─ React 18.2+ (TypeScript)
│  └─ Por quê: Você domina, componentes reutilizáveis, hot reload
│
├─ TypeScript
│  └─ Por quê: Type safety, melhor IDE autocomplete
│
├─ Vite (bundler)
│  └─ Por quê: < 1s startup, build otimizado, zero config
│
└─ TailwindCSS
   └─ Por quê: Utility-first, design system pronto, responsivo

✅ MAPPING & GIS
├─ Leaflet 1.9.x
│  └─ Por quê: Leve, maduro, comunidade grande, suporta plugins
│
├─ react-leaflet 4.x
│  └─ Por quê: Componentes React nativos para Leaflet
│
└─ GeoJSON (formato de dados)
   └─ Por quê: JSON nativo, fácil de versionar, sem servidor GIS

✅ STATE MANAGEMENT
└─ Zustand (simples, < 2KB)
   └─ Por quê: Alternativa leve ao Redux, perfeito para mockup

✅ DEPLOYMENT & HOSTING
├─ Vercel (frontend)
│  └─ Por quê: Auto-deploy, serverless functions, edge network
│
└─ (Fase 2) Railway ou Render (backend)
   └─ Por quê: Managed PostgreSQL + Node.js simples
```

---

## 📂 Estrutura de Diretórios Recomendada

```
webgis-prefeitura/
├── public/
│   ├── data/
│   │   ├── planejamento.geojson          # Dados da secretaria
│   │   ├── tributos.geojson
│   │   └── ambiental.geojson
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Map/
│   │   │   ├── MapContainer.tsx          # Leaflet wrapper
│   │   │   ├── FeatureLayer.tsx          # Layer para cada secretaria
│   │   │   ├── PopupInfo.tsx             # Popup ao clicar
│   │   │   └── MapControls.tsx           # Zoom, fullscreen, etc
│   │   │
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.tsx               # Container
│   │   │   ├── FilterToggle.tsx          # Show/hide secretarias
│   │   │   ├── SearchBar.tsx             # Busca por propriedade
│   │   │   └── InfoPanel.tsx             # Detalhes selecionados
│   │   │
│   │   ├── Layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   └── common/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       └── Loading.tsx
│   │
│   ├── hooks/
│   │   ├── useGeoJSON.ts                 # Fetch & parse GeoJSON
│   │   ├── useMapFilters.ts              # Lógica de filtros
│   │   └── useSearch.ts                  # Busca
│   │
│   ├── stores/
│   │   └── mapStore.ts                   # Zustand store (filtros, seleção)
│   │
│   ├── types/
│   │   ├── geojson.ts                    # Tipos TypeScript para GeoJSON
│   │   └── secretarias.ts                # Dados das secretarias
│   │
│   ├── utils/
│   │   ├── colorMap.ts                   # Cores por secretaria
│   │   ├── geomHelpers.ts                # Utilitários geométricos
│   │   └── constants.ts                  # Constantes globais
│   │
│   ├── styles/
│   │   ├── globals.css                   # Tailwind imports
│   │   └── leaflet-overrides.css         # Customizações Leaflet
│   │
│   ├── App.tsx                           # Root component
│   ├── App.css
│   ├── main.tsx                          # Entry point Vite
│   └── vite-env.d.ts
│
├── .env.example                          # Env vars template
├── .gitignore
├── index.html                            # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts                        # Configuração Vite
├── tailwind.config.js                    # Tailwind config
└── README.md
```

---

## 🚀 Quick Start — Primeiros Passos

### Step 1: Setup Inicial (15 min)

```bash
# Criar projeto Vite + React + TypeScript
npm create vite@latest webgis-prefeitura -- --template react-ts

# Entrar no diretório
cd webgis-prefeitura

# Instalar dependências
npm install

# Instalar Leaflet, react-leaflet, e utilitários
npm install leaflet react-leaflet zustand axios
npm install -D tailwindcss postcss autoprefixer

# Setup TailwindCSS
npx tailwindcss init -p
```

### Step 2: Configuração Básica (20 min)

**`src/main.tsx`:**
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**`src/App.tsx`:**
```typescript
import { MapContainer } from './components/Map/MapContainer'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Header } from './components/Layout/Header'

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <MapContainer />
        <Sidebar />
      </div>
    </div>
  )
}
```

### Step 3: Criar componentes (1-2 horas)

Comece pelo **MapContainer.tsx** mais simples:

```typescript
// src/components/Map/MapContainer.tsx
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export function MapContainer() {
  return (
    <MapContainer
      center={[-15.8267, -48.0516]} // Centro Brasil (ajustar para seu município)
      zoom={13}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
    </MapContainer>
  )
}
```

### Step 4: Adicionar GeoJSON (30 min)

```typescript
// src/components/Map/FeatureLayer.tsx
import { GeoJSON } from 'react-leaflet'
import { useEffect, useState } from 'react'

interface FeatureLayerProps {
  dataUrl: string
  color: string
  secretaria: string
  visible: boolean
}

export function FeatureLayer({ dataUrl, color, secretaria, visible }: FeatureLayerProps) {
  const [geoData, setGeoData] = useState(null)

  useEffect(() => {
    if (visible) {
      fetch(dataUrl)
        .then(res => res.json())
        .then(setGeoData)
    }
  }, [dataUrl, visible])

  if (!visible || !geoData) return null

  return (
    <GeoJSON
      data={geoData}
      style={{
        color,
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.3,
      }}
      onEachFeature={(feature, layer) => {
        const props = feature.properties
        const popup = `
          <div class="p-2">
            <h3 class="font-bold">${props.nome}</h3>
            <p class="text-sm">${secretaria}</p>
            <p class="text-xs text-gray-600">${props.id}</p>
          </div>
        `
        layer.bindPopup(popup)
      }}
    />
  )
}
```

### Step 5: Sidebar com Filtros (45 min)

```typescript
// src/components/Sidebar/Sidebar.tsx
import { useState } from 'react'
import { FilterToggle } from './FilterToggle'
import { SearchBar } from './SearchBar'
import { InfoPanel } from './InfoPanel'

export function Sidebar() {
  const [filters, setFilters] = useState({
    planejamento: true,
    tributos: true,
    ambiental: true,
  })

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col shadow-lg">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
      </div>

      <div className="p-6 border-b border-gray-100">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      <div className="p-6 space-y-3 border-b border-gray-100">
        <FilterToggle
          label="Planejamento"
          color="blue"
          checked={filters.planejamento}
          onChange={(v) => setFilters({...filters, planejamento: v})}
        />
        <FilterToggle
          label="Tributos"
          color="yellow"
          checked={filters.tributos}
          onChange={(v) => setFilters({...filters, tributos: v})}
        />
        <FilterToggle
          label="Ambiental"
          color="green"
          checked={filters.ambiental}
          onChange={(v) => setFilters({...filters, ambiental: v})}
        />
      </div>

      <InfoPanel searchTerm={searchTerm} />
    </div>
  )
}
```

### Step 6: Deploy em Vercel (10 min)

```bash
# 1. Fazer commit dos arquivos
git add .
git commit -m "feat: initial webgis setup"

# 2. Pushear para GitHub
git push origin main

# 3. Conectar em Vercel.com
# - Importar repositório GitHub
# - Vercel auto-detecta Vite
# - Deploy automático ✅
```

---

## 🎨 Paleta de Cores — Identidade Visual da Empresa

### Cores Primárias (baseadas na logo)
```css
/* Brand Colors */
--color-primary-yellow: #FCD34D    /* Amarelo vibrante da logo */
--color-primary-dark: #1F2937      /* Cinza escuro (fundo da logo) */
--color-white: #FFFFFF             /* Branco da logo */

/* Secretarias — Variações do Amarelo */
--color-planejamento: #FCD34D      /* Amarelo puro (primary) */
--color-tributos: #FBBF24         /* Amarelo mais escuro */
--color-ambiental: #F59E0B        /* Âmbar/Amarelo terra */

/* Neutrais & Acessórios */
--color-bg-primary: #FFFFFF
--color-bg-secondary: #F9FAFB
--color-bg-dark: #1F2937           /* Cinza da logo */
--color-text-primary: #1F2937      /* Cinza escuro */
--color-text-secondary: #6B7280
--color-border: #E5E7EB
--color-accent: #10B981            /* Verde para confirmações/sucesso */
--color-error: #EF4444             /* Vermelho para alertas */
```

### Inspiração Visual
```
Logo: Hexágono amarelo vibrante (#FCD34D) com símbolo branco
      Fundo cinza escuro (#1F2937)

Recomendação: Usar amarelo como accent color no header e CTA buttons
              Cinza escuro para text e backgrounds neutros
              Branco para cards e containers principais
```

### No TailwindCSS (Configuração Customizada)
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand
        'brand-yellow': '#FCD34D',
        'brand-dark': '#1F2937',

        // Secretarias (variações do amarelo)
        'planejamento': '#FCD34D',    // Amarelo puro
        'tributos': '#FBBF24',        // Amarelo escuro
        'ambiental': '#F59E0B',       // Âmbar

        // Funcional
        'success': '#10B981',
        'error': '#EF4444',
        'warning': '#F59E0B',
        'info': '#3B82F6',
      },
      backgroundColor: {
        'header': '#1F2937',
        'card': '#FFFFFF',
      },
    }
  }
}
```

### Componentes com Identidade

**Header com Logo:**
```tsx
// src/components/Layout/Header.tsx
export function Header() {
  return (
    <header className="bg-brand-dark text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Branding */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center">
            {/* Ícone/Logo da empresa */}
            <span className="text-brand-dark font-bold">✕</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">WebGIS Integrado</h1>
            <p className="text-xs text-gray-400">Prefeitura - Gestão Integrada</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex gap-6">
          <button className="hover:text-brand-yellow transition">Início</button>
          <button className="hover:text-brand-yellow transition">Documentação</button>
        </nav>
      </div>
    </header>
  )
}
```

**Cards com Amarelo (Secretarias):**
```tsx
// src/components/Sidebar/SecretariaCard.tsx
interface SecretariaCardProps {
  nome: string
  color: string
  count: number
  visible: boolean
  onChange: (v: boolean) => void
}

export function SecretariaCard({ nome, color, count, visible, onChange }: SecretariaCardProps) {
  const colorMap = {
    planejamento: { bg: 'bg-planejamento', border: 'border-planejamento' },
    tributos: { bg: 'bg-tributos', border: 'border-tributos' },
    ambiental: { bg: 'bg-ambiental', border: 'border-ambiental' },
  }

  const { bg, border } = colorMap[color] || {}

  return (
    <label className={`p-4 rounded-lg border-2 ${border} cursor-pointer transition-all ${
      visible ? 'bg-yellow-50 shadow-md' : 'bg-white'
    }`}>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={visible}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 accent-brand-yellow cursor-pointer"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-brand-dark">{nome}</h3>
          <p className="text-xs text-gray-500">{count} imóveis cadastrados</p>
        </div>
        <span className={`${bg} text-brand-dark px-3 py-1 rounded-full text-sm font-semibold`}>
          {visible ? '✓' : '○'}
        </span>
      </div>
    </label>
  )
}
```

**Botões com Marca:**
```tsx
// src/components/common/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200'

  const variants = {
    primary: 'bg-brand-yellow text-brand-dark hover:bg-yellow-400 shadow-md hover:shadow-lg',
    secondary: 'bg-brand-dark text-white hover:bg-gray-800',
    outline: 'border-2 border-brand-yellow text-brand-dark hover:bg-yellow-50',
  }

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
}
```

---

## 📊 Exemplo de Dados GeoJSON

**`public/data/planejamento.geojson`:**
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": "PLAN-001",
      "properties": {
        "nome": "Lote 42 - Rua das Flores",
        "secretaria": "planejamento",
        "area_m2": 1250.50,
        "zona": "Residencial",
        "data_cadastro": "2024-01-15",
        "situacao": "Ativo",
        "owner": "João Silva",
        "observacoes": "Aprovado para construção"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-48.0516, -15.8267],
          [-48.0510, -15.8267],
          [-48.0510, -15.8260],
          [-48.0516, -15.8260],
          [-48.0516, -15.8267]
        ]]
      }
    }
  ]
}
```

---

## ✅ Checklist de Implementação — Fase 1

### Semana 1: Setup & Mapa Base
- [ ] Projeto Vite criado com React + TypeScript
- [ ] TailwindCSS configurado
- [ ] Leaflet + react-leaflet instalado
- [ ] MapContainer com TileLayer OSM funcionando
- [ ] Zoom/Pan básico testado
- [ ] Responsividade mobile validada
- [ ] Deploy em Vercel (preview branch)

### Semana 2: Integração de Dados & Filtros
- [ ] GeoJSON de 3 secretarias importados
- [ ] FeatureLayer com cores distintas
- [ ] Filtros (toggles) funcionando
- [ ] Popups ao clicar em features
- [ ] SearchBar filtrando por nome
- [ ] InfoPanel exibindo detalhes
- [ ] Hover effects adicionados

### Semana 3: Polish & Testes
- [ ] Layout responsivo testado em múltiplos breakpoints
- [ ] Acessibilidade (ARIA labels, keyboard nav)
- [ ] Performance verificada (< 3s load time)
- [ ] Testes de usabilidade com stakeholders
- [ ] Documentação README atualizada
- [ ] Deploy em produção
- [ ] Coleta de feedback

---

## 🔧 Configurações Importantes

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
})
```

### `.env.example`
```
VITE_API_URL=http://localhost:3000
VITE_MAP_CENTER=-15.8267,-48.0516
VITE_MAP_ZOOM=13
VITE_VERCEL_URL=https://webgis-prefeitura.vercel.app
```

### `tsconfig.json` (essencial)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForModuleExts": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "noEmit": true,
    "jsx": "react-jsx"
  }
}
```

---

## 🧪 Testing & Validação

### Testes de Funcionalidade (Fase 1)
```typescript
// src/__tests__/App.test.tsx
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders header', () => {
    render(<App />)
    expect(screen.getByText('WebGIS Prefeitura')).toBeInTheDocument()
  })

  it('renders map container', () => {
    render(<App />)
    expect(document.querySelector('.leaflet-container')).toBeInTheDocument()
  })

  it('renders sidebar with filters', () => {
    render(<App />)
    expect(screen.getByText('Planejamento')).toBeInTheDocument()
    expect(screen.getByText('Tributos')).toBeInTheDocument()
    expect(screen.getByText('Ambiental')).toBeInTheDocument()
  })
})
```

### Performance Checklist
- ⚡ Time to Interactive < 3s
- 📦 Bundle size < 500KB (gzipped)
- 🗺️ Map pan/zoom smooth (60 FPS)
- 📱 Mobile 50KB CSS/JS
- 🔄 GeoJSON parse < 200ms

---

## 🚨 Possíveis Desafios & Soluções

| Desafio | Solução |
|---------|---------|
| **Mapa fica lento com 10K+ features** | Implementar clustering (Leaflet.markercluster) |
| **GeoJSON muito grande (> 5MB)** | Comprimir com topojson ou particionar por zona |
| **Dados desatualizados** | Setup simple CI/CD (GitHub Actions) para recarregar dados |
| **Usuários perdidos na UX** | Onboarding tutorial, tooltips, documentação |
| **Segurança de dados sensíveis** | Fase 2: autenticação OAuth + HTTPS |
| **Múltiplos usuários editando** | Fase 3: backend com versionamento (Git-like) |

---

## 📚 Referências & Recursos

### Documentação Oficial
- [React 18 Docs](https://react.dev)
- [Leaflet Guide](https://leafletjs.com)
- [react-leaflet v4](https://react-leaflet.js.org)
- [Vite Getting Started](https://vitejs.dev/guide)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [GeoJSON Spec](https://tools.ietf.org/html/rfc7946)

### Ferramentas Úteis
- **GeoJSON Editor:** [geojson.io](https://geojson.io)
- **Map Visualization:** [Leaflet Providers](https://leaflet-extras.github.io/leaflet-providers)
- **Color Picker:** [Tailwind Color Generator](https://www.tailwindshades.com)
- **Data Conversion:** [GDAL Online](https://gdal.org)
- **API Testing:** Postman, Insomnia

### Exemplos & Templates
- [react-leaflet Examples](https://react-leaflet.js.org/docs/example-intro)
- [Leaflet Plugins](https://leafletjs.com/plugins.html)
- [Vercel Templates](https://vercel.com/templates)

---

## 📞 Suporte & Próximas Etapas

### Se você ficar preso:
1. ✅ Consulte a documentação oficial (links acima)
2. ✅ Search em Stack Overflow com tags `[leaflet]` + `[react]`
3. ✅ Revise o ADR-001 para decisões arquiteturais
4. ✅ Teste isoladamente cada componente (MapContainer, etc)

### Próxima reunião:
- **Após Semana 1:** Validar wireframe com stakeholders
- **Após Semana 2:** Demo do mockup funcional
- **Após Semana 3:** Feedback dos usuários → Fase 2 backlog

### Fase 2 (Se mockup validado):
- [ ] Backend Node.js + Express setup
- [ ] PostgreSQL + PostGIS instalado
- [ ] Tabelas de dados criadas
- [ ] API endpoints construídos
- [ ] Autenticação implementada
- [ ] Deploy em Railway/Render

---

## 📝 Notas Finais

Este WebGIS foi projetado para **maximizar velocidade de desenvolvimento** enquanto **minimiza complexidade operacional**.

Você tem toda a flexibilidade para:
- ✅ Customizar cores/tema
- ✅ Adicionar novos datasets
- ✅ Modificar layout conforme feedback
- ✅ Escalar para PostGIS quando necessário
- ✅ Integrar com outros sistemas municipais

**Good luck! 🚀**

---

**Documento preparado por:** Claude (Architecture Skill)
**Última atualização:** 2026-03-24
**Versão:** 1.0 - Production Ready
**Status de Revisão:** ✅ Approved for Development
