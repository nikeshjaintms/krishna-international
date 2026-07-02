const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const targets = [
  'PS1.png', 'PS2.png', 'PS3.png', 'PS4.png'
];

async function makeGrid() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const cols = 4;
  const rows = Math.ceil(targets.length / cols);
  const W = 150, H = 180;
  const grid = new Jimp({ width: cols * W, height: rows * H, color: 0xffffffff });

  let i = 0;
  for (const file of targets) {
    try {
      const img = await Jimp.read(path.join(imagesDir, file));
      img.cover({ w: W, h: H - 30 });
      grid.composite(img, (i % cols) * W, Math.floor(i / cols) * H);
      console.log(i + ': ' + file);
    } catch(e) { console.log('ERR: ' + file); }
    i++;
  }
  await grid.write('check-ps.jpg');
  console.log('Saved check-ps.jpg');
}
makeGrid();
