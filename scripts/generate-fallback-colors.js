const fs = require('fs');
const path = require('path');

const colorsList = [
  { name: "Navy Blue", hex: "#1a237e" },
  { name: "White", hex: "#ffffff" },
  { name: "Red", hex: "#c62828" },
  { name: "Black", hex: "#111111" },
  { name: "Grey", hex: "#757575" },
  { name: "Green", hex: "#2e7d32" },
  { name: "Yellow", hex: "#fbc02d" }
];

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
  if (f.startsWith('sm') || f.includes('softy-material')) return '1002'; 
  if (f.includes('plain-polyester') || f.startsWith('tshirt-')) return '1001';
  if (f.startsWith('f') && f.length < 10 || f.includes('football')) return '1006';
  if (f.startsWith('cr') || f.includes('cotton-round')) return '1007';
  if (f.startsWith('pc') || f.includes('polyester-cotton')) return '1008';
  if (f.includes('polo-knit')) return '2005';
  if (f.startsWith('ic') || f.includes('inside-cotton')) return '2008';
  if (f.includes('sublimation')) return '2009';

  return null;
}

function run() {
  console.log('Generating Fallback Color Mapping...');
  
  let currentMapping = {};
  const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(png|jpe?g)$/i));
  
  // Group files by product code
  const productFiles = {};
  for (const file of files) {
    const code = getProductCode(file);
    if (code) {
      if (!productFiles[code]) productFiles[code] = [];
      productFiles[code].push(file);
    }
  }

  // Assign colors to grouped files
  for (const [code, fileList] of Object.entries(productFiles)) {
    // Preserve exact Housekeeping mapping we validated
    if (code === '3008') {
      currentMapping[code] = [
        { name: "White", hex: "#ffffff", imageUrl: "/images/h2.png" },
        { name: "Grey", hex: "#757575", imageUrl: "/images/house-keeping.png" },
        { name: "Light Blue", hex: "#ADD8E6", imageUrl: "/images/h1.png" }
      ];
      continue;
    }

    currentMapping[code] = [];
    let colorIndex = 0;
    for (const file of fileList) {
      if (colorIndex < colorsList.length) {
        currentMapping[code].push({
          name: colorsList[colorIndex].name,
          hex: colorsList[colorIndex].hex,
          imageUrl: `/images/${file}`
        });
        colorIndex++;
      }
    }
  }

  fs.writeFileSync(mappingFile, JSON.stringify(currentMapping, null, 2));
  console.log('Done! colorMapping.json has been populated with dummy fallback colors.');
}

run();
