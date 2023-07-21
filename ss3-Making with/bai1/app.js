const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

  //  đọc file overview.html
  const overview = fs
    .readFileSync("./starter/templates/overview.html")
    .toString();

  //   đọc file cart
  const cartTemplate = fs
    .readFileSync("./starter/templates/card-template.html")
    .toString();

  // đọc file product
  const productTemplate = fs
    .readFileSync("./starter/templates/product.html")
    .toString();

    // đọc dữ liệu từ search
    // const searchTemplate = fs.readFileSync("")

  // đọc dữ liệu file data.json
  const dataJson = fs.readFileSync("./starter/dev-data/data.json").toString();

  if (req.url === "/" || req.url === "/overview") {
    // đọc file data.json
    fs.readFile("./starter/dev-data/data.json", (err, results) => {
      // keets quar trả về
      // thất bại
      if (err) throw err;
      //   thành công
      // tiến hành có dũ liệu vào trong file cart-template
      const listFruit = JSON.parse(results);
      const fruitData = listFruit
        .map((fruit) => {
          return cartTemplate
            .replace(/{{image}}/g, fruit.image)
            .replace("{{productName}}", fruit.productName)
            .replace("{{price}}", fruit.price)
            .replace("{{quantity}}", fruit.quantity)
        })
        .join("");
      const htmls = overview + fruitData; // nối chuỗi
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.statusCode = 200;
      res.write(htmls);
      res.end();
    });
  } else if (req.url.startsWith === "/product") {
    // lấy id trên url
    const idUrl = req.url.split("/")[2];
    // kiểm tra xem id lấy url có tồn tại bên trong db
    const product = JSON.parse(dataJson).find((pr) => pr.id === +idUrl);
    // gán lại giá trị cho các thông tin
    const productData = productTemplate
      .replace(/{{image}}/g, product.image)
      .replace("{{productName}}", product.productName)
      .replace("{{from}}", product.from)
      .replace("{{nutrients}}", product.nutrients)
      .replace("{{quantity}}", product.quantity)
      .replace(/{{price}}/g, product.price)
      .replace("{{description}}", product.description)
      .replace("{{organic}}", product.organic ? "organic" : "");

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(productData);
    res.end();
  } else if (req.url.startsWith === "/search") {
    const searchTemplate = fs
      .readFileSync("./starter/templates/search.html")
      .toString();

    res.write(searchTemplate);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1> PAGE NOT FOUND</h1>");
  }
  res.end();
});

server.listen(port, "127.0.0.1", function () {
  console.log(`http://localhost:${port}`);
});



