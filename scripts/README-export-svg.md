# Metodologia de Exportação para SVG

Este projeto oferece **duas abordagens** para extrair o conteúdo da landing page em formato SVG.

---

## 1. Mockup por Screenshot (Raster em SVG)

**Script:** `export-mockup-svg.mjs`  
**Comando:** `pnpm run export:mockup`

### Metodologia
- Captura screenshot **full-page** da página renderizada
- Embute a imagem PNG em base64 dentro de um wrapper SVG
- Resultado: arquivo SVG que exibe a página como imagem

### Características
- Fiel à renderização no navegador
- Carrosséis congelados no frame do momento
- Animações pausadas antes da captura
- Arquivo grande (~3MB) por conter imagem

### Quando usar
- Apresentações rápidas
- Referência visual exata
- Quando fidelidade pixel-a-pixel é prioridade

---

## 2. Extração de Conteúdo (Vetorial)

**Script:** `export-content-to-svg.mjs`  
**Comando:** `pnpm run export:content-svg`

### Metodologia
- Percorre o **DOM** da página renderizada
- Extrai elementos visíveis e os converte em vetores:
  - **Textos** → `<text>` com posição, fonte, cor
  - **Backgrounds** → `<rect>` com cores calculadas
  - **Imagens** → `<image>` (base64 quando possível)

### Fluxo de extração
```
1. Puppeteer carrega a página (localhost:5173)
2. Pausa animações/transições
3. Executa EXTRACT_SCRIPT no contexto da página:
   - isVisible(el) → filtra elementos ocultos
   - walkElements() → percorre DOM recursivamente
   - walkText() → coleta textos com estilos computados
   - Para cada <img> → coleta src, posição, dimensões
4. Fetch de imagens para base64 (mesmo domínio)
5. Montagem do SVG:
   - Fundo branco
   - Rects ordenados por posição Y
   - Images com href (data URL ou URL externa)
   - Texts com formatação
```

### Características
- SVG **vetorial** (textos e formas)
- Imagens embutidas quando same-origin
- Textos selecionáveis e editáveis
- Arquivo menor que screenshot (sem imagens grandes em base64)
- Layout preservado por coordenadas absolutas

### Limitações
- Layout complexo (flex/grid) convertido em posições fixas
- Fontes dependem do sistema
- Imagens externas (Unsplash) podem não carregar por CORS

---

## Pré-requisitos

1. **Servidor rodando:** `pnpm dev` (deixe em execução)
2. **Porta:** scripts usam `http://localhost:5173` por padrão
3. **Override:** `MOCKUP_URL=http://localhost:5174 pnpm run export:mockup`

---

## Saída

| Script | Arquivo | Localização |
|--------|---------|-------------|
| export:mockup | landing-page-mockup.svg | public/ |
| export:content-svg | landing-page-content.svg | public/ |
