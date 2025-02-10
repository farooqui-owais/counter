import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const indexPath = join(__dirname, 'build', 'index.html');
let content = readFileSync(indexPath, 'utf8');

// Replace paths with the correct GitHub Pages path
content = content.replace(/\/assets\//g, './assets/');

writeFileSync(indexPath, content, 'utf8');