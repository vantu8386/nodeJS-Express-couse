// const http = require("http");
// const url = require("url");
// const port = 3000;

// const server = http.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   if (pathname === "/" || pathname === "/home") {
//     res.write("<h1> chào các con vợ 111 </h1>");
//   } else if (pathname === "/products") {
//     res.write("<h1> chào các con vợ 222 </h1>");
//   } else if (pathname === "/contact") {
//     res.write("<h1> chào các con vợ 333 </h1>");

//   } else {
//     res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
//     res.write("<h1> 404 error </h1>");

//   }
//   res.end();
// });

// server.listen(port, "127.0.0.1", function () {
//   console.log(`listening on port ${port}`);
// });

// =================================================================

// const http = require("http");
// const fs = require("fs");
// const port = 3000;

// const server = http.createServer((req, res) => {
//   //   readFileSync - read-this.txt
//   const readThis = fs.readFileSync("./starter/txt/read-this.txt", "utf8");

//   console.log("read-this.txt content:", readThis);
//   res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//   res.write(`${readThis} <br> <br>`);
//   //readFileSync - input.txt
//   const input = fs.readFileSync("./starter/txt/input.txt", "utf8");
//   console.log("input.txt content:", input);
//   res.write(input);

//   //readFileSync - append.txt
//   const append = fs.readFileSync("./starter/txt/append.txt", "utf8");
//   console.log("append.txt content:", append);
//   res.write(append);
//   res.end();
//   //concat input + append => data
//   let data = input + "\n" + append;
//   //writeFileSync => final.txt
//   fs.writeFileSync("./starter/txt/final.txt", data);
//   console.log(
//     "final.txt content:",
//     fs.readFileSync("./starter/txt/final.txt", "utf8")
//   );
// });

// server.listen(port, "127.0.0.1", function () {
//   console.log(`listening on port ${port}`);
// });

// =================================================================

// const http = require("http");
// const fs = require("fs");
// const { error } = require("console");
// const port = 3000;

// const server = http.createServer((req, res) => {
//   const returnData = (error, data) => {
//     console.log("data" + data);
//     console.log("error" + error);
//   };

//   const dataFolder = fs.readFile(
//     "./starter/txt/read-this.txt",
//     "utf8",
//     (error, data) => {
//       console.log("data" + data);
//       console.log("error" + error);
//     }
//   );
//   console.log("append.txt content:", dataFolder);
//   // res.write(dataFolder);
//   // res.end();
//   // const dataInput = fs.readFile(
//   //   "./starter/txt/input.txt",
//   //   "utf8",
//   //   returnData
//   // );
//   // console.log("append.txt content:", dataInput);
//   // res.write(dataInput);
//   // res.end();
//   // const dataAppend = fs.readFile(
//   //   "./starter/txt/append.txt",
//   //   "utf8",
//   //   returnData
//   // );
//   // console.log("append.txt content:", dataAppend);
//   // res.write(dataAppend);
//   // res.end();
// });

// server.listen(port, "127.0.0.1", function () {
//   console.log(`listening on port ${port}`);
// });
