const fs = require('fs');

// STRICT abbreviation-based mapping
// User saved images with first-letter abbreviations of each product name word
// NEVER mix images between products

const colorHex = {
  'White': '#ffffff',
  'Black': '#111111',
  'Navy Blue': '#1a237e',
  'Light Blue': '#add8e6',
  'Blue': '#1565c0',
  'Red': '#c62828',
  'Grey': '#9e9e9e',
  'Dark Grey': '#424242',
  'Light Grey': '#d3d3d3',
  'Green': '#2e7d32',
  'Yellow': '#fbc02d',
  'Orange': '#ef6c00',
  'Maroon': '#800000',
  'Teal': '#008080',
  'Brown': '#795548',
};

const mapping = {

  // ─── ROUND NECK ───────────────────────────────────────────────
  // 1001 Plain Polyester Round Neck
  // "tshirt" prefix = plain t-shirt variants
  '1001': [
    { name: 'White',    image: 'Plain-Polyester-Round-Neck.jpg' },
    { name: 'Navy Blue',image: 'tshirt-1.png' },
    { name: 'Dark Grey',image: 'tshirt-2.png' },
    { name: 'Teal',     image: 'tshirt-3.png' },
    { name: 'Light Blue',image: 'tshirt-4.png' },
    { name: 'Black',    image: 'tshirt-5.png' },
  ],

  // 1002 Softy Material Round Neck
  // "sm" = Softy Material
  '1002': [
    { name: 'Red',      image: 'Softy-Material-Round-Neck.jpg' },
    { name: 'Black',    image: 'sm1 (1).png' },
    { name: 'Navy Blue',image: 'sm1 (2).png' },
    { name: 'White',    image: 'sm3.png' },
    { name: 'Grey',     image: 'sm4.png' },
  ],

  // 1003 Dry-Fit Round Neck
  // "df" = Dry Fit, "Dri-Fit-T-Shirt" also belongs here
  '1003': [
    { name: 'Black',    image: 'Dry-fit Round-Neck.jpg' },
    { name: 'Grey',     image: 'Dri-Fit-T-Shirt.png' },
    { name: 'Dark Grey',image: 'df.png' },
    { name: 'White',    image: 'df1.png' },
    { name: 'Navy Blue',image: 'df2.png' },
    { name: 'Maroon',   image: 'df4.png' },
  ],

  // 1004 Rise Knit Round Neck
  // Only the main image — no abbreviation-matched variants found for this product
  '1004': [
    { name: 'Maroon',   image: 'Rise Knit Round Neck.jpg' },
  ],

  // 1005 Dot Knit Round Neck
  // Only the main image
  '1005': [
    { name: 'Navy Blue',image: 'Dot-Knit-Round-Neck.jpg' },
  ],

  // 1006 Football Knit Round Neck
  // "f" = Football
  '1006': [
    { name: 'Navy Blue',image: 'Football-Knit-Round-Neck.jpg' },
    { name: 'Maroon',   image: 'f3.png' },
    { name: 'Grey',     image: 'f4.png' },
  ],

  // 1007 Cotton Round Neck
  // "cr" = Cotton Round
  '1007': [
    { name: 'Red',      image: 'Cotton-Round-Neck.jpg' },
    { name: 'Dark Grey',image: 'cr1.png' },
    { name: 'Maroon',   image: 'cr2.png' },
    { name: 'Navy Blue',image: 'cr3.png' },
  ],

  // 1008 Polyester Cotton Round Neck
  // "pc" = Polyester Cotton
  '1008': [
    { name: 'Yellow',   image: 'Polyester-Cotton-Round-Neck.jpg' },
    { name: 'Grey',     image: 'pc1 (1).png' },
    { name: 'White',    image: 'pc1 (2).png' },
    { name: 'Navy Blue',image: 'pc1 (3).png' },
    { name: 'Maroon',   image: 'pc1 (4).png' },
    { name: 'Black',    image: 'pc1 (5).png' },
    { name: 'Red',      image: 'pc5.png' },
  ],

  // ─── POLO ─────────────────────────────────────────────────────
  // 2001 Dry Fit Polo
  // Main image only — "df" prefix belongs to Dry Fit Round Neck (1003)
  '2001': [
    { name: 'Light Blue',image: 'Dry-Fit-Polo.jpg' },
  ],

  // 2002 Rise Knit Polo
  // "rk" = Rise Knit (Polo)
  '2002': [
    { name: 'Black',    image: 'Rise-Knit-Polo.jpg' },
    { name: 'Navy Blue',image: 'rk1.png' },
    { name: 'Maroon',   image: 'rk2.png' },
    { name: 'White',    image: 'rk3.png' },
    { name: 'Grey',     image: 'rk4.png' },
  ],

  // 2003 Dot Knit Polo
  // "dkp" = Dot Knit Polo
  '2003': [
    { name: 'Yellow',   image: 'Dot-Knit-Polo.jpg' },
    { name: 'Navy Blue',image: 'dot-knit-polo.png' },
    { name: 'Black',    image: 'dkp1 (1).png' },
    { name: 'Dark Grey',image: 'dkp1 (2).png' },
    { name: 'Grey',     image: 'dkp1 (3).png' },
    { name: 'Maroon',   image: 'dkp1 (4).png' },
  ],

  // 2004 Spun Pique Polo
  // "sp" = Spun Pique
  '2004': [
    { name: 'Navy Blue',image: 'Spun-Pique-Polo.jpg' },
    { name: 'Black',    image: 'sp1.png' },
    { name: 'Grey',     image: 'sp2.png' },
    { name: 'White',    image: 'sp3.png' },
    { name: 'Red',      image: 'sp4.png' },
  ],

  // 2005 Polo Knit Material
  // "polo" = Polo Knit
  '2005': [
    { name: 'Black',    image: 'Polo-Knit-Materia.png' },
    { name: 'Red',      image: 'polo1.png' },
    { name: 'White',    image: 'polo2.png' },
    { name: 'Grey',     image: 'polo3.png' },
    { name: 'Maroon',   image: 'polo4.png' },
  ],

  // 2006 Poly Cotton Pique Polo
  // "pp" = Poly Pique
  '2006': [
    { name: 'Red',      image: 'Poly-Cotton Pique-Polo.png' },
    { name: 'Navy Blue',image: 'pp2.png' },
    { name: 'Grey',     image: 'pp3.png' },
    { name: 'Maroon',   image: 'pp4.png' },
    { name: 'Black',    image: 'pp5.png' },
  ],

  // 2007 Cotton Pique Polo
  // "cp" = Cotton Pique
  '2007': [
    { name: 'Red',      image: 'Cotton-Pique-Polo.jpg' },
    { name: 'Navy Blue',image: 'cp1.png' },
    { name: 'White',    image: 'cp2.png' },
    { name: 'Grey',     image: 'cp3.png' },
    { name: 'Maroon',   image: 'cp4.png' },
  ],

  // 2008 Inside Cotton Outside Dry-Fit Polo
  // "ic" = Inside Cotton
  '2008': [
    { name: 'Black',    image: 'Inside-Cotton-Outside-Dry-Fit Polo.png' },
    { name: 'White',    image: 'ic1.png' },
    { name: 'Light Blue',image: 'ic2.png' },
    { name: 'Red',      image: 'ic3.png' },
    { name: 'Grey',     image: 'ic4.png' },
  ],

  // 2009 Sublimation Polo
  // "s1 (N)" = Sublimation variant N (numbered with parentheses = sublimation series)
  '2009': [
    { name: 'White',    image: 'sublimation-polo-tshirt.png' },
    { name: 'Black',    image: 's1 (1).png' },
    { name: 'Red',      image: 's1 (2).png' },
    { name: 'Grey',     image: 's1 (3).png' },
    { name: 'Orange',   image: 's1(4).png' },
  ],

  // ─── UNIFORMS ─────────────────────────────────────────────────
  // 3001 Corporate Uniform
  // "cu" = Corporate Uniform
  '3001': [
    { name: 'Navy Blue',image: 'Corporate-Uniform.png' },
    { name: 'Light Blue',image: 'Corporate-Uniform  (1).png' },
    { name: 'Grey',     image: 'Corporate-Uniform  (5).png' },
    { name: 'Navy Blue',image: 'cu1 (1).png' },
    { name: 'Maroon',   image: 'cu1 (2).png' },
    { name: 'Black',    image: 'cu1(3).png' },
    { name: 'White',    image: 'cu1(4).png' },
    { name: 'Dark Grey',image: 'cu1(5).png' },
  ],

  // 3002 Pant & Shirt Uniform
  // "PS" = Pant Shirt
  '3002': [
    { name: 'Light Blue',image: 'Pant-Shirt-Uniform.png' },
    { name: 'White',    image: 'PS1.png' },
    { name: 'Maroon',   image: 'PS2.png' },
    { name: 'Black',    image: 'PS3.png' },
    { name: 'Grey',     image: 'PS4.png' },
  ],

  // 3003 Blazer
  // "b" = Blazer
  '3003': [
    { name: 'Navy Blue',image: 'Blazer.png' },
    { name: 'White',    image: 'b2.png' },
    { name: 'Light Grey',image: 'b3.png' },
    { name: 'Dark Grey',image: 'b4.png' },
    { name: 'Black',    image: 'b5.png' },
  ],

  // 3004 Team Uniform
  // "tu" = Team Uniform
  '3004': [
    { name: 'Teal',     image: 'Team-Uniform.png' },
    { name: 'Blue',     image: 'tu1 (1).png' },
    { name: 'White',    image: 'tu1 (2).png' },
    { name: 'Navy Blue',image: 'tu1 (3).png' },
    { name: 'Grey',     image: 'tu1 (4).png' },
  ],

  // 3005 Waistcoat
  // "w" = Waistcoat
  '3005': [
    { name: 'Black',    image: 'Waistcoat.png' },
    { name: 'Red',      image: 'w1.png' },
    { name: 'Grey',     image: 'w2.png' },
    { name: 'Navy Blue',image: 'w3.png' },
    { name: 'Light Blue',image: 'w4.png' },
  ],

  // 3006 Medical Uniform
  // "medical" = Medical
  '3006': [
    { name: 'Light Blue',image: 'Medical-Uniform.png' },
    { name: 'White',    image: 'medical1.png' },
  ],

  // 3007 Security Uniform
  // "s1.png", "s2.png" = Security (single-word, no parentheses = security series)
  '3007': [
    { name: 'Light Blue',image: 'Security-Uniform.png' },
    { name: 'Black',    image: 's1.png' },
    { name: 'Grey',     image: 's2.png' },
  ],

  // 3008 Housekeeping Uniform
  // "h" = Housekeeping
  '3008': [
    { name: 'Grey',     image: 'house-keeping.png' },
    { name: 'Navy Blue',image: 'h1.png' },
    { name: 'White',    image: 'h2.png' },
  ],
};

// Build final output — deduplicate by color name, resolve hex
const finalOutput = {};
for (const [code, items] of Object.entries(mapping)) {
  const seen = new Set();
  finalOutput[code] = [];
  for (const item of items) {
    if (!seen.has(item.name)) {
      seen.add(item.name);
      finalOutput[code].push({
        name: item.name,
        hex: colorHex[item.name] || '#000000',
        imageUrl: '/images/' + item.image
      });
    }
  }
}

fs.writeFileSync('src/data/colorMapping.json', JSON.stringify(finalOutput, null, 2));
console.log('Done! Strict abbreviation-based mapping written.');
