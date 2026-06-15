// Minimal zero-dependency static file server for Railway / any Node host.
// Serves the files in this directory and binds to the platform's $PORT.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
};

const server = http.createServer((req, res) => {
  // Strip query string, decode, and prevent path traversal.
  let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";

  const filePath = path.join(ROOT, path.normalize(urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fall back to index.html so the single-page site still loads.
      fs.readFile(path.join(ROOT, "index.html"), (e2, home) => {
        if (e2) {
          res.writeHead(404);
          return res.end("Not found");
        }
        res.writeHead(200, { "Content-Type": TYPES[".html"] });
        res.end(home);
      });
      return;
    }
    const type = TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Little Riders site running on port ${PORT}`);
});
