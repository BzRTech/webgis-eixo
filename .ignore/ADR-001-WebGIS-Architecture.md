# ADR-001: Arquitetura WebGIS Integrado para Prefeituras

**Status:** Proposed
**Date:** 2026-03-24
**Deciders:** Tech Lead, Product Manager, Stakeholders das Secretarias
**Context de Decisão:** Mockup/PoC de página única para visualização integrada de dados GIS

---

## Context

### Situação
Necessidade de criar um **WebGIS unificado** que integre dados de três secretarias municipais (Planejamento, Tributos e Ambiental) com base georreferenciada. O projeto começa com um **mockup minimalista** de página única para validar a viabilidade e gerar feedback dos usuários.

### Restrições & Drivers
- **Escopo de dados:** < 10K features geométricas (pequeno volume)
- **Objetivo:** PoC visual + UX/Design com interatividade básica
- **Stack do desenvolvedor:** React, JavaScript/TypeScript
- **Nível GIS:** Primeiro projeto com dados geoespaciais
- **Timeline:** Rápida iteração para feedback

### Forças em Jogo
1. **Simplicidade vs. Extensibilidade** — Começar minimalista, mas arquitetura que suporte evoluir para múltiplos municípios
2. **Performance vs. Funcionalidade** — Com < 10K features, podemos permitir-nos algumas escolhas menos otimizadas
3. **Curva de aprendizado** — Evitar tecnologias muito complexas (PostGIS, GeoServer) nesta fase
4. **Custo de infraestrutura** — Solução lean, sem necessidade de servidores de mapa complexos

---

## Decision

### Recomendação: Stack Moderno & Minimalista

```
Frontend: React 18 + TypeScript + Vite
Mapping: Leaflet + React-Leaflet (com TailwindCSS)
Data Geoespacial: GeoJSON (armazenado como JSON simples)
Backend (MVP futuro): Node.js/Express + PostGIS (quando escalar)
Hospedagem: Vercel/Netlify (frontend) + PaaS simples (backend)
```

### Por quê essa escolha?
1. **Aprendizado gradual** — Você conhece React; Leaflet é a forma mais intuitiva de aprender mapping
2. **Zero overhead GIS** — GeoJSON é JSON nativo do browser, sem instalações complexas
3. **Velocidade de desenvolvimento** — Componentes reutilizáveis, hot reload, zero build complexity
4. **Fácil transição** — Quando escalar, você migra para PostGIS sem refatorar a lógica front-end

---

## Options Considered

### Option A: React + Leaflet + GeoJSON (⭐ Recomendado)
| Dimensão | Avaliação |
|----------|-----------|
| Complexity | **Baixa** — Conceitos familiares ao dev React |
| Cost | **Mínimo** — Stack open-source, hosting gratuito inicialmente |
| Scalability | **Moderada** — Até ~50K features antes de otimizações |
| Team Familiarity | **Alta** — React dominado, Leaflet é simples |
| Learning Curve | **Suave** — Documentação excelente, comunidade grande |

**Pros:**
- ✅ Folium/Leaflet integra perfeitamente com React
- ✅ GeoJSON é formato leve, inspecionável, fácil de debug
- ✅ Sem dependências de servidores GIS pesados
- ✅ Componentes React reutilizáveis (Layer, Popup, etc)
- ✅ Excelente para mockups e iteração rápida
- ✅ Transição suave para arquitetura escalável

**Cons:**
- ❌ Toda geometria carregada em memória (OK para <50K features)
- ❌ Sem análises espaciais avançadas (intersecção, buffer) no front
- ❌ GeoJSON é verboso (não é comprimido)

---

### Option B: Mapbox GL JS + TypeScript
| Dimensão | Avaliação |
|----------|-----------|
| Complexity | **Média-Alta** — Mais controle, mais código |
| Cost | **Moderado** — Plano free até 50K requisições/mês |
| Scalability | **Alta** — Otimizado para grandes datasets |
| Team Familiarity | **Média** — Mapbox tem learning curve diferente |
| Performance | **Excelente** — Rendering em GPU |

**Pros:**
- ✅ Performance superior para renderização de milhões de features
- ✅ Estilo visual mais moderno (estilo Mapbox)
- ✅ Suporta 3D e análises avançadas
- ✅ Integração com TypeScript robusta

**Cons:**
- ❌ **Overkill para mockup de <10K features**
- ❌ Curva de aprendizado maior
- ❌ Licença propriétária (após limite free)
- ❌ Mais verboso para iteração rápida

---

### Option C: QGIS + PostGIS + GeoServer (Traditional Stack)
| Dimensão | Avaliação |
|----------|-----------|
| Complexity | **Alta** — Muitos componentes, configuração complexa |
| Cost | **Variável** — Open-source, mas infraestrutura cara |
| Scalability | **Excelente** — Designed para grandes volumes |
| Team Familiarity | **Baixa** — Novo stack, não é JavaScript |
| Learning Curve | **Íngreme** — PostGIS, SLD, WMS/WFS... |

**Pros:**
- ✅ Industry standard para GIS enterprise
- ✅ Análises espaciais nativas (queries SQL)
- ✅ Suporta qualquer volume de dados
- ✅ Cacheing e otimizações prontas

**Cons:**
- ❌ **Massivamente complexo para um mockup**
- ❌ Você é dev React, não admin GIS
- ❌ Setup demora semanas
- ❌ Hard to debug, steep operational cost
- ❌ Overkill para validação inicial

---

## Trade-off Analysis

| Cenário | Melhor Escolha | Por quê |
|---------|---|---|
| **Mockup/PoC rápido** | **Option A (Leaflet)** | Você precisa iterar rápido em 2-4 semanas |
| **UX/Design focus** | **Option A** | React + Tailwind permite polir interface facilmente |
| **Escalabilidade futura** | **Híbrido** | Option A agora, migra para Option B/C quando atingir 100K+ features |
| **Budget reduzido** | **Option A** | Zero custo, mantém você no controle |
| **Time pequeno** | **Option A** | Não precisa contratar admin GIS |

### Recomendação de Evolução

```
Fase 1 (Agora): React + Leaflet + GeoJSON
    ↓ (quando atingir 50K features ou múltiplos municípios)
Fase 2 (Q3 2026): Adicione backend Node + PostGIS simples
    ↓ (quando performance for crítica)
Fase 3 (Q4 2026+): Considere Mapbox GL ou GeoServer conforme necessário
```

---

## Consequences

### O que fica mais fácil
- 🎯 **Rapidez de prototipar** — Comece com mockup em <1 semana
- 🎯 **Debugging** — Tudo é JSON, inspect no DevTools é trivial
- 🎯 **Deploy** — Hospede front + backend simples em Vercel/Railway
- 🎯 **Curva de aprendizado** — Você conhece 80% da stack (React)
- 🎯 **Feedback dos usuários** — Itere rapidamente sem rebuild complexo

### O que fica mais complexo
- ⚠️ **Análises espaciais avançadas** — Se precisar, vai para backend Node+PostGIS
- ⚠️ **Performance com 100K+ features** — Terá que otimizar (clustering, virtualization)
- ⚠️ **Queries espaciais** — Sem servidor GIS, você faz em Node (depois)
- ⚠️ **Múltiplos estilos de mapa** — Leaflet é mais "básico" que Mapbox

### O que precisamos revisitar
- [ ] **Quando dados crescerem** — Avalie se caching em backend é necessário
- [ ] **Análises em tempo real** — PostGIS queries podem ser lentas no front
- [ ] **Mobile responsiveness** — Leaflet mobile é bom, mas teste em produção
- [ ] **Segurança de dados** — GeoJSON público é aceitável para mockup, depois autentique

---

## Arquitetura Proposta (Diagrama Conceitual)

```
┌─────────────────────────────────────────────────────┐
│            FRONTEND (React 18 + Vite)               │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─ Layout (Header, Sidebar, Map)                  │
│  ├─ MapContainer (Leaflet)                         │
│  │  ├─ TileLayer (OpenStreetMap)                   │
│  │  ├─ FeatureLayer (Secretaria de Planejamento)   │
│  │  ├─ FeatureLayer (Secretaria de Tributos)       │
│  │  └─ FeatureLayer (Secretaria Ambiental)         │
│  │                                                  │
│  └─ Sidebar Filters                                │
│     ├─ Toggle Secretarias                          │
│     ├─ Search por propriedade                      │
│     └─ Info Panel (dados selecionados)             │
│                                                    │
└──────────────────┬──────────────────────────────────┘
                   │
                   ├─→ GeoJSON Files (assets/)
                   │   ├─ planejamento.geojson
                   │   ├─ tributos.geojson
                   │   └─ ambiental.geojson
                   │
                   └─→ Static Hosting (Vercel/Netlify)

BACKEND (Fase 2 - quando escalar)
┌─────────────────────────────┐
│   Node.js + Express         │
│   PostgreSQL + PostGIS      │
└─────────────────────────────┘
```

---

## Stack Detalhado

### Frontend

```json
{
  "framework": "React 18.2+ (TypeScript)",
  "bundler": "Vite (< 1s startup)",
  "mapping": "Leaflet 1.9 + react-leaflet 4",
  "styling": "TailwindCSS (utility-first)",
  "state": "Zustand (lightweight alternative to Redux)",
  "ui-components": "shadcn/ui ou Headless UI",
  "http": "axios ou fetch nativo",
  "testing": "Vitest + React Testing Library"
}
```

### Dados

```json
{
  "format": "GeoJSON (RFC 7946)",
  "storage": "JSON files em /public/data/ inicialmente",
  "versioning": "Git (para controlar alterações de dados)",
  "future": "PostGIS quando MVP validado"
}
```

### Deployment

```
Frontend:  Vercel (auto-deploy de main)
Backend:   Railway ou Heroku (Fase 2)
CDN:       Vercel edge (auto)
Domain:    Seu domínio customizado
```

---

## Implementação Rápida (Próximos Passos)

### Week 1: Scaffolding + Mapa Base
```bash
npm create vite@latest webgis -- --template react-ts
npm install leaflet react-leaflet zustand axios tailwindcss
# Crie: MapContainer com TileLayer OSM + controles básicos
```

### Week 2: Integração de Dados + Filtros
```bash
# Importe 3 GeoJSON files
# Crie componentes: FeatureLayer, Popup, Sidebar com toggles
# Estile com TailwindCSS
```

### Week 3: UX Polish + Deploy
```bash
# Melhor mobile responsiveness
# Adicione hover effects, tooltips
# Deploy em Vercel
```

---

## Decisões de Design (UX)

### Layout
- **Split-view:** Mapa à esquerda (70%), Sidebar à direita (30%) — Responsivo para mobile
- **Base Map:** OpenStreetMap (livre, sem API key)
- **Colors por Secretaria:**
  - Planejamento: 🔵 Azul
  - Tributos: 🟡 Amarelo
  - Ambiental: 🟢 Verde

### Interações
- **Click na feature** → Popup com dados (nome, ID, secretaria)
- **Hover** → Destaque a feature
- **Filtro toggles** → Show/hide por secretaria
- **Search** → Busque por propriedade ou descrição (CTRL+K)

### Dados Exemplo (GeoJSON)
```json
{
  "type": "Feature",
  "properties": {
    "id": "PROP-001",
    "nome": "Lote 42 - Rua das Flores",
    "secretaria": "planejamento",
    "area_m2": 1250,
    "valor_iptu": "R$ 2.500",
    "situacao_ambiental": "Ok"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[[...], [...], [...]]]
  }
}
```

---

## Riscos & Mitigação

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---|---|---|
| **GeoJSON muito grande** | Média | Alto | Implemente clustered markers antes de 100K |
| **Latência na busca** | Baixa | Médio | Filtre dados no memory (Zustand), não API |
| **Usuários perdidos na UX** | Média | Médio | Testes de usabilidade após Semana 2 |
| **Mudanças frequentes de dados** | Alta | Baixo | Use versionamento Git + CI/CD simples |

---

## Conclusão

**Escolha Option A (Leaflet + React)** por:
1. ✅ Time pequeno, dev React
2. ✅ Validação rápida (2-3 semanas)
3. ✅ Custo praticamente zero
4. ✅ Fácil transição para arquitetura escalável
5. ✅ Excelente para PoC/mockup

**Revisitar Fase 2** quando:
- Dados ultrapassarem 50K features
- Necessidade de análises espaciais (queries SQL)
- Múltiplos municípios na plataforma

---

## Próximo Passos (Action Items)

- [ ] **Validar dados** — Obter samples de GeoJSON de cada secretaria
- [ ] **Wireframe UX** — Desenhar layout no Figma (mapa + sidebar)
- [ ] **Env setup** — Node 18+, npm/yarn, VSCode + extensions Vite
- [ ] **Git repository** — Criar repo, branching strategy
- [ ] **Gathering specs** — Reunir requisitos finais com stakeholders (Week 1)
- [ ] **Kick-off dev** — Iniciar scaffolding (Week 1, dia 3)

---

**Autor:** Claude (via Architecture Skill)
**Revisão:** Necessária com time técnico e stakeholders
**Próxima review:** Após 2 semanas de desenvolvimento (mockup funcional)
