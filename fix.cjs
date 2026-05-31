const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');
const beforeMarker = '<div className="flex-shrink-0 flex items-center gap-3">';
const afterMarker = '<div className="hidden md:flex items-center gap-8">';

const beforeIdx = content.indexOf(beforeMarker);
const afterIdx = content.indexOf(afterMarker);

if (beforeIdx !== -1 && afterIdx !== -1) {
  const newContent = content.slice(0, beforeIdx + beforeMarker.length) +
    '\n            <img id="logo" src="/logo.png" alt="OmegaWeb" className="h-8 w-auto grayscale brightness-200" />\n' +
    '            <span className="font-display text-xl font-bold tracking-tight text-[#FF5A23] uppercase">OMEGAWEB</span>\n          </div>\n          ' +
    content.slice(afterIdx);
  fs.writeFileSync('src/App.tsx', newContent);
  console.log('Fixed src/App.tsx successfully');
} else {
  console.log('Markers not found', { beforeIdx, afterIdx });
}
