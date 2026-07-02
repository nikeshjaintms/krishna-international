const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

async function createGrid() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(png|jpe?g)$/i));
  
  const cols = 10;
  const rows = Math.ceil(files.length / cols);
  const cellWidth = 100;
  const cellHeight = 120;
  
  const grid = new Jimp({ width: cols * cellWidth, height: rows * cellHeight, color: 0xffffffff });
  
  let i = 0;
  for (const file of files) {
    try {
      const imgPath = path.join(imagesDir, file);
      const img = await Jimp.read(imgPath);
      img.cover({ w: cellWidth, h: cellHeight - 20 });
      
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      grid.composite(img, col * cellWidth, row * cellHeight);
      console.log(i + ": " + file);
    } catch (e) {
      console.log("Error on " + file + ": " + e.message);
    }
    i++;
  }
  
  const outPath = path.join(process.cwd(), 'grid.jpg');
  await grid.write(outPath);
  console.log('Grid saved to ' + outPath);
}

createGrid();
