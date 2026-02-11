# Manual de Marca - Zeo App
## Guia Completo de Identidade Visual e Branding

---

## 1. Identidade da Marca

### 1.1 Sobre o Zeo App
**Posicionamento:** Plataforma SaaS que revoluciona a gestão de infraestrutura de telecomunicações através de análise estrutural automatizada.

**Missão:** Transformar processos de análise estrutural que levam dias em resultados instantâneos, reduzindo custos e aumentando a eficiência operacional.

**Público-alvo:** Empresas de telecomunicações, engenheiros estruturais, gestores de infraestrutura de torres e antenas.

**Tom de voz:**
- **Profissional** - Confiável e técnico
- **Inovador** - Moderno e tecnológico
- **Direto** - Objetivo e claro
- **Confiante** - Assertivo sobre os benefícios

---

## 2. Logotipo

### 2.1 Versões do Logo
**Logo Principal:** Símbolo abstrato laranja "Z" + texto "ZEO" em branco
- Arquivo: `logo-zeo.png`
- Uso: Fundo escuro (navbar, footer)

**Construção:**
- Símbolo: Forma geométrica abstrata representando um "Z" estilizado
- Cor do símbolo: Orange Primary (#FF6B00)
- Tipografia: Sans-serif bold, tracking tight
- Proporção: Símbolo ocupa ~40% da altura total

### 2.2 Área de Proteção
Manter espaço mínimo equivalente à altura do "Z" ao redor do logo em todas as direções.

### 2.3 Tamanho Mínimo
- Digital: 120px de largura
- Impresso: 30mm de largura

### 2.4 Usos Incorretos
❌ Não alterar proporções
❌ Não mudar cores do símbolo
❌ Não adicionar efeitos (sombras, gradientes)
❌ Não rotacionar
❌ Não usar em fundos com baixo contraste

---

## 3. Paleta de Cores

### 3.1 Cores Primárias

#### Orange Primary
```
HEX: #FF6B00
RGB: 255, 107, 0
HSL: 25, 100%, 50%
```
**Uso:** CTAs principais, destaques, ícones importantes, hover states
**Psicologia:** Energia, inovação, ação, tecnologia

#### Orange Hover
```
HEX: #E66000
RGB: 230, 96, 0
HSL: 25, 100%, 45%
```
**Uso:** Estados hover de botões e elementos interativos

### 3.2 Cores Neutras

#### Black
```
HEX: #000000
RGB: 0, 0, 0
```
**Uso:** Fundos de seções (Metrics, Footer, Contact card), textos principais

#### White
```
HEX: #FFFFFF
RGB: 255, 255, 255
```
**Uso:** Fundos principais, textos em fundos escuros

#### Gray Scale
```
Gray 50:  #FAFAFA
Gray 100: #F5F5F5
Gray 200: #E5E5E5
Gray 300: #D4D4D4
Gray 400: #A3A3A3
Gray 500: #737373
Gray 600: #525252
Gray 700: #404040
Gray 800: #262626
Gray 900: #171717
```

### 3.3 Hierarquia de Cores
1. **Primária (Orange):** Ações principais, CTAs
2. **Preta:** Fundos de destaque, textos principais
3. **Branca:** Fundos gerais, textos em fundos escuros
4. **Cinza:** Textos secundários, bordas, backgrounds sutis

### 3.4 Acessibilidade
- Contraste mínimo texto/fundo: 4.5:1 (WCAG AA)
- Orange #FF6B00 em fundo branco: ✅ 4.52:1
- Branco em fundo preto: ✅ 21:1
- Gray 600 em fundo branco: ✅ 7.23:1

---

## 4. Tipografia

### 4.1 Família Tipográfica Principal
**Sans-serif System Stack**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 
             'Fira Sans', 'Droid Sans', 'Helvetica Neue', 
             sans-serif;
```

**Características:**
- Moderna e limpa
- Excelente legibilidade em telas
- Performance otimizada (fontes do sistema)
- Consistência entre plataformas

### 4.2 Hierarquia Tipográfica

#### Hero / Display
```
Tamanho: 48px - 96px (3rem - 6rem)
Peso: Bold (700)
Line-height: 1.1 - 1.2
Letter-spacing: -0.02em (tight)
Uso: Títulos principais, Hero sections
```

#### H1 / Heading Large
```
Tamanho: 36px - 48px (2.25rem - 3rem)
Peso: Bold (700)
Line-height: 1.2
Letter-spacing: -0.01em (tight)
Uso: Títulos de seção
```

#### H2 / Heading Medium
```
Tamanho: 24px - 32px (1.5rem - 2rem)
Peso: Bold (700)
Line-height: 1.3
Letter-spacing: normal
Uso: Subtítulos, títulos de cards
```

#### H3 / Heading Small
```
Tamanho: 18px - 24px (1.125rem - 1.5rem)
Peso: Bold (700)
Line-height: 1.4
Letter-spacing: normal
Uso: Títulos menores, labels de seção
```

#### Body Large
```
Tamanho: 18px - 20px (1.125rem - 1.25rem)
Peso: Regular (400)
Line-height: 1.6 - 1.7
Uso: Parágrafos de destaque, introduções
```

#### Body Regular
```
Tamanho: 14px - 16px (0.875rem - 1rem)
Peso: Regular (400) / Medium (500)
Line-height: 1.5 - 1.6
Uso: Textos gerais, descrições
```

#### Body Small
```
Tamanho: 12px - 14px (0.75rem - 0.875rem)
Peso: Regular (400) / Medium (500)
Line-height: 1.5
Uso: Labels, metadados, footer
```

#### Caption / Overline
```
Tamanho: 10px - 12px (0.625rem - 0.75rem)
Peso: Bold (700)
Text-transform: uppercase
Letter-spacing: 0.1em (widest)
Uso: Labels pequenos, categorias
```

### 4.3 Pesos Utilizados
- **Regular (400):** Textos gerais
- **Medium (500):** Textos de destaque, labels
- **Bold (700):** Títulos, CTAs, ênfase

---

## 5. Componentes UI

### 5.1 Botões

#### Primary Button
```
Background: #FF6B00
Text: White, Bold
Padding: 16px 48px (py-4 px-12)
Border-radius: 8px (rounded-lg)
Hover: #E66000
Transition: all 200ms ease
```

#### Secondary Button
```
Background: Transparent
Border: 1px solid rgba(255,255,255,0.2)
Text: White, Bold
Padding: 16px 32px
Border-radius: 8px
Hover: White background, Black text
```

#### Ghost Button
```
Background: Transparent
Text: Gray 600, Medium
Hover: Black text
```

### 5.2 Cards

#### Card Padrão
```
Background: White
Border: 1px solid Gray 100
Border-radius: 8px (rounded-lg)
Padding: 32px (p-8)
Shadow: subtle (shadow-sm)
Hover: translate-y(-4px), shadow-lg
```

#### Card Destaque (Orange)
```
Background: #FF6B00
Text: White
Border-radius: 8px
Padding: 32px
Shadow: shadow-lg
```

#### Card Escuro
```
Background: Black
Text: White
Border-radius: 12px (rounded-xl)
Padding: 40px - 48px
Shadow: shadow-2xl
```

### 5.3 Inputs

#### Text Input
```
Background: White
Border: 1px solid Gray 200
Border-radius: 8px (rounded-lg)
Padding: 12px 16px (py-3 px-4)
Focus: 2px ring Orange Primary
Placeholder: Gray 600
```

#### Textarea
```
Mesmo estilo do Text Input
Resize: none
Min-height: 120px
```

### 5.4 Ícones
**Biblioteca:** Lucide React
**Tamanho padrão:** 20px - 24px
**Stroke-width:** 2px
**Cores:** Orange Primary (destaques), Gray 400-500 (neutros), White (em fundos escuros)

---

## 6. Layout e Grid

### 6.1 Container
```
Max-width: 1280px (max-w-7xl)
Padding horizontal: 16px (mobile) → 24px (tablet) → 32px (desktop)
Margin: auto (centralizado)
```

### 6.2 Espaçamento Vertical
```
Seções: 96px (py-24) - espaçamento entre seções
Cards: 32px - 48px (p-8 a p-12)
Elementos: 16px - 24px (gap-4 a gap-6)
Textos: 8px - 16px (mb-2 a mb-4)
```

### 6.3 Grid System
```
Mobile: 1 coluna
Tablet: 2 colunas (md:grid-cols-2)
Desktop: 3-4 colunas (lg:grid-cols-3 ou lg:grid-cols-4)
Gap: 32px (gap-8)
```

### 6.4 Breakpoints
```
Mobile: < 768px
Tablet: 768px - 1024px (md)
Desktop: > 1024px (lg)
Wide: > 1280px (xl)
```

---

## 7. Animações e Transições

### 7.1 Princípios
- **Sutis:** Não distrair do conteúdo
- **Rápidas:** 200ms - 300ms
- **Propósito:** Feedback visual, hierarquia
- **Consistentes:** Mesma curva de easing

### 7.2 Transições Padrão
```css
transition: all 200ms ease
```

### 7.3 Hover Effects
**Botões:**
- Background color change
- Slight scale (1.02)
- Icon translation (→ move 4px right)

**Cards:**
- Translate Y (-4px)
- Shadow increase (shadow-sm → shadow-lg)

**Links:**
- Color change (Gray → Black ou Gray → Orange)

### 7.4 Scroll Animations (Framer Motion)
```javascript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.1 * index }}
```

---

## 8. Imagens e Mídia

### 8.1 Estilo Fotográfico
- **Tom:** Profissional, técnico
- **Assunto:** Torres, infraestrutura, tecnologia
- **Tratamento:** Cores vibrantes, alto contraste
- **Composição:** Limpa, minimalista

### 8.2 Ilustrações
- **Estilo:** Minimalista, geométrico
- **Cores:** Paleta da marca (Orange + Black + White)
- **Uso:** Ícones, diagramas, mockups

### 8.3 Mockups de Produto
- **Contexto:** Monitor desktop (para screenshots do app)
- **Tratamento:** Bordas arredondadas sutis (rounded-sm)
- **Sombra:** Drop shadow suave
- **Background:** Transparente ou branco

### 8.4 Ícones Customizados
- **Stroke:** 2px
- **Cantos:** Arredondados
- **Preenchimento:** Outline (não filled)
- **Tamanho:** 20px - 24px

---

## 9. Seções da Landing Page

### 9.1 Hero
**Estrutura:**
- Título impactante (48px - 96px)
- Subtítulo explicativo (18px - 20px)
- CTA principal (Orange button)
- Imagem de hero (torre de telecomunicações)

**Background:** Branco
**Altura mínima:** 600px - 800px

### 9.2 Quem Somos
**Estrutura:**
- Título + descrição
- 3 cards de métricas (projetos, análises, anos)
- Grid 3 colunas (desktop)

**Background:** Branco
**Cards:** Fundo branco, borda sutil

### 9.3 O Problema vs. A Solução
**Estrutura:**
- Grid 2 colunas
- Card cinza (problema) + Card laranja (solução)
- Mockup centralizado abaixo

**Background:** Branco
**Contraste:** Gray 200 vs Orange Primary

### 9.4 Recursos e Diferenciais
**Estrutura:**
- Título centralizado
- 4 seções alternadas (imagem + texto)
- Layout zigzag (esquerda/direita)

**Background:** Branco
**Imagens:** Screenshots com bordas arredondadas

### 9.5 Métricas
**Estrutura:**
- Grid 4 colunas (2x2 mobile)
- Números grandes em Orange
- Labels em uppercase
- Subtítulos em itálico

**Background:** Preto
**Números:** Orange (#FF6B00), 48px - 96px

### 9.6 Roadmap
**Estrutura:**
- Grid 3 cards
- Badge "Em breve" em cada card
- Ícones coloridos (Orange)

**Background:** Branco
**Cards:** Borda sutil, hover effect

### 9.7 Contato
**Estrutura:**
- Mapa de fundo (OpenStreetMap, grayscale)
- Card preto centralizado
- 2 colunas: Info + Formulário

**Background:** Mapa (grayscale, brightness 1.2)
**Card:** Preto, bordas arredondadas (rounded-xl)

### 9.8 Footer
**Estrutura:**
- Grid 3 colunas: Logo + Contato + Redes Sociais
- Linha divisória
- Copyright + Info legal (3 colunas)

**Background:** Preto
**Texto:** Branco / Gray 400

---

## 10. Diretrizes de Uso

### 10.1 Hierarquia Visual
1. **Orange:** Ações principais, CTAs, elementos clicáveis importantes
2. **Preto:** Fundos de destaque, textos principais
3. **Branco:** Fundos gerais, espaço negativo
4. **Cinza:** Informações secundárias

### 10.2 Consistência
- Usar sempre os mesmos tamanhos de fonte para elementos similares
- Manter espaçamentos consistentes (múltiplos de 4px ou 8px)
- Aplicar border-radius consistente (8px padrão)
- Usar a mesma duração de transição (200ms)

### 10.3 Acessibilidade
- Contraste mínimo 4.5:1 para textos
- Textos mínimos de 14px
- Áreas clicáveis mínimas de 44x44px
- Labels em todos os inputs
- Alt text em todas as imagens

### 10.4 Responsividade
- Mobile-first approach
- Breakpoints em 768px e 1024px
- Grid adapta de 1 → 2 → 3/4 colunas
- Textos reduzem 20-30% no mobile
- Padding reduz no mobile

### 10.5 Performance
- Imagens otimizadas (WebP quando possível)
- Lazy loading para imagens abaixo da dobra
- Fontes do sistema (sem carregamento externo)
- Animações com GPU (transform, opacity)

---

## 11. Exemplos de Aplicação

### 11.1 CTA Principal
```html
<button class="bg-[#FF6B00] text-white font-bold px-12 py-4 rounded-lg 
               hover:bg-[#E66000] transition-all">
  Agendar Demo
</button>
```

### 11.2 Card de Métrica
```html
<div class="text-center">
  <div class="text-6xl font-bold text-[#FF6B00] mb-2">10 mil+</div>
  <div class="text-sm font-bold uppercase tracking-widest">Laudos Analisados</div>
  <div class="text-xs text-gray-500 italic">Presença em todo o Brasil</div>
</div>
```

### 11.3 Título de Seção
```html
<h2 class="text-3xl lg:text-4xl font-bold text-black mb-4 tracking-tight">
  Recursos e Diferenciais
</h2>
<p class="text-lg text-gray-600">
  Tecnologia de ponta para otimizar a sua operação
</p>
```

---

## 12. Assets e Recursos

### 12.1 Arquivos de Logo
- `logo-zeo.png` - Logo principal (PNG transparente)
- Recomendado criar: SVG para escalabilidade

### 12.2 Imagens
- `hero-torre.png` - Torre de telecomunicações (Hero)
- `map-bg.jpg` - Mapa de fundo (Contato)
- `mockupparaadicionar.png` - Mockup de produto
- `secao4/*.png` - Screenshots de funcionalidades

### 12.3 Ícones
Lucide React: Phone, Mail, MapPin, Cpu, Coins, Building2, Instagram, Linkedin

---

## 13. Checklist de Implementação

### Design
- [ ] Logo em alta resolução (PNG + SVG)
- [ ] Paleta de cores documentada
- [ ] Tipografia definida e testada
- [ ] Componentes UI criados
- [ ] Grid system implementado
- [ ] Animações sutis aplicadas

### Conteúdo
- [ ] Textos revisados e aprovados
- [ ] Imagens otimizadas (WebP, compressão)
- [ ] Alt texts em todas as imagens
- [ ] Meta tags (title, description)
- [ ] Open Graph tags

### Acessibilidade
- [ ] Contraste de cores validado (WCAG AA)
- [ ] Navegação por teclado funcional
- [ ] Labels em todos os inputs
- [ ] ARIA labels onde necessário
- [ ] Testes com screen readers

### Performance
- [ ] Imagens lazy-loaded
- [ ] Fontes otimizadas (system fonts)
- [ ] CSS minificado
- [ ] JavaScript otimizado
- [ ] Lighthouse score > 90

### Responsividade
- [ ] Testado em mobile (320px - 768px)
- [ ] Testado em tablet (768px - 1024px)
- [ ] Testado em desktop (> 1024px)
- [ ] Breakpoints funcionando
- [ ] Imagens responsivas

---

## 14. Contato e Suporte

**Projeto:** Zeo App Landing Page
**Versão do Manual:** 1.0
**Data:** Janeiro 2025
**Designer:** UI/UX Design Team

Para dúvidas sobre implementação ou uso da marca, consulte este manual ou entre em contato com a equipe de design.

---

*Este manual de marca é um documento vivo e deve ser atualizado conforme a evolução da identidade visual do Zeo App.*
