const fs = require('fs');
const path = require('path');
const imagesDir = path.join(process.cwd(), 'public', 'images');
const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(png|jpe?g)$/i));

let html = '<html><body style="display:flex; flex-wrap:wrap;">';
html += '<div style="border:3px solid red; margin:10px;"><h2>DF Model</h2><img src="/images/df.png" width="150"/></div>';

for (const file of files) {
  if (!file.match(/\d/)) { 
    html += '<div style="margin:10px;"><b>' + file + '</b><br/><img src="/images/' + file + '" width="150"/></div>';
  }
}
html += '</body></html>';
fs.writeFileSync('public/df-search.html', html);
console.log('Created public/df-search.html');
