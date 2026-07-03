import { Jimp } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, 'images');

// ── Before: remove sparkle watermark then resize ──────────────────────────────
// Sparkle ✦ confirmed at ~(1110, 834) in the 1195×896 original (93%, 93%).
// Strategy: horizontal clone-stamp from clean concrete 180px to the left.
const img = await Jimp.read(path.join(dir, 'Before.png'));
const data = img.bitmap.data;
const W = img.bitmap.width;   // 1195
const H = img.bitmap.height;  // 896

function idx(x, y) { return (y * W + x) * 4; }
function clamp(v)   { return Math.max(0, Math.min(255, v)); }

// Build a texture palette from a large clean concrete region
// (far enough from sparkle, same driveway surface)
const palette = [];
for (let y = 720; y < 820; y++) {
  for (let x = 820; x < 980; x++) {
    const i = idx(x, y);
    palette.push([data[i], data[i+1], data[i+2]]);
  }
}
console.log(`Texture palette: ${palette.length} samples`);

// Fill bottom-right corner generously — covers sparkle + all JPEG ringing
// Start point chosen so the boundary falls in the plain driveway, not at any edge of car
const TX1 = 960, TY1 = 730, TX2 = W, TY2 = H;

for (let ty = TY1; ty < TY2; ty++) {
  for (let tx = TX1; tx < TX2; tx++) {
    // Pick a random concrete sample from the palette
    const p = palette[Math.floor(Math.random() * palette.length)];
    const n = () => Math.round((Math.random() - 0.5) * 10);
    const ti = idx(tx, ty);
    data[ti]   = clamp(p[0] + n());
    data[ti+1] = clamp(p[1] + n());
    data[ti+2] = clamp(p[2] + n());
  }
}

// Resize to exactly match after.jpg (1024×768)
img.resize({ w: 1024, h: 768 });
await img.write(path.join(dir, 'before.jpg'));
console.log('✓ before.jpg — sparkle removed, resized 1195×896 → 1024×768');

// ── After: PNG → JPEG ────────────────────────────────────────────────────────
const after = await Jimp.read(path.join(dir, 'After.png'));
await after.write(path.join(dir, 'after.jpg'));
console.log('✓ after.jpg — converted from PNG');
