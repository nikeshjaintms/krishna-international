import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const genai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const imagesDir = path.join(process.cwd(), 'public', 'images');
const mappingFile = path.join(process.cwd(), 'src', 'data', 'colorMapping.json');

// Map filename patterns to Product Codes
function getProductCode(filename: string): string | null {
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
  if (f.startsWith('df') || f.includes('dry-fit polo')) return '2001'; 
  if (f.includes('dry-fit round')) return '1003'; 
  if (f.startsWith('rk') || f.includes('rise-knit-polo')) return '2002'; 
  if (f.includes('rise knit round')) return '1004'; 
  if (f.startsWith('pp') || f.includes('poly-cotton pique')) return '2006'; 
  if (f.startsWith('dkp') || f.includes('dot-knit-polo')) return '2003'; 
  if (f.includes('dot-knit-round')) return '1005'; 
  if (f.startsWith('sp') || f.includes('spun-pique')) return '2004'; 
  if (f.startsWith('sm') || f.includes('softy-material')) return '1002'; 

  // Default fallbacks or unmapped
  return null;
}

// Ensure data directory exists
if (!fs.existsSync(path.join(process.cwd(), 'src', 'data'))) {
  fs.mkdirSync(path.join(process.cwd(), 'src', 'data'), { recursive: true });
}

async function analyzeImage(filePath: string) {
  const extension = path.extname(filePath).toLowerCase();
  const mimeType = extension === '.jpg' || extension === '.jpeg' ? 'image/jpeg' : 'image/png';
  
  const imageData = fs.readFileSync(filePath).toString("base64");
  
  try {
    const response = await genai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: `Analyze this uniform/garment image. 
Return ONLY a raw JSON object with two fields:
1. "colorName": A simple human-readable color name (e.g. "White", "Navy Blue", "Light Blue", "Red", "Grey", "Black", "Charcoal").
2. "hex": A representative hex code (e.g. "#FFFFFF").
Do not include any markdown formatting, just the raw JSON.` },
            {
              inlineData: {
                data: imageData,
                mimeType,
              }
            }
          ]
        }
      ]
    });

    let text = response.text || "{}";
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(text);
  } catch (error) {
    console.error(`Error analyzing ${filePath}:`, error);
    return null;
  }
}

async function run() {
  console.log('Starting Color Detection...');
  
  let currentMapping: any = {};
  if (fs.existsSync(mappingFile)) {
    try {
      currentMapping = JSON.parse(fs.readFileSync(mappingFile, 'utf-8'));
    } catch(e) {}
  }

  const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(png|jpe?g)$/i));
  
  for (const file of files) {
    const productCode = getProductCode(file);
    if (!productCode) continue; // Skip unmapped files

    // Skip if already mapped (to save API calls during dev)
    if (currentMapping[productCode] && currentMapping[productCode].some((c: any) => c.imageUrl === `/images/${file}`)) {
      continue;
    }

    console.log(`Analyzing ${file} for product ${productCode}...`);
    const colorData = await analyzeImage(path.join(imagesDir, file));
    
    if (colorData && colorData.colorName) {
      if (!currentMapping[productCode]) {
        currentMapping[productCode] = [];
      }
      
      currentMapping[productCode].push({
        name: colorData.colorName,
        hex: colorData.hex,
        imageUrl: `/images/${file}`
      });

      // Write incrementally in case of crash
      fs.writeFileSync(mappingFile, JSON.stringify(currentMapping, null, 2));
      console.log(`Mapped ${file} -> ${colorData.colorName} (${productCode})`);
      
      // Delay to avoid aggressive rate limiting
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  console.log('Color detection complete!');
}

run();
