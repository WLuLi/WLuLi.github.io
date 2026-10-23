import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const option = (name, fallback) => process.argv.find(arg => arg.startsWith(`--${name}=`))?.slice(name.length + 3) ?? fallback;
const port = Number(option('port', '8770'));
const host = option('host', '127.0.0.1');
if (!Number.isInteger(port) || port < 0 || port > 65535) throw new Error('Invalid port');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' };

const server = http.createServer((request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) return response.writeHead(405).end();
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
  catch { return response.writeHead(400).end(); }
  const candidate = path.resolve(root, `.${pathname}`, pathname.endsWith('/') ? 'index.html' : '');
  fs.realpath(candidate, (error, real) => {
    if (error || !real.startsWith(root) || !types[path.extname(real)]) return response.writeHead(404).end('Not found');
    fs.stat(real, (error, stat) => {
      if (error || !stat.isFile()) return response.writeHead(404).end('Not found');
      response.writeHead(200, { 'Content-Type': types[path.extname(real)], 'Content-Length': stat.size, 'X-Content-Type-Options': 'nosniff' });
      if (request.method === 'HEAD') response.end();
      else fs.createReadStream(real).on('error', () => response.destroy()).pipe(response);
    });
  });
});
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, host, () => console.log(`READY http://${host}:${server.address().port}/AlphaAnything/`));
