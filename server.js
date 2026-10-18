const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
const root = path.join(__dirname, 'dist');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};
http.createServer((req,res)=>{const clean = decodeURIComponent(req.url.split('?')[0]); const file = path.join(root, clean === '/' ? 'index.html' : clean); const safe = file.startsWith(root) ? file : path.join(root,'index.html'); fs.readFile(safe,(err,data)=>{if(err){fs.readFile(path.join(root,'index.html'),(e,d)=>{res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(d)});return;} res.writeHead(200,{'Content-Type':types[path.extname(safe)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(data);});}).listen(port,'0.0.0.0',()=>console.log(`AI FREE mini app listening on ${port}`));
