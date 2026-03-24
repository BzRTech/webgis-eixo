# Design System — WebGIS Integrado
## Guia de Identidade Visual Completo

**Baseado em:** Logo BZR Tech — Hexágono Amarelo + Branco + Cinza Escuro
**Versão:** 1.0
**Data:** 2026-03-24

---

## 🎨 Identidade Visual Core

### Cores Primárias

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| **Amarelo Brand** | `#FCD34D` | `252, 211, 77` | Logo, buttons, highlights |
| **Cinza Escuro** | `#1F2937` | `31, 41, 55` | Header, text, backgrounds |
| **Branco** | `#FFFFFF` | `255, 255, 255` | Cards, containers, text light |

### Cores Secundárias (Secretarias)

| Secretaria | Cor Hex | Uso |
|-----------|---------|-----|
| **Planejamento** | `#FCD34D` | Amarelo puro (destaque) |
| **Tributos** | `#FBBF24` | Amarelo escuro |
| **Ambiental** | `#F59E0B` | Âmbar/Terra |

### Cores Funcionais

| Função | Hex | Uso |
|--------|-----|-----|
| **Sucesso** | `#10B981` | Confirmações, checkmarks |
| **Erro** | `#EF4444` | Alerts, validação |
| **Info** | `#3B82F6` | Informações, tooltips |
| **Warning** | `#F59E0B` | Avisos |

---

## 🔤 Tipografia

### Fontes Recomendadas
```
Headings:    Inter Bold / Poppins Bold
Body:        Inter Regular / Roboto Regular
Mono/Code:   Monaco / Courier New
```

### Hierarquia

| Elemento | Size | Weight | Line Height | Uso |
|----------|------|--------|------------|-----|
| **H1** | 32px | Bold (700) | 40px | Títulos principais |
| **H2** | 28px | Bold (700) | 36px | Subtítulos |
| **H3** | 24px | Bold (700) | 32px | Seções |
| **Body** | 16px | Regular (400) | 24px | Texto corpo |
| **Small** | 14px | Regular (400) | 20px | Captions, labels |
| **Tiny** | 12px | Regular (400) | 16px | Badges, timestamps |

### CSS TailwindCSS
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Inter', 'system-ui', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
      'mono': ['Monaco', 'Courier New', 'monospace'],
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
    },
    fontWeight: {
      '400': 'normal',
      '500': '500',
      '600': '600',
      '700': 'bold',
    }
  }
}
```

---

## 🎭 Componentes por Tipo

### Header/Navigation

```tsx
// Estilo base
<header className="bg-brand-dark text-white h-16 shadow-lg">
  <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-brand-yellow rounded-md flex items-center justify-center">
        <span className="text-brand-dark font-bold text-sm">✕</span>
      </div>
      <span className="font-bold text-white text-lg">WebGIS</span>
    </div>

    {/* Navigation */}
    <nav className="flex gap-8">
      <a href="#" className="text-gray-300 hover:text-brand-yellow transition">
        Mapa
      </a>
      <a href="#" className="text-gray-300 hover:text-brand-yellow transition">
        Dados
      </a>
      <a href="#" className="text-gray-300 hover:text-brand-yellow transition">
        Docs
      </a>
    </nav>

    {/* CTA Button */}
    <button className="bg-brand-yellow text-brand-dark px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
      Entrar
    </button>
  </div>
</header>
```

### Cards & Containers

```tsx
// Card base (Sidebar - Filtros)
<div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
  <h3 className="text-lg font-bold text-brand-dark mb-4">Filtros Ativos</h3>

  {/* Filter item */}
  <label className="flex items-center gap-3 p-3 rounded-md hover:bg-yellow-50 cursor-pointer">
    <input
      type="checkbox"
      checked={true}
      className="w-5 h-5 accent-brand-yellow"
    />
    <span className="flex-1 text-gray-700">Planejamento</span>
    <span className="bg-planejamento text-brand-dark px-2 py-1 rounded text-xs font-semibold">
      2,450
    </span>
  </label>
</div>
```

### Buttons

```tsx
// Primary Button (Amarelo)
<button className="bg-brand-yellow text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 active:bg-yellow-500 transition shadow-md">
  Buscar
</button>

// Secondary Button (Cinza)
<button className="bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
  Cancelar
</button>

// Outline Button
<button className="border-2 border-brand-yellow text-brand-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition">
  Export
</button>

// Small Badge
<span className="bg-brand-yellow text-brand-dark px-3 py-1 rounded-full text-sm font-semibold">
  Ativo
</span>
```

### Map Popups & Info Windows

```tsx
// Info popup (ao clicar em feature)
<div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-brand-yellow">
  <h4 className="font-bold text-brand-dark text-lg mb-2">
    Lote 42 - Rua das Flores
  </h4>

  <div className="space-y-2 text-sm text-gray-700">
    <div className="flex justify-between">
      <span className="text-gray-600">Secretaria:</span>
      <span className="font-semibold text-brand-dark">Planejamento</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-600">Área:</span>
      <span className="font-semibold">1.250 m²</span>
    </div>
    <div className="flex justify-between">
      <span className="text-gray-600">Status:</span>
      <span className="bg-success text-white px-2 py-1 rounded text-xs font-semibold">
        Ativo
      </span>
    </div>
  </div>

  {/* Action buttons */}
  <div className="mt-4 flex gap-2">
    <button className="flex-1 bg-brand-yellow text-brand-dark px-3 py-2 rounded text-sm font-semibold">
      Ver Detalhes
    </button>
    <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded text-sm">
      Fechar
    </button>
  </div>
</div>
```

### Sidebar

```tsx
// Sidebar full container
<aside className="w-80 bg-gray-50 border-l border-gray-200 flex flex-col">
  {/* Header */}
  <div className="bg-white border-b border-gray-200 p-6 shadow-sm">
    <h2 className="text-xl font-bold text-brand-dark">Filtros</h2>
    <p className="text-sm text-gray-600 mt-1">3 secretarias selecionadas</p>
  </div>

  {/* Search */}
  <div className="p-6 border-b border-gray-200 bg-white">
    <div className="relative">
      <input
        type="text"
        placeholder="Buscar imóvel..."
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-yellow focus:outline-none"
      />
      <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
    </div>
  </div>

  {/* Filters */}
  <div className="flex-1 overflow-y-auto p-6 space-y-4">
    {/* Filter items */}
  </div>

  {/* Footer */}
  <div className="border-t border-gray-200 p-6 bg-white">
    <button className="w-full bg-brand-yellow text-brand-dark py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
      Aplicar Filtros
    </button>
  </div>
</aside>
```

---

## 📐 Espaçamento & Layout

### Spacing Scale
```
4px   (0.25rem)
8px   (0.5rem)
12px  (0.75rem)
16px  (1rem)      ← base
24px  (1.5rem)
32px  (2rem)
48px  (3rem)
64px  (4rem)
```

### Border Radius
```
4px   → Inputs, small elements
8px   → Cards, buttons
12px  → Large containers
16px  → Sections
```

### Shadows
```
shadow-sm:  0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow-md:  0 4px 6px -1px rgba(0, 0, 0, 0.1)
shadow-lg:  0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

---

## 🎬 Animações & Transições

### Transições
```css
/* Hover states */
transition: all 200ms ease-out;

/* Focus states */
transition: border-color 150ms ease-out;

/* Loading states */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### TailwindCSS
```html
<!-- Hover button -->
<button class="bg-brand-yellow hover:bg-yellow-400 transition-colors duration-200">
  Clique aqui
</button>

<!-- Loading spinner -->
<svg class="animate-spin w-6 h-6 text-brand-yellow">
  <!-- SVG content -->
</svg>

<!-- Focus outline -->
<input class="focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2" />
```

---

## 📱 Responsividade

### Breakpoints
```
Mobile:   < 640px   (full width)
Tablet:   640px - 1024px
Desktop:  > 1024px
```

### Layout Responsivo (Mockup Fase 1)

**Desktop (> 1024px):**
```
┌─────────────────────────────────────┐
│           HEADER (cinza)            │
├──────────────────────┬──────────────┤
│                      │              │
│   MAP (70%)          │ SIDEBAR      │
│                      │ (30%)        │
│                      │              │
└──────────────────────┴──────────────┘
```

**Tablet (640-1024px):**
```
┌──────────────────────────────┐
│        HEADER (cinza)        │
├──────────────────────────────┤
│   MAP (full width)           │
├──────────────────────────────┤
│   SIDEBAR (drawer)           │
└──────────────────────────────┘
```

**Mobile (< 640px):**
```
┌────────────────┐
│   HEADER       │
├────────────────┤
│   MAP          │
│ (full width)   │
├────────────────┤
│  FILTERS (tab) │
└────────────────┘
```

### CSS Media Queries
```javascript
// tailwind.config.js com customizações
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}

// Uso em componentes
<div className="w-full lg:w-1/3 flex flex-col md:flex-row">
  {/* Responsivo automático */}
</div>
```

---

## 🎯 Padrões de Interação

### Estados de Componentes

```tsx
// Button states
<button className={`
  ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  ${active ? 'bg-yellow-500 shadow-lg' : 'bg-brand-yellow'}
  ${loading ? 'pointer-events-none' : ''}
  transition-all duration-200
`}>
  {loading ? <Spinner /> : 'Clique aqui'}
</button>
```

### Hover Effects
```tsx
// Card hover
<div className="
  bg-white
  rounded-lg
  shadow-sm
  hover:shadow-md
  hover:border-brand-yellow
  transition-all
  duration-200
">
  Card content
</div>
```

### Focus States (Acessibilidade)
```tsx
<input
  className="
    focus:outline-none
    focus:ring-2
    focus:ring-brand-yellow
    focus:ring-offset-2
    transition-ring
  "
  placeholder="Digite aqui..."
/>
```

---

## 📋 Checklist de Implementação

- [ ] Instalar `tailwindcss` e gerar arquivo de config
- [ ] Customizar `tailwind.config.js` com cores brand
- [ ] Criar componentes base (Button, Card, Header)
- [ ] Implementar layout responsivo
- [ ] Testar em mobile, tablet, desktop
- [ ] Validar contraste de cores (WCAG AA)
- [ ] Adicionar transições e animações
- [ ] Review visual com stakeholders
- [ ] Deploy com design system funcionando

---

## 🔗 Referências

- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Font Pairing Guide](https://www.figma.com/resources/fonts)
- [Design System Docs](https://www.designsystems.com)

---

**Documento preparado por:** Claude (Architecture Skill)
**Última atualização:** 2026-03-24
**Status:** ✅ Pronto para Implementação
