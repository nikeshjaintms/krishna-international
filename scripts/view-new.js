const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const targets = [
  'Dry-Fit-Polo.jpg', 'Dry-Fit-Polo1.png', 'Dry-Fit-Polo2.png', 'Dry-Fit-Polo3.png', 'Dry-Fit-Polo4.png',
  'Polo-Knit-Materia.png', 'Polo-Knit-Materia1.png', 'Polo-Knit-Materia2.png', 'Polo-Knit-Materia3.png', 'Polo-Knit-Materia4.png',
  'Dot-Knit-Round-Neck.jpg', 'Dot-Knit-Round-Neck1.png', 'Dot-Knit-Round-Neck2.png', 'Dot-Knit-Round-Neck3.png', 'Dot-Knit-Round-Neck4.png',
  'Plain-Polyester-Round-Neck.jpg', 'Plain-Polyester-Round-Neck1.png', 'Plain-Polyester-Round-Neck2.png', 'Plain-Polyester-Round-Neck4.png', 'Plain-Polyester-Round-Neck5.png',
];

async function makeGrid() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const cols = 5;
  const rows = Math.ceil(targets.length / cols);
  const W = 120, H = 140;
  const grid = new Jimp({ width: cols * W, height: rows * H, color: 0xffffffff });

  let i = 0;
  for (const file of targets) {
    try {
      const img = await Jimp.read(path.join(imagesDir, file));
      img.cover({ w: W, h: H - 20 });
      grid.composite(img, (i % cols) * W, Math.floor(i / cols) * H);
      console.log(i + ': ' + file);
    } catch(e) { console.log('ERR: ' + file + ' - ' + e.message); }
    i++;
  }
  await grid.write('new-products-grid.jpg');
  console.log('Saved new-products-grid.jpg');
}
makeGrid();
