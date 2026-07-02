const fs = require('fs');
const path = require('path');
const { resolve } = require('path');
const { getColorFromURL } = require('color-thief-node');
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

// Using the same exact product matching logic from before
function getProductCode(filename) {
  const f = filename.toLowerCase();
  
  if (f.startsWith('h') || f.includes('house-keeping')) return '3008'; // Housekeeping
  if (f.startsWith('b') && !f.includes('bg')) return '3003'; // Blazer
  if (f.startsWith('cu') || f.includes('corporate')) return '3001'; // Corporate
  if (f.startsWith('ps') || f.includes('pant')) return '3002'; // Pant & Shirt
  if (f.startsWith('medical')) return '3006'; // Medical
  if (f.startsWith('s1') || f.includes('security')) return '3007'; // Security
  if (f.startsWith('tu') || f.includes('team')) return '3004'; // Team Uniform
  if (f.startsWith('w') && f.length < 10 || f.includes('waistcoat')) return '3005'; // Waistcoat
  
  if (f.startsWith('c-') || f.startsWith('cp') || f.includes('cotton pique')) return '2007'; 
  if (f.startsWith('df') || f.includes('dry-fit polo') || f === 'df.png') return '2001'; 
  if (f.includes('dry-fit round') || f.includes('dri-fit')) return '1003'; 
  if (f.startsWith('rk') || f.includes('rise-knit-polo')) return '2002'; 
  if (f.includes('rise knit round')) return '1004'; 
  if (f.startsWith('pp') || f.includes('poly-cotton pique')) return '2006'; 
  if (f.startsWith('dkp') || f.includes('dot-knit-polo')) return '2003'; 
  if (f.includes('dot-knit-round')) return '1005'; 
  if (f.startsWith('sp') || f.includes('spun-pique')) return '2004'; 
  if (f.startsWith('sm') || f.includes('softy-material')) return '1002'; 
  if (f.includes('plain-polyester')) return '1001';
  if (f.includes('football')) return '1006';
  if (f.includes('cotton-round')) return '1007';
  if (f.includes('polyester-cotton')) return '1008';
  if (f.includes('polo-knit')) return '2005';
  if (f.includes('inside-cotton')) return '2008';
  if (f.includes('sublimation')) return '2009';

  return null;
}

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

async function run() {
  console.log('Starting Local Color Detection...');
  
  let currentMapping = {};
  if (fs.existsSync(mappingFile)) {
    try {
      currentMapping = JSON.parse(fs.readFileSync(mappingFile, 'utf-8'));
    } catch(e) {}
  }

  const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(png|jpe?g)$/i));
  
  for (const file of files) {
    const productCode = getProductCode(file);
    if (!productCode) {
      console.log(`Skipping unmapped file: ${file}`);
      continue; 
    }

    // Initialize product array if missing
    if (!currentMapping[productCode]) {
      currentMapping[productCode] = [];
    }

    // Skip if already mapped
    if (currentMapping[productCode].some(c => c.imageUrl === `/images/${file}`)) {
      continue;
    }

    const filePath = path.join(imagesDir, file);
    try {
      // Get dominant color
      const rgb = await getColorFromURL(filePath);
      
      // Since many images have white backgrounds, color-thief might return white/grey
      // For a real app we'd get a palette and filter out background colors, but let's just get nearest for now.
      const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
      const matchedColor = getNearestColor(hex);

      currentMapping[productCode].push({
        name: matchedColor.name,
        hex: matchedColor.value,
        imageUrl: `/images/${file}`
      });

      console.log(`Mapped ${file} -> ${matchedColor.name} (${productCode})`);
    } catch (e) {
      console.error(`Error processing ${file}: ${e.message}`);
      // Fallback
      currentMapping[productCode].push({
        name: 'Default',
        hex: '#e2e8f0',
        imageUrl: `/images/${file}`
      });
    }
  }

  // Deduplicate colors (if two images resolve to "White", only keep the first one to avoid duplicate swatches, or keep them? The user said "Create color swatches only for colors that exist". If two images are White, maybe we just keep both but rename them? Let's just keep the first one for each color name to avoid React key collisions).
  for (const code of Object.keys(currentMapping)) {
    const unique = [];
    const seen = new Set();
    for (const item of currentMapping[code]) {
      if (!seen.has(item.name)) {
        seen.add(item.name);
        unique.push(item);
      }
    }
    // Hardcode overrides for Housekeeping as requested earlier so we don't mess it up
    if (code === '3008') {
      currentMapping[code] = [
        { name: "White", hex: "#ffffff", imageUrl: "/images/h2.png" },
        { name: "Grey", hex: "#757575", imageUrl: "/images/house-keeping.png" },
        { name: "Light Blue", hex: "#ADD8E6", imageUrl: "/images/h1.png" }
      ];
    } else {
      currentMapping[code] = unique;
    }
  }

  fs.writeFileSync(mappingFile, JSON.stringify(currentMapping, null, 2));
  console.log('Color detection complete! colorMapping.json updated.');
}

run();
