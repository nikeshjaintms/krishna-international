const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const targets = [
  // Cotton Round Neck variants
  'Cotton-Round-Neck.jpg', 'cr1.png', 'cr2.png', 'cr3.png',
  // Polyester Cotton Round Neck variants  
  'Polyester-Cotton-Round-Neck.jpg', 'pc1 (1).png', 'pc1 (2).png', 'pc1 (3).png', 'pc1 (4).png', 'pc1 (5).png', 'pc5.png',
  // Cotton Pique Polo variants
  'Cotton-Pique-Polo.jpg', 'cotton pique polo.png', 'cp1.png', 'cp2.png', 'cp3.png', 'cp4.png',
];

async function makeGrid() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const cols = 5;
  const rows = Math.ceil(targets.length / cols);
  const W = 130, H = 160;
  const grid = new Jimp({ width: cols * W, height: rows * H, color: 0xffffffff });

  let i = 0;
  for (const file of targets) {
    try {
      const img = await Jimp.read(path.join(imagesDir, file));
      img.cover({ w: W, h: H - 25 });
      grid.composite(img, (i % cols) * W, Math.floor(i / cols) * H);
      console.log(i + ': ' + file);
    } catch(e) { console.log('ERR: ' + file); }
    i++;
  }
  await grid.write('check-grid.jpg');
  console.log('Saved check-grid.jpg');
}
makeGrid();
