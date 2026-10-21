import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const iconsDir = path.join(root, 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

function getSvg(size) {
  const pad = size * 0.15;
  const stroke = Math.max(2, size * 0.035);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" rx="${size * 0.22}" fill="#FCF0DA"/>
    <path d="M${pad + size * 0.12} ${pad} C${pad + size * 0.12} ${pad * 0.8} ${pad + size * 0.18} ${pad * 0.7} ${pad + size * 0.22} ${pad * 0.7} H${size - pad - size * 0.22} C${size - pad - size * 0.18} ${pad * 0.7} ${size - pad - size * 0.12} ${pad * 0.8} ${size - pad - size * 0.12} ${pad} V${size - pad} L${size / 2} ${size - pad - size * 0.16} L${pad + size * 0.12} ${size - pad} Z" fill="#F2C46A" stroke="#4C4541" stroke-width="${stroke}" stroke-linejoin="round"/>
    <line x1="${size * 0.38}" y1="${size * 0.38}" x2="${size * 0.62}" y2="${size * 0.38}" stroke="#4C4541" stroke-width="${stroke}" stroke-linecap="round"/>
    <line x1="${size * 0.38}" y1="${size * 0.48}" x2="${size * 0.54}" y2="${size * 0.48}" stroke="#4C4541" stroke-width="${stroke}" stroke-linecap="round"/>
  </svg>`;
}

function getOgSvg() {
  const width = 1200;
  const height = 630;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <rect width="${width}" height="${height}" fill="#FCF0DA"/>
    <!-- Subtle sage border -->
    <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="24" fill="#FCF0DA" stroke="#AEAC78" stroke-width="4" stroke-opacity="0.4"/>
    
    <!-- Central Card -->
    <rect x="200" y="100" width="800" height="430" rx="20" fill="#FFFFFF" stroke="#AEAC78" stroke-width="2" stroke-opacity="0.3"/>
    
    <!-- Bookmark Logo -->
    <path d="M260 160 C260 150 268 140 280 140 H340 C352 140 360 150 360 160 V260 L310 230 L260 260 Z" fill="#F2C46A" stroke="#4C4541" stroke-width="6" stroke-linejoin="round"/>
    <line x1="280" y1="180" x2="330" y2="180" stroke="#4C4541" stroke-width="5" stroke-linecap="round"/>
    <line x1="280" y1="202" x2="318" y2="202" stroke="#4C4541" stroke-width="5" stroke-linecap="round"/>
    
    <!-- App Title -->
    <text x="390" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="800" fill="#4C4541">SavePrompt</text>
    <text x="390" y="255" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" fill="#AEAC78">Minimalist AI Prompt Saver</text>
    
    <!-- Description -->
    <text x="260" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="500" fill="#4C4541">Instantly save, organize &amp; copy your best AI prompts.</text>
    <text x="260" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="#4C4541" fill-opacity="0.75">100% Client-Side • Offline PWA • Zero Tracking • Complete Local Privacy</text>
    
    <!-- Badges -->
    <rect x="260" y="430" width="130" height="40" rx="20" fill="#F2C46A"/>
    <text x="325" y="456" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#4C4541" text-anchor="middle">OFFLINE PWA</text>
    
    <rect x="410" y="430" width="140" height="40" rx="20" fill="#AEAC78" fill-opacity="0.2" stroke="#AEAC78" stroke-width="1.5"/>
    <text x="480" y="456" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#4C4541" text-anchor="middle">7 LANGUAGES</text>
    
    <rect x="570" y="430" width="160" height="40" rx="20" fill="#AEAC78" fill-opacity="0.2" stroke="#AEAC78" stroke-width="1.5"/>
    <text x="650" y="456" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#4C4541" text-anchor="middle">100% PRIVATE</text>
  </svg>`;
}

async function generate() {
  await sharp(Buffer.from(getSvg(192))).png().toFile(path.join(iconsDir, 'icon-192x192.png'));
  await sharp(Buffer.from(getSvg(512))).png().toFile(path.join(iconsDir, 'icon-512x512.png'));
  await sharp(Buffer.from(getSvg(180))).png().toFile(path.join(root, 'public', 'apple-touch-icon.png'));
  await sharp(Buffer.from(getSvg(32))).png().toFile(path.join(root, 'public', 'favicon-32x32.png'));
  await sharp(Buffer.from(getSvg(16))).png().toFile(path.join(root, 'public', 'favicon-16x16.png'));
  await sharp(Buffer.from(getOgSvg())).png().toFile(path.join(root, 'public', 'og-image.png'));
  console.log('✅ Generated all icons and OG image');
}

generate().catch(console.error);
