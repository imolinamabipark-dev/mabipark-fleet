/**
 * copy-vendor.js
 * Copia socket.io-client al directorio www/js para que la app web lo use.
 * Ejecutar con: node scripts/copy-vendor.js
 */
const fs   = require('fs');
const path = require('path');

const src  = path.join(__dirname, '..', 'node_modules', 'socket.io-client', 'dist', 'socket.io.min.js');
const dest = path.join(__dirname, '..', 'www', 'js', 'socket.io.min.js');

if (!fs.existsSync(src)) {
  console.error('❌ socket.io-client no está instalado. Corré npm install primero.');
  process.exit(1);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);

const kb = Math.round(fs.statSync(dest).size / 1024);
console.log(`✅ socket.io.min.js copiado a www/js/ (${kb} KB)`);
