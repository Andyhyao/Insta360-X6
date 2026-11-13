// Injects the server-rendered app into dist/index.html so the hero (the LCP element)
// paints before the JavaScript bundle has loaded. Run after both Vite builds.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const { render } = await import(pathToFileURL(`${root}dist-ssr/entry-server.js`).href);

const htmlPath = `${root}dist/index.html`;
const html = await readFile(htmlPath, 'utf8');
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error('prerender: #root placeholder not found in dist/index.html');

await writeFile(htmlPath, html.replace(marker, `<div id="root">${render()}</div>`));
await rm(`${root}dist-ssr`, { recursive: true, force: true });
console.log('prerender: dist/index.html updated');
