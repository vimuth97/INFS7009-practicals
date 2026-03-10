const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const html = fs.readFileSync("./index.html");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (req.url === "/register") {
    const html = fs.readFileSync("./register.html");

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else if (req.url === "/styles.css") {
    const css = fs.readFileSync("./styles.css");

    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
