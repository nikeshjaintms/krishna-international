const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const targets = [
  'Cotton-Pique-Polo.jpg',
  'cotton pique polo.png',
  'cp1.png',
  'cp2.png',
  'cp3.png',
  'cp4.png'
];

async function makeGrid() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const cols = 3;
  const rows = Math.ceil(targets.length / cols);
  const W = 200, H = 250;
  const grid = new Jimp({ width: cols * W, height: rows * H, color: 0xffffffff });

  let i = 0;
  for (const file of targets) {
    try {
      const img = await Jimp.read(path.join(imagesDir, file));
      img.cover({ w: W, h: H - 30 });
      grid.composite(img, (i % cols) * W, Math.floor(i / cols) * H);
      
      // Print the index and name on the image? We'll just rely on the layout
      console.log(i + ': ' + file);
    } catch(e) { console.log('ERR: ' + file); }
    i++;
  }
  await grid.write('cp-grid.jpg');
  console.log('Saved cp-grid.jpg');
}
makeGrid();
