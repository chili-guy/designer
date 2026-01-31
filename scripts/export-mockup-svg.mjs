#!/usr/bin/env node
/**
 * Script para exportar a landing page como mockup estático em SVG.
 * Captura screenshot da página e embute em arquivo SVG.
 * 
 * Uso: pnpm run export:mockup
 * Requer: servidor rodando em http://localhost:5173 (execute "pnpm dev" em outro terminal)
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.join(__dirname, '..');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'public', 'landing-page-mockup.svg');

const PAGE_URL = process.env.MOCKUP_URL || 'http://localhost:5173';
const VIEWPORT_WIDTH = 1440;
const VIEWPORT_HEIGHT = 900;

async function captureMockup() {
  console.log('🚀 Iniciando exportação do mockup SVG...');
  console.log(`   URL: ${PAGE_URL}`);
  console.log('   Aguardando carregamento da página...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=none'
    ]
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({
      width: VIEWPORT_WIDTH,
      height: VIEWPORT_HEIGHT,
      deviceScaleFactor: 2
    });

    await page.goto(PAGE_URL, {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    await page.evaluate(() => window.scrollTo(0, 0));

    await new Promise(r => setTimeout(r, 3000));

    await page.evaluate(() => {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
        }
      `;
      document.head.appendChild(style);
    });

    await new Promise(r => setTimeout(r, 500));

    await page.evaluate(() => window.scrollTo(0, 0));

    const pageHeight = await page.evaluate(() => {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    });

    const screenshot = await page.screenshot({
      type: 'png',
      fullPage: true,
      encoding: 'base64'
    });

    const pageHeightPx = Math.ceil(pageHeight) || 5000;
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" 
     xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 ${VIEWPORT_WIDTH} ${pageHeightPx}"
     width="${VIEWPORT_WIDTH}"
     height="${pageHeightPx}">
  <title>Zeo App - Landing Page Mockup</title>
  <desc>Mockup estático da landing page Zeo App - Análise estrutural de infraestrutura de telecomunicações</desc>
  <image 
    width="${VIEWPORT_WIDTH}" 
    height="${pageHeightPx}"
    xlink:href="data:image/png;base64,${screenshot}"
    preserveAspectRatio="xMidYMin slice"/>
</svg>`;

    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, svgContent, 'utf-8');

    console.log('✅ Mockup SVG exportado com sucesso!');
    console.log(`   Arquivo: ${OUTPUT_FILE}`);
    console.log(`   Dimensões: ${VIEWPORT_WIDTH} x ${pageHeightPx}px\n`);

  } finally {
    await browser.close();
  }
}

captureMockup().catch(err => {
  console.error('❌ Erro ao exportar mockup:', err.message);
  console.error('\nCertifique-se de que o servidor está rodando (pnpm dev) antes de executar este script.');
  process.exit(1);
});
