const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'build', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Replace paths with the correct GitHub Pages path
content = content.replace(/\/assets\//g, './assets/');

fs.writeFileSync(indexPath, content, 'utf8');