const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  const dataJson = fs.readFileSync("./starter/dev-data/data.json", "utf8");
  const dataObject = JSON.parse(dataJson);
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  const { query, pathname } = url.parse(req.url, true);
  if (pathname === "/") {
    res.write("<h1>This is homepage</h1>");
  } else if (pathname === "/overview") {
    res.write("<h1>This is overview page</h1>");
  } else if (pathname === "/product") {
    res.write("<h1>This is product page</h1>");
  } else {
    const pathArr = pathname.split("/");
    let id = pathArr[pathArr.length - 1];
    let data = dataObject.find((data) => data.id == id);
    if (data) {
      res.write(JSON.stringify(data));
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1> PAGE NOT FOUND</h1>");
    }
  }
  res.end();
});

server.listen(port, "127.0.0.1", function () {
  console.log(`http://localhost:${port}`);
});
