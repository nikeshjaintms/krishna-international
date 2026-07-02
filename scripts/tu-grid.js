const path = require('path');
const { Jimp } = require('jimp');

const targets = ['Team-Uniform.png', 'tu1 (1).png', 'tu1 (2).png', 'tu1 (3).png', 'tu1 (4).png'];

async function makeGrid() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const W = 150, H = 170;
  const grid = new Jimp({ width: targets.length * W, height: H, color: 0xffffffff });
  for (let i = 0; i < targets.length; i++) {
    try {
      const img = await Jimp.read(path.join(imagesDir, targets[i]));
      img.cover({ w: W, h: H - 20 });
      grid.composite(img, i * W, 0);
      console.log(i + ': ' + targets[i]);
    } catch(e) { console.log('ERR: ' + targets[i]); }
  }
  await grid.write('tu-grid.jpg');
  console.log('Saved');
}
makeGrid();
