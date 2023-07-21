const http = require("http");
const fs = require("fs");
const port = 3000;
const url = require("url");

const server = http.createServer((req, res) => {
  const { qyery, pathname } = url.parse(req.url, true);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const overview = fs.readFileSync(
    "./starter/templates/overview.html",
    "utf-8"
  );
  const product = fs.readFileSync("./starter/templates/product.html", "utf-8");
  //   console.log(overview);
  if (pathname === "/" || pathname === "overview") {
    res.write(overview);
    // res.end();
  } else if (pathname === "/product") {
    res.write(product);
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>PAGE 404</h1>");
  }
  res.end();
});

server.listen(port, "127.0.0.1", function () {
  console.log(`http://localhost:${port}`);
});
