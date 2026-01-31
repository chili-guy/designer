#!/usr/bin/env node
/**
 * Metodologia: Extração de Conteúdo DOM para SVG Vetorial
 * 
 * Converte todo o conteúdo visível da página em elementos SVG vetoriais:
 * - Textos → <text> com posição e estilo
 * - Imagens → <image> (embed base64 quando possível)
 * - Backgrounds → <rect> com cores
 * - Estrutura preservada em <g> groups
 * 
 * Uso: pnpm run export:content-svg
 * Requer: servidor em http://localhost:5173 (pnpm dev)
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'landing-page-content.svg');
const PAGE_URL = process.env.MOCKUP_URL || 'http://localhost:5173';
const VIEWPORT_WIDTH = 1440;
const VIEWPORT_HEIGHT = 900;

const EXTRACT_SCRIPT = () => {
  const isVisible = (el) => {
    if (!el) return false;
    const style = window.getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return style.display !== 'none' &&
           style.visibility !== 'hidden' &&
           parseFloat(style.opacity) > 0.01 &&
           rect.width > 0 && rect.height > 0;
  };

  const rgbToHex = (rgb) => {
    if (!rgb || rgb === 'transparent') return null;
    const m = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!m) return rgb.startsWith('#') ? rgb : null;
    return '#' + [1,2,3].map(i => ('0'+parseInt(m[i]).toString(16)).slice(-2)).join('');
  };

  const getBgColor = (el) => {
    const style = window.getComputedStyle(el);
    const bg = style.backgroundColor;
    if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') return null;
    return rgbToHex(bg);
  };

  const escapeXml = (str) => {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  const collected = { texts: [], rects: [], images: [], pageWidth: 0, pageHeight: 0 };
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const scrollX = window.scrollX || document.documentElement.scrollLeft;

  const hasBlockChildren = (el) => {
    for (const c of el.children) {
      const s = window.getComputedStyle(c);
      if (s.display !== 'none' && (['block','flex','grid','table'].includes(s.display) || s.position === 'absolute')) return true;
    }
    return false;
  };

  const walkText = (el) => {
    if (!isVisible(el)) return;
    if (hasBlockChildren(el)) {
      for (const child of el.children) walkText(child);
      return;
    }
    const text = el.innerText?.trim() || el.textContent?.trim();
    if (text && text.length < 1000) {
      const style = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      collected.texts.push({
        text, x: rect.left + scrollX, y: rect.bottom + scrollY - 2,
        width: rect.width, height: rect.height,
        fontSize: parseFloat(style.fontSize) || 16,
        fontWeight: style.fontWeight,
        fontFamily: (style.fontFamily || 'sans-serif').split(',')[0].replace(/['"]/g, ''),
        color: rgbToHex(style.color) || '#000000',
        tag: el.tagName
      });
    }
  };

  const walkElements = (el) => {
    if (!el || !isVisible(el)) return;
    
    const rect = el.getBoundingClientRect();
    const docY = rect.top + scrollY;
    const docX = rect.left + scrollX;
    const style = window.getComputedStyle(el);

    if (el.tagName === 'IMG' && el.src) {
      collected.images.push({
        src: el.currentSrc || el.src,
        x: docX, y: docY, width: rect.width, height: rect.height,
        alt: el.alt || ''
      });
      return;
    }

    const bgColor = getBgColor(el);
    if (bgColor && rect.width > 2 && rect.height > 2) {
      const borderColor = style.borderColor && style.borderColor !== 'transparent' ? rgbToHex(style.borderColor) : null;
      collected.rects.push({
        x: docX, y: docY, width: rect.width, height: rect.height,
        fill: bgColor, stroke: borderColor,
        opacity: parseFloat(style.opacity) || 1
      });
    }

    walkText(el);
    for (const child of el.children) {
      walkElements(child);
    }
  };

  document.querySelectorAll('script, style, noscript, [aria-hidden="true"]').forEach(el => el.style.setProperty('display', 'none', 'important'));
  walkElements(document.body);

  const seen = new Set();
  collected.texts = collected.texts.filter(t => {
    const key = `${Math.round(t.x)}|${Math.round(t.y)}|${t.text.slice(0,50)}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const vw = 1440;
  collected.pageWidth = Math.max(document.documentElement.scrollWidth, vw);
  collected.pageHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  return collected;
};

async function extractToSvg() {
  console.log('🚀 Extraindo conteúdo para SVG vetorial...\n');
  console.log('   Metodologia: DOM → elementos vetoriais');
  console.log('   - Textos como <text>');
  console.log('   - Backgrounds como <rect>');
  console.log('   - Imagens como <image>\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({ width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT });
    await page.goto(PAGE_URL, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 2500));

    await page.evaluate(() => {
      const s = document.createElement('style');
      s.textContent = '* { animation: none !important; transition: none !important; }';
      document.head.appendChild(s);
    });
    await new Promise(r => setTimeout(r, 300));

    const data = await page.evaluate(EXTRACT_SCRIPT);

    const imagesWithData = await page.evaluate(async (imgs) => {
      const results = [];
      for (const img of imgs) {
        if (img.src.startsWith('data:')) {
          results.push({ ...img, dataUrl: img.src });
        } else {
          try {
            const r = await fetch(img.src);
            const blob = await r.blob();
            const dataUrl = await new Promise((res, rej) => {
              const reader = new FileReader();
              reader.onloadend = () => res(reader.result || null);
              reader.onerror = rej;
              reader.readAsDataURL(blob);
            });
            results.push({ ...img, dataUrl: dataUrl });
          } catch {
            results.push({ ...img, dataUrl: null });
          }
        }
      }
      return results;
    }, data.images);

    const svgParts = [];
    const escapeXml = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    svgParts.push(`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 ${data.pageWidth} ${data.pageHeight}"
     width="${data.pageWidth}" height="${data.pageHeight}">
  <defs>
    <style>
      .text { font-family: system-ui, -apple-system, sans-serif; }
      .rect { }
    </style>
  </defs>
  <title>Zeo App - Conteúdo Extraído</title>
  <rect width="100%" height="100%" fill="#ffffff"/>`);

    data.rects.sort((a, b) => a.y - b.y).forEach(r => {
      const fill = escapeXml(r.fill);
      const stroke = r.stroke ? ` stroke="${escapeXml(r.stroke)}"` : '';
      svgParts.push(`  <rect x="${r.x}" y="${r.y}" width="${r.width}" height="${r.height}" fill="${fill}"${stroke} opacity="${r.opacity}" class="rect"/>`);
    });

    imagesWithData.forEach(img => {
      let href = img.dataUrl || '';
      if (!href && (img.src.startsWith('http') || img.src.startsWith('/'))) {
        href = img.src.startsWith('/') ? `${PAGE_URL.replace(/\/$/, '')}${img.src}` : img.src;
      }
      if (href) {
        const safeHref = href.startsWith('data:') ? href : escapeXml(href);
        svgParts.push(`  <image x="${img.x}" y="${img.y}" width="${img.width}" height="${img.height}" href="${safeHref}" preserveAspectRatio="xMidYMid meet"/>`);
      }
    });

    data.texts.forEach(t => {
      const lines = t.text.split(/\n/).filter(Boolean);
      const yBase = t.y;
      lines.forEach((line, i) => {
        const y = yBase + (i * (t.fontSize * 1.2));
        const x = t.x;
        const weight = parseInt(t.fontWeight) >= 600 ? 'bold' : 'normal';
        svgParts.push(`  <text x="${x}" y="${y}" font-size="${t.fontSize}" font-weight="${weight}" font-family="${escapeXml(t.fontFamily)}" fill="${escapeXml(t.color)}" class="text">${escapeXml(line)}</text>`);
      });
    });

    svgParts.push('</svg>');

    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, svgParts.join('\n'), 'utf-8');

    console.log('✅ Conteúdo extraído com sucesso!');
    console.log(`   Arquivo: ${OUTPUT_FILE}`);
    console.log(`   - ${data.rects.length} elementos de fundo`);
    console.log(`   - ${data.texts.length} blocos de texto`);
    console.log(`   - ${data.images.length} imagens`);
    console.log(`   Dimensões: ${data.pageWidth} x ${data.pageHeight}px\n`);

  } finally {
    await browser.close();
  }
}

extractToSvg().catch(err => {
  console.error('❌ Erro:', err.message);
  process.exit(1);
});
