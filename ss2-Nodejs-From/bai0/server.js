const http = require("http");
const port = 3000;
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const getForm = fs.readFileSync("./views/get-form.html", "utf-8");
  const postForm = fs.readFileSync("./views/get-form.html", "utf-8");
  //   console.log(getForm);
  res.write(postForm);
  res.end();

  let qq = url.parse(req.url, true);
  console.log(req);
  if (req.method === "POST") {
    let data = "";
    req
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        data += chunk.toString("utf8");
      })
      .on("end", () => {
        console.log(decodeURIComponent(data));
      });
  }
});

server.listen(port, function () {
  console.log(`http://localhost:${port}`);
});
