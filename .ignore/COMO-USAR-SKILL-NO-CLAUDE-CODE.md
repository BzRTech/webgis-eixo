# Como Usar a Skill WebGis-EIXO no Claude Code

**Status:** ✅ Pronto para Instalar no Claude Code
**Skill Name:** `webgis-eixo`
**Compatibilidade:** Claude Code v1.0+

---

## 📋 O Que Você Tem

Você tem uma **Skill do Claude Code** chamada `WebGis-EIXO` que:
- ✅ Gera componentes React prontos (Header, MapContainer, Sidebar, FeatureLayer)
- ✅ Integra TailwindCSS com cores brand (Amarelo #FCD34D)
- ✅ Produz código TypeScript 100% funcional
- ✅ Inclui tipos, exemplos, e estrutura de pastas

---

## 🚀 Como Instalar no Claude Code

### Opção 1: Copiar Manualmente (Mais Simples)

1. **Abra Claude Code** (`claude` no terminal)

2. **Copie o arquivo SKILL.md:**
   - Pegue o conteúdo de: `SKILL-WebGis-EIXO.md` (nesta pasta)
   - Crie uma pasta: `~/.claude/skills/webgis-eixo/`
   - Crie o arquivo: `~/.claude/skills/webgis-eixo/SKILL.md`
   - Cole o conteúdo

3. **Reinicie Claude Code:**
   ```bash
   # Saia de Claude Code (Ctrl+C)
   # Rode novamente
   claude
   ```

4. **Teste:**
   ```bash
   /webgis-eixo Gere os componentes React principais
   ```

### Opção 2: Script Automático (Recomendado)

```bash
# Crie a pasta
mkdir -p ~/.claude/skills/webgis-eixo

# Copie o arquivo (ajuste o caminho)
cp C:\Users\Filipe\Documents\Claude\EIXO\SKILL-WebGis-EIXO.md \
   ~/.claude/skills/webgis-eixo/SKILL.md

# Reinicie Claude Code
exit  # ou Ctrl+C
claude
```

---

## 💡 Como Usar a Skill (Depois de Instalada)

### Invocação 1: Gerar Todos os Componentes

```bash
/webgis-eixo Gere os componentes React principais para o WebGIS com:
- Header com logo amarela e navegação
- MapContainer com Leaflet e OpenStreetMap
- Sidebar com filtros para 3 secretarias
- FeatureLayer para renderizar dados GeoJSON
- Todos os styles com TailwindCSS
- Cores: Amarelo #FCD34D, Cinza #1F2937
```

**Você recebe:** Todos os arquivos `.tsx` prontos.

### Invocação 2: Gerar Apenas Alguns Componentes

```bash
/webgis-eixo Gere apenas o MapContainer e o Header com cores brand
```

### Invocação 3: Customizar Cores

```bash
/webgis-eixo Gere os componentes, mas mude:
- Amarelo primário para #FFD700
- Mantém cinza e branco
- Atualize tailwind.config.js
```

---

## 📂 Fluxo de Trabalho Completo

### Step 1: Gerar Componentes

```bash
claude
# Em Claude Code:
/webgis-eixo Gere todos os componentes React para o WebGIS
```

**Claude Code retorna:** Arquivos `.tsx` com código completo.

### Step 2: Criar Projeto React

```bash
# Em seu terminal (fora do Claude Code):
npm create vite@latest webgis-prefeitura -- --template react-ts
cd webgis-prefeitura
npm install
npm install leaflet react-leaflet zustand axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Copiar Componentes

- Crie pastas: `src/components/{Map,Sidebar,Layout,common}`
- **Copie os componentes gerados** para suas pastas
  - `Header.tsx` → `src/components/Layout/`
  - `MapContainer.tsx` → `src/components/Map/`
  - `Sidebar.tsx` → `src/components/Sidebar/`
  - `FeatureLayer.tsx` → `src/components/Map/`

### Step 4: Configurar TailwindCSS

Claude Code também gera um `tailwind.config.js` com as cores. Copie/mescle com seu arquivo.

### Step 5: Integrar em App.tsx

```typescript
// src/App.tsx
import { Header } from './components/Layout/Header'
import { MapContainer } from './components/Map/MapContainer'
import { Sidebar } from './components/Sidebar/Sidebar'

export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1">
        <MapContainer />
        <Sidebar />
      </div>
    </div>
  )
}
```

### Step 6: Rodar Localmente

```bash
npm run dev
# Abre em http://localhost:5173
```

### Step 7: Adicionar Dados GeoJSON

```bash
# Crie pasta de dados
mkdir -p public/data

# Copie seus arquivos GeoJSON
cp meus-dados/planejamento.geojson public/data/
cp meus-dados/tributos.geojson public/data/
cp meus-dados/ambiental.geojson public/data/
```

### Step 8: Deploy em Vercel

```bash
# Commit e push
git add .
git commit -m "feat: initial webgis mockup with components"
git push origin main

# Vercel auto-deploy (se conectado)
# Ou acesse vercel.com e importe seu repo
```

---

## 🎯 Tipos de Requisições Que Funcionam

**Com a skill instalada, qualquer uma dessas ativa a skill:**

```bash
/webgis-eixo Gere os componentes React

/webgis-eixo Crie um boilerplate para o WebGIS

/webgis-eixo Faça os componentes Leaflet com TailwindCSS

/webgis-eixo Gere o mockup do mapa e sidebar

/webgis-eixo Create React components for GIS web app

/webgis-eixo Quero o código do MapContainer e Header
```

**A skill é bem flexível — qualquer requisição que mencione:**
- "componentes React" / "React components"
- "WebGIS" / "web gis"
- "Leaflet" + "TailwindCSS"
- "boilerplate" / "scaffolding"
- "mapa" / "map"

→ **A skill dispara automaticamente!**

---

## 🛠️ Troubleshooting

### Problema: Skill não aparece em Claude Code

**Solução:**
1. Verifique a pasta: `~/.claude/skills/webgis-eixo/SKILL.md` existe?
2. Reinicie Claude Code: `exit` → `claude`
3. Liste skills: Digite `help` ou `/`

Se ainda não aparecer:
- Verifique permissões: `chmod 644 ~/.claude/skills/webgis-eixo/SKILL.md`
- Verifique sintaxe YAML no início do arquivo (precisa ter `---` e `name:`)

### Problema: Skill dispara mas resposta é genérica

**Solução:**
- A descrição da skill é o driver principal
- Se não está disparando bem, você pode ajustar em `SKILL.md`
- Seção `description:` — faça mais específica ou adicione exemplos

### Problema: Componentes gerados têm erros

**Solução:**
1. Verifique se instalou dependências:
   ```bash
   npm install leaflet react-leaflet zustand axios
   npm install -D tailwindcss postcss autoprefixer
   ```
2. Verifique `tsconfig.json` tem `"jsx": "react-jsx"`
3. Rode `npm run dev` novamente (Vite recompila)

---

## 📚 Arquivos de Referência

Você tem na pasta `EIXO/`:

| Arquivo | Para Quê |
|---------|----------|
| `SKILL-WebGis-EIXO.md` | Instalação no Claude Code |
| `WebGIS-Conclusao-Guia-Pratico.md` | Passo-a-passo implementação |
| `DESIGN-SYSTEM-BrandIdentity.md` | Colors, CSS, componentes |
| `VISUAL-MOCKUP-ASCII.md` | Layouts visuais, design |
| `ADR-001-WebGIS-Architecture.md` | Decisões técnicas |
| `README.md` | Índice de tudo |
| `START-HERE.md` | Começar rápido |

---

## 🎬 Exemplo Real (Complete End-to-End)

### Cenário: Você quer gerar o mockup agora

```bash
# 1. Abra Claude Code
claude

# 2. Dispare a skill
/webgis-eixo Gere os componentes React principais para o WebGIS com:
- Header com logo da empresa (amarela)
- Mapa Leaflet inteiro
- Sidebar com filtros
- Tudo com TailwindCSS e cores brand

# 3. Claude Code gera os arquivos
# Cria:
#   - Header.tsx
#   - MapContainer.tsx
#   - Sidebar.tsx
#   - FeatureLayer.tsx
#   - FilterToggle.tsx
#   - Button.tsx
#   - tailwind.config.js
#   - App.tsx (exemplo)

# 4. Saia de Claude Code
exit

# 5. No terminal:
npm create vite@latest webgis -- --template react-ts
cd webgis
npm install leaflet react-leaflet zustand
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 6. Copie os componentes gerados:
# Header.tsx → src/components/Layout/
# MapContainer.tsx → src/components/Map/
# etc.

# 7. Rode!
npm run dev

# 8. Acesse http://localhost:5173
# Você vê: Header + Mapa + Sidebar com cores amarelas ✨
```

---

## 💾 Salvando os Outputs

Quando Claude Code gera os componentes, ele os exibe. Você pode:

### Opção 1: Copiar/Colar
- Selecione o código
- Copie (Ctrl+C)
- Cole em seu editor (Ctrl+V)

### Opção 2: Claude Code Salva em Arquivos
Se Claude Code salvar em arquivos (verifique o output):
```
Files saved to:
  /path/to/Header.tsx
  /path/to/MapContainer.tsx
  ...
```

Nesse caso, copie direto de lá para seu projeto.

### Opção 3: Download ZIP
Alguns versions de Claude Code permitem:
```
/download-skill-outputs
```

Tenta isso se existir!

---

## 🚀 Próximos Passos Recomendados

1. **Instale a skill** (Opção 1 ou 2 acima)
2. **Gere os componentes** (`/webgis-eixo ...`)
3. **Crie o projeto React** (npm create vite)
4. **Copie componentes** (para `src/components/`)
5. **Rode localmente** (`npm run dev`)
6. **Customize cores** (se quiser — em `tailwind.config.js`)
7. **Adicione dados GeoJSON** (em `public/data/`)
8. **Deploy em Vercel** (git push)

---

## 📞 Suporte

Se a skill não funcionar:

1. **Verifique instalação:**
   ```bash
   ls ~/.claude/skills/webgis-eixo/
   ```
   Precisa ter: `SKILL.md`

2. **Verifique YAML válido:**
   - `---` no início
   - `name:` e `description:` presentes
   - Sem erros de sintaxe

3. **Reinicie Claude Code:**
   ```bash
   exit
   claude
   ```

4. **Se ainda não funcionar:**
   - Abra um issue
   - Ou use os arquivos markdown diretamente como referência
   - Ou ask Claude para gerar os componentes sem skill (`/help`)

---

## ✅ Checklist Final

- [ ] Criei a pasta `~/.claude/skills/webgis-eixo/`
- [ ] Copiei `SKILL.md` para lá
- [ ] Reiniciei Claude Code
- [ ] Testei: `/webgis-eixo Gere componentes`
- [ ] Recebi código React pronto
- [ ] Criei projeto: `npm create vite`
- [ ] Copiei componentes para `src/components/`
- [ ] Rodei: `npm run dev`
- [ ] Funciona! ✨

---

**Skill Version:** 1.0
**Última atualização:** 2026-03-24
**Status:** ✅ Ready to Install

Boa sorte! 🚀
