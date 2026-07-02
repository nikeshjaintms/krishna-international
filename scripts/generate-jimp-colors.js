const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');
const nearestColor = require('nearest-color');

// Predefined palette for mapping dominant colors to human readable uniform colors
const colors = {
  'White': '#ffffff',
  'Black': '#111111',
  'Navy Blue': '#1a237e',
  'Light Blue': '#add8e6',
  'Blue': '#0000ff',
  'Red': '#c62828',
  'Grey': '#757575',
  'Green': '#2e7d32',
  'Yellow': '#fbc02d',
  'Orange': '#ef6c00',
  'Purple': '#6a1b9a',
  'Pink': '#c2185b',
  'Maroon': '#800000',
  'Teal': '#008080',
  'Brown': '#795548',
  'Beige': '#f5f5dc',
  'Dark Grey': '#424242'
};

const getNearestColor = nearestColor.from(colors);

const imagesDir = path.join(process.cwd(), 'public', 'images');
const mappingFile = path.join(process.cwd(), 'src', 'data', 'colorMapping.json');

function getProductCode(filename) {
  const f = filename.toLowerCase();
  
  if (f.startsWith('h') || f.includes('house-keeping')) return '3008';
  if (f.startsWith('b') && !f.includes('bg')) return '3003';
  if (f.startsWith('cu') || f.includes('corporate')) return '3001';
  if (f.startsWith('ps') || f.includes('pant')) return '3002';
  if (f.startsWith('medical')) return '3006';
  if (f.startsWith('s1') || f.includes('security')) return '3007';
  if (f.startsWith('tu') || f.includes('team')) return '3004';
  if (f.startsWith('w') && f.length < 10 || f.includes('waistcoat')) return '3005';
  
  if (f.startsWith('c-') || f.startsWith('cp') || f.includes('cotton pique')) return '2007'; 
  if (f.startsWith('df') || f.includes('dry-fit polo') || f === 'df.png') return '2001'; 
  if (f.includes('dry-fit round') || f.includes('dri-fit')) return '1003'; 
  if (f.startsWith('rk') || f.includes('rise-knit-polo')) return '2002'; 
  if (f.includes('rise knit round')) return '1004'; 
  if (f.startsWith('pp') || f.includes('poly-cotton pique') || f.startsWith('polo')) return '2006'; 
  if (f.startsWith('dkp') || f.includes('dot-knit-polo')) return '2003'; 
  if (f.includes('dot-knit-round')) return '1005'; 
  if (f.startsWith('sp') || f.includes('spun-pique')) return '2004'; 
  if (f.startsWith('sm') || (f.includes('softy-material') && !f.includes('polo'))) return '1002'; 
  if (f.includes('plain-polyester') || f.startsWith('tshirt-')) return '1001';
  if (f.startsWith('f') && f.length < 10 || f.includes('football')) return '1006';
  if (f.startsWith('cr') || f.includes('cotton-round')) return '1007';
  if (f.startsWith('pc') || f.includes('polyester-cotton')) return '1008';
  if (f.includes('polo-knit')) return '2005';
  if (f.startsWith('ic') || f.includes('inside-cotton')) return '2008';
  if (f.includes('sublimation')) return '2009';

  return null;
}

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

async function run() {
  console.log('Starting Local Color Detection using Jimp...');
  
  let currentMapping = {};
  const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(png|jpe?g)$/i));
  
  for (const file of files) {
    const code = getProductCode(file);
    if (!code) continue;

    if (code === '3008') {
      // Keep hardcoded housekeeping mapping intact
      currentMapping['3008'] = [
        { name: "White", hex: "#ffffff", imageUrl: "/images/h2.png" },
        { name: "Grey", hex: "#757575", imageUrl: "/images/house-keeping.png" },
        { name: "Light Blue", hex: "#ADD8E6", imageUrl: "/images/h1.png" }
      ];
      continue;
    }

    if (!currentMapping[code]) currentMapping[code] = [];

    const filePath = path.join(imagesDir, file);
    try {
      const image = await Jimp.read(filePath);
      
      // Sample the pixel right at the center of the image, which is usually the chest of the uniform
      const x = Math.floor(image.bitmap.width / 2);
      // Move slightly higher than true center (chest area)
      const y = Math.floor(image.bitmap.height * 0.4);
      
      const hexNum = image.getPixelColor(x, y);
      const rgba = {
        r: (hexNum >> 24) & 255,
        g: (hexNum >> 16) & 255,
        b: (hexNum >> 8) & 255,
        a: hexNum & 255
      };
      const hex = rgbToHex(rgba.r, rgba.g, rgba.b);
      
      const matchedColor = getNearestColor(hex);

      // Filter out duplicate colors for the same product to prevent huge lists of the same swatch
      const alreadyHasColor = currentMapping[code].find(c => c.name === matchedColor.name);
      if (!alreadyHasColor) {
        currentMapping[code].push({
          name: matchedColor.name,
          hex: matchedColor.value,
          imageUrl: `/images/${file}`
        });
        console.log(`Mapped ${file} -> ${matchedColor.name} (${code})`);
      }
    } catch (e) {
      console.error(`Error processing ${file}: ${e.message}`);
    }
  }

  // Ensure every product at least has the Default image if no other colors were found
  // Handled by our fallback system anyway

  fs.writeFileSync(mappingFile, JSON.stringify(currentMapping, null, 2));
  console.log('Jimp local color detection complete! colorMapping.json updated.');
}

run();
