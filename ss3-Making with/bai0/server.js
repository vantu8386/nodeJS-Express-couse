const http = require("http");
const port = 3000;
const fs = require("fs");
const nodeStatic = require("node-static");
const file = new nodeStatic.Server("./public");

const server = http.createServer((req, res) => {
  file.serve(req, res);
  //   // tạo ra 3 file (firtData, midData, lastData) txt trong folder conten còng cấp với file server
  //   // 1. đọc dữ liệu từ 3 file đó
  //   // 2. ghi dữ liệu vào 3 file vào 1 file mới là finalData
  //   //   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const firtData = fs.readFileSync("./txt/firtData.txt", "utf-8");
  //   //   res.write(firtData);
  const midData = fs.readFileSync("./txt/midData.txt", "utf-8");
  //   //   res.write(midData);
  const lastData = fs.readFileSync("./txt/lastData.txt", "utf-8");
  //   //   res.write(lastData);
  //   //   res.end();

  // let data = `${firtData}  ${midData}  ${lastData}`;
  // fs.writeFileSync("./txt/finalData.txt", data);
  // console.log("=====", data);

  let readContentHTML = fs.readFileSync("./views/content.html", "utf-8");
  //   console.log(readContentHTML);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write(readContentHTML);
  res.end();
  console.log(firtData);
  //   update theem string vf luuw laij
  let newData = "talking abount product";
  let newFirtData = `${firtData} is ${newData} `;
  console.log(newFirtData);
  fs.writeFileSync("./txt/firtData.txt", newFirtData);
});

server.listen(port, "127.0.0.1", function () {
  console.log(`http://localhost:${port}`);
});
