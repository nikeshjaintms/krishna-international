import fs from 'fs';
import path from 'path';

export default function DebugPage() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const files = fs.readdirSync(imagesDir).filter(f => f.match(/\.(png|jpe?g)$/i));

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {files.map(file => (
        <div key={file} style={{ width: '150px', border: '1px solid #ccc', padding: '10px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/images/${file}`} alt={file} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
          <p style={{ fontSize: '10px', wordBreak: 'break-all', textAlign: 'center' }}>{file}</p>
        </div>
      ))}
    </div>
  );
}
