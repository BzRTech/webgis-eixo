# Visual Mockup — WebGIS Integrado
## Layouts & Componentes em ASCII Art

**Baseado em:** Identidade BZR Tech (Amarelo #FCD34D + Cinza #1F2937 + Branco)
**Versão:** 1.0
**Data:** 2026-03-24

---

## 📱 Desktop Layout (1024px+)

### Full Page View

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ [◊] WebGIS        Mapa    Dados    Docs             🔍    [Entrar]      ┃ ← Header (Cinza Escuro #1F2937)
┃                                                                          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┌────────────────────────────────────────────────────────────┬──────────────┐
│                                                            │              │
│                                                            │   FILTROS    │
│                                                            │              │
│                                                            │ ┌──────────┐ │
│                                                            │ │ Buscar   │ │ ← Amarelo
│             🗺️  MAPA INTERATIVO (Leaflet)                 │ │ imóvel   │ │
│                                                            │ └──────────┘ │
│                                                            │              │
│                 Planejamento 🔵                            │ ☑ Planejam. │
│                 Tributos 🟡                                │   [2,450]    │
│                 Ambiental 🟢                               │              │
│                                                            │ ☑ Tributos  │
│                                                            │   [1,890]    │
│                                                            │              │
│                                                            │ ☑ Ambiental │
│                                                            │   [876]      │
│                                                            │              │
│                                                            │ ┌──────────┐ │
│                                                            │ │Aplicar   │ │ ← Amarelo
│                                                            │ │Filtros   │ │
│                                                            │ └──────────┘ │
└────────────────────────────────────────────────────────────┴──────────────┘
  70% (Mapa)                                                  30% (Sidebar)
```

### Componentes Zoom-in

#### 1️⃣ Header/Navigation
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                                                                          ┃
┃  [◊]  WebGIS Integrado         Nav Links                   🔍  [Entrar] ┃
┃  (Amarelo)                      (Hover = Amarelo)      (Amarelo)        ┃
┃                                                                          ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  ▲                              ▲                          ▲
  Cinza Escuro                   Cinza Claro              Amarelo Button
  #1F2937                        Hover: #FCD34D
```

**Cores:**
- Background: `#1F2937` (Cinza escuro da logo)
- Text: `#FFFFFF` (Branco)
- Logo box: `#FCD34D` (Amarelo vibrant)
- Hover nav: `#FCD34D` (Amarelo)
- Button: `#FCD34D` com text `#1F2937`

---

#### 2️⃣ Mapa (Centro)
```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  🗺️  MAPA LEAFLET                                  [+] [-] [⛶]    │
│                                                                    │
│      ┌─────────────────────────────────────┐                     │
│      │ 🟡 Propriedade 001                  │                     │
│      │ Planejamento                        │                     │
│      │ Área: 1.250 m²                     │                     │
│      │ Status: Ativo ✓                    │                     │
│      └─────────────────────────────────────┘                     │
│              ↑ Click → Amarelo left border                        │
│                                                                    │
│    Legenda:                                                        │
│    ▪ Planejamento (Amarelo puro)  [2,450]                        │
│    ▪ Tributos (Amarelo escuro)    [1,890]                        │
│    ▪ Ambiental (Âmbar)            [876]                          │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
  Hover feature: Highlight + shadow
  Click: Popup com border amarelo à esquerda
```

---

#### 3️⃣ Sidebar / Filtros
```
┌──────────────────────────┐
│ FILTROS                  │ ← Branco (card)
├──────────────────────────┤
│ 🔍 Buscar imóvel...      │ ← Input com border cinza
│                          │
├──────────────────────────┤
│ 3 secretarias ativas     │ ← Small text cinza
└──────────────────────────┘

┌──────────────────────────┐
│ ☑ Planejamento           │ ← Checkbox (Amarelo quando selecionado)
│                          │
│   🟡 [2.450]             │ ← Badge amarelo
│   "Imóveis cadastrados"  │
│                          │
├──────────────────────────┤
│ ☑ Tributos               │
│                          │
│   🟡 [1.890]             │
│   "Em cobrança"          │
│                          │
├──────────────────────────┤
│ ☑ Ambiental              │
│                          │
│   🟡 [876]               │
│   "Áreas protegidas"     │
│                          │
├──────────────────────────┤
│ [Aplicar Filtros]        │ ← Button amarelo com shadow
│ [Limpar Tudo]            │ ← Button outline
└──────────────────────────┘
```

---

## 📊 Componentes Detalhados

### FilterToggle Card (Secretaria)
```
┌─────────────────────────────────────────────────────┐
│ ☑  Planejamento                          [🟡 ATIVO] │  ← Hover bg-yellow-50
│    2.450 imóveis cadastrados                        │
└─────────────────────────────────────────────────────┘
▲                                              ▲
Border-2 Amarelo (quando selecionado)         Badge Amarelo (#FCD34D)
```

**Estados:**

**Unchecked:**
```
┌─────────────────────────────────────────────────────┐
│ ☐  Planejamento                          [○ INATIVO]│
│    2.450 imóveis cadastrados                        │
└─────────────────────────────────────────────────────┘
   Border cinza claro
```

**Checked:**
```
┌─────────────────────────────────────────────────────┐
│ ☑  Planejamento                          [🟡 ATIVO] │
│    2.450 imóveis cadastrados                        │
└─────────────────────────────────────────────────────┘
   Border-2 #FCD34D | bg-yellow-50
```

---

### Info Popup (no mapa)
```
╔═════════════════════════════════════════╗
║ 🟡 Lote 42 - Rua das Flores             ║ ← Amarelo left border
║━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━║
║                                         ║
║ Secretaria: Planejamento                ║
║ Área: 1.250 m²                          ║
║ Status: [✓ Ativo]                       ║ ← Verde success
║ IPTU: R$ 2.500                          ║
║ Últim atualiz: 15/03/2024               ║
║                                         ║
║ [Ver Detalhes] [Fechar]                 ║ ← Amarelo + outline
║━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━║
║ © OpenStreetMap contributors             ║
╚═════════════════════════════════════════╝
```

---

### Buttons — Variações
```
┌─────────────────────────────────────────────────────┐
│ PRIMARY (Amarelo — Ação Principal)                  │
│ ┌────────────────────────────────┐                 │
│ │ [Aplicar Filtros]              │ Hover: Amarelo  │
│ └────────────────────────────────┘ mais escuro     │
│                                                     │
│ SECONDARY (Cinza — Ação Secundária)                │
│ ┌────────────────────────────────┐                 │
│ │ [Limpar Tudo]                  │ Hover: Cinza    │
│ └────────────────────────────────┘ mais escuro     │
│                                                     │
│ OUTLINE (Border Amarelo)                           │
│ ┌────────────────────────────────┐                 │
│ │ [Export GeoJSON]               │ Hover: bg       │
│ └────────────────────────────────┘ yellow-50      │
└─────────────────────────────────────────────────────┘
```

---

## 📱 Mobile Layout (< 640px)

### Full Stack Layout
```
┏━━━━━━━━━━━━━━━━━━━━┓
┃ [◊] WebGIS         ┃ ← Header compacto
┃ Filtros | Dados    ┃ ← Tabs
┗━━━━━━━━━━━━━━━━━━━━┛

┌──────────────────────┐
│                      │
│                      │
│   🗺️  MAPA           │
│   (full width)       │
│                      │
│                      │
│                      │
└──────────────────────┘

┌──────────────────────┐
│ 📊 FILTROS [∨]       │ ← Drawer / Accordion
│                      │
│ ☑ Planejamento       │
│ ☑ Tributos           │
│ ☑ Ambiental          │
│                      │
│ [Aplicar Filtros]    │
└──────────────────────┘

┌──────────────────────┐
│ ℹ️  INFO [∨]          │ ← Detalhes da feature selecionada
│ Lote 42              │
│ Planejamento         │
│ 1.250 m²             │
└──────────────────────┘
```

---

## 🎨 Paleta de Cores Visual

```
┌──────────────────────────────────────────┐
│ CORES PRIMÁRIAS                          │
├──────────────────────────────────────────┤
│ ▓▓▓▓▓▓  #FCD34D - Amarelo Brand         │
│         (Buttons, Highlights, Logo)      │
│                                          │
│ ▓▓▓▓▓▓  #1F2937 - Cinza Escuro           │
│         (Header, Text, Backgrounds)      │
│                                          │
│ ▓▓▓▓▓▓  #FFFFFF - Branco                 │
│         (Cards, Containers, Text)        │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│ CORES SECRETARIAS (Variações)            │
├──────────────────────────────────────────┤
│ ▓▓▓▓▓▓  #FCD34D - Planejamento          │
│ ▓▓▓▓▓▓  #FBBF24 - Tributos              │
│ ▓▓▓▓▓▓  #F59E0B - Ambiental             │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│ CORES FUNCIONAIS                         │
├──────────────────────────────────────────┤
│ ▓▓▓▓▓▓  #10B981 - Sucesso / Confirmação  │
│ ▓▓▓▓▓▓  #EF4444 - Erro / Alerta          │
│ ▓▓▓▓▓▓  #3B82F6 - Info / Tooltip         │
└──────────────────────────────────────────┘
```

---

## 🖼️ Variações de Cards

### Card Padrão (Branco com hover)
```
┌─────────────────────────────────┐
│ Título                          │ ← Bold, cinza escuro
│─────────────────────────────────│ ← Border cinza claro
│ Conteúdo do card...             │
│                                 │
│ [CTA Button]                    │ ← Amarelo
└─────────────────────────────────┘
 ▲
 shadow-sm → shadow-md (on hover)
```

### Card com Badge (Secretaria)
```
┌────────────────────────────────────────────┐
│ ☑ Planejamento              [🟡 Ativo]    │
│─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │
│ 2.450 imóveis cadastrados                 │
│ Última atualização: 15/03/2024            │
│                                           │
│ ▦▦▦▦▦▦▦▦▦▦ 95% Mapeado                   │
│                                           │
│ [Ver Mapa] [Exportar]                    │
└────────────────────────────────────────────┘
  ▲
  Hover: border-left-4 #FCD34D
```

---

## ⚡ Interações & Animações

### Button Hover/Click
```
Normal:
┌────────────────┐
│ [Aplicar]      │  bg-brand-yellow
└────────────────┘

Hover:
┌────────────────┐
│ [Aplicar]      │  bg-yellow-400 (mais claro)
└────────────────┘  shadow-lg

Click (Active):
┌────────────────┐
│ [Aplicar]      │  bg-yellow-500 (mais escuro)
└────────────────┘  shadow-md (comprimido)

Disabled:
┌────────────────┐
│ [Aplicar]      │  opacity-50, cursor-not-allowed
└────────────────┘
```

### Checkbox Interaction
```
Unchecked:
☐ Planejamento

Hover:
☐ Planejamento  (bg-yellow-50)

Checked:
☑ Planejamento  (accent: #FCD34D)

Focus (Keyboard):
☑ Planejamento  (ring: 2px #FCD34D)
```

---

## 🔍 Exemplo: Busca no Sidebar

### Input Search
```
Vazio:
┌──────────────────────────────┐
│ 🔍 Buscar imóvel...          │  border-gray-300
│                              │
└──────────────────────────────┘

Com Foco:
┌──────────────────────────────┐
│ 🔍 Lote 42                   │  border-brand-yellow (ring-2)
│                              │
└──────────────────────────────┘

Com Resultado:
┌──────────────────────────────┐
│ 🔍 Lote 42              [✓] │  border-success (verde)
│                              │
└──────────────────────────────┘
Abaixo: Dropdown com resultados
┌──────────────────────────────┐
│ [✓] Lote 42 - Rua das Flores │  ← Hover: bg-yellow-50
│                              │
│ [ ] Lote 51 - Avenida Brasil │  ← Clickable
└──────────────────────────────┘
```

---

## 📐 Responsive Breakpoints

### Desktop (1024px+)
```
┌─────────────────────────────────────────────────────────┐
│ Header (full)                                           │
├─────────────────────────┬──────────────────────────────┤
│ Mapa (70%)              │ Sidebar (30%)                │
│                         │                              │
│                         │                              │
│                         │                              │
└─────────────────────────┴──────────────────────────────┘
```

### Tablet (640-1024px)
```
┌────────────────────────────────┐
│ Header (compact)               │
├────────────────────────────────┤
│ Mapa (full)                    │
│                                │
│                                │
├────────────────────────────────┤
│ Sidebar (expandable drawer)    │
└────────────────────────────────┘
```

### Mobile (< 640px)
```
┌─────────────────────┐
│ Header (sticky)     │
├─────────────────────┤
│                     │
│ Mapa (full)         │
│                     │
├─────────────────────┤
│ [Filtros ▼]         │ ← Tab/Drawer
│ [Detalhes ▼]        │ ← Tab/Drawer
└─────────────────────┘
```

---

## ✅ Design System Checklist

- [ ] **Header:** Cinza escuro, logo amarela, nav com hover
- [ ] **Buttons:** Amarelo primário, cinza secundário, outline
- [ ] **Cards:** Branco com shadow, hover effect, border amarela
- [ ] **Sidebar:** Filtros com checkboxes amarelos, search input
- [ ] **Map:** Popups com border amarelo à esquerda
- [ ] **Badges:** Amarelo com texto cinza escuro
- [ ] **Animations:** Transições 200ms, hover efeitos suaves
- [ ] **Mobile:** Responsive drawer, sticky header, full-width mapa

---

## 📞 Implementação Rápida

1. **Copie as cores** para `tailwind.config.js`
2. **Use classes Tailwind** dos exemplos acima
3. **Teste em Figma** antes de codificar (opcional)
4. **Deploy em Vercel** para feedback dos stakeholders

---

**Documento preparado por:** Claude (Architecture Skill)
**Última atualização:** 2026-03-24
**Status:** ✅ Pronto para Codificação
